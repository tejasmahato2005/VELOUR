(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/free claude code/app/profile/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProfilePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/free claude code/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/free claude code/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/free claude code/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/free claude code/lib/format.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$lib$2f$insforge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/free claude code/lib/insforge.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$lib$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/free claude code/lib/store.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const STATUS_ORDER = [
    "pending",
    "paid",
    "shipped",
    "delivered"
];
function OrderRow({ order }) {
    const currentIndex = STATUS_ORDER.indexOf(order.status);
    const itemCount = order.items.reduce((a, i)=>a + i.qty, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            border: "1px solid var(--border-light)",
            borderRadius: 10,
            padding: "20px",
            marginBottom: "20px",
            backgroundColor: "var(--bg-primary)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "start",
                    gap: "16px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            minWidth: 140
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontWeight: 600,
                                    letterSpacing: "0.05em"
                                },
                                children: order.id
                            }, void 0, false, {
                                fileName: "[project]/free claude code/app/profile/page.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: "0.82rem",
                                    color: "var(--text-muted)",
                                    marginTop: "4px"
                                },
                                children: new Date(order.created_at).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric"
                                })
                            }, void 0, false, {
                                fileName: "[project]/free claude code/app/profile/page.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/free claude code/app/profile/page.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: "1.1rem",
                            fontWeight: 600,
                            fontVariantNumeric: "tabular-nums"
                        },
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["money"])(order.total)
                    }, void 0, false, {
                        fileName: "[project]/free claude code/app/profile/page.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/free claude code/app/profile/page.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: "18px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: "0.72rem",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "var(--text-muted)",
                            marginBottom: "10px"
                        },
                        children: [
                            "Items (",
                            itemCount,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/free claude code/app/profile/page.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: "10px",
                            flexWrap: "wrap"
                        },
                        children: order.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: "8px",
                                    alignItems: "center",
                                    backgroundColor: "var(--bg-subtle)",
                                    borderRadius: 8,
                                    padding: "6px 10px",
                                    fontSize: "0.82rem"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontWeight: 600
                                        },
                                        children: item.name
                                    }, void 0, false, {
                                        fileName: "[project]/free claude code/app/profile/page.tsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: "var(--text-muted)"
                                        },
                                        children: [
                                            "· Size ",
                                            item.size
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/free claude code/app/profile/page.tsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: "var(--text-muted)"
                                        },
                                        children: [
                                            "· Qty ",
                                            item.qty
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/free claude code/app/profile/page.tsx",
                                        lineNumber: 49,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, `${item.productId}-${item.size}`, true, {
                                fileName: "[project]/free claude code/app/profile/page.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/free claude code/app/profile/page.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/free claude code/app/profile/page.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: "24px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: "0.72rem",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "var(--text-muted)",
                            marginBottom: "10px"
                        },
                        children: "Order Status"
                    }, void 0, false, {
                        fileName: "[project]/free claude code/app/profile/page.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            position: "relative"
                        },
                        children: STATUS_ORDER.map((status, idx)=>{
                            const isCurrent = idx === currentIndex;
                            const isDone = idx < currentIndex;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center"
                                },
                                children: [
                                    idx > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "absolute",
                                            left: `calc(${(idx - 1) / (STATUS_ORDER.length - 1) * 100}% + 14px)`,
                                            top: "26px",
                                            width: `calc(${100 / (STATUS_ORDER.length - 1)}% - 28px)`,
                                            height: "2px",
                                            backgroundColor: isDone || isCurrent ? "var(--text-primary)" : "var(--border-light)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/free claude code/app/profile/page.tsx",
                                        lineNumber: 64,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: "28px",
                                            height: "28px",
                                            borderRadius: "50%",
                                            border: `2px solid ${isDone || isCurrent ? "var(--text-primary)" : "var(--border-light)"}`,
                                            backgroundColor: isDone ? "var(--text-primary)" : isCurrent ? "var(--accent-gold-dark)" : "var(--bg-primary)",
                                            color: isDone || isCurrent ? "var(--bg-primary)" : "var(--border-light)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "0.85rem",
                                            fontWeight: 700,
                                            zIndex: 2
                                        },
                                        children: isDone ? "✓" : String(idx + 1)
                                    }, void 0, false, {
                                        fileName: "[project]/free claude code/app/profile/page.tsx",
                                        lineNumber: 66,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginTop: "6px",
                                            fontSize: "0.72rem",
                                            fontWeight: 600,
                                            textTransform: "uppercase",
                                            letterSpacing: "0.04em",
                                            color: isDone || isCurrent ? "var(--text-primary)" : "var(--text-muted)",
                                            whiteSpace: "nowrap"
                                        },
                                        children: status
                                    }, void 0, false, {
                                        fileName: "[project]/free claude code/app/profile/page.tsx",
                                        lineNumber: 69,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, status, true, {
                                fileName: "[project]/free claude code/app/profile/page.tsx",
                                lineNumber: 62,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/free claude code/app/profile/page.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/free claude code/app/profile/page.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/free claude code/app/profile/page.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_c = OrderRow;
function ProfilePage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { clearCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$lib$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [orders, setOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [signingOut, setSigningOut] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfilePage.useEffect": ()=>{
            let cancelled = false;
            ({
                "ProfilePage.useEffect": async ()=>{
                    const me = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$lib$2f$insforge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUser"])();
                    if (cancelled) return;
                    if (!me) {
                        router.push("/login");
                        return;
                    }
                    setUser({
                        id: me.id,
                        email: me.email,
                        name: me.profile?.name ?? undefined
                    });
                    try {
                        const { data, error: err } = await __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$lib$2f$insforge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insforge"].database.from("orders").select("*").eq("user_id", me.id).order("created_at", {
                            ascending: false
                        });
                        if (cancelled) return;
                        if (err) {
                            setError(err.message || "Could not load orders.");
                        } else {
                            setOrders(data || []);
                        }
                    } catch  {
                        setError("Could not load orders.");
                    } finally{
                        setLoading(false);
                    }
                }
            })["ProfilePage.useEffect"]();
            return ({
                "ProfilePage.useEffect": ()=>{
                    cancelled = true;
                }
            })["ProfilePage.useEffect"];
        }
    }["ProfilePage.useEffect"], [
        router,
        __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$lib$2f$insforge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insforge"]
    ]);
    const handleSignOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProfilePage.useCallback[handleSignOut]": async ()=>{
            setSigningOut(true);
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$lib$2f$insforge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insforge"].auth.signOut();
                clearCart();
                router.push("/login");
            } catch  {
                setSigningOut(false);
            }
        }
    }["ProfilePage.useCallback[handleSignOut]"], [
        clearCart,
        router,
        __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$lib$2f$insforge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insforge"]
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "section",
            style: {
                minHeight: "60vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "subheading",
                children: "Loading your profile..."
            }, void 0, false, {
                fileName: "[project]/free claude code/app/profile/page.tsx",
                lineNumber: 136,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/free claude code/app/profile/page.tsx",
            lineNumber: 135,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "section",
            style: {
                minHeight: "60vh",
                display: "flex",
                alignItems: "center"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-narrow",
                style: {
                    textAlign: "center"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: "var(--accent-red)"
                        },
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/free claude code/app/profile/page.tsx",
                        lineNumber: 145,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setError(null),
                        className: "btn btn-primary",
                        style: {
                            marginTop: "16px"
                        },
                        children: "Try again"
                    }, void 0, false, {
                        fileName: "[project]/free claude code/app/profile/page.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/free claude code/app/profile/page.tsx",
                lineNumber: 144,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/free claude code/app/profile/page.tsx",
            lineNumber: 143,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "section",
        style: {
            paddingTop: "32px"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-narrow",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    style: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "32px",
                        flexWrap: "wrap",
                        gap: "16px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "subheading",
                                    children: "Client Portal"
                                }, void 0, false, {
                                    fileName: "[project]/free claude code/app/profile/page.tsx",
                                    lineNumber: 159,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "heading-display",
                                    style: {
                                        marginTop: "6px"
                                    },
                                    children: "My Account"
                                }, void 0, false, {
                                    fileName: "[project]/free claude code/app/profile/page.tsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/free claude code/app/profile/page.tsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleSignOut,
                            disabled: signingOut,
                            className: "btn btn-primary",
                            style: {
                                padding: "10px 20px",
                                fontSize: "0.82rem"
                            },
                            children: signingOut ? "Signing out…" : "Sign Out"
                        }, void 0, false, {
                            fileName: "[project]/free claude code/app/profile/page.tsx",
                            lineNumber: 162,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/free claude code/app/profile/page.tsx",
                    lineNumber: 157,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        backgroundColor: "var(--bg-surface)",
                        border: "1px solid var(--border-light)",
                        padding: "24px",
                        marginBottom: "32px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                gap: "14px",
                                marginBottom: "12px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        width: "44px",
                                        height: "44px",
                                        borderRadius: "50%",
                                        backgroundColor: "var(--bg-subtle)",
                                        display: "inline-flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontWeight: 600,
                                        fontSize: "1.1rem",
                                        color: "var(--text-primary)"
                                    },
                                    children: (user?.name ?? user?.email)?.charAt(0)?.toUpperCase() ?? "?"
                                }, void 0, false, {
                                    fileName: "[project]/free claude code/app/profile/page.tsx",
                                    lineNumber: 169,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontWeight: 600,
                                                fontSize: "1rem"
                                            },
                                            children: user?.name || user?.email
                                        }, void 0, false, {
                                            fileName: "[project]/free claude code/app/profile/page.tsx",
                                            lineNumber: 173,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: "0.82rem",
                                                color: "var(--text-muted)"
                                            },
                                            children: user?.email
                                        }, void 0, false, {
                                            fileName: "[project]/free claude code/app/profile/page.tsx",
                                            lineNumber: 174,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/free claude code/app/profile/page.tsx",
                                    lineNumber: 172,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/free claude code/app/profile/page.tsx",
                            lineNumber: 168,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: "0.82rem",
                                color: "var(--text-muted)"
                            },
                            children: "Manage your personal details and view your order history below."
                        }, void 0, false, {
                            fileName: "[project]/free claude code/app/profile/page.tsx",
                            lineNumber: 177,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/free claude code/app/profile/page.tsx",
                    lineNumber: 167,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "heading-3",
                    style: {
                        borderBottom: "1px solid var(--border-light)",
                        paddingBottom: "12px",
                        marginBottom: "20px"
                    },
                    children: "Order History"
                }, void 0, false, {
                    fileName: "[project]/free claude code/app/profile/page.tsx",
                    lineNumber: 180,
                    columnNumber: 9
                }, this),
                orders.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: "center",
                        padding: "48px 0",
                        color: "var(--text-muted)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "No orders yet."
                        }, void 0, false, {
                            fileName: "[project]/free claude code/app/profile/page.tsx",
                            lineNumber: 184,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                marginTop: "12px",
                                fontSize: "0.85rem"
                            },
                            children: "Your placed orders will appear here with their current status."
                        }, void 0, false, {
                            fileName: "[project]/free claude code/app/profile/page.tsx",
                            lineNumber: 185,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/free claude code/app/profile/page.tsx",
                    lineNumber: 183,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        orders.map((order)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OrderRow, {
                                order: order
                            }, order.id, false, {
                                fileName: "[project]/free claude code/app/profile/page.tsx",
                                lineNumber: 190,
                                columnNumber: 15
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: "24px",
                                fontSize: "0.82rem",
                                color: "var(--text-muted)"
                            },
                            children: "Order statuses are updated by our operations team. Paid → Shipped → Delivered reflect the fulfillment progress of each order."
                        }, void 0, false, {
                            fileName: "[project]/free claude code/app/profile/page.tsx",
                            lineNumber: 192,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/free claude code/app/profile/page.tsx",
                    lineNumber: 188,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/free claude code/app/profile/page.tsx",
            lineNumber: 156,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/free claude code/app/profile/page.tsx",
        lineNumber: 155,
        columnNumber: 5
    }, this);
}
_s(ProfilePage, "hqVD+/B6eXSVzGQwBTc+TXYIDuE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$lib$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c1 = ProfilePage;
var _c, _c1;
__turbopack_context__.k.register(_c, "OrderRow");
__turbopack_context__.k.register(_c1, "ProfilePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=free%20claude%20code_app_profile_page_tsx_1gxkds-sqxsep._.js.map