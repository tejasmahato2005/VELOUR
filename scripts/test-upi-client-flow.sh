#!/usr/bin/env bash
# ============================================================================
# VELOUR — UPI payment client-path security test
#
# Exercises the REAL PostgREST path with a REAL user JWT (the same path the
# browser SDK uses), to prove that a signed-in customer cannot:
#   * create an order that is already paid
#   * mark their own order paid
#   * read another customer's order
#   * call the admin verification function
#
# The test user's access token is written to a file and never echoed, so it
# does not land in the transcript or shell history.
# ============================================================================
set -uo pipefail

BASE="https://xvxe4eek.ap-southeast.insforge.app"
ANON="anon_3a0363ccf70dd37aa1aa1ba5c37d483ba09c3e687059eec70d8a4508a41cb5d2"
EMAIL="velour.upi.test@example.com"
PASSWORD="VelourTest!2026"
TOKEN_FILE=$(mktemp /tmp/velour-jwt.XXXXXX)
chmod 600 "$TOKEN_FILE"
trap 'rm -f "$TOKEN_FILE"' EXIT

ORDERS="$BASE/api/database/records/orders"

# --- 1. Sign in, capture the access token to file ---------------------------
curl -s -X POST "$BASE/api/auth/sessions" \
  -H "Authorization: Bearer $ANON" -H "apikey: $ANON" \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"$EMAIL\",\"password\":\"$PASSWORD\"}" \
  -o "$TOKEN_FILE"

if ! grep -q accessToken "$TOKEN_FILE"; then
  echo "FAIL: could not sign in as test user"
  python3 -c "import json,sys; d=json.load(open('$TOKEN_FILE')); print(d.get('error') or d.get('message') or d)" 2>/dev/null
  exit 1
fi
JWT=$(python3 -c "import json; print(json.load(open('$TOKEN_FILE'))['accessToken'])")
USER_ID=$(python3 -c "import json; print(json.load(open('$TOKEN_FILE'))['user']['id'])")
echo "Signed in as test user $USER_ID (token stored in file, not printed)"
echo

# --- 2. Insert an order that CLAIMS to be confirmed/paid -------------------
echo "TEST A: client INSERT claiming status=confirmed, payment_status=paid"
INSERT=$(curl -s -X POST "$ORDERS" \
  -H "Authorization: Bearer $JWT" -H "apikey: $ANON" \
  -H "Content-Type: application/json" -H "Prefer: return=representation" \
  -d "{\"user_id\":\"$USER_ID\",\"items\":[{\"productId\":\"silk-slip-dress\",\"name\":\"Silk Slip Dress\",\"size\":\"M\",\"qty\":1,\"price\":1}],\"subtotal\":1,\"shipping\":0,\"total\":1,\"status\":\"confirmed\",\"payment_status\":\"paid\",\"payment_method\":\"upi\",\"contact\":{\"name\":\"VELOUR UPI Test\",\"email\":\"$EMAIL\"},\"shipping_address\":{\"street\":\"1 Test St\",\"city\":\"Mumbai\",\"zip\":\"400001\",\"country\":\"India\"}}")

ORDER_ID=$(printf '%s' "$INSERT" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d[0]['id'] if isinstance(d,list) and d else '')" 2>/dev/null)
printf '%s' "$INSERT" | python3 -c "
import sys,json
d=json.load(sys.stdin)
r=d[0] if isinstance(d,list) and d else d
if not isinstance(r,dict) or 'status' not in r:
    print('  FAIL: unexpected insert response:', r); raise SystemExit(1)
print('  stored status         =', r['status'])
print('  stored payment_status =', r['payment_status'])
print('  stored payment_method =', r['payment_method'])
print('  stored total          =', r['total'])
assert r['status']=='pending', 'TEST A FAIL: status not forced to pending'
assert r['payment_status']=='unpaid', 'TEST A FAIL: payment_status not forced to unpaid'
assert r['payment_method']=='upi', 'TEST A FAIL: payment_method not upi'
print('  PASS: insert forced pending/unpaid/upi')
" || exit 1
echo

# --- 3. Try to mark it paid -------------------------------------------------
echo "TEST B: client UPDATE setting payment_status=paid, status=confirmed"
UPD=$(curl -s -w '\n__STATUS:%{http_code}' -X PATCH "$ORDERS?id=eq.$ORDER_ID" \
  -H "Authorization: Bearer $JWT" -H "apikey: $ANON" \
  -H "Content-Type: application/json" -H "Prefer: return=representation" \
  -d '{"payment_status":"paid","status":"confirmed"}')
printf '%s' "$UPD" | python3 -c "
import sys,json
raw=sys.stdin.read()
body,_,status=raw.rpartition('__STATUS:')
status=status.strip()
d=json.loads(body) if body.strip() else []
print('  HTTP', status, '| rows returned:', len(d) if isinstance(d,list) else 'n/a')
assert status.startswith('2') and (isinstance(d,list) and len(d)==0), 'TEST B FAIL: client update was accepted'
print('  PASS: client UPDATE affected 0 rows')
" || exit 1
echo

# --- 4. Read the order back -------------------------------------------------
echo "TEST C: client reads its own order back (RLS SELECT)"
SEL=$(curl -s "$ORDERS?id=eq.$ORDER_ID&select=id,status,payment_status,payment_method,total" \
  -H "Authorization: Bearer $JWT" -H "apikey: $ANON")
printf '%s' "$SEL" | python3 -c "
import sys,json
d=json.load(sys.stdin)
assert len(d)==1, 'TEST C FAIL: own order not readable'
r=d[0]
print('  status=%s payment_status=%s payment_method=%s total=%s' % (r['status'],r['payment_status'],r['payment_method'],r['total']))
assert r['payment_status']=='unpaid' and r['status']=='pending', 'TEST C FAIL: order was marked paid'
print('  PASS: order readable by owner and still pending/unpaid')
" || exit 1
echo

# --- 5. Call the admin verification function --------------------------------
echo "TEST D: client calls verify_order_payment RPC"
RPC=$(curl -s -w '\n__STATUS:%{http_code}' -X POST "$BASE/api/database/rpc/verify_order_payment" \
  -H "Authorization: Bearer $JWT" -H "apikey: $ANON" \
  -H "Content-Type: application/json" \
  -d "{\"p_order_id\":\"$ORDER_ID\"}")
printf '%s' "$RPC" | python3 -c "
import sys,json
raw=sys.stdin.read()
body,_,status=raw.rpartition('__STATUS:')
status=status.strip()
try:
    msg=json.loads(body).get('message','')
except Exception:
    msg=body.strip()[:160]
print('  HTTP', status, '|', msg)
assert not status.startswith('2'), 'TEST D FAIL: client executed the admin verification function'
print('  PASS: verify_order_payment denied for client')
" || exit 1
echo

# --- 6. Confirm the order is STILL unpaid after every attempt ---------------
echo "TEST E: final state read by admin"
python3 - "$ORDER_ID" <<'PY'
import json,subprocess,sys
order_id=sys.argv[1]
out=subprocess.run(["npx","-y","@insforge/cli","db","query",
    f"SELECT status, payment_status, payment_method FROM public.orders WHERE id='{order_id}'"],
    capture_output=True,text=True,cwd=".")
print("  "+ "\n  ".join(l for l in out.stdout.splitlines() if "pending" in l or "|" in l)[-400:])
PY
echo
echo "ALL CLIENT-PATH TESTS PASSED (order id: $ORDER_ID)"
