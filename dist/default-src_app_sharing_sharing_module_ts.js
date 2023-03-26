"use strict";
(self["webpackChunkeServe"] = self["webpackChunkeServe"] || []).push([["default-src_app_sharing_sharing_module_ts"],{

/***/ 39104:
/*!*****************************************************************!*\
  !*** ./src/app/sharing/components/spinner/spinner.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpinnerComponent": () => (/* binding */ SpinnerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _spinner_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spinner.component.html?ngResource */ 79901);
/* harmony import */ var _spinner_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spinner.component.css?ngResource */ 60423);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ 63947);





let SpinnerComponent = class SpinnerComponent {
    constructor(spinner) {
        this.spinner = spinner;
    }
    ngOnInit() {
    }
    showLoader() {
        this.spinner.show();
    }
    hideLoader() {
        this.spinner.hide();
    }
};
SpinnerComponent.ctorParameters = () => [
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__.NgxSpinnerService }
];
SpinnerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-spinner',
        template: _spinner_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_spinner_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SpinnerComponent);



/***/ }),

/***/ 85260:
/*!*******************************************!*\
  !*** ./src/app/sharing/sharing.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharingModule": () => (/* binding */ SharingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var src_assets_pipes_custom_date_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/assets/pipes/custom-date.pipe */ 53008);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ 63947);
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/spinner/spinner.component */ 39104);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 82808);







let SharingModule = class SharingModule {
};
SharingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [src_assets_pipes_custom_date_pipe__WEBPACK_IMPORTED_MODULE_0__.CustomDatePipe, _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_1__.SpinnerComponent],
        exports: [
            src_assets_pipes_custom_date_pipe__WEBPACK_IMPORTED_MODULE_0__.CustomDatePipe,
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__.NgxSpinnerModule,
            _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_1__.SpinnerComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__.NgxSpinnerModule,
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrModule
        ]
    })
], SharingModule);



/***/ }),

/***/ 53008:
/*!**********************************************!*\
  !*** ./src/assets/pipes/custom-date.pipe.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomDatePipe": () => (/* binding */ CustomDatePipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 36362);



let CustomDatePipe = class CustomDatePipe {
    transform(value, ...args) {
        let myDate = value;
        let changeFormat = myDate.replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3");
        return new _angular_common__WEBPACK_IMPORTED_MODULE_0__.DatePipe('en-US').transform(changeFormat, 'MMM d, y');
    }
};
CustomDatePipe = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe)({
        name: 'customDate'
    })
], CustomDatePipe);



/***/ }),

/***/ 60423:
/*!*****************************************************************************!*\
  !*** ./src/app/sharing/components/spinner/spinner.component.css?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcGlubmVyLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 79901:
/*!******************************************************************************!*\
  !*** ./src/app/sharing/components/spinner/spinner.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<ngx-spinner size = \"medium\" color = \"#fff\" type = \"timer\" [fullScreen] = \"true\" > <p style=\"color: white\" > Loading... </p> </ngx-spinner>\n";

/***/ }),

/***/ 63947:
/*!***********************************************************!*\
  !*** ./node_modules/ngx-spinner/fesm2015/ngx-spinner.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULTS": () => (/* binding */ DEFAULTS),
/* harmony export */   "LOADERS": () => (/* binding */ LOADERS),
/* harmony export */   "NgxSpinner": () => (/* binding */ NgxSpinner),
/* harmony export */   "NgxSpinnerComponent": () => (/* binding */ NgxSpinnerComponent),
/* harmony export */   "NgxSpinnerModule": () => (/* binding */ NgxSpinnerModule),
/* harmony export */   "NgxSpinnerService": () => (/* binding */ NgxSpinnerService),
/* harmony export */   "PRIMARY_SPINNER": () => (/* binding */ PRIMARY_SPINNER)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ 31631);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 50318);








const _c0 = ["overlay"];

function NgxSpinnerComponent_div_0_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
  }
}

function NgxSpinnerComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxSpinnerComponent_div_0_div_2_div_1_Template, 1, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.spinner.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx_r2.spinner.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.spinner.divArray);
  }
}

function NgxSpinnerComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "safeHtml");
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r3.template), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}

function NgxSpinnerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgxSpinnerComponent_div_0_div_2_Template, 2, 5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgxSpinnerComponent_div_0_div_3_Template, 2, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r0.spinner.bdColor)("z-index", ctx_r0.spinner.zIndex)("position", ctx_r0.spinner.fullScreen ? "fixed" : "absolute");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@.disabled", ctx_r0.disableAnimation)("@fadeIn", "in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.template);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.template);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("z-index", ctx_r0.spinner.zIndex);
  }
}

const _c1 = ["*"];
const LOADERS = {
  'ball-8bits': 16,
  'ball-atom': 4,
  'ball-beat': 3,
  'ball-circus': 5,
  'ball-climbing-dot': 4,
  'ball-clip-rotate': 1,
  'ball-clip-rotate-multiple': 2,
  'ball-clip-rotate-pulse': 2,
  'ball-elastic-dots': 5,
  'ball-fall': 3,
  'ball-fussion': 4,
  'ball-grid-beat': 9,
  'ball-grid-pulse': 9,
  'ball-newton-cradle': 4,
  'ball-pulse': 3,
  'ball-pulse-rise': 5,
  'ball-pulse-sync': 3,
  'ball-rotate': 1,
  'ball-running-dots': 5,
  'ball-scale': 1,
  'ball-scale-multiple': 3,
  'ball-scale-pulse': 2,
  'ball-scale-ripple': 1,
  'ball-scale-ripple-multiple': 3,
  'ball-spin': 8,
  'ball-spin-clockwise': 8,
  'ball-spin-clockwise-fade': 8,
  'ball-spin-clockwise-fade-rotating': 8,
  'ball-spin-fade': 8,
  'ball-spin-fade-rotating': 8,
  'ball-spin-rotate': 2,
  'ball-square-clockwise-spin': 8,
  'ball-square-spin': 8,
  'ball-triangle-path': 3,
  'ball-zig-zag': 2,
  'ball-zig-zag-deflect': 2,
  'cog': 1,
  'cube-transition': 2,
  'fire': 3,
  'line-scale': 5,
  'line-scale-party': 5,
  'line-scale-pulse-out': 5,
  'line-scale-pulse-out-rapid': 5,
  'line-spin-clockwise-fade': 8,
  'line-spin-clockwise-fade-rotating': 8,
  'line-spin-fade': 8,
  'line-spin-fade-rotating': 8,
  'pacman': 6,
  'square-jelly-box': 2,
  'square-loader': 1,
  'square-spin': 1,
  'timer': 1,
  'triangle-skew-spin': 1
};
const DEFAULTS = {
  BD_COLOR: 'rgba(51,51,51,0.8)',
  SPINNER_COLOR: '#fff',
  Z_INDEX: 99999
};
const PRIMARY_SPINNER = 'primary';

class NgxSpinner {
  constructor(init) {
    Object.assign(this, init);
  }

  static create(init) {
    if ((init === null || init === void 0 ? void 0 : init.type) == null || init.type.length === 0) {
      console.warn(`[ngx-spinner]: Property "type" is missed. Please, provide animation type to <ngx-spinner> component
        and ensure css is added to angular.json file`);
    }

    return new NgxSpinner(init);
  }

}

class NgxSpinnerService {
  /**
   * Creates an instance of NgxSpinnerService.
   * @memberof NgxSpinnerService
   */
  constructor() {
    /**
     * Spinner observable
     *
     * @memberof NgxSpinnerService
     */
    // private spinnerObservable = new ReplaySubject<NgxSpinner>(1);
    this.spinnerObservable = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
  }
  /**
  * Get subscription of desired spinner
  * @memberof NgxSpinnerService
  **/


  getSpinner(name) {
    return this.spinnerObservable.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(x => x && x.name === name));
  }
  /**
   * To show spinner
   *
   * @memberof NgxSpinnerService
   */


  show(name = PRIMARY_SPINNER, spinner) {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        if (spinner && Object.keys(spinner).length) {
          spinner['name'] = name;
          this.spinnerObservable.next(new NgxSpinner(Object.assign(Object.assign({}, spinner), {
            show: true
          })));
          resolve(true);
        } else {
          this.spinnerObservable.next(new NgxSpinner({
            name,
            show: true
          }));
          resolve(true);
        }
      }, 10);
    });
  }
  /**
  * To hide spinner
  *
  * @memberof NgxSpinnerService
  */


  hide(name = PRIMARY_SPINNER, debounce = 10) {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        this.spinnerObservable.next(new NgxSpinner({
          name,
          show: false
        }));
        resolve(true);
      }, debounce);
    });
  }

}

NgxSpinnerService.ɵfac = function NgxSpinnerService_Factory(t) {
  return new (t || NgxSpinnerService)();
};

NgxSpinnerService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgxSpinnerService,
  factory: NgxSpinnerService.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxSpinnerService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();

class SafeHtmlPipe {
  constructor(_sanitizer) {
    this._sanitizer = _sanitizer;
  }

  transform(v) {
    if (v) {
      return this._sanitizer.bypassSecurityTrustHtml(v);
    }
  }

}

SafeHtmlPipe.ɵfac = function SafeHtmlPipe_Factory(t) {
  return new (t || SafeHtmlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer, 16));
};

SafeHtmlPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "safeHtml",
  type: SafeHtmlPipe,
  pure: true
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafeHtmlPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
    args: [{
      name: 'safeHtml'
    }]
  }], function () {
    return [{
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer
    }];
  }, null);
})();

class NgxSpinnerComponent {
  /**
   * Creates an instance of NgxSpinnerComponent.
   *
   * @memberof NgxSpinnerComponent
   */
  constructor(spinnerService, changeDetector, elementRef) {
    this.spinnerService = spinnerService;
    this.changeDetector = changeDetector;
    this.elementRef = elementRef;
    /**
     * To enable/disable animation
     *
     * @type {boolean}
     * @memberof NgxSpinnerComponent
     */

    this.disableAnimation = false;
    /**
     * Spinner Object
     *
     * @memberof NgxSpinnerComponent
     */

    this.spinner = new NgxSpinner();
    /**
     * Unsubscribe from spinner's observable
     *
     * @memberof NgxSpinnerComponent
    **/

    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    /**
     * To set default ngx-spinner options
     *
     * @memberof NgxSpinnerComponent
     */

    this.setDefaultOptions = () => {
      this.spinner = NgxSpinner.create({
        name: this.name,
        bdColor: this.bdColor,
        size: this.size,
        color: this.color,
        type: this.type,
        fullScreen: this.fullScreen,
        divArray: this.divArray,
        divCount: this.divCount,
        show: this.show,
        zIndex: this.zIndex,
        template: this.template,
        showSpinner: this.showSpinner
      });
    };

    this.bdColor = DEFAULTS.BD_COLOR;
    this.zIndex = DEFAULTS.Z_INDEX;
    this.color = DEFAULTS.SPINNER_COLOR;
    this.size = 'large';
    this.fullScreen = true;
    this.name = PRIMARY_SPINNER;
    this.template = null;
    this.showSpinner = false;
    this.divArray = [];
    this.divCount = 0;
    this.show = false;
  }

  handleKeyboardEvent(event) {
    if (this.spinnerDOM && this.spinnerDOM.nativeElement) {
      if (this.fullScreen || !this.fullScreen && this.isSpinnerZone(event.target)) {
        event.returnValue = false;
        event.preventDefault();
      }
    }
  }

  initObservable() {
    this.spinnerService.getSpinner(this.name).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.ngUnsubscribe)).subscribe(spinner => {
      this.setDefaultOptions();
      Object.assign(this.spinner, spinner);

      if (spinner.show) {
        this.onInputChange();
      }

      this.changeDetector.detectChanges();
    });
  }
  /**
   * Initialization method
   *
   * @memberof NgxSpinnerComponent
   */


  ngOnInit() {
    this.setDefaultOptions();
    this.initObservable();
  }
  /**
   * To check event triggers inside the Spinner Zone
   *
   * @param {*} element
   * @returns {boolean}
   * @memberof NgxSpinnerComponent
   */


  isSpinnerZone(element) {
    if (element === this.elementRef.nativeElement.parentElement) {
      return true;
    }

    return element.parentNode && this.isSpinnerZone(element.parentNode);
  }
  /**
   * On changes event for input variables
   *
   * @memberof NgxSpinnerComponent
   */


  ngOnChanges(changes) {
    for (const propName in changes) {
      if (propName) {
        const changedProp = changes[propName];

        if (changedProp.isFirstChange()) {
          return;
        } else if (typeof changedProp.currentValue !== 'undefined' && changedProp.currentValue !== changedProp.previousValue) {
          if (changedProp.currentValue !== '') {
            this.spinner[propName] = changedProp.currentValue;

            if (propName === 'showSpinner') {
              if (changedProp.currentValue) {
                this.spinnerService.show(this.spinner.name, this.spinner);
              } else {
                this.spinnerService.hide(this.spinner.name);
              }
            }

            if (propName === 'name') {
              this.initObservable();
            }
          }
        }
      }
    }
  }
  /**
   * To get class for spinner
   *
   * @memberof NgxSpinnerComponent
   */


  getClass(type, size) {
    this.spinner.divCount = LOADERS[type];
    this.spinner.divArray = Array(this.spinner.divCount).fill(0).map((_, i) => i);
    let sizeClass = '';

    switch (size.toLowerCase()) {
      case 'small':
        sizeClass = 'la-sm';
        break;

      case 'medium':
        sizeClass = 'la-2x';
        break;

      case 'large':
        sizeClass = 'la-3x';
        break;

      default:
        break;
    }

    return 'la-' + type + ' ' + sizeClass;
  }
  /**
   * Check if input variables have changed
   *
   * @memberof NgxSpinnerComponent
   */


  onInputChange() {
    this.spinner.class = this.getClass(this.spinner.type, this.spinner.size);
  }
  /**
   * Component destroy event
   *
   * @memberof NgxSpinnerComponent
   */


  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}

NgxSpinnerComponent.ɵfac = function NgxSpinnerComponent_Factory(t) {
  return new (t || NgxSpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};

NgxSpinnerComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgxSpinnerComponent,
  selectors: [["ngx-spinner"]],
  viewQuery: function NgxSpinnerComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.spinnerDOM = _t.first);
    }
  },
  hostBindings: function NgxSpinnerComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function NgxSpinnerComponent_keydown_HostBindingHandler($event) {
        return ctx.handleKeyboardEvent($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    }
  },
  inputs: {
    bdColor: "bdColor",
    size: "size",
    color: "color",
    type: "type",
    fullScreen: "fullScreen",
    name: "name",
    zIndex: "zIndex",
    template: "template",
    showSpinner: "showSpinner",
    disableAnimation: "disableAnimation"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c1,
  decls: 1,
  vars: 1,
  consts: [["class", "ngx-spinner-overlay", 3, "background-color", "z-index", "position", 4, "ngIf"], [1, "ngx-spinner-overlay"], ["overlay", ""], [3, "class", "color", 4, "ngIf"], [3, "innerHTML", 4, "ngIf"], [1, "loading-text"], [4, "ngFor", "ngForOf"], [3, "innerHTML"]],
  template: function NgxSpinnerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgxSpinnerComponent_div_0_Template, 6, 12, "div", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.spinner.show);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf],
  pipes: [SafeHtmlPipe],
  styles: [".ngx-spinner-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%}.ngx-spinner-overlay[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(.loading-text){top:50%;left:50%;margin:0;position:absolute;transform:translate(-50%,-50%)}.loading-text[_ngcontent-%COMP%]{position:absolute;top:60%;left:50%;transform:translate(-50%,-60%)}"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('fadeIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
      opacity: 1
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
      opacity: 0
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)(300)]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)(':leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)(200, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
      opacity: 0
    })))])]
  },
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxSpinnerComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngx-spinner',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      animations: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('fadeIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        opacity: 1
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        opacity: 0
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)(300)]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)(':leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)(200, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        opacity: 0
      })))])],
      template: "<div [@.disabled]=\"disableAnimation\" [@fadeIn]=\"'in'\" *ngIf=\"spinner.show\" class=\"ngx-spinner-overlay\"\n  [style.background-color]=\"spinner.bdColor\" [style.z-index]=\"spinner.zIndex\"\n  [style.position]=\"spinner.fullScreen ? 'fixed' : 'absolute'\" #overlay>\n  <div *ngIf=\"!template\" [class]=\"spinner.class\" [style.color]=\"spinner.color\">\n    <div *ngFor=\"let index of spinner.divArray\"></div>\n  </div>\n  <div *ngIf=\"template\" [innerHTML]=\"template | safeHtml\"></div>\n  <div class=\"loading-text\" [style.z-index]=\"spinner.zIndex\">\n    <ng-content></ng-content>\n  </div>\n</div>",
      styles: [".ngx-spinner-overlay{position:fixed;top:0;left:0;width:100%;height:100%}.ngx-spinner-overlay>div:not(.loading-text){top:50%;left:50%;margin:0;position:absolute;transform:translate(-50%,-50%)}.loading-text{position:absolute;top:60%;left:50%;transform:translate(-50%,-60%)}\n"]
    }]
  }], function () {
    return [{
      type: NgxSpinnerService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    bdColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    fullScreen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    zIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    template: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showSpinner: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disableAnimation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    spinnerDOM: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['overlay']
    }],
    handleKeyboardEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['document:keydown', ['$event']]
    }]
  });
})();

class NgxSpinnerModule {}

NgxSpinnerModule.ɵfac = function NgxSpinnerModule_Factory(t) {
  return new (t || NgxSpinnerModule)();
};

NgxSpinnerModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgxSpinnerModule,
  declarations: [NgxSpinnerComponent, SafeHtmlPipe],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule],
  exports: [NgxSpinnerComponent]
});
NgxSpinnerModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxSpinnerModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule],
      declarations: [NgxSpinnerComponent, SafeHtmlPipe],
      exports: [NgxSpinnerComponent]
    }]
  }], null, null);
})();
/*
 * Public API Surface of ngx-spinner
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=default-src_app_sharing_sharing_module_ts.js.map