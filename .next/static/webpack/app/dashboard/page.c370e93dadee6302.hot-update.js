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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Header */ \"(app-pages-browser)/./components/Header.tsx\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/firebase */ \"(app-pages-browser)/./firebase.ts\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/database */ \"(app-pages-browser)/./node_modules/firebase/database/dist/esm/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        console.log(\"Querying database...\");\n        const kpnRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_3__.ref)(_firebase__WEBPACK_IMPORTED_MODULE_2__.db, \"kpn\");\n        (0,firebase_database__WEBPACK_IMPORTED_MODULE_3__.onValue)(kpnRef, (snapshot)=>{\n            const test = snapshot.val();\n            Object.keys(test).map((v, i)=>{\n                console.log(v);\n            });\n        }, (error)=>{\n            console.log(\"Error retrieving data:\", error);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/omraantimmerarends/Sites/NextJs/IndustryTechnologies/app/dashboard/page.tsx\",\n                lineNumber: 28,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Hello world\"\n            }, void 0, false, {\n                fileName: \"/Users/omraantimmerarends/Sites/NextJs/IndustryTechnologies/app/dashboard/page.tsx\",\n                lineNumber: 29,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/omraantimmerarends/Sites/NextJs/IndustryTechnologies/app/dashboard/page.tsx\",\n        lineNumber: 27,\n        columnNumber: 3\n    }, this);\n}\n_s(Home, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ3lDO0FBQ1Q7QUFDOEI7QUFDNUI7QUFFbkIsU0FBU0s7O0lBQ3ZCRCxnREFBU0EsQ0FBQztRQUNURSxRQUFRQyxHQUFHLENBQUM7UUFDWixNQUFNQyxTQUFTTCxzREFBR0EsQ0FBQ0YseUNBQUVBLEVBQUU7UUFDdkJDLDBEQUFPQSxDQUNOTSxRQUNBLENBQUNDO1lBQ0EsTUFBTUMsT0FBT0QsU0FBU0UsR0FBRztZQUV6QkMsT0FBT0MsSUFBSSxDQUFDSCxNQUFNSSxHQUFHLENBQUMsQ0FBQ0MsR0FBUUM7Z0JBQzlCVixRQUFRQyxHQUFHLENBQUNRO1lBQ2I7UUFDRCxHQUNBLENBQUNFO1lBQ0FYLFFBQVFDLEdBQUcsQ0FBQywwQkFBMEJVO1FBQ3ZDO0lBRUYsR0FBRyxFQUFFO0lBRUwscUJBQ0MsOERBQUNDO1FBQUtDLFdBQVU7OzBCQUNmLDhEQUFDbkIsMERBQU1BOzs7OzswQkFDUCw4REFBQ29COzBCQUFHOzs7Ozs7Ozs7Ozs7QUFHUDtHQXpCd0JmO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9kYXNoYm9hcmQvcGFnZS50c3g/ZDEyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIkAvY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIkAvZmlyZWJhc2VcIjtcbmltcG9ydCB7IGdldERhdGFiYXNlLCBvblZhbHVlLCByZWYgfSBmcm9tIFwiZmlyZWJhc2UvZGF0YWJhc2VcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKFwiUXVlcnlpbmcgZGF0YWJhc2UuLi5cIik7XG5cdFx0Y29uc3Qga3BuUmVmID0gcmVmKGRiLCBcImtwblwiKTtcblx0XHRvblZhbHVlKFxuXHRcdFx0a3BuUmVmLFxuXHRcdFx0KHNuYXBzaG90KSA9PiB7XG5cdFx0XHRcdGNvbnN0IHRlc3QgPSBzbmFwc2hvdC52YWwoKTtcblxuXHRcdFx0XHRPYmplY3Qua2V5cyh0ZXN0KS5tYXAoKHY6IGFueSwgaTogYW55KSA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2codik7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblx0XHRcdChlcnJvcikgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcIkVycm9yIHJldHJpZXZpbmcgZGF0YTpcIiwgZXJyb3IpO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH0sIFtdKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxtYWluIGNsYXNzTmFtZT1cIlwiPlxuXHRcdFx0PEhlYWRlciAvPlxuXHRcdFx0PGgxPkhlbGxvIHdvcmxkPC9oMT5cblx0XHQ8L21haW4+XG5cdCk7XG59XG4iXSwibmFtZXMiOlsiSGVhZGVyIiwiZGIiLCJvblZhbHVlIiwicmVmIiwidXNlRWZmZWN0IiwiSG9tZSIsImNvbnNvbGUiLCJsb2ciLCJrcG5SZWYiLCJzbmFwc2hvdCIsInRlc3QiLCJ2YWwiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwidiIsImkiLCJlcnJvciIsIm1haW4iLCJjbGFzc05hbWUiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/page.tsx\n"));

/***/ })

});