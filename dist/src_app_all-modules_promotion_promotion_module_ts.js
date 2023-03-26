"use strict";
(self["webpackChunkeServe"] = self["webpackChunkeServe"] || []).push([["src_app_all-modules_promotion_promotion_module_ts"],{

/***/ 36597:
/*!**********************************************************************************!*\
  !*** ./src/app/all-modules/promotion/promotion-main/promotion-main.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromotionMainComponent": () => (/* binding */ PromotionMainComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _promotion_main_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promotion-main.component.html?ngResource */ 18016);
/* harmony import */ var _promotion_main_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./promotion-main.component.css?ngResource */ 55546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _all_modules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../all-modules.service */ 78376);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 73899);










let PromotionMainComponent = class PromotionMainComponent {
    constructor(formBuilder, srvModuleService, toastr) {
        this.formBuilder = formBuilder;
        this.srvModuleService = srvModuleService;
        this.toastr = toastr;
        this.dtOptions = {};
        this.url = 'promotionmain';
        this.rows = [];
        this.srch = [];
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe('en-US');
    }
    ngOnInit() {
        this.loadPromotion();
        this.dtOptions = {
            // ... skipped ...
            pageLength: 10,
            dom: "lrtip",
        };
        this.addPromotionForm = this.formBuilder.group({
            proFor: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            proFrom: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            proTo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            proDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]]
        });
        this.editPromotionForm = this.formBuilder.group({
            proFor: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            proFrom: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            proTo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            proDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]]
        });
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.dtTrigger.next();
        }, 1000);
    }
    // Get  trainer Api Call
    loadPromotion() {
        this.srvModuleService.get(this.url).subscribe(data => {
            this.lstPromotion = data;
            this.rows = this.lstPromotion;
            this.srch = [...this.rows];
        });
    }
    markFormGroupTouched(formGroup) {
        Object.values(formGroup.controls).forEach((control) => {
            control.markAsTouched();
            if (control.controls) {
                this.markFormGroupTouched(control);
            }
        });
    }
    // Add  goal type  Modal Api Call
    addPromotion() {
        if (this.addPromotionForm.invalid) {
            this.markFormGroupTouched(this.addPromotionForm);
            return;
        }
        if (this.addPromotionForm.valid) {
            let promoDate = this.pipe.transform(this.addPromotionForm.value.proDate, 'dd-MM-yyyy');
            let obj = {
                employee: this.addPromotionForm.value.proFor,
                department: 'Web development',
                promotionFrom: this.addPromotionForm.value.proFrom,
                promotionTo: this.addPromotionForm.value.proTo,
                promotionDate: promoDate,
            };
            this.srvModuleService.add(obj, this.url).subscribe(data => {
                $("#datatable").DataTable().clear();
                this.dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.destroy();
                });
                this.dtTrigger.next();
            });
            this.loadPromotion();
            $('#add_promotion').modal('hide');
            this.addPromotionForm.reset();
            this.toastr.success("Promotion added sucessfully...!", 'Success');
        }
    }
    editPromotion() {
        if (this.editPromotionForm.valid) {
            let promoDate = this.pipe.transform(this.editPromotionForm.value.proDate, 'dd-MM-yyyy');
            let obj = {
                employee: this.editPromotionForm.value.proFor,
                department: 'Web development',
                promotionFrom: this.editPromotionForm.value.proFrom,
                promotionTo: this.editPromotionForm.value.proTo,
                promotionDate: promoDate,
                id: this.editId
            };
            this.srvModuleService.update(obj, this.url).subscribe(data1 => {
                $("#datatable").DataTable().clear();
                this.dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.destroy();
                });
                this.dtTrigger.next();
            });
            this.loadPromotion();
            $('#edit_promotion').modal('hide');
            this.toastr.success("Promotion Updated sucessfully...!", 'Success');
        }
    }
    // To Get The goal type Edit Id And Set Values To Edit Modal Form
    edit(value) {
        this.editId = value;
        const index = this.lstPromotion.findIndex(item => {
            return item.id === value;
        });
        let toSetValues = this.lstPromotion[index];
        this.editPromotionForm.setValue({
            proFor: toSetValues.employee,
            proTo: toSetValues.promotionTo,
            proFrom: toSetValues.promotionFrom,
            proDate: toSetValues.promotionDate
        });
    }
    deletePromotion() {
        this.srvModuleService.delete(this.tempId, this.url).subscribe(data => {
            $("#datatable").DataTable().clear();
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.destroy();
            });
            this.dtTrigger.next();
        });
        this.loadPromotion();
        $('#delete_promotion').modal('hide');
        this.toastr.success("Promotion  deleted sucessfully..!", 'Success');
    }
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
};
PromotionMainComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _all_modules_service__WEBPACK_IMPORTED_MODULE_2__.AllModulesService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService }
];
PromotionMainComponent.propDecorators = {
    dtElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTableDirective, { static: false },] }]
};
PromotionMainComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-promotion-main',
        template: _promotion_main_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_promotion_main_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PromotionMainComponent);



/***/ }),

/***/ 75846:
/*!*******************************************************************!*\
  !*** ./src/app/all-modules/promotion/promotion-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromotionRoutingModule": () => (/* binding */ PromotionRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _promotion_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promotion.component */ 19085);
/* harmony import */ var _promotion_main_promotion_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./promotion-main/promotion-main.component */ 36597);





const routes = [
    {
        path: "",
        component: _promotion_component__WEBPACK_IMPORTED_MODULE_0__.PromotionComponent,
        children: [
            {
                path: "promotionmain",
                component: _promotion_main_promotion_main_component__WEBPACK_IMPORTED_MODULE_1__.PromotionMainComponent
            }
        ]
    }
];
let PromotionRoutingModule = class PromotionRoutingModule {
};
PromotionRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], PromotionRoutingModule);



/***/ }),

/***/ 19085:
/*!**************************************************************!*\
  !*** ./src/app/all-modules/promotion/promotion.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromotionComponent": () => (/* binding */ PromotionComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _promotion_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promotion.component.html?ngResource */ 53267);
/* harmony import */ var _promotion_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./promotion.component.css?ngResource */ 42382);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let PromotionComponent = class PromotionComponent {
    constructor(ngZone) {
        this.ngZone = ngZone;
        window.onresize = (e) => {
            this.ngZone.run(() => {
                this.innerHeight = window.innerHeight + 'px';
            });
        };
        this.getScreenHeight();
    }
    getScreenHeight() {
        this.innerHeight = window.innerHeight + 'px';
    }
    ngOnInit() {
    }
    onResize(event) {
        this.innerHeight = event.target.innerHeight + 'px';
    }
};
PromotionComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone }
];
PromotionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-promotion',
        template: _promotion_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_promotion_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener)('window: resize', ['$event'])
], PromotionComponent);



/***/ }),

/***/ 31589:
/*!***********************************************************!*\
  !*** ./src/app/all-modules/promotion/promotion.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromotionModule": () => (/* binding */ PromotionModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _promotion_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promotion-routing.module */ 75846);
/* harmony import */ var _promotion_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./promotion.component */ 19085);
/* harmony import */ var _promotion_main_promotion_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./promotion-main/promotion-main.component */ 36597);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 73899);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ 59304);
/* harmony import */ var src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sharing/sharing.module */ 85260);










let PromotionModule = class PromotionModule {
};
PromotionModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_promotion_component__WEBPACK_IMPORTED_MODULE_1__.PromotionComponent, _promotion_main_promotion_main_component__WEBPACK_IMPORTED_MODULE_2__.PromotionMainComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_5__.SharingModule,
            _promotion_routing_module__WEBPACK_IMPORTED_MODULE_0__.PromotionRoutingModule,
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__.BsDatepickerModule.forRoot(),
            angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTablesModule,
            src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_5__.SharingModule
        ]
    })
], PromotionModule);



/***/ }),

/***/ 55546:
/*!**********************************************************************************************!*\
  !*** ./src/app/all-modules/promotion/promotion-main/promotion-main.component.css?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = ".content {\r\n\tpadding: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb21vdGlvbi1tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxhQUFhO0FBQ2QiLCJmaWxlIjoicHJvbW90aW9uLW1haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuXHRwYWRkaW5nOiAzMHB4O1xyXG59Il19 */";

/***/ }),

/***/ 42382:
/*!**************************************************************************!*\
  !*** ./src/app/all-modules/promotion/promotion.component.css?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9tb3Rpb24uY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 18016:
/*!***********************************************************************************************!*\
  !*** ./src/app/all-modules/promotion/promotion-main/promotion-main.component.html?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"page-header\">\r\n        <div class=\"row align-items-center\">\r\n            <div class=\"col\">\r\n                <h3 class=\"page-title\">Promotion</h3>\r\n                <ul class=\"breadcrumb\">\r\n                    <li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n                    <li class=\"breadcrumb-item active\">Promotion</li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"col-auto float-end ms-auto\">\r\n                <a class=\"btn add-btn\" data-bs-toggle=\"modal\" data-bs-target=\"#add_promotion\"><i class=\"fa fa-plus\"></i> Add\r\n                    Promotion</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"table-responsive\">\r\n\r\n                <!-- Promotion Table -->\r\n                <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" id=\"datatable\"\r\n                    class=\"table table-striped custom-table mb-0 datatable\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>#</th>\r\n                            <th>Promoted Employee </th>\r\n                            <th>Department</th>\r\n                            <th>Promotion Designation From </th>\r\n                            <th>Promotion Designation To </th>\r\n                            <th>Promotion Date </th>\r\n                            <th class=\"text-end\">Action</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let item of lstPromotion;let i = index\">\r\n                            <td>{{item.id}}</td>\r\n                            <td>\r\n                                <h2 class=\"table-avatar blue-link\">\r\n                                    <a routerLink=\"/layout/employees/employeeprofile\" class=\"avatar\"><img alt=\"\"\r\n                                            src=\"assets/img/profiles/avatar-{{i+ 1}}.jpg\"></a>\r\n                                    <a routerLink=\"/layout/employees/employeeprofile\">{{item.employee}}</a>\r\n                                </h2>\r\n                            </td>\r\n                            <td>{{item.department}}</td>\r\n                            <td>{{item.promotionFrom}}</td>\r\n                            <td>{{item.promotionTo}}</td>\r\n                            <td>{{item.promotionDate | customDate}}</td>\r\n                            <td class=\"text-end\">\r\n                                <div class=\"dropdown dropdown-action\">\r\n                                    <a class=\"action-icon dropdown-toggle\" data-bs-toggle=\"dropdown\"\r\n                                        aria-expanded=\"false\"><i class=\"material-icons\">more_vert</i></a>\r\n                                    <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                        <a class=\"dropdown-item\" data-bs-toggle=\"modal\" data-bs-target=\"#edit_promotion\"\r\n                                            (click)=\"edit(item.id)\"><i class=\"fa fa-pencil m-r-5\"></i> Edit</a>\r\n                                        <a class=\"dropdown-item\" data-bs-toggle=\"modal\" data-bs-target=\"#delete_promotion\"\r\n                                            (click)=\"tempId =item.id\"><i class=\"fa fa-trash-o m-r-5\"></i>\r\n                                            Delete</a>\r\n                                    </div>\r\n                                </div>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n                <!-- /Promotion Table -->\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Page Content -->\r\n\r\n<!-- Add Promotion Modal -->\r\n<div id=\"add_promotion\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Add Promotion</h5>\r\n                <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"addPromotion()\" [formGroup]=\"addPromotionForm\">\r\n                    <div class=\"form-group\">\r\n                        <label>Promotion For <span class=\"text-danger\">*</span></label>\r\n                        <input class=\"form-control\" type=\"text\"\r\n                            [class.invalid]=\"addPromotionForm.get('proFor').invalid && addPromotionForm.get('proFor').touched\"\r\n                            formControlName=\"proFor\">\r\n                        <div *ngIf=\"addPromotionForm.get('proFor').invalid && addPromotionForm.get('proFor').touched\">\r\n                            <small\r\n                                *ngIf=\"addPromotionForm.get('proFor').invalid && addPromotionForm.get('proFor').touched\"\r\n                                class=\"text-danger\"> *Promotion For is required</small>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Promotion From <span class=\"text-danger\">*</span></label>\r\n                        <input class=\"form-control\" type=\"text\"\r\n                            [class.invalid]=\"addPromotionForm.get('proFrom').invalid && addPromotionForm.get('proFrom').touched\"\r\n                            formControlName=\"proFrom\">\r\n                        <div *ngIf=\"addPromotionForm.get('proFrom').invalid && addPromotionForm.get('proFrom').touched\">\r\n                            <small\r\n                                *ngIf=\"addPromotionForm.get('proFrom').invalid && addPromotionForm.get('proFrom').touched\"\r\n                                class=\"text-danger\"> *Promotion From is required</small>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Promotion To <span class=\"text-danger\">*</span></label>\r\n                        <select class=\"form-select form-control\"\r\n                            [class.invalid]=\"addPromotionForm.get('proTo').invalid && addPromotionForm.get('proTo').touched\"\r\n                            formControlName=\"proTo\">\r\n                            <option>Web Developer</option>\r\n                            <option>Web Designer</option>\r\n                            <option>SEO Analyst</option>\r\n                        </select>\r\n                        <div *ngIf=\"addPromotionForm.get('proTo').invalid && addPromotionForm.get('proTo').touched\">\r\n                            <small\r\n                                *ngIf=\"addPromotionForm.get('proTo').invalid && addPromotionForm.get('proTo').touched\"\r\n                                class=\"text-danger\"> *Promotion To is required</small>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Promotion Date <span class=\"text-danger\">*</span></label>\r\n                        <div class=\"cal-icon\">\r\n                            <input class=\"form-control datetimepicker\" type=\"text\" bsDatepicker type=\"text\"\r\n                                [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\"\r\n                                [class.invalid]=\"addPromotionForm.get('proDate').invalid && addPromotionForm.get('proDate').touched\"\r\n                                formControlName=\"proDate\">\r\n                            <div\r\n                                *ngIf=\"addPromotionForm.get('proDate').invalid && addPromotionForm.get('proDate').touched\">\r\n                                <small\r\n                                    *ngIf=\"addPromotionForm.get('proDate').invalid && addPromotionForm.get('proDate').touched\"\r\n                                    class=\"text-danger\"> *Promotion Date is required</small>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\" type=\"submit\">Submit</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Add Promotion Modal -->\r\n\r\n<!-- Edit Promotion Modal -->\r\n<div id=\"edit_promotion\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Edit Promotion</h5>\r\n                <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"editPromotion()\" [formGroup]=\"editPromotionForm\">\r\n                    <div class=\"form-group\">\r\n                        <label>Promotion For <span class=\"text-danger\">*</span></label>\r\n                        <input class=\"form-control\" type=\"text\"\r\n                            [class.invalid]=\"editPromotionForm.get('proFor').invalid && editPromotionForm.get('proFor').touched\"\r\n                            formControlName=\"proFor\">\r\n                        <div *ngIf=\"editPromotionForm.get('proFor').invalid && editPromotionForm.get('proFor').touched\">\r\n                            <small\r\n                                *ngIf=\"editPromotionForm.get('proFor').invalid && editPromotionForm.get('proFor').touched\"\r\n                                class=\"text-danger\"> *Promotion For is required</small>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Promotion From <span class=\"text-danger\">*</span></label>\r\n                        <input class=\"form-control\" type=\"text\"\r\n                            [class.invalid]=\"editPromotionForm.get('proFrom').invalid && editPromotionForm.get('proFrom').touched\"\r\n                            formControlName=\"proFrom\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Promotion To <span class=\"text-danger\">*</span></label>\r\n                        <select class=\"form-select form-control\"\r\n                            [class.invalid]=\"editPromotionForm.get('proTo').invalid && editPromotionForm.get('proTo').touched\"\r\n                            formControlName=\"proTo\">\r\n                            <option>Web Developer</option>\r\n                            <option>Web Designer</option>\r\n                            <option>SEO Analyst</option>\r\n                        </select>\r\n                        <div *ngIf=\"editPromotionForm.get('proTo').invalid && editPromotionForm.get('proTo').touched\">\r\n                            <small\r\n                                *ngIf=\"editPromotionForm.get('proTo').invalid && editPromotionForm.get('proTo').touched\"\r\n                                class=\"text-danger\"> *Promotion To is required</small>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Promotion Date <span class=\"text-danger\">*</span></label>\r\n                        <div class=\"cal-icon\">\r\n                            <input class=\"form-control datetimepicker\" type=\"text\" bsDatepicker type=\"text\"\r\n                                [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\"\r\n                                [class.invalid]=\"editPromotionForm.get('proDate').invalid && editPromotionForm.get('proDate').touched\"\r\n                                formControlName=\"proDate\">\r\n\r\n                            <div\r\n                                *ngIf=\"editPromotionForm.get('proDate').invalid && editPromotionForm.get('proDate').touched\">\r\n                                <small\r\n                                    *ngIf=\"editPromotionForm.get('proDate').invalid && editPromotionForm.get('proDate').touched\"\r\n                                    class=\"text-danger\"> *Promotion Date is required</small>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\" type=\"submit\">Submit</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Edit Promotion Modal -->\r\n\r\n<!-- Delete Promotion Modal -->\r\n<div class=\"modal custom-modal fade\" id=\"delete_promotion\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-header\">\r\n                    <h3>Delete Promotion</h3>\r\n                    <p>Are you sure want to delete?</p>\r\n                </div>\r\n                <div class=\"modal-btn delete-action\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-6\">\r\n                            <a  class=\"btn btn-primary continue-btn\"\r\n                                (click)=\"deletePromotion()\">Delete</a>\r\n                        </div>\r\n                        <div class=\"col-6\">\r\n                            <a  data-bs-dismiss=\"modal\"\r\n                                class=\"btn btn-primary cancel-btn\">Cancel</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Delete Promotion Modal -->";

/***/ }),

/***/ 53267:
/*!***************************************************************************!*\
  !*** ./src/app/all-modules/promotion/promotion.component.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Wrapper -->\r\n<div class=\"page-wrapper\" (resized)=\"onResize($event)\" [ngStyle]=\"{ 'height' : innerHeight }\">\r\n    <router-outlet></router-outlet>\r\n    </div>\r\n    <!-- /Page Wrapper -->\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_all-modules_promotion_promotion_module_ts.js.map