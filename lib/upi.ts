/**
 * UPI / Google Pay helpers for the VELOUR checkout.
 *
 * The merchant (UPI ID + payee name) is configured through environment
 * variables so the credentials are never hardcoded:
 *
 *   NEXT_PUBLIC_UPI_ID          — the receiving UPI ID, e.g. name@bank
 *   NEXT_PUBLIC_UPI_PAYEE_NAME — the name shown in the customer's UPI app
 *
 * Both are read at build time (Next.js inlines NEXT_PUBLIC_* variables), so a
 * missing value is detected here and surfaced to the customer as a clear
 * configuration message rather than a broken payment button.
 */

export interface UpiConfig {
  upiId: string;
  payeeName: string;
}

/**
 * Returns the configured UPI merchant details, or null when either
 * environment variable is missing/blank.
 */
export function getUpiConfig(): UpiConfig | null {
  const upiId = (process.env.NEXT_PUBLIC_UPI_ID ?? "").trim();
  const payeeName = (process.env.NEXT_PUBLIC_UPI_PAYEE_NAME ?? "").trim();

  if (!upiId || !payeeName) {
    return null;
  }

  return { upiId, payeeName };
}

/**
 * A human-readable explanation of what is missing, for the error state.
 */
export function getUpiConfigError(): string {
  const upiId = (process.env.NEXT_PUBLIC_UPI_ID ?? "").trim();
  const payeeName = (process.env.NEXT_PUBLIC_UPI_PAYEE_NAME ?? "").trim();

  const missing: string[] = [];
  if (!upiId) missing.push("NEXT_PUBLIC_UPI_ID");
  if (!payeeName) missing.push("NEXT_PUBLIC_UPI_PAYEE_NAME");

  return `UPI payments are not configured: ${missing.join(
    " and "
  )} ${missing.length > 1 ? "are" : "is"} missing. Please contact support to complete your payment.`;
}

/**
 * Builds a UPI payment deep link.
 *
 * Format: upi://pay?pa=<UPI_ID>&pn=<PAYEE_NAME>&am=<AMOUNT>&cu=INR&tn=<REFERENCE>
 *
 * Values are percent-encoded so that spaces in the payee name (and any
 * punctuation in the order reference) produce a valid URI.
 */
export function buildUpiUri(
  config: UpiConfig,
  options: { amount: number; orderReference: string }
): string {
  const amount = Number.isFinite(options.amount)
    ? options.amount.toFixed(2)
    : "0.00";

  const params = [
    `pa=${encodeURIComponent(config.upiId)}`,
    `pn=${encodeURIComponent(config.payeeName)}`,
    `am=${encodeURIComponent(amount)}`,
    "cu=INR",
    `tn=${encodeURIComponent(options.orderReference)}`,
  ];

  return `upi://pay?${params.join("&")}`;
}
