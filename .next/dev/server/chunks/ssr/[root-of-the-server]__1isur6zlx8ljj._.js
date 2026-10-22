module.exports = [
"[externals]/crypto [external] (crypto, cjs, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/[externals]_crypto_1l8g1csq86igy._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[externals]/crypto [external] (crypto, cjs)");
    });
});
}),
"[project]/free claude code/node_modules/socket.io-client/build/esm-debug/index.js [app-ssr] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/1uep_1vogv804j9js1._.js",
  "server/chunks/ssr/[externals]__0gs57g7kle_cc._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/free claude code/node_modules/socket.io-client/build/esm-debug/index.js [app-ssr] (ecmascript)");
    });
});
}),
];