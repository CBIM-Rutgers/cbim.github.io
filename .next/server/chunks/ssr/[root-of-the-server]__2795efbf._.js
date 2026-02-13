module.exports = [
"[project]/.next-internal/server/app/members/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/public/images/home/bg.png (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/bg.ceb8001a.png");}),
"[project]/public/images/home/bg.png.mjs { IMAGE => \"[project]/public/images/home/bg.png (static in ecmascript)\" } [app-rsc] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/components/members-page/member-list-item.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MemberListItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
;
;
function MemberListItem({ person }) {
    const hasLink = person.personalPageUrl && (person.personalPageUrl.startsWith("http") || person.personalPageUrl.startsWith("/"));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap items-baseline gap-x-2 gap-y-1 py-2 border-b border-gray-100 last:border-b-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-medium text-gray-900",
                children: hasLink ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: person.personalPageUrl,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-primary-red hover:underline",
                    children: person.name
                }, void 0, false, {
                    fileName: "[project]/src/components/members-page/member-list-item.tsx",
                    lineNumber: 25,
                    columnNumber: 11
                }, this) : person.name
            }, void 0, false, {
                fileName: "[project]/src/components/members-page/member-list-item.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            person.interest && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm text-gray-600",
                children: [
                    "— ",
                    person.interest
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/members-page/member-list-item.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm text-gray-500",
                children: [
                    "(",
                    person.enrollYear,
                    ")"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/members-page/member-list-item.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/members-page/member-list-item.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/members-page/alumni-list-item.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AlumniListItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
;
;
function AlumniListItem({ entry }) {
    const hasLink = !!entry.personalPageUrl;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap items-baseline gap-x-2 gap-y-1 py-2 border-b border-gray-100 last:border-b-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-medium text-gray-900",
                children: hasLink ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: entry.personalPageUrl,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-primary-red hover:underline",
                    children: entry.name
                }, void 0, false, {
                    fileName: "[project]/src/components/members-page/alumni-list-item.tsx",
                    lineNumber: 15,
                    columnNumber: 11
                }, this) : entry.name
            }, void 0, false, {
                fileName: "[project]/src/components/members-page/alumni-list-item.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            entry.year > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm text-gray-500",
                children: [
                    "(",
                    entry.year,
                    ")"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/members-page/alumni-list-item.tsx",
                lineNumber: 28,
                columnNumber: 9
            }, this),
            entry.currentPosition && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm text-gray-600 font-bold",
                children: [
                    "— ",
                    entry.currentPosition
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/members-page/alumni-list-item.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/members-page/alumni-list-item.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/utils/mock-data/members.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Mock data for research team members
__turbopack_context__.s([
    "groupPeopleByPosition",
    ()=>groupPeopleByPosition,
    "mockPeople",
    ()=>mockPeople
]);
const mockPeople = [
    // Faculty
    {
        "id": 1,
        "name": 'Professor Dimitris Metaxas',
        "personalPageUrl": 'https://cs.university.edu/~schen',
        "position": 'Faculty',
        "enrollYear": 2001,
        "profileImage": 'https://deeplearn.irdta.eu/2022su/wp-content/uploads/sites/4/2021/10/Dimitris-N.-Metaxas.jpg',
        "interest": ''
    },
    // {
    //   id: '2',
    //   name: 'Prof. Michael Rodriguez',
    //   personalPageUrl: 'https://cs.university.edu/~mrodriguez',
    //   position: 'Faculty',
    //   enrollYear: 2012,
    //   profileImage: 'https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg'
    // },
    // {
    //   id: '3',
    //   name: 'Dr. Emily Watson',
    //   personalPageUrl: 'https://cs.university.edu/~ewatson',
    //   position: 'Faculty',
    //   enrollYear: 2018,
    //   profileImage: 'https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg'
    // },
    // Postdoctoral Research Associate
    // {
    //   id: '4',
    //   name: 'Dr. Ahmed Hassan',
    //   personalPageUrl: 'https://cs.university.edu/~ahassan',
    //   position: 'Postdoctoral Research Associate',
    //   enrollYear: 2023,
    //   profileImage: 'https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg'
    // },
    // {
    //   id: '5',
    //   name: 'Dr. Lisa Park',
    //   personalPageUrl: 'https://cs.university.edu/~lpark',
    //   position: 'Postdoctoral Research Associate',
    //   enrollYear: 2024,
    //   profileImage: 'https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg'
    // },
    // PhD Students
    // Import the JSON data
    {
        "name": "Wenyi Mo",
        "interest": "Diffusion Models, Generative Models, Multimodal, MLLM",
        "profileImage": "/images/members/Wenyi_Mo.jpg",
        "id": 6,
        "personalPageUrl": "/",
        "enrollYear": 2024,
        "position": "PhD Students"
    },
    {
        "name": "Yanting Yang",
        "interest": "Embodied AI, LLM, Multimodal",
        "profileImage": "/images/members/Yanting_Yang.jpg",
        "id": 7,
        "personalPageUrl": "/",
        "enrollYear": 2024,
        "position": "PhD Students"
    },
    {
        "name": "Quyen Tran",
        "interest": "Generative Models",
        "profileImage": "/images/members/Quyen_Tran.jpg",
        "id": 8,
        "personalPageUrl": "/",
        "enrollYear": 2024,
        "position": "PhD Students"
    },
    {
        "name": "Quang Nguyen",
        "interest": "Diffusion Models, Multimodal, Generative Models",
        "profileImage": "/images/members/Quang_Nguyen.jpg",
        "id": 9,
        "personalPageUrl": "/",
        "enrollYear": 2024,
        "position": "PhD Students"
    },
    {
        "name": "Quan Dao",
        "interest": "Diffusion Models, Generative Models",
        "profileImage": "/images/members/Quan_Dao.jpg",
        "id": 10,
        "personalPageUrl": "/",
        "enrollYear": 2024,
        "position": "PhD Students"
    },
    {
        "name": "Di Liu",
        "interest": "Computer Vision, Vision-language Models, LLMs, Computer Graphics",
        "profileImage": "/images/members/Di_Liu.jpg",
        "id": 11,
        "personalPageUrl": "/",
        "enrollYear": 2024,
        "position": "PhD Students"
    },
    {
        "name": "Yang Zhou",
        "interest": "MLLM, VLM, LLM",
        "profileImage": "/images/members/Yang_Zhou.jpg",
        "id": 12,
        "personalPageUrl": "/",
        "enrollYear": 2024,
        "position": "PhD Students"
    },
    {
        "name": "Song Wen",
        "interest": "Generative Models, Diffusion Models",
        "profileImage": "/images/members/Song_Wen.jpg",
        "id": 13,
        "personalPageUrl": "/",
        "enrollYear": 2024,
        "position": "PhD Students"
    },
    {
        "name": "Ligong Han",
        "interest": "Diffusion Models, Generative Models, LLM",
        "profileImage": "/images/members/Ligong_Han.jpg",
        "id": 14,
        "personalPageUrl": "/",
        "enrollYear": 2024,
        "position": "PhD Students"
    },
    {
        "name": "Zhuowei Li",
        "interest": "Multimodal, LLM, Continual Learning",
        "profileImage": "/images/members/Zhuowei_Li.jpg",
        "id": 15,
        "personalPageUrl": "/",
        "enrollYear": 2024,
        "position": "PhD Students"
    },
    {
        "name": "Shiyu Zhao",
        "interest": "Multimodal LLM, Open Vocabulary Object Detection, Optical Flow Estimation",
        "profileImage": "/images/members/Shiyu_Zhao.jpg",
        "id": 16,
        "personalPageUrl": "/",
        "enrollYear": 2024,
        "position": "PhD Students"
    },
    {
        "name": "Can Jin",
        "interest": "Reinforcement Learning, Efficiency",
        "profileImage": "/images/members/Can_Jin.jpg",
        "id": 17,
        "personalPageUrl": "/",
        "enrollYear": 2024,
        "position": "PhD Students"
    },
    {
        "name": "Meng Ye",
        "interest": "AI for healthcare",
        "profileImage": "/images/members/Meng_Ye.jpg",
        "id": 18,
        "personalPageUrl": "/",
        "enrollYear": 2024,
        "position": "PhD Students"
    },
    {
        "name": "Difei Gu",
        "interest": "Multimodal Reasoning",
        "profileImage": "/images/members/Difei_Gu.jpg",
        "id": 19,
        "personalPageUrl": "/",
        "enrollYear": 2024,
        "position": "PhD Students"
    },
    {
        "name": "Zhanfu Yang",
        "interest": "3D, LLM, Generative Models",
        "profileImage": "/images/members/Zhanfu_Yang.jpg",
        "id": 20,
        "personalPageUrl": "/",
        "enrollYear": 2024,
        "position": "PhD Students"
    },
    {
        "name": "Mingyu Zhao",
        "interest": "Multimodal, LLM",
        "profileImage": "/images/members/Mingyu_Zhao.jpg",
        "id": 21,
        "personalPageUrl": "/",
        "enrollYear": 2024,
        "position": "PhD Students"
    }
];
const groupPeopleByPosition = (people)=>{
    const positionOrder = [
        'Faculty',
        // 'Postdoctoral Research Associate',
        'PhD Students',
        // 'MS/PhD Students',
        'MS Students',
        'Alumni'
    ];
    const grouped = people.reduce((acc, person)=>{
        if (!acc[person.position]) {
            acc[person.position] = [];
        }
        acc[person.position].push(person);
        return acc;
    }, {});
    // Sort each group by enroll year (earliest first, except Alumni which should be latest first)
    Object.keys(grouped).forEach((position)=>{
        if (position === 'Alumni') {
            grouped[position].sort((a, b)=>b.enrollYear - a.enrollYear);
        } else {
            grouped[position].sort((a, b)=>a.enrollYear - b.enrollYear);
        }
    });
    return positionOrder.map((position)=>({
            position,
            people: grouped[position] || []
        })).filter((group)=>group.people.length > 0);
};
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[project]/src/utils/lib/parse-csv-line.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Parse a single CSV line respecting double-quoted fields (which may contain commas).
 */ __turbopack_context__.s([
    "parseCSVLine",
    ()=>parseCSVLine
]);
function parseCSVLine(line) {
    const result = [];
    let current = "";
    let inQuotes = false;
    for(let i = 0; i < line.length; i++){
        const c = line[i];
        if (c === '"') {
            inQuotes = !inQuotes;
        } else if (c === "," && !inQuotes || c === "\r" && !inQuotes) {
            result.push(current.trim());
            current = "";
        } else if (c !== "\r") {
            current += c;
        }
    }
    result.push(current.trim());
    return result;
}
}),
"[project]/src/utils/lib/get-alumni.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAlumniFromCSV",
    ()=>getAlumniFromCSV
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$lib$2f$parse$2d$csv$2d$line$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/lib/parse-csv-line.ts [app-rsc] (ecmascript)");
;
;
;
async function getAlumniFromCSV() {
    const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "cbim_alumni.csv");
    const content = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["promises"].readFile(filePath, "utf8");
    const lines = content.split("\n").filter((line)=>line.trim());
    const entries = [];
    const headerRow = 1; // second line is header: Alumni,Position,Year,...
    for(let i = 0; i < lines.length; i++){
        if (i <= headerRow) continue;
        const cols = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$lib$2f$parse$2d$csv$2d$line$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseCSVLine"])(lines[i]);
        const name = cols[0]?.trim();
        if (!name) continue;
        const position = cols[1]?.trim() ?? "";
        const yearRaw = cols[2]?.trim();
        const year = yearRaw ? parseInt(yearRaw, 10) : 0;
        const supervisedBy = cols[3]?.trim() ?? "";
        const scholarUrl = cols[4]?.trim() || null;
        const currentPosition = cols[5]?.trim() ?? "";
        const thesis = cols[6]?.trim() ?? "";
        // Use scholar/profile URL as personal page (Google Scholar, ResearchGate, etc.)
        const personalPageUrl = scholarUrl && (scholarUrl.startsWith("http://") || scholarUrl.startsWith("https://")) ? scholarUrl : null;
        entries.push({
            name,
            position,
            year: Number.isNaN(year) ? 0 : year,
            supervisedBy,
            personalPageUrl,
            currentPosition,
            thesis
        });
    }
    // Sort by year descending (most recent first)
    entries.sort((a, b)=>b.year - a.year);
    return entries;
}
}),
"[project]/src/components/members-page/index.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Members
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$home$2f$bg$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$home$2f$bg$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/home/bg.png.mjs { IMAGE => "[project]/public/images/home/bg.png (static in ecmascript)" } [app-rsc] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$members$2d$page$2f$member$2d$list$2d$item$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/members-page/member-list-item.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$members$2d$page$2f$alumni$2d$list$2d$item$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/members-page/alumni-list-item.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mock$2d$data$2f$members$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/mock-data/members.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$lib$2f$get$2d$alumni$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/lib/get-alumni.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
function normalizeName(name) {
    return name.trim().toLowerCase();
}
async function Members() {
    const allFromCSV = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$lib$2f$get$2d$alumni$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAlumniFromCSV"])();
    const postdocs = allFromCSV.filter((e)=>e.position.toLowerCase() === "postdoc");
    const alumni = allFromCSV.filter((e)=>e.position.toLowerCase() !== "postdoc");
    const alumniNames = new Set(allFromCSV.map((a)=>normalizeName(a.name)));
    const currentMembersOnly = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mock$2d$data$2f$members$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mockPeople"].filter((person)=>!alumniNames.has(normalizeName(person.name)));
    const groupedPeople = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mock$2d$data$2f$members$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["groupPeopleByPosition"])(currentMembersOnly);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "w-full bg-white relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full flex flex-col items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$home$2f$bg$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$home$2f$bg$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                    alt: "Rutgers AI Lab Background",
                    className: "object-cover w-full h-[360px]"
                }, void 0, false, {
                    fileName: "[project]/src/components/members-page/index.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full  xl:max-w-[1140px] 2xl:max-w-[1320px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] pt-8 px-3  ",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-5 w-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "xl:text-5xl text-3xl font-bold tracking-wide font-pt-serif",
                                children: "Members"
                            }, void 0, false, {
                                fileName: "[project]/src/components/members-page/index.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/members-page/index.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-10 pb-12",
                            children: groupedPeople.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-b border-gray-200 flex md:flex-row flex-col justify-start items-start md:items-center md:gap-4 gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-2xl font-semibold font-pt-serif ",
                                                    children: group.position
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/members-page/index.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-600 mt-1 font-semibold tracking-wide",
                                                    children: [
                                                        group.people.length,
                                                        " Member",
                                                        group.people.length !== 1 ? "s" : ""
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/members-page/index.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/members-page/index.tsx",
                                            lineNumber: 51,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2",
                                            children: group.position === "Faculty" && group.people.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col sm:flex-row items-start gap-4 py-4 border-b border-gray-100",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "relative w-32 h-40 flex-shrink-0 overflow-hidden rounded-md shadow-md",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                                    src: group.people[0].profileImage,
                                                                    alt: `${group.people[0].name} profile`,
                                                                    fill: true,
                                                                    className: "object-cover",
                                                                    sizes: "128px"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/members-page/index.tsx",
                                                                    lineNumber: 69,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/members-page/index.tsx",
                                                                lineNumber: 68,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-col justify-center min-w-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: group.people[0].personalPageUrl?.startsWith("http") ? group.people[0].personalPageUrl : "#",
                                                                        target: "_blank",
                                                                        rel: "noopener noreferrer",
                                                                        className: "text-primary-red font-semibold hover:underline text-lg",
                                                                        children: group.people[0].name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/members-page/index.tsx",
                                                                        lineNumber: 78,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    group.people[0].interest && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm text-gray-600 mt-0.5",
                                                                        children: group.people[0].interest
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/members-page/index.tsx",
                                                                        lineNumber: 91,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/members-page/index.tsx",
                                                                lineNumber: 77,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/members-page/index.tsx",
                                                        lineNumber: 67,
                                                        columnNumber: 23
                                                    }, this),
                                                    group.people.slice(1).map((person)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$members$2d$page$2f$member$2d$list$2d$item$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                            person: person
                                                        }, person.id, false, {
                                                            fileName: "[project]/src/components/members-page/index.tsx",
                                                            lineNumber: 98,
                                                            columnNumber: 25
                                                        }, this))
                                                ]
                                            }, void 0, true) : group.people.map((person)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$members$2d$page$2f$member$2d$list$2d$item$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                    person: person
                                                }, person.id, false, {
                                                    fileName: "[project]/src/components/members-page/index.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/members-page/index.tsx",
                                            lineNumber: 64,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, group.position, true, {
                                    fileName: "[project]/src/components/members-page/index.tsx",
                                    lineNumber: 50,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/members-page/index.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        postdocs.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 pb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-b border-gray-200 flex md:flex-row flex-col justify-start items-start md:items-center md:gap-4 gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-semibold font-pt-serif",
                                            children: "Postdoc"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/members-page/index.tsx",
                                            lineNumber: 118,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600 mt-1 font-semibold tracking-wide",
                                            children: [
                                                postdocs.length,
                                                " Postdoc",
                                                postdocs.length !== 1 ? "s" : ""
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/members-page/index.tsx",
                                            lineNumber: 121,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/members-page/index.tsx",
                                    lineNumber: 114,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2",
                                    children: postdocs.map((entry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$members$2d$page$2f$alumni$2d$list$2d$item$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            entry: entry
                                        }, `${entry.name}-${entry.year}`, false, {
                                            fileName: "[project]/src/components/members-page/index.tsx",
                                            lineNumber: 127,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/members-page/index.tsx",
                                    lineNumber: 125,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/members-page/index.tsx",
                            lineNumber: 113,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 pb-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-b border-gray-200 flex md:flex-row flex-col justify-start items-start md:items-center md:gap-4 gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-semibold font-pt-serif",
                                            children: "Alumni"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/members-page/index.tsx",
                                            lineNumber: 139,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600 mt-1 font-semibold tracking-wide",
                                            children: [
                                                alumni.length,
                                                " Alumni"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/members-page/index.tsx",
                                            lineNumber: 142,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/members-page/index.tsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-secondary-text text-sm",
                                    children: "Our alumni hold positions at leading companies and universities. Links go to Google Scholar or personal research profiles when available."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/members-page/index.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2",
                                    children: alumni.map((entry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$members$2d$page$2f$alumni$2d$list$2d$item$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            entry: entry
                                        }, `${entry.name}-${entry.year}`, false, {
                                            fileName: "[project]/src/components/members-page/index.tsx",
                                            lineNumber: 153,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/members-page/index.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/members-page/index.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/members-page/index.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/members-page/index.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/members-page/index.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/members/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MembersPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$members$2d$page$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/members-page/index.tsx [app-rsc] (ecmascript)");
;
;
function MembersPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$members$2d$page$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/app/members/page.tsx",
        lineNumber: 4,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/app/members/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/members/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2795efbf._.js.map