(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/hooks/use-debounce.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDebounce",
    ()=>useDebounce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useDebounce(value, delay) {
    _s();
    const [debouncedValue, setDebouncedValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDebounce.useEffect": ()=>{
            const timer = setTimeout({
                "useDebounce.useEffect.timer": ()=>setDebouncedValue(value)
            }["useDebounce.useEffect.timer"], delay);
            return ({
                "useDebounce.useEffect": ()=>clearTimeout(timer)
            })["useDebounce.useEffect"];
        }
    }["useDebounce.useEffect"], [
        value,
        delay
    ]);
    return debouncedValue;
}
_s(useDebounce, "KDuPAtDOgxm8PU6legVJOb3oOmA=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/lib/research-search.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Splits a search query into phrases (quoted text) and individual terms.
 * 
 * This function parses a search query string and separates it into:
 * - Phrases: Text enclosed in quotation marks (e.g., "machine learning")
 * - Terms: Individual words not in quotes
 * 
 * @param query - The search query string to parse
 * @returns An object containing arrays of phrases and individual terms
 */ __turbopack_context__.s([
    "matchesQuery",
    ()=>matchesQuery,
    "splitQuery",
    ()=>splitQuery
]);
function splitQuery(query) {
    // Use regex to match either quoted phrases or individual words
    // - "[^"]*" matches text in quotes
    // - \S+ matches sequences of non-whitespace characters
    const parts = query.match(/"[^"]*"|\S+/g) || [];
    const phrases = [];
    const terms = [];
    parts.forEach((part)=>{
        if (part.startsWith('"')) {
            // Handle quoted phrases - remove quotes and normalize
            const phrase = part.replaceAll('"', "").trim();
            if (phrase) phrases.push(phrase.toLowerCase());
        } else {
            // Handle individual terms - normalize to lowercase
            terms.push(part.toLowerCase());
        }
    });
    return {
        phrases,
        terms
    };
}
function matchesQuery(text, phrases, terms) {
    const normalizedText = text.toLowerCase();
    return(// For terms: ALL terms must be found in the text (AND logic)
    // If no terms are provided, this condition is true
    (terms.every((term)=>normalizedText.includes(term)) || !terms.length) && // For phrases: ANY phrase can match (OR logic)
    // If no phrases are provided, this condition is true
    (phrases.some((phrase)=>normalizedText.includes(phrase)) || !phrases.length));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/lib/paper-display-year.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPaperDisplayYear",
    ()=>getPaperDisplayYear
]);
const DISPLAY_VENUE_NAMES = [
    "CVPR",
    "ICCV",
    "ECCV",
    "ICML",
    "ICLR",
    "NeurIPS",
    "NIPS",
    "AAAI",
    "WACV"
];
const VENUE_YEAR_REGEX = new RegExp("(".concat(DISPLAY_VENUE_NAMES.join("|"), ")\\s*(20\\d{2})"), "i");
function getPaperDisplayYear(paper) {
    var _paper_publisher;
    const pub = (_paper_publisher = paper.publisher) !== null && _paper_publisher !== void 0 ? _paper_publisher : "";
    const match = pub.match(VENUE_YEAR_REGEX);
    if (match) {
        const y = parseInt(match[2], 10);
        if (!Number.isNaN(y)) return y;
    }
    if (paper.date) {
        const y = new Date(paper.date).getFullYear();
        if (!Number.isNaN(y)) return y;
    }
    return 0;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/shared/author-black.svg (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/author-black.c857827b.svg");}),
"[project]/public/images/shared/author-black.svg.mjs { IMAGE => \"[project]/public/images/shared/author-black.svg (static in ecmascript)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$shared$2f$author$2d$black$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/shared/author-black.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$shared$2f$author$2d$black$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 800,
    height: 800,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/shared/date-black.svg (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/date-black.8adeac32.svg");}),
"[project]/public/images/shared/date-black.svg.mjs { IMAGE => \"[project]/public/images/shared/date-black.svg (static in ecmascript)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$shared$2f$date$2d$black$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/shared/date-black.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$shared$2f$date$2d$black$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 800,
    height: 800,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/publications/highlighted-searched-text.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Highlights text by adding <mark> tags around search terms found in the content.
 *
 * This function finds case-insensitive matches of search terms within text content
 * and wraps them in mark tags for visual highlighting.
 *
 * @param text - The original text to search within
 * @param searchTerms - Array of terms to highlight in the text
 * @returns The original text with search terms wrapped in <mark> tags
 */ __turbopack_context__.s([
    "default",
    ()=>HighlightedSearchedText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function HighlightedSearchedText(text) {
    let searchTerms = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    if (!searchTerms.length) return text;
    const escapedTerms = searchTerms.map((term)=>term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
    const regex = new RegExp("(".concat(escapedTerms.join("|"), ")"), "gi");
    return text.split(regex).map((part, idx)=>regex.test(part) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
            className: "bg-yellow-200",
            children: part
        }, idx, false, {
            fileName: "[project]/src/components/publications/highlighted-searched-text.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this) : part);
}
_c = HighlightedSearchedText;
var _c;
__turbopack_context__.k.register(_c, "HighlightedSearchedText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/publications/publication-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PublicationCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$lib$2f$paper$2d$display$2d$year$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/lib/paper-display-year.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$shared$2f$author$2d$black$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$shared$2f$author$2d$black$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/shared/author-black.svg.mjs { IMAGE => "[project]/public/images/shared/author-black.svg (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$shared$2f$date$2d$black$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$shared$2f$date$2d$black$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/shared/date-black.svg.mjs { IMAGE => "[project]/public/images/shared/date-black.svg (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$publications$2f$highlighted$2d$searched$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/publications/highlighted-searched-text.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
;
function PublicationCard(param) {
    let { publication, searchTerms } = param;
    var _publication_tags;
    var _publication_publisher, _publication_authors;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full text-[#686868] group hover:scale-105 transition-all duration-200 ease-in-out  shadow-lg relative pb-12 ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex md:flex-row flex-col gap-4 p-2 w-full",
                children: [
                    publication.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[200px] h-[200px]  relative rounded-md",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: publication.image,
                            alt: publication.title,
                            fill: true,
                            className: "rounded-md"
                        }, void 0, false, {
                            fileName: "[project]/src/components/publications/publication-card.tsx",
                            lineNumber: 27,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/publications/publication-card.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col flex-1 min-w-0 py-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs inline-flex ",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$publications$2f$highlighted$2d$searched$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((_publication_publisher = publication.publisher) !== null && _publication_publisher !== void 0 ? _publication_publisher : "", searchTerms)
                            }, void 0, false, {
                                fileName: "[project]/src/components/publications/publication-card.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-base text-black font-pt-serif leading-[120%] font-bold mt-1 mb-2 py-1 border-b border-t border-gray-300",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: publication.link,
                                    target: "_blank",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$publications$2f$highlighted$2d$searched$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(publication.title, searchTerms)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/publications/publication-card.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/publications/publication-card.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-sm mb-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$shared$2f$date$2d$black$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$shared$2f$date$2d$black$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                        alt: "date",
                                        width: 16,
                                        height: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/publications/publication-card.tsx",
                                        lineNumber: 50,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$lib$2f$paper$2d$display$2d$year$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPaperDisplayYear"])(publication) || publication.date
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/publications/publication-card.tsx",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/publications/publication-card.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-2 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$shared$2f$author$2d$black$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$shared$2f$author$2d$black$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                        alt: "author",
                                        width: 16,
                                        height: 16,
                                        className: "flex-shrink-0 mt-0.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/publications/publication-card.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm mb-4 break-words",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$publications$2f$highlighted$2d$searched$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(((_publication_authors = publication.authors) !== null && _publication_authors !== void 0 ? _publication_authors : []).filter((a)=>a !== "..." && a !== "…" && a.trim() !== "").join(", "), searchTerms)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/publications/publication-card.tsx",
                                        lineNumber: 63,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/publications/publication-card.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/publications/publication-card.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/publications/publication-card.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-4 left-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-auto flex flex-wrap gap-2",
                    children: (_publication_tags = publication.tags) === null || _publication_tags === void 0 ? void 0 : _publication_tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/research?tag=".concat(tag),
                            className: "px-3 py-1 text-sm font-semibold border-primary-red border-2 hover:bg-primary-red hover:text-white  transition-colors duration-200 ease-in-out",
                            children: tag
                        }, tag, false, {
                            fileName: "[project]/src/components/publications/publication-card.tsx",
                            lineNumber: 78,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/publications/publication-card.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/publications/publication-card.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/publications/publication-card.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = PublicationCard;
var _c;
__turbopack_context__.k.register(_c, "PublicationCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/consts/venues.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Venues displayed on the publications page (CVPR, ICCV, ECCV, ICML, ICLR, NeurIPS, AAAI, WACV). */ __turbopack_context__.s([
    "SORT_OPTIONS",
    ()=>SORT_OPTIONS,
    "VENUE_OPTIONS",
    ()=>VENUE_OPTIONS
]);
const VENUE_OPTIONS = [
    "CVPR",
    "ICCV",
    "ECCV",
    "ICML",
    "ICLR",
    "NeurIPS",
    "AAAI",
    "WACV"
];
const SORT_OPTIONS = [
    {
        value: "year-desc",
        label: "Year (newest first)"
    },
    {
        value: "year-asc",
        label: "Year (oldest first)"
    },
    {
        value: "venue",
        label: "Venue (A–Z)"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/home/bg.png (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/bg.ceb8001a.png");}),
"[project]/public/images/home/bg.png.mjs { IMAGE => \"[project]/public/images/home/bg.png (static in ecmascript)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$home$2f$bg$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/home/bg.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$home$2f$bg$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 2184,
    height: 1286,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAApUlEQVR42g3DPQsBYQDA8edzGG5w6hZvyeudl6dDTud1MCqRBSWEI0S52LgyGiwGo0/4Z/iJSi1AxVZpdZKMZz2855vN4ch2v+P1+SKKlkrOVJBljXq7QH80oVa3sKt5rrc7ImeqxFIKCd2P1QxjyCiapvz5kDKCaFgZqqU0MhtDN4IUzTiGHiWTDtGyDYSz6LJzBqxXA1bOkLM753pZ8vBc3NOUHxvsTzrAol7NAAAAAElFTkSuQmCC"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/shared/search.svg (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/search.53f247d1.svg");}),
"[project]/public/images/shared/search.svg.mjs { IMAGE => \"[project]/public/images/shared/search.svg (static in ecmascript)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$shared$2f$search$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/shared/search.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$shared$2f$search$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 28,
    height: 28,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/publications/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Publications
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$debounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-debounce.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$lib$2f$research$2d$search$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/lib/research-search.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$publications$2f$publication$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/publications/publication-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$consts$2f$venues$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/consts/venues.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$home$2f$bg$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$home$2f$bg$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/home/bg.png.mjs { IMAGE => "[project]/public/images/home/bg.png (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$shared$2f$search$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$shared$2f$search$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/shared/search.svg.mjs { IMAGE => "[project]/public/images/shared/search.svg (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
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
;
;
const DIMITRIS_SCHOLAR_URL = "https://scholar.google.com/citations?user=a7VNhCIAAAAJ&hl=en";
function Publications(param) {
    let { publications } = param;
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const currentSearch = searchParams.get("search") || "";
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const currentInputValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(currentSearch);
    const debouncedUrlUpdate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$debounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebounce"])(currentInputValue.current, 300);
    const selectedVenues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Publications.useMemo[selectedVenues]": ()=>searchParams.getAll("venue").filter({
                "Publications.useMemo[selectedVenues]": (v)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$consts$2f$venues$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VENUE_OPTIONS"].includes(v)
            }["Publications.useMemo[selectedVenues]"])
    }["Publications.useMemo[selectedVenues]"], [
        searchParams
    ]);
    const selectedYears = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Publications.useMemo[selectedYears]": ()=>searchParams.getAll("year").map({
                "Publications.useMemo[selectedYears]": (y)=>parseInt(y, 10)
            }["Publications.useMemo[selectedYears]"]).filter({
                "Publications.useMemo[selectedYears]": (y)=>!Number.isNaN(y) && y > 0
            }["Publications.useMemo[selectedYears]"])
    }["Publications.useMemo[selectedYears]"], [
        searchParams
    ]);
    const sort = searchParams.get("sort") || "year-desc";
    const [expandedYears, setExpandedYears] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const toggleYearExpanded = (year)=>{
        setExpandedYears((prev)=>{
            const next = new Set(prev);
            if (next.has(year)) next.delete(year);
            else next.add(year);
            return next;
        });
    };
    const filteredPublications = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Publications.useMemo[filteredPublications]": ()=>{
            if (!Array.isArray(publications)) return [];
            let result = [
                ...publications
            ];
            if (currentSearch) {
                const { phrases, terms } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$lib$2f$research$2d$search$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitQuery"])(currentSearch);
                result = result.map({
                    "Publications.useMemo[filteredPublications]": (yearGroup)=>{
                        var _yearGroup_papers;
                        return {
                            ...yearGroup,
                            papers: ((_yearGroup_papers = yearGroup.papers) !== null && _yearGroup_papers !== void 0 ? _yearGroup_papers : []).filter({
                                "Publications.useMemo[filteredPublications]": (paper)=>{
                                    var _paper_authors, _paper_publisher;
                                    const searchableText = [
                                        paper.title,
                                        ((_paper_authors = paper.authors) !== null && _paper_authors !== void 0 ? _paper_authors : []).join(" "),
                                        (_paper_publisher = paper.publisher) !== null && _paper_publisher !== void 0 ? _paper_publisher : ""
                                    ].join(" ");
                                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$lib$2f$research$2d$search$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matchesQuery"])(searchableText, phrases, terms);
                                }
                            }["Publications.useMemo[filteredPublications]"])
                        };
                    }
                }["Publications.useMemo[filteredPublications]"]).filter({
                    "Publications.useMemo[filteredPublications]": (yg)=>{
                        var _yg_papers;
                        var _yg_papers_length;
                        return ((_yg_papers_length = (_yg_papers = yg.papers) === null || _yg_papers === void 0 ? void 0 : _yg_papers.length) !== null && _yg_papers_length !== void 0 ? _yg_papers_length : 0) > 0;
                    }
                }["Publications.useMemo[filteredPublications]"]);
            }
            if (selectedVenues.length > 0) {
                result = result.map({
                    "Publications.useMemo[filteredPublications]": (yearGroup)=>{
                        var _yearGroup_papers;
                        return {
                            ...yearGroup,
                            papers: ((_yearGroup_papers = yearGroup.papers) !== null && _yearGroup_papers !== void 0 ? _yearGroup_papers : []).filter({
                                "Publications.useMemo[filteredPublications]": (paper)=>paper.venue && selectedVenues.includes(paper.venue)
                            }["Publications.useMemo[filteredPublications]"])
                        };
                    }
                }["Publications.useMemo[filteredPublications]"]).filter({
                    "Publications.useMemo[filteredPublications]": (yg)=>{
                        var _yg_papers;
                        var _yg_papers_length;
                        return ((_yg_papers_length = (_yg_papers = yg.papers) === null || _yg_papers === void 0 ? void 0 : _yg_papers.length) !== null && _yg_papers_length !== void 0 ? _yg_papers_length : 0) > 0;
                    }
                }["Publications.useMemo[filteredPublications]"]);
            }
            if (selectedYears.length > 0) {
                result = result.filter({
                    "Publications.useMemo[filteredPublications]": (yg)=>selectedYears.includes(yg.year)
                }["Publications.useMemo[filteredPublications]"]);
            }
            if (sort === "year-asc") {
                result = [
                    ...result
                ].sort({
                    "Publications.useMemo[filteredPublications]": (a, b)=>a.year - b.year
                }["Publications.useMemo[filteredPublications]"]);
            } else if (sort === "year-desc") {
                result = [
                    ...result
                ].sort({
                    "Publications.useMemo[filteredPublications]": (a, b)=>b.year - a.year
                }["Publications.useMemo[filteredPublications]"]);
            } else if (sort === "venue") {
                result = [
                    ...result
                ].sort({
                    "Publications.useMemo[filteredPublications]": (a, b)=>b.year - a.year
                }["Publications.useMemo[filteredPublications]"]);
                result = result.map({
                    "Publications.useMemo[filteredPublications]": (yg)=>{
                        var _yg_papers;
                        return {
                            ...yg,
                            papers: [
                                ...(_yg_papers = yg.papers) !== null && _yg_papers !== void 0 ? _yg_papers : []
                            ].sort({
                                "Publications.useMemo[filteredPublications]": (a, b)=>{
                                    var _a_venue;
                                    const va = (_a_venue = a.venue) !== null && _a_venue !== void 0 ? _a_venue : "";
                                    var _b_venue;
                                    const vb = (_b_venue = b.venue) !== null && _b_venue !== void 0 ? _b_venue : "";
                                    return va.localeCompare(vb);
                                }
                            }["Publications.useMemo[filteredPublications]"])
                        };
                    }
                }["Publications.useMemo[filteredPublications]"]);
            } else {
                result = [
                    ...result
                ].sort({
                    "Publications.useMemo[filteredPublications]": (a, b)=>b.year - a.year
                }["Publications.useMemo[filteredPublications]"]);
            }
            return result;
        }
    }["Publications.useMemo[filteredPublications]"], [
        publications,
        currentSearch,
        selectedVenues,
        selectedYears,
        sort
    ]);
    // Get all matched terms for highlighting
    const highlightTerms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Publications.useMemo[highlightTerms]": ()=>{
            if (!currentSearch) return [];
            const { phrases, terms } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$lib$2f$research$2d$search$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitQuery"])(currentSearch);
            return [
                ...phrases,
                ...terms
            ];
        }
    }["Publications.useMemo[highlightTerms]"], [
        currentSearch
    ]);
    const handleSearchChange = (e)=>{
        currentInputValue.current = e.target.value;
        router.refresh();
    };
    const updateParams = (updates)=>{
        const params = new URLSearchParams(searchParams);
        if (updates.venue !== undefined) {
            params.delete("venue");
            updates.venue.forEach((v)=>params.append("venue", v));
        }
        if (updates.year !== undefined) {
            params.delete("year");
            updates.year.forEach((y)=>params.append("year", String(y)));
        }
        if (updates.sort !== undefined) {
            if (updates.sort) params.set("sort", updates.sort);
            else params.delete("sort");
        }
        router.replace("/publications?".concat(params.toString()), {
            scroll: false
        });
    };
    const toggleVenue = (venue)=>{
        const next = selectedVenues.includes(venue) ? selectedVenues.filter((v)=>v !== venue) : [
            ...selectedVenues,
            venue
        ];
        updateParams({
            venue: next
        });
    };
    const toggleYear = (year)=>{
        const next = selectedYears.includes(year) ? selectedYears.filter((y)=>y !== year) : [
            ...selectedYears,
            year
        ];
        updateParams({
            year: next
        });
    };
    const yearsInData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Publications.useMemo[yearsInData]": ()=>{
            const set = new Set();
            publications.forEach({
                "Publications.useMemo[yearsInData]": (g)=>set.add(g.year)
            }["Publications.useMemo[yearsInData]"]);
            return [
                ...set
            ].sort({
                "Publications.useMemo[yearsInData]": (a, b)=>b - a
            }["Publications.useMemo[yearsInData]"]);
        }
    }["Publications.useMemo[yearsInData]"], [
        publications
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Publications.useEffect": ()=>{
            const params = new URLSearchParams(searchParams);
            if (debouncedUrlUpdate) {
                params.set("search", debouncedUrlUpdate);
            } else {
                params.delete("search");
            }
            if (params.toString() !== searchParams.toString()) {
                router.replace("/publications?".concat(params.toString()), {
                    scroll: false
                });
            }
        }
    }["Publications.useEffect"], [
        debouncedUrlUpdate,
        router,
        searchParams
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "w-full bg-white relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full flex flex-col items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$home$2f$bg$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$home$2f$bg$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                    alt: "Rutgers AI Lab Background",
                    className: "object-cover  w-full h-[360px]"
                }, void 0, false, {
                    fileName: "[project]/src/components/publications/index.tsx",
                    lineNumber: 180,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full  xl:max-w-[1140px] 2xl:max-w-[1320px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] pt-8 px-3  ",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-5 w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "xl:text-5xl text-3xl font-bold tracking-wide font-pt-serif",
                                    children: "Publications"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/publications/index.tsx",
                                    lineNumber: 194,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-secondary-text text-sm md:text-base",
                                    children: [
                                        "For further information, please visit",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: DIMITRIS_SCHOLAR_URL,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "text-primary-red font-semibold hover:underline",
                                            children: "Google Scholar"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/publications/index.tsx",
                                            lineNumber: 199,
                                            columnNumber: 15
                                        }, this),
                                        "."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/publications/index.tsx",
                                    lineNumber: 197,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/publications/index.tsx",
                            lineNumber: 193,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sticky top-[60px] z-50",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-fit md:w-full bg-white border-b border-b-gray-700 flex items-center hover:scale-105 focus:scale-105 hover:shadow-lg focus:shadow-lg shadow-md transition-all duration-200 ease-in-out  md:px-3 md:py-2 px-1.5 py-1 md:gap-10 gap-4  ",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        ref: inputRef,
                                        type: "text",
                                        defaultValue: currentSearch,
                                        onChange: handleSearchChange,
                                        placeholder: "Search Publications",
                                        className: "w-full px-4 pt-4 md:pb-6 pb-4    focus:outline-none md:text-xl text-base tracking-wider relative z-10 "
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/publications/index.tsx",
                                        lineNumber: 222,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$shared$2f$search$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$shared$2f$search$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                        alt: "Search Icon",
                                        className: "size-5 md:size-8"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/publications/index.tsx",
                                        lineNumber: 233,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/publications/index.tsx",
                                lineNumber: 213,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/publications/index.tsx",
                            lineNumber: 212,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sticky top-[120px] z-40 bg-white border-b border-gray-200 py-3 md:px-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap items-center gap-x-4 gap-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-semibold text-gray-700",
                                            children: "Conference:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/publications/index.tsx",
                                            lineNumber: 244,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$consts$2f$venues$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VENUE_OPTIONS"].map((venue)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>toggleVenue(venue),
                                                    className: "px-2.5 py-1 text-sm font-medium rounded border transition-colors ".concat(selectedVenues.includes(venue) ? "bg-primary-red text-white border-primary-red" : "bg-white text-gray-700 border-gray-300 hover:border-primary-red"),
                                                    children: venue
                                                }, venue, false, {
                                                    fileName: "[project]/src/components/publications/index.tsx",
                                                    lineNumber: 249,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/publications/index.tsx",
                                            lineNumber: 247,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/publications/index.tsx",
                                    lineNumber: 243,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap items-center gap-x-4 gap-y-2 mt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-semibold text-gray-700",
                                            children: "Year:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/publications/index.tsx",
                                            lineNumber: 265,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: yearsInData.map((y)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>toggleYear(y),
                                                    className: "px-2.5 py-1 text-sm font-medium rounded border transition-colors ".concat(selectedYears.includes(y) ? "bg-primary-red text-white border-primary-red" : "bg-white text-gray-700 border-gray-300 hover:border-primary-red"),
                                                    children: y
                                                }, y, false, {
                                                    fileName: "[project]/src/components/publications/index.tsx",
                                                    lineNumber: 268,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/publications/index.tsx",
                                            lineNumber: 266,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/publications/index.tsx",
                                    lineNumber: 264,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap items-center gap-2 mt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-semibold text-gray-700",
                                            children: "Sort:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/publications/index.tsx",
                                            lineNumber: 284,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: sort,
                                            onChange: (e)=>updateParams({
                                                    sort: e.target.value
                                                }),
                                            className: "px-2.5 py-1.5 text-sm font-medium rounded border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-red",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$consts$2f$venues$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SORT_OPTIONS"].map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: opt.value,
                                                    children: opt.label
                                                }, opt.value, false, {
                                                    fileName: "[project]/src/components/publications/index.tsx",
                                                    lineNumber: 293,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/publications/index.tsx",
                                            lineNumber: 285,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/publications/index.tsx",
                                    lineNumber: 283,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/publications/index.tsx",
                            lineNumber: 242,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8 pb-20 md:px-3 w-full flex flex-col gap-4",
                            children: filteredPublications.map((yearGroup)=>{
                                const isExpanded = expandedYears.has(yearGroup.year);
                                const count = yearGroup.papers.length;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-lg overflow-hidden shadow-md border border-gray-200/80 hover:shadow-lg transition-shadow duration-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>toggleYearExpanded(yearGroup.year),
                                            className: "w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white hover:bg-primary-red/5 border-l-4 border-primary-red transition-colors duration-200",
                                            "aria-expanded": isExpanded,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-pt-serif font-bold text-2xl text-primary-red tabular-nums",
                                                            "aria-hidden": true,
                                                            children: yearGroup.year
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/publications/index.tsx",
                                                            lineNumber: 322,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-primary-red/10 text-primary-red border border-primary-red/30",
                                                            children: [
                                                                count,
                                                                " paper",
                                                                count !== 1 ? "s" : ""
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/publications/index.tsx",
                                                            lineNumber: 328,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/publications/index.tsx",
                                                    lineNumber: 321,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center justify-center w-10 h-10 rounded-full\n                        bg-primary-red/10 text-primary-red\n                        transition-all duration-200 ".concat(isExpanded ? "rotate-180 bg-primary-red text-white" : ""),
                                                    "aria-hidden": true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-5 h-5",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: 2.5,
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            d: "M19 9l-7 7-7-7"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/publications/index.tsx",
                                                            lineNumber: 348,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/publications/index.tsx",
                                                        lineNumber: 341,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/publications/index.tsx",
                                                    lineNumber: 335,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/publications/index.tsx",
                                            lineNumber: 312,
                                            columnNumber: 19
                                        }, this),
                                        isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-t-2 border-primary-red/20 bg-gray-50/60 px-5 py-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 xl:grid-cols-2 gap-6",
                                                children: yearGroup.papers.map((paper)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$publications$2f$publication$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        publication: paper,
                                                        searchTerms: highlightTerms
                                                    }, paper.id, false, {
                                                        fileName: "[project]/src/components/publications/index.tsx",
                                                        lineNumber: 360,
                                                        columnNumber: 27
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/publications/index.tsx",
                                                lineNumber: 358,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/publications/index.tsx",
                                            lineNumber: 357,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, yearGroup.year, true, {
                                    fileName: "[project]/src/components/publications/index.tsx",
                                    lineNumber: 307,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/publications/index.tsx",
                            lineNumber: 302,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/publications/index.tsx",
                    lineNumber: 186,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/publications/index.tsx",
            lineNumber: 178,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/publications/index.tsx",
        lineNumber: 177,
        columnNumber: 5
    }, this);
}
_s(Publications, "FONTJaXd/bSiY2aeHKb5mQztQEk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$debounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebounce"]
    ];
});
_c = Publications;
var _c;
__turbopack_context__.k.register(_c, "Publications");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/publications/search-params-wrapper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SuspenseSearchParamsWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$publications$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/publications/index.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function SuspenseSearchParamsWrapper(param) {
    let { publications } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/src/components/publications/search-params-wrapper.tsx",
            lineNumber: 12,
            columnNumber: 25
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$publications$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            publications: publications
        }, void 0, false, {
            fileName: "[project]/src/components/publications/search-params-wrapper.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/publications/search-params-wrapper.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = SuspenseSearchParamsWrapper;
var _c;
__turbopack_context__.k.register(_c, "SuspenseSearchParamsWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_e7f82b4b._.js.map