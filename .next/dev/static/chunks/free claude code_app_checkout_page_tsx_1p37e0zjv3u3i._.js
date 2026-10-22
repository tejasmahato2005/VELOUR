(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/free claude code/app/checkout/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CheckoutPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/free claude code/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/free claude code/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/free claude code/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/free claude code/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$lib$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/free claude code/lib/store.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/free claude code/lib/format.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$components$2f$SafeImage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/free claude code/components/SafeImage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/free claude code/components/Icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$lib$2f$insforge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/free claude code/lib/insforge.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const FREE_SHIPPING_THRESHOLD = 5;
const STANDARD_SHIPPING_FEE = 1;
const MAX_RECEIPT_MB = 5;
function CheckoutPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { items, subtotal, totalCount, clearCart, isHydrated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$lib$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [userLoaded, setUserLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CheckoutPage.useEffect": ()=>{
            let cancelled = false;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$lib$2f$insforge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUser"])().then({
                "CheckoutPage.useEffect": (u)=>{
                    if (!cancelled) {
                        setUser(u ? {
                            id: u.id,
                            email: u.email
                        } : null);
                        setUserLoaded(true);
                    }
                }
            }["CheckoutPage.useEffect"]);
            return ({
                "CheckoutPage.useEffect": ()=>{
                    cancelled = true;
                }
            })["CheckoutPage.useEffect"];
        }
    }["CheckoutPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CheckoutPage.useEffect": ()=>{
            if (!userLoaded && !user) return;
            if (!user) {
                router.push(`/login?callbackUrl=${encodeURIComponent("/checkout")}`);
            }
        }
    }["CheckoutPage.useEffect"], [
        user,
        userLoaded,
        router
    ]);
    if (!isHydrated) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "section",
            style: {
                minHeight: "50vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "subheading",
                children: "Loading checkout..."
            }, void 0, false, {
                fileName: "[project]/free claude code/app/checkout/page.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/free claude code/app/checkout/page.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this);
    }
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        apartment: "",
        city: "",
        state: "",
        zip: "",
        country: "India"
    });
    const [receiptFile, setReceiptFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [receiptError, setReceiptError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [orderConfirmed, setOrderConfirmed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const shippingFee = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : STANDARD_SHIPPING_FEE;
    const orderTotal = subtotal + shippingFee;
    if (orderConfirmed) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "section",
            style: {
                paddingTop: "48px",
                minHeight: "75vh"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-narrow",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        backgroundColor: "var(--bg-surface)",
                        border: "1px solid var(--border-light)",
                        padding: "clamp(32px, 5vw, 64px)",
                        textAlign: "center"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: "56px",
                                height: "56px",
                                borderRadius: "50%",
                                backgroundColor: "var(--text-primary)",
                                color: "var(--bg-primary)",
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginBottom: "20px"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCheck"], {
                                size: 28
                            }, void 0, false, {
                                fileName: "[project]/free claude code/app/checkout/page.tsx",
                                lineNumber: 107,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                            lineNumber: 94,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "subheading",
                            style: {
                                color: "var(--accent-gold-dark)"
                            },
                            children: "Order Confirmed"
                        }, void 0, false, {
                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                            lineNumber: 110,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "heading-display",
                            style: {
                                marginTop: "8px",
                                marginBottom: "12px"
                            },
                            children: "Thank You for Your Order"
                        }, void 0, false, {
                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                            lineNumber: 113,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "lead-text",
                            style: {
                                maxWidth: "520px",
                                margin: "0 auto 24px"
                            },
                            children: [
                                "Your order has been received and is being carefully prepared at our atelier. A confirmation email has been dispatched to ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: orderConfirmed.email
                                }, void 0, false, {
                                    fileName: "[project]/free claude code/app/checkout/page.tsx",
                                    lineNumber: 118,
                                    columnNumber: 59
                                }, this),
                                "."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                            lineNumber: 116,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                backgroundColor: "var(--bg-subtle)",
                                border: "1px solid var(--border-light)",
                                padding: "20px",
                                maxWidth: "480px",
                                margin: "0 auto 36px",
                                textAlign: "left",
                                fontSize: "0.85rem"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        justifyContent: "space-between",
                                        marginBottom: "8px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: "var(--text-muted)"
                                            },
                                            children: "Order Reference:"
                                        }, void 0, false, {
                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                            lineNumber: 133,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            style: {
                                                letterSpacing: "0.08em"
                                            },
                                            children: orderConfirmed.orderId
                                        }, void 0, false, {
                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                            lineNumber: 134,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/free claude code/app/checkout/page.tsx",
                                    lineNumber: 132,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        justifyContent: "space-between",
                                        marginBottom: "8px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: "var(--text-muted)"
                                            },
                                            children: "Status:"
                                        }, void 0, false, {
                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                            lineNumber: 137,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontWeight: 600,
                                                textTransform: "uppercase"
                                            },
                                            children: orderConfirmed.status
                                        }, void 0, false, {
                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                            lineNumber: 138,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/free claude code/app/checkout/page.tsx",
                                    lineNumber: 136,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        justifyContent: "space-between",
                                        marginBottom: "8px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: "var(--text-muted)"
                                            },
                                            children: "Delivery Address:"
                                        }, void 0, false, {
                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                            lineNumber: 141,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: orderConfirmed.shippingAddress
                                        }, void 0, false, {
                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                            lineNumber: 142,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/free claude code/app/checkout/page.tsx",
                                    lineNumber: 140,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        justifyContent: "space-between",
                                        marginBottom: "8px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: "var(--text-muted)"
                                            },
                                            children: "Estimated Arrival:"
                                        }, void 0, false, {
                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                            lineNumber: 145,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "3–5 Business Days (Express)"
                                        }, void 0, false, {
                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                            lineNumber: 146,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/free claude code/app/checkout/page.tsx",
                                    lineNumber: 144,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        justifyContent: "space-between",
                                        paddingTop: "8px",
                                        borderTop: "1px solid var(--border-light)",
                                        fontWeight: 600
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Total Paid:"
                                        }, void 0, false, {
                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                            lineNumber: 157,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["money"])(orderConfirmed.total)
                                        }, void 0, false, {
                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                            lineNumber: 158,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/free claude code/app/checkout/page.tsx",
                                    lineNumber: 148,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                            lineNumber: 121,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                gap: "16px",
                                justifyContent: "center",
                                flexWrap: "wrap"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "btn btn-primary",
                                    children: "Return to Home"
                                }, void 0, false, {
                                    fileName: "[project]/free claude code/app/checkout/page.tsx",
                                    lineNumber: 163,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/profile",
                                    className: "btn btn-secondary",
                                    children: "View Order History"
                                }, void 0, false, {
                                    fileName: "[project]/free claude code/app/checkout/page.tsx",
                                    lineNumber: 166,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                            lineNumber: 162,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/free claude code/app/checkout/page.tsx",
                    lineNumber: 86,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/free claude code/app/checkout/page.tsx",
                lineNumber: 85,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/free claude code/app/checkout/page.tsx",
            lineNumber: 84,
            columnNumber: 7
        }, this);
    }
    // If cart is empty, prompt user
    if (items.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "section",
            style: {
                minHeight: "65vh",
                display: "flex",
                alignItems: "center"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-narrow",
                style: {
                    textAlign: "center"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "subheading",
                        children: "Checkout"
                    }, void 0, false, {
                        fileName: "[project]/free claude code/app/checkout/page.tsx",
                        lineNumber: 181,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "heading-display",
                        style: {
                            marginTop: "12px",
                            marginBottom: "16px"
                        },
                        children: "No Items in Checkout"
                    }, void 0, false, {
                        fileName: "[project]/free claude code/app/checkout/page.tsx",
                        lineNumber: 182,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "lead-text",
                        style: {
                            maxWidth: "440px",
                            margin: "0 auto 32px"
                        },
                        children: "Your shopping bag is empty. Please select pieces from our collections before proceeding."
                    }, void 0, false, {
                        fileName: "[project]/free claude code/app/checkout/page.tsx",
                        lineNumber: 185,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/women",
                        className: "btn btn-primary",
                        children: "Explore Collections"
                    }, void 0, false, {
                        fileName: "[project]/free claude code/app/checkout/page.tsx",
                        lineNumber: 189,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/free claude code/app/checkout/page.tsx",
                lineNumber: 180,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/free claude code/app/checkout/page.tsx",
            lineNumber: 179,
            columnNumber: 7
        }, this);
    }
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
        if (errors[name]) {
            setErrors((prev)=>{
                const next = {
                    ...prev
                };
                delete next[name];
                return next;
            });
        }
    };
    const handleReceiptChange = (e)=>{
        const file = e.target.files?.[0] ?? null;
        setReceiptError(null);
        if (!file) {
            setReceiptFile(null);
            return;
        }
        const isPdf = file.type === "application/pdf";
        const isImage = file.type.startsWith("image/");
        if (!isPdf && !isImage) {
            setReceiptError("Please upload an image (JPG/PNG) or PDF receipt.");
            setReceiptFile(null);
            return;
        }
        if (file.size > MAX_RECEIPT_MB * 1024 * 1024) {
            setReceiptError(`Receipt must be smaller than ${MAX_RECEIPT_MB} MB.`);
            setReceiptFile(null);
            return;
        }
        setReceiptFile(file);
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
        if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
        if (!formData.email.trim() || !formData.email.includes("@")) {
            newErrors.email = "Valid email is required";
        }
        if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
        if (!formData.address.trim()) newErrors.address = "Street address is required";
        if (!formData.city.trim()) newErrors.city = "City is required";
        if (!formData.zip.trim()) newErrors.zip = "Postal code is required";
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            window.scrollTo({
                top: 100,
                behavior: "smooth"
            });
            return;
        }
        setIsSubmitting(true);
        setErrors({});
        let receiptUrl = null;
        try {
            // 1. Upload payment receipt (if provided) to the private `payment-uploads` bucket.
            if (receiptFile) {
                setUploading(true);
                const key = `receipts/${user?.id}/${Date.now()}-${receiptFile.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
                const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$lib$2f$insforge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insforge"].storage.from("payment-uploads").upload(key, receiptFile);
                if (error) {
                    throw new Error(error.message || "Receipt upload failed.");
                }
                receiptUrl = data?.url ?? null;
            }
            // 2. Insert the order row with item price snapshots.
            const itemsSnapshot = items.map((item)=>({
                    productId: item.productId,
                    name: item.name,
                    size: item.size,
                    qty: item.quantity,
                    price: item.price
                }));
            const contact = {
                name: `${formData.firstName.trim()} ${formData.lastName.trim()}`,
                email: formData.email.trim(),
                phone: formData.phone.trim()
            };
            const shippingAddress = {
                street: formData.address.trim(),
                apartment: formData.apartment.trim(),
                city: formData.city.trim(),
                state: formData.state.trim(),
                zip: formData.zip.trim(),
                country: formData.country
            };
            const { data: order, error: orderError } = await __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$lib$2f$insforge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insforge"].database.from("orders").insert([
                {
                    user_id: user?.id ?? null,
                    items: itemsSnapshot,
                    subtotal,
                    shipping: shippingFee,
                    total: orderTotal,
                    status: "pending",
                    contact,
                    shipping_address: shippingAddress,
                    payment_receipt_url: receiptUrl
                }
            ]).select().single();
            if (orderError) {
                throw new Error(orderError.message || "Could not place order.");
            }
            clearCart();
            setOrderConfirmed({
                orderId: order.id,
                items: [
                    ...items
                ],
                total: orderTotal,
                email: formData.email.trim(),
                shippingAddress: `${formData.address.trim()}, ${formData.city.trim()}, ${formData.zip.trim()}, ${formData.country}`,
                status: order.status,
                createdAt: order.created_at
            });
        } catch (err) {
            setErrors({
                _form: err.message || "Something went wrong. Please try again."
            });
            window.scrollTo({
                top: 100,
                behavior: "smooth"
            });
        } finally{
            setIsSubmitting(false);
            setUploading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "section",
        style: {
            paddingTop: "32px"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "listing-hero",
                    style: {
                        borderBottom: "none",
                        marginBottom: "24px",
                        paddingBottom: "0"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "subheading",
                            children: "Secure Checkout"
                        }, void 0, false, {
                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                            lineNumber: 341,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "heading-display",
                            style: {
                                marginTop: "4px"
                            },
                            children: "Complete Your Purchase"
                        }, void 0, false, {
                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                            lineNumber: 342,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/free claude code/app/checkout/page.tsx",
                    lineNumber: 340,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "checkout-layout",
                    noValidate: true,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: "36px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "baseline",
                                                borderBottom: "1px solid var(--border-light)",
                                                paddingBottom: "8px",
                                                marginBottom: "20px"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "heading-3",
                                                children: "1. Contact Information"
                                            }, void 0, false, {
                                                fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                lineNumber: 362,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                            lineNumber: 352,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-grid-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "form-group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "firstName",
                                                            className: "form-label",
                                                            children: "First Name *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                            lineNumber: 367,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            id: "firstName",
                                                            name: "firstName",
                                                            type: "text",
                                                            value: formData.firstName,
                                                            onChange: handleChange,
                                                            className: "form-input",
                                                            required: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                            lineNumber: 370,
                                                            columnNumber: 19
                                                        }, this),
                                                        errors.firstName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: "var(--accent-red)",
                                                                fontSize: "0.72rem"
                                                            },
                                                            children: errors.firstName
                                                        }, void 0, false, {
                                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                            lineNumber: 380,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                    lineNumber: 366,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "form-group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "lastName",
                                                            className: "form-label",
                                                            children: "Last Name *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                            lineNumber: 387,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            id: "lastName",
                                                            name: "lastName",
                                                            type: "text",
                                                            value: formData.lastName,
                                                            onChange: handleChange,
                                                            className: "form-input",
                                                            required: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                            lineNumber: 390,
                                                            columnNumber: 19
                                                        }, this),
                                                        errors.lastName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: "var(--accent-red)",
                                                                fontSize: "0.72rem"
                                                            },
                                                            children: errors.lastName
                                                        }, void 0, false, {
                                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                            lineNumber: 400,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                    lineNumber: 386,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                            lineNumber: 365,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-grid-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "form-group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "email",
                                                            className: "form-label",
                                                            children: "Email Address (for order tracking) *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                            lineNumber: 409,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            id: "email",
                                                            name: "email",
                                                            type: "email",
                                                            value: formData.email,
                                                            onChange: handleChange,
                                                            className: "form-input",
                                                            placeholder: "name@domain.com",
                                                            required: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                            lineNumber: 412,
                                                            columnNumber: 19
                                                        }, this),
                                                        errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: "var(--accent-red)",
                                                                fontSize: "0.72rem"
                                                            },
                                                            children: errors.email
                                                        }, void 0, false, {
                                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                            lineNumber: 423,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                    lineNumber: 408,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "form-group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "phone",
                                                            className: "form-label",
                                                            children: "Phone Number *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                            lineNumber: 430,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            id: "phone",
                                                            name: "phone",
                                                            type: "tel",
                                                            value: formData.phone,
                                                            onChange: handleChange,
                                                            className: "form-input",
                                                            placeholder: "+91 98765 43210",
                                                            required: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                            lineNumber: 433,
                                                            columnNumber: 19
                                                        }, this),
                                                        errors.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: "var(--accent-red)",
                                                                fontSize: "0.72rem"
                                                            },
                                                            children: errors.phone
                                                        }, void 0, false, {
                                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                            lineNumber: 444,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                    lineNumber: 429,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                            lineNumber: 407,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/free claude code/app/checkout/page.tsx",
                                    lineNumber: 351,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: "36px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "heading-3",
                                            style: {
                                                borderBottom: "1px solid var(--border-light)",
                                                paddingBottom: "8px",
                                                marginBottom: "20px"
                                            },
                                            children: "2. Shipping Address"
                                        }, void 0, false, {
                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                            lineNumber: 454,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "country",
                                                    className: "form-label",
                                                    children: "Country / Region"
                                                }, void 0, false, {
                                                    fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                    lineNumber: 466,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    id: "country",
                                                    name: "country",
                                                    value: formData.country,
                                                    onChange: handleChange,
                                                    className: "form-input",
                                                    style: {
                                                        borderRadius: 0,
                                                        appearance: "none",
                                                        backgroundImage: "url(\"data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2316130f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
                                                        backgroundRepeat: "no-repeat",
                                                        backgroundPosition: "right 14px center"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "United States",
                                                            children: "United States"
                                                        }, void 0, false, {
                                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                            lineNumber: 484,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "United Kingdom",
                                                            children: "United Kingdom"
                                                        }, void 0, false, {
                                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                            lineNumber: 485,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "France",
                                                            children: "France"
                                                        }, void 0, false, {
                                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                            lineNumber: 486,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Germany",
                                                            children: "Germany"
                                                        }, void 0, false, {
                                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                            lineNumber: 487,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Italy",
                                                            children: "Italy"
                                                        }, void 0, false, {
                                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                            lineNumber: 488,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Japan",
                                                            children: "Japan"
                                                        }, void 0, false, {
                                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                            lineNumber: 489,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Canada",
                                                            children: "Canada"
                                                        }, void 0, false, {
                                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                            lineNumber: 490,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Australia",
                                                            children: "Australia"
                                                        }, void 0, false, {
                                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                            lineNumber: 491,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "India",
                                                            children: "India"
                                                        }, void 0, false, {
                                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                            lineNumber: 492,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                    lineNumber: 469,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                            lineNumber: 465,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "address",
                                                    className: "form-label",
                                                    children: "Street Address *"
                                                }, void 0, false, {
                                                    fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                    lineNumber: 497,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "address",
                                                    name: "address",
                                                    type: "text",
                                                    value: formData.address,
                                                    onChange: handleChange,
                                                    className: "form-input",
                                                    placeholder: "123 Atelier Avenue",
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                    lineNumber: 500,
                                                    columnNumber: 17
                                                }, this),
                                                errors.address && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: "var(--accent-red)",
                                                        fontSize: "0.72rem"
                                                    },
                                                    children: errors.address
                                                }, void 0, false, {
                                                    fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                    lineNumber: 511,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                            lineNumber: 496,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "apartment",
                                                    className: "form-label",
                                                    children: "Apartment, Suite, Unit (Optional)"
                                                }, void 0, false, {
                                                    fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                    lineNumber: 518,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "apartment",
                                                    name: "apartment",
                                                    type: "text",
                                                    value: formData.apartment,
                                                    onChange: handleChange,
                                                    className: "form-input",
                                                    placeholder: "Apt 4B"
                                                }, void 0, false, {
                                                    fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                    lineNumber: 521,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                            lineNumber: 517,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-grid-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "form-group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "city",
                                                            className: "form-label",
                                                            children: "City *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                            lineNumber: 534,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            id: "city",
                                                            name: "city",
                                                            type: "text",
                                                            value: formData.city,
                                                            onChange: handleChange,
                                                            className: "form-input",
                                                            required: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                            lineNumber: 537,
                                                            columnNumber: 19
                                                        }, this),
                                                        errors.city && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: "var(--accent-red)",
                                                                fontSize: "0.72rem"
                                                            },
                                                            children: errors.city
                                                        }, void 0, false, {
                                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                            lineNumber: 547,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                    lineNumber: 533,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "form-group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "state",
                                                            className: "form-label",
                                                            children: "State / Region"
                                                        }, void 0, false, {
                                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                            lineNumber: 554,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            id: "state",
                                                            name: "state",
                                                            type: "text",
                                                            value: formData.state,
                                                            onChange: handleChange,
                                                            className: "form-input"
                                                        }, void 0, false, {
                                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                            lineNumber: 557,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                    lineNumber: 553,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "form-group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "zip",
                                                            className: "form-label",
                                                            children: "ZIP Code *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                            lineNumber: 568,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            id: "zip",
                                                            name: "zip",
                                                            type: "text",
                                                            value: formData.zip,
                                                            onChange: handleChange,
                                                            className: "form-input",
                                                            required: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                            lineNumber: 571,
                                                            columnNumber: 19
                                                        }, this),
                                                        errors.zip && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: "var(--accent-red)",
                                                                fontSize: "0.72rem"
                                                            },
                                                            children: errors.zip
                                                        }, void 0, false, {
                                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                            lineNumber: 581,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                    lineNumber: 567,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                            lineNumber: 532,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/free claude code/app/checkout/page.tsx",
                                    lineNumber: 453,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: "36px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "baseline",
                                                borderBottom: "1px solid var(--border-light)",
                                                paddingBottom: "8px",
                                                marginBottom: "20px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "heading-3",
                                                    children: "3. Payment Receipt"
                                                }, void 0, false, {
                                                    fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                    lineNumber: 601,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: "0.68rem",
                                                        letterSpacing: "0.1em",
                                                        textTransform: "uppercase",
                                                        padding: "3px 8px",
                                                        backgroundColor: "var(--bg-subtle)",
                                                        fontWeight: 600
                                                    },
                                                    children: "Optional"
                                                }, void 0, false, {
                                                    fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                    lineNumber: 602,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                            lineNumber: 591,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: "0.8rem",
                                                color: "var(--text-muted)",
                                                marginBottom: "14px"
                                            },
                                            children: "Upload a photo or PDF of your payment receipt (e.g. bank transfer or wallet confirmation). Our team will match it to your order. Files up to 5 MB."
                                        }, void 0, false, {
                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                            lineNumber: 616,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "receipt",
                                                    className: "form-label",
                                                    children: "Attach Receipt (Optional)"
                                                }, void 0, false, {
                                                    fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                    lineNumber: 622,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "receipt",
                                                    type: "file",
                                                    accept: ".pdf,.jpg,.jpeg,.png",
                                                    onChange: handleReceiptChange,
                                                    className: "form-input"
                                                }, void 0, false, {
                                                    fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                    lineNumber: 625,
                                                    columnNumber: 17
                                                }, this),
                                                receiptError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: "var(--accent-red)",
                                                        fontSize: "0.72rem",
                                                        marginTop: "6px",
                                                        display: "block"
                                                    },
                                                    children: receiptError
                                                }, void 0, false, {
                                                    fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                    lineNumber: 633,
                                                    columnNumber: 19
                                                }, this),
                                                receiptFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        marginTop: "10px",
                                                        fontSize: "0.78rem",
                                                        color: "var(--text-secondary)"
                                                    },
                                                    children: [
                                                        receiptFile.name,
                                                        " (",
                                                        (receiptFile.size / 1024).toFixed(1),
                                                        " KB)",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>{
                                                                setReceiptFile(null);
                                                                setReceiptError(null);
                                                            },
                                                            style: {
                                                                marginLeft: "12px",
                                                                background: "none",
                                                                border: "none",
                                                                color: "var(--accent-red)",
                                                                fontSize: "0.78rem",
                                                                cursor: "pointer",
                                                                textDecoration: "underline"
                                                            },
                                                            children: "Remove"
                                                        }, void 0, false, {
                                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                            lineNumber: 640,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                    lineNumber: 638,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                            lineNumber: 621,
                                            columnNumber: 15
                                        }, this),
                                        errors._form && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginTop: "12px",
                                                padding: "10px 14px",
                                                backgroundColor: "#fbeaea",
                                                border: "1px solid var(--accent-red)",
                                                color: "var(--accent-red)",
                                                fontSize: "0.8rem",
                                                borderRadius: 6
                                            },
                                            children: errors._form
                                        }, void 0, false, {
                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                            lineNumber: 662,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/free claude code/app/checkout/page.tsx",
                                    lineNumber: 590,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: isSubmitting,
                                    className: "btn btn-primary btn-full",
                                    style: {
                                        padding: "16px",
                                        fontSize: "0.85rem"
                                    },
                                    children: isSubmitting ? uploading ? "Uploading receipt…" : "Placing order…" : `Place Order — ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["money"])(orderTotal)}`
                                }, void 0, false, {
                                    fileName: "[project]/free claude code/app/checkout/page.tsx",
                                    lineNumber: 678,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                            lineNumber: 349,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                            className: "order-summary-box",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "heading-3",
                                    style: {
                                        borderBottom: "1px solid var(--border-light)",
                                        paddingBottom: "12px"
                                    },
                                    children: [
                                        "Order Items (",
                                        totalCount,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/free claude code/app/checkout/page.tsx",
                                    lineNumber: 694,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "14px",
                                        maxHeight: "320px",
                                        overflowY: "auto"
                                    },
                                    children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                gap: "12px",
                                                alignItems: "center"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        width: "50px",
                                                        height: "65px",
                                                        position: "relative",
                                                        flexShrink: 0,
                                                        backgroundColor: "var(--bg-subtle)"
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$components$2f$SafeImage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeImage"], {
                                                        src: item.image,
                                                        alt: item.name,
                                                        fill: true,
                                                        sizes: "50px",
                                                        style: {
                                                            objectFit: "cover"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                        lineNumber: 711,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                    lineNumber: 702,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        flex: 1,
                                                        minWidth: 0
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: "0.82rem",
                                                                fontWeight: 500,
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                textOverflow: "ellipsis"
                                                            },
                                                            children: item.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                            lineNumber: 720,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: "0.72rem",
                                                                color: "var(--text-muted)"
                                                            },
                                                            children: [
                                                                "Size: ",
                                                                item.size,
                                                                " • Qty: ",
                                                                item.quantity
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                            lineNumber: 731,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: "0.78rem",
                                                                fontWeight: 600,
                                                                marginTop: "2px"
                                                            },
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["money"])(item.price * item.quantity)
                                                        }, void 0, false, {
                                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                            lineNumber: 734,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                    lineNumber: 719,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, item.id, true, {
                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                            lineNumber: 701,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/free claude code/app/checkout/page.tsx",
                                    lineNumber: 699,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        borderTop: "1px solid var(--border-light)",
                                        paddingTop: "16px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "summary-row",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Subtotal"
                                                }, void 0, false, {
                                                    fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                    lineNumber: 744,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["money"])(subtotal)
                                                }, void 0, false, {
                                                    fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                    lineNumber: 745,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                            lineNumber: 743,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "summary-row",
                                            style: {
                                                marginTop: "6px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Express Shipping"
                                                }, void 0, false, {
                                                    fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                    lineNumber: 748,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: shippingFee === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: "var(--accent-green)"
                                                        },
                                                        children: "COMPLIMENTARY"
                                                    }, void 0, false, {
                                                        fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                        lineNumber: 751,
                                                        columnNumber: 21
                                                    }, this) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["money"])(shippingFee)
                                                }, void 0, false, {
                                                    fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                    lineNumber: 749,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                            lineNumber: 747,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "summary-row total",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Total Due"
                                                }, void 0, false, {
                                                    fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                    lineNumber: 758,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["money"])(orderTotal)
                                                }, void 0, false, {
                                                    fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                    lineNumber: 759,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                            lineNumber: 757,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/free claude code/app/checkout/page.tsx",
                                    lineNumber: 742,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginTop: "16px",
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "8px",
                                        fontSize: "0.72rem",
                                        color: "var(--text-muted)",
                                        letterSpacing: "0.08em",
                                        textTransform: "uppercase"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "8px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconShield"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                    lineNumber: 776,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "SSL Encrypted Checkout"
                                                }, void 0, false, {
                                                    fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                    lineNumber: 777,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                            lineNumber: 775,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "8px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconTruck"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                    lineNumber: 780,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Dispatches Next Business Day"
                                                }, void 0, false, {
                                                    fileName: "[project]/free claude code/app/checkout/page.tsx",
                                                    lineNumber: 781,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                                            lineNumber: 779,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/free claude code/app/checkout/page.tsx",
                                    lineNumber: 763,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/free claude code/app/checkout/page.tsx",
                            lineNumber: 693,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/free claude code/app/checkout/page.tsx",
                    lineNumber: 347,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/free claude code/app/checkout/page.tsx",
            lineNumber: 339,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/free claude code/app/checkout/page.tsx",
        lineNumber: 338,
        columnNumber: 5
    }, this);
}
_s(CheckoutPage, "E7P+peFG7KKGBWPBiHLJyKu63kI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$lib$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = CheckoutPage;
var _c;
__turbopack_context__.k.register(_c, "CheckoutPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=free%20claude%20code_app_checkout_page_tsx_1p37e0zjv3u3i._.js.map