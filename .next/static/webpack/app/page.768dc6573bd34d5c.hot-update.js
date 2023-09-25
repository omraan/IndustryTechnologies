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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase */ \"(app-pages-browser)/./firebase.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction RegisterForm() {\n    _s();\n    const [registerData, setRegisterData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        firstName: \"\",\n        lastName: \"\",\n        email: \"\",\n        password: \"\"\n    });\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const auth = _firebase__WEBPACK_IMPORTED_MODULE_4__.auth;\n    const passwordPolicy = new firebase_auth__WEBPACK_IMPORTED_MODULE_1__.PasswordPolicy({\n        minLength: 8,\n        uppercase: true,\n        lowercase: true,\n        digits: true\n    });\n    auth.useDeviceLanguage();\n    auth.setPersistence(browserSessionPersistence);\n    auth.setLanguageCode(\"en\");\n    auth.setPasswordPolicy(passwordPolicy);\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        try {\n            // Create a new user account with email and password\n            const { user } = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.createUserWithEmailAndPassword)(auth, registerData.email, registerData.password);\n            // Create a new Firestore entity for the user\n            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_4__.db, \"users\", user.uid), {\n                firstName: registerData.firstName,\n                lastName: registerData.lastName,\n                email: registerData.email\n            });\n            // Set success message\n            setSuccess(true);\n            setError(null);\n        } catch (error) {\n            // Set error message\n            switch(error.code){\n                case \"auth/email-already-in-use\":\n                    setError(\"This email address is already in use. Please try another one.\");\n                    break;\n                case \"auth/weak-password\":\n                    setError(\"The password is too weak. Please choose a stronger password.\");\n                    break;\n                default:\n                    setError(\"An error occurred. Please try again later.\");\n                    break;\n            }\n            setSuccess(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        children: [\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-5\",\n                role: \"alert\",\n                children: error\n            }, void 0, false, {\n                fileName: \"/Users/omraantimmerarends/Sites/NextJs/IndustryTechnologies/components/RegisterForm.tsx\",\n                lineNumber: 75,\n                columnNumber: 5\n            }, this),\n            success && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-5\",\n                role: \"alert\",\n                children: \"Registration successful!\"\n            }, void 0, false, {\n                fileName: \"/Users/omraantimmerarends/Sites/NextJs/IndustryTechnologies/components/RegisterForm.tsx\",\n                lineNumber: 80,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    className: \"w-full rounded-md border border-gray-300 p-5 outline-none shadow-sm\",\n                    value: registerData.firstName,\n                    onChange: (event)=>setRegisterData({\n                            ...registerData,\n                            firstName: event.target.value\n                        }),\n                    placeholder: \"First name\"\n                }, void 0, false, {\n                    fileName: \"/Users/omraantimmerarends/Sites/NextJs/IndustryTechnologies/components/RegisterForm.tsx\",\n                    lineNumber: 88,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/omraantimmerarends/Sites/NextJs/IndustryTechnologies/components/RegisterForm.tsx\",\n                lineNumber: 87,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    className: \"w-full rounded-md border border-gray-300 p-5 outline-none shadow-sm\",\n                    value: registerData.lastName,\n                    onChange: (event)=>setRegisterData({\n                            ...registerData,\n                            lastName: event.target.value\n                        }),\n                    placeholder: \"Last name\"\n                }, void 0, false, {\n                    fileName: \"/Users/omraantimmerarends/Sites/NextJs/IndustryTechnologies/components/RegisterForm.tsx\",\n                    lineNumber: 97,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/omraantimmerarends/Sites/NextJs/IndustryTechnologies/components/RegisterForm.tsx\",\n                lineNumber: 96,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"email\",\n                    className: \"w-full rounded-md border border-gray-300 p-5 outline-none shadow-sm\",\n                    value: registerData.email,\n                    onChange: (event)=>setRegisterData({\n                            ...registerData,\n                            email: event.target.value\n                        }),\n                    placeholder: \"Email\"\n                }, void 0, false, {\n                    fileName: \"/Users/omraantimmerarends/Sites/NextJs/IndustryTechnologies/components/RegisterForm.tsx\",\n                    lineNumber: 106,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/omraantimmerarends/Sites/NextJs/IndustryTechnologies/components/RegisterForm.tsx\",\n                lineNumber: 105,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"password\",\n                    className: \"w-full rounded-md border border-gray-300 p-5 outline-none shadow-sm\",\n                    value: registerData.password,\n                    onChange: (event)=>setRegisterData({\n                            ...registerData,\n                            password: event.target.value\n                        }),\n                    placeholder: \"Password\"\n                }, void 0, false, {\n                    fileName: \"/Users/omraantimmerarends/Sites/NextJs/IndustryTechnologies/components/RegisterForm.tsx\",\n                    lineNumber: 115,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/omraantimmerarends/Sites/NextJs/IndustryTechnologies/components/RegisterForm.tsx\",\n                lineNumber: 114,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"password\",\n                    className: \"w-full rounded-md border border-gray-300 p-5 outline-none shadow-sm\",\n                    placeholder: \"Repeat password\"\n                }, void 0, false, {\n                    fileName: \"/Users/omraantimmerarends/Sites/NextJs/IndustryTechnologies/components/RegisterForm.tsx\",\n                    lineNumber: 124,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/omraantimmerarends/Sites/NextJs/IndustryTechnologies/components/RegisterForm.tsx\",\n                lineNumber: 123,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    className: \"p-5 bg-indigo-800 rounded-lg text-white w-full\",\n                    children: \"Register\"\n                }, void 0, false, {\n                    fileName: \"/Users/omraantimmerarends/Sites/NextJs/IndustryTechnologies/components/RegisterForm.tsx\",\n                    lineNumber: 131,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/omraantimmerarends/Sites/NextJs/IndustryTechnologies/components/RegisterForm.tsx\",\n                lineNumber: 130,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/omraantimmerarends/Sites/NextJs/IndustryTechnologies/components/RegisterForm.tsx\",\n        lineNumber: 73,\n        columnNumber: 3\n    }, this);\n}\n_s(RegisterForm, \"dyuopI9bHbYMdWIh8VprZib4Xjs=\", true);\n_c = RegisterForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RegisterForm);\nvar _c;\n$RefreshReg$(_c, \"RegisterForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUmVnaXN0ZXJGb3JtLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBcUY7QUFDcEM7QUFDaEI7QUFDc0I7QUFTdkQsU0FBU1E7O0lBQ1IsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR04sK0NBQVFBLENBQWU7UUFDOURPLFdBQVc7UUFDWEMsVUFBVTtRQUNWQyxPQUFPO1FBQ1BDLFVBQVU7SUFDWDtJQUNBLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHWiwrQ0FBUUEsQ0FBZ0I7SUFDbEQsTUFBTSxDQUFDYSxTQUFTQyxXQUFXLEdBQUdkLCtDQUFRQSxDQUFVO0lBRWhELE1BQU1FLE9BQWFDLDJDQUFZQTtJQUUvQixNQUFNWSxpQkFBaUIsSUFBSW5CLHlEQUFjQSxDQUFDO1FBQ3pDb0IsV0FBVztRQUNYQyxXQUFXO1FBQ1hDLFdBQVc7UUFDWEMsUUFBUTtJQUNUO0lBRUFqQixLQUFLa0IsaUJBQWlCO0lBQ3RCbEIsS0FBS21CLGNBQWMsQ0FBQ0M7SUFDcEJwQixLQUFLcUIsZUFBZSxDQUFDO0lBRXJCckIsS0FBS3NCLGlCQUFpQixDQUFDVDtJQUV2QixNQUFNVSxlQUFlLE9BQU9DO1FBQzNCQSxNQUFNQyxjQUFjO1FBRXBCLElBQUk7WUFDSCxvREFBb0Q7WUFDcEQsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBRyxNQUFNL0IsNkVBQThCQSxDQUFDSyxNQUFNRyxhQUFhSSxLQUFLLEVBQUVKLGFBQWFLLFFBQVE7WUFFckcsNkNBQTZDO1lBQzdDLE1BQU1YLDBEQUFNQSxDQUFDRCx1REFBR0EsQ0FBQ0cseUNBQUVBLEVBQUUsU0FBUzJCLEtBQUtDLEdBQUcsR0FBRztnQkFDeEN0QixXQUFXRixhQUFhRSxTQUFTO2dCQUNqQ0MsVUFBVUgsYUFBYUcsUUFBUTtnQkFDL0JDLE9BQU9KLGFBQWFJLEtBQUs7WUFDMUI7WUFFQSxzQkFBc0I7WUFDdEJLLFdBQVc7WUFDWEYsU0FBUztRQUNWLEVBQUUsT0FBT0QsT0FBTztZQUNmLG9CQUFvQjtZQUNwQixPQUFRQSxNQUFNbUIsSUFBSTtnQkFDakIsS0FBSztvQkFDSmxCLFNBQVM7b0JBQ1Q7Z0JBQ0QsS0FBSztvQkFDSkEsU0FBUztvQkFDVDtnQkFDRDtvQkFDQ0EsU0FBUztvQkFDVDtZQUNGO1lBQ0FFLFdBQVc7UUFDWjtJQUNEO0lBRUEscUJBQ0MsOERBQUNpQjtRQUFLQyxVQUFVUDs7WUFDZGQsdUJBQ0EsOERBQUNzQjtnQkFBSUMsV0FBVTtnQkFBdUVDLE1BQUs7MEJBQ3pGeEI7Ozs7OztZQUdGRSx5QkFDQSw4REFBQ29CO2dCQUNBQyxXQUFVO2dCQUNWQyxNQUFLOzBCQUNMOzs7Ozs7MEJBSUYsOERBQUNGO2dCQUFJQyxXQUFVOzBCQUNkLDRFQUFDRTtvQkFDQUMsTUFBSztvQkFDTEgsV0FBVTtvQkFDVkksT0FBT2pDLGFBQWFFLFNBQVM7b0JBQzdCZ0MsVUFBVSxDQUFDYixRQUFVcEIsZ0JBQWdCOzRCQUFFLEdBQUdELFlBQVk7NEJBQUVFLFdBQVdtQixNQUFNYyxNQUFNLENBQUNGLEtBQUs7d0JBQUM7b0JBQ3RGRyxhQUFZOzs7Ozs7Ozs7OzswQkFHZCw4REFBQ1I7Z0JBQUlDLFdBQVU7MEJBQ2QsNEVBQUNFO29CQUNBQyxNQUFLO29CQUNMSCxXQUFVO29CQUNWSSxPQUFPakMsYUFBYUcsUUFBUTtvQkFDNUIrQixVQUFVLENBQUNiLFFBQVVwQixnQkFBZ0I7NEJBQUUsR0FBR0QsWUFBWTs0QkFBRUcsVUFBVWtCLE1BQU1jLE1BQU0sQ0FBQ0YsS0FBSzt3QkFBQztvQkFDckZHLGFBQVk7Ozs7Ozs7Ozs7OzBCQUdkLDhEQUFDUjtnQkFBSUMsV0FBVTswQkFDZCw0RUFBQ0U7b0JBQ0FDLE1BQUs7b0JBQ0xILFdBQVU7b0JBQ1ZJLE9BQU9qQyxhQUFhSSxLQUFLO29CQUN6QjhCLFVBQVUsQ0FBQ2IsUUFBVXBCLGdCQUFnQjs0QkFBRSxHQUFHRCxZQUFZOzRCQUFFSSxPQUFPaUIsTUFBTWMsTUFBTSxDQUFDRixLQUFLO3dCQUFDO29CQUNsRkcsYUFBWTs7Ozs7Ozs7Ozs7MEJBR2QsOERBQUNSO2dCQUFJQyxXQUFVOzBCQUNkLDRFQUFDRTtvQkFDQUMsTUFBSztvQkFDTEgsV0FBVTtvQkFDVkksT0FBT2pDLGFBQWFLLFFBQVE7b0JBQzVCNkIsVUFBVSxDQUFDYixRQUFVcEIsZ0JBQWdCOzRCQUFFLEdBQUdELFlBQVk7NEJBQUVLLFVBQVVnQixNQUFNYyxNQUFNLENBQUNGLEtBQUs7d0JBQUM7b0JBQ3JGRyxhQUFZOzs7Ozs7Ozs7OzswQkFHZCw4REFBQ1I7Z0JBQUlDLFdBQVU7MEJBQ2QsNEVBQUNFO29CQUNBQyxNQUFLO29CQUNMSCxXQUFVO29CQUNWTyxhQUFZOzs7Ozs7Ozs7OzswQkFHZCw4REFBQ1I7MEJBQ0EsNEVBQUNTO29CQUFPTCxNQUFLO29CQUFTSCxXQUFVOzhCQUFpRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNckY7R0E1SFM5QjtLQUFBQTtBQThIVCwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1JlZ2lzdGVyRm9ybS50c3g/MmE4MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdXRoLCBQYXNzd29yZFBvbGljeSwgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCB7IGRvYywgc2V0RG9jIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGRiLCBhdXRoIGFzIGZpcmViYXNlQXV0aCB9IGZyb20gXCIuLi9maXJlYmFzZVwiO1xuXG50eXBlIFJlZ2lzdGVyRGF0YSA9IHtcblx0Zmlyc3ROYW1lOiBzdHJpbmc7XG5cdGxhc3ROYW1lOiBzdHJpbmc7XG5cdGVtYWlsOiBzdHJpbmc7XG5cdHBhc3N3b3JkOiBzdHJpbmc7XG59O1xuXG5mdW5jdGlvbiBSZWdpc3RlckZvcm0oKSB7XG5cdGNvbnN0IFtyZWdpc3RlckRhdGEsIHNldFJlZ2lzdGVyRGF0YV0gPSB1c2VTdGF0ZTxSZWdpc3RlckRhdGE+KHtcblx0XHRmaXJzdE5hbWU6IFwiXCIsXG5cdFx0bGFzdE5hbWU6IFwiXCIsXG5cdFx0ZW1haWw6IFwiXCIsXG5cdFx0cGFzc3dvcmQ6IFwiXCIsXG5cdH0pO1xuXHRjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuXHRjb25zdCBbc3VjY2Vzcywgc2V0U3VjY2Vzc10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cblx0Y29uc3QgYXV0aDogQXV0aCA9IGZpcmViYXNlQXV0aDtcblxuXHRjb25zdCBwYXNzd29yZFBvbGljeSA9IG5ldyBQYXNzd29yZFBvbGljeSh7XG5cdFx0bWluTGVuZ3RoOiA4LFxuXHRcdHVwcGVyY2FzZTogdHJ1ZSxcblx0XHRsb3dlcmNhc2U6IHRydWUsXG5cdFx0ZGlnaXRzOiB0cnVlLFxuXHR9KTtcblxuXHRhdXRoLnVzZURldmljZUxhbmd1YWdlKCk7XG5cdGF1dGguc2V0UGVyc2lzdGVuY2UoYnJvd3NlclNlc3Npb25QZXJzaXN0ZW5jZSk7XG5cdGF1dGguc2V0TGFuZ3VhZ2VDb2RlKFwiZW5cIik7XG5cblx0YXV0aC5zZXRQYXNzd29yZFBvbGljeShwYXNzd29yZFBvbGljeSk7XG5cblx0Y29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHR0cnkge1xuXHRcdFx0Ly8gQ3JlYXRlIGEgbmV3IHVzZXIgYWNjb3VudCB3aXRoIGVtYWlsIGFuZCBwYXNzd29yZFxuXHRcdFx0Y29uc3QgeyB1c2VyIH0gPSBhd2FpdCBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCwgcmVnaXN0ZXJEYXRhLmVtYWlsLCByZWdpc3RlckRhdGEucGFzc3dvcmQpO1xuXG5cdFx0XHQvLyBDcmVhdGUgYSBuZXcgRmlyZXN0b3JlIGVudGl0eSBmb3IgdGhlIHVzZXJcblx0XHRcdGF3YWl0IHNldERvYyhkb2MoZGIsIFwidXNlcnNcIiwgdXNlci51aWQpLCB7XG5cdFx0XHRcdGZpcnN0TmFtZTogcmVnaXN0ZXJEYXRhLmZpcnN0TmFtZSxcblx0XHRcdFx0bGFzdE5hbWU6IHJlZ2lzdGVyRGF0YS5sYXN0TmFtZSxcblx0XHRcdFx0ZW1haWw6IHJlZ2lzdGVyRGF0YS5lbWFpbCxcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBTZXQgc3VjY2VzcyBtZXNzYWdlXG5cdFx0XHRzZXRTdWNjZXNzKHRydWUpO1xuXHRcdFx0c2V0RXJyb3IobnVsbCk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdC8vIFNldCBlcnJvciBtZXNzYWdlXG5cdFx0XHRzd2l0Y2ggKGVycm9yLmNvZGUpIHtcblx0XHRcdFx0Y2FzZSBcImF1dGgvZW1haWwtYWxyZWFkeS1pbi11c2VcIjpcblx0XHRcdFx0XHRzZXRFcnJvcihcIlRoaXMgZW1haWwgYWRkcmVzcyBpcyBhbHJlYWR5IGluIHVzZS4gUGxlYXNlIHRyeSBhbm90aGVyIG9uZS5cIik7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJhdXRoL3dlYWstcGFzc3dvcmRcIjpcblx0XHRcdFx0XHRzZXRFcnJvcihcIlRoZSBwYXNzd29yZCBpcyB0b28gd2Vhay4gUGxlYXNlIGNob29zZSBhIHN0cm9uZ2VyIHBhc3N3b3JkLlwiKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRzZXRFcnJvcihcIkFuIGVycm9yIG9jY3VycmVkLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdHNldFN1Y2Nlc3MoZmFsc2UpO1xuXHRcdH1cblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuXHRcdFx0e2Vycm9yICYmIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiZy1yZWQtMTAwIGJvcmRlciBib3JkZXItcmVkLTQwMCB0ZXh0LXJlZC03MDAgcHgtNCBweS0zIHJvdW5kZWQgbWItNVwiIHJvbGU9XCJhbGVydFwiPlxuXHRcdFx0XHRcdHtlcnJvcn1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpfVxuXHRcdFx0e3N1Y2Nlc3MgJiYgKFxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYmctZ3JlZW4tMTAwIGJvcmRlciBib3JkZXItZ3JlZW4tNDAwIHRleHQtZ3JlZW4tNzAwIHB4LTQgcHktMyByb3VuZGVkIG1iLTVcIlxuXHRcdFx0XHRcdHJvbGU9XCJhbGVydFwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHRSZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCFcblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpfVxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYi01XCI+XG5cdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHAtNSBvdXRsaW5lLW5vbmUgc2hhZG93LXNtXCJcblx0XHRcdFx0XHR2YWx1ZT17cmVnaXN0ZXJEYXRhLmZpcnN0TmFtZX1cblx0XHRcdFx0XHRvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRSZWdpc3RlckRhdGEoeyAuLi5yZWdpc3RlckRhdGEsIGZpcnN0TmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiRmlyc3QgbmFtZVwiXG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWItNVwiPlxuXHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBwLTUgb3V0bGluZS1ub25lIHNoYWRvdy1zbVwiXG5cdFx0XHRcdFx0dmFsdWU9e3JlZ2lzdGVyRGF0YS5sYXN0TmFtZX1cblx0XHRcdFx0XHRvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRSZWdpc3RlckRhdGEoeyAuLi5yZWdpc3RlckRhdGEsIGxhc3ROYW1lOiBldmVudC50YXJnZXQudmFsdWUgfSl9XG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJMYXN0IG5hbWVcIlxuXHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1iLTVcIj5cblx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0dHlwZT1cImVtYWlsXCJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHAtNSBvdXRsaW5lLW5vbmUgc2hhZG93LXNtXCJcblx0XHRcdFx0XHR2YWx1ZT17cmVnaXN0ZXJEYXRhLmVtYWlsfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFJlZ2lzdGVyRGF0YSh7IC4uLnJlZ2lzdGVyRGF0YSwgZW1haWw6IGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkVtYWlsXCJcblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYi01XCI+XG5cdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdHR5cGU9XCJwYXNzd29yZFwiXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBwLTUgb3V0bGluZS1ub25lIHNoYWRvdy1zbVwiXG5cdFx0XHRcdFx0dmFsdWU9e3JlZ2lzdGVyRGF0YS5wYXNzd29yZH1cblx0XHRcdFx0XHRvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRSZWdpc3RlckRhdGEoeyAuLi5yZWdpc3RlckRhdGEsIHBhc3N3b3JkOiBldmVudC50YXJnZXQudmFsdWUgfSl9XG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWItNVwiPlxuXHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHR0eXBlPVwicGFzc3dvcmRcIlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcC01IG91dGxpbmUtbm9uZSBzaGFkb3ctc21cIlxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiUmVwZWF0IHBhc3N3b3JkXCJcblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwicC01IGJnLWluZGlnby04MDAgcm91bmRlZC1sZyB0ZXh0LXdoaXRlIHctZnVsbFwiPlxuXHRcdFx0XHRcdFJlZ2lzdGVyXG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9mb3JtPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlckZvcm07XG4iXSwibmFtZXMiOlsiUGFzc3dvcmRQb2xpY3kiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJkb2MiLCJzZXREb2MiLCJ1c2VTdGF0ZSIsImRiIiwiYXV0aCIsImZpcmViYXNlQXV0aCIsIlJlZ2lzdGVyRm9ybSIsInJlZ2lzdGVyRGF0YSIsInNldFJlZ2lzdGVyRGF0YSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImVycm9yIiwic2V0RXJyb3IiLCJzdWNjZXNzIiwic2V0U3VjY2VzcyIsInBhc3N3b3JkUG9saWN5IiwibWluTGVuZ3RoIiwidXBwZXJjYXNlIiwibG93ZXJjYXNlIiwiZGlnaXRzIiwidXNlRGV2aWNlTGFuZ3VhZ2UiLCJzZXRQZXJzaXN0ZW5jZSIsImJyb3dzZXJTZXNzaW9uUGVyc2lzdGVuY2UiLCJzZXRMYW5ndWFnZUNvZGUiLCJzZXRQYXNzd29yZFBvbGljeSIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ1c2VyIiwidWlkIiwiY29kZSIsImZvcm0iLCJvblN1Ym1pdCIsImRpdiIsImNsYXNzTmFtZSIsInJvbGUiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/RegisterForm.tsx\n"));

/***/ })

});