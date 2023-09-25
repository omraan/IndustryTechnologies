"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./app/login/page.tsx":
/*!****************************!*\
  !*** ./app/login/page.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Header */ \"(app-pages-browser)/./components/Header.tsx\");\n/* harmony import */ var _components_LoginForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/LoginForm */ \"(app-pages-browser)/./components/LoginForm.tsx\");\n/* harmony import */ var _components_RegisterForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/RegisterForm */ \"(app-pages-browser)/./components/RegisterForm.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst forms = [\n    {\n        name: \"login\",\n        text: \"Login\",\n        obj: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LoginForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/omraantimmerarends/Sites/NextJs/IndustryTechnologies/app/login/page.tsx\",\n            lineNumber: 17,\n            columnNumber: 8\n        }, undefined)\n    },\n    {\n        name: \"register\",\n        text: \"Register\",\n        obj: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RegisterForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/omraantimmerarends/Sites/NextJs/IndustryTechnologies/app/login/page.tsx\",\n            lineNumber: 22,\n            columnNumber: 8\n        }, undefined)\n    }\n];\nfunction Home() {\n    var _forms_find;\n    _s();\n    const [activeForm, setActiveForm] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"login\");\n    const handleTabClick = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((name)=>{\n        setActiveForm(name);\n    }, [\n        setActiveForm\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/omraantimmerarends/Sites/NextJs/IndustryTechnologies/app/login/page.tsx\",\n                lineNumber: 37,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col md:flex-row items-center p-5 mb-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center space-x-5 flex-1 justify-between w-full h-\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full max-w-md bg-white rounded-md mx-auto p-5 shadow-xl\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full justify-center text-center grid grid-cols-2 mt-2 mb-6 divide-x\",\n                                children: forms.map((form, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-lg \".concat(activeForm === form.name ? \"text-gray-700 font-bold\" : \"text-gray-500 hover:font-bold hover:text-gray-700 hover:cursor-pointer\"),\n                                            onClick: ()=>handleTabClick(form.name),\n                                            children: form.text\n                                        }, void 0, false, {\n                                            fileName: \"/Users/omraantimmerarends/Sites/NextJs/IndustryTechnologies/app/login/page.tsx\",\n                                            lineNumber: 44,\n                                            columnNumber: 10\n                                        }, this)\n                                    }, index, false, {\n                                        fileName: \"/Users/omraantimmerarends/Sites/NextJs/IndustryTechnologies/app/login/page.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 9\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/Users/omraantimmerarends/Sites/NextJs/IndustryTechnologies/app/login/page.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 7\n                            }, this),\n                            (_forms_find = forms.find((form)=>form.name === activeForm)) === null || _forms_find === void 0 ? void 0 : _forms_find.obj\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/omraantimmerarends/Sites/NextJs/IndustryTechnologies/app/login/page.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 6\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/omraantimmerarends/Sites/NextJs/IndustryTechnologies/app/login/page.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/omraantimmerarends/Sites/NextJs/IndustryTechnologies/app/login/page.tsx\",\n                lineNumber: 38,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/omraantimmerarends/Sites/NextJs/IndustryTechnologies/app/login/page.tsx\",\n        lineNumber: 36,\n        columnNumber: 3\n    }, this);\n}\n_s(Home, \"/u4P+IOXnguOGvAtSACZzQj0IP8=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sb2dpbi9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDeUM7QUFDTTtBQUNNO0FBQ1A7QUFROUMsTUFBTUssUUFBZ0I7SUFDckI7UUFDQ0MsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLG1CQUFLLDhEQUFDUCw2REFBU0E7Ozs7O0lBQ2hCO0lBQ0E7UUFDQ0ssTUFBTTtRQUNOQyxNQUFNO1FBQ05DLG1CQUFLLDhEQUFDTixnRUFBWUE7Ozs7O0lBQ25CO0NBQ0E7QUFFYyxTQUFTTztRQStCakJKOztJQTlCTixNQUFNLENBQUNLLFlBQVlDLGNBQWMsR0FBR1AsK0NBQVFBLENBQVM7SUFDckQsTUFBTVEsaUJBQWlCVCxrREFBV0EsQ0FDakMsQ0FBQ0c7UUFDQUssY0FBY0w7SUFDZixHQUNBO1FBQUNLO0tBQWM7SUFHaEIscUJBQ0MsOERBQUNFO1FBQUtDLFdBQVU7OzBCQUNmLDhEQUFDZCwwREFBTUE7Ozs7OzBCQUNQLDhEQUFDZTtnQkFBSUQsV0FBVTswQkFDZCw0RUFBQ0M7b0JBQUlELFdBQVU7OEJBQ2QsNEVBQUNDO3dCQUFJRCxXQUFVOzswQ0FDZCw4REFBQ0M7Z0NBQUlELFdBQVU7MENBQ2JULE1BQU1XLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDakIsOERBQUNIO2tEQUNBLDRFQUFDSTs0Q0FDQUwsV0FBVyxXQUlWLE9BSEFKLGVBQWVPLEtBQUtYLElBQUksR0FDckIsNEJBQ0E7NENBRUpjLFNBQVMsSUFBTVIsZUFBZUssS0FBS1gsSUFBSTtzREFFdENXLEtBQUtWLElBQUk7Ozs7Ozt1Q0FURlc7Ozs7Ozs7Ozs7NkJBY1hiLGNBQUFBLE1BQU1nQixJQUFJLENBQUMsQ0FBQ0osT0FBU0EsS0FBS1gsSUFBSSxLQUFLSSx5QkFBbkNMLGtDQUFBQSxZQUFnREcsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNMUQ7R0FyQ3dCQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvbG9naW4vcGFnZS50c3g/NDkwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIkAvY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSBcIkAvY29tcG9uZW50cy9Mb2dpbkZvcm1cIjtcbmltcG9ydCBSZWdpc3RlckZvcm0gZnJvbSBcIkAvY29tcG9uZW50cy9SZWdpc3RlckZvcm1cIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgRm9ybSB7XG5cdG5hbWU6IHN0cmluZztcblx0dGV4dDogc3RyaW5nO1xuXHRvYmo6IEpTWC5FbGVtZW50O1xufVxuXG5jb25zdCBmb3JtczogRm9ybVtdID0gW1xuXHR7XG5cdFx0bmFtZTogXCJsb2dpblwiLFxuXHRcdHRleHQ6IFwiTG9naW5cIixcblx0XHRvYmo6IDxMb2dpbkZvcm0gLz4sXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcInJlZ2lzdGVyXCIsXG5cdFx0dGV4dDogXCJSZWdpc3RlclwiLFxuXHRcdG9iajogPFJlZ2lzdGVyRm9ybSAvPixcblx0fSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cdGNvbnN0IFthY3RpdmVGb3JtLCBzZXRBY3RpdmVGb3JtXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJsb2dpblwiKTtcblx0Y29uc3QgaGFuZGxlVGFiQ2xpY2sgPSB1c2VDYWxsYmFjayhcblx0XHQobmFtZTogc3RyaW5nKSA9PiB7XG5cdFx0XHRzZXRBY3RpdmVGb3JtKG5hbWUpO1xuXHRcdH0sXG5cdFx0W3NldEFjdGl2ZUZvcm1dXG5cdCk7XG5cblx0cmV0dXJuIChcblx0XHQ8bWFpbiBjbGFzc05hbWU9XCJcIj5cblx0XHRcdDxIZWFkZXIgLz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBpdGVtcy1jZW50ZXIgcC01IG1iLTNcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTUgZmxleC0xIGp1c3RpZnktYmV0d2VlbiB3LWZ1bGwgaC1cIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1tZCBiZy13aGl0ZSByb3VuZGVkLW1kIG14LWF1dG8gcC01IHNoYWRvdy14bFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwganVzdGlmeS1jZW50ZXIgdGV4dC1jZW50ZXIgZ3JpZCBncmlkLWNvbHMtMiBtdC0yIG1iLTYgZGl2aWRlLXhcIj5cblx0XHRcdFx0XHRcdFx0e2Zvcm1zLm1hcCgoZm9ybSwgaW5kZXgpID0+IChcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGtleT17aW5kZXh9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW5cblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgdGV4dC1sZyAke1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFjdGl2ZUZvcm0gPT09IGZvcm0ubmFtZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyBcInRleHQtZ3JheS03MDAgZm9udC1ib2xkXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogXCJ0ZXh0LWdyYXktNTAwIGhvdmVyOmZvbnQtYm9sZCBob3Zlcjp0ZXh0LWdyYXktNzAwIGhvdmVyOmN1cnNvci1wb2ludGVyXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fWB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGhhbmRsZVRhYkNsaWNrKGZvcm0ubmFtZSl9XG5cdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtmb3JtLnRleHR9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHR7Zm9ybXMuZmluZCgoZm9ybSkgPT4gZm9ybS5uYW1lID09PSBhY3RpdmVGb3JtKT8ub2JqfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvbWFpbj5cblx0KTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJMb2dpbkZvcm0iLCJSZWdpc3RlckZvcm0iLCJ1c2VDYWxsYmFjayIsInVzZVN0YXRlIiwiZm9ybXMiLCJuYW1lIiwidGV4dCIsIm9iaiIsIkhvbWUiLCJhY3RpdmVGb3JtIiwic2V0QWN0aXZlRm9ybSIsImhhbmRsZVRhYkNsaWNrIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsIm1hcCIsImZvcm0iLCJpbmRleCIsInNwYW4iLCJvbkNsaWNrIiwiZmluZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/login/page.tsx\n"));

/***/ })

});