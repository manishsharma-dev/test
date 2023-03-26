"use strict";
(self["webpackChunkeServe"] = self["webpackChunkeServe"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_auth_authentication_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/auth/authentication.guard */ 66424);




const routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: "login", loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_sharing_sharing_module_ts"), __webpack_require__.e("default-src_app_sharing_static_ts-node_modules_rxjs__esm2015_internal_operators_takeUntil_js--dbea6e"), __webpack_require__.e("src_app_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 80107)).then((m) => m.LoginModule) },
    { path: "error", loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_errorpages_errorpages_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./errorpages/errorpages.module */ 57764)).then((m) => m.ErrorpagesModule) },
    { path: "layout", loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_sharing_static_ts-node_modules_rxjs__esm2015_internal_operators_takeUntil_js--dbea6e"), __webpack_require__.e("src_app_all-modules_all-modules_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./all-modules/all-modules.module */ 48760)).then((m) => m.AllModulesModule), canActivate: [_core_auth_authentication_guard__WEBPACK_IMPORTED_MODULE_0__.AuthenticationGuard], },
    { path: '**', redirectTo: '/login' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 33383);
/* harmony import */ var _app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css?ngResource */ 33088);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);





let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'eServe';
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd) {
                const url = event.url.split('/');
                this.url = url[1];
                if (event.url == '/' ||
                    event.url == '/login' ||
                    event.url == '/login/register' ||
                    event.url == '/login/forgot' ||
                    event.url == '/login/otp' ||
                    event.url == '/login/lockscreen') {
                    document.querySelector('body').classList.add('account-page');
                }
                else {
                    document.querySelector('body').classList.remove('account-page');
                }
                if (event.url == '/error/error404' ||
                    event.url == '/error/error500') {
                    document.querySelector('body').classList.add('error-page');
                }
                else {
                    document.querySelector('body').classList.remove('error-page');
                }
            }
        });
    }
    ngOnInit() {
        // Minified Sidebar
        $(document).on('click', '#toggle_btn', () => {
            if ($('body').hasClass('mini-sidebar')) {
                $('body').removeClass('mini-sidebar');
                $('.subdrop + ul').slideDown();
            }
            else {
                $('body').addClass('mini-sidebar');
                $('.subdrop + ul').slideUp();
            }
            return false;
        });
        $(document).on('mouseover', (e) => {
            e.stopPropagation();
            if ($('body').hasClass('mini-sidebar') && $('#toggle_btn').is(':visible')) {
                const targ = $(e.target).closest('.sidebar').length;
                if (targ) {
                    $('body').addClass('expand-menu');
                    $('.subdrop + ul').slideDown();
                }
                else {
                    $('body').removeClass('expand-menu');
                    $('.subdrop + ul').slideUp();
                }
                return false;
            }
        });
        $('body').append('<div class="sidebar-overlay"></div>');
        $(document).on('click', '#mobile_btn', function () {
            var $wrapper = $('.main-wrapper');
            $wrapper.toggleClass('slide-nav');
            $('.sidebar-overlay').toggleClass('opened');
            $('html').addClass('menu-opened');
            $('#task_window').removeClass('opened');
            return false;
        });
        $(".sidebar-overlay").on("click", function () {
            var $wrapper = $('.main-wrapper');
            $('html').removeClass('menu-opened');
            $(this).removeClass('opened');
            $wrapper.removeClass('slide-nav');
            $('.sidebar-overlay').removeClass('opened');
            $('#task_window').removeClass('opened');
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ 73598);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ 73899);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _sharing_interceptors_http_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sharing/interceptors/http.interceptor */ 54702);






// Bootstrap DataTable




let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTablesModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrModule.forRoot({
                timeOut: 1500,
                positionClass: 'toast-bottom-right',
                preventDuplicates: true,
            }),
        ],
        providers: [{
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HTTP_INTERCEPTORS,
                useClass: _sharing_interceptors_http_interceptor__WEBPACK_IMPORTED_MODULE_3__.HttpCallInterceptor,
                multi: true
            }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    })
], AppModule);



/***/ }),

/***/ 70900:
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppService": () => (/* binding */ AppService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var jscrypto_es6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jscrypto/es6 */ 42587);



let AppService = class AppService {
    constructor() {
        this.secretKey = "SH256AdminEncryption";
    }
    getAdminDetails() {
        return localStorage.getItem("_A") ? JSON.parse(this.decrypt(localStorage.getItem("_A"))) : "";
    }
    getAdminUserRoleDetails() {
        return localStorage.getItem("_A") ? JSON.parse(this.decrypt(localStorage.getItem("_A"))).user.admin_role : "";
    }
    setStorageData(key, data) {
        localStorage.setItem(key, this.encrypt(JSON.stringify(data)));
    }
    getStorageData(key) {
        return localStorage.getItem(key) ? JSON.parse(this.decrypt(localStorage.getItem(key))) : "";
    }
    encrypt(value) {
        return jscrypto_es6__WEBPACK_IMPORTED_MODULE_0__.AES.encrypt(value, this.secretKey.trim()).toString();
    }
    decrypt(textToDecrypt) {
        return jscrypto_es6__WEBPACK_IMPORTED_MODULE_0__.AES.decrypt(textToDecrypt, this.secretKey.trim()).toString(jscrypto_es6__WEBPACK_IMPORTED_MODULE_0__.Utf8);
    }
};
AppService.ctorParameters = () => [];
AppService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], AppService);



/***/ }),

/***/ 66424:
/*!***************************************************!*\
  !*** ./src/app/core/auth/authentication.guard.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationGuard": () => (/* binding */ AuthenticationGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 52816);



let AuthenticationGuard = class AuthenticationGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate() {
        if (!localStorage.getItem('_A')) {
            this.router.navigate(["/login"]);
            return false;
        }
        return true;
    }
};
AuthenticationGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__.Router }
];
AuthenticationGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], AuthenticationGuard);



/***/ }),

/***/ 54702:
/*!**********************************************************!*\
  !*** ./src/app/sharing/interceptors/http.interceptor.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpCallInterceptor": () => (/* binding */ HttpCallInterceptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 66587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.service */ 70900);






let HttpCallInterceptor = class HttpCallInterceptor {
    constructor(injector, service, router) {
        this.injector = injector;
        this.service = service;
        this.router = router;
    }
    handleAuthError(err) {
        if (err.status === 401 || err.status === 403) {
            this.router.navigateByUrl(`/login`);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(err.message);
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(err);
    }
    intercept(request, next) {
        const adminDetail = this.service.getStorageData('_T');
        if (adminDetail) {
            var accessToken = adminDetail.token;
        }
        if (request.url.split('/').includes('login')) {
            clonedRequest = request;
        }
        else {
            var clonedRequest = request.clone({ headers: request.headers.append('Authorization', 'Bearer ' + accessToken) });
        }
        return next.handle(clonedRequest).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(x => this.handleAuthError(x)));
    }
};
HttpCallInterceptor.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector },
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_0__.AppService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
HttpCallInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()
], HttpCallInterceptor);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    url: "https://eserveapi.azurewebsites.net/",
    Custom_Key: "639266BD3F81EA0D22DAB6F55988EB686F3DE928D09E5225BFBB2E461DF82DC3"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 68150);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 33088:
/*!**********************************************!*\
  !*** ./src/app/app.component.css?ngResource ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 33383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "<router-outlet></router-outlet>";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map