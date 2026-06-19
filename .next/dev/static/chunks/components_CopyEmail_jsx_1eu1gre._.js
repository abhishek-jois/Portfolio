(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/CopyEmail.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CopyEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const EMAIL = 'abhiaklapura@gmail.com';
function CopyEmail() {
    _s();
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleCopy = ()=>{
        navigator.clipboard.writeText(EMAIL);
        setCopied(true);
        setTimeout(()=>setCopied(false), 2000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#333] rounded-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-gray-600 dark:text-gray-300 font-mono",
                        children: EMAIL
                    }, void 0, false, {
                        fileName: "[project]/components/CopyEmail.jsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleCopy,
                        className: "text-xs text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors ml-1 font-medium",
                        "aria-label": "Copy email",
                        children: copied ? '✓ Copied' : 'Copy'
                    }, void 0, false, {
                        fileName: "[project]/components/CopyEmail.jsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CopyEmail.jsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center gap-3 flex-wrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: `mailto:${EMAIL}`,
                        className: "inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 border border-gray-200 dark:border-[#333] rounded-lg bg-white dark:bg-[#0a0a0a] hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all hover:-translate-y-0.5",
                        children: "✉ Open in mail app"
                    }, void 0, false, {
                        fileName: "[project]/components/CopyEmail.jsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://github.com/abhishek-jois",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 border border-gray-200 dark:border-[#333] rounded-lg bg-white dark:bg-[#0a0a0a] hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all hover:-translate-y-0.5",
                        children: "⌥ GitHub"
                    }, void 0, false, {
                        fileName: "[project]/components/CopyEmail.jsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://www.linkedin.com/in/abhishek-hs-262560288/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 border border-gray-200 dark:border-[#333] rounded-lg bg-white dark:bg-[#0a0a0a] hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all hover:-translate-y-0.5",
                        children: "in LinkedIn"
                    }, void 0, false, {
                        fileName: "[project]/components/CopyEmail.jsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://scholar.google.com/citations?hl=en&user=cAmVi6gAAAAJ",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 border border-gray-200 dark:border-[#333] rounded-lg bg-white dark:bg-[#0a0a0a] hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all hover:-translate-y-0.5",
                        children: "Scholar"
                    }, void 0, false, {
                        fileName: "[project]/components/CopyEmail.jsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CopyEmail.jsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CopyEmail.jsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(CopyEmail, "NE86rL3vg4NVcTTWDavsT0hUBJs=");
_c = CopyEmail;
var _c;
__turbopack_context__.k.register(_c, "CopyEmail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_CopyEmail_jsx_1eu1gre._.js.map