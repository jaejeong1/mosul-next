/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/board/board-list";
exports.ids = ["pages/board/board-list"];
exports.modules = {

/***/ "./pages/common/styles/table.module.css":
/*!**********************************************!*\
  !*** ./pages/common/styles/table.module.css ***!
  \**********************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"table\": \"table_table__1oXWb\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21tb24vc3R5bGVzL3RhYmxlLm1vZHVsZS5jc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9jb21tb24vc3R5bGVzL3RhYmxlLm1vZHVsZS5jc3M/YTk2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ0YWJsZVwiOiBcInRhYmxlX3RhYmxlX18xb1hXYlwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/common/styles/table.module.css\n");

/***/ }),

/***/ "./pages/board/board-list.js":
/*!***********************************!*\
  !*** ./pages/board/board-list.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BoardList)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_styles_table_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/styles/table.module.css */ \"./pages/common/styles/table.module.css\");\n/* harmony import */ var _common_styles_table_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_common_styles_table_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction BoardList() {\n    const columns = [\n        \"\\uAE00\\uBC88\\uD638\",\n        \"\\uC81C\\uBAA9\",\n        \"\\uC791\\uC131\\uC790\",\n        \"\\uC8FC\\uC81C\"\n    ];\n    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_3___default().get(\"http://localhost:5000/api/board/list\").then((res)=>{\n            setData(res.data.boards);\n        }).catch((err)=>{});\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n        className: (_common_styles_table_module_css__WEBPACK_IMPORTED_MODULE_4___default().table),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                        colSpan: 4,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"\\uAC8C\\uC2DC\\uD310\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jaejeongjang/Workspace/mosul-next/pages/board/board-list.js\",\n                            lineNumber: 17,\n                            columnNumber: 37\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jaejeongjang/Workspace/mosul-next/pages/board/board-list.js\",\n                        lineNumber: 17,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/jaejeongjang/Workspace/mosul-next/pages/board/board-list.js\",\n                    lineNumber: 17,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jaejeongjang/Workspace/mosul-next/pages/board/board-list.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: columns.map((column)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                children: column\n                            }, column, false, {\n                                fileName: \"/Users/jaejeongjang/Workspace/mosul-next/pages/board/board-list.js\",\n                                lineNumber: 22,\n                                columnNumber: 17\n                            }, this)\n                        )\n                    }, void 0, false, {\n                        fileName: \"/Users/jaejeongjang/Workspace/mosul-next/pages/board/board-list.js\",\n                        lineNumber: 20,\n                        columnNumber: 13\n                    }, this),\n                    data.length == 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            colSpan: 4,\n                            children: \"\\uAC8C\\uC2DC\\uAE00 \\uC5C6\\uC74C\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jaejeongjang/Workspace/mosul-next/pages/board/board-list.js\",\n                            lineNumber: 26,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jaejeongjang/Workspace/mosul-next/pages/board/board-list.js\",\n                        lineNumber: 25,\n                        columnNumber: 41\n                    }, this) : data.map((board)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: board.passengerId\n                                }, void 0, false, {\n                                    fileName: \"/Users/jaejeongjang/Workspace/mosul-next/pages/board/board-list.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: board.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/jaejeongjang/Workspace/mosul-next/pages/board/board-list.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: board.teamId\n                                }, void 0, false, {\n                                    fileName: \"/Users/jaejeongjang/Workspace/mosul-next/pages/board/board-list.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: board.subject\n                                }, void 0, false, {\n                                    fileName: \"/Users/jaejeongjang/Workspace/mosul-next/pages/board/board-list.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, board.passengerId, true, {\n                            fileName: \"/Users/jaejeongjang/Workspace/mosul-next/pages/board/board-list.js\",\n                            lineNumber: 29,\n                            columnNumber: 25\n                        }, this)\n                    )\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jaejeongjang/Workspace/mosul-next/pages/board/board-list.js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jaejeongjang/Workspace/mosul-next/pages/board/board-list.js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ib2FyZC9ib2FyZC1saXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBNEI7QUFDK0I7QUFDakI7QUFDakI7QUFFVixTQUFTSyxTQUFTLEdBQUU7SUFDL0IsTUFBTUMsT0FBTyxHQUFHO1FBQUMsb0JBQUs7UUFBUSxjQUFJO1FBQU0sb0JBQUs7UUFBUSxjQUFJO0tBQUs7SUFDMUMsTUFBZCxFQVBWLEdBT1dDLElBQUksR0FQZixHQU9pQkMsT0FBTyxNQUFJTCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUNwQ0QsZ0RBQVMsQ0FBQyxJQUFJO1FBQ05FLGdEQUFTLENBQUMsc0NBQXNDLENBQUMsQ0FBQ00sSUFBSSxDQUFDQyxDQUFBQSxHQUFHLEdBQUU7WUFDeERILE9BQU8sQ0FBQ0csR0FBRyxDQUFDSixJQUFJLENBQUNLLE1BQU0sQ0FBQztTQUMvQixDQUFDLENBQUNDLEtBQUssQ0FBQ0MsQ0FBQUEsR0FBRyxHQUFFLEVBQUUsQ0FBQztLQUNwQixFQUFFLEVBQUUsQ0FBQztJQUNOLHFCQUNJLDhEQUFDQyxPQUFLO1FBQUNDLFNBQVMsRUFBRWYsOEVBQWlCOzswQkFDL0IsOERBQUNnQixPQUFLOzBCQUNGLDRFQUFDQyxJQUFFOzhCQUFDLDRFQUFDQyxJQUFFO3dCQUFDQyxPQUFPLEVBQUUsQ0FBQztrQ0FBRSw0RUFBQ0MsSUFBRTtzQ0FBQyxvQkFBRzs7Ozs7Z0NBQVc7Ozs7OzRCQUFLOzs7Ozt3QkFBSzs7Ozs7b0JBQ3RDOzBCQUNkLDhEQUFDQyxPQUFLOztrQ0FDTiw4REFBQ0osSUFBRTtrQ0FDRVosT0FBTyxDQUFDaUIsR0FBRyxDQUFDLENBQUNDLE1BQU0saUJBQ3BCLDhEQUFDQyxJQUFFOzBDQUFnQkQsTUFBTTsrQkFBaEJBLE1BQU07Ozs7b0NBQWdCO3dCQUM5QixDQUFDOzs7Ozs0QkFDRDtvQkFDSWpCLElBQUksQ0FBQ21CLE1BQU0sSUFBSSxDQUFDLGlCQUFHLDhEQUFDUixJQUFFO2tDQUN2Qiw0RUFBQ08sSUFBRTs0QkFBQ0wsT0FBTyxFQUFFLENBQUM7c0NBQUcsaUNBQU07Ozs7O2dDQUFLOzs7Ozs0QkFDdkIsR0FDSmIsSUFBSSxDQUFDZ0IsR0FBRyxDQUFDLENBQUNJLEtBQUssaUJBQ1osOERBQUNULElBQUU7OzhDQUNDLDhEQUFDTyxJQUFFOzhDQUFHRSxLQUFLLENBQUNDLFdBQVc7Ozs7O3dDQUFNOzhDQUM3Qiw4REFBQ0gsSUFBRTs4Q0FBR0UsS0FBSyxDQUFDRSxJQUFJOzs7Ozt3Q0FBTTs4Q0FDdEIsOERBQUNKLElBQUU7OENBQUdFLEtBQUssQ0FBQ0csTUFBTTs7Ozs7d0NBQU07OENBQ3hCLDhEQUFDTCxJQUFFOzhDQUFHRSxLQUFLLENBQUNJLE9BQU87Ozs7O3dDQUFNOzsyQkFKcEJKLEtBQUssQ0FBQ0MsV0FBVzs7OztnQ0FLckI7b0JBQ1IsQ0FBQzs7Ozs7O29CQUNGOzs7Ozs7WUFDSixDQUNYO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9ib2FyZC9ib2FyZC1saXN0LmpzPzRiMmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXG5pbXBvcnQgdGFibGVTdHlsZXMgZnJvbSBcIi4uL2NvbW1vbi9zdHlsZXMvdGFibGUubW9kdWxlLmNzc1wiXG5pbXBvcnQgeyB1c2VFZmZlY3QgLHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvYXJkTGlzdCgpe1xuICAgIGNvbnN0IGNvbHVtbnMgPSBbXCLquIDrsojtmLhcIiwgXCLsoJzrqqlcIiwgXCLsnpHshLHsnpBcIiwgXCLso7zsoJxcIl1cbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSlcbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgICAgIGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9ib2FyZC9saXN0JykudGhlbihyZXM9PntcbiAgICAgICAgICAgICAgICBzZXREYXRhKHJlcy5kYXRhLmJvYXJkcylcbiAgICAgICAgfSkuY2F0Y2goZXJyPT57fSlcbiAgICB9LCBbXSlcbiAgICByZXR1cm4oXG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9e3RhYmxlU3R5bGVzLnRhYmxlfT5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICA8dHI+PHRoIGNvbFNwYW49ezR9PjxoMj7qsozsi5ztjJA8L2gyPjwvdGg+PC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICA8dHIgPlxuICAgICAgICAgICAgICAgIHtjb2x1bW5zLm1hcCgoY29sdW1uKSA9PiAoXG4gICAgICAgICAgICAgICAgPHRkIGtleT17Y29sdW1ufSA+e2NvbHVtbn08L3RkPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAge2RhdGEubGVuZ3RoID09IDAgPyA8dHIgPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17NH0gPuqyjOyLnOq4gCDsl4bsnYw8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA6ZGF0YS5tYXAoKGJvYXJkKT0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2JvYXJkLnBhc3NlbmdlcklkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgPntib2FyZC5wYXNzZW5nZXJJZH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCA+e2JvYXJkLm5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgPntib2FyZC50ZWFtSWR9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgPntib2FyZC5zdWJqZWN0fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJIZWFkIiwidGFibGVTdHlsZXMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiQm9hcmRMaXN0IiwiY29sdW1ucyIsImRhdGEiLCJzZXREYXRhIiwiZ2V0IiwidGhlbiIsInJlcyIsImJvYXJkcyIsImNhdGNoIiwiZXJyIiwidGFibGUiLCJjbGFzc05hbWUiLCJ0aGVhZCIsInRyIiwidGgiLCJjb2xTcGFuIiwiaDIiLCJ0Ym9keSIsIm1hcCIsImNvbHVtbiIsInRkIiwibGVuZ3RoIiwiYm9hcmQiLCJwYXNzZW5nZXJJZCIsIm5hbWUiLCJ0ZWFtSWQiLCJzdWJqZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/board/board-list.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/board/board-list.js"));
module.exports = __webpack_exports__;

})();