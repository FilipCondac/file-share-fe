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

/***/ "./src/components/PhraseSearch.tsx":
/*!*****************************************!*\
  !*** ./src/components/PhraseSearch.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var libs_calcBytes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! libs/calcBytes */ \"./libs/calcBytes.ts\");\n/* harmony import */ var js_file_download__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-file-download */ \"./node_modules/js-file-download/file-download.js\");\n/* harmony import */ var js_file_download__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_file_download__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\nconst PhraseSearch = (props)=>{\n    _s();\n    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    let [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [fileNotFound, setFileNotFound] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    //   * The bellow above does the following:\n    // 1. An async function is created and the event passed in as a parameter.\n    // 2. The default action of the event is prevented.\n    // 3. The search term is saved as a variable and the spaces are removed.\n    // 4. The variable is saved as lowercase.\n    // 5. An axios request is made to the server.\n    // 6. The data is saved as a variable.\n    // 7. The file state is updated with the data.\n    // 8. The componentRender state is set to false to hide the SearchForm component. */\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        const phrase = searchTerm.replace(/\\s/g, \"\").toLowerCase();\n        try {\n            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"api/files/phrase/\".concat(phrase));\n            file = data;\n            setFile(file);\n            props.setComponentRender(false);\n        } catch (error) {\n            setFileNotFound(true);\n            console.log(error);\n        }\n    };\n    /* The bellow above does the following:\n1. It makes an axios request to the backend and gets a blob of data\n2. Then it uses the fileDownload library to download the data to the browser\n3. After the download is complete, it resets the component */ const handleDownload = async ()=>{\n        if (file) {\n            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"api/files/id/\".concat(file.id, \"/download\"), {\n                responseType: \"blob\"\n            });\n            js_file_download__WEBPACK_IMPORTED_MODULE_3___default()(data, file.name);\n        }\n    };\n    /* The bellow bellow does the following:\n1. It resets the component by setting the file state to null and the componentRender state to true */ const resetComponent = ()=>{\n        setFile(null);\n        props.setComponentRender(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center p-5 m-auto mb-10 text-primarycolor-lightest rounded-xl justify-centre font-Raleway\",\n        children: [\n            !file && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Search...\",\n                            value: searchTerm,\n                            className: \"p-1 rounded-lg bg-slate-700 \",\n                            onChange: (event)=>setSearchTerm(event.target.value)\n                        }, void 0, false, {\n                            fileName: \"/Users/filipcondac/Desktop/client/src/components/PhraseSearch.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"ml-3\",\n                            children: \"Search\"\n                        }, void 0, false, {\n                            fileName: \"/Users/filipcondac/Desktop/client/src/components/PhraseSearch.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/filipcondac/Desktop/client/src/components/PhraseSearch.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/filipcondac/Desktop/client/src/components/PhraseSearch.tsx\",\n                lineNumber: 74,\n                columnNumber: 9\n            }, undefined),\n            fileNotFound && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-red-500\",\n                    children: \"File not found\"\n                }, void 0, false, {\n                    fileName: \"/Users/filipcondac/Desktop/client/src/components/PhraseSearch.tsx\",\n                    lineNumber: 97,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/filipcondac/Desktop/client/src/components/PhraseSearch.tsx\",\n                lineNumber: 96,\n                columnNumber: 9\n            }, undefined),\n            file && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center w-full h-full pb-5 text-white justify-centre\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: resetComponent,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                fill: \"none\",\n                                viewBox: \"0 0 24 24\",\n                                strokeWidth: 1.5,\n                                stroke: \"currentColor\",\n                                className: \"float-right w-8 h-8 text-gray-400 cursor-pointer hover:text-gray-500\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    strokeLinecap: \"round\",\n                                    strokeLinejoin: \"round\",\n                                    d: \"M6 18L18 6M6 6l12 12\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/filipcondac/Desktop/client/src/components/PhraseSearch.tsx\",\n                                    lineNumber: 112,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/filipcondac/Desktop/client/src/components/PhraseSearch.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/filipcondac/Desktop/client/src/components/PhraseSearch.tsx\",\n                            lineNumber: 103,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"m-auto mb-5 font-bold\",\n                            children: \"File Details\"\n                        }, void 0, false, {\n                            fileName: \"/Users/filipcondac/Desktop/client/src/components/PhraseSearch.tsx\",\n                            lineNumber: 119,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"m-6 mt-3 text-center \",\n                            children: [\n                                \"Name: \",\n                                file.name\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/filipcondac/Desktop/client/src/components/PhraseSearch.tsx\",\n                            lineNumber: 120,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex m-auto mt-0\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"\",\n                                    children: [\n                                        \"Format: \",\n                                        file.format.toUpperCase(),\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/filipcondac/Desktop/client/src/components/PhraseSearch.tsx\",\n                                    lineNumber: 122,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/images/icons/\".concat(file.format, \".png\"),\n                                    alt: \"\",\n                                    className: \"w-6 h-6 ml-2\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/filipcondac/Desktop/client/src/components/PhraseSearch.tsx\",\n                                    lineNumber: 123,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/filipcondac/Desktop/client/src/components/PhraseSearch.tsx\",\n                            lineNumber: 121,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"m-auto mt-3 text-center\",\n                            children: [\n                                \"Size: \",\n                                (0,libs_calcBytes__WEBPACK_IMPORTED_MODULE_2__.calcBytes)(file.sizeInBytes)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/filipcondac/Desktop/client/src/components/PhraseSearch.tsx\",\n                            lineNumber: 129,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"m-auto mt-5\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"inline-flex items-center px-4 py-2 font-bold text-gray-800 bg-gray-300 rounded hover:bg-gray-400\",\n                                onClick: handleDownload,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                        className: \"w-4 h-4 mr-2 fill-current\",\n                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                        viewBox: \"0 0 20 20\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            d: \"M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/filipcondac/Desktop/client/src/components/PhraseSearch.tsx\",\n                                            lineNumber: 142,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/filipcondac/Desktop/client/src/components/PhraseSearch.tsx\",\n                                        lineNumber: 137,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"Download\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/filipcondac/Desktop/client/src/components/PhraseSearch.tsx\",\n                                        lineNumber: 144,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/filipcondac/Desktop/client/src/components/PhraseSearch.tsx\",\n                                lineNumber: 133,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/filipcondac/Desktop/client/src/components/PhraseSearch.tsx\",\n                            lineNumber: 132,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/filipcondac/Desktop/client/src/components/PhraseSearch.tsx\",\n                    lineNumber: 102,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/filipcondac/Desktop/client/src/components/PhraseSearch.tsx\",\n                lineNumber: 101,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/filipcondac/Desktop/client/src/components/PhraseSearch.tsx\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PhraseSearch, \"qUaLVxsOkQGdZtcKJPscfR225D4=\");\n_c = PhraseSearch;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PhraseSearch);\nvar _c;\n$RefreshReg$(_c, \"PhraseSearch\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixLQUFLaUQsTUFBTSxDQUFDQyxXQUFXO3dDQUFHOzs7Ozs7OzhDQUN0RCw4REFBQ0M7b0NBQ0NDLEtBQUssaUJBQTZCLE9BQVpwRCxLQUFLaUQsTUFBTSxFQUFDO29DQUNsQ0ksS0FBSTtvQ0FDSjNCLFdBQVU7Ozs7Ozs7Ozs7OztzQ0FHZCw4REFBQ3NCOzRCQUFLdEIsV0FBVTs7Z0NBQTBCO2dDQUNqQzVCLHlEQUFTQSxDQUFDRSxLQUFLc0QsV0FBVzs7Ozs7OztzQ0FFbkMsOERBQUM3Qjs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ1M7Z0NBQ0NULFdBQVU7Z0NBQ1ZXLFNBQVNqQjs7a0RBRVQsOERBQUNrQjt3Q0FDQ1osV0FBVTt3Q0FDVmEsT0FBTTt3Q0FDTkUsU0FBUTtrREFFUiw0RUFBQ0c7NENBQUtHLEdBQUU7Ozs7Ozs7Ozs7O2tEQUVWLDhEQUFDQztrREFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF0QjtHQXRJTTlDO0tBQUFBO0FBd0lOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1BocmFzZVNlYXJjaC50c3g/NGJkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNhbGNCeXRlcyB9IGZyb20gXCJsaWJzL2NhbGNCeXRlc1wiO1xuaW1wb3J0IGZpbGVEb3dubG9hZCBmcm9tIFwianMtZmlsZS1kb3dubG9hZFwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge31cblxuaW50ZXJmYWNlIEZpbGUge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGZvcm1hdDogc3RyaW5nO1xuICBzaXplSW5CeXRlczogbnVtYmVyO1xuICAvLyBvdGhlciBwcm9wZXJ0aWVzXG59XG5cbmNvbnN0IFtmaWxlLCBzZXRGaWxlXSA9IHVzZVN0YXRlPEZpbGUgfCBudWxsPihudWxsKTtcblxuY29uc3QgUGhyYXNlU2VhcmNoOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHM6IGFueSkgPT4ge1xuICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgbGV0IFtmaWxlLCBzZXRGaWxlXSA9IHVzZVN0YXRlPEZpbGUgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2ZpbGVOb3RGb3VuZCwgc2V0RmlsZU5vdEZvdW5kXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAvLyAgICogVGhlIGJlbGxvdyBhYm92ZSBkb2VzIHRoZSBmb2xsb3dpbmc6XG4gIC8vIDEuIEFuIGFzeW5jIGZ1bmN0aW9uIGlzIGNyZWF0ZWQgYW5kIHRoZSBldmVudCBwYXNzZWQgaW4gYXMgYSBwYXJhbWV0ZXIuXG4gIC8vIDIuIFRoZSBkZWZhdWx0IGFjdGlvbiBvZiB0aGUgZXZlbnQgaXMgcHJldmVudGVkLlxuICAvLyAzLiBUaGUgc2VhcmNoIHRlcm0gaXMgc2F2ZWQgYXMgYSB2YXJpYWJsZSBhbmQgdGhlIHNwYWNlcyBhcmUgcmVtb3ZlZC5cbiAgLy8gNC4gVGhlIHZhcmlhYmxlIGlzIHNhdmVkIGFzIGxvd2VyY2FzZS5cbiAgLy8gNS4gQW4gYXhpb3MgcmVxdWVzdCBpcyBtYWRlIHRvIHRoZSBzZXJ2ZXIuXG4gIC8vIDYuIFRoZSBkYXRhIGlzIHNhdmVkIGFzIGEgdmFyaWFibGUuXG4gIC8vIDcuIFRoZSBmaWxlIHN0YXRlIGlzIHVwZGF0ZWQgd2l0aCB0aGUgZGF0YS5cbiAgLy8gOC4gVGhlIGNvbXBvbmVudFJlbmRlciBzdGF0ZSBpcyBzZXQgdG8gZmFsc2UgdG8gaGlkZSB0aGUgU2VhcmNoRm9ybSBjb21wb25lbnQuICovXG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHBocmFzZSA9IHNlYXJjaFRlcm0ucmVwbGFjZSgvXFxzL2csIFwiXCIpLnRvTG93ZXJDYXNlKCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGBhcGkvZmlsZXMvcGhyYXNlLyR7cGhyYXNlfWApO1xuICAgICAgZmlsZSA9IGRhdGE7XG4gICAgICBzZXRGaWxlKGZpbGUpO1xuICAgICAgcHJvcHMuc2V0Q29tcG9uZW50UmVuZGVyKGZhbHNlKTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICBzZXRGaWxlTm90Rm91bmQodHJ1ZSk7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIC8qIFRoZSBiZWxsb3cgYWJvdmUgZG9lcyB0aGUgZm9sbG93aW5nOlxuMS4gSXQgbWFrZXMgYW4gYXhpb3MgcmVxdWVzdCB0byB0aGUgYmFja2VuZCBhbmQgZ2V0cyBhIGJsb2Igb2YgZGF0YVxuMi4gVGhlbiBpdCB1c2VzIHRoZSBmaWxlRG93bmxvYWQgbGlicmFyeSB0byBkb3dubG9hZCB0aGUgZGF0YSB0byB0aGUgYnJvd3NlclxuMy4gQWZ0ZXIgdGhlIGRvd25sb2FkIGlzIGNvbXBsZXRlLCBpdCByZXNldHMgdGhlIGNvbXBvbmVudCAqL1xuXG4gIGNvbnN0IGhhbmRsZURvd25sb2FkID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmIChmaWxlKSB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChgYXBpL2ZpbGVzL2lkLyR7ZmlsZS5pZH0vZG93bmxvYWRgLCB7XG4gICAgICAgIHJlc3BvbnNlVHlwZTogXCJibG9iXCIsXG4gICAgICB9KTtcbiAgICAgIGZpbGVEb3dubG9hZChkYXRhLCBmaWxlLm5hbWUpO1xuICAgIH1cbiAgfTtcblxuICAvKiBUaGUgYmVsbG93IGJlbGxvdyBkb2VzIHRoZSBmb2xsb3dpbmc6XG4xLiBJdCByZXNldHMgdGhlIGNvbXBvbmVudCBieSBzZXR0aW5nIHRoZSBmaWxlIHN0YXRlIHRvIG51bGwgYW5kIHRoZSBjb21wb25lbnRSZW5kZXIgc3RhdGUgdG8gdHJ1ZSAqL1xuICBjb25zdCByZXNldENvbXBvbmVudCA9ICgpID0+IHtcbiAgICBzZXRGaWxlKG51bGwpO1xuICAgIHByb3BzLnNldENvbXBvbmVudFJlbmRlcih0cnVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgcC01IG0tYXV0byBtYi0xMCB0ZXh0LXByaW1hcnljb2xvci1saWdodGVzdCByb3VuZGVkLXhsIGp1c3RpZnktY2VudHJlIGZvbnQtUmFsZXdheVwiPlxuICAgICAgey8qIFRoZSBjb2RlIGJlbGxvdyBkb2VzIHRoZSBmb2xsb3dpbmc6XG4gICAgMS4gSXQgY2hlY2tzIGlmIHRoZSBmaWxlIHZhcmlhYmxlIGlzIHVuZGVmaW5lZCBvciBub3QuIElmIGl0IGlzIHVuZGVmaW5lZCwgdGhlbiBpdCBzaG93cyBhIGZvcm0gdG8gc2VhcmNoIGZvciB0aGUgZmlsZS5cbiAgICAyLiBJZiB0aGUgZmlsZSB2YXJpYWJsZSBpcyBkZWZpbmVkLCB0aGVuIGl0IHNob3dzIHRoZSBmaWxlIGNvbnRlbnRzLiAqL31cbiAgICAgIHshZmlsZSAmJiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uLlwiXG4gICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hUZXJtfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTEgcm91bmRlZC1sZyBiZy1zbGF0ZS03MDAgXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0U2VhcmNoVGVybShldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cIm1sLTNcIj5cbiAgICAgICAgICAgICAgU2VhcmNoXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgey8qIFRoZSBjb2RlIGJlbGxvdyBkb2VzIHRoZSBmb2xsb3dpbmc6XG4gICAgICAgIDEuIEEgZnVuY3Rpb24gY2FsbGVkIHJlc2V0Q29tcG9uZW50IGlzIGNhbGxlZCB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgY2xvc2UgYnV0dG9uLlxuICAgICAgICAyLiBUaGUgZnVuY3Rpb24gcmVzZXRzIHRoZSBmaWxlIHN0YXRlIHZhcmlhYmxlIHRvIG51bGwsIHdoaWNoIHRyaWdnZXJzIHRoZSBjaGFuZ2UgaW4gdGhlIGNvbmRpdGlvbmFsIHJlbmRlcmluZy5cbiAgICAgICAgMy4gVGhlIGZpbGUgZGV0YWlscyBhcmUgZGlzcGxheWVkIHRvIHRoZSB1c2VyLlxuICAgICAgICA0LiBUaGUgdXNlciBjYW4gZG93bmxvYWQgdGhlIGZpbGUuICovfVxuICAgICAge2ZpbGVOb3RGb3VuZCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMlwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDBcIj5GaWxlIG5vdCBmb3VuZDwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIHtmaWxlICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciB3LWZ1bGwgaC1mdWxsIHBiLTUgdGV4dC13aGl0ZSBqdXN0aWZ5LWNlbnRyZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBcIj5cbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17cmVzZXRDb21wb25lbnR9PlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsxLjV9XG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbG9hdC1yaWdodCB3LTggaC04IHRleHQtZ3JheS00MDAgY3Vyc29yLXBvaW50ZXIgaG92ZXI6dGV4dC1ncmF5LTUwMFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgZD1cIk02IDE4TDE4IDZNNiA2bDEyIDEyXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm0tYXV0byBtYi01IGZvbnQtYm9sZFwiPkZpbGUgRGV0YWlsczwvaDE+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtLTYgbXQtMyB0ZXh0LWNlbnRlciBcIj5OYW1lOiB7ZmlsZS5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtLWF1dG8gbXQtMFwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj5Gb3JtYXQ6IHtmaWxlLmZvcm1hdC50b1VwcGVyQ2FzZSgpfSA8L3NwYW4+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e2AvaW1hZ2VzL2ljb25zLyR7ZmlsZS5mb3JtYXR9LnBuZ2B9XG4gICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYgaC02IG1sLTJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtLWF1dG8gbXQtMyB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICBTaXplOiB7Y2FsY0J5dGVzKGZpbGUuc2l6ZUluQnl0ZXMpfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLWF1dG8gbXQtNVwiPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHB4LTQgcHktMiBmb250LWJvbGQgdGV4dC1ncmF5LTgwMCBiZy1ncmF5LTMwMCByb3VuZGVkIGhvdmVyOmJnLWdyYXktNDAwXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEb3dubG9hZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNCBoLTQgbXItMiBmaWxsLWN1cnJlbnRcIlxuICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEzIDhWMkg3djZIMmw4IDggOC04aC01ek0wIDE4aDIwdjJIMHYtMnpcIiAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDxzcGFuPkRvd25sb2FkPC9zcGFuPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQaHJhc2VTZWFyY2g7XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJSZWFjdCIsInVzZVN0YXRlIiwiY2FsY0J5dGVzIiwiZmlsZURvd25sb2FkIiwiZmlsZSIsInNldEZpbGUiLCJQaHJhc2VTZWFyY2giLCJwcm9wcyIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2hUZXJtIiwiZmlsZU5vdEZvdW5kIiwic2V0RmlsZU5vdEZvdW5kIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInBocmFzZSIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsImRhdGEiLCJnZXQiLCJzZXRDb21wb25lbnRSZW5kZXIiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVEb3dubG9hZCIsImlkIiwicmVzcG9uc2VUeXBlIiwibmFtZSIsInJlc2V0Q29tcG9uZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiYnV0dG9uIiwiaDEiLCJvbkNsaWNrIiwic3ZnIiwieG1sbnMiLCJmaWxsIiwidmlld0JveCIsInN0cm9rZVdpZHRoIiwic3Ryb2tlIiwicGF0aCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsImQiLCJzcGFuIiwiZm9ybWF0IiwidG9VcHBlckNhc2UiLCJpbWciLCJzcmMiLCJhbHQiLCJzaXplSW5CeXRlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/PhraseSearch.tsx\n"));

/***/ })

});