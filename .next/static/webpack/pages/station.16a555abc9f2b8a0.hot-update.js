"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/station",{

/***/ "./src/components/SearchStation.tsx":
/*!******************************************!*\
  !*** ./src/components/SearchStation.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_stationService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/stationService */ \"./src/services/stationService.tsx\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ \"./src/components/Button.tsx\");\n/* harmony import */ var _Station__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Station */ \"./src/components/Station.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst SearchStation = ()=>{\n    _s();\n    const [stations, setStation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleChange = (e)=>{\n        setSearch(e.target.value);\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        const filteredStation = (0,_services_stationService__WEBPACK_IMPORTED_MODULE_2__.getFilteredStation)(search);\n        setStation(filteredStation);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \" h-auto w-96 mt-10 grid grid-cols-1 gap-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"flex justify-center mb-4 text-4xl font-bold tracking-tight\",\n                            children: \"Search Flight\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nad_m\\\\code\\\\appli-nextjs\\\\src\\\\components\\\\SearchStation.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-rows-2 grid-flow-col gap-4 mb-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    onChange: handleChange,\n                                    className: \"border-2 text-2xl border-gray-500 rounded p-2 text-gray-700 font-bold\",\n                                    type: \"text\",\n                                    placeholder: \"city name or country name...\",\n                                    value: search\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\nad_m\\\\code\\\\appli-nextjs\\\\src\\\\components\\\\SearchStation.tsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        other_props: {\n                                            type: \"submit\"\n                                        },\n                                        variant: \"btnValidation\",\n                                        size: \"lg\",\n                                        children: \"Search Station\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\nad_m\\\\code\\\\appli-nextjs\\\\src\\\\components\\\\SearchStation.tsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\nad_m\\\\code\\\\appli-nextjs\\\\src\\\\components\\\\SearchStation.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\nad_m\\\\code\\\\appli-nextjs\\\\src\\\\components\\\\SearchStation.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\nad_m\\\\code\\\\appli-nextjs\\\\src\\\\components\\\\SearchStation.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, undefined),\n                stations.map((station)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Station__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        station: station\n                    }, station.PlaceId, false, {\n                        fileName: \"C:\\\\Users\\\\nad_m\\\\code\\\\appli-nextjs\\\\src\\\\components\\\\SearchStation.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, undefined))\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\nad_m\\\\code\\\\appli-nextjs\\\\src\\\\components\\\\SearchStation.tsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\nad_m\\\\code\\\\appli-nextjs\\\\src\\\\components\\\\SearchStation.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SearchStation, \"p+P9OtUnFnFsSJitsWKumnRiJ7w=\");\n_c = SearchStation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchStation);\nvar _c;\n$RefreshReg$(_c, \"SearchStation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TZWFyY2hTdGF0aW9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUNnQztBQUNnQztBQUNuQztBQUNFO0FBRS9CLE1BQU1JLGdCQUFnQixJQUFNOztJQUMxQixNQUFNLENBQUNDLFVBQVVDLFdBQVcsR0FBR04sK0NBQVFBLENBQWdCLEVBQUU7SUFDekQsTUFBTSxDQUFDTyxRQUFRQyxVQUFVLEdBQUdSLCtDQUFRQSxDQUFTO0lBQzdDLE1BQU1TLGVBQWUsQ0FBQ0MsSUFBMkM7UUFDL0RGLFVBQVVFLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUMxQjtJQUVBLE1BQU1DLGVBQWUsQ0FBQ0gsSUFBd0M7UUFDNURBLEVBQUVJLGNBQWM7UUFDaEIsTUFBTUMsa0JBQWtCZCw0RUFBa0JBLENBQUNNO1FBQzNDRCxXQUFXUztJQUNiO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBS0MsVUFBVU47O3NDQUNkLDhEQUFDTzs0QkFBR0gsV0FBVTtzQ0FBNkQ7Ozs7OztzQ0FHM0UsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0k7b0NBQ0NDLFVBQVViO29DQUNWUSxXQUFVO29DQUNWTSxNQUFLO29DQUNMQyxhQUFZO29DQUNaWixPQUFPTDs7Ozs7OzhDQUVULDhEQUFDUzs4Q0FDQyw0RUFBQ2QsK0NBQU1BO3dDQUNMdUIsYUFBYTs0Q0FBRUYsTUFBTTt3Q0FBUzt3Q0FDOUJHLFNBQVE7d0NBQ1JDLE1BQUs7a0RBQ047Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQU1OdEIsU0FBU3VCLEdBQUcsQ0FBQyxDQUFDQyx3QkFDYiw4REFBQzFCLGdEQUFPQTt3QkFBdUIwQixTQUFTQTt1QkFBMUJBLFFBQVFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdkM7R0E3Q00xQjtLQUFBQTtBQStDTiwrREFBZUEsYUFBYUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TZWFyY2hTdGF0aW9uLnRzeD8xMDUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXRpb25JdGVtIH0gZnJvbSBcIi4uL3R5cGUvdHlwZXNcIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IGdldEZpbHRlcmVkU3RhdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zdGF0aW9uU2VydmljZVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiXHJcbmltcG9ydCBTdGF0aW9uIGZyb20gXCIuL1N0YXRpb25cIlxyXG5cclxuY29uc3QgU2VhcmNoU3RhdGlvbiA9ICgpID0+IHtcclxuICBjb25zdCBbc3RhdGlvbnMsIHNldFN0YXRpb25dID0gdXNlU3RhdGU8U3RhdGlvbkl0ZW1bXT4oW10pXHJcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIilcclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZmlsdGVyZWRTdGF0aW9uID0gZ2V0RmlsdGVyZWRTdGF0aW9uKHNlYXJjaCk7XHJcbiAgICBzZXRTdGF0aW9uKGZpbHRlcmVkU3RhdGlvbik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBoLWF1dG8gdy05NiBtdC0xMCBncmlkIGdyaWQtY29scy0xIGdhcC00XCI+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtYi00IHRleHQtNHhsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodFwiPlxyXG4gICAgICAgICAgICBTZWFyY2ggRmxpZ2h0XHJcbiAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtcm93cy0yIGdyaWQtZmxvdy1jb2wgZ2FwLTQgbWItM1wiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci0yIHRleHQtMnhsIGJvcmRlci1ncmF5LTUwMCByb3VuZGVkIHAtMiB0ZXh0LWdyYXktNzAwIGZvbnQtYm9sZFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiY2l0eSBuYW1lIG9yIGNvdW50cnkgbmFtZS4uLlwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvdGhlcl9wcm9wcz17eyB0eXBlOiBcInN1Ym1pdFwiIH19XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiYnRuVmFsaWRhdGlvblwiXHJcbiAgICAgICAgICAgICAgICBzaXplPVwibGdcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFNlYXJjaCBTdGF0aW9uXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIHtzdGF0aW9ucy5tYXAoKHN0YXRpb24pID0+IChcclxuICAgICAgICAgIDxTdGF0aW9uIGtleT17c3RhdGlvbi5QbGFjZUlkfSBzdGF0aW9uPXtzdGF0aW9ufSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoU3RhdGlvblxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJnZXRGaWx0ZXJlZFN0YXRpb24iLCJCdXR0b24iLCJTdGF0aW9uIiwiU2VhcmNoU3RhdGlvbiIsInN0YXRpb25zIiwic2V0U3RhdGlvbiIsInNlYXJjaCIsInNldFNlYXJjaCIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZmlsdGVyZWRTdGF0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwiaDEiLCJpbnB1dCIsIm9uQ2hhbmdlIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib3RoZXJfcHJvcHMiLCJ2YXJpYW50Iiwic2l6ZSIsIm1hcCIsInN0YXRpb24iLCJQbGFjZUlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SearchStation.tsx\n"));

/***/ })

});