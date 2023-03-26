"use strict";
(self["webpackChunkeServe"] = self["webpackChunkeServe"] || []).push([["src_app_all-modules_appliedjobs_appliedjobs_module_ts"],{

/***/ 69857:
/*!****************************************************************************************!*\
  !*** ./src/app/all-modules/appliedjobs/appliedjobs-list/appliedjobs-list.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppliedjobsListComponent": () => (/* binding */ AppliedjobsListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _appliedjobs_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appliedjobs-list.component.html?ngResource */ 20574);
/* harmony import */ var _appliedjobs_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appliedjobs-list.component.css?ngResource */ 74109);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _all_modules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../all-modules.service */ 78376);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 73899);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 92218);









let AppliedjobsListComponent = class AppliedjobsListComponent {
    constructor(formBuilder, srvModuleService, toastr) {
        this.formBuilder = formBuilder;
        this.srvModuleService = srvModuleService;
        this.toastr = toastr;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        // public lstUseralljobs: any[];
        this.url = "appliedjobs";
        this.rows = [];
        this.srch = [];
    }
    ngOnInit() {
        this.dtOptions = {
            // ... skipped ...
            pageLength: 10,
            dom: "lrtip",
        };
        this.LoadAppliedjobs();
    }
    // Get department list  Api Call
    LoadAppliedjobs() {
        this.srvModuleService.get(this.url).subscribe((data) => {
            this.lstAppliedjobs = data;
            this.dtTrigger.next();
            this.rows = this.lstAppliedjobs;
            this.srch = [...this.rows];
        });
    }
    deleteAppliedjobs() {
        this.srvModuleService.delete(this.tempId, this.url).subscribe((data) => {
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.destroy();
            });
            this.LoadAppliedjobs();
            $("#delete_appliedjobs").modal("hide");
            this.toastr.success("Applied-jobs deleted sucessfully..!", "Success");
        });
    }
    //search by Department
    searchDepartment(val) {
        this.rows.splice(0, this.rows.length);
        let temp = this.srch.filter(function (d) {
            val = val.toLowerCase();
            return d.department.toLowerCase().indexOf(val) !== -1 || !val;
        });
        this.rows.push(...temp);
    }
    //search by jobtype
    searchJobtype(val) {
        this.rows.splice(0, this.rows.length);
        let temp = this.srch.filter(function (d) {
            val = val.toLowerCase();
            return d.jobtype.toLowerCase().indexOf(val) !== -1 || !val;
        });
        this.rows.push(...temp);
    }
    //search by designation
    searchJobtitle(val) {
        this.rows.splice(0, this.rows.length);
        let temp = this.srch.filter(function (d) {
            val = val.toLowerCase();
            return d.jobtitle.toLowerCase().indexOf(val) !== -1 || !val;
        });
        this.rows.push(...temp);
    }
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
};
AppliedjobsListComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _all_modules_service__WEBPACK_IMPORTED_MODULE_2__.AllModulesService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService }
];
AppliedjobsListComponent.propDecorators = {
    dtElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTableDirective, { static: false },] }]
};
AppliedjobsListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-appliedjobs-list',
        template: _appliedjobs_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_appliedjobs_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppliedjobsListComponent);



/***/ }),

/***/ 92687:
/*!***********************************************************************!*\
  !*** ./src/app/all-modules/appliedjobs/appliedjobs-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppliedjobsRoutingModule": () => (/* binding */ AppliedjobsRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _appliedjobs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appliedjobs.component */ 75372);
/* harmony import */ var _appliedjobs_list_appliedjobs_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appliedjobs-list/appliedjobs-list.component */ 69857);





const routes = [
    {
        path: "",
        component: _appliedjobs_component__WEBPACK_IMPORTED_MODULE_0__.AppliedjobsComponent,
        children: [
            {
                path: "applied-jobs",
                component: _appliedjobs_list_appliedjobs_list_component__WEBPACK_IMPORTED_MODULE_1__.AppliedjobsListComponent
            }
        ]
    }
];
let AppliedjobsRoutingModule = class AppliedjobsRoutingModule {
};
AppliedjobsRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], AppliedjobsRoutingModule);



/***/ }),

/***/ 75372:
/*!******************************************************************!*\
  !*** ./src/app/all-modules/appliedjobs/appliedjobs.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppliedjobsComponent": () => (/* binding */ AppliedjobsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _appliedjobs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appliedjobs.component.html?ngResource */ 78586);
/* harmony import */ var _appliedjobs_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appliedjobs.component.css?ngResource */ 17843);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let AppliedjobsComponent = class AppliedjobsComponent {
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
AppliedjobsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone }
];
AppliedjobsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-appliedjobs',
        template: _appliedjobs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_appliedjobs_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener)('window: resize', ['$event'])
], AppliedjobsComponent);



/***/ }),

/***/ 65375:
/*!***************************************************************!*\
  !*** ./src/app/all-modules/appliedjobs/appliedjobs.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppliedjobsModule": () => (/* binding */ AppliedjobsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _appliedjobs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appliedjobs-routing.module */ 92687);
/* harmony import */ var _appliedjobs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appliedjobs.component */ 75372);
/* harmony import */ var _appliedjobs_list_appliedjobs_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appliedjobs-list/appliedjobs-list.component */ 69857);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 73899);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);








let AppliedjobsModule = class AppliedjobsModule {
};
AppliedjobsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_appliedjobs_component__WEBPACK_IMPORTED_MODULE_1__.AppliedjobsComponent, _appliedjobs_list_appliedjobs_list_component__WEBPACK_IMPORTED_MODULE_2__.AppliedjobsListComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _appliedjobs_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppliedjobsRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTablesModule
        ]
    })
], AppliedjobsModule);



/***/ }),

/***/ 74109:
/*!****************************************************************************************************!*\
  !*** ./src/app/all-modules/appliedjobs/appliedjobs-list/appliedjobs-list.component.css?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBsaWVkam9icy1saXN0LmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 17843:
/*!******************************************************************************!*\
  !*** ./src/app/all-modules/appliedjobs/appliedjobs.component.css?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBsaWVkam9icy5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 20574:
/*!*****************************************************************************************************!*\
  !*** ./src/app/all-modules/appliedjobs/appliedjobs-list/appliedjobs-list.component.html?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = "<div>\r\n<!-- Page Wrapper -->\r\n            <div class=\"page-wrapper\">\r\n\t\t\t\r\n\t\t\t\t<!-- Page Content -->\r\n                <div class=\"content container-fluid\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t<!-- Page Header -->\r\n\t\t\t\t\t<div class=\"page-header\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t\t\t\t<h3 class=\"page-title\">Applied Jobs</h3>\r\n\t\t\t\t\t\t\t\t<ul class=\"breadcrumb\">\r\n\t\t\t\t\t\t\t\t\t<li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"breadcrumb-item \">Jobs</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"breadcrumb-item\">User Dashboard</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"breadcrumb-item active\">Applied Jobs</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- /Page Header -->\r\n\t\t\t\t\t\r\n\t\t\t\t\t<!-- Content Starts -->\r\n\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t<!-- <h4 class=\"card-title\">Solid justified</h4> -->\r\n\t\t\t\t\t\t\t<ul class=\"nav nav-tabs nav-tabs-solid nav-justified\">\r\n\t\t\t\t\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/layout/userdashboard/user-dashboard\">Dashboard</a></li>\r\n\t\t\t\t\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/layout/useralljobs/user-all-jobs\">All </a></li>\r\n\t\t\t\t\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/layout/savedjobs/saved-jobs\">Saved</a></li>\r\n\t\t\t\t\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link active\" routerLink=\"/layout/appliedjobs/applied-jobs\">Applied</a></li>\r\n\t\t\t\t\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/layout/interviewing/interviewing\">Interviewing</a></li>\r\n\t\t\t\t\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/layout/offeredjobs/offered-jobs\">Offered</a></li>\r\n\t\t\t\t\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/layout/visitedjobs/visited-jobs\">Visitied </a></li>\r\n\t\t\t\t\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/layout/archivedjobs/archived-jobs\">Archived </a></li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t<!-- Search Filter -->\r\n\t\t\t\t\t<div class=\"row filter-row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-6 col-md-3\">  \r\n\t\t\t\t\t\t\t<div class=\"form-group form-focus select-focus\">\r\n\t\t\t\t\t\t\t\t <select class=\"form-select form-control floating\" (input)=\"searchDepartment($event.target.value)\">\r\n\t\t\t\t\t\t\t\t\t<option>Select</option>\r\n\t\t\t\t\t\t\t\t\t<option>Development</option>\r\n\t\t\t\t\t\t\t\t\t<option>Designing</option>\r\n\t\t\t\t\t\t\t\t\t<option>Android</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t<label class=\"focus-label\">Department</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-6 col-md-3\">  \r\n\t\t\t\t\t\t\t<div class=\"form-group form-focus select-focus\">\r\n\t\t\t\t\t\t\t\t<select class=\"form-select form-control floating\" (input)=\"searchJobtype($event.target.value)\">\r\n\t\t\t\t\t\t\t\t\t<option>Select</option>\r\n\t\t\t\t\t\t\t\t\t<option>Full Time</option>\r\n\t\t\t\t\t\t\t\t\t<option>Part Time</option>\r\n\t\t\t\t\t\t\t\t\t<option>Internship</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t<label class=\"focus-label\">Job Type</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-6 col-md-3\"> \r\n\t\t\t\t\t\t\t<div class=\"form-group form-focus select-focus\">\r\n\t\t\t\t\t\t\t\t<select class=\"form-select form-control floating\" (input)=\"searchJobtitle($event.target.value)\">\r\n\t\t\t\t\t\t\t\t\t<option>Select Designation</option>\r\n\t\t\t\t\t\t\t\t\t<option>Web Developer</option>\r\n\t\t\t\t\t\t\t\t\t<option>Web Designer</option>\r\n\t\t\t\t\t\t\t\t\t<option>Android Developer</option>\r\n\t\t\t\t\t\t\t\t\t<option>Ios Developer</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t<label class=\"focus-label\">Designation</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-6 col-md-3\">  \r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-success w-100\"> Search </a>  \r\n\t\t\t\t\t\t</div>\r\n                    </div>\r\n\t\t\t\t\t<!-- Search Filter -->\r\n\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t\t\t\t<table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\"\r\n                    class=\"table table-striped custom-table datatable mb-0\">\r\n\t\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>#</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Job Title</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Department</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Start Date</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Expire Date</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th class=\"text-center\">Job Type</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th class=\"text-center\">Status</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th class=\"text-center\">Actions</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let item of lstAppliedjobs\">\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{item.id}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td><a routerLink=\"/layout/jobs/job-details\">{{item.jobtitle}}</a></td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{item.department}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{item.startdate}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{item.expiredate}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"action-label\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"btn btn-white btn-sm btn-rounded\" href=\"#\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-dot-circle-o text-danger\"></i> {{item.jobtype}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"action-label\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"btn btn-white btn-sm btn-rounded\" href=\"#\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-dot-circle-o text-danger\"></i> {{item.status}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"dropdown dropdown-action\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"action-icon dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\"><i class=\"material-icons\">more_vert</i></a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"dropdown-menu dropdown-menu-right\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item\" href=\"#\" data-bs-toggle=\"modal\" data-bs-target=\"#delete_appliedjobs\" (click)=\"tempId = item.id\"><i class=\"fa fa-trash-o m-r-5\"></i> Delete</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t\t<!-- /Content End -->\r\n\t\t\t\t\t\r\n                </div>\r\n\t\t\t\t<!-- /Page Content -->\r\n\t\t\t\t\r\n            </div>\r\n\t\t\t<!-- /Page Wrapper -->\r\n\t\t\t<!-- Delete Employee Modal -->\r\n\t\t<div class=\"modal custom-modal fade\" id=\"delete_appliedjobs\" role=\"dialog\">\r\n\t\t\t<div class=\"modal-dialog modal-dialog-centered\">\r\n\t\t\t\t<div class=\"modal-content\">\r\n\t\t\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t\t\t<div class=\"form-header\">\r\n\t\t\t\t\t\t\t<h3>Delete</h3>\r\n\t\t\t\t\t\t\t<p>Are you sure want to delete?</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"modal-btn delete-action\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-6\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"btn btn-primary continue-btn\" (click)=\"deleteAppliedjobs()\">Delete</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-6\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" data-bs-dismiss=\"modal\" class=\"btn btn-primary cancel-btn\">Cancel</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!-- /Delete Employee Modal -->\r\n\t</div>";

/***/ }),

/***/ 78586:
/*!*******************************************************************************!*\
  !*** ./src/app/all-modules/appliedjobs/appliedjobs.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "<router-outlet></router-outlet>";

/***/ })

}]);
//# sourceMappingURL=src_app_all-modules_appliedjobs_appliedjobs_module_ts.js.map