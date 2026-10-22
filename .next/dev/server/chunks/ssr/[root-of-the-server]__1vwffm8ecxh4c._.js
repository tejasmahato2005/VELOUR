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
"[project]/free claude code/app/product/[id]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductPage,
    "generateMetadata",
    ()=>generateMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/free claude code/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/free claude code/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/free claude code/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/free claude code/lib/api.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$components$2f$ProductDetailInteractive$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/free claude code/components/ProductDetailInteractive.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/free claude code/components/ProductCard.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$components$2f$ScrollReveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/free claude code/components/ScrollReveal.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function generateMetadata(props) {
    const { id } = await props.params;
    const product = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProductById"])(id);
    if (!product) {
        return {
            title: "Product Not Found — VELOUR"
        };
    }
    return {
        title: `${product.name} — VELOUR`,
        description: product.description.slice(0, 160),
        openGraph: {
            title: `${product.name} — VELOUR`,
            description: product.description,
            images: [
                {
                    url: product.images[0]
                }
            ]
        }
    };
}
async function ProductPage(props) {
    const { id } = await props.params;
    const product = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProductById"])(id);
    if (!product) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const relatedProducts = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRelated"])(product.id, 4);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "section",
        style: {
            paddingTop: "32px"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$components$2f$ProductDetailInteractive$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProductDetailInteractive"], {
                    product: product
                }, void 0, false, {
                    fileName: "[project]/free claude code/app/product/[id]/page.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                relatedProducts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    style: {
                        marginTop: "clamp(64px, 8vw, 112px)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "section-header-row",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "subheading",
                                        children: "Complete The Look"
                                    }, void 0, false, {
                                        fileName: "[project]/free claude code/app/product/[id]/page.tsx",
                                        lineNumber: 57,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "heading-1",
                                        children: "You May Also Appreciate"
                                    }, void 0, false, {
                                        fileName: "[project]/free claude code/app/product/[id]/page.tsx",
                                        lineNumber: 58,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/free claude code/app/product/[id]/page.tsx",
                                lineNumber: 56,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/free claude code/app/product/[id]/page.tsx",
                            lineNumber: 55,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "product-grid",
                            children: relatedProducts.map((relProduct, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$components$2f$ScrollReveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                                    delay: idx * 100,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProductCard"], {
                                        product: relProduct
                                    }, void 0, false, {
                                        fileName: "[project]/free claude code/app/product/[id]/page.tsx",
                                        lineNumber: 65,
                                        columnNumber: 19
                                    }, this)
                                }, relProduct.id, false, {
                                    fileName: "[project]/free claude code/app/product/[id]/page.tsx",
                                    lineNumber: 64,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/free claude code/app/product/[id]/page.tsx",
                            lineNumber: 62,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/free claude code/app/product/[id]/page.tsx",
                    lineNumber: 54,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/free claude code/app/product/[id]/page.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/free claude code/app/product/[id]/page.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
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
"[project]/free claude code/components/ProductDetailInteractive.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductDetailInteractive",
    ()=>ProductDetailInteractive
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/free claude code/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ProductDetailInteractive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ProductDetailInteractive() from the server but ProductDetailInteractive is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/free claude code/components/ProductDetailInteractive.tsx", "ProductDetailInteractive");
}),
"[project]/free claude code/components/ProductDetailInteractive.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$components$2f$ProductDetailInteractive$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/free claude code/components/ProductDetailInteractive.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$components$2f$ProductDetailInteractive$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
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
"[project]/free claude code/app/product/[id]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/free claude code/app/product/[id]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1vwffm8ecxh4c._.js.map