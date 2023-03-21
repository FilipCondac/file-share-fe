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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var libs_calcBytes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! libs/calcBytes */ \"./libs/calcBytes.ts\");\n/* harmony import */ var js_file_download__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-file-download */ \"./node_modules/js-file-download/file-download.js\");\n/* harmony import */ var js_file_download__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_file_download__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\nconst PhraseSearch = (props)=>{\n    _s();\n    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    let [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [fileNotFound, setFileNotFound] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    //   * The bellow above does the following:\n    // 1. An async function is created and the event passed in as a parameter.\n    // 2. The default action of the event is prevented.\n    // 3. The search term is saved as a variable and the spaces are removed.\n    // 4. The variable is saved as lowercase.\n    // 5. An axios request is made to the server.\n    // 6. The data is saved as a variable.\n    // 7. The file state is updated with the data.\n    // 8. The componentRender state is set to false to hide the SearchForm component. */\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        const phrase = searchTerm.replace(/\\s/g, \"\").toLowerCase();\n        try {\n            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"api/files/phrase/\".concat(phrase));\n            file = data;\n            setFile(file);\n            props.setComponentRender(false);\n        } catch (error) {\n            setFileNotFound(true);\n            console.log(error);\n        }\n    };\n    /* The bellow above does the following:\n1. It makes an axios request to the backend and gets a blob of data\n2. Then it uses the fileDownload library to download the data to the browser\n3. After the download is complete, it resets the component */ const handleDownload = async ()=>{\n        if (file) {\n            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"api/files/id/\".concat(file.id, \"/download\"), {\n                responseType: \"blob\"\n            });\n            js_file_download__WEBPACK_IMPORTED_MODULE_3___default()(data, file.name);\n        }\n    };\n    /* The bellow bellow does the following:\n1. It resets the component by setting the file state to null and the componentRender state to true */ const resetComponent = ()=>{\n        setFile(null);\n        props.setComponentRender(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center p-5 m-auto mb-10 text-primarycolor-lightest rounded-xl justify-centre font-Raleway\",\n        children: [\n            !file && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Search...\",\n                            value: searchTerm,\n                            className: \"p-1 rounded-lg bg-slate-700 \",\n                            onChange: (event)=>setSearchTerm(event.target.value)\n                        }, void 0, false, {\n                            fileName: \"/Users/filipcondac/Desktop/client/src/components/PhraseSearch.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"ml-3\",\n                            children: \"Search\"\n                        }, void 0, false, {\n                            fileName: \"/Users/filipcondac/Desktop/client/src/components/PhraseSearch.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/filipcondac/Desktop/client/src/components/PhraseSearch.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/filipcondac/Desktop/client/src/components/PhraseSearch.tsx\",\n                lineNumber: 74,\n                columnNumber: 9\n            }, undefined),\n            fileNotFound && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-red-500\",\n                    children: \"File not found\"\n                }, void 0, false, {\n                    fileName: \"/Users/filipcondac/Desktop/client/src/components/PhraseSearch.tsx\",\n                    lineNumber: 97,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/filipcondac/Desktop/client/src/components/PhraseSearch.tsx\",\n                lineNumber: 96,\n                columnNumber: 9\n            }, undefined),\n            file && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center w-full h-full pb-5 text-white justify-centre\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: resetComponent,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                fill: \"none\",\n                                viewBox: \"0 0 24 24\",\n                                strokeWidth: 1.5,\n                                stroke: \"currentColor\",\n                                className: \"float-right w-8 h-8 text-gray-400 cursor-pointer hover:text-gray-500\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    strokeLinecap: \"round\",\n                                    strokeLinejoin: \"round\",\n                                    d: \"M6 18L18 6M6 6l12 12\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/filipcondac/Desktop/client/src/components/PhraseSearch.tsx\",\n                                    lineNumber: 112,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/filipcondac/Desktop/client/src/components/PhraseSearch.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/filipcondac/Desktop/client/src/components/PhraseSearch.tsx\",\n                            lineNumber: 103,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"m-auto mb-5 font-bold\",\n                            children: \"File Details\"\n                        }, void 0, false, {\n                            fileName: \"/Users/filipcondac/Desktop/client/src/components/PhraseSearch.tsx\",\n                            lineNumber: 119,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"m-6 mt-3 text-center \",\n                            children: [\n                                \"Name: \",\n                                file.name\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/filipcondac/Desktop/client/src/components/PhraseSearch.tsx\",\n                            lineNumber: 120,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex m-auto mt-0\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"\",\n                                    children: [\n                                        \"Format: \",\n                                        file.format.toUpperCase(),\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/filipcondac/Desktop/client/src/components/PhraseSearch.tsx\",\n                                    lineNumber: 122,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/images/icons/\".concat(file.format, \".png\"),\n                                    alt: \"\",\n                                    className: \"w-6 h-6 ml-2\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/filipcondac/Desktop/client/src/components/PhraseSearch.tsx\",\n                                    lineNumber: 123,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/filipcondac/Desktop/client/src/components/PhraseSearch.tsx\",\n                            lineNumber: 121,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"m-auto mt-3 text-center\",\n                            children: [\n                                \"Size: \",\n                                (0,libs_calcBytes__WEBPACK_IMPORTED_MODULE_2__.calcBytes)(file.sizeInBytes.toString())\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/filipcondac/Desktop/client/src/components/PhraseSearch.tsx\",\n                            lineNumber: 129,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"m-auto mt-5\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"inline-flex items-center px-4 py-2 font-bold text-gray-800 bg-gray-300 rounded hover:bg-gray-400\",\n                                onClick: handleDownload,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                        className: \"w-4 h-4 mr-2 fill-current\",\n                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                        viewBox: \"0 0 20 20\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            d: \"M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/filipcondac/Desktop/client/src/components/PhraseSearch.tsx\",\n                                            lineNumber: 142,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/filipcondac/Desktop/client/src/components/PhraseSearch.tsx\",\n                                        lineNumber: 137,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"Download\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/filipcondac/Desktop/client/src/components/PhraseSearch.tsx\",\n                                        lineNumber: 144,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/filipcondac/Desktop/client/src/components/PhraseSearch.tsx\",\n                                lineNumber: 133,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/filipcondac/Desktop/client/src/components/PhraseSearch.tsx\",\n                            lineNumber: 132,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/filipcondac/Desktop/client/src/components/PhraseSearch.tsx\",\n                    lineNumber: 102,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/filipcondac/Desktop/client/src/components/PhraseSearch.tsx\",\n                lineNumber: 101,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/filipcondac/Desktop/client/src/components/PhraseSearch.tsx\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PhraseSearch, \"qUaLVxsOkQGdZtcKJPscfR225D4=\");\n_c = PhraseSearch;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PhraseSearch);\nvar _c;\n$RefreshReg$(_c, \"PhraseSearch\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixLQUFLaUQsTUFBTSxDQUFDQyxXQUFXO3dDQUFHOzs7Ozs7OzhDQUN0RCw4REFBQ0M7b0NBQ0NDLEtBQUssaUJBQTZCLE9BQVpwRCxLQUFLaUQsTUFBTSxFQUFDO29DQUNsQ0ksS0FBSTtvQ0FDSjNCLFdBQVU7Ozs7Ozs7Ozs7OztzQ0FHZCw4REFBQ3NCOzRCQUFLdEIsV0FBVTs7Z0NBQTBCO2dDQUNqQzVCLHlEQUFTQSxDQUFDRSxLQUFLc0QsV0FBVyxDQUFDQyxRQUFROzs7Ozs7O3NDQUU1Qyw4REFBQzlCOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDUztnQ0FDQ1QsV0FBVTtnQ0FDVlcsU0FBU2pCOztrREFFVCw4REFBQ2tCO3dDQUNDWixXQUFVO3dDQUNWYSxPQUFNO3dDQUNORSxTQUFRO2tEQUVSLDRFQUFDRzs0Q0FBS0csR0FBRTs7Ozs7Ozs7Ozs7a0RBRVYsOERBQUNDO2tEQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXRCO0dBdElNOUM7S0FBQUE7QUF3SU4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGhyYXNlU2VhcmNoLnRzeD80YmQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY2FsY0J5dGVzIH0gZnJvbSBcImxpYnMvY2FsY0J5dGVzXCI7XG5pbXBvcnQgZmlsZURvd25sb2FkIGZyb20gXCJqcy1maWxlLWRvd25sb2FkXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7fVxuXG5pbnRlcmZhY2UgRmlsZSB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgZm9ybWF0OiBzdHJpbmc7XG4gIHNpemVJbkJ5dGVzOiBudW1iZXI7XG4gIC8vIG90aGVyIHByb3BlcnRpZXNcbn1cblxuY29uc3QgW2ZpbGUsIHNldEZpbGVdID0gdXNlU3RhdGU8RmlsZSB8IG51bGw+KG51bGwpO1xuXG5jb25zdCBQaHJhc2VTZWFyY2g6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wczogYW55KSA9PiB7XG4gIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBsZXQgW2ZpbGUsIHNldEZpbGVdID0gdXNlU3RhdGU8RmlsZSB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbZmlsZU5vdEZvdW5kLCBzZXRGaWxlTm90Rm91bmRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vICAgKiBUaGUgYmVsbG93IGFib3ZlIGRvZXMgdGhlIGZvbGxvd2luZzpcbiAgLy8gMS4gQW4gYXN5bmMgZnVuY3Rpb24gaXMgY3JlYXRlZCBhbmQgdGhlIGV2ZW50IHBhc3NlZCBpbiBhcyBhIHBhcmFtZXRlci5cbiAgLy8gMi4gVGhlIGRlZmF1bHQgYWN0aW9uIG9mIHRoZSBldmVudCBpcyBwcmV2ZW50ZWQuXG4gIC8vIDMuIFRoZSBzZWFyY2ggdGVybSBpcyBzYXZlZCBhcyBhIHZhcmlhYmxlIGFuZCB0aGUgc3BhY2VzIGFyZSByZW1vdmVkLlxuICAvLyA0LiBUaGUgdmFyaWFibGUgaXMgc2F2ZWQgYXMgbG93ZXJjYXNlLlxuICAvLyA1LiBBbiBheGlvcyByZXF1ZXN0IGlzIG1hZGUgdG8gdGhlIHNlcnZlci5cbiAgLy8gNi4gVGhlIGRhdGEgaXMgc2F2ZWQgYXMgYSB2YXJpYWJsZS5cbiAgLy8gNy4gVGhlIGZpbGUgc3RhdGUgaXMgdXBkYXRlZCB3aXRoIHRoZSBkYXRhLlxuICAvLyA4LiBUaGUgY29tcG9uZW50UmVuZGVyIHN0YXRlIGlzIHNldCB0byBmYWxzZSB0byBoaWRlIHRoZSBTZWFyY2hGb3JtIGNvbXBvbmVudC4gKi9cblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcGhyYXNlID0gc2VhcmNoVGVybS5yZXBsYWNlKC9cXHMvZywgXCJcIikudG9Mb3dlckNhc2UoKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoYGFwaS9maWxlcy9waHJhc2UvJHtwaHJhc2V9YCk7XG4gICAgICBmaWxlID0gZGF0YTtcbiAgICAgIHNldEZpbGUoZmlsZSk7XG4gICAgICBwcm9wcy5zZXRDb21wb25lbnRSZW5kZXIoZmFsc2UpO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIHNldEZpbGVOb3RGb3VuZCh0cnVlKTtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgLyogVGhlIGJlbGxvdyBhYm92ZSBkb2VzIHRoZSBmb2xsb3dpbmc6XG4xLiBJdCBtYWtlcyBhbiBheGlvcyByZXF1ZXN0IHRvIHRoZSBiYWNrZW5kIGFuZCBnZXRzIGEgYmxvYiBvZiBkYXRhXG4yLiBUaGVuIGl0IHVzZXMgdGhlIGZpbGVEb3dubG9hZCBsaWJyYXJ5IHRvIGRvd25sb2FkIHRoZSBkYXRhIHRvIHRoZSBicm93c2VyXG4zLiBBZnRlciB0aGUgZG93bmxvYWQgaXMgY29tcGxldGUsIGl0IHJlc2V0cyB0aGUgY29tcG9uZW50ICovXG5cbiAgY29uc3QgaGFuZGxlRG93bmxvYWQgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKGZpbGUpIHtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGBhcGkvZmlsZXMvaWQvJHtmaWxlLmlkfS9kb3dubG9hZGAsIHtcbiAgICAgICAgcmVzcG9uc2VUeXBlOiBcImJsb2JcIixcbiAgICAgIH0pO1xuICAgICAgZmlsZURvd25sb2FkKGRhdGEsIGZpbGUubmFtZSk7XG4gICAgfVxuICB9O1xuXG4gIC8qIFRoZSBiZWxsb3cgYmVsbG93IGRvZXMgdGhlIGZvbGxvd2luZzpcbjEuIEl0IHJlc2V0cyB0aGUgY29tcG9uZW50IGJ5IHNldHRpbmcgdGhlIGZpbGUgc3RhdGUgdG8gbnVsbCBhbmQgdGhlIGNvbXBvbmVudFJlbmRlciBzdGF0ZSB0byB0cnVlICovXG4gIGNvbnN0IHJlc2V0Q29tcG9uZW50ID0gKCkgPT4ge1xuICAgIHNldEZpbGUobnVsbCk7XG4gICAgcHJvcHMuc2V0Q29tcG9uZW50UmVuZGVyKHRydWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBwLTUgbS1hdXRvIG1iLTEwIHRleHQtcHJpbWFyeWNvbG9yLWxpZ2h0ZXN0IHJvdW5kZWQteGwganVzdGlmeS1jZW50cmUgZm9udC1SYWxld2F5XCI+XG4gICAgICB7LyogVGhlIGNvZGUgYmVsbG93IGRvZXMgdGhlIGZvbGxvd2luZzpcbiAgICAxLiBJdCBjaGVja3MgaWYgdGhlIGZpbGUgdmFyaWFibGUgaXMgdW5kZWZpbmVkIG9yIG5vdC4gSWYgaXQgaXMgdW5kZWZpbmVkLCB0aGVuIGl0IHNob3dzIGEgZm9ybSB0byBzZWFyY2ggZm9yIHRoZSBmaWxlLlxuICAgIDIuIElmIHRoZSBmaWxlIHZhcmlhYmxlIGlzIGRlZmluZWQsIHRoZW4gaXQgc2hvd3MgdGhlIGZpbGUgY29udGVudHMuICovfVxuICAgICAgeyFmaWxlICYmIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFRlcm19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMSByb3VuZGVkLWxnIGJnLXNsYXRlLTcwMCBcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRTZWFyY2hUZXJtKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwibWwtM1wiPlxuICAgICAgICAgICAgICBTZWFyY2hcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7LyogVGhlIGNvZGUgYmVsbG93IGRvZXMgdGhlIGZvbGxvd2luZzpcbiAgICAgICAgMS4gQSBmdW5jdGlvbiBjYWxsZWQgcmVzZXRDb21wb25lbnQgaXMgY2FsbGVkIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBjbG9zZSBidXR0b24uXG4gICAgICAgIDIuIFRoZSBmdW5jdGlvbiByZXNldHMgdGhlIGZpbGUgc3RhdGUgdmFyaWFibGUgdG8gbnVsbCwgd2hpY2ggdHJpZ2dlcnMgdGhlIGNoYW5nZSBpbiB0aGUgY29uZGl0aW9uYWwgcmVuZGVyaW5nLlxuICAgICAgICAzLiBUaGUgZmlsZSBkZXRhaWxzIGFyZSBkaXNwbGF5ZWQgdG8gdGhlIHVzZXIuXG4gICAgICAgIDQuIFRoZSB1c2VyIGNhbiBkb3dubG9hZCB0aGUgZmlsZS4gKi99XG4gICAgICB7ZmlsZU5vdEZvdW5kICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMFwiPkZpbGUgbm90IGZvdW5kPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAge2ZpbGUgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHctZnVsbCBoLWZ1bGwgcGItNSB0ZXh0LXdoaXRlIGp1c3RpZnktY2VudHJlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIFwiPlxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtyZXNldENvbXBvbmVudH0+XG4gICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezEuNX1cbiAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0IHctOCBoLTggdGV4dC1ncmF5LTQwMCBjdXJzb3ItcG9pbnRlciBob3Zlcjp0ZXh0LWdyYXktNTAwXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICBkPVwiTTYgMThMMTggNk02IDZsMTIgMTJcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibS1hdXRvIG1iLTUgZm9udC1ib2xkXCI+RmlsZSBEZXRhaWxzPC9oMT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm0tNiBtdC0zIHRleHQtY2VudGVyIFwiPk5hbWU6IHtmaWxlLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG0tYXV0byBtdC0wXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlwiPkZvcm1hdDoge2ZpbGUuZm9ybWF0LnRvVXBwZXJDYXNlKCl9IDwvc3Bhbj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz17YC9pbWFnZXMvaWNvbnMvJHtmaWxlLmZvcm1hdH0ucG5nYH1cbiAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNiBoLTYgbWwtMlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm0tYXV0byBtdC0zIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIFNpemU6IHtjYWxjQnl0ZXMoZmlsZS5zaXplSW5CeXRlcy50b1N0cmluZygpKX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS1hdXRvIG10LTVcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBweC00IHB5LTIgZm9udC1ib2xkIHRleHQtZ3JheS04MDAgYmctZ3JheS0zMDAgcm91bmRlZCBob3ZlcjpiZy1ncmF5LTQwMFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRG93bmxvYWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTQgaC00IG1yLTIgZmlsbC1jdXJyZW50XCJcbiAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMyA4VjJIN3Y2SDJsOCA4IDgtOGgtNXpNMCAxOGgyMHYySDB2LTJ6XCIgLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8c3Bhbj5Eb3dubG9hZDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGhyYXNlU2VhcmNoO1xuIl0sIm5hbWVzIjpbImF4aW9zIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImNhbGNCeXRlcyIsImZpbGVEb3dubG9hZCIsImZpbGUiLCJzZXRGaWxlIiwiUGhyYXNlU2VhcmNoIiwicHJvcHMiLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsImZpbGVOb3RGb3VuZCIsInNldEZpbGVOb3RGb3VuZCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwaHJhc2UiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJkYXRhIiwiZ2V0Iiwic2V0Q29tcG9uZW50UmVuZGVyIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlRG93bmxvYWQiLCJpZCIsInJlc3BvbnNlVHlwZSIsIm5hbWUiLCJyZXNldENvbXBvbmVudCIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImJ1dHRvbiIsImgxIiwib25DbGljayIsInN2ZyIsInhtbG5zIiwiZmlsbCIsInZpZXdCb3giLCJzdHJva2VXaWR0aCIsInN0cm9rZSIsInBhdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJkIiwic3BhbiIsImZvcm1hdCIsInRvVXBwZXJDYXNlIiwiaW1nIiwic3JjIiwiYWx0Iiwic2l6ZUluQnl0ZXMiLCJ0b1N0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/PhraseSearch.tsx\n"));

/***/ })

});