(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/lib/jenkins/workspace/eDienst_Form_Renderer_production/src/main.ts */"zUnb");


/***/ }),

/***/ "K7hc":
/*!*******************************!*\
  !*** ./src/app/app-config.ts ***!
  \*******************************/
/*! exports provided: setConfig, getConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setConfig", function() { return setConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfig", function() { return getConfig; });
let appConfig = {};
const setConfig = (data) => {
    appConfig = data;
};
const getConfig = () => {
    return appConfig;
};


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app-config */ "K7hc");




function initialize() {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        if (Object(_app_app_config__WEBPACK_IMPORTED_MODULE_3__["getConfig"])().production) {
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
        }
        const appModuleContainer = yield __webpack_require__.e(/*! import() | app-app-module */ "app-app-module").then(__webpack_require__.bind(null, /*! ./app/app.module */ "ZAI4"));
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["platformBrowser"]().bootstrapModule(appModuleContainer.AppModule)
            .catch(err => console.error(err));
    });
}
fetch('/assets/app-config.json')
    .then(response => {
    if (response.ok) {
        return response.json();
    }
    throw new Error('app-config.json not found');
})
    .then(config => {
    Object(_app_app_config__WEBPACK_IMPORTED_MODULE_3__["setConfig"])(config);
})
    .catch(err => console.error(err))
    .finally(initialize);


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);