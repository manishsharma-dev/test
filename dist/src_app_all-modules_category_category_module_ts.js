"use strict";
(self["webpackChunkeServe"] = self["webpackChunkeServe"] || []).push([["src_app_all-modules_category_category_module_ts"],{

/***/ 24138:
/*!*******************************************************************************!*\
  !*** ./src/app/all-modules/category/category-list/category-list.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryListComponent": () => (/* binding */ CategoryListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _category_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-list.component.html?ngResource */ 30065);
/* harmony import */ var _category_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category-list.component.css?ngResource */ 52203);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _all_modules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../all-modules.service */ 78376);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 82808);







let CategoryListComponent = class CategoryListComponent {
    constructor(formBuilder, srvModuleService, toastr) {
        this.formBuilder = formBuilder;
        this.srvModuleService = srvModuleService;
        this.toastr = toastr;
        this.url = "categories";
    }
    ngOnInit() {
        this.LoadCategories();
        this.addCategoriesForm = this.formBuilder.group({
            CategoriesName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
        });
        this.editCategoriesForm = this.formBuilder.group({
            CategoriesName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
        });
    }
    // Get department list  Api Call
    LoadCategories() {
        this.srvModuleService.get(this.url).subscribe((data) => {
            this.lstCategories = data;
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
    // Add Department  Modal Api Call
    addCategories() {
        if (this.addCategoriesForm.invalid) {
            this.markFormGroupTouched(this.addCategoriesForm);
            return;
        }
        if (this.addCategoriesForm.valid) {
            let obj = {
                categoryname: this.addCategoriesForm.value.CategoriesName,
                id: 0,
                subcategoryname: "Hardware expenses"
            };
            this.srvModuleService.add(obj, this.url).subscribe((data) => {
            });
            this.LoadCategories();
            $("#add_categories").modal("hide");
            this.addCategoriesForm.reset();
            this.toastr.success("Categories added sucessfully...!", "Success");
        }
    }
    editCategories() {
        if (this.editCategoriesForm.valid) {
            let obj = {
                categoryname: this.editCategoriesForm.value.CategoriesName,
                subcategoryname: this.editedvalue,
                id: this.editId,
            };
            this.srvModuleService.update(obj, this.url).subscribe((data1) => {
            });
            this.LoadCategories();
            $("#edit_categories").modal("hide");
            this.toastr.success("Categories Updated sucessfully...!", "Success");
        }
    }
    // To Get The department Edit Id And Set Values To Edit Modal Form
    edit(value) {
        this.editedvalue = value.subcategoryname;
        this.editId = value.id;
        const index = this.lstCategories.findIndex((item) => {
            return item.id === value.id;
        });
        let toSetValues = this.lstCategories[index];
        this.editCategoriesForm.setValue({
            CategoriesName: toSetValues.categoryname,
        });
    }
};
CategoryListComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _all_modules_service__WEBPACK_IMPORTED_MODULE_2__.AllModulesService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService }
];
CategoryListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-category-list',
        template: _category_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_category_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CategoryListComponent);



/***/ }),

/***/ 1119:
/*!*****************************************************************!*\
  !*** ./src/app/all-modules/category/category-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryRoutingModule": () => (/* binding */ CategoryRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _category_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category.component */ 92144);
/* harmony import */ var _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category-list/category-list.component */ 24138);





const routes = [
    {
        path: "",
        component: _category_component__WEBPACK_IMPORTED_MODULE_0__.CategoryComponent,
        children: [
            {
                path: "categories",
                component: _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_1__.CategoryListComponent
            }
        ]
    }
];
let CategoryRoutingModule = class CategoryRoutingModule {
};
CategoryRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], CategoryRoutingModule);



/***/ }),

/***/ 92144:
/*!************************************************************!*\
  !*** ./src/app/all-modules/category/category.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryComponent": () => (/* binding */ CategoryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _category_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category.component.html?ngResource */ 5818);
/* harmony import */ var _category_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.component.css?ngResource */ 31458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let CategoryComponent = class CategoryComponent {
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
CategoryComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone }
];
CategoryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-category',
        template: _category_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_category_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener)('window: resize', ['$event'])
], CategoryComponent);



/***/ }),

/***/ 69886:
/*!*********************************************************!*\
  !*** ./src/app/all-modules/category/category.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryModule": () => (/* binding */ CategoryModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _category_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-routing.module */ 1119);
/* harmony import */ var _category_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.component */ 92144);
/* harmony import */ var _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category-list/category-list.component */ 24138);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);







let CategoryModule = class CategoryModule {
};
CategoryModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_category_component__WEBPACK_IMPORTED_MODULE_1__.CategoryComponent, _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_2__.CategoryListComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _category_routing_module__WEBPACK_IMPORTED_MODULE_0__.CategoryRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule
        ]
    })
], CategoryModule);



/***/ }),

/***/ 52203:
/*!*******************************************************************************************!*\
  !*** ./src/app/all-modules/category/category-list/category-list.component.css?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yeS1saXN0LmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 31458:
/*!************************************************************************!*\
  !*** ./src/app/all-modules/category/category.component.css?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yeS5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 30065:
/*!********************************************************************************************!*\
  !*** ./src/app/all-modules/category/category-list/category-list.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "<div>\r\n<!-- Page Wrapper -->\r\n            <div class=\"page-wrapper\">\r\n            \r\n                <!-- Page Content -->\r\n                <div class=\"content container-fluid\">\r\n                    <!-- Page Header -->\r\n                    <div class=\"page-header\">\r\n                        <div class=\"row align-items-center\">\r\n                            <div class=\"col\">\r\n                                <h3 class=\"page-title\">Categories</h3>\r\n                                <ul class=\"breadcrumb\">\r\n                                    <li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n                                    <li class=\"breadcrumb-item active\">Accounts</li>\r\n                                </ul>\r\n                            </div>\r\n                            <div class=\"col-auto float-end ms-auto\">\r\n                                <a href=\"#\" class=\"btn add-btn\" data-bs-toggle=\"modal\" data-bs-target=\"#add_categories\"><i class=\"fa fa-plus\"></i> Add Categories</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- /Page Header -->\r\n                    \r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"table-responsive\">\r\n                                <table class=\"table table-striped custom-table mb-0\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th>#</th>\r\n                                            <th>Category Name </th>\r\n                                            <th>Sub-Category Name</th>\r\n                                            <th class=\"text-end\">Action</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr *ngFor=\"let item of lstCategories\">\r\n                                            <td>{{item.id}}</td>\r\n                                            <td>{{item.categoryname}}</td>\r\n                                            <td>{{item.subcategoryname}}</td>\r\n                                            <td class=\"text-end\">\r\n                                                <div class=\"dropdown dropdown-action\">\r\n                                                    <a href=\"#\" class=\"action-icon dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\"><i class=\"material-icons\">more_vert</i></a>\r\n                                                    <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                                        <a class=\"dropdown-item\" href=\"#\" data-bs-toggle=\"modal\" data-bs-target=\"#edit_categories\" (click)=\"edit(item)\"><i class=\"fa fa-pencil m-r-5\"></i> Edit</a>\r\n                                                        <a class=\"dropdown-item\" routerLink=\"/layout/subcategory/subcategorylsit\" ><i class=\"fa fa-object-ungroup m-r-5\"></i> Sub-Category </a>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </td>\r\n                                        </tr>\r\n                                        \r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- /Page Content -->\r\n                \r\n                <!-- Add Holiday Modal -->\r\n                <div id=\"add_categories\" class=\"modal custom-modal fade\" id=\"add_categories\" role=\"dialog\">\r\n                    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n                        <div class=\"modal-content\">\r\n                            <div class=\"modal-header\">\r\n                                <h5 class=\"modal-title\">Add Categories</h5>\r\n                                <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                                    <span aria-hidden=\"true\">&times;</span>\r\n                                </button>\r\n                            </div>\r\n                            <div class=\"modal-body\">\r\n                                <form (ngSubmit)=\"addCategories()\" [formGroup]=\"addCategoriesForm\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Categories Name <span class=\"text-danger\">*</span></label>\r\n                                        <input class=\"form-control\" type=\"text\" [class.invalid]=\"addCategoriesForm.get('CategoriesName').invalid && addCategoriesForm.get('CategoriesName').touched\"\r\n                            formControlName=\"CategoriesName\">\r\n                            <div\r\n                            *ngIf=\"addCategoriesForm.get('CategoriesName').invalid && addCategoriesForm.get('CategoriesName').touched\">\r\n                            <small\r\n                                *ngIf=\"addCategoriesForm.get('CategoriesName').invalid && addCategoriesForm.get('CategoriesName').touched\"\r\n                                class=\"text-danger\"> *Categories Name required</small>\r\n                        </div>\r\n                                    </div>\r\n                                    \r\n                                    <div class=\"submit-section\">\r\n                                        <button class=\"btn btn-primary submit-btn\">Submit</button>\r\n                                    </div>\r\n                                </form>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- /Add Holiday Modal -->\r\n                \r\n                <!-- Add Holiday Modal -->\r\n                <div  id=\"edit_categories\"class=\"modal custom-modal fade\" id=\"edit_categories\" role=\"dialog\">\r\n                    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n                        <div class=\"modal-content\">\r\n                            <div class=\"modal-header\">\r\n                                <h5 class=\"modal-title\">Edit Categories</h5>\r\n                                <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                                    <span aria-hidden=\"true\">&times;</span>\r\n                                </button>\r\n                            </div>\r\n                            <div class=\"modal-body\">\r\n                                <form (ngSubmit)=\"editCategories()\" [formGroup]=\"editCategoriesForm\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Categories Name <span class=\"text-danger\">*</span></label>\r\n                                        <input class=\"form-control\" type=\"text\" value=\"Hardware\" [class.invalid]=\"editCategoriesForm.get('CategoriesName').invalid && editCategoriesForm.get('CategoriesName').touched\"\r\n                            formControlName=\"CategoriesName\">\r\n                            <div\r\n                            *ngIf=\"editCategoriesForm.get('CategoriesName').invalid && editCategoriesForm.get('CategoriesName').touched\">\r\n                            <small\r\n                                *ngIf=\"editCategoriesForm.get('CategoriesName').invalid && editCategoriesForm.get('CategoriesName').touched\"\r\n                                class=\"text-danger\"> *Categories Name required</small>\r\n                        </div>\r\n                                    </div>\r\n                                    \r\n                                    <div class=\"submit-section\">\r\n                                        <button class=\"btn btn-primary submit-btn\">Submit</button>\r\n                                    </div>\r\n                                </form>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- /Add Holiday Modal -->\r\n            </div>\r\n            <!-- /Page Wrapper -->\r\n</div>";

/***/ }),

/***/ 5818:
/*!*************************************************************************!*\
  !*** ./src/app/all-modules/category/category.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<router-outlet></router-outlet>";

/***/ })

}]);
//# sourceMappingURL=src_app_all-modules_category_category_module_ts.js.map