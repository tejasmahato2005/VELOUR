(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/free claude code/app/login/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoginPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/free claude code/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/free claude code/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/free claude code/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/free claude code/node_modules/next/navigation.js [app-client] (ecmascript)");
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
function LoginPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("signin");
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("form");
    const [signInEmail, setSignInEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [signInPassword, setSignInPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [signUpName, setSignUpName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [signUpEmail, setSignUpEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [signUpPassword, setSignUpPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [verifyEmail, setVerifyEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [verifyCode, setVerifyCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const getCallbackUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LoginPage.useCallback[getCallbackUrl]": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            return new URLSearchParams(window.location.search).get("callbackUrl") || "/profile";
        }
    }["LoginPage.useCallback[getCallbackUrl]"], []);
    // Already signed in? Send them to their callback (or profile).
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoginPage.useEffect": ()=>{
            let cancelled = false;
            ({
                "LoginPage.useEffect": async ()=>{
                    const callbackUrl = ("TURBOPACK compile-time truthy", 1) ? new URLSearchParams(window.location.search).get("callbackUrl") || "/profile" : "TURBOPACK unreachable";
                    const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$lib$2f$insforge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUser"])();
                    if (!cancelled && user) {
                        router.push(callbackUrl);
                    }
                }
            })["LoginPage.useEffect"]();
            return ({
                "LoginPage.useEffect": ()=>{
                    cancelled = true;
                }
            })["LoginPage.useEffect"];
        }
    }["LoginPage.useEffect"], [
        router
    ]);
    const clearError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LoginPage.useCallback[clearError]": ()=>setError(null)
    }["LoginPage.useCallback[clearError]"], []);
    const handleSignIn = async (e)=>{
        e.preventDefault();
        clearError();
        if (!signInEmail.trim() || !signInPassword.trim()) {
            setError("Email and password are required");
            return;
        }
        setLoading(true);
        try {
            const { data, error: err } = await __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$lib$2f$insforge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insforge"].auth.signInWithPassword({
                email: signInEmail.trim(),
                password: signInPassword
            });
            if (err) {
                setError(err.message || "Sign in failed. Please try again.");
                setLoading(false);
                return;
            }
            if (!data?.user) {
                setError("Sign in failed. Please try again.");
                setLoading(false);
                return;
            }
            router.push(getCallbackUrl());
        } catch  {
            setError("Sign in failed. Please try again.");
        } finally{
            setLoading(false);
        }
    };
    const handleSignUp = async (e)=>{
        e.preventDefault();
        clearError();
        if (!signUpName.trim()) {
            setError("Full name is required");
            return;
        }
        if (!signUpEmail.trim()) {
            setError("Email address is required");
            return;
        }
        if (!signUpPassword || signUpPassword.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }
        setLoading(true);
        try {
            const { data, error: err } = await __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$lib$2f$insforge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insforge"].auth.signUp({
                email: signUpEmail.trim(),
                password: signUpPassword,
                name: signUpName.trim()
            });
            if (err) {
                setError(err.message || "Could not create account. Please try again.");
                setLoading(false);
                return;
            }
            if (data?.requireEmailVerification) {
                // Email verification is on: a code was sent to the inbox.
                setMode("verify");
                setVerifyEmail(signUpEmail.trim());
                setLoading(false);
                return;
            }
            if (data?.accessToken) {
                router.push(getCallbackUrl());
            }
        } catch  {
            setError("Could not create account. Please try again.");
        } finally{
            setLoading(false);
        }
    };
    const handleResendCode = async (e)=>{
        if (e) e.preventDefault();
        clearError();
        setLoading(true);
        try {
            const { error: err } = await __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$lib$2f$insforge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insforge"].auth.resendVerificationEmail({
                email: verifyEmail,
                redirectTo: `${window.location.origin}/login`
            });
            if (err) {
                setError(err.message || "Could not resend the code.");
            } else {
                setError(null);
            }
        } catch  {
            setError("Could not resend the code.");
        } finally{
            setLoading(false);
        }
    };
    const handleVerifyCode = async (e)=>{
        e.preventDefault();
        clearError();
        if (!verifyCode.trim() || verifyCode.trim().length !== 6) {
            setError("Please enter the 6-digit code sent to your email");
            return;
        }
        setLoading(true);
        try {
            const { data, error: err } = await __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$lib$2f$insforge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insforge"].auth.verifyEmail({
                email: verifyEmail,
                otp: verifyCode.trim()
            });
            if (err) {
                setError(err.message || "Invalid or expired code.");
                setLoading(false);
                return;
            }
            if (data?.accessToken) {
                router.push(getCallbackUrl());
            } else {
                setError("Verification did not complete. Please try again.");
                setLoading(false);
            }
        } catch  {
            setError("Verification failed. Please try again.");
        } finally{
            setLoading(false);
        }
    };
    const renderSignIn = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSignIn,
            noValidate: true,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "signin-email",
                            className: "form-label",
                            children: "Email Address"
                        }, void 0, false, {
                            fileName: "[project]/free claude code/app/login/page.tsx",
                            lineNumber: 183,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "signin-email",
                            type: "email",
                            value: signInEmail,
                            onChange: (e)=>{
                                setSignInEmail(e.target.value);
                                clearError();
                            },
                            className: "form-input",
                            placeholder: "name@domain.com",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/free claude code/app/login/page.tsx",
                            lineNumber: 186,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/free claude code/app/login/page.tsx",
                    lineNumber: 182,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "form-group",
                    style: {
                        marginTop: "14px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                justifyContent: "space-between"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "signin-password",
                                    className: "form-label",
                                    children: "Password"
                                }, void 0, false, {
                                    fileName: "[project]/free claude code/app/login/page.tsx",
                                    lineNumber: 202,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#forgot",
                                    onClick: (e)=>{
                                        e.preventDefault();
                                        setError(null);
                                    },
                                    style: {
                                        fontSize: "0.72rem",
                                        color: "var(--text-muted)"
                                    },
                                    children: "Forgot Password?"
                                }, void 0, false, {
                                    fileName: "[project]/free claude code/app/login/page.tsx",
                                    lineNumber: 205,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/free claude code/app/login/page.tsx",
                            lineNumber: 201,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "signin-password",
                            type: "password",
                            value: signInPassword,
                            onChange: (e)=>{
                                setSignInPassword(e.target.value);
                                clearError();
                            },
                            className: "form-input",
                            placeholder: "••••••••••••",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/free claude code/app/login/page.tsx",
                            lineNumber: 216,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/free claude code/app/login/page.tsx",
                    lineNumber: 200,
                    columnNumber: 7
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginTop: "12px",
                        padding: "10px 14px",
                        backgroundColor: "#fbeaea",
                        border: "1px solid var(--accent-red)",
                        color: "var(--accent-red)",
                        fontSize: "0.8rem",
                        borderRadius: 6
                    },
                    children: error
                }, void 0, false, {
                    fileName: "[project]/free claude code/app/login/page.tsx",
                    lineNumber: 231,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "submit",
                    disabled: loading,
                    className: "btn btn-primary btn-full",
                    style: {
                        marginTop: "24px"
                    },
                    children: loading ? "Signing in…" : "Sign In"
                }, void 0, false, {
                    fileName: "[project]/free claude code/app/login/page.tsx",
                    lineNumber: 246,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/free claude code/app/login/page.tsx",
            lineNumber: 181,
            columnNumber: 5
        }, this);
    const renderSignUp = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSignUp,
            noValidate: true,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "signup-name",
                            className: "form-label",
                            children: "Full Name"
                        }, void 0, false, {
                            fileName: "[project]/free claude code/app/login/page.tsx",
                            lineNumber: 260,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "signup-name",
                            type: "text",
                            value: signUpName,
                            onChange: (e)=>{
                                setSignUpName(e.target.value);
                                clearError();
                            },
                            className: "form-input",
                            placeholder: "Elena Rostova",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/free claude code/app/login/page.tsx",
                            lineNumber: 263,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/free claude code/app/login/page.tsx",
                    lineNumber: 259,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "form-group",
                    style: {
                        marginTop: "14px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "signup-email",
                            className: "form-label",
                            children: "Email Address"
                        }, void 0, false, {
                            fileName: "[project]/free claude code/app/login/page.tsx",
                            lineNumber: 278,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "signup-email",
                            type: "email",
                            value: signUpEmail,
                            onChange: (e)=>{
                                setSignUpEmail(e.target.value);
                                clearError();
                            },
                            className: "form-input",
                            placeholder: "elena@domain.com",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/free claude code/app/login/page.tsx",
                            lineNumber: 281,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/free claude code/app/login/page.tsx",
                    lineNumber: 277,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "form-group",
                    style: {
                        marginTop: "14px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "signup-password",
                            className: "form-label",
                            children: "Create Password"
                        }, void 0, false, {
                            fileName: "[project]/free claude code/app/login/page.tsx",
                            lineNumber: 296,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "signup-password",
                            type: "password",
                            value: signUpPassword,
                            onChange: (e)=>{
                                setSignUpPassword(e.target.value);
                                clearError();
                            },
                            className: "form-input",
                            placeholder: "At least 6 characters",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/free claude code/app/login/page.tsx",
                            lineNumber: 299,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/free claude code/app/login/page.tsx",
                    lineNumber: 295,
                    columnNumber: 7
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginTop: "12px",
                        padding: "10px 14px",
                        backgroundColor: "#fbeaea",
                        border: "1px solid var(--accent-red)",
                        color: "var(--accent-red)",
                        fontSize: "0.8rem",
                        borderRadius: 6
                    },
                    children: error
                }, void 0, false, {
                    fileName: "[project]/free claude code/app/login/page.tsx",
                    lineNumber: 314,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "submit",
                    disabled: loading,
                    className: "btn btn-primary btn-full",
                    style: {
                        marginTop: "24px"
                    },
                    children: loading ? "Creating account…" : "Create Account"
                }, void 0, false, {
                    fileName: "[project]/free claude code/app/login/page.tsx",
                    lineNumber: 329,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/free claude code/app/login/page.tsx",
            lineNumber: 258,
            columnNumber: 5
        }, this);
    const renderVerify = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        backgroundColor: "var(--bg-subtle)",
                        border: "1px solid var(--border-light)",
                        padding: "20px",
                        textAlign: "center",
                        marginBottom: "24px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginBottom: "10px",
                                display: "block",
                                margin: "0 auto 10px"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconMail"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/free claude code/app/login/page.tsx",
                                lineNumber: 352,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/free claude code/app/login/page.tsx",
                            lineNumber: 351,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: "0.9rem",
                                fontWeight: 500,
                                marginBottom: "6px"
                            },
                            children: "Check your inbox"
                        }, void 0, false, {
                            fileName: "[project]/free claude code/app/login/page.tsx",
                            lineNumber: 354,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: "0.82rem",
                                color: "var(--text-muted)",
                                margin: 0
                            },
                            children: [
                                "A 6-digit verification code was sent to ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: verifyEmail
                                }, void 0, false, {
                                    fileName: "[project]/free claude code/app/login/page.tsx",
                                    lineNumber: 358,
                                    columnNumber: 51
                                }, this),
                                "."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/free claude code/app/login/page.tsx",
                            lineNumber: 357,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/free claude code/app/login/page.tsx",
                    lineNumber: 342,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleVerifyCode,
                    noValidate: true,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "verify-code",
                                    className: "form-label",
                                    children: "Verification Code"
                                }, void 0, false, {
                                    fileName: "[project]/free claude code/app/login/page.tsx",
                                    lineNumber: 364,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "verify-code",
                                    type: "text",
                                    value: verifyCode,
                                    onChange: (e)=>{
                                        setVerifyCode(e.target.value);
                                        clearError();
                                    },
                                    className: "form-input",
                                    placeholder: "123456",
                                    maxLength: 6,
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/free claude code/app/login/page.tsx",
                                    lineNumber: 367,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/free claude code/app/login/page.tsx",
                            lineNumber: 363,
                            columnNumber: 9
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: "12px",
                                padding: "10px 14px",
                                backgroundColor: "#fbeaea",
                                border: "1px solid var(--accent-red)",
                                color: "var(--accent-red)",
                                fontSize: "0.8rem",
                                borderRadius: 6
                            },
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/free claude code/app/login/page.tsx",
                            lineNumber: 383,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: loading,
                            className: "btn btn-primary btn-full",
                            style: {
                                marginTop: "24px"
                            },
                            children: loading ? "Verifying…" : "Verify Code"
                        }, void 0, false, {
                            fileName: "[project]/free claude code/app/login/page.tsx",
                            lineNumber: 398,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: "16px",
                                textAlign: "center"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleResendCode,
                                disabled: loading,
                                style: {
                                    background: "none",
                                    border: "none",
                                    color: "var(--accent-gold-dark)",
                                    fontSize: "0.78rem",
                                    cursor: "pointer",
                                    textDecoration: "underline"
                                },
                                children: loading ? "" : "Didn't receive it? Resend code"
                            }, void 0, false, {
                                fileName: "[project]/free claude code/app/login/page.tsx",
                                lineNumber: 408,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/free claude code/app/login/page.tsx",
                            lineNumber: 407,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: "10px",
                                textAlign: "center"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/login",
                                onClick: ()=>setMode("form"),
                                style: {
                                    fontSize: "0.78rem",
                                    color: "var(--text-muted)"
                                },
                                children: "Back to sign in"
                            }, void 0, false, {
                                fileName: "[project]/free claude code/app/login/page.tsx",
                                lineNumber: 425,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/free claude code/app/login/page.tsx",
                            lineNumber: 424,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/free claude code/app/login/page.tsx",
                    lineNumber: 362,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/free claude code/app/login/page.tsx",
            lineNumber: 341,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "section",
        style: {
            minHeight: "75vh",
            display: "flex",
            alignItems: "center"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-narrow",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "auth-box",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: "center",
                            marginBottom: "28px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "subheading",
                                children: "Client Portal"
                            }, void 0, false, {
                                fileName: "[project]/free claude code/app/login/page.tsx",
                                lineNumber: 438,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "heading-1",
                                style: {
                                    marginTop: "6px"
                                },
                                children: "VELOUR"
                            }, void 0, false, {
                                fileName: "[project]/free claude code/app/login/page.tsx",
                                lineNumber: 439,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/free claude code/app/login/page.tsx",
                        lineNumber: 437,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "auth-tabs",
                        role: "tablist",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: `auth-tab ${activeTab === "signin" ? "active" : ""}`,
                                onClick: ()=>{
                                    setActiveTab("signin");
                                    setMode("form");
                                    setError(null);
                                },
                                role: "tab",
                                "aria-selected": activeTab === "signin",
                                children: "Sign In"
                            }, void 0, false, {
                                fileName: "[project]/free claude code/app/login/page.tsx",
                                lineNumber: 446,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: `auth-tab ${activeTab === "signup" ? "active" : ""}`,
                                onClick: ()=>{
                                    setActiveTab("signup");
                                    setMode("form");
                                    setError(null);
                                },
                                role: "tab",
                                "aria-selected": activeTab === "signup",
                                children: "Create Account"
                            }, void 0, false, {
                                fileName: "[project]/free claude code/app/login/page.tsx",
                                lineNumber: 459,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/free claude code/app/login/page.tsx",
                        lineNumber: 445,
                        columnNumber: 11
                    }, this),
                    mode === "verify" ? renderVerify() : activeTab === "signin" ? renderSignIn() : renderSignUp(),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: "24px",
                            paddingTop: "18px",
                            borderTop: "1px solid var(--border-light)",
                            textAlign: "center",
                            fontSize: "0.72rem",
                            color: "var(--text-muted)",
                            letterSpacing: "0.06em"
                        },
                        children: "By continuing, you agree to VELOUR's Terms of Service and Privacy Policy."
                    }, void 0, false, {
                        fileName: "[project]/free claude code/app/login/page.tsx",
                        lineNumber: 482,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/free claude code/app/login/page.tsx",
                lineNumber: 436,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/free claude code/app/login/page.tsx",
            lineNumber: 435,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/free claude code/app/login/page.tsx",
        lineNumber: 434,
        columnNumber: 5
    }, this);
}
_s(LoginPage, "UXYnm02BNukse2f9StmlF0ihcy8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = LoginPage;
var _c;
__turbopack_context__.k.register(_c, "LoginPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=free%20claude%20code_app_login_page_tsx_0tywwwryv6f_m._.js.map