"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/AccountOptions.tsx":
/*!*******************************************!*\
  !*** ./src/components/AccountOptions.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var libs_authorizedStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! libs/authorizedStatus */ \"./libs/authorizedStatus.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst AccountOptions = ()=>{\n    _s();\n    const [user, setUser] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        const fetchAuthorizedStatus = async ()=>{\n            try {\n                const data = await (0,libs_authorizedStatus__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n                setUser(data);\n            } catch (error) {\n                console.error(error);\n            }\n        };\n        fetchAuthorizedStatus();\n    }, []);\n    const [displayName, setDisplayName] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const [email, setEmail] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const [password, setPassword] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const [accountError, setAccountError] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const updateAccount = async ()=>{\n        try {\n            const { status  } = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"api/files/updateAccount\", {\n                displayName,\n                email,\n                password\n            }, {\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            if (status === 200) {\n                window.location.href = \"/\";\n            } else {\n                setAccountError(\"Invalid credentials\");\n            }\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    const deleteAccount = async ()=>{\n        try {\n            const confirmed = window.confirm(\"ARE YOU SURE YOU WANT TO DELETE ACCOUNT? THIS CANNOT BE UNDONE.\");\n            if (confirmed) {\n                const { status  } = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"api/files/deleteAccount\", {\n                    password\n                }, {\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    }\n                });\n                if (status === 200) {\n                    window.location.href = \"/\";\n                }\n            }\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col p-10 mb-32 border w-96 text-slate-400 rounded-2xl border-slate-600 bg-gradient-to-r from-slate-800 to-slate-900 font-Raleway\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"m-auto mb-5 text-2xl font-semibold\",\n                children: \"Account Options\"\n            }, void 0, false, {\n                fileName: \"/Users/filipcondac/Desktop/client/src/components/AccountOptions.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col mb-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"mr-10 text-lg\",\n                                    children: \"Display Name:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/filipcondac/Desktop/client/src/components/AccountOptions.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    className: \"p-1 px-2 rounded-lg bg-slate-700\",\n                                    placeholder: user.displayName,\n                                    onChange: (e)=>setDisplayName(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"/Users/filipcondac/Desktop/client/src/components/AccountOptions.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/filipcondac/Desktop/client/src/components/AccountOptions.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col mb-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"mr-10 text-lg\",\n                                    children: \"E-Mail:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/filipcondac/Desktop/client/src/components/AccountOptions.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    className: \"p-1 px-2 rounded-lg bg-slate-700\",\n                                    placeholder: user === null || user === void 0 ? void 0 : user.email,\n                                    onChange: (e)=>setEmail(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"/Users/filipcondac/Desktop/client/src/components/AccountOptions.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/filipcondac/Desktop/client/src/components/AccountOptions.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col mb-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"mr-10 text-lg\",\n                                    children: \"Password:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/filipcondac/Desktop/client/src/components/AccountOptions.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"password\",\n                                    className: \"p-1 px-2 rounded-lg bg-slate-700\",\n                                    placeholder: \"****************\",\n                                    onChange: (e)=>setPassword(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"/Users/filipcondac/Desktop/client/src/components/AccountOptions.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/filipcondac/Desktop/client/src/components/AccountOptions.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center mt-2 text-center border rounded-md cursor-pointer\",\n                            onClick: updateAccount,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    fill: \"none\",\n                                    viewBox: \"0 0 24 24\",\n                                    strokeWidth: 1.5,\n                                    stroke: \"currentColor\",\n                                    className: \"w-5 h-auto\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        strokeLinecap: \"round\",\n                                        strokeLinejoin: \"round\",\n                                        d: \"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/filipcondac/Desktop/client/src/components/AccountOptions.tsx\",\n                                        lineNumber: 108,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/filipcondac/Desktop/client/src/components/AccountOptions.tsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"\",\n                                    children: \"Update\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/filipcondac/Desktop/client/src/components/AccountOptions.tsx\",\n                                    lineNumber: 114,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/filipcondac/Desktop/client/src/components/AccountOptions.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, undefined),\n                        accountError !== \"\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center mt-2 text-center text-red-600 border rounded-md cursor-pointer\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"\",\n                                children: accountError\n                            }, void 0, false, {\n                                fileName: \"/Users/filipcondac/Desktop/client/src/components/AccountOptions.tsx\",\n                                lineNumber: 118,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/filipcondac/Desktop/client/src/components/AccountOptions.tsx\",\n                            lineNumber: 117,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center p-1 mt-10 text-center bg-red-600 border rounded-md cursor-pointer\",\n                            onClick: deleteAccount,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    fill: \"none\",\n                                    viewBox: \"0 0 24 24\",\n                                    strokeWidth: 1.5,\n                                    stroke: \"currentColor\",\n                                    className: \"w-6 h-6\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        strokeLinecap: \"round\",\n                                        strokeLinejoin: \"round\",\n                                        d: \"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/filipcondac/Desktop/client/src/components/AccountOptions.tsx\",\n                                        lineNumber: 133,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/filipcondac/Desktop/client/src/components/AccountOptions.tsx\",\n                                    lineNumber: 125,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"font-bold\",\n                                    children: \"DELETE ACCOUNT\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/filipcondac/Desktop/client/src/components/AccountOptions.tsx\",\n                                    lineNumber: 139,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/filipcondac/Desktop/client/src/components/AccountOptions.tsx\",\n                            lineNumber: 121,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/filipcondac/Desktop/client/src/components/AccountOptions.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/filipcondac/Desktop/client/src/components/AccountOptions.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/filipcondac/Desktop/client/src/components/AccountOptions.tsx\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AccountOptions, \"UBwxYoEboox+b7R/lFlt/xZo9xA=\");\n_c = AccountOptions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AccountOptions);\nvar _c;\n$RefreshReg$(_c, \"AccountOptions\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQUs7b0NBQ0xMLFdBQVU7b0NBQ1ZNLGFBQVk7b0NBQ1pDLFVBQVUsQ0FBQ0MsSUFBTXRCLFlBQVlzQixFQUFFQyxNQUFNLENBQUNDLEtBQUs7Ozs7Ozs7Ozs7OztzQ0FHL0MsOERBQUNYOzRCQUNDQyxXQUFVOzRCQUNWVyxTQUFTdEI7OzhDQUVULDhEQUFDdUI7b0NBQ0NDLE9BQU07b0NBQ05DLE1BQUs7b0NBQ0xDLFNBQVE7b0NBQ1JDLGFBQWE7b0NBQ2JDLFFBQU87b0NBQ1BqQixXQUFVOzhDQUVWLDRFQUFDa0I7d0NBQ0NDLGVBQWM7d0NBQ2RDLGdCQUFlO3dDQUNmQyxHQUFFOzs7Ozs7Ozs7Ozs4Q0FHTiw4REFBQ0M7b0NBQUt0QixXQUFVOzhDQUFHOzs7Ozs7Ozs7Ozs7d0JBRXBCYixpQkFBaUIsb0JBQ2hCLDhEQUFDWTs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ3NCO2dDQUFLdEIsV0FBVTswQ0FBSWI7Ozs7Ozs7Ozs7O3NDQUd4Qiw4REFBQ1k7NEJBQ0NDLFdBQVU7NEJBQ1ZXLFNBQVNmOzs4Q0FFVCw4REFBQ2dCO29DQUNDQyxPQUFNO29DQUNOQyxNQUFLO29DQUNMQyxTQUFRO29DQUNSQyxhQUFhO29DQUNiQyxRQUFPO29DQUNQakIsV0FBVTs4Q0FFViw0RUFBQ2tCO3dDQUNDQyxlQUFjO3dDQUNkQyxnQkFBZTt3Q0FDZkMsR0FBRTs7Ozs7Ozs7Ozs7OENBR04sOERBQUNDO29DQUFLdEIsV0FBVTs4Q0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNeEM7R0E1SU01QjtLQUFBQTtBQThJTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9BY2NvdW50T3B0aW9ucy50c3g/NTkzMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXV0aG9yaXplZFN0YXR1cyBmcm9tIFwibGlicy9hdXRob3JpemVkU3RhdHVzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IEFjY291bnRPcHRpb25zID0gKCkgPT4ge1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoQXV0aG9yaXplZFN0YXR1cyA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhdXRob3JpemVkU3RhdHVzKCk7XG4gICAgICAgIHNldFVzZXIoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGZldGNoQXV0aG9yaXplZFN0YXR1cygpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgW2Rpc3BsYXlOYW1lLCBzZXREaXNwbGF5TmFtZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2FjY291bnRFcnJvciwgc2V0QWNjb3VudEVycm9yXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IHVwZGF0ZUFjY291bnQgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgc3RhdHVzIH0gPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgICAgICBcImFwaS9maWxlcy91cGRhdGVBY2NvdW50XCIsXG4gICAgICAgIHsgZGlzcGxheU5hbWUsIGVtYWlsLCBwYXNzd29yZCB9LFxuICAgICAgICB7IGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSB9XG4gICAgICApO1xuXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9cIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldEFjY291bnRFcnJvcihcIkludmFsaWQgY3JlZGVudGlhbHNcIik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBkZWxldGVBY2NvdW50ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjb25maXJtZWQgPSB3aW5kb3cuY29uZmlybShcbiAgICAgICAgXCJBUkUgWU9VIFNVUkUgWU9VIFdBTlQgVE8gREVMRVRFIEFDQ09VTlQ/IFRISVMgQ0FOTk9UIEJFIFVORE9ORS5cIlxuICAgICAgKTtcbiAgICAgIGlmIChjb25maXJtZWQpIHtcbiAgICAgICAgY29uc3QgeyBzdGF0dXMgfSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAgICAgXCJhcGkvZmlsZXMvZGVsZXRlQWNjb3VudFwiLFxuICAgICAgICAgIHsgcGFzc3dvcmQgfSxcbiAgICAgICAgICB7IGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSB9XG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9cIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcC0xMCBtYi0zMiBib3JkZXIgdy05NiB0ZXh0LXNsYXRlLTQwMCByb3VuZGVkLTJ4bCBib3JkZXItc2xhdGUtNjAwIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1zbGF0ZS04MDAgdG8tc2xhdGUtOTAwIGZvbnQtUmFsZXdheVwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cIm0tYXV0byBtYi01IHRleHQtMnhsIGZvbnQtc2VtaWJvbGRcIj5BY2NvdW50IE9wdGlvbnM8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtYi01XCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibXItMTAgdGV4dC1sZ1wiPkRpc3BsYXkgTmFtZTo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0xIHB4LTIgcm91bmRlZC1sZyBiZy1zbGF0ZS03MDBcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dXNlci5kaXNwbGF5TmFtZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXREaXNwbGF5TmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWItNVwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1yLTEwIHRleHQtbGdcIj5FLU1haWw6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMSBweC0yIHJvdW5kZWQtbGcgYmctc2xhdGUtNzAwXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3VzZXI/LmVtYWlsfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgID48L2lucHV0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtYi01XCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibXItMTAgdGV4dC1sZ1wiPlBhc3N3b3JkOjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0xIHB4LTIgcm91bmRlZC1sZyBiZy1zbGF0ZS03MDBcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIioqKioqKioqKioqKioqKipcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgID48L2lucHV0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtMiB0ZXh0LWNlbnRlciBib3JkZXIgcm91bmRlZC1tZCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICBvbkNsaWNrPXt1cGRhdGVBY2NvdW50fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsxLjV9XG4gICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNSBoLWF1dG9cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgZD1cIk0xNi4wMjMgOS4zNDhoNC45OTJ2LS4wMDFNMi45ODUgMTkuNjQ0di00Ljk5Mm0wIDBoNC45OTJtLTQuOTkzIDBsMy4xODEgMy4xODNhOC4yNSA4LjI1IDAgMDAxMy44MDMtMy43TTQuMDMxIDkuODY1YTguMjUgOC4yNSAwIDAxMTMuODAzLTMuN2wzLjE4MSAzLjE4Mm0wLTQuOTkxdjQuOTlcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj5VcGRhdGU8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2FjY291bnRFcnJvciAhPT0gXCJcIiAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtMiB0ZXh0LWNlbnRlciB0ZXh0LXJlZC02MDAgYm9yZGVyIHJvdW5kZWQtbWQgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiXCI+e2FjY291bnRFcnJvcn08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgcC0xIG10LTEwIHRleHQtY2VudGVyIGJnLXJlZC02MDAgYm9yZGVyIHJvdW5kZWQtbWQgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgb25DbGljaz17ZGVsZXRlQWNjb3VudH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICBzdHJva2VXaWR0aD17MS41fVxuICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYgaC02XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIGQ9XCJNMTQuNzQgOWwtLjM0NiA5bS00Ljc4OCAwTDkuMjYgOW05Ljk2OC0zLjIxYy4zNDIuMDUyLjY4Mi4xMDcgMS4wMjIuMTY2bS0xLjAyMi0uMTY1TDE4LjE2IDE5LjY3M2EyLjI1IDIuMjUgMCAwMS0yLjI0NCAyLjA3N0g4LjA4NGEyLjI1IDIuMjUgMCAwMS0yLjI0NC0yLjA3N0w0Ljc3MiA1Ljc5bTE0LjQ1NiAwYTQ4LjEwOCA0OC4xMDggMCAwMC0zLjQ3OC0uMzk3bS0xMiAuNTYyYy4zNC0uMDU5LjY4LS4xMTQgMS4wMjItLjE2NW0wIDBhNDguMTEgNDguMTEgMCAwMTMuNDc4LS4zOTdtNy41IDB2LS45MTZjMC0xLjE4LS45MS0yLjE2NC0yLjA5LTIuMjAxYTUxLjk2NCA1MS45NjQgMCAwMC0zLjMyIDBjLTEuMTguMDM3LTIuMDkgMS4wMjItMi4wOSAyLjIwMXYuOTE2bTcuNSAwYTQ4LjY2NyA0OC42NjcgMCAwMC03LjUgMFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPkRFTEVURSBBQ0NPVU5UPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFjY291bnRPcHRpb25zO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiYXV0aG9yaXplZFN0YXR1cyIsImF4aW9zIiwiQWNjb3VudE9wdGlvbnMiLCJ1c2VyIiwic2V0VXNlciIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZmV0Y2hBdXRob3JpemVkU3RhdHVzIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImRpc3BsYXlOYW1lIiwic2V0RGlzcGxheU5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImFjY291bnRFcnJvciIsInNldEFjY291bnRFcnJvciIsInVwZGF0ZUFjY291bnQiLCJzdGF0dXMiLCJwb3N0IiwiaGVhZGVycyIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImRlbGV0ZUFjY291bnQiLCJjb25maXJtZWQiLCJjb25maXJtIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJmb3JtIiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwib25DbGljayIsInN2ZyIsInhtbG5zIiwiZmlsbCIsInZpZXdCb3giLCJzdHJva2VXaWR0aCIsInN0cm9rZSIsInBhdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJkIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/AccountOptions.tsx\n"));

/***/ })

});