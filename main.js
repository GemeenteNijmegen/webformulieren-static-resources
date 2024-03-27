"use strict";
(self["webpackChunkform_renderer"] = self["webpackChunkform_renderer"] || []).push([["main"],{

/***/ 45529:
/*!*******************************!*\
  !*** ./src/app/app-config.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getConfig": () => (/* binding */ getConfig),
/* harmony export */   "setConfig": () => (/* binding */ setConfig)
/* harmony export */ });
let appConfig = {};
const setConfig = data => {
  appConfig = data;
};
const getConfig = () => {
  appConfig.version = appConfig.displayVersion ? ' - ' + appConfig.environmentname + ' v.' + (__webpack_require__(/*! ../../package.json */ 4147).version) : '';
  return appConfig;
};

/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _var_lib_jenkins_workspace_eDienst_Form_Renderer_angular15_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 83918);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app-config */ 45529);




function initialize() {
  return _initialize.apply(this, arguments);
}
function _initialize() {
  _initialize = (0,_var_lib_jenkins_workspace_eDienst_Form_Renderer_angular15_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
    if ((0,_app_app_config__WEBPACK_IMPORTED_MODULE_1__.getConfig)().production) {
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
    }
    const appModuleContainer = yield __webpack_require__.e(/*! import() */ "src_app_app_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./app/app.module */ 36747));
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(appModuleContainer.AppModule).catch(err => console.error(err));
  });
  return _initialize.apply(this, arguments);
}
fetch('/assets/app-config.json').then(response => {
  if (response.ok) {
    return response.json();
  }
  throw new Error('app-config.json not found');
}).then(config => {
  (0,_app_app_config__WEBPACK_IMPORTED_MODULE_1__.setConfig)(config);
}).catch(err => console.error(err)).finally(initialize);

/***/ }),

/***/ 4147:
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"@nijmegen/form-renderer","version":"1.22.1-SNAPSHOT","author":"YourRequest","description":"Nijmegen Web forms - Form Renderer","repository":{"type":"git","url":"https://gitlab.yourrequest.nl/yourrequest/gemeente-nijmegen/form-renderer.git"},"publishConfig":{"@yourrequest:registry":"https://npm.yourrequest.nl"},"files":["dist/**/*"],"scripts":{"ng":"ng","start":"ng serve --disable-host-check","start:test":"ng serve -c=test --port=4201","start:acc":"ng serve -c=acceptance --port=4202","start:prod":"ng serve -c=production --port=4203","build":"ng build","build:test":"ng build","build:acc":"ng build","build:prod":"ng build --configuration production","build:stats":"ng build --stats-json","build:prepare":"node prepareBuild.js","analyze":"webpack-bundle-analyzer dist/form-renderer/stats.json","test":"ng test","lint":"ng lint","e2e":"ng e2e","postinstall":"node afterInstall.js","cypress:version":"cypress -v","cypress:runner":"cypress open","cypress:execution":"cypress run","cypress:headed":"cypress run --headed --no-exit"},"dependencies":{"@angular/animations":"^15.2.10","@angular/common":"^15.2.10","@angular/compiler":"^15.2.10","@angular/core":"^15.2.10","@angular/elements":"^15.2.10","@angular/forms":"^15.2.10","@angular/material":"^15.2.9","@angular/platform-browser":"^15.2.10","@angular/platform-browser-dynamic":"^15.2.10","@angular/router":"^15.2.10","@formio/angular":"5.5.0-rc.11","@formio/choices.js":"^10.2.0","@formio/protected-eval":"1.2.2","@types/uuid":"^8.3.4","@yourrequest/nijmegen-custom-components":"2.0.6","bootstrap":"^4.6.2","bootswatch":"^5.3.2","core-js":"^3.33.0","font-awesome":"^4.7.0","formiojs":"^4.17.2","jquery":"^3.7.1","ngx-bootstrap":"^5.6.2","ngx-cookie":"^5.0.2","node-polyfill-webpack-plugin":"^2.0.1","popper.js":"^1.16.1","regenerator-runtime":"^0.14.0","rxjs":"~6.6.7","tslib":"^2.6.2","uuid":"^8.3.2","vm":"^0.1.0","zone.js":"~0.12.0"},"devDependencies":{"@angular-devkit/build-angular":"^15.2.10","@angular-eslint/builder":"^15.2.1","@angular-eslint/eslint-plugin":"^15.2.1","@angular-eslint/eslint-plugin-template":"^15.2.1","@angular-eslint/schematics":"^15.2.1","@angular-eslint/template-parser":"^15.2.1","@angular/cli":"^15.2.10","@angular/compiler-cli":"^15.2.10","@badeball/cypress-cucumber-preprocessor":"^16.0.3","@bahmutov/cypress-esbuild-preprocessor":"^2.2.0","@shelex/cypress-allure-plugin":"^2.40.0","@types/chai":"^4.3.9","@types/cucumber":"^6.0.1","@types/jasmine":"~3.10.15","@types/node":"^16.18.59","@typescript-eslint/eslint-plugin":"5.62.0","@typescript-eslint/parser":"5.62.0","chai":"^4.3.10","chai-as-promised":"^7.1.1","cucumber":"^6.0.5","cypress":"^12.17.4","esbuild":"^0.19.5","eslint":"^8.51.0","jasmine-core":"~3.99.1","jasmine-spec-reporter":"~6.0.0","karma":"~6.4.2","karma-chrome-launcher":"~3.2.0","karma-coverage":"~2.2.1","karma-jasmine":"~4.0.2","karma-jasmine-html-reporter":"^1.7.0","multiple-cucumber-html-reporter":"^3.5.0","sanitize-html":"^2.11.0","ts-node":"~9.1.1","typescript":"~4.9.5","webdriver-manager":"^12.1.9","webpack-bundle-analyzer":"^4.9.1","sass":"^1.69.4","js-interpreter":"^5.0.0","sass-loader":"^13.3.2"}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map