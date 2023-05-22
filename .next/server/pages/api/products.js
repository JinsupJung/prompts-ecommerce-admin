"use strict";
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
exports.id = "pages/api/products";
exports.ids = ["pages/api/products"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./lib/mongoose.js":
/*!*************************!*\
  !*** ./lib/mongoose.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mongooseConnect\": () => (/* binding */ mongooseConnect)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction mongooseConnect() {\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.readyState) === 1) {\n        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.asPromise();\n    } else {\n        const uri = process.env.MONGODB_URI;\n        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(uri);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29vc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRXpCLFNBQVNDLGtCQUFrQjtJQUNoQyxJQUFJRCx1RUFBOEIsS0FBSyxHQUFHO1FBQ3hDLE9BQU9BLG9FQUE2QjtJQUN0QyxPQUFPO1FBQ0wsTUFBTUssTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxXQUFXO1FBQ25DLE9BQU9SLHVEQUFnQixDQUFDSztJQUMxQixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FkbWluLy4vbGliL21vbmdvb3NlLmpzPzE2M2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbW9uZ29vc2VDb25uZWN0KCkge1xuICBpZiAobW9uZ29vc2UuY29ubmVjdGlvbi5yZWFkeVN0YXRlID09PSAxKSB7XG4gICAgcmV0dXJuIG1vbmdvb3NlLmNvbm5lY3Rpb24uYXNQcm9taXNlKCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkk7XG4gICAgcmV0dXJuIG1vbmdvb3NlLmNvbm5lY3QodXJpKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwibW9uZ29vc2VDb25uZWN0IiwiY29ubmVjdGlvbiIsInJlYWR5U3RhdGUiLCJhc1Byb21pc2UiLCJ1cmkiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/mongoose.js\n");

/***/ }),

/***/ "(api)/./models/product.js":
/*!***************************!*\
  !*** ./models/product.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Product\": () => (/* binding */ Product)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ProductSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    title: {\n        type: String,\n        required: true\n    },\n    description: String,\n    price: {\n        type: Number,\n        required: true\n    }\n});\nconst Product = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Product || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"Product\", ProductSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvcHJvZHVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0M7QUFFL0MsTUFBTUcsZ0JBQWdCLElBQUlELDRDQUFNQSxDQUM1QjtJQUNJRSxPQUFPO1FBQUNDLE1BQU1DO1FBQVFDLFVBQVUsSUFBSTtJQUFBO0lBQ3BDQyxhQUFjRjtJQUNkRyxPQUFPO1FBQUNKLE1BQU1LO1FBQVFILFVBQVUsSUFBSTtJQUFBO0FBQ3hDO0FBR0csTUFBTUksVUFBVVgsb0RBQWMsSUFBSUMsK0NBQUtBLENBQUMsV0FBV0UsZUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL2FkbWluLy4vbW9kZWxzL3Byb2R1Y3QuanM/MDczYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge21vZGVscywgbW9kZWwsIFNjaGVtYX0gZnJvbSAnbW9uZ29vc2UnO1xuXG5jb25zdCBQcm9kdWN0U2NoZW1hID0gbmV3IFNjaGVtYShcbiAgICB7XG4gICAgICAgIHRpdGxlOiB7dHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZX0sXG4gICAgICAgIGRlc2NyaXB0aW9uIDogU3RyaW5nLFxuICAgICAgICBwcmljZToge3R5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWV9LFxuICAgIH1cbilcblxuZXhwb3J0IGNvbnN0IFByb2R1Y3QgPSBtb2RlbHMuUHJvZHVjdCB8fCBtb2RlbCgnUHJvZHVjdCcsIFByb2R1Y3RTY2hlbWEpOyJdLCJuYW1lcyI6WyJtb2RlbHMiLCJtb2RlbCIsIlNjaGVtYSIsIlByb2R1Y3RTY2hlbWEiLCJ0aXRsZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJOdW1iZXIiLCJQcm9kdWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/product.js\n");

/***/ }),

/***/ "(api)/./pages/api/products.js":
/*!*******************************!*\
  !*** ./pages/api/products.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/mongoose */ \"(api)/./lib/mongoose.js\");\n/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/product */ \"(api)/./models/product.js\");\n\n\nasync function handler(req, res) {\n    const { method  } = req;\n    await (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_0__.mongooseConnect)();\n    if (method === \"POST\") {\n        const { title , description , price  } = req.body;\n        const productDoc = await _models_product__WEBPACK_IMPORTED_MODULE_1__.Product.create({\n            title,\n            description,\n            price\n        });\n        res.status(200).json(productDoc);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlEO0FBQ047QUFFNUIsZUFBZUUsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsTUFBTSxFQUFFQyxPQUFNLEVBQUUsR0FBR0Y7SUFDbkIsTUFBTUgsOERBQWVBO0lBRXJCLElBQUlLLFdBQVcsUUFBUTtRQUNyQixNQUFNLEVBQUVDLE1BQUssRUFBRUMsWUFBVyxFQUFFQyxNQUFLLEVBQUUsR0FBR0wsSUFBSU0sSUFBSTtRQUM5QyxNQUFNQyxhQUFhLE1BQU1ULDJEQUFjLENBQUM7WUFDdENLO1lBQ0FDO1lBQ0FDO1FBQ0Y7UUFDQUosSUFBSVEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0g7SUFDdkIsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZG1pbi8uL3BhZ2VzL2FwaS9wcm9kdWN0cy5qcz80OWNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vbmdvb3NlQ29ubmVjdCB9IGZyb20gXCJAL2xpYi9tb25nb29zZVwiO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gXCJAL21vZGVscy9wcm9kdWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgY29uc3QgeyBtZXRob2QgfSA9IHJlcTtcbiAgYXdhaXQgbW9uZ29vc2VDb25uZWN0KCk7XG5cbiAgaWYgKG1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpY2UgfSA9IHJlcS5ib2R5O1xuICAgIGNvbnN0IHByb2R1Y3REb2MgPSBhd2FpdCBQcm9kdWN0LmNyZWF0ZSh7XG4gICAgICB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgcHJpY2UsXG4gICAgfSk7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24ocHJvZHVjdERvYyk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJtb25nb29zZUNvbm5lY3QiLCJQcm9kdWN0IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsImJvZHkiLCJwcm9kdWN0RG9jIiwiY3JlYXRlIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/products.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/products.js"));
module.exports = __webpack_exports__;

})();