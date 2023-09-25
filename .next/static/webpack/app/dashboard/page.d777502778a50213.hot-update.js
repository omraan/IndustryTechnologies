"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./app/dashboard/page.tsx":
/*!********************************!*\
  !*** ./app/dashboard/page.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Header */ \"(app-pages-browser)/./components/Header.tsx\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/firebase */ \"(app-pages-browser)/./firebase.ts\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/database */ \"(app-pages-browser)/./node_modules/firebase/database/dist/esm/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        console.log(\"Querying database...\");\n        const kpnRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_3__.ref)(_firebase__WEBPACK_IMPORTED_MODULE_2__.db, \"kpn\");\n        (0,firebase_database__WEBPACK_IMPORTED_MODULE_3__.onValue)(kpnRef, (snapshot)=>{\n            // Get the data from the snapshot\n            const data = snapshot.val();\n            // Combine the data into a single array\n            const combinedArr = [];\n            for(const key in data){\n                if (Object.prototype.hasOwnProperty.call(data, key)) {\n                    // Get the list of names for the current key\n                    const list = data[key].map((item)=>item.n).filter(Boolean);\n                    // Create an array of objects for the current key\n                    const items = list.map((name)=>{\n                        const { u: unit, v: value } = data[key].find((item)=>item.n === name);\n                        return {\n                            name,\n                            unit,\n                            value: [\n                                value\n                            ]\n                        };\n                    });\n                    // Add the objects to the combined array\n                    combinedArr.push(...items);\n                }\n            }\n            // Group the objects by name and unit\n            const groupedData = combinedArr.reduce((acc, curr)=>{\n                const { name, unit, value } = curr;\n                const key = \"\".concat(name, \"-\").concat(unit);\n                if (!acc[key]) {\n                    acc[key] = {\n                        name,\n                        unit,\n                        value: []\n                    };\n                }\n                acc[key].value.push(...value.filter(Boolean));\n                return acc;\n            }, {});\n            // Convert the grouped data into an array\n            const transformedData = Object.values(groupedData);\n            console.log(transformedData);\n        }, (error)=>{\n            console.log(\"Error retrieving data:\", error);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/omraantimmerarends/Sites/NextJs/IndustryTechnologies/app/dashboard/page.tsx\",\n                lineNumber: 65,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Hello world\"\n            }, void 0, false, {\n                fileName: \"/Users/omraantimmerarends/Sites/NextJs/IndustryTechnologies/app/dashboard/page.tsx\",\n                lineNumber: 66,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/omraantimmerarends/Sites/NextJs/IndustryTechnologies/app/dashboard/page.tsx\",\n        lineNumber: 64,\n        columnNumber: 3\n    }, this);\n}\n_s(Home, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ3lDO0FBQ1Q7QUFDOEI7QUFDNUI7QUFFbkIsU0FBU0s7O0lBQ3ZCRCxnREFBU0EsQ0FBQztRQUNURSxRQUFRQyxHQUFHLENBQUM7UUFDWixNQUFNQyxTQUFTTCxzREFBR0EsQ0FBQ0YseUNBQUVBLEVBQUU7UUFDdkJDLDBEQUFPQSxDQUNOTSxRQUNBLENBQUNDO1lBQ0EsaUNBQWlDO1lBQ2pDLE1BQU1DLE9BQTRCRCxTQUFTRSxHQUFHO1lBRTlDLHVDQUF1QztZQUN2QyxNQUFNQyxjQUFpRSxFQUFFO1lBRXpFLElBQUssTUFBTUMsT0FBT0gsS0FBTTtnQkFDdkIsSUFBSUksT0FBT0MsU0FBUyxDQUFDQyxjQUFjLENBQUNDLElBQUksQ0FBQ1AsTUFBTUcsTUFBTTtvQkFDcEQsNENBQTRDO29CQUM1QyxNQUFNSyxPQUFpQlIsSUFBSSxDQUFDRyxJQUFJLENBQUNNLEdBQUcsQ0FBQyxDQUFDQyxPQUFjQSxLQUFLQyxDQUFDLEVBQUVDLE1BQU0sQ0FBQ0M7b0JBRW5FLGlEQUFpRDtvQkFDakQsTUFBTUMsUUFBUU4sS0FBS0MsR0FBRyxDQUFDLENBQUNNO3dCQUN2QixNQUFNLEVBQUVDLEdBQUdDLElBQUksRUFBRUMsR0FBR0MsS0FBSyxFQUFFLEdBQUduQixJQUFJLENBQUNHLElBQUksQ0FBQ2lCLElBQUksQ0FBQyxDQUFDVixPQUFjQSxLQUFLQyxDQUFDLEtBQUtJO3dCQUN2RSxPQUFPOzRCQUFFQTs0QkFBTUU7NEJBQU1FLE9BQU87Z0NBQUNBOzZCQUFNO3dCQUFDO29CQUNyQztvQkFFQSx3Q0FBd0M7b0JBQ3hDakIsWUFBWW1CLElBQUksSUFBSVA7Z0JBQ3JCO1lBQ0Q7WUFFQSxxQ0FBcUM7WUFDckMsTUFBTVEsY0FBK0VwQixZQUFZcUIsTUFBTSxDQUN0RyxDQUFDQyxLQUFLQztnQkFDTCxNQUFNLEVBQUVWLElBQUksRUFBRUUsSUFBSSxFQUFFRSxLQUFLLEVBQUUsR0FBR007Z0JBQzlCLE1BQU10QixNQUFNLEdBQVdjLE9BQVJGLE1BQUssS0FBUSxPQUFMRTtnQkFFdkIsSUFBSSxDQUFDTyxHQUFHLENBQUNyQixJQUFJLEVBQUU7b0JBQ2RxQixHQUFHLENBQUNyQixJQUFJLEdBQUc7d0JBQUVZO3dCQUFNRTt3QkFBTUUsT0FBTyxFQUFFO29CQUFDO2dCQUNwQztnQkFFQUssR0FBRyxDQUFDckIsSUFBSSxDQUFDZ0IsS0FBSyxDQUFDRSxJQUFJLElBQUlGLE1BQU1QLE1BQU0sQ0FBQ0M7Z0JBQ3BDLE9BQU9XO1lBQ1IsR0FDQSxDQUFDO1lBR0YseUNBQXlDO1lBQ3pDLE1BQU1FLGtCQUFxRXRCLE9BQU91QixNQUFNLENBQUNMO1lBRXpGMUIsUUFBUUMsR0FBRyxDQUFDNkI7UUFDYixHQUNBLENBQUNFO1lBQ0FoQyxRQUFRQyxHQUFHLENBQUMsMEJBQTBCK0I7UUFDdkM7SUFFRixHQUFHLEVBQUU7SUFFTCxxQkFDQyw4REFBQ0M7UUFBS0MsV0FBVTs7MEJBQ2YsOERBQUN4QywwREFBTUE7Ozs7OzBCQUNQLDhEQUFDeUM7MEJBQUc7Ozs7Ozs7Ozs7OztBQUdQO0dBOUR3QnBDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9kYXNoYm9hcmQvcGFnZS50c3g/ZDEyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIkAvY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIkAvZmlyZWJhc2VcIjtcbmltcG9ydCB7IGdldERhdGFiYXNlLCBvblZhbHVlLCByZWYgfSBmcm9tIFwiZmlyZWJhc2UvZGF0YWJhc2VcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKFwiUXVlcnlpbmcgZGF0YWJhc2UuLi5cIik7XG5cdFx0Y29uc3Qga3BuUmVmID0gcmVmKGRiLCBcImtwblwiKTtcblx0XHRvblZhbHVlKFxuXHRcdFx0a3BuUmVmLFxuXHRcdFx0KHNuYXBzaG90KSA9PiB7XG5cdFx0XHRcdC8vIEdldCB0aGUgZGF0YSBmcm9tIHRoZSBzbmFwc2hvdFxuXHRcdFx0XHRjb25zdCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0gc25hcHNob3QudmFsKCk7XG5cblx0XHRcdFx0Ly8gQ29tYmluZSB0aGUgZGF0YSBpbnRvIGEgc2luZ2xlIGFycmF5XG5cdFx0XHRcdGNvbnN0IGNvbWJpbmVkQXJyOiB7IG5hbWU6IHN0cmluZzsgdW5pdDogc3RyaW5nOyB2YWx1ZTogbnVtYmVyW10gfVtdID0gW107XG5cblx0XHRcdFx0Zm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xuXHRcdFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KSkge1xuXHRcdFx0XHRcdFx0Ly8gR2V0IHRoZSBsaXN0IG9mIG5hbWVzIGZvciB0aGUgY3VycmVudCBrZXlcblx0XHRcdFx0XHRcdGNvbnN0IGxpc3Q6IHN0cmluZ1tdID0gZGF0YVtrZXldLm1hcCgoaXRlbTogYW55KSA9PiBpdGVtLm4pLmZpbHRlcihCb29sZWFuKTtcblxuXHRcdFx0XHRcdFx0Ly8gQ3JlYXRlIGFuIGFycmF5IG9mIG9iamVjdHMgZm9yIHRoZSBjdXJyZW50IGtleVxuXHRcdFx0XHRcdFx0Y29uc3QgaXRlbXMgPSBsaXN0Lm1hcCgobmFtZTogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHsgdTogdW5pdCwgdjogdmFsdWUgfSA9IGRhdGFba2V5XS5maW5kKChpdGVtOiBhbnkpID0+IGl0ZW0ubiA9PT0gbmFtZSk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB7IG5hbWUsIHVuaXQsIHZhbHVlOiBbdmFsdWVdIH07XG5cdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0Ly8gQWRkIHRoZSBvYmplY3RzIHRvIHRoZSBjb21iaW5lZCBhcnJheVxuXHRcdFx0XHRcdFx0Y29tYmluZWRBcnIucHVzaCguLi5pdGVtcyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gR3JvdXAgdGhlIG9iamVjdHMgYnkgbmFtZSBhbmQgdW5pdFxuXHRcdFx0XHRjb25zdCBncm91cGVkRGF0YTogUmVjb3JkPHN0cmluZywgeyBuYW1lOiBzdHJpbmc7IHVuaXQ6IHN0cmluZzsgdmFsdWU6IG51bWJlcltdIH0+ID0gY29tYmluZWRBcnIucmVkdWNlKFxuXHRcdFx0XHRcdChhY2MsIGN1cnIpID0+IHtcblx0XHRcdFx0XHRcdGNvbnN0IHsgbmFtZSwgdW5pdCwgdmFsdWUgfSA9IGN1cnI7XG5cdFx0XHRcdFx0XHRjb25zdCBrZXkgPSBgJHtuYW1lfS0ke3VuaXR9YDtcblxuXHRcdFx0XHRcdFx0aWYgKCFhY2Nba2V5XSkge1xuXHRcdFx0XHRcdFx0XHRhY2Nba2V5XSA9IHsgbmFtZSwgdW5pdCwgdmFsdWU6IFtdIH07XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGFjY1trZXldLnZhbHVlLnB1c2goLi4udmFsdWUuZmlsdGVyKEJvb2xlYW4pKTtcblx0XHRcdFx0XHRcdHJldHVybiBhY2M7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7fVxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdC8vIENvbnZlcnQgdGhlIGdyb3VwZWQgZGF0YSBpbnRvIGFuIGFycmF5XG5cdFx0XHRcdGNvbnN0IHRyYW5zZm9ybWVkRGF0YTogeyBuYW1lOiBzdHJpbmc7IHVuaXQ6IHN0cmluZzsgdmFsdWU6IG51bWJlcltdIH1bXSA9IE9iamVjdC52YWx1ZXMoZ3JvdXBlZERhdGEpO1xuXG5cdFx0XHRcdGNvbnNvbGUubG9nKHRyYW5zZm9ybWVkRGF0YSk7XG5cdFx0XHR9LFxuXHRcdFx0KGVycm9yKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiRXJyb3IgcmV0cmlldmluZyBkYXRhOlwiLCBlcnJvcik7XG5cdFx0XHR9XG5cdFx0KTtcblx0fSwgW10pO1xuXG5cdHJldHVybiAoXG5cdFx0PG1haW4gY2xhc3NOYW1lPVwiXCI+XG5cdFx0XHQ8SGVhZGVyIC8+XG5cdFx0XHQ8aDE+SGVsbG8gd29ybGQ8L2gxPlxuXHRcdDwvbWFpbj5cblx0KTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJkYiIsIm9uVmFsdWUiLCJyZWYiLCJ1c2VFZmZlY3QiLCJIb21lIiwiY29uc29sZSIsImxvZyIsImtwblJlZiIsInNuYXBzaG90IiwiZGF0YSIsInZhbCIsImNvbWJpbmVkQXJyIiwia2V5IiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwibGlzdCIsIm1hcCIsIml0ZW0iLCJuIiwiZmlsdGVyIiwiQm9vbGVhbiIsIml0ZW1zIiwibmFtZSIsInUiLCJ1bml0IiwidiIsInZhbHVlIiwiZmluZCIsInB1c2giLCJncm91cGVkRGF0YSIsInJlZHVjZSIsImFjYyIsImN1cnIiLCJ0cmFuc2Zvcm1lZERhdGEiLCJ2YWx1ZXMiLCJlcnJvciIsIm1haW4iLCJjbGFzc05hbWUiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/page.tsx\n"));

/***/ })

});