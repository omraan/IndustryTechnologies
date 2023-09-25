"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/RegisterForm.tsx":
/*!*************************************!*\
  !*** ./components/RegisterForm.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase */ \"(app-pages-browser)/./firebase.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction RegisterForm() {\n    _s();\n    const [registerData, setRegisterData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        firstName: \"\",\n        lastName: \"\",\n        email: \"\",\n        password: \"\"\n    });\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        try {\n            // Create a new user account with email and password\n            const { user } = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.createUserWithEmailAndPassword)(_firebase__WEBPACK_IMPORTED_MODULE_4__.auth, registerData.email, registerData.password);\n            // Create a new Firestore entity for the user\n            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_4__.db, \"users\", user.uid), {\n                firstName: registerData.firstName,\n                lastName: registerData.lastName,\n                email: registerData.email\n            });\n            // Set success message\n            setSuccess(true);\n            setError(null);\n        } catch (error) {\n            // Set error message\n            switch(error.code){\n                case \"auth/email-already-in-use\":\n                    setError(\"This email address is already in use. Please try another one.\");\n                    break;\n                case \"auth/weak-password\":\n                    setError(\"The password is too weak. Please choose a stronger password.\");\n                    break;\n                default:\n                    setError(\"An error occurred. Please try again later.\");\n                    break;\n            }\n            setSuccess(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        children: [\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-5\",\n                role: \"alert\",\n                children: error\n            }, void 0, false, {\n                fileName: \"/Users/omraantimmerarends/Sites/NextJs/IndustryTechnologies/components/RegisterForm.tsx\",\n                lineNumber: 64,\n                columnNumber: 5\n            }, this),\n            success && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-5\",\n                role: \"alert\",\n                children: \"Registration successful!\"\n            }, void 0, false, {\n                fileName: \"/Users/omraantimmerarends/Sites/NextJs/IndustryTechnologies/components/RegisterForm.tsx\",\n                lineNumber: 69,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    className: \"w-full rounded-md border border-gray-300 p-5 outline-none shadow-sm\",\n                    value: registerData.firstName,\n                    onChange: (event)=>setRegisterData({\n                            ...registerData,\n                            firstName: event.target.value\n                        }),\n                    placeholder: \"First name\"\n                }, void 0, false, {\n                    fileName: \"/Users/omraantimmerarends/Sites/NextJs/IndustryTechnologies/components/RegisterForm.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/omraantimmerarends/Sites/NextJs/IndustryTechnologies/components/RegisterForm.tsx\",\n                lineNumber: 76,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    className: \"w-full rounded-md border border-gray-300 p-5 outline-none shadow-sm\",\n                    value: registerData.lastName,\n                    onChange: (event)=>setRegisterData({\n                            ...registerData,\n                            lastName: event.target.value\n                        }),\n                    placeholder: \"Last name\"\n                }, void 0, false, {\n                    fileName: \"/Users/omraantimmerarends/Sites/NextJs/IndustryTechnologies/components/RegisterForm.tsx\",\n                    lineNumber: 86,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/omraantimmerarends/Sites/NextJs/IndustryTechnologies/components/RegisterForm.tsx\",\n                lineNumber: 85,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"email\",\n                    className: \"w-full rounded-md border border-gray-300 p-5 outline-none shadow-sm\",\n                    value: registerData.email,\n                    onChange: (event)=>setRegisterData({\n                            ...registerData,\n                            email: event.target.value\n                        }),\n                    placeholder: \"Email\"\n                }, void 0, false, {\n                    fileName: \"/Users/omraantimmerarends/Sites/NextJs/IndustryTechnologies/components/RegisterForm.tsx\",\n                    lineNumber: 95,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/omraantimmerarends/Sites/NextJs/IndustryTechnologies/components/RegisterForm.tsx\",\n                lineNumber: 94,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"password\",\n                    className: \"w-full rounded-md border border-gray-300 p-5 outline-none shadow-sm\",\n                    value: registerData.password,\n                    onChange: (event)=>setRegisterData({\n                            ...registerData,\n                            password: event.target.value\n                        }),\n                    placeholder: \"Password\"\n                }, void 0, false, {\n                    fileName: \"/Users/omraantimmerarends/Sites/NextJs/IndustryTechnologies/components/RegisterForm.tsx\",\n                    lineNumber: 104,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/omraantimmerarends/Sites/NextJs/IndustryTechnologies/components/RegisterForm.tsx\",\n                lineNumber: 103,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"password\",\n                    className: \"w-full rounded-md border border-gray-300 p-5 outline-none shadow-sm\",\n                    placeholder: \"Repeat password\"\n                }, void 0, false, {\n                    fileName: \"/Users/omraantimmerarends/Sites/NextJs/IndustryTechnologies/components/RegisterForm.tsx\",\n                    lineNumber: 113,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/omraantimmerarends/Sites/NextJs/IndustryTechnologies/components/RegisterForm.tsx\",\n                lineNumber: 112,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    disabled: success,\n                    className: \"p-5 bg-indigo-800 rounded-lg text-white w-full disabled:opacity-50 disabled:cursor-not-allowed\",\n                    children: \"Register\"\n                }, void 0, false, {\n                    fileName: \"/Users/omraantimmerarends/Sites/NextJs/IndustryTechnologies/components/RegisterForm.tsx\",\n                    lineNumber: 120,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/omraantimmerarends/Sites/NextJs/IndustryTechnologies/components/RegisterForm.tsx\",\n                lineNumber: 119,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/omraantimmerarends/Sites/NextJs/IndustryTechnologies/components/RegisterForm.tsx\",\n        lineNumber: 62,\n        columnNumber: 3\n    }, this);\n}\n_s(RegisterForm, \"Gn7S+xt7I8GGAxbW3R5cMb3mbmg=\");\n_c = RegisterForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RegisterForm);\nvar _c;\n$RefreshReg$(_c, \"RegisterForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUmVnaXN0ZXJGb3JtLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBK0U7QUFDOUI7QUFDaEI7QUFDTTtBQVN2QyxTQUFTTTs7SUFDUixNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHTCwrQ0FBUUEsQ0FBZTtRQUM5RE0sV0FBVztRQUNYQyxVQUFVO1FBQ1ZDLE9BQU87UUFDUEMsVUFBVTtJQUNYO0lBQ0EsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdYLCtDQUFRQSxDQUFnQjtJQUNsRCxNQUFNLENBQUNZLFNBQVNDLFdBQVcsR0FBR2IsK0NBQVFBLENBQVU7SUFFaEQsTUFBTWMsZUFBZSxPQUFPQztRQUMzQkEsTUFBTUMsY0FBYztRQUVwQixJQUFJO1lBQ0gsb0RBQW9EO1lBQ3BELE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQW1CLE1BQU1wQiw2RUFBOEJBLENBQ3BFSSwyQ0FBSUEsRUFDSkcsYUFBYUksS0FBSyxFQUNsQkosYUFBYUssUUFBUTtZQUd0Qiw2Q0FBNkM7WUFDN0MsTUFBTVYsMERBQU1BLENBQUNELHVEQUFHQSxDQUFDSSx5Q0FBRUEsRUFBRSxTQUFTZSxLQUFLQyxHQUFHLEdBQUc7Z0JBQ3hDWixXQUFXRixhQUFhRSxTQUFTO2dCQUNqQ0MsVUFBVUgsYUFBYUcsUUFBUTtnQkFDL0JDLE9BQU9KLGFBQWFJLEtBQUs7WUFDMUI7WUFFQSxzQkFBc0I7WUFDdEJLLFdBQVc7WUFDWEYsU0FBUztRQUNWLEVBQUUsT0FBT0QsT0FBWTtZQUNwQixvQkFBb0I7WUFDcEIsT0FBUUEsTUFBTVMsSUFBSTtnQkFDakIsS0FBSztvQkFDSlIsU0FBUztvQkFDVDtnQkFDRCxLQUFLO29CQUNKQSxTQUFTO29CQUNUO2dCQUNEO29CQUNDQSxTQUFTO29CQUNUO1lBQ0Y7WUFDQUUsV0FBVztRQUNaO0lBQ0Q7SUFFQSxxQkFDQyw4REFBQ087UUFBS0MsVUFBVVA7O1lBQ2RKLHVCQUNBLDhEQUFDWTtnQkFBSUMsV0FBVTtnQkFBdUVDLE1BQUs7MEJBQ3pGZDs7Ozs7O1lBR0ZFLHlCQUNBLDhEQUFDVTtnQkFDQUMsV0FBVTtnQkFDVkMsTUFBSzswQkFDTDs7Ozs7OzBCQUlGLDhEQUFDRjtnQkFBSUMsV0FBVTswQkFDZCw0RUFBQ0U7b0JBQ0FDLE1BQUs7b0JBQ0xILFdBQVU7b0JBQ1ZJLE9BQU92QixhQUFhRSxTQUFTO29CQUM3QnNCLFVBQVUsQ0FBQ2IsUUFBVVYsZ0JBQWdCOzRCQUFFLEdBQUdELFlBQVk7NEJBQUVFLFdBQVdTLE1BQU1jLE1BQU0sQ0FBQ0YsS0FBSzt3QkFBQztvQkFDdEZHLGFBQVk7Ozs7Ozs7Ozs7OzBCQUdkLDhEQUFDUjtnQkFBSUMsV0FBVTswQkFDZCw0RUFBQ0U7b0JBQ0FDLE1BQUs7b0JBQ0xILFdBQVU7b0JBQ1ZJLE9BQU92QixhQUFhRyxRQUFRO29CQUM1QnFCLFVBQVUsQ0FBQ2IsUUFBVVYsZ0JBQWdCOzRCQUFFLEdBQUdELFlBQVk7NEJBQUVHLFVBQVVRLE1BQU1jLE1BQU0sQ0FBQ0YsS0FBSzt3QkFBQztvQkFDckZHLGFBQVk7Ozs7Ozs7Ozs7OzBCQUdkLDhEQUFDUjtnQkFBSUMsV0FBVTswQkFDZCw0RUFBQ0U7b0JBQ0FDLE1BQUs7b0JBQ0xILFdBQVU7b0JBQ1ZJLE9BQU92QixhQUFhSSxLQUFLO29CQUN6Qm9CLFVBQVUsQ0FBQ2IsUUFBVVYsZ0JBQWdCOzRCQUFFLEdBQUdELFlBQVk7NEJBQUVJLE9BQU9PLE1BQU1jLE1BQU0sQ0FBQ0YsS0FBSzt3QkFBQztvQkFDbEZHLGFBQVk7Ozs7Ozs7Ozs7OzBCQUdkLDhEQUFDUjtnQkFBSUMsV0FBVTswQkFDZCw0RUFBQ0U7b0JBQ0FDLE1BQUs7b0JBQ0xILFdBQVU7b0JBQ1ZJLE9BQU92QixhQUFhSyxRQUFRO29CQUM1Qm1CLFVBQVUsQ0FBQ2IsUUFBVVYsZ0JBQWdCOzRCQUFFLEdBQUdELFlBQVk7NEJBQUVLLFVBQVVNLE1BQU1jLE1BQU0sQ0FBQ0YsS0FBSzt3QkFBQztvQkFDckZHLGFBQVk7Ozs7Ozs7Ozs7OzBCQUdkLDhEQUFDUjtnQkFBSUMsV0FBVTswQkFDZCw0RUFBQ0U7b0JBQ0FDLE1BQUs7b0JBQ0xILFdBQVU7b0JBQ1ZPLGFBQVk7Ozs7Ozs7Ozs7OzBCQUdkLDhEQUFDUjswQkFDQSw0RUFBQ1M7b0JBQ0FMLE1BQUs7b0JBQ0xNLFVBQVVwQjtvQkFDVlcsV0FBVTs4QkFDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNTDtHQXJIU3BCO0tBQUFBO0FBdUhULCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUmVnaXN0ZXJGb3JtLnRzeD8yYTgyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCwgVXNlckNyZWRlbnRpYWwgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHsgZG9jLCBzZXREb2MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgYXV0aCwgZGIgfSBmcm9tIFwiLi4vZmlyZWJhc2VcIjtcblxudHlwZSBSZWdpc3RlckRhdGEgPSB7XG5cdGZpcnN0TmFtZTogc3RyaW5nO1xuXHRsYXN0TmFtZTogc3RyaW5nO1xuXHRlbWFpbDogc3RyaW5nO1xuXHRwYXNzd29yZDogc3RyaW5nO1xufTtcblxuZnVuY3Rpb24gUmVnaXN0ZXJGb3JtKCkge1xuXHRjb25zdCBbcmVnaXN0ZXJEYXRhLCBzZXRSZWdpc3RlckRhdGFdID0gdXNlU3RhdGU8UmVnaXN0ZXJEYXRhPih7XG5cdFx0Zmlyc3ROYW1lOiBcIlwiLFxuXHRcdGxhc3ROYW1lOiBcIlwiLFxuXHRcdGVtYWlsOiBcIlwiLFxuXHRcdHBhc3N3b3JkOiBcIlwiLFxuXHR9KTtcblx0Y29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcblx0Y29uc3QgW3N1Y2Nlc3MsIHNldFN1Y2Nlc3NdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG5cdGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0dHJ5IHtcblx0XHRcdC8vIENyZWF0ZSBhIG5ldyB1c2VyIGFjY291bnQgd2l0aCBlbWFpbCBhbmQgcGFzc3dvcmRcblx0XHRcdGNvbnN0IHsgdXNlciB9OiBVc2VyQ3JlZGVudGlhbCA9IGF3YWl0IGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChcblx0XHRcdFx0YXV0aCxcblx0XHRcdFx0cmVnaXN0ZXJEYXRhLmVtYWlsLFxuXHRcdFx0XHRyZWdpc3RlckRhdGEucGFzc3dvcmRcblx0XHRcdCk7XG5cblx0XHRcdC8vIENyZWF0ZSBhIG5ldyBGaXJlc3RvcmUgZW50aXR5IGZvciB0aGUgdXNlclxuXHRcdFx0YXdhaXQgc2V0RG9jKGRvYyhkYiwgXCJ1c2Vyc1wiLCB1c2VyLnVpZCksIHtcblx0XHRcdFx0Zmlyc3ROYW1lOiByZWdpc3RlckRhdGEuZmlyc3ROYW1lLFxuXHRcdFx0XHRsYXN0TmFtZTogcmVnaXN0ZXJEYXRhLmxhc3ROYW1lLFxuXHRcdFx0XHRlbWFpbDogcmVnaXN0ZXJEYXRhLmVtYWlsLFxuXHRcdFx0fSk7XG5cblx0XHRcdC8vIFNldCBzdWNjZXNzIG1lc3NhZ2Vcblx0XHRcdHNldFN1Y2Nlc3ModHJ1ZSk7XG5cdFx0XHRzZXRFcnJvcihudWxsKTtcblx0XHR9IGNhdGNoIChlcnJvcjogYW55KSB7XG5cdFx0XHQvLyBTZXQgZXJyb3IgbWVzc2FnZVxuXHRcdFx0c3dpdGNoIChlcnJvci5jb2RlKSB7XG5cdFx0XHRcdGNhc2UgXCJhdXRoL2VtYWlsLWFscmVhZHktaW4tdXNlXCI6XG5cdFx0XHRcdFx0c2V0RXJyb3IoXCJUaGlzIGVtYWlsIGFkZHJlc3MgaXMgYWxyZWFkeSBpbiB1c2UuIFBsZWFzZSB0cnkgYW5vdGhlciBvbmUuXCIpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiYXV0aC93ZWFrLXBhc3N3b3JkXCI6XG5cdFx0XHRcdFx0c2V0RXJyb3IoXCJUaGUgcGFzc3dvcmQgaXMgdG9vIHdlYWsuIFBsZWFzZSBjaG9vc2UgYSBzdHJvbmdlciBwYXNzd29yZC5cIik7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0c2V0RXJyb3IoXCJBbiBlcnJvciBvY2N1cnJlZC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIik7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRzZXRTdWNjZXNzKGZhbHNlKTtcblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cblx0XHRcdHtlcnJvciAmJiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmctcmVkLTEwMCBib3JkZXIgYm9yZGVyLXJlZC00MDAgdGV4dC1yZWQtNzAwIHB4LTQgcHktMyByb3VuZGVkIG1iLTVcIiByb2xlPVwiYWxlcnRcIj5cblx0XHRcdFx0XHR7ZXJyb3J9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KX1cblx0XHRcdHtzdWNjZXNzICYmIChcblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImJnLWdyZWVuLTEwMCBib3JkZXIgYm9yZGVyLWdyZWVuLTQwMCB0ZXh0LWdyZWVuLTcwMCBweC00IHB5LTMgcm91bmRlZCBtYi01XCJcblx0XHRcdFx0XHRyb2xlPVwiYWxlcnRcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0UmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwhXG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KX1cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWItNVwiPlxuXHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBwLTUgb3V0bGluZS1ub25lIHNoYWRvdy1zbVwiXG5cdFx0XHRcdFx0dmFsdWU9e3JlZ2lzdGVyRGF0YS5maXJzdE5hbWV9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyhldmVudCkgPT4gc2V0UmVnaXN0ZXJEYXRhKHsgLi4ucmVnaXN0ZXJEYXRhLCBmaXJzdE5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkZpcnN0IG5hbWVcIlxuXHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1iLTVcIj5cblx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcC01IG91dGxpbmUtbm9uZSBzaGFkb3ctc21cIlxuXHRcdFx0XHRcdHZhbHVlPXtyZWdpc3RlckRhdGEubGFzdE5hbWV9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyhldmVudCkgPT4gc2V0UmVnaXN0ZXJEYXRhKHsgLi4ucmVnaXN0ZXJEYXRhLCBsYXN0TmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiTGFzdCBuYW1lXCJcblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYi01XCI+XG5cdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdHR5cGU9XCJlbWFpbFwiXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBwLTUgb3V0bGluZS1ub25lIHNoYWRvdy1zbVwiXG5cdFx0XHRcdFx0dmFsdWU9e3JlZ2lzdGVyRGF0YS5lbWFpbH1cblx0XHRcdFx0XHRvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRSZWdpc3RlckRhdGEoeyAuLi5yZWdpc3RlckRhdGEsIGVtYWlsOiBldmVudC50YXJnZXQudmFsdWUgfSl9XG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJFbWFpbFwiXG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWItNVwiPlxuXHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHR0eXBlPVwicGFzc3dvcmRcIlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcC01IG91dGxpbmUtbm9uZSBzaGFkb3ctc21cIlxuXHRcdFx0XHRcdHZhbHVlPXtyZWdpc3RlckRhdGEucGFzc3dvcmR9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyhldmVudCkgPT4gc2V0UmVnaXN0ZXJEYXRhKHsgLi4ucmVnaXN0ZXJEYXRhLCBwYXNzd29yZDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuXHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1iLTVcIj5cblx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0dHlwZT1cInBhc3N3b3JkXCJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHAtNSBvdXRsaW5lLW5vbmUgc2hhZG93LXNtXCJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlJlcGVhdCBwYXNzd29yZFwiXG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHR0eXBlPVwic3VibWl0XCJcblx0XHRcdFx0XHRkaXNhYmxlZD17c3VjY2Vzc31cblx0XHRcdFx0XHRjbGFzc05hbWU9XCJwLTUgYmctaW5kaWdvLTgwMCByb3VuZGVkLWxnIHRleHQtd2hpdGUgdy1mdWxsIGRpc2FibGVkOm9wYWNpdHktNTAgZGlzYWJsZWQ6Y3Vyc29yLW5vdC1hbGxvd2VkXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdFJlZ2lzdGVyXG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9mb3JtPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlckZvcm07XG4iXSwibmFtZXMiOlsiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiZG9jIiwic2V0RG9jIiwidXNlU3RhdGUiLCJhdXRoIiwiZGIiLCJSZWdpc3RlckZvcm0iLCJyZWdpc3RlckRhdGEiLCJzZXRSZWdpc3RlckRhdGEiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJlcnJvciIsInNldEVycm9yIiwic3VjY2VzcyIsInNldFN1Y2Nlc3MiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidXNlciIsInVpZCIsImNvZGUiLCJmb3JtIiwib25TdWJtaXQiLCJkaXYiLCJjbGFzc05hbWUiLCJyb2xlIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/RegisterForm.tsx\n"));

/***/ })

});