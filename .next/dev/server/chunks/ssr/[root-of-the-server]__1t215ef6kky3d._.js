module.exports = [
(()=>{"use strict";return[
"[project]/free claude code/app/favicon.ico.mjs { IMAGE => \"[project]/free claude code/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/free claude code/app/favicon.ico (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 48,
    height: 48
};
}),
"[project]/free claude code/app/women/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WomenPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/free claude code/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/free claude code/lib/api.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/free claude code/lib/data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/free claude code/components/ProductCard.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$components$2f$ListingControls$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/free claude code/components/ListingControls.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$components$2f$ScrollReveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/free claude code/components/ScrollReveal.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
const metadata = {
    title: "Women’s Collection — VELOUR",
    description: "Explore the VELOUR women’s collection. Sculptural tailoring, fine merino knitwear, silk dresses, and luxury outerwear."
};
async function WomenPage(props) {
    const searchParams = await props.searchParams;
    const subcategory = searchParams?.sub;
    const sort = searchParams?.sort || "featured";
    const [products, allWomenProducts] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProducts"])({
            category: "women",
            subcategory,
            sort
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProducts"])({
            category: "women"
        })
    ]);
    const activeSubcategories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["subcategoriesFor"])("women");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "section",
        style: {
            paddingTop: "24px"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "listing-hero",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "subheading",
                            children: "Department 01"
                        }, void 0, false, {
                            fileName: "[project]/free claude code/app/women/page.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "heading-display",
                            style: {
                                marginTop: "4px",
                                marginBottom: "8px"
                            },
                            children: "Women’s Collection"
                        }, void 0, false, {
                            fileName: "[project]/free claude code/app/women/page.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "lead-text",
                            style: {
                                maxWidth: "600px"
                            },
                            children: "Clean lines and tactile fabrications. An exploration of architectural drape, noble silks, and structured outerwear tailored for modern life."
                        }, void 0, false, {
                            fileName: "[project]/free claude code/app/women/page.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/free claude code/app/women/page.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$components$2f$ListingControls$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ListingControls"], {
                    subcategories: activeSubcategories,
                    activeSubcategory: subcategory,
                    activeSort: sort,
                    totalCount: allWomenProducts.length
                }, void 0, false, {
                    fileName: "[project]/free claude code/app/women/page.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this),
                products.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: "center",
                        padding: "72px 0",
                        backgroundColor: "var(--bg-subtle)",
                        margin: "32px 0"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "heading-3",
                            children: "No products found"
                        }, void 0, false, {
                            fileName: "[project]/free claude code/app/women/page.tsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: "var(--text-muted)",
                                marginTop: "8px"
                            },
                            children: "Try selecting a different subcategory or sorting option."
                        }, void 0, false, {
                            fileName: "[project]/free claude code/app/women/page.tsx",
                            lineNumber: 74,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/free claude code/app/women/page.tsx",
                    lineNumber: 65,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "product-grid",
                    children: products.map((product, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$components$2f$ScrollReveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                            delay: Math.min(idx * 60, 300),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProductCard"], {
                                product: product
                            }, void 0, false, {
                                fileName: "[project]/free claude code/app/women/page.tsx",
                                lineNumber: 82,
                                columnNumber: 17
                            }, this)
                        }, product.id, false, {
                            fileName: "[project]/free claude code/app/women/page.tsx",
                            lineNumber: 81,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/free claude code/app/women/page.tsx",
                    lineNumber: 79,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/free claude code/app/women/page.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/free claude code/app/women/page.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
}),
"[project]/free claude code/components/ListingControls.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ListingControls",
    ()=>ListingControls
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/free claude code/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ListingControls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ListingControls() from the server but ListingControls is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/free claude code/components/ListingControls.tsx", "ListingControls");
}),
"[project]/free claude code/components/ListingControls.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$components$2f$ListingControls$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/free claude code/components/ListingControls.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$components$2f$ListingControls$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/free claude code/components/ProductCard.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCard",
    ()=>ProductCard
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/free claude code/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ProductCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ProductCard() from the server but ProductCard is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/free claude code/components/ProductCard.tsx", "ProductCard");
}),
"[project]/free claude code/components/ProductCard.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/free claude code/components/ProductCard.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/free claude code/components/ScrollReveal.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollReveal",
    ()=>ScrollReveal
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/free claude code/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ScrollReveal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ScrollReveal() from the server but ScrollReveal is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/free claude code/components/ScrollReveal.tsx", "ScrollReveal");
}),
"[project]/free claude code/components/ScrollReveal.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$components$2f$ScrollReveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/free claude code/components/ScrollReveal.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$components$2f$ScrollReveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/free claude code/lib/api.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getFeatured",
    ()=>getFeatured,
    "getNewArrivals",
    ()=>getNewArrivals,
    "getProductById",
    ()=>getProductById,
    "getProducts",
    ()=>getProducts,
    "getRelated",
    ()=>getRelated,
    "getTrending",
    ()=>getTrending
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$lib$2f$insforge$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/free claude code/lib/insforge.ts [app-rsc] (ecmascript)");
;
function toProduct(row) {
    const imgs = Array.isArray(row.images) ? row.images : [];
    const primary = imgs[0] ?? "";
    const hover = imgs[1] ?? primary;
    return {
        id: row.id,
        name: row.name,
        category: row.category,
        subcategory: row.subcategory,
        price: row.price,
        ...row.compare_at_price !== null ? {
            compareAtPrice: row.compare_at_price
        } : {},
        description: row.description,
        sizes: row.sizes,
        images: [
            primary,
            hover
        ],
        featured: row.featured,
        isNew: row.is_new,
        trending: row.trending
    };
}
function applySort(q, sort) {
    switch(sort){
        case "price-asc":
            return q.order("price", {
                ascending: true
            });
        case "price-desc":
            return q.order("price", {
                ascending: false
            });
        case "newest":
            return q.order("is_new", {
                ascending: false
            }).order("created_at", {
                ascending: false
            });
        case "featured":
        default:
            return q.order("featured", {
                ascending: false
            }).order("created_at", {
                ascending: false
            });
    }
}
function sortInMemory(results, sort) {
    return [
        ...results
    ].sort((a, b)=>{
        switch(sort){
            case "price-asc":
                return a.price - b.price;
            case "price-desc":
                return b.price - a.price;
            case "newest":
                return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
            case "featured":
            default:
                return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
        }
    });
}
async function getProducts(options = {}) {
    const { category, subcategory, query, limit } = options;
    const sort = options.sort || "featured";
    let q = __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$lib$2f$insforge$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["insforge"].database.from("products").select("*");
    if (category) {
        q = q.eq("category", category);
    }
    if (subcategory && subcategory.toLowerCase() !== "all") {
        q = q.eq("subcategory", subcategory);
    }
    let rows;
    if (query && query.trim().length > 0) {
        // Full-text OR matching across name/description/subcategory/category cannot be
        // expressed with AND-chained filters, so fetch the (already category-filtered)
        // set and apply the search in memory, preserving the mock's exact semantics.
        const { data } = await q;
        rows = data || [];
    } else {
        q = applySort(q, sort);
        if (typeof limit === "number" && limit > 0) {
            q = q.limit(limit);
        }
        const { data } = await q;
        rows = data || [];
    }
    let results = rows.map(toProduct);
    if (query && query.trim().length > 0) {
        const ql = query.trim().toLowerCase();
        results = results.filter((p)=>{
            const matchName = p.name.toLowerCase().includes(ql);
            const matchDesc = p.description.toLowerCase().includes(ql);
            const matchSub = p.subcategory.toLowerCase().includes(ql);
            const matchCat = p.category.toLowerCase().includes(ql);
            return matchName || matchDesc || matchSub || matchCat;
        });
        results = sortInMemory(results, sort);
    }
    if (typeof limit === "number" && limit > 0) {
        results = results.slice(0, limit);
    }
    return results;
}
async function getProductById(id) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$lib$2f$insforge$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["insforge"].database.from("products").select("*").eq("id", id).maybeSingle();
    if (error) {
        throw error;
    }
    return data ? toProduct(data) : null;
}
async function getFeatured(limit = 4) {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$lib$2f$insforge$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["insforge"].database.from("products").select("*").eq("featured", true).order("created_at", {
        ascending: false
    }).limit(limit);
    return (data || []).map(toProduct);
}
async function getNewArrivals(limit = 4) {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$lib$2f$insforge$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["insforge"].database.from("products").select("*").eq("is_new", true).order("created_at", {
        ascending: false
    }).limit(limit);
    return (data || []).map(toProduct);
}
async function getTrending(limit = 4) {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$lib$2f$insforge$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["insforge"].database.from("products").select("*").eq("trending", true).order("created_at", {
        ascending: false
    }).limit(limit);
    return (data || []).map(toProduct);
}
async function getRelated(id, limit = 4) {
    const current = await getProductById(id);
    if (!current) {
        return [];
    }
    const { data: sameSub } = await __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$lib$2f$insforge$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["insforge"].database.from("products").select("*").eq("category", current.category).eq("subcategory", current.subcategory).neq("id", id);
    const sameSubMapped = (sameSub || []).map(toProduct);
    if (sameSubMapped.length >= limit) {
        return sameSubMapped.slice(0, limit);
    }
    const sameSubIds = new Set(sameSubMapped.map((p)=>p.id));
    const { data: sameCat } = await __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$lib$2f$insforge$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["insforge"].database.from("products").select("*").eq("category", current.category).neq("id", id);
    const sameCatMapped = (sameCat || []).map(toProduct).filter((p)=>!sameSubIds.has(p.id));
    return [
        ...sameSubMapped,
        ...sameCatMapped
    ].slice(0, limit);
}
}),
"[project]/free claude code/lib/data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BASE_PRODUCTS",
    ()=>BASE_PRODUCTS,
    "PREFERRED_SUBCATEGORIES",
    ()=>PREFERRED_SUBCATEGORIES,
    "PRODUCTS",
    ()=>PRODUCTS,
    "subcategoriesFor",
    ()=>subcategoriesFor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$lib$2f$generated$2d$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/free claude code/lib/generated-products.ts [app-rsc] (ecmascript)");
;
const PREFERRED_SUBCATEGORIES = [
    "Coats & Outerwear",
    "Tailored Jackets",
    "Knitwear & Sweaters",
    "Dresses & Jumpsuits",
    "Shirts & Tops",
    "Trousers & Jeans",
    "Footwear",
    "Accessories"
];
const img = (id, w = 900)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
const BASE_PRODUCTS = [
    // --- WOMEN'S COLLECTION ---
    {
        id: "wool-cashmere-overcoat",
        name: "Wool-Cashmere Belted Overcoat",
        category: "women",
        subcategory: "Coats & Outerwear",
        price: 1,
        compareAtPrice: 1,
        description: "Crafted from a double-faced wool and Mongolian cashmere blend, this wrap silhouette features a notched lapel, dropped shoulders, and a self-tie waist belt for relaxed luxury.",
        sizes: [
            "XS",
            "S",
            "M",
            "L",
            "XL"
        ],
        images: [
            img("photo-1539533018447-63fcce2678e3"),
            img("photo-1520975954732-35dd22299614")
        ],
        featured: true,
        isNew: false,
        trending: true
    },
    {
        id: "ribbed-mockneck-sweater",
        name: "Pure Merino Mockneck Sweater",
        category: "women",
        subcategory: "Knitwear & Sweaters",
        price: 1,
        description: "A timeless winter staple knit from 100% extra-fine merino wool. Designed with a comfortable high neckline, ribbed trims, and a subtly relaxed drape.",
        sizes: [
            "XS",
            "S",
            "M",
            "L"
        ],
        images: [
            img("photo-1434389677669-e08b4cac3105"),
            img("photo-1576566588028-4147f3842f27")
        ],
        featured: true,
        isNew: true,
        trending: false
    },
    {
        id: "silk-satin-slip-dress",
        name: "Bias-Cut Silk Slip Dress",
        category: "women",
        subcategory: "Dresses & Jumpsuits",
        price: 1,
        compareAtPrice: 1,
        description: "Fluid 19mm mulberry silk tailored on the bias for an effortless, skimming silhouette. Features delicate spaghetti straps and a soft scoop back.",
        sizes: [
            "XS",
            "S",
            "M",
            "L"
        ],
        images: [
            img("photo-1496747611176-843222e1e57c"),
            img("photo-1515886657613-9f3515b0c78f")
        ],
        featured: false,
        isNew: true,
        trending: true
    },
    {
        id: "pleated-wide-leg-trousers",
        name: "Pleated Wide-Leg Wool Trousers",
        category: "women",
        subcategory: "Trousers & Jeans",
        price: 1,
        description: "High-rise trousers cut with deep front pleats, slant pockets, and a fluid drape. Made from lightweight tropical wool ideal for all-season tailoring.",
        sizes: [
            "XS",
            "S",
            "M",
            "L",
            "XL"
        ],
        images: [
            img("photo-1509631179647-0177331693ae"),
            img("photo-1485968579580-b6d095142e6e")
        ],
        featured: true,
        isNew: false,
        trending: false
    },
    {
        id: "oversized-poplin-shirt-w",
        name: "Crisp Organic Poplin Shirt",
        category: "women",
        subcategory: "Shirts & Tops",
        price: 1,
        description: "Sculptural menswear-inspired silhouette tailored in crisp organic cotton poplin. Features extended cuffs, mother-of-pearl buttons, and a curved hem.",
        sizes: [
            "XS",
            "S",
            "M",
            "L"
        ],
        images: [
            img("photo-1594633312681-425c7b97ccd1"),
            img("photo-1554412933-514a83d2f3c8")
        ],
        featured: false,
        isNew: true,
        trending: true
    },
    {
        id: "sculpted-wool-blazer",
        name: "Hourglass Tailored Wool Blazer",
        category: "women",
        subcategory: "Tailored Jackets",
        price: 1,
        compareAtPrice: 1,
        description: "Impeccably constructed with a subtly nipped waist, structured shoulders, and horn button fastenings. A modern centerpiece for capsule dressing.",
        sizes: [
            "XS",
            "S",
            "M",
            "L",
            "XL"
        ],
        images: [
            img("photo-1591047139829-d91aecb6caea"),
            img("photo-1529139574466-a303027c1d8b")
        ],
        featured: true,
        isNew: false,
        trending: true
    },
    {
        id: "cashmere-crewneck-knit",
        name: "Featherweight Cashmere Crew",
        category: "women",
        subcategory: "Knitwear & Sweaters",
        price: 1,
        description: "Spun from grade-A Mongolian cashmere with an exceptionally soft hand. Minimalist crew neckline and ribbed micro-hem.",
        sizes: [
            "XS",
            "S",
            "M",
            "L"
        ],
        images: [
            img("photo-1525507119028-ed4c629a60a3"),
            img("photo-1490481651871-ab68de25d43d")
        ],
        featured: false,
        isNew: false,
        trending: true
    },
    {
        id: "minimalist-leather-tote",
        name: "Structured Calfskin Studio Tote",
        category: "women",
        subcategory: "Accessories",
        price: 1,
        description: "Handcrafted from full-grain Italian calfskin with painted edges and subtle gold foil stamping. Fits up to a 15-inch laptop with an internal zipped compartment.",
        sizes: [
            "ONE SIZE"
        ],
        images: [
            img("photo-1542272604-787c3835535d"),
            img("photo-1591369822096-ffd140ec948f")
        ],
        featured: true,
        isNew: true,
        trending: false
    },
    {
        id: "raw-hem-denim-skirt",
        name: "Column Denim Maxi Skirt",
        category: "women",
        subcategory: "Dresses & Jumpsuits",
        price: 1,
        description: "Rigid organic Japanese denim washed to a vintage ecru shade. High rise with a center-front slit for graceful movement.",
        sizes: [
            "XS",
            "S",
            "M",
            "L"
        ],
        images: [
            img("photo-1554568218-0f1715e72254"),
            img("photo-1521572163474-6864f9cf17ab")
        ],
        featured: false,
        isNew: true,
        trending: false
    },
    {
        id: "double-breasted-trench-w",
        name: "Water-Repellent Cotton Trench",
        category: "women",
        subcategory: "Coats & Outerwear",
        price: 1,
        compareAtPrice: 1,
        description: "Modern reimagining of the archival trench coat in heavy cotton gabardine. Includes raglan sleeves, storm flap, and a leather-buckled belt.",
        sizes: [
            "XS",
            "S",
            "M",
            "L"
        ],
        images: [
            img("photo-1520975954732-35dd22299614"),
            img("photo-1539533018447-63fcce2678e3")
        ],
        featured: true,
        isNew: false,
        trending: true
    },
    {
        id: "straight-organic-denim-w",
        name: "Classic High-Rise Straight Jeans",
        category: "women",
        subcategory: "Trousers & Jeans",
        price: 1,
        description: "Cut from 13oz non-stretch organic denim in a washed stonewash hue. Sits comfortably at the natural waist with an ankle-length hem.",
        sizes: [
            "XS",
            "S",
            "M",
            "L",
            "XL"
        ],
        images: [
            img("photo-1542272604-787c3835535d"),
            img("photo-1509631179647-0177331693ae")
        ],
        featured: false,
        isNew: false,
        trending: true
    },
    // --- MEN'S COLLECTION ---
    {
        id: "tailored-wool-coat-m",
        name: "Minimalist Single-Breasted Overcoat",
        category: "men",
        subcategory: "Coats & Outerwear",
        price: 1,
        compareAtPrice: 1,
        description: "Tailored in Italy from heavy virgin wool melton. Features concealed horn buttons, a structured chest canvas, and a cupro lining for smooth layering.",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        images: [
            img("photo-1521572163474-6864f9cf17ab"),
            img("photo-1552374196-c4e7ffc6e126")
        ],
        featured: true,
        isNew: false,
        trending: true
    },
    {
        id: "merino-chunky-cardigan",
        name: "Chunky Ribbed Shawl Cardigan",
        category: "men",
        subcategory: "Knitwear & Sweaters",
        price: 1,
        description: "Seven-gauge knit from boiled merino wool. Designed with a generous shawl collar, genuine corozo nut buttons, and front patch pockets.",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        images: [
            img("photo-1611312449408-fcece27cdbb7"),
            img("photo-1555529669-e69e7aa0ba9a")
        ],
        featured: true,
        isNew: true,
        trending: false
    },
    {
        id: "relaxed-linen-shirt-m",
        name: "Garment-Dyed French Linen Shirt",
        category: "men",
        subcategory: "Shirts & Tops",
        price: 1,
        description: "Woven from premium Normandy flax and washed for a soft, lived-in feel. Tailored with a camp collar and mother-of-pearl buttons.",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        images: [
            img("photo-1596755094514-f87e34085b2c"),
            img("photo-1507003211169-0a1dd7228f2d")
        ],
        featured: false,
        isNew: true,
        trending: true
    },
    {
        id: "pleated-tapered-trousers-m",
        name: "Single-Pleat Wool Flannel Trousers",
        category: "men",
        subcategory: "Trousers & Jeans",
        price: 1,
        description: "Refined trousers tailored from British wool flannel. Cut with a relaxed top block, subtle single pleat, and clean gentle taper towards the hem.",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        images: [
            img("photo-1551028719-00167b16eac5"),
            img("photo-1552374196-c4e7ffc6e126")
        ],
        featured: true,
        isNew: false,
        trending: false
    },
    {
        id: "unstructured-cotton-blazer",
        name: "Unstructured Washed Cotton Blazer",
        category: "men",
        subcategory: "Tailored Jackets",
        price: 1,
        compareAtPrice: 1,
        description: "Deconstructed two-button jacket in heavy organic cotton twill. Soft, unpadded shoulders and patch pockets give it an effortless, relaxed sophistication.",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        images: [
            img("photo-1507003211169-0a1dd7228f2d"),
            img("photo-1521572163474-6864f9cf17ab")
        ],
        featured: true,
        isNew: false,
        trending: true
    },
    {
        id: "heavyweight-mockneck-tee",
        name: "280gsm Heavy Mockneck Tee",
        category: "men",
        subcategory: "Shirts & Tops",
        price: 1,
        description: "Knitted in Portugal from combed organic long-staple cotton. Featuring a durable compact collar and clean boxy profile.",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        images: [
            img("photo-1552374196-c4e7ffc6e126"),
            img("photo-1596755094514-f87e34085b2c")
        ],
        featured: false,
        isNew: true,
        trending: false
    },
    {
        id: "selvedge-straight-denim-m",
        name: "14oz Kuroki Mills Selvedge Jeans",
        category: "men",
        subcategory: "Trousers & Jeans",
        price: 1,
        compareAtPrice: 1,
        description: "Crafted from shuttle-loom Japanese indigo selvedge denim. Mid rise, straight leg, custom copper hardware, and hidden rivet detailing.",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        images: [
            img("photo-1542272604-787c3835535d"),
            img("photo-1551028719-00167b16eac5")
        ],
        featured: false,
        isNew: false,
        trending: true
    },
    {
        id: "cashmere-waffle-knit-m",
        name: "Waffle-Knit Cashmere Pullover",
        category: "men",
        subcategory: "Knitwear & Sweaters",
        price: 1,
        description: "Textured thermal waffle knit in 100% two-ply cashmere. Exceptionally warm yet breathable, designed for year-round elevation.",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        images: [
            img("photo-1576566588028-4147f3842f27"),
            img("photo-1611312449408-fcece27cdbb7")
        ],
        featured: true,
        isNew: true,
        trending: false
    },
    {
        id: "minimalist-leather-chelsea",
        name: "Full-Grain Leather Chelsea Boot",
        category: "men",
        subcategory: "Footwear",
        price: 1,
        description: "Handcrafted in Porto using vegetable-tanned French calfskin on a Goodyear welted leather sole with inset rubber traction grips.",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        images: [
            img("photo-1555529669-e69e7aa0ba9a"),
            img("photo-1507003211169-0a1dd7228f2d")
        ],
        featured: false,
        isNew: false,
        trending: true
    },
    {
        id: "wool-scarf-fringe",
        name: "Brushed Alpaca-Wool Fringe Scarf",
        category: "men",
        subcategory: "Accessories",
        price: 1,
        description: "Woven in Scotland from a lofty blend of superfine alpaca and lambswool with twisted fringe edges.",
        sizes: [
            "ONE SIZE"
        ],
        images: [
            img("photo-1520975954732-35dd22299614"),
            img("photo-1539533018447-63fcce2678e3")
        ],
        featured: false,
        isNew: true,
        trending: false
    },
    {
        id: "technical-parka-m",
        name: "Technical Storm Hooded Parka",
        category: "men",
        subcategory: "Coats & Outerwear",
        price: 1,
        compareAtPrice: 1,
        description: "Engineered with a 3-layer breathable weatherproof shell, taped seams, two-way YKK Aquaguard zips, and recycled insulation fill.",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        images: [
            img("photo-1551028719-00167b16eac5"),
            img("photo-1521572163474-6864f9cf17ab")
        ],
        featured: false,
        isNew: false,
        trending: true
    }
];
const PRODUCTS = __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$lib$2f$generated$2d$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GENERATED_PRODUCTS"];
function subcategoriesFor(category) {
    const activeProducts = PRODUCTS.filter((p)=>p.category === category);
    const presentSubs = new Set(activeProducts.map((p)=>p.subcategory));
    const ordered = [];
    for (const sub of PREFERRED_SUBCATEGORIES){
        if (presentSubs.has(sub)) {
            ordered.push(sub);
            presentSubs.delete(sub);
        }
    }
    // Append any newly introduced subcategories that aren't in the preferred list
    for (const remaining of presentSubs){
        ordered.push(remaining);
    }
    return ordered;
}
}),
"[project]/free claude code/lib/generated-products.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GENERATED_PRODUCTS",
    ()=>GENERATED_PRODUCTS
]);
const GENERATED_PRODUCTS = [
    {
        "id": "silk-slip-dress",
        "name": "Silk Slip Dress",
        "category": "women",
        "subcategory": "Dresses & Jumpsuits",
        "price": 1,
        "compareAtPrice": 1,
        "description": "Fluid champagne mulberry silk slip dress with delicate adjustable straps and a bias-cut midi silhouette.",
        "sizes": [
            "XS",
            "S",
            "M",
            "L"
        ],
        "images": [
            "/images/products/silk-slip-dress-1.jpg",
            "/images/products/silk-slip-dress-2.jpg"
        ],
        "featured": true,
        "isNew": true,
        "trending": true
    },
    {
        "id": "oversized-wool-coat",
        "name": "Oversized Wool Coat",
        "category": "women",
        "subcategory": "Coats & Outerwear",
        "price": 1,
        "compareAtPrice": 1,
        "description": "Double-faced camel wool overcoat tailored with dropped shoulders, wide notched lapels, and deep patch pockets.",
        "sizes": [
            "XS",
            "S",
            "M",
            "L",
            "XL"
        ],
        "images": [
            "/images/products/oversized-wool-coat-1.jpg",
            "/images/products/oversized-wool-coat-2.jpg"
        ],
        "featured": true,
        "isNew": false,
        "trending": true
    },
    {
        "id": "relaxed-cashmere-sweater",
        "name": "Relaxed Cashmere Sweater",
        "category": "women",
        "subcategory": "Knitwear & Sweaters",
        "price": 1,
        "description": "Relaxed-fit oatmeal cashmere crewneck sweater spun from soft Mongolian yarns with fine ribbed trims.",
        "sizes": [
            "XS",
            "S",
            "M",
            "L"
        ],
        "images": [
            "/images/products/relaxed-cashmere-sweater-1.jpg",
            "/images/products/relaxed-cashmere-sweater-2.jpg"
        ],
        "featured": true,
        "isNew": true,
        "trending": false
    },
    {
        "id": "wide-leg-tailored-trousers",
        "name": "Wide-Leg Tailored Trousers",
        "category": "women",
        "subcategory": "Trousers & Jeans",
        "price": 1,
        "description": "High-waisted charcoal tailored trousers featuring clean pressed front creases and a relaxed fluid drape.",
        "sizes": [
            "XS",
            "S",
            "M",
            "L",
            "XL"
        ],
        "images": [
            "/images/products/wide-leg-tailored-trousers-1.jpg",
            "/images/products/wide-leg-tailored-trousers-2.jpg"
        ],
        "featured": false,
        "isNew": true,
        "trending": true
    },
    {
        "id": "linen-blazer-and-straight-denim",
        "name": "Linen Blazer and Straight Denim",
        "category": "women",
        "subcategory": "Tailored Jackets",
        "price": 1,
        "compareAtPrice": 1,
        "description": "Unstructured beige linen blazer styled over straight-leg light-wash denim jeans and an organic white tee.",
        "sizes": [
            "XS",
            "S",
            "M",
            "L"
        ],
        "images": [
            "/images/products/linen-blazer-and-straight-denim-1.jpg",
            "/images/products/linen-blazer-and-straight-denim-2.jpg"
        ],
        "featured": false,
        "isNew": true,
        "trending": false
    },
    {
        "id": "slim-oxford-button-down-shirt",
        "name": "Slim Oxford Button-Down Shirt",
        "category": "men",
        "subcategory": "Shirts & Tops",
        "price": 1,
        "description": "Crisp light-blue slim oxford cotton button-down shirt with mother-of-pearl buttons and a soft roll collar.",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "images": [
            "/images/products/slim-oxford-button-down-shirt-1.jpg",
            "/images/products/slim-oxford-button-down-shirt-2.jpg"
        ],
        "featured": true,
        "isNew": false,
        "trending": true
    },
    {
        "id": "tailored-charcoal-wool-overcoat",
        "name": "Tailored Charcoal Wool Overcoat",
        "category": "men",
        "subcategory": "Coats & Outerwear",
        "price": 1,
        "compareAtPrice": 1,
        "description": "Tailored virgin wool overcoat in charcoal with clean structured shoulders, notched lapels, and interior chest pockets.",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "images": [
            "/images/products/tailored-charcoal-wool-overcoat-1.jpg",
            "/images/products/tailored-charcoal-wool-overcoat-1.jpg"
        ],
        "featured": true,
        "isNew": true,
        "trending": true
    },
    {
        "id": "chunky-fisherman-cable-knit",
        "name": "Chunky Fisherman Cable Knit",
        "category": "men",
        "subcategory": "Knitwear & Sweaters",
        "price": 1,
        "description": "Heavyweight ecru ribbed fisherman sweater with visible chunky cable stitches and dense ribbed cuffs.",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "images": [
            "/images/products/chunky-fisherman-cable-knit-1.jpg",
            "/images/products/chunky-fisherman-cable-knit-2.jpg"
        ],
        "featured": true,
        "isNew": true,
        "trending": false
    },
    {
        "id": "heavyweight-essential-crewneck-tee",
        "name": "Heavyweight Essential Crewneck Tee",
        "category": "men",
        "subcategory": "Shirts & Tops",
        "price": 1,
        "description": "Dense 280gsm organic combed cotton t-shirt with a structured drape and bound ribbed collar.",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "images": [
            "/images/products/heavyweight-essential-crewneck-tee-1.jpg",
            "/images/products/heavyweight-essential-crewneck-tee-2.jpg"
        ],
        "featured": false,
        "isNew": true,
        "trending": true
    },
    {
        "id": "pleated-wide-leg-stone-trousers",
        "name": "Pleated Wide-Leg Stone Trousers",
        "category": "men",
        "subcategory": "Trousers & Jeans",
        "price": 1,
        "description": "Relaxed stone-toned trousers with deep forward pleats, side slash pockets, and a wide fluid leg line.",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "images": [
            "/images/products/pleated-wide-leg-stone-trousers-1.jpg",
            "/images/products/pleated-wide-leg-stone-trousers-1.jpg"
        ],
        "featured": false,
        "isNew": true,
        "trending": true
    }
];
}),
"[project]/free claude code/lib/insforge.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCurrentUser",
    ()=>getCurrentUser,
    "insforge",
    ()=>insforge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f40$insforge$2f$sdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/free claude code/node_modules/@insforge/sdk/dist/index.mjs [app-rsc] (ecmascript)");
;
const insforge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f40$insforge$2f$sdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])({
    baseUrl: ("TURBOPACK compile-time value", "https://xvxe4eek.ap-southeast.insforge.app"),
    anonKey: ("TURBOPACK compile-time value", "anon_3a0363ccf70dd37aa1aa1ba5c37d483ba09c3e687059eec70d8a4508a41cb5d2")
});
async function getCurrentUser() {
    const { data, error } = await insforge.auth.getCurrentUser();
    if (error || !data?.user) {
        return null;
    }
    return data.user;
}
}),
]})(),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/punycode [external] (punycode, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("punycode", () => require("punycode"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[project]/free claude code/app/favicon.ico (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/favicon.117ezoe8m31dk.ico" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/free claude code/app/women/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/free claude code/app/women/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1t215ef6kky3d._.js.map