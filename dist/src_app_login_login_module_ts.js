"use strict";
(self["webpackChunkeServe"] = self["webpackChunkeServe"] || []).push([["src_app_login_login_module_ts"],{

/***/ 50395:
/*!*********************************************!*\
  !*** ./src/app/core/storage/web.storage.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebStorage": () => (/* binding */ WebStorage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 84505);




let WebStorage = class WebStorage {
    constructor(router) {
        this.router = router;
        this.Loginvalue = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(0);
        this.Createaccountvalue = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(0);
        this.Forgotpasswordvalue = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(0);
    }
    /**
     * Create account Function call from Registerpage
     * @param uservalue from user form value
     */
    Createaccount(uservalue) {
        let Rawdata = localStorage.getItem('Loginusers');
        let Pdata = [];
        Pdata = JSON.parse(Rawdata);
        const Eresult = Pdata.find(({ email }) => email === uservalue.email);
        if (Eresult) {
            this.Createaccountvalue.next('This email are already exist');
        }
        else {
            Pdata.push(uservalue);
            const jsonData = JSON.stringify(Pdata);
            //localStorage.setItem('Loginusers', jsonData);
            this.Login(uservalue);
        }
    }
    /**
     * Login Functionality call from Login
     * @param uservalue from login page
     */
    Login(uservalue) {
        let returndata = { message: '', status: '' };
        let data = localStorage.getItem('Loginusers');
        let Pdata = JSON.parse(data);
        const Eresult = Pdata.find(({ email }) => email === uservalue.email);
        if (Eresult) {
            if (Eresult.password === uservalue.password) {
                this.Createtoken(uservalue);
                this.Loginvalue.next('Login success');
                this.router.navigate(['/layout/dashboard/admin']);
                this.Loginvalue.next(0);
            }
            else {
                returndata.message = 'Incorrect password';
                returndata.status = 'password';
                this.Loginvalue.next(returndata);
            }
        }
        else {
            returndata.message = 'Email is  not valid';
            returndata.status = 'email';
            this.Loginvalue.next(returndata);
        }
    }
    /**
     * Create Token function for authendication
     * @param uservalue recived from login function
     */
    Createtoken(uservalue) {
        var result = 'ABCDEFGHI' + uservalue.email + 'ghijklmnopqrs' + 'z01234567';
        localStorage.setItem('LoginData', result);
    }
    /**
     * Two Storage are used
     */
    Deleteuser() {
        localStorage.removeItem('Loginusers');
        localStorage.removeItem('LoginData');
    }
    /**
     * called from Login page init statement
     */
    Checkuser() {
        let users = localStorage.getItem('Loginusers');
        if (users === null) {
            let password = [
                {
                    email: 'admin@dreamguys.in',
                    password: '123456',
                },
            ];
            const jsonData = JSON.stringify(password);
            //localStorage.setItem('Loginusers', jsonData);
        }
    }
    /**
     * Forgot password function
     * @param uservalue email object recived from Forgot password
     */
    Forgotpassword(uservalue) {
        let Rawdata = localStorage.getItem('Loginusers');
        let Pdata = [];
        Pdata = JSON.parse(Rawdata);
        const Eresult = Pdata.find(({ email }) => email === uservalue.email);
        if (Eresult) {
            this.Forgotpasswordvalue.next(Eresult);
        }
        else {
            this.Forgotpasswordvalue.next('Email Not Valid');
        }
    }
};
WebStorage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router }
];
WebStorage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], WebStorage);



/***/ }),

/***/ 55426:
/*!***************************************!*\
  !*** ./src/app/login/auth.service.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url}api/`;
    }
    loginUser(param) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().append('Custom-Key', src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.Custom_Key);
        return this.http.post(`${this.url}Login`, param, { headers });
    }
    forgotPassword(param) {
        return this.http.post(`${this.url}ForgotPassword`, param);
    }
    resetPassword(param) {
        return this.http.post(`${this.url}ForgotPassword/ResetPassword`, param);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ 62326:
/*!******************************************************************!*\
  !*** ./src/app/login/forgot-success/forgot-success.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotSuccessComponent": () => (/* binding */ ForgotSuccessComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _forgot_success_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-success.component.html?ngResource */ 20454);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_sharing_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sharing/static */ 75348);




let ForgotSuccessComponent = class ForgotSuccessComponent {
    constructor() {
        this.static_constants = src_app_sharing_static__WEBPACK_IMPORTED_MODULE_1__.static_constants;
    }
    ngOnInit() {
    }
};
ForgotSuccessComponent.ctorParameters = () => [];
ForgotSuccessComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-forgot-success',
        template: _forgot_success_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
    })
], ForgotSuccessComponent);



/***/ }),

/***/ 16963:
/*!**************************************************!*\
  !*** ./src/app/login/forgot/forgot.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotComponent": () => (/* binding */ ForgotComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _forgot_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot.component.html?ngResource */ 14413);
/* harmony import */ var _forgot_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot.component.css?ngResource */ 19230);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var src_app_sharing_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sharing/static */ 75348);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ 55426);









let ForgotComponent = class ForgotComponent {
    constructor(authService, toastr, router) {
        this.authService = authService;
        this.toastr = toastr;
        this.router = router;
        this.static_constants = src_app_sharing_static__WEBPACK_IMPORTED_MODULE_2__.static_constants;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]),
        });
    }
    get f() {
        return this.form.controls;
    }
    ngOnInit() { }
    submit() {
        if (this.form.invalid) {
            return;
        }
        this.spinner.showLoader();
        this.authService.forgotPassword(this.form.value)
            .subscribe((res) => {
            this.spinner.hideLoader();
            if (res.status == 'Fail') {
                this.toastr.error("", "Invalid Email, Please try again.");
                return;
            }
            this.toastr.success("", "Email sent successfully!");
            this.router.navigate(['/login/forgot-success']);
        });
    }
};
ForgotComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
ForgotComponent.propDecorators = {
    spinner: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['spinner',] }]
};
ForgotComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-forgot",
        template: _forgot_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_forgot_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ForgotComponent);



/***/ }),

/***/ 63242:
/*!**********************************************************!*\
  !*** ./src/app/login/lockscreen/lockscreen.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LockscreenComponent": () => (/* binding */ LockscreenComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _lockscreen_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lockscreen.component.html?ngResource */ 80950);
/* harmony import */ var _lockscreen_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lockscreen.component.css?ngResource */ 68092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let LockscreenComponent = class LockscreenComponent {
    constructor() { }
    ngOnInit() {
    }
};
LockscreenComponent.ctorParameters = () => [];
LockscreenComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-lockscreen',
        template: _lockscreen_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_lockscreen_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LockscreenComponent);



/***/ }),

/***/ 45393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginRoutingModule": () => (/* binding */ LoginRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ 18223);
/* harmony import */ var _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot/forgot.component */ 16963);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ 44376);
/* harmony import */ var _otp_otp_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./otp/otp.component */ 87139);
/* harmony import */ var _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lockscreen/lockscreen.component */ 63242);
/* harmony import */ var _reset_reset_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reset/reset.component */ 42825);
/* harmony import */ var _forgot_success_forgot_success_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-success/forgot-success.component */ 62326);










const routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent },
    { path: 'forgot', component: _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_1__.ForgotComponent },
    { path: 'forgot-success', component: _forgot_success_forgot_success_component__WEBPACK_IMPORTED_MODULE_6__.ForgotSuccessComponent },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_2__.RegisterComponent },
    { path: 'otp', component: _otp_otp_component__WEBPACK_IMPORTED_MODULE_3__.OtpComponent },
    { path: 'lockscreen', component: _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_4__.LockscreenComponent },
    { path: 'reset/:token', component: _reset_reset_component__WEBPACK_IMPORTED_MODULE_5__.ResetComponent }
];
let LoginRoutingModule = class LoginRoutingModule {
};
LoginRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
    })
], LoginRoutingModule);



/***/ }),

/***/ 80107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginModule": () => (/* binding */ LoginModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ 18223);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-routing.module */ 45393);
/* harmony import */ var _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot/forgot.component */ 16963);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ 44376);
/* harmony import */ var _otp_otp_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./otp/otp.component */ 87139);
/* harmony import */ var _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lockscreen/lockscreen.component */ 63242);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _sharing_sharing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sharing/sharing.module */ 85260);
/* harmony import */ var _reset_reset_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reset/reset.component */ 42825);
/* harmony import */ var _forgot_success_forgot_success_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forgot-success/forgot-success.component */ 62326);













let LoginModule = class LoginModule {
};
LoginModule = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
        declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent, _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_2__.ForgotComponent, _register_register_component__WEBPACK_IMPORTED_MODULE_3__.RegisterComponent, _otp_otp_component__WEBPACK_IMPORTED_MODULE_4__.OtpComponent, _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_5__.LockscreenComponent, _reset_reset_component__WEBPACK_IMPORTED_MODULE_7__.ResetComponent, _forgot_success_forgot_success_component__WEBPACK_IMPORTED_MODULE_8__.ForgotSuccessComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_1__.LoginRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
            _sharing_sharing_module__WEBPACK_IMPORTED_MODULE_6__.SharingModule
        ]
    })
], LoginModule);



/***/ }),

/***/ 18223:
/*!************************************************!*\
  !*** ./src/app/login/login/login.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component.html?ngResource */ 92096);
/* harmony import */ var _login_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.css?ngResource */ 90232);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ 70900);
/* harmony import */ var src_app_sharing_static__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sharing/static */ 75348);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ 55426);










let LoginComponent = class LoginComponent {
    constructor(_authService, toastr, _appService, router) {
        this._authService = _authService;
        this.toastr = toastr;
        this._appService = _appService;
        this.router = router;
        this.Toggledata = true;
        this.static_constants = src_app_sharing_static__WEBPACK_IMPORTED_MODULE_3__.static_constants;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
            Password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
        });
    }
    get f() {
        return this.form.controls;
    }
    ngOnInit() {
    }
    submit() {
        this.form.markAllAsTouched();
        //this.storage.Login(this.form.value);
        if (this.form.invalid) {
            return;
        }
        this.spinner.showLoader();
        this._authService.loginUser(this.form.value).subscribe((res) => {
            if (!res.responseMsg.isError) {
                this._appService.setStorageData('_A', res.responseData.data);
                this._appService.setStorageData('_T', res._tokenData);
                this.router.navigate(['/layout/dashboard/admin']);
            }
            else {
                this.toastr.error("", "Invalid Email/Password, Please try again.");
            }
            this.spinner.hideLoader();
        }, err => this.spinner.hideLoader());
    }
    ngOnDestroy() {
        //this.subscription.unsubscribe();
    }
    iconLogle() {
        this.Toggledata = !this.Toggledata;
    }
};
LoginComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService },
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
LoginComponent.propDecorators = {
    spinner: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['spinner',] }]
};
LoginComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: "app-login",
        template: _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginComponent);



/***/ }),

/***/ 87139:
/*!********************************************!*\
  !*** ./src/app/login/otp/otp.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpComponent": () => (/* binding */ OtpComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _otp_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./otp.component.html?ngResource */ 11554);
/* harmony import */ var _otp_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./otp.component.css?ngResource */ 663);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let OtpComponent = class OtpComponent {
    constructor() { }
    ngOnInit() {
    }
};
OtpComponent.ctorParameters = () => [];
OtpComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-otp',
        template: _otp_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_otp_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OtpComponent);



/***/ }),

/***/ 44376:
/*!******************************************************!*\
  !*** ./src/app/login/register/register.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.component.html?ngResource */ 65985);
/* harmony import */ var _register_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.component.css?ngResource */ 32426);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_core_storage_web_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/storage/web.storage */ 50395);






let RegisterComponent = class RegisterComponent {
    constructor(storage) {
        this.storage = storage;
        this.isvalidconfirmpassword = false;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
        });
        this.subscription = this.storage.Createaccountvalue.subscribe((data) => {
            this.CustomControler = data;
        });
    }
    get f() {
        return this.form.controls;
    }
    ngOnInit() { }
    submit() {
        if (this.form.value.password != this.form.value.confirmPassword) {
            this.isvalidconfirmpassword = true;
        }
        else {
            this.isvalidconfirmpassword = false;
            this.storage.Createaccount(this.form.value);
        }
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
RegisterComponent.ctorParameters = () => [
    { type: src_app_core_storage_web_storage__WEBPACK_IMPORTED_MODULE_2__.WebStorage }
];
RegisterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: "app-register",
        template: _register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_register_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterComponent);



/***/ }),

/***/ 42825:
/*!************************************************!*\
  !*** ./src/app/login/reset/reset.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetComponent": () => (/* binding */ ResetComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _reset_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset.component.html?ngResource */ 878);
/* harmony import */ var _reset_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset.component.css?ngResource */ 32057);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var src_app_sharing_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sharing/static */ 75348);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ 55426);









let ResetComponent = class ResetComponent {
    constructor(router, activatedRoute, fb, _authService, toastr) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this._authService = _authService;
        this.toastr = toastr;
        this.static_constants = src_app_sharing_static__WEBPACK_IMPORTED_MODULE_2__.static_constants;
        this.TogglePdata = true;
        this.ToggleCPdata = true;
        this.passwordErrorValidator = (control) => {
            const password = control.get('Password');
            const repeatPassword = control.get('ConfirmPassword');
            return password.value != repeatPassword.value ? { 'passwordError': true } : null;
        };
    }
    get f() {
        return this.form.controls;
    }
    ngOnInit() {
        this.activatedRoute.snapshot.paramMap.get('token');
        this.form = this.fb.group({
            Password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(25), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{5,25}')]),
            ConfirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(25), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{5,25}')]),
            Token: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.activatedRoute.snapshot.paramMap.get('token'))
        }, { validator: this.passwordErrorValidator });
    }
    submit() {
        this.spinner.showLoader();
        this._authService.resetPassword(this.form.value).subscribe((res) => {
            this.spinner.hideLoader();
            if (res.status == 'Fail') {
                return;
            }
            this.toastr.success("", "Password reset successfully.");
            this.router.navigate(['/login']);
        });
    }
    iconLogle(flag) {
        switch (flag) {
            case "C":
                this.TogglePdata = !this.TogglePdata;
                break;
            case "CP":
                this.ToggleCPdata = !this.ToggleCPdata;
                break;
        }
    }
};
ResetComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService }
];
ResetComponent.propDecorators = {
    spinner: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['spinner',] }]
};
ResetComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-reset',
        template: _reset_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_reset_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ResetComponent);



/***/ }),

/***/ 19230:
/*!**************************************************************!*\
  !*** ./src/app/login/forgot/forgot.component.css?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jnb3QuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 68092:
/*!**********************************************************************!*\
  !*** ./src/app/login/lockscreen/lockscreen.component.css?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2Nrc2NyZWVuLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 90232:
/*!************************************************************!*\
  !*** ./src/app/login/login/login.component.css?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 663:
/*!********************************************************!*\
  !*** ./src/app/login/otp/otp.component.css?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvdHAuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 32426:
/*!******************************************************************!*\
  !*** ./src/app/login/register/register.component.css?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 32057:
/*!************************************************************!*\
  !*** ./src/app/login/reset/reset.component.css?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNldC5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 20454:
/*!*******************************************************************************!*\
  !*** ./src/app/login/forgot-success/forgot-success.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"account-content\">\n  <div class=\"container\">\n    <!-- Account Logo -->\n    <div class=\"account-logo\">\n      <a href=\"javascript:\"><img src=\"assets/img/EserveLogo/350w/logo-blue1.png\"\n          [alt]=\"static_constants.projectLabel\" /></a>\n    </div>\n    <!-- /Account Logo -->\n\n    <div class=\"account-box\">\n      <div class=\"account-wrapper\">\n        <h3 class=\"account-title\">Forgot Password</h3>\n        <p class=\"account-subtitle\">\n          Email sent successfully, Please check you email for link to reset password\n        </p>\n        To Login <a routerLink=\"/login\">click here.</a>\n      </div>\n    </div>\n\n    <div class=\"company-logo\">\n      <p class=\"company-tag\">Powered by <img src=\"assets/img/EserveLogo/350w/digi-surface1.png\"\n          [alt]=\"static_constants.projectLabel\" />\n      </p>\n    </div>\n\n  </div>\n</div>\n";

/***/ }),

/***/ 14413:
/*!***************************************************************!*\
  !*** ./src/app/login/forgot/forgot.component.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "<app-spinner #spinner></app-spinner>\r\n<div class=\"account-content\">\r\n  <div class=\"container\">\r\n    <!-- Account Logo -->\r\n    <div class=\"account-logo\">\r\n      <a href=\"javascript:\"><img src=\"assets/img/EserveLogo/350w/logo-blue1.png\"\r\n          [alt]=\"static_constants.projectLabel\" /></a>\r\n    </div>\r\n    <!-- /Account Logo -->\r\n\r\n    <div class=\"account-box\">\r\n      <div class=\"account-wrapper\">\r\n        <h3 class=\"account-title\">Forgot Password?</h3>\r\n        <p class=\"account-subtitle\">\r\n          Enter your Email to get a password reset link\r\n        </p>\r\n\r\n        <!-- Account Form -->\r\n        <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\r\n          <div class=\"form-group\">\r\n            <label>Email Address</label>\r\n            <input class=\"form-control\" type=\"text\" formControlName=\"Email\" id=\"Email\" />\r\n            <div *ngIf=\"f['Email'].touched && f['Email'].invalid\" class=\"text-danger\">\r\n              <div *ngIf=\"f['Email'].errors && f['Email'].errors['required']\">Email is required.</div>\r\n              <div *ngIf=\"f['Email'].errors && f['Email'].errors['Email']\">Please, enter valid Email address.</div>\r\n            </div>\r\n            <div *ngIf='CustomControler !=0' class=\"text-danger\">\r\n              {{CustomControler}}\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group text-center\">\r\n            <button class=\"btn btn-primary account-btn\" [disabled]=\"form.invalid\" type=\"submit\">Reset Password</button>\r\n          </div>\r\n          <div class=\"account-footer\">\r\n            <p>\r\n              Remember your password? <a routerLink=\"/login\">Login</a>\r\n            </p>\r\n          </div>\r\n        </form>\r\n        <!-- /Account Form -->\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"company-logo\">\r\n      <p class=\"company-tag\">Powered by <img src=\"assets/img/EserveLogo/350w/digi-surface1.png\"\r\n          [alt]=\"static_constants.projectLabel\" />\r\n      </p>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n";

/***/ }),

/***/ 80950:
/*!***********************************************************************!*\
  !*** ./src/app/login/lockscreen/lockscreen.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "<!-- Main Wrapper -->\r\n<div class=\"main-wrapper\">\r\n    <div class=\"account-content\">\r\n        <div class=\"container\">\r\n\r\n            <!-- Account Logo -->\r\n            <div class=\"account-logo\">\r\n                <a routerLink=\"/layout/dashboard/admin\"><img src=\"assets/img/logo2.png\" alt=\"Dreamguy's Technologies\"></a>\r\n            </div>\r\n            <!-- /Account Logo -->\r\n\r\n            <div class=\"account-box\">\r\n                <div class=\"account-wrapper\">\r\n\r\n                    <!-- Lock User Img -->\r\n                    <div class=\"lock-user\">\r\n                        <img alt=\"\" src=\"assets/img/profiles/avatar-2.jpg\" class=\"rounded-circle\">\r\n                        <h4>John Doe</h4>\r\n                    </div>\r\n                    <!-- /Lock User Img -->\r\n\r\n                    <!-- Account Form -->\r\n                    <form action=\"dashboard\">\r\n                        <div class=\"form-group\">\r\n                            <label>Password</label>\r\n                            <input class=\"form-control\" type=\"password\">\r\n                        </div>\r\n                        <div class=\"form-group text-center\">\r\n                            <button class=\"btn btn-primary account-btn\" type=\"submit\">Enter</button>\r\n                        </div>\r\n                        <div class=\"account-footer\">\r\n                            <p>Sign in as a different user? <a routerLink=\"/login\">Login</a></p>\r\n                        </div>\r\n                    </form>\r\n                    <!-- /Account Form -->\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Main Wrapper -->";

/***/ }),

/***/ 92096:
/*!*************************************************************!*\
  !*** ./src/app/login/login/login.component.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "<app-spinner #spinner></app-spinner>\r\n<div class=\"account-content\">\r\n  <div class=\"container\">\r\n    <!-- Account Logo -->\r\n    <div class=\"account-logo\">\r\n      <a href=\"javascript:\"><img src=\"assets/img/EserveLogo/350w/logo-blue1.png\"\r\n          [alt]=\"static_constants.projectLabel\" /></a>\r\n    </div>\r\n    <!-- /Account Logo -->\r\n\r\n    <div class=\"account-box\">\r\n      <div class=\"account-wrapper\">\r\n        <h3 class=\"account-title\">Login</h3>\r\n        <p class=\"account-subtitle\">Access to our dashboard</p>\r\n\r\n        <!-- Account Form -->\r\n        <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\r\n          <div class=\"form-group\">\r\n            <label>Email Address</label>\r\n            <input class=\"form-control\" type=\"text\" formControlName=\"Email\" id=\"Email\"\r\n              [ngClass]=\"{'is-invalid': f['Email'].touched && f['Email'].invalid}\" />\r\n            <div class=\"text-danger\" *ngIf=\"CustomControler ?.status === 'Email'\">\r\n              {{ CustomControler.message }}\r\n            </div>\r\n            <div *ngIf=\"f['Email'].touched && f['Email'].invalid\" class=\"text-danger\">\r\n              <div *ngIf=\"f['Email'].errors && f['Email'].errors['required']\">Email is required.</div>\r\n              <div *ngIf=\"f['Email'].errors && f['Email'].errors['Email']\">\r\n                Please, enter valid Email address.\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <div class=\"row\">\r\n              <div class=\"col\">\r\n                <label>Password</label>\r\n              </div>\r\n              <div class=\"col-auto\">\r\n                <a class=\"text-muted\" routerLink=\"/login/forgot\">\r\n                  Forgot Password?\r\n                </a>\r\n              </div>\r\n            </div>\r\n            <div class=\"position-relative\">\r\n              <input class=\"form-control\" [type]=\"Toggledata ? 'Password' : 'text'\" formControlName=\"Password\"\r\n                id=\"Password\" [ngClass]=\"{'is-invalid': f['Password'].touched && f['Password'].invalid}\" />\r\n              <span [ngClass]=\"Toggledata == true ? 'fa toggle-Password fa-eye' : 'fa toggle-Password fa-eye-slash'\"\r\n                (click)=\"iconLogle()\"></span>\r\n            </div>\r\n            <div *ngIf=\"f['Password'].touched && f['Password'].invalid\" class=\"text-danger\">\r\n              <div *ngIf=\"f['Password'].errors && f['Password'].errors['required']\">\r\n                Password is required.\r\n              </div>\r\n            </div>\r\n            <div class=\"text-danger\" *ngIf=\"CustomControler ?.status === 'Password'\">{{ CustomControler.message }}</div>\r\n          </div>\r\n          <div class=\"form-group text-center\">\r\n            <button class=\"btn btn-primary account-btn\" [disabled]=\"form.invalid\" type=\"submit\">Login</button>\r\n          </div>\r\n        </form>\r\n        <!-- /Account Form -->\r\n      </div>\r\n    </div>\r\n    <div class=\"company-logo\">\r\n      <p class=\"company-tag\">Powered by <img src=\"assets/img/EserveLogo/350w/digi-surface-350-logo.png\"\r\n          [alt]=\"static_constants.projectLabel\"  />\r\n      </p>\r\n    </div>\r\n  </div>\r\n</div>\r\n";

/***/ }),

/***/ 11554:
/*!*********************************************************!*\
  !*** ./src/app/login/otp/otp.component.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "<!-- Main Wrapper -->\r\n<div class=\"main-wrapper\">\r\n    <div class=\"account-content\">\r\n        <div class=\"container\">\r\n\r\n            <!-- Account Logo -->\r\n            <div class=\"account-logo\">\r\n                <a routerLink=\"/layout/dashboard/admin\"><img src=\"assets/img/logo2.png\" alt=\"Dreamguy's Technologies\"></a>\r\n            </div>\r\n            <!-- /Account Logo -->\r\n\r\n            <div class=\"account-box\">\r\n                <div class=\"account-wrapper\">\r\n                    <h3 class=\"account-title\">OTP</h3>\r\n                    <p class=\"account-subtitle\">Verification your account</p>\r\n\r\n                    <!-- Account Form -->\r\n                    <form action=\"dashboard\">\r\n                        <div class=\"otp-wrap\">\r\n                            <input type=\"text\" placeholder=\"0\" maxlength=\"1\" class=\"otp-input\">\r\n                            <input type=\"text\" placeholder=\"0\" maxlength=\"1\" class=\"otp-input\">\r\n                            <input type=\"text\" placeholder=\"0\" maxlength=\"1\" class=\"otp-input\">\r\n                            <input type=\"text\" placeholder=\"0\" maxlength=\"1\" class=\"otp-input\">\r\n                        </div>\r\n                        <div class=\"form-group text-center\">\r\n                            <button class=\"btn btn-primary account-btn\" type=\"submit\">Enter</button>\r\n                        </div>\r\n                        <div class=\"account-footer\">\r\n                            <p>Not yet received? <a >Resend OTP</a></p>\r\n                        </div>\r\n                    </form>\r\n                    <!-- /Account Form -->\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Main Wrapper -->";

/***/ }),

/***/ 65985:
/*!*******************************************************************!*\
  !*** ./src/app/login/register/register.component.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<!-- Main Wrapper -->\r\n<div class=\"main-wrapper\">\r\n  <div class=\"account-content\">\r\n    <div class=\"container\">\r\n      <!-- Account Logo -->\r\n      <div class=\"account-logo\">\r\n        <a routerLink=\"/layout/dashboard/admin\"\r\n          ><img src=\"assets/img/logo2.png\" alt=\"Dreamguy's Technologies\"\r\n        /></a>\r\n      </div>\r\n      <!-- /Account Logo -->\r\n\r\n      <div class=\"account-box\">\r\n        <div class=\"account-wrapper\">\r\n          <h3 class=\"account-title\">Register</h3>\r\n          <p class=\"account-subtitle\">Access to our dashboard</p>\r\n\r\n          <!-- Account Form -->\r\n          <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\r\n            <div class=\"form-group\">\r\n              <label>Email<span class=\"mandatory\">*</span></label>\r\n              <input class=\"form-control\" type=\"text\" formControlName=\"email\" id=\"email\"/>\r\n              <div *ngIf=\"f['email'].touched && f['email'].invalid\" class=\"text-danger\">\r\n                  <div *ngIf=\"f['email'].errors && f['email'].errors['required']\">Email is required.</div>\r\n              </div>\r\n              <div *ngIf=\"CustomControler !=0\" class=\"text-danger\">\r\n                  {{CustomControler}}\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>Password<span class=\"mandatory\">*</span></label>\r\n              <input class=\"form-control\" type=\"password\" formControlName=\"password\" id=\"password\"/>\r\n              <div *ngIf=\"f['password'].touched && f['password'].invalid\" class=\"text-danger\">\r\n                  <div *ngIf=\"f['password'].errors && f['password'].errors['required']\">Password is required.</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>Repeat Password<span class=\"mandatory\">*</span></label>\r\n              <input class=\"form-control\" type=\"password\" formControlName=\"confirmPassword\" id=\"confirmPassword\"/>\r\n              <div *ngIf=\"f['confirmPassword'].touched && f['confirmPassword'].invalid\" class=\"text-danger\">\r\n                  <div *ngIf=\"f['confirmPassword'].errors && f['confirmPassword'].errors['required']\">\r\n                      Confirm Password is required.\r\n                  </div>\r\n              </div>\r\n              <div *ngIf=isvalidconfirmpassword class=\"text-danger\">\r\n                  Password not matching\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group text-center\">\r\n              <button class=\"btn btn-primary account-btn\" type=\"submit\" [disabled]=\"form.invalid\">Register</button>\r\n            </div>\r\n            <div class=\"account-footer\">\r\n              <p>Already have an account? <a routerLink=\"/login\">Login</a></p>\r\n            </div>\r\n          </form>\r\n          <!-- /Account Form -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- /Main Wrapper -->\r\n";

/***/ }),

/***/ 878:
/*!*************************************************************!*\
  !*** ./src/app/login/reset/reset.component.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "<app-spinner #spinner></app-spinner>\n<div class=\"account-content\">\n  <div class=\"container\">\n    <!-- Account Logo -->\n    <div class=\"account-logo\">\n      <a href=\"javascript:\"><img src=\"assets/img/EserveLogo/350w/logo-blue1.png\"\n          [alt]=\"static_constants.projectLabel\" /></a>\n    </div>\n    <!-- /Account Logo -->\n\n    <div class=\"account-box\">\n      <div class=\"account-wrapper\">\n        <h3 class=\"account-title\">Reset Password</h3>\n        <p class=\"account-subtitle\">\n          Enter your new password\n        </p>\n\n        <!-- Account Form -->\n        <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n          <div class=\"form-group\">\n            <label>Password</label>\n            <input class=\"form-control\" [type]=\"TogglePdata ? 'Password' : 'text'\" formControlName=\"Password\" id=\"Password\" />\n            <span [ngClass]=\"TogglePdata == true ? 'fa toggle-Password fa-eye' : 'fa toggle-Password fa-eye-slash'\"\n                (click)=\"iconLogle('C')\"></span>\n            <div *ngIf=\"f['Password'].touched && f['Password'].invalid\" class=\"text-danger\">\n              <div *ngIf=\"f['Password'].errors && f['Password'].errors['minlength'] && !f['Password'].errors['maxlength'] && !f['Password'].errors['required']\">Password cannot be less than 6 characters.</div>\n              <div *ngIf=\"f['Password'].errors && f['Password'].errors['maxlength'] && !f['Password'].errors['minlength'] && !f['Password'].errors['required']\">Password cannot be more than 25 characters.</div>\n              <div *ngIf=\"f['Password'].errors && f['Password'].errors['required']\">Password is required.</div>\n              <div *ngIf=\"f['Password'].errors && f['Password'].errors['pattern'] && !f['Password'].errors['minlength'] && !f['Password'].errors['maxlength']\">Password must have an alphabet, a number, an uppercase alphabet, a lowercase alphabet and a special character.</div>\n            </div>\n            <div *ngIf='CustomControler !=0' class=\"text-danger\">\n              {{CustomControler}}\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label>Confirm Password</label>\n            <input class=\"form-control\" [type]=\"ToggleCPdata ? 'Password' : 'text'\" formControlName=\"ConfirmPassword\" id=\"ConfirmPassword\" />\n            <span [ngClass]=\"ToggleCPdata == true ? 'fa toggle-Password fa-eye' : 'fa toggle-Password fa-eye-slash'\"\n                (click)=\"iconLogle('CP')\"></span>\n            <div *ngIf=\"f['ConfirmPassword'].touched && f['ConfirmPassword'].invalid\" class=\"text-danger\">\n              <div *ngIf=\"f['ConfirmPassword'].errors && f['ConfirmPassword'].errors['minlength'] && !f['ConfirmPassword'].errors['maxlength'] && !f['ConfirmPassword'].errors['required']\">Password cannot be less than 6 characters.</div>\n              <div *ngIf=\"f['ConfirmPassword'].errors && f['ConfirmPassword'].errors['maxlength'] && !f['ConfirmPassword'].errors['minlength'] && !f['ConfirmPassword'].errors['required']\">Password cannot be more than 25 characters.</div>\n              <div *ngIf=\"f['ConfirmPassword'].errors && f['ConfirmPassword'].errors['required']\">Confirm password is required.</div>\n              <div *ngIf=\"f['ConfirmPassword'].errors && f['ConfirmPassword'].errors['pattern'] && !f['ConfirmPassword'].errors['minlength'] && !f['ConfirmPassword'].errors['maxlength']\">Password must have an alphabet, a number, an uppercase alphabet, a lowercase alphabet and a special character.</div>\n              <div *ngIf=\"!f['confirm_password'].invalid && form.errors?.passwordError && (form.touched || form.dirty)\" class=\"alert alert-danger\">\n                Password mismatch\n              </div>\n            </div>\n            <div *ngIf='CustomControler !=0' class=\"text-danger\">\n              {{CustomControler}}\n            </div>\n          </div>\n          <div class=\"form-group text-center\">\n            <button class=\"btn btn-primary account-btn\" [disabled]=\"form.invalid\" type=\"submit\">Change Password</button>\n          </div>\n        </form>\n        <!-- /Account Form -->\n      </div>\n    </div>\n\n    <div class=\"company-logo\">\n      <p class=\"company-tag\">Powered by <img src=\"assets/img/EserveLogo/350w/digi-surface1.png\"\n          [alt]=\"static_constants.projectLabel\" />\n      </p>\n    </div>\n\n  </div>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map