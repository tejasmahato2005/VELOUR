module.exports = [
"[externals]/crypto [external] (crypto, cjs, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.resolve().then(() => {
        return parentImport("[externals]/crypto [external] (crypto, cjs)");
    });
});
}),
"[project]/free claude code/node_modules/socket.io-client/build/esm-debug/index.js [app-rsc] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/1uep_1xdgrl8diavl1._.js",
  "server/chunks/ssr/[externals]__0vtd-q407dkev._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/free claude code/node_modules/socket.io-client/build/esm-debug/index.js [app-rsc] (ecmascript)");
    });
});
}),
];