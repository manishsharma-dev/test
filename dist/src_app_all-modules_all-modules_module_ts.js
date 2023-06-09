"use strict";
(self["webpackChunkeServe"] = self["webpackChunkeServe"] || []).push([["src_app_all-modules_all-modules_module_ts"],{

/***/ 65372:
/*!***********************************************************!*\
  !*** ./src/app/all-modules/all-modules-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllModulesRoutingModule": () => (/* binding */ AllModulesRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _all_modules_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-modules.component */ 55164);




const routes = [
    {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full",
    },
    {
        path: "",
        component: _all_modules_component__WEBPACK_IMPORTED_MODULE_0__.AllModulesComponent,
        children: [
            {
                path: "dashboard",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_all-modules_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/dashboard.module */ 19626)).then((m) => m.DashboardModule),
            },
            {
                path: "apps",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-bootstrap___ivy_ngcc___esm5_ngx-bootstrap_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_all-modules_apps_apps_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./apps/apps.module */ 11155)).then((m) => m.AppsModule),
            },
            {
                path: "employees",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-bootstrap___ivy_ngcc___esm5_ngx-bootstrap_js"), __webpack_require__.e("default-src_app_sharing_sharing_module_ts"), __webpack_require__.e("default-node_modules_primeng___ivy_ngcc___fesm2015_primeng-picklist_js"), __webpack_require__.e("src_app_all-modules_employees_employees_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./employees/employees.module */ 22751)).then((m) => m.EmployeesModule),
            },
            {
                path: "clients",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_all-modules_clients_clients_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./clients/clients.module */ 33780)).then((m) => m.ClientsModule),
            },
            {
                path: "projects",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-bootstrap___ivy_ngcc___esm5_ngx-bootstrap_js"), __webpack_require__.e("default-src_app_sharing_sharing_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_all-modules_projects_projects_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./projects/projects.module */ 57419)).then((m) => m.ProjectsModule),
            },
            {
                path: "leads",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_all-modules_leads_leads_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./leads/leads.module */ 74948)).then((m) => m.LeadsModule),
            },
            {
                path: "tickets",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-bootstrap___ivy_ngcc___esm5_ngx-bootstrap_js"), __webpack_require__.e("default-src_app_sharing_sharing_module_ts"), __webpack_require__.e("src_app_all-modules_tickets_tickets_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./tickets/tickets.module */ 93377)).then((m) => m.TicketsModule),
            },
            {
                path: "accounts",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-bootstrap___ivy_ngcc___esm5_ngx-bootstrap_js"), __webpack_require__.e("default-src_app_sharing_sharing_module_ts"), __webpack_require__.e("src_app_all-modules_accounts_accounts_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./accounts/accounts.module */ 69098)).then((m) => m.AccountsModule),
            },
            {
                path: "payroll",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-bootstrap___ivy_ngcc___esm5_ngx-bootstrap_js"), __webpack_require__.e("default-src_app_sharing_sharing_module_ts"), __webpack_require__.e("src_app_all-modules_payroll_payroll_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./payroll/payroll.module */ 16416)).then((m) => m.PayrollModule),
            },
            {
                path: "policies",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_all-modules_policies_policies_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./policies/policies.module */ 40218)).then((m) => m.PoliciesModule),
            },
            {
                path: "reports",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-bootstrap___ivy_ngcc___esm5_ngx-bootstrap_js"), __webpack_require__.e("default-src_app_sharing_sharing_module_ts"), __webpack_require__.e("src_app_all-modules_reports_reports_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./reports/reports.module */ 28862)).then((m) => m.ReportsModule),
            },
            {
                path: "performance",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-bootstrap___ivy_ngcc___esm5_ngx-bootstrap_js"), __webpack_require__.e("default-src_app_sharing_sharing_module_ts"), __webpack_require__.e("src_app_all-modules_performance_performance_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./performance/performance.module */ 23060)).then((m) => m.PerformanceModule),
            },
            {
                path: "goals",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-bootstrap___ivy_ngcc___esm5_ngx-bootstrap_js"), __webpack_require__.e("default-src_app_sharing_sharing_module_ts"), __webpack_require__.e("src_app_all-modules_goals_goals_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./goals/goals.module */ 23326)).then((m) => m.GoalsModule),
            },
            {
                path: "training",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-bootstrap___ivy_ngcc___esm5_ngx-bootstrap_js"), __webpack_require__.e("default-src_app_sharing_sharing_module_ts"), __webpack_require__.e("src_app_all-modules_training_training_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./training/training.module */ 48095)).then((m) => m.TrainingModule),
            },
            {
                path: "promotion",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-bootstrap___ivy_ngcc___esm5_ngx-bootstrap_js"), __webpack_require__.e("default-src_app_sharing_sharing_module_ts"), __webpack_require__.e("src_app_all-modules_promotion_promotion_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./promotion/promotion.module */ 31589)).then((m) => m.PromotionModule),
            },
            {
                path: "resignation",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-bootstrap___ivy_ngcc___esm5_ngx-bootstrap_js"), __webpack_require__.e("default-src_app_sharing_sharing_module_ts"), __webpack_require__.e("src_app_all-modules_resignation_resignation_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./resignation/resignation.module */ 25555)).then((m) => m.ResignationModule),
            },
            {
                path: "termination",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-bootstrap___ivy_ngcc___esm5_ngx-bootstrap_js"), __webpack_require__.e("default-src_app_sharing_sharing_module_ts"), __webpack_require__.e("src_app_all-modules_termination_termination_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./termination/termination.module */ 9814)).then((m) => m.TerminationModule),
            },
            {
                path: "assets",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-bootstrap___ivy_ngcc___esm5_ngx-bootstrap_js"), __webpack_require__.e("default-src_app_sharing_sharing_module_ts"), __webpack_require__.e("src_app_all-modules_assets_assets_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./assets/assets.module */ 93952)).then((m) => m.AssetsModule),
            },
            {
                path: "jobs",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-bootstrap___ivy_ngcc___esm5_ngx-bootstrap_js"), __webpack_require__.e("default-src_app_sharing_sharing_module_ts"), __webpack_require__.e("src_app_all-modules_jobs_jobs_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./jobs/jobs.module */ 36663)).then((m) => m.JobsModule),
            },
            {
                path: "knowledgebase",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_all-modules_knowledgebase_knowledgebase_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./knowledgebase/knowledgebase.module */ 37242)).then((m) => m.KnowledgebaseModule),
            },
            {
                path: "activities",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_all-modules_activities_activities_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./activities/activities.module */ 56395)).then((m) => m.ActivitiesModule),
            },
            {
                path: "users",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_all-modules_users_users_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./users/users.module */ 34190)).then((m) => m.UsersModule),
            },
            {
                path: "settings",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_all-modules_settings_settings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./settings/settings.module */ 17247)).then((m) => m.SettingsModule),
            },
            {
                path: "pages",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_all-modules_pages_pages_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages.module */ 64930)).then((m) => m.PagesModule),
            },
            {
                path: "components",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_all-modules_components_components_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./components/components.module */ 88530)).then((m) => m.ComponentsModule),
            },
            {
                path: "forms",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_all-modules_forms_forms_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./forms/forms.module */ 66685)).then((m) => m.FormsModule),
            },
            {
                path: "tables",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_all-modules_tables_tables_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tables/tables.module */ 4791)).then((m) => m.TablesModule),
            },
            {
                path: "scheduling",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-bootstrap___ivy_ngcc___esm5_ngx-bootstrap_js"), __webpack_require__.e("default-src_app_sharing_sharing_module_ts"), __webpack_require__.e("default-node_modules_primeng___ivy_ngcc___fesm2015_primeng-picklist_js"), __webpack_require__.e("src_app_all-modules_scheduling_scheduling_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./scheduling/scheduling.module */ 60488)).then((m) => m.SchedulingModule),
            },
            {
                path: "shift",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-bootstrap___ivy_ngcc___esm5_ngx-bootstrap_js"), __webpack_require__.e("default-src_app_sharing_sharing_module_ts"), __webpack_require__.e("default-node_modules_primeng___ivy_ngcc___fesm2015_primeng-picklist_js"), __webpack_require__.e("src_app_all-modules_shift_shift_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./shift/shift.module */ 71138)).then((m) => m.ShiftModule),
            },
            {
                path: "category",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_all-modules_category_category_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./category/category.module */ 69886)).then((m) => m.CategoryModule),
            },
            {
                path: "budget",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-bootstrap___ivy_ngcc___esm5_ngx-bootstrap_js"), __webpack_require__.e("default-src_app_sharing_sharing_module_ts"), __webpack_require__.e("default-node_modules_primeng___ivy_ngcc___fesm2015_primeng-picklist_js"), __webpack_require__.e("src_app_all-modules_budget_budget_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./budget/budget.module */ 53096)).then((m) => m.BudgetModule),
            },
            {
                path: "budgetexpenses",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-bootstrap___ivy_ngcc___esm5_ngx-bootstrap_js"), __webpack_require__.e("default-src_app_sharing_sharing_module_ts"), __webpack_require__.e("default-node_modules_primeng___ivy_ngcc___fesm2015_primeng-picklist_js"), __webpack_require__.e("src_app_all-modules_budgetexpenses_budgetexpenses_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./budgetexpenses/budgetexpenses.module */ 26625)).then((m) => m.BudgetexpensesModule),
            },
            {
                path: "budgetrevenues",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-bootstrap___ivy_ngcc___esm5_ngx-bootstrap_js"), __webpack_require__.e("default-src_app_sharing_sharing_module_ts"), __webpack_require__.e("default-node_modules_primeng___ivy_ngcc___fesm2015_primeng-picklist_js"), __webpack_require__.e("src_app_all-modules_budgetrevenues_budgetrevenues_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./budgetrevenues/budgetrevenues.module */ 45525)).then((m) => m.BudgetrevenuesModule),
            },
            {
                path: "paymentreports",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-bootstrap___ivy_ngcc___esm5_ngx-bootstrap_js"), __webpack_require__.e("default-src_app_sharing_sharing_module_ts"), __webpack_require__.e("default-node_modules_primeng___ivy_ngcc___fesm2015_primeng-picklist_js"), __webpack_require__.e("src_app_all-modules_paymentreports_paymentreports_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./paymentreports/paymentreports.module */ 17402)).then((m) => m.PaymentreportsModule),
            },
            {
                path: "projectreports",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_all-modules_projectreports_projectreports_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./projectreports/projectreports.module */ 66937)).then((m) => m.ProjectreportsModule),
            },
            {
                path: "taskreports",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_all-modules_taskreports_taskreports_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./taskreports/taskreports.module */ 69004)).then((m) => m.TaskreportsModule),
            },
            {
                path: "userreports",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_all-modules_userreports_userreports_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./userreports/userreports.module */ 45117)).then((m) => m.UserreportsModule),
            },
            {
                path: "employeereports",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-bootstrap___ivy_ngcc___esm5_ngx-bootstrap_js"), __webpack_require__.e("default-src_app_sharing_sharing_module_ts"), __webpack_require__.e("default-node_modules_primeng___ivy_ngcc___fesm2015_primeng-picklist_js"), __webpack_require__.e("src_app_all-modules_employeereports_employeereports_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./employeereports/employeereports.module */ 38279)).then((m) => m.EmployeereportsModule),
            },
            {
                path: "payslipreports",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_all-modules_payslipreports_payslipreports_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./payslipreports/payslipreports.module */ 66781)).then((m) => m.PayslipreportsModule),
            },
            {
                path: "attendancereports",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_all-modules_attendancereports_attendancereports_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./attendancereports/attendancereports.module */ 27681)).then((m) => m.AttendancereportsModule),
            },
            {
                path: "leavereports",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-bootstrap___ivy_ngcc___esm5_ngx-bootstrap_js"), __webpack_require__.e("default-src_app_sharing_sharing_module_ts"), __webpack_require__.e("default-node_modules_primeng___ivy_ngcc___fesm2015_primeng-picklist_js"), __webpack_require__.e("src_app_all-modules_leavereports_leavereports_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./leavereports/leavereports.module */ 99709)).then((m) => m.LeavereportsModule),
            },
            {
                path: "dailyreports",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-bootstrap___ivy_ngcc___esm5_ngx-bootstrap_js"), __webpack_require__.e("default-src_app_sharing_sharing_module_ts"), __webpack_require__.e("default-node_modules_primeng___ivy_ngcc___fesm2015_primeng-picklist_js"), __webpack_require__.e("src_app_all-modules_dailyreports_dailyreports_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./dailyreports/dailyreports.module */ 44066)).then((m) => m.DailyreportsModule),
            },
            {
                path: "userdashboard",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_all-modules_userdashboard_userdashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./userdashboard/userdashboard.module */ 56530)).then((m) => m.UserdashboardModule),
            },
            {
                path: "jobsdashboard",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_all-modules_jobsdashboard_jobsdashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./jobsdashboard/jobsdashboard.module */ 91589)).then((m) => m.JobsdashboardModule),
            },
            {
                path: "manageresume",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-bootstrap___ivy_ngcc___esm5_ngx-bootstrap_js"), __webpack_require__.e("default-src_app_sharing_sharing_module_ts"), __webpack_require__.e("default-node_modules_primeng___ivy_ngcc___fesm2015_primeng-picklist_js"), __webpack_require__.e("src_app_all-modules_manageresume_manageresume_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./manageresume/manageresume.module */ 91708)).then((m) => m.ManageresumeModule),
            },
            {
                path: "candidate",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_all-modules_candidate_candidate_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./candidate/candidate.module */ 62745)).then((m) => m.CandidateModule),
            },
            {
                path: "interview",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_all-modules_interview_interview_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./interview/interview.module */ 49957)).then((m) => m.InterviewModule),
            },
            {
                path: "offer",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_all-modules_offer_offer_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./offer/offer.module */ 14216)).then((m) => m.OfferModule),
            },
            {
                path: "experience",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_all-modules_experience_experience_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./experience/experience.module */ 76239)).then((m) => m.ExperienceModule),
            },
            {
                path: "studentcandidate",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-bootstrap___ivy_ngcc___esm5_ngx-bootstrap_js"), __webpack_require__.e("default-src_app_sharing_sharing_module_ts"), __webpack_require__.e("default-node_modules_primeng___ivy_ngcc___fesm2015_primeng-picklist_js"), __webpack_require__.e("src_app_all-modules_studentcandidate_studentcandidate_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./studentcandidate/studentcandidate.module */ 94939)).then((m) => m.StudentcandidateModule),
            },
            {
                path: "scheduletiming",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_all-modules_scheduletiming_scheduletiming_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./scheduletiming/scheduletiming.module */ 90367)).then((m) => m.ScheduletimingModule),
            },
            {
                path: "aptitute",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_all-modules_aptitute_aptitute_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./aptitute/aptitute.module */ 63735)).then((m) => m.AptituteModule),
            },
            {
                path: "useralljobs",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_all-modules_useralljobs_useralljobs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./useralljobs/useralljobs.module */ 78149)).then((m) => m.UseralljobsModule),
            },
            {
                path: "savedjobs",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_all-modules_savedjobs_savedjobs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./savedjobs/savedjobs.module */ 94707)).then((m) => m.SavedjobsModule),
            },
            {
                path: "appliedjobs",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_all-modules_appliedjobs_appliedjobs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./appliedjobs/appliedjobs.module */ 65375)).then((m) => m.AppliedjobsModule),
            },
            {
                path: "interviewing",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_all-modules_interviewing_interviewing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./interviewing/interviewing.module */ 88528)).then((m) => m.InterviewingModule),
            },
            {
                path: "offeredjobs",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_all-modules_offeredjobs_offeredjobs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./offeredjobs/offeredjobs.module */ 51774)).then((m) => m.OfferedjobsModule),
            },
            {
                path: "visitedjobs",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_all-modules_visitedjobs_visitedjobs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./visitedjobs/visitedjobs.module */ 61177)).then((m) => m.VisitedjobsModule),
            },
            {
                path: "archivedjobs",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_all-modules_archivedjobs_archivedjobs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./archivedjobs/archivedjobs.module */ 81801)).then((m) => m.ArchivedjobsModule),
            },
        ],
    },
];
let AllModulesRoutingModule = class AllModulesRoutingModule {
};
AllModulesRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AllModulesRoutingModule);



/***/ }),

/***/ 55164:
/*!******************************************************!*\
  !*** ./src/app/all-modules/all-modules.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllModulesComponent": () => (/* binding */ AllModulesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _all_modules_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-modules.component.html?ngResource */ 16335);
/* harmony import */ var _all_modules_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./all-modules.component.css?ngResource */ 82006);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let AllModulesComponent = class AllModulesComponent {
    constructor() { }
    ngOnInit() {
    }
};
AllModulesComponent.ctorParameters = () => [];
AllModulesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-all-modules',
        template: _all_modules_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_all_modules_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AllModulesComponent);



/***/ }),

/***/ 48760:
/*!***************************************************!*\
  !*** ./src/app/all-modules/all-modules.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllModulesModule": () => (/* binding */ AllModulesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _all_modules_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-modules-routing.module */ 65372);
/* harmony import */ var _all_modules_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./all-modules.component */ 55164);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.component */ 93482);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sidebar/sidebar.component */ 6804);
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-in-memory-web-api */ 31969);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 59403);
/* harmony import */ var _header_header_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../header/header.service */ 77354);
/* harmony import */ var _all_modules_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./all-modules.service */ 78376);
/* harmony import */ var src_assets_all_modules_data_all_modules_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/assets/all-modules-data/all-modules-data */ 56345);









// Api Interaction 

// Perfect Scrollbar



// Api All Modules Database

const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {};
let AllModulesModule = class AllModulesModule {
};
AllModulesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
        declarations: [
            _all_modules_component__WEBPACK_IMPORTED_MODULE_1__.AllModulesComponent,
            _header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent,
            _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.SidebarComponent,
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule,
            angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_4__.InMemoryWebApiModule.forRoot(src_assets_all_modules_data_all_modules_data__WEBPACK_IMPORTED_MODULE_8__.AllModulesData),
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__.PerfectScrollbarModule,
            _all_modules_routing_module__WEBPACK_IMPORTED_MODULE_0__.AllModulesRoutingModule,
        ],
        providers: [
            _all_modules_service__WEBPACK_IMPORTED_MODULE_7__.AllModulesService,
            {
                provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__.PERFECT_SCROLLBAR_CONFIG,
                useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
            },
            _header_header_service__WEBPACK_IMPORTED_MODULE_6__.HeaderService
        ]
    })
], AllModulesModule);



/***/ }),

/***/ 78376:
/*!****************************************************!*\
  !*** ./src/app/all-modules/all-modules.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllModulesService": () => (/* binding */ AllModulesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 66587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 86942);





let AllModulesService = class AllModulesService {
    constructor(http) {
        this.http = http;
        // Chats
        this.groups = {
            active: "",
            total: ["general", "video responsive survey", "500rs", "warehouse"],
        };
        this.members = {
            active: "Mike Litorus",
            total: [
                { name: "John Doe", count: 3 },
                { name: "Richard Miles", count: 0 },
                { name: "John Smith", count: 7 },
                { name: "Mike Litorus", count: 9 },
            ],
        };
        // Headers Setup
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders()
            .set("Content-Type", "application/json")
            .set("Accept", "application/json");
        this.httpOptions = {
            headers: this.headers,
        };
    }
    // Handling Errors
    handleError(error) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(error);
    }
    // Get Method Api
    get(type) {
        this.apiurl = `api/${type}`;
        return this.http
            .get(this.apiurl)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
    }
    // Post Method Api
    add(user, type) {
        this.apiurl = `api/${type}`;
        user.id = null;
        return this.http
            .post(this.apiurl, user, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
    }
    // Update Method Api
    update(user, type) {
        this.apiurl = `api/${type}`;
        const url = `${this.apiurl}/${user.id}`;
        return this.http.put(url, user, this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(() => user), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
    }
    // Delete Method Api
    delete(id, type) {
        this.apiurl = `api/${type}`;
        const url = `${this.apiurl}/${id}`;
        return this.http
            .delete(url, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
    }
};
AllModulesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
AllModulesService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: "root",
    })
], AllModulesService);



/***/ }),

/***/ 93482:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.component.html?ngResource */ 46727);
/* harmony import */ var _header_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.css?ngResource */ 3263);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ 70900);
/* harmony import */ var _sharing_static__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sharing/static */ 75348);
/* harmony import */ var _header_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header.service */ 77354);








let HeaderComponent = class HeaderComponent {
    constructor(headerService, router, _appService) {
        this.headerService = headerService;
        this.router = router;
        this._appService = _appService;
        this.jsonData = {
            notification: [],
            message: [],
        };
        this.static_constants = _sharing_static__WEBPACK_IMPORTED_MODULE_3__.static_constants;
    }
    ngOnInit() {
        // this.getDatas("notification");
        // this.getDatas("message");
        this.getUserData();
        this.notifications = [
            {
                message: "Patient appointment booking",
                author: "John Doe",
                function: "added new task",
                time: "4 mins ago",
            },
            {
                message: "Patient appointment booking",
                author: "John Doe",
                function: "added new task",
                time: "1 hour ago",
            },
            {
                message: "Patient appointment booking",
                author: "John Doe",
                function: "added new task",
                time: "4 mins ago",
            },
            {
                message: "Patient appointment booking",
                author: "John Doe",
                function: "added new task",
                time: "1 hour ago",
            },
            {
                message: "Patient appointment booking",
                author: "John Doe",
                function: "added new task",
                time: "4 mins ago",
            },
            {
                message: "Patient appointment booking",
                author: "John Doe",
                function: "added new task",
                time: "1 hour ago",
            },
        ];
        this.messagesData = [
            {
                message: "Lorem ipsum dolor sit amet, consectetur adipiscing",
                author: "Mike Litorus",
                time: "4 mins ago",
            },
            {
                message: "Lorem ipsum dolor sit amet, consectetur adipiscing",
                author: "Mike Litorus",
                time: "1 hour ago",
            },
            {
                message: "Lorem ipsum dolor sit amet, consectetur adipiscing",
                author: "Mike Litorus",
                time: "4 mins ago",
            },
            {
                message: "Lorem ipsum dolor sit amet, consectetur adipiscing",
                author: "Mike Litorus",
                time: "1 hour ago",
            },
            {
                message: "Lorem ipsum dolor sit amet, consectetur adipiscing",
                author: "Mike Litorus",
                time: "4 mins ago",
            },
            {
                message: "Lorem ipsum dolor sit amet, consectetur adipiscing",
                author: "Mike Litorus",
                time: "1 hour ago",
            },
        ];
    }
    getUserData() {
        this.userData = this._appService.getAdminDetails();
    }
    getDatas(section) {
        this.headerService.getDataFromJson(section).subscribe((data) => {
            this.jsonData[section] = data;
        });
    }
    clearData(section) {
        this.jsonData[section] = [];
    }
    onSubmit() {
        this.router.navigate(["/pages/search"]);
    }
    Logout() {
        localStorage.removeItem('_A');
        localStorage.removeItem('_T');
        this.router.navigate(["/login"]);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _header_service__WEBPACK_IMPORTED_MODULE_4__.HeaderService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_2__.AppService }
];
HeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-header",
        template: _header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_header_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HeaderComponent);



/***/ }),

/***/ 77354:
/*!******************************************!*\
  !*** ./src/app/header/header.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderService": () => (/* binding */ HeaderService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 28784);



let HeaderService = class HeaderService {
    constructor(http) {
        this.http = http;
    }
    getDataFromJson(section) {
        return this.http.get(`assets/json/${section}.json`);
    }
};
HeaderService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
HeaderService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], HeaderService);



/***/ }),

/***/ 6804:
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _sidebar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar.component.html?ngResource */ 28945);
/* harmony import */ var _sidebar_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.component.css?ngResource */ 57938);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _all_modules_all_modules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../all-modules/all-modules.service */ 78376);






let SidebarComponent = class SidebarComponent {
    constructor(router, allModulesService) {
        this.router = router;
        this.allModulesService = allModulesService;
        this.urlComplete = {
            mainUrl: "",
            subUrl: "",
            childUrl: "",
        };
        this.sidebarMenus = {
            default: true,
            chat: false,
            settings: false,
        };
        this.members = {};
        this.groups = {};
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd) {
                $(".main-wrapper").removeClass('slide-nav');
                $(".sidebar-overlay").removeClass('opened');
                const url = event.url.split("/");
                this.urlComplete.mainUrl = url[2];
                this.urlComplete.subUrl = url[3];
                this.urlComplete.childUrl = url[4];
                if (url[2] === "") {
                    this.urlComplete.mainUrl = "dashboard";
                    this.urlComplete.subUrl = "admin";
                }
                if (url[3] === "chat" || url[3] === "calls") {
                    this.sidebarMenus.chat = true;
                    this.sidebarMenus.default = false;
                }
                else {
                    this.sidebarMenus.chat = false;
                    this.sidebarMenus.default = true;
                }
            }
        });
        this.groups = Object.assign({}, this.allModulesService.groups);
        this.members = Object.assign({}, this.allModulesService.members);
    }
    ngOnInit() {
        // Slide up and down of menus
        $(document).on("click", "#sidebar-menu a", function (e) {
            e.stopImmediatePropagation();
            if ($(this).parent().hasClass("submenu")) {
                e.preventDefault();
            }
            if (!$(this).hasClass("subdrop")) {
                $("ul", $(this).parents("ul:first")).slideUp(350);
                $("a", $(this).parents("ul:first")).removeClass("subdrop");
                $(this).next("ul").slideDown(350);
                $(this).addClass("subdrop");
            }
            else if ($(this).hasClass("subdrop")) {
                $(this).removeClass("subdrop");
                $(this).next("ul").slideUp(350);
            }
        });
    }
    setActive(member) {
        this.allModulesService.members.active = member;
    }
};
SidebarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _all_modules_all_modules_service__WEBPACK_IMPORTED_MODULE_2__.AllModulesService }
];
SidebarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: "app-sidebar",
        template: _sidebar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_sidebar_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SidebarComponent);



/***/ }),

/***/ 56345:
/*!*********************************************************!*\
  !*** ./src/assets/all-modules-data/all-modules-data.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllModulesData": () => (/* binding */ AllModulesData)
/* harmony export */ });
class AllModulesData {
    createDb() {
        // Apps Module Contacts Database
        let contacts = [
            {
                name: "John Doe",
                role: "Web Developer",
                type: "company",
                number: "9834553448",
                email: "johndoe@stanley.com",
                id: 121,
            },
            {
                name: "Richard Miles",
                role: "React Developer",
                type: "client",
                number: "9834573448",
                email: "richardmiles@stanley.com",
                id: 122,
            },
            {
                name: "John Smith",
                role: "Angular Developer",
                type: "staff",
                number: "9834593448",
                email: "johnsmith@stanley.com",
                id: 124,
            },
            {
                name: "Mike Litorus",
                role: "Web Developer",
                type: "company",
                number: "9834053448",
                email: "mikelitorus@stanley.com",
                id: 125,
            },
            {
                name: "Wilmer Deluna",
                role: "Front End Developer",
                type: "client",
                number: "9835553448",
                email: "wilmerdeluna@stanley.com",
                id: 126,
            },
            {
                name: "Jeffrey Warden",
                role: "Back End Developer",
                type: "company",
                number: "6834553448",
                email: "jefferywarden@stanley.com",
                id: 127,
            },
            {
                name: "Loren Gatlin",
                role: "Web Developer",
                type: "staff",
                number: "9834552348",
                email: "lorengatlin@stanley.com",
                id: 128,
            },
            {
                name: "Lesley Grauer",
                role: "Android Developer",
                type: "company",
                number: "9834233448",
                email: "lesleygrauer@stanley.com",
                id: 129,
            },
        ];
        // Client Database
        let clients = [
            {
                name: "Barry Cuda",
                role: "CEO",
                company: "Global Technologies",
                image: "avatar-19",
                clientId: "CLT-0008",
                email: "barrycuda@example.com",
                phone: "9876543210",
                status: "Active",
                id: 1,
            },
            {
                name: "Tressa Wexler",
                role: "Manager",
                company: "Delta Infotech",
                image: "avatar-29",
                clientId: "CLT-0003",
                email: "tressawexler@example.com",
                phone: "9876543211",
                status: "Inactive",
                id: 2,
            },
            {
                name: "Ruby Bartlett ",
                role: "CEO",
                company: "Cream Inc",
                image: "avatar-07",
                clientId: "CLT-0002",
                email: "rubybartlett@example.com",
                phone: "9876543212",
                status: "Inactive",
                id: 3,
            },
            {
                name: "misty Tison",
                role: "CEO",
                company: "Wellware Company",
                image: "avatar-06",
                clientId: "CLT-0001",
                email: "tisonmisty@example.com",
                phone: "9876543213",
                status: "Inactive",
                id: 4,
            },
            {
                name: "Daniel Deacon",
                role: "CEO",
                company: "Mustang Technologies",
                image: "avatar-14",
                clientId: "CLT-0006",
                email: "danieldeacon@example.com",
                phone: "9876543214",
                status: "Active",
                id: 5,
            },
            {
                name: "Walter  Weaver",
                role: "CEO",
                company: "International Software",
                image: "avatar-18",
                clientId: "CLT-0007",
                email: "walterweaver@example.com",
                phone: "9876543215",
                status: "Active",
                id: 6,
            },
            {
                name: "Amanda Warren",
                role: "CEO",
                company: "Mercury Software Inc",
                image: "avatar-28",
                clientId: "CLT-0005",
                email: "amandawarren@example.com",
                phone: "9876543216",
                status: "Active",
                id: 7,
            },
            {
                name: "Bretty Carlson",
                role: "CEO",
                company: "Carlson Technologies",
                image: "avatar-13",
                clientId: "CLT-0004",
                email: "bettycarlson@example.com",
                phone: "9876543217",
                status: "Inactive",
                id: 8,
            },
            {
                name: "Barry Cuda",
                role: "CEO",
                company: "Global Technologies",
                image: "avatar-19",
                clientId: "CLT-0008",
                email: "barrycuda@example.com",
                phone: "9876543210",
                status: "Active",
                id: 9,
            },
            {
                name: "Walter  Weaver",
                role: "CEO",
                company: "International Software",
                image: "avatar-18",
                clientId: "CLT-0007",
                email: "walterweaver@example.com",
                phone: "9876543215",
                status: "Active",
                id: 10,
            },
        ];
        let projects = [
            {
                name: "Office Management",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it...",
                endDate: "17-04-2019",
                startDate: "17-04-2019",
                priority: "High",
                projectleader: "Aravind",
                teamMember: "Prakash",
                projectId: "PRO-001",
                id: 1,
            },
            {
                name: "Hospital Administration",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it...",
                endDate: "17-04-2019",
                startDate: "17-04-2019",
                priority: "High",
                projectleader: "Ashok",
                teamMember: "Aravind",
                projectId: "PRO-001",
                id: 2,
            },
            {
                name: "Project Management",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it...",
                endDate: "17-08-2019",
                startDate: "17-07-2019",
                priority: "High",
                projectleader: "vijay",
                teamMember: "prakash",
                projectId: "PRO-001",
                id: 3,
            },
            {
                name: "Video Calling App",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it...",
                endDate: "17-04-2019",
                startDate: "17-03-2019",
                priority: "High",
                projectleader: "Ashok",
                teamMember: "Aravind",
                projectId: "PRO-001",
                id: 4,
            },
            {
                name: "Project Management",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it...",
                endDate: "17-08-2019",
                startDate: "17-07-2019",
                priority: "High",
                projectleader: "vijay",
                teamMember: "prakash",
                projectId: "PRO-001",
                id: 5,
            },
            {
                name: "Office Management",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it...",
                endDate: "17-04-2019",
                startDate: "17-04-2019",
                priority: "High",
                projectleader: "Aravind",
                teamMember: "Prakash",
                projectId: "PRO-001",
                id: 6,
            },
        ];
        let leaders = [
            {
                name: "Wilmer deluna",
                id: 1,
            },
            {
                name: "John Doe",
                id: 2,
            },
            {
                name: "Wilmer deluna",
                id: 2,
            },
            {
                name: "Richard Miles",
                id: 2,
            },
            {
                name: "Mike Litorus",
                id: 2,
            },
        ];
        let employeepage = [
            {
                firstname: "John Doe",
                designation: "Web Developer",
                id: 1,
            },
            {
                firstname: "Richard Miles",
                designation: "Web Developer",
                id: 2,
            },
            {
                firstname: "John Smith",
                designation: "Web Developer",
                id: 3,
            },
            {
                firstname: "Mike Litorus",
                designation: "Web Developer",
                id: 4,
            },
            {
                firstname: "Wilmer Deluna",
                designation: "Team Leader",
                id: 5,
            },
            {
                firstname: "Jeffrey Warden",
                designation: "Web Developer",
                id: 6,
            },
            {
                firstname: "Bernardo Galaviz",
                designation: "Web Developer",
                id: 7,
            },
            {
                firstname: "Lesley Grauer",
                designation: "Team Leader",
                id: 8,
            },
            {
                firstname: "Jeffery Lalor",
                designation: "Team Leader",
                id: 9,
            },
            {
                firstname: "Loren Gatlin",
                designation: "Android  Developer",
                id: 10,
            },
            {
                firstname: "Tarah Shropshire",
                designation: "Android  Developer",
                id: 11,
            },
            {
                firstname: "Catherine Manseau",
                designation: "Web  Developer",
                id: 12,
            },
        ];
        let employeelist = [
            {
                firstname: "Catherine Manseau",
                lastname: "Manseau",
                username: "Manseau",
                password: "123445",
                confirmpassword: "123456",
                department: "software",
                designation: "Web  Developer",
                phone: "9842354254",
                email: "catherine@example.com",
                mobile: "9876543210",
                joindate: "18-04-2013",
                role: "Web Developer",
                employeeId: "FT-0001",
                company: "FT-0001",
                id: 1,
            },
            {
                firstname: "Catherine Manseau",
                lastname: "Manseau",
                username: "Manseau",
                password: "123445",
                confirmpassword: "123456",
                department: "software",
                designation: "Front end Developer",
                phone: "9842354254",
                email: "catherine@example.com",
                mobile: "9876543210",
                joindate: "18-04-2013",
                role: "Web Developer",
                employeeId: "FT-0001",
                company: "FT-0001",
                id: 2,
            },
            {
                firstname: "Catherine Manseau",
                lastname: "Manseau",
                username: "Manseau",
                password: "123445",
                confirmpassword: "123456",
                department: "software",
                designation: "UI/Ux Designer",
                phone: "9842354254",
                email: "catherine@example.com",
                mobile: "9876543210",
                joindate: "18-05-2013",
                role: "Web Developer",
                employeeId: "FT-0001",
                company: "FT-0001",
                id: 3,
            },
            {
                firstname: "Catherine Manseau",
                lastname: "Manseau",
                username: "Manseau",
                password: "123445",
                confirmpassword: "123456",
                department: "software",
                designation: "Web  Developer",
                phone: "9842354254",
                email: "catherine@example.com",
                mobile: "9876543210",
                joindate: "18-04-2013",
                role: "Web Developer",
                employeeId: "FT-0001",
                company: "FT-0001",
                id: 4,
            },
            {
                firstname: "Catherine Manseau",
                lastname: "Manseau",
                username: "Manseau",
                password: "123445",
                confirmpassword: "123456",
                department: "software",
                designation: "Web  Developer",
                phone: "9842354254",
                email: "catherine@example.com",
                mobile: "9876543210",
                joindate: "18-04-2013",
                role: "Web Developer",
                employeeId: "FT-0001",
                company: "FT-0001",
                id: 5,
            },
            {
                firstname: "Catherine Manseau",
                lastname: "Manseau",
                username: "Manseau",
                password: "123445",
                confirmpassword: "123456",
                department: "software",
                designation: "Web  Developer",
                phone: "9842354254",
                email: "catherine@example.com",
                mobile: "9876543210",
                joindate: "18-04-2013",
                role: "Web Developer",
                employeeId: "FT-0001",
                company: "FT-0001",
                id: 6,
            },
            {
                firstname: "Catherine Manseau",
                lastname: "Manseau",
                username: "Manseau",
                password: "123445",
                confirmpassword: "123456",
                department: "software",
                designation: "Web  Developer",
                phone: "9842354254",
                email: "catherine@example.com",
                mobile: "9876543210",
                joindate: "18-04-2013",
                role: "Web Developer",
                employeeId: "FT-0001",
                company: "FT-0001",
                id: 7,
            },
            {
                firstname: "Catherine Manseau",
                lastname: "Manseau",
                username: "Manseau",
                password: "123445",
                confirmpassword: "123456",
                department: "software",
                designation: "Web  Developer",
                phone: "9842354254",
                email: "catherine@example.com",
                mobile: "9876543210",
                joindate: "18-04-2013",
                role: "Web Developer",
                employeeId: "FT-0001",
                company: "FT-0001",
                id: 8,
            },
            {
                firstname: "Catherine Manseau",
                lastname: "Manseau",
                username: "Manseau",
                password: "123445",
                confirmpassword: "123456",
                department: "software",
                designation: "Web  Developer",
                phone: "9842354254",
                email: "catherine@example.com",
                mobile: "9876543210",
                joindate: "18-04-2013",
                role: "Web Developer",
                employeeId: "FT-0001",
                company: "FT-0001",
                id: 9,
            },
            {
                firstname: "Catherine Manseau",
                lastname: "Manseau",
                username: "Manseau",
                password: "123445",
                confirmpassword: "123456",
                department: "software",
                designation: "Web  Developer",
                phone: "9842354254",
                email: "catherine@example.com",
                mobile: "9876543210",
                joindate: "18-04-2013",
                role: "Web Developer",
                employeeId: "FT-0001",
                company: "FT-0001",
                id: 10,
            },
            {
                firstname: "Catherine Manseau",
                lastname: "Manseau",
                username: "Manseau",
                password: "123445",
                confirmpassword: "123456",
                department: "software",
                designation: "Web  Developer",
                phone: "9842354254",
                email: "catherine@example.com",
                mobile: "9876543210",
                joindate: "18-04-2013",
                role: "Web Developer",
                employeeId: "FT-0001",
                company: "FT-0001",
                id: 11,
            },
            {
                firstname: "Catherine Manseau",
                lastname: "Manseau",
                username: "Manseau",
                password: "123445",
                confirmpassword: "123456",
                department: "software",
                designation: "Web  Developer",
                phone: "9842354254",
                email: "catherine@example.com",
                mobile: "9876543210",
                joindate: "18-04-2013",
                role: "Web Developer",
                employeeId: "FT-0001",
                company: "FT-0001",
                id: 12,
            },
            {
                firstname: "Catherine Manseau",
                lastname: "Manseau",
                username: "Manseau",
                password: "123445",
                confirmpassword: "123456",
                department: "software",
                designation: "Web  Developer",
                phone: "9842354254",
                email: "catherine@example.com",
                mobile: "9876543210",
                joindate: "18-04-2013",
                role: "Web Developer",
                employeeId: "FT-0001",
                company: "FT-0001",
                id: 13,
            },
        ];
        let holidays = [
            {
                id: 1,
                title: "New Year",
                holidaydate: "01-01-2020",
                day: "sun day",
            },
            {
                id: 2,
                title: "Diwali",
                holidaydate: "28-02-2020",
                day: "Thursday ",
            },
            {
                id: 3,
                title: "Christmas",
                holidaydate: "28-02-2020",
                day: "Friday",
            },
            {
                id: 4,
                title: "Ramzon",
                holidaydate: "17-02-2020",
                day: "sun day",
            },
            {
                id: 5,
                title: "Bakrid",
                holidaydate: "15-09-2020",
                day: "Saturday",
            },
        ];
        let adminleaves = [
            {
                id: 1,
                employeeName: "John Doe",
                designation: "web developer",
                leaveType: "Casual Leave",
                from: "08-09-2019",
                to: "11-09-2019",
                noofDays: "2 days",
                remainleaves: "12",
                reason: "Going to Hospital",
                status: "New",
            },
            {
                id: 2,
                employeeName: "John Smith",
                designation: "web developer",
                leaveType: "LOP",
                from: "08-09-2019",
                to: "11-09-2019",
                noofDays: "2 days",
                remainleaves: "4",
                reason: "Personnal",
                status: "Approved",
            },
            {
                id: 3,
                employeeName: "Mike Litorus",
                designation: "Android developer",
                leaveType: "Paternity Leave",
                from: "13-02-2019",
                to: "17-02-2019",
                noofDays: "5 days",
                remainleaves: "10",
                reason: "Personnal",
                status: "Declined",
            },
            {
                id: 4,
                employeeName: "Mike Litorus",
                designation: "web developer",
                leaveType: "Paternity Leave",
                from: "13-05-2019",
                to: "17-05-2019",
                noofDays: "5 days",
                remainleaves: "6",
                reason: "Medical leave",
                status: "Declined",
            },
            {
                id: 5,
                employeeName: "Catherine Manseau",
                designation: "web designer",
                leaveType: "Casual Leave",
                from: "13-04-2019",
                to: "17-06-2019",
                noofDays: "5 days",
                remainleaves: "7",
                reason: "Going to Hospital",
                status: "Approved",
            },
            {
                id: 6,
                employeeName: "Mike Litorus",
                designation: "web developer",
                leaveType: "Paternity Leave",
                from: "13-05-2019",
                to: "17-05-2019",
                noofDays: "5 days",
                remainleaves: "6",
                reason: "Medical leave",
                status: "Declined",
            },
            {
                id: 7,
                employeeName: "John Smith",
                designation: "web developer",
                leaveType: "LOP",
                from: "08-09-2019",
                to: "11-09-2019",
                noofDays: "2 days",
                remainleaves: "4",
                reason: "Personnal",
                status: "Approved",
            },
        ];
        let employeeleaves = [
            {
                id: 1,
                employeeName: "John Doe",
                designation: "web developer",
                leaveType: "Casual Leave",
                from: "08-03-2019",
                to: "09-04-2019",
                noofDays: "2 days",
                remainleaves: "12",
                reason: "Going to Hospital",
                status: "New",
            },
            {
                id: 2,
                employeeName: "John Smith",
                designation: "web developer",
                leaveType: "LOP",
                from: "24-02-2019",
                to: "25-02-2019",
                noofDays: "2 days",
                remainleaves: "4",
                reason: "Personnal",
                status: "Approved",
            },
            {
                id: 3,
                employeeName: "Mike Litorus",
                designation: "Android developer",
                leaveType: "Paternity Leave",
                from: "13-02-2019",
                to: "17-02-2019",
                noofDays: "5 days",
                remainleaves: "10",
                reason: "Personnal",
                status: "Declined",
            },
            {
                id: 4,
                employeeName: "Mike Litorus",
                designation: "web developer",
                leaveType: "Paternity Leave",
                from: "13-02-2019",
                to: "17-02-2019",
                noofDays: "5 days",
                remainleaves: "6",
                reason: "Medical leave",
                status: "Declined",
            },
            {
                id: 5,
                employeeName: "Catherine Manseau",
                designation: "web designer",
                leaveType: "Casual Leave",
                from: "13-02-2019",
                to: "17-02-2019",
                noofDays: "5 days",
                remainleaves: "7",
                reason: "Going to Hospital",
                status: "Approved",
            },
            {
                id: 6,
                employeeName: "Mike Litorus",
                designation: "web developer",
                leaveType: "Paternity Leave",
                from: "13-02-2019",
                to: "17-02-2019",
                noofDays: "5 days",
                remainleaves: "6",
                reason: "Medical leave",
                status: "Declined",
            },
            {
                id: 7,
                employeeName: "John Smith",
                designation: "web developer",
                leaveType: "LOP",
                from: "13-02-2019",
                to: "17-02-2019",
                noofDays: "2 days",
                remainleaves: "4",
                reason: "Personnal",
                status: "Approved",
            },
        ];
        let departments = [
            {
                id: 1,
                departmentName: "Web Development",
            },
            {
                id: 2,
                departmentName: "Application Development",
            },
            {
                id: 3,
                departmentName: "IT Management",
            },
            {
                id: 4,
                departmentName: "Accounts Development",
            },
            {
                id: 5,
                departmentName: "Support Management",
            },
            {
                id: 6,
                departmentName: "Marketing",
            },
        ];
        let designation = [
            {
                id: 1,
                designation: "Web Designer",
                departmentName: "Web Development",
            },
            {
                id: 2,
                designation: "Web Developer",
                departmentName: "Web Development",
            },
            {
                id: 3,
                designation: "Android Developer",
                departmentName: "Application Development",
            },
            {
                id: 4,
                designation: "IOS Developer",
                departmentName: "Application Development",
            },
            {
                id: 5,
                designation: "UI Designer",
                departmentName: "Application Development",
            },
            {
                id: 6,
                designation: "IT Technician",
                departmentName: "Application Development",
            },
            {
                id: 7,
                designation: "Product Manager",
                departmentName: "Application Development",
            },
            {
                id: 8,
                designation: "SEO Analyst",
                departmentName: "Application Development",
            },
            {
                id: 9,
                designation: "Front End Designer",
                departmentName: "Web Development",
            },
        ];
        let leads = [
            {
                leadName: "Wilmer Deluna",
                email: "wilmerdeluna@example.com",
                phone: "9876543210",
                project: "Hospital Administration",
                status: "Working",
                created: "10 hours ago",
                id: 1,
            },
            {
                leadName: "Lesley Grauer",
                email: "lesleygrauer@example.com",
                phone: "9876543210",
                project: "Video Calling App",
                status: "Working",
                created: "5 Mar 2019",
                id: 2,
            },
            {
                leadName: "Jeffery Lalor",
                email: "jefferylalor@example.com",
                phone: "9876543210",
                project: "Office Management",
                status: "Working",
                created: "27 Feb 2019",
                id: 3,
            },
            {
                leadName: "Lesley Grauer",
                email: "lesleygrauer@example.com",
                phone: "9876543210",
                project: "Video Calling App",
                status: "Working",
                created: "5 Mar 2019",
                id: 4,
            },
            {
                leadName: "Jeffery Lalor",
                email: "jefferylalor@example.com",
                phone: "9876543210",
                project: "Office Management",
                status: "Working",
                created: "27 Feb 2019",
                id: 5,
            },
            {
                leadName: "Wilmer Deluna",
                email: "wilmerdeluna@example.com",
                phone: "9876543210",
                project: "Hospital Administration",
                status: "Working",
                created: "10 hours ago",
                id: 6,
            },
            {
                leadName: "Wilmer Deluna",
                email: "wilmerdeluna@example.com",
                phone: "9876543210",
                project: "Hospital Administration",
                status: "Working",
                created: "10 hours ago",
                id: 7,
            },
            {
                leadName: "Lesley Grauer",
                email: "lesleygrauer@example.com",
                phone: "9876543210",
                project: "Video Calling App",
                status: "Working",
                created: "5 Mar 2019",
                id: 8,
            },
            {
                leadName: "Jeffery Lalor",
                email: "jefferylalor@example.com",
                phone: "9876543210",
                project: "Office Management",
                status: "Working",
                created: "27 Feb 2019",
                id: 9,
            },
        ];
        let tickets = [
            {
                ticketId: "#TKT-001",
                ticketSubject: "Laptop Issue",
                assignedStaff: "John Smith",
                client: "Delta Infotech",
                priority: "Low",
                cc: "ashok",
                assigne: "prakash",
                addfollow: "tested",
                description: "tested",
                createdDate: "05-05-2020",
                lastReply: "06-05-2020",
                status: "Approved",
                id: 1,
            },
            {
                ticketId: "#TKT-002",
                ticketSubject: "Laptop Issue",
                assignedStaff: "Mark Hentry",
                client: "International software Inc",
                priority: "High",
                cc: "ashok",
                assigne: "prakash",
                addfollow: "tested",
                description: "tested",
                createdDate: "05-05-2020",
                lastReply: "06-05-2020",
                status: "Pending",
                id: 2,
            },
            {
                ticketId: "#TKT-003",
                ticketSubject: "Mouse Issue",
                assignedStaff: "Mikel deo",
                client: "International software Inc",
                priority: "High",
                cc: "ashok",
                assigne: "prakash",
                addfollow: "tested",
                description: "tested",
                createdDate: "05-05-2020",
                lastReply: "06-05-2020",
                status: "Pending",
                id: 3,
            },
            {
                ticketId: "#TKT-004",
                ticketSubject: "Monitor Issue",
                assignedStaff: "Richared Deo",
                client: "International software Inc",
                priority: "High",
                cc: "ashok",
                assigne: "prakash",
                addfollow: "tested",
                description: "tested",
                createdDate: "05-05-2020",
                lastReply: "06-05-2020",
                status: "Pending",
                id: 4,
            },
        ];
        let timesheet = [
            {
                id: 1,
                employee: "Bernardo Galaviz",
                designation: "Web developer",
                date: "8 Mar 2019",
                deadline: "",
                project: "Video Calling App",
                assignedhours: "20",
                hrs: "12",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque",
            },
            {
                id: 2,
                employee: " Catherine Manseau",
                designation: "Android developer",
                date: "9 Mar 2019",
                deadline: "",
                totalhrs: "",
                remainHrs: "",
                project: "Video Calling App",
                assignedhours: "20",
                hrs: "12",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque",
            },
            {
                id: 3,
                employee: "Jeffry lalor Galaviz",
                designation: "Android developer",
                date: "10 Mar 2019",
                deadline: "",
                totalhrs: "",
                project: "Video Calling App",
                assignedhours: "20",
                hrs: "12",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque",
            },
            {
                id: 4,
                employee: "Jeffry Warden",
                designation: "Web developer",
                date: "11 Mar 2019",
                deadline: "",
                totalhrs: "",
                remainHrs: "",
                project: "Video Calling App",
                assignedhours: "20",
                hrs: "12",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque",
            },
            {
                id: 5,
                employee: "John doe Galaviz",
                designation: "Web developer",
                date: "13 Mar 2019",
                deadline: "",
                totalhrs: "",
                remainHrs: "",
                project: "Video Calling App",
                assignedhours: "20",
                hrs: "12",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque",
            },
        ];
        let overtime = [
            {
                id: 1,
                name: "Bernardo Galaviz",
                otDate: "08-03-2019",
                otHrs: "04",
                otType: "Normal day OT 1.5x",
                status: "New",
                approvedBy: "Richard Miles",
                description: "Lorem ipsum dollar",
            },
            {
                id: 2,
                name: "John Deo",
                otDate: "25-04-2019",
                otHrs: "07",
                otType: "Normal day OT 1.5x",
                status: "New",
                approvedBy: "Richard Miles",
                description: "Lorem ipsum dollar",
            },
            {
                id: 3,
                name: "Russia david",
                otDate: "12-09-2019",
                otHrs: "09",
                otType: "Normal day OT 1.5x",
                status: "New",
                approvedBy: "Richard Miles",
                description: "Lorem ipsum dollar",
            },
            {
                id: 4,
                name: "Mark hentry",
                otDate: "15-10-2019",
                otHrs: "02",
                otType: "Normal day OT 1.5x",
                status: "New",
                approvedBy: "Richard Miles",
                description: "Lorem ipsum dollar",
            },
            {
                id: 5,
                name: "Ruchared hentry",
                otDate: "23-04-2019",
                otHrs: "04",
                otType: "Normal day OT 1.5x",
                status: "New",
                approvedBy: "Richard Miles",
                description: "Lorem ipsum dollar",
            },
            {
                id: 6,
                name: "Mark rio",
                otDate: "11-07-2019",
                otHrs: "05",
                otType: "Normal day OT 1.5x",
                status: "New",
                approvedBy: "Richard Miles",
                description: "Lorem ipsum dollar",
            },
            {
                id: 7,
                name: "John Galaviz",
                otDate: "25-08-2019",
                otHrs: "08",
                otType: "Normal day OT 1.5x",
                status: "New",
                approvedBy: "Richard Miles",
                description: "Lorem ipsum dollar",
            },
            {
                id: 8,
                name: "Loren Gatlin",
                otDate: "05-01-2019",
                otHrs: "5",
                otType: "Normal day OT 1.5x",
                status: "New",
                approvedBy: "Richard Miles",
                description: "Lorem ipsum dollar",
            },
            {
                id: 9,
                name: "Tarah Shropshire",
                otDate: "05-01-2019",
                otHrs: "5",
                otType: "Normal day OT 1.5x",
                status: "New",
                approvedBy: "Richard Miles",
                description: "Lorem ipsum dollar",
            },
            {
                id: 10,
                name: "John Doe",
                otDate: "13-01-2019",
                otHrs: "5",
                otType: "Normal day OT 1.5x",
                status: "New",
                approvedBy: "Richard Miles",
                description: "Lorem ipsum dollar",
            },
            {
                id: 11,
                name: "John Smith",
                otDate: "20-01-2019",
                otHrs: "5",
                otType: "Normal day OT 1.5x",
                status: "New",
                approvedBy: "Richard Miles",
                description: "Lorem ipsum dollar",
            },
            {
                id: 12,
                name: "John Smith",
                otDate: "20-01-2019",
                otHrs: "5",
                otType: "Normal day OT 1.5x",
                status: "New",
                approvedBy: "Richard Miles",
                description: "Lorem ipsum dollar",
            },
        ];
        let expenses = [
            {
                item: "Dell Laptop",
                purchaseFrom: "Amazon",
                purchaseDate: "05-01-2019",
                purchasedBy: "Loren Gatlin",
                amount: "$1215",
                paidby: "Cash",
                id: 1,
            },
            {
                item: "Mac System",
                purchaseFrom: "Amazon",
                purchaseDate: "05-01-2019",
                purchasedBy: "Tarah Shropshire",
                amount: "$1215",
                paidby: "Cheque",
                id: 2,
            },
            {
                item: "Apple",
                purchaseFrom: "Amazon",
                purchaseDate: "05-01-2019",
                purchasedBy: "John Doe",
                amount: "$1215",
                paidby: "Cheque",
                id: 3,
            },
            {
                item: "HCL",
                purchaseFrom: "Amazon",
                purchaseDate: "01-01-2019",
                purchasedBy: "John Doe",
                amount: "$1215",
                paidby: "Cheque",
                id: 4,
            },
            {
                item: "HCL",
                purchaseFrom: "Flipkart",
                purchaseDate: "01-01-2019",
                purchasedBy: "Loren Gatlin",
                amount: "$1215",
                paidby: "Cheque",
                id: 5,
            },
            {
                item: "Sony",
                purchaseFrom: "Flipkart",
                purchaseDate: "20-01-2019",
                purchasedBy: "Loren Mac",
                amount: "$1215",
                paidby: "Cheque",
                id: 6,
            },
        ];
        let providentFund = [
            {
                employeeName: "Loren Mac",
                providentFundType: "Percentage of Basic Salary",
                employeeShare: "2%",
                organizationShare: "2%",
                id: 1,
            },
            {
                employeeName: "John Doe",
                providentFundType: "Percentage of Basic Salary",
                employeeShare: "4%",
                organizationShare: "5%",
                id: 2,
            },
            {
                employeeName: "Tarah Shropshire",
                providentFundType: "Percentage of Basic Salary",
                employeeShare: "9%",
                organizationShare: "5%",
                id: 3,
            },
            {
                employeeName: "John Doe",
                providentFundType: "Percentage of Basic Salary",
                employeeShare: "9%",
                organizationShare: "2%",
                id: 4,
            },
            {
                employeeName: "John michelin",
                providentFundType: "Percentage of Basic Salary",
                employeeShare: "4%",
                organizationShare: "2%",
                id: 5,
            },
            {
                employeeName: "Kennedy michelin",
                providentFundType: "Percentage of Basic Salary",
                employeeShare: "2%",
                organizationShare: "2%",
                id: 6,
            },
        ];
        let taxes = [
            {
                taxName: "VAT",
                taxPercentage: "14%",
                id: 1,
            },
            {
                taxName: "GST",
                taxPercentage: "30%",
                id: 2,
            },
            {
                taxName: "GST",
                taxPercentage: "30%",
                id: 3,
            },
            {
                taxName: "VAT",
                taxPercentage: "10%",
                id: 4,
            },
            {
                taxName: "GST",
                taxPercentage: "25%",
                id: 5,
            },
            {
                taxName: "VAT",
                taxPercentage: "20%",
                id: 6,
            },
        ];
        let policies = [
            {
                policyName: "Leave Policy",
                department: "All Departments",
                description: "Lorem ipsum dollar",
                createdDate: "19 Feb 2019",
                id: 1,
            },
            {
                policyName: "Permission Policy",
                department: "Marketing",
                description: "Lorem ipsum dollar",
                createdDate: "18 Feb 2019",
                id: 2,
            },
            {
                policyName: "Leave Policy",
                department: "All Departments",
                description: "Lorem ipsum dollar",
                createdDate: "19 Feb 2019",
                id: 3,
            },
            {
                policyName: "Permission Policy",
                department: "Marketing",
                description: "Lorem ipsum dollar",
                createdDate: "25 Feb 2019",
                id: 4,
            },
            {
                policyName: "Leave Policy",
                department: "All Departments",
                description: "Lorem ipsum dollar",
                createdDate: "18 Feb 2019",
                id: 5,
            },
            {
                policyName: "Permission Policy",
                department: "Marketing",
                description: "Lorem ipsum dollar",
                createdDate: "22 Feb 2019",
                id: 6,
            },
        ];
        let expenseReport = [
            {
                item: "Dell Laptop",
                purchaseFrom: "Amazon",
                purchaseDate: "12-01-2019",
                purchasedBy: "Loren Gatlin",
                amount: "$ 1210",
                paidBy: "Cash",
                id: 1,
            },
            {
                item: "Mac System",
                purchaseFrom: "Amazon",
                purchaseDate: "10-01-2019",
                purchasedBy: "Tarah Shropshire",
                amount: "$ 1215",
                paidBy: "Cheque",
                id: 2,
            },
            {
                item: "Dell Laptop",
                purchaseFrom: "Snap",
                purchaseDate: "24-01-2019",
                purchasedBy: "kenneth",
                amount: "$ 1205",
                paidBy: "Cash",
                id: 3,
            },
            {
                item: "Adobe System",
                purchaseFrom: "Orion",
                purchaseDate: "11-01-2019",
                purchasedBy: "John Doe",
                amount: "$ 134",
                paidBy: "Cheque",
                id: 4,
            },
            {
                item: "Adobe System",
                purchaseFrom: "Amazon",
                purchaseDate: "08-01-2019",
                purchasedBy: "John Michellin",
                amount: "$ 12",
                paidBy: "Cheque",
                id: 5,
            },
            {
                item: "Adobe System",
                purchaseFrom: "Flip",
                purchaseDate: "10-01-2019",
                purchasedBy: "Arnold",
                amount: "$ 121",
                paidBy: "Cheque",
                id: 6,
            },
        ];
        let appliedCandidates = [
            {
                name: "	John Doe",
                email: "johndoe@example.com",
                phone: "9876543210",
                applyDate: "9 Feb 2019",
                id: 1,
            },
            {
                name: "Arnold",
                email: "arnold@example.com",
                phone: "9872543210",
                applyDate: "25 Mar 2019",
                id: 2,
            },
            {
                name: "kenneth",
                email: "kenneth@example.com",
                phone: "9876543230",
                applyDate: "13 Feb 2019",
                id: 3,
            },
            {
                name: "Sam",
                email: "sam@example.com",
                phone: "9876543297",
                applyDate: "25 Jan 2019",
                id: 4,
            },
            {
                name: "Michellin",
                email: "michellin@example.com",
                phone: "9876524210",
                applyDate: "26 Feb 2019",
                id: 5,
            },
            {
                name: "john Mckensey",
                email: "john@example.com",
                phone: "9876543410",
                applyDate: "18 Jun 2019",
                id: 6,
            },
        ];
        let knowledgeBase = [
            {
                title: "Installation & Activation",
                list1: "Sed ut perspiciatis unde omnis?",
                list2: "Sed ut perspiciatis unde omnis?",
                list3: "Sed ut perspiciatis unde omnis?",
                list4: "Sed ut perspiciatis unde omnis?",
                list5: "Sed ut perspiciatis unde omnis?",
                id: 1,
            },
            {
                title: "Premium Members Features",
                list1: "Sed ut perspiciatis unde omnis?",
                list2: "Sed ut perspiciatis unde omnis?",
                list3: "Sed ut perspiciatis unde omnis?",
                list4: "Sed ut perspiciatis unde omnis?",
                list5: "Sed ut perspiciatis unde omnis?",
                id: 2,
            },
            {
                title: "API Usage & Guide lines",
                list1: "Sed ut perspiciatis unde omnis?",
                list2: "Sed ut perspiciatis unde omnis?",
                list3: "Sed ut perspiciatis unde omnis?",
                list4: "Sed ut perspiciatis unde omnis?",
                list5: "Sed ut perspiciatis unde omnis?",
                id: 3,
            },
            {
                title: "Getting Started",
                list1: "Sed ut perspiciatis unde omnis?",
                list2: "Sed ut perspiciatis unde omnis?",
                list3: "Sed ut perspiciatis unde omnis?",
                list4: "Sed ut perspiciatis unde omnis?",
                list5: "Sed ut perspiciatis unde omnis?",
                id: 4,
            },
            {
                title: "Lorem ipsum dolor",
                list1: "Sed ut perspiciatis unde omnis?",
                list2: "Sed ut perspiciatis unde omnis?",
                list3: "Sed ut perspiciatis unde omnis?",
                list4: "Sed ut perspiciatis unde omnis?",
                list5: "Sed ut perspiciatis unde omnis?",
                id: 5,
            },
            {
                title: "Lorem ipsum dolor",
                list1: "Sed ut perspiciatis unde omnis?",
                list2: "Sed ut perspiciatis unde omnis?",
                list3: "Sed ut perspiciatis unde omnis?",
                list4: "Sed ut perspiciatis unde omnis?",
                list5: "Sed ut perspiciatis unde omnis?",
                id: 6,
            },
            {
                title: "Lorem ipsum dolor",
                list1: "Sed ut perspiciatis unde omnis?",
                list2: "Sed ut perspiciatis unde omnis?",
                list3: "Sed ut perspiciatis unde omnis?",
                list4: "Sed ut perspiciatis unde omnis?",
                list5: "Sed ut perspiciatis unde omnis?",
                id: 7,
            },
            {
                title: "Lorem ipsum dolor",
                list1: "Sed ut perspiciatis unde omnis?",
                list2: "Sed ut perspiciatis unde omnis?",
                list3: "Sed ut perspiciatis unde omnis?",
                list4: "Sed ut perspiciatis unde omnis?",
                list5: "Sed ut perspiciatis unde omnis?",
                id: 8,
            },
            {
                title: "Lorem ipsum dolor",
                list1: "Sed ut perspiciatis unde omnis?",
                list2: "Sed ut perspiciatis unde omnis?",
                list3: "Sed ut perspiciatis unde omnis?",
                list4: "Sed ut perspiciatis unde omnis?",
                list5: "Sed ut perspiciatis unde omnis?",
                id: 9,
            },
        ];
        let assets = [
            {
                assetUser: "Richard Miles",
                assetName: "Dell Laptop",
                assetId: "#AST-0001",
                assetStatus: "Pending",
                purchaseDate: "05-01-2019",
                warrenty: "12 Months",
                warrentyEnd: "05-01-2020",
                Amount: "$1215",
                id: 1,
            },
            {
                assetUser: "John Doe",
                assetName: "Seagate Harddisk",
                assetId: "#AST-0002",
                assetStatus: "Pending",
                purchaseDate: "14-01-2019",
                warrenty: "12 Months",
                warrentyEnd: "14-07-2019",
                Amount: "$300",
                id: 2,
            },
            {
                assetUser: "John Smith",
                assetName: "Canon Portable Printer",
                assetId: "#AST-0003",
                assetStatus: "Pending",
                purchaseDate: "14-01-2019",
                warrenty: "12 Months",
                warrentyEnd: "14-08-2019",
                Amount: "$2500",
                id: 3,
            },
            {
                assetUser: "Mike Litorus",
                assetName: "Dell Laptop",
                assetId: "#AST-0004",
                assetStatus: "Pending",
                purchaseDate: "05-01-2019",
                warrenty: "12 Months",
                warrentyEnd: "05-01-2020",
                Amount: "$1215",
                id: 4,
            },
            {
                assetUser: "Wilmer Deluna",
                assetName: "Seagate Harddisk",
                assetId: "#AST-0005",
                assetStatus: "Pending",
                purchaseDate: "14-01-2019",
                warrenty: "12 Months",
                warrentyEnd: "14-01-2020",
                Amount: "$300",
                id: 5,
            },
            {
                assetUser: "Jeffrey Warden",
                assetName: "Canon Portable Printer",
                assetId: "#AST-0006",
                assetStatus: "Pending",
                purchaseDate: "14-01-2019",
                warrenty: "12 Months",
                warrentyEnd: "14-01-2020",
                Amount: "$2500",
                id: 6,
            },
            {
                assetUser: "Bernardo Galaviz",
                assetName: "Dell Laptop",
                assetId: "#AST-0007",
                assetStatus: "Pending",
                purchaseDate: "05-01-2019",
                warrenty: "12 Months",
                warrentyEnd: "05-02-2020",
                Amount: "$1215",
                id: 7,
            },
            {
                assetUser: "Lesley Grauer",
                assetName: "Seagate Harddisk",
                assetId: "#AST-0008",
                assetStatus: "Pending",
                purchaseDate: "14-01-2019",
                warrenty: "12 Months",
                warrentyEnd: "14-01-2020",
                Amount: "$300",
                id: 8,
            },
            {
                assetUser: "Jeffery Lalor",
                assetName: "Canon Portable Printer",
                assetId: "#AST-0009",
                assetStatus: "Pending",
                purchaseDate: "14-01-2019",
                warrenty: "12 Months",
                warrentyEnd: "14-01-2020",
                Amount: "$2500",
                id: 9,
            },
            {
                assetUser: "Loren Gatlin",
                assetName: "Dell Laptop",
                assetId: "#AST-0010",
                assetStatus: "Pending",
                purchaseDate: "05-01-2019",
                warrenty: "12 Months",
                warrentyEnd: "05-01-2020",
                Amount: "$1215",
                id: 10,
            },
        ];
        let employeeSalary = [
            {
                employee: "Bernardo Galaviz",
                employeeId: "FT-0007",
                email: "bernardogalaviz@example.com",
                joinDate: "14-01-2019",
                role: "Web Developer",
                employeeRole: "Employee",
                status: "pending",
                salary: "76670",
                Basic: "55300",
                tDS: "7500",
                da: "11820",
                hra: "4300",
                pf: "4300",
                conveyance: "5400",
                leave: "4400",
                allowance: "2600",
                proTax: "3050",
                medAllowance: "6500",
                labourWelfare: "3900",
                othersAdd: "100",
                othersDed: "200",
                esi: "200",
                id: 1,
            },
            {
                employee: "Jeffery Lalor",
                employeeId: "FT-0009",
                email: "bernardogalaviz@example.com",
                joinDate: "05-01-2019",
                role: "Team Leader",
                employeeRole: "Employee",
                status: "pending",
                salary: "63670",
                Basic: "45300",
                tDS: "7500",
                da: "10820",
                hra: "5500",
                pf: "5500",
                conveyance: "4800",
                leave: "4400",
                allowance: "3200",
                proTax: "3050",
                medAllowance: "4500",
                labourWelfare: "3900",
                othersAdd: "100",
                othersDed: "200",
                esi: "200",
                id: 2,
            },
            {
                employee: "Jeffrey Warden",
                employeeId: "FT-0006",
                email: "jeffreywarden@example.com",
                joinDate: "02-01-2019",
                role: "Web Designer",
                employeeRole: "Employee",
                status: "pending",
                salary: "63140",
                Basic: "53300",
                tDS: "7500",
                da: "9320",
                hra: "3400",
                pf: "5500",
                conveyance: "3800",
                leave: "4400",
                allowance: "2300",
                proTax: "3020",
                medAllowance: "3500",
                labourWelfare: "1900",
                othersAdd: "100",
                othersDed: "200",
                esi: "200",
                id: 3,
            },
            {
                employee: "John Doe",
                employeeId: "FT-0001",
                email: "johndoe@example.com",
                joinDate: "07-01-2019",
                role: "Android Developer",
                employeeRole: "Employee",
                status: "pending",
                salary: "54840",
                Basic: "43300",
                tDS: "3500",
                da: "4320",
                hra: "3500",
                pf: "5400",
                conveyance: "2800",
                leave: "2500",
                allowance: "3300",
                proTax: "4020",
                medAllowance: "3200",
                labourWelfare: "1800",
                othersAdd: "100",
                othersDed: "200",
                esi: "200",
                id: 4,
            },
            {
                employee: "John Smith",
                employeeId: "FT-0003",
                email: "johnsmith@example.com",
                joinDate: "17-01-2019",
                role: "Frontend Developer",
                employeeRole: "Employee",
                status: "pending",
                salary: "69960",
                Basic: "55300",
                tDS: "3000",
                da: "5060",
                hra: "4000",
                pf: "5400",
                conveyance: "3000",
                leave: "2400",
                allowance: "3400",
                proTax: "4000",
                medAllowance: "2800",
                labourWelfare: "3200",
                othersAdd: "100",
                othersDed: "200",
                esi: "200",
                id: 5,
            },
            {
                employee: "Lesley Grauer",
                employeeId: "FT-0008",
                email: "lesleygrauer@example.com",
                joinDate: "20-01-2019",
                role: "Ios Developer",
                employeeRole: "Employee",
                status: "pending",
                salary: "50000",
                Basic: "39300",
                tDS: "1000",
                da: "5000",
                hra: "5000",
                pf: "5800",
                conveyance: "4000",
                leave: "4000",
                allowance: "5000",
                proTax: "3500",
                medAllowance: "1800",
                labourWelfare: "2800",
                othersAdd: "100",
                othersDed: "200",
                esi: "200",
                id: 6,
            },
            {
                employee: "Loren Gatlin",
                employeeId: "FT-0010",
                email: "lorengatlin@example.com",
                joinDate: "22-01-2019",
                role: "Software Engineer",
                employeeRole: "Employee",
                status: "pending",
                salary: "34900",
                Basic: "18000",
                tDS: "1000",
                da: "5000",
                hra: "6000",
                pf: "5000",
                conveyance: "3500",
                leave: "3000",
                allowance: "4000",
                proTax: "3000",
                medAllowance: "2000",
                labourWelfare: "2400",
                othersAdd: "100",
                othersDed: "200",
                esi: "200",
                id: 7,
            },
            {
                employee: "Mike Litorus",
                employeeId: "FT-0004",
                email: "mikelitorus@example.com",
                joinDate: "23-01-2019",
                role: "Web Developer",
                employeeRole: "Employee",
                status: "pending",
                salary: "28700",
                Basic: "15000",
                tdS: "100",
                da: "5000",
                hra: "4000",
                pf: "3400",
                conveyance: "2500",
                leave: "2500",
                allowance: "3000",
                proTax: "1000",
                medAllowance: "2000",
                labourWelfare: "2200",
                othersAdd: "100",
                othersDed: "200",
                esi: "200",
                id: 8,
            },
            {
                employee: "Richard Miles",
                employeeId: "FT-0002",
                email: "richardmiles@example.com",
                joinDate: "31-01-2019",
                role: "Ui/Ux Developer",
                employeeRole: "Employee",
                status: "pending",
                salary: "20450",
                Basic: "13000",
                tDS: "500",
                da: "3000",
                hra: "3000",
                pf: "3600",
                conveyance: "1500",
                leave: "2000",
                allowance: "3000",
                proTax: "850",
                medAllowance: "1000",
                labourWelfare: "1200",
                othersAdd: "100",
                othersDed: "200",
                esi: "200",
                id: 9,
            },
            {
                employee: "Tarah Shropshire",
                employeeId: "FT-0011",
                email: "tarahshropshire@example.com",
                joinDate: "11-01-2019",
                role: "Software Tester",
                employeeRole: "Employee",
                status: "pending",
                salary: "17250",
                Basic: "14000",
                tDS: "500",
                da: "1000",
                hra: "2000",
                pf: "3600",
                conveyance: "800",
                leave: "2000",
                allowance: "4000",
                proTax: "250",
                medAllowance: "500",
                labourWelfare: "800",
                othersAdd: "100",
                othersDed: "200",
                esi: "200",
                id: 10,
            },
        ];
        let users = [
            {
                name: "	BarryCuda",
                designation: "Android Developer",
                email: "barrycuda@example.com",
                company: "Global Technologies",
                role: "Client",
                id: 1,
            },
            {
                name: "	John Doe ",
                designation: "Web Designer",
                email: "johndoe@example.com",
                company: "Dreamguy's Technologies",
                role: "Employee",
                id: 2,
            },
            {
                name: "Richard Miles",
                designation: "Admin",
                email: "richardmiles@example.com",
                company: "Dreamguy's Technologies",
                role: "Employee",
                id: 3,
            },
            {
                name: "	John Smith",
                designation: "Android Developer",
                email: "johnsmith@example.com",
                company: "Dreamguy's Technologies",
                role: "Employee",
                id: 4,
            },
            {
                name: "	Mike Litorus",
                designation: "IOS Developer",
                email: "mikelitorus@example.com",
                company: "Dreamguy's Technologies",
                role: "Employee",
                id: 5,
            },
            {
                name: "Wilmer Deluna",
                designation: "Team Leader",
                email: "wilmerdeluna@example.com",
                company: "Dreamguy's Technologies",
                role: "Employee",
                id: 6,
            },
            {
                name: "	BarryCuda",
                designation: "Team Leader",
                email: "barrycuda@example.com",
                company: "Global Technologies",
                role: "Client",
                id: 7,
            },
        ];
        let payments = [
            {
                invoiceId: "#INV-0001",
                client: "Global Technologies",
                paymenttype: "Paypal",
                paidDate: "8 Feb 2019",
                paidAmount: "$500",
                id: 1,
            },
            {
                invoiceId: "#INV-0002",
                client: "Delta Infotech",
                paymenttype: "Paypal",
                paidDate: "9 Jan 2019",
                paidAmount: "$420",
                id: 2,
            },
            {
                invoiceId: "#INV-0003",
                client: "Savior Inc",
                paymenttype: "Paypal",
                paidDate: "8 Ma2019",
                paidAmount: "$600",
                id: 3,
            },
            {
                invoiceId: "#INV-0004",
                client: "Nata ltd",
                paymenttype: "Paypal",
                paidDate: "10 Jul 2019",
                paidAmount: "$410",
                id: 4,
            },
            {
                invoiceId: "#INV-0005",
                client: "Paypal",
                paymenttype: "Paypal",
                paidDate: "10 Dec 2019",
                paidAmount: "$250",
                id: 5,
            },
            {
                invoiceId: "#INV-0006",
                client: "Tell Inc",
                paymenttype: "Paypal",
                paidDate: "10 Apr 2019",
                paidAmount: "$300",
                id: 6,
            },
        ];
        let payrollAddition = [
            {
                name: "Leave balance amount",
                category: "Monthly remuneration",
                unitCost: "5",
                id: 1,
            },
            {
                name: "Arrears of salary",
                category: "Additional remuneration",
                unitCost: "8",
                id: 2,
            },
            {
                name: "Gratuity",
                category: "Monthly remuneration",
                unitCost: "10",
                id: 3,
            },
            {
                name: "Arrears of salary",
                category: "Additional remuneration",
                unitCost: "10",
                id: 4,
            },
            {
                name: "Gratuity",
                category: "Monthly remuneration",
                unitCost: "20",
                id: 5,
            },
            {
                name: "Leave balance amount",
                category: "Additional remuneration",
                unitCost: "25",
                id: 6,
            },
        ];
        let payrollOvertime = [
            {
                name: "Normal day OT 1.5x",
                rate: "5",
                id: 1,
            },
            {
                name: "Public holiday OT 3.0x",
                rate: "13",
                id: 2,
            },
            {
                name: "Rest day OT 2.0x",
                rate: "20",
                id: 3,
            },
            {
                name: "Public holiday OT 3.0x",
                rate: "8",
                id: 4,
            },
            {
                name: "Normal day OT 1.5x",
                rate: "10",
                id: 5,
            },
            {
                name: "Public holiday OT 3.0x",
                rate: "10",
                id: 6,
            },
        ];
        let payrollDeduction = [
            {
                name: "Absent amount",
                unitCost: "5",
                id: 1,
            },
            {
                name: "Advance",
                unitCost: "10",
                id: 2,
            },
            {
                name: "Unpaid leave",
                unitCost: "20",
                id: 3,
            },
            {
                name: "Advance",
                unitCost: "8",
                id: 4,
            },
            {
                name: "Absent amount",
                unitCost: "21",
                id: 5,
            },
            {
                name: "Unpaid leave",
                unitCost: "20",
                id: 6,
            },
        ];
        let manageJobs = [
            {
                jobTitle: "Web Developer",
                department: "Development",
                startDate: "03-03-2019",
                expireDate: "11-05-2019",
                id: 1,
            },
            {
                jobTitle: "Web Designer",
                department: "Designing",
                startDate: "05-04-2019",
                expireDate: "21-05-2019",
                id: 2,
            },
            {
                jobTitle: "Android Developer",
                department: "Android",
                startDate: "03-08-2019",
                expireDate: "15-05-2019",
                id: 3,
            },
            {
                jobTitle: "Web Designer",
                department: "Designing",
                startDate: "03-09-2019",
                expireDate: "11-05-2019",
                id: 4,
            },
            {
                jobTitle: "Web Developer",
                department: "Development",
                startDate: "03-10-2019",
                expireDate: "31-05-2019",
                id: 5,
            },
            {
                jobTitle: "Android Developer",
                department: "Android",
                startDate: "03-12-2019",
                expireDate: "31-10-2019",
                id: 6,
            },
        ];
        let leaveType = [
            {
                leaveType: "Casual Leave",
                leaveDays: "12 Days",
                id: 1,
            },
            {
                leaveType: "Medical Leave",
                leaveDays: "12 Days",
                id: 2,
            },
            {
                leaveType: "Loss of Pay",
                leaveDays: "10 Days",
                id: 3,
            },
            {
                leaveType: "Medical Leave",
                leaveDays: "1 Days",
                id: 4,
            },
            {
                leaveType: "Casual Leave",
                leaveDays: "15 Days",
                id: 5,
            },
            {
                leaveType: "Loss of Pay",
                leaveDays: "10 Days",
                id: 6,
            },
        ];
        let roles = [
            {
                roleName: "Administrator",
                id: 1,
            },
            {
                roleName: "CEO",
                id: 2,
            },
            {
                roleName: "Manager",
                id: 3,
            },
            {
                roleName: "Team Leader",
                id: 4,
            },
            {
                roleName: "Accountant",
                id: 5,
            },
            {
                roleName: "Web Developer",
                id: 6,
            },
            {
                roleName: "Web Designer",
                id: 7,
            },
            {
                roleName: "HR",
                id: 8,
            },
            {
                roleName: "UI/UX Developer",
                id: 9,
            },
            {
                roleName: "SEO Analyst",
                id: 10,
            },
        ];
        let goallist = [
            {
                id: 1,
                goalType: "Event Goal",
                subject: "Test Goal",
                targetAchivement: "Lorem ipsum dollar",
                startDate: "07-05-2019",
                endDate: "10-05-2019",
                description: "Lorem ipsum dollar",
                status: "Active",
                progress: "Completed 73%",
            },
            {
                id: 2,
                goalType: "Event Goal",
                subject: "Employee Goal",
                targetAchivement: "Lorem ipsum dollar",
                startDate: "07-05-2019",
                endDate: "10-05-2019",
                description: "Lorem ipsum dollar",
                status: "Inactive",
                progress: "Completed 73%",
            },
            {
                id: 3,
                goalType: "Event Goal",
                subject: "Invoice Goal",
                targetAchivement: "Lorem ipsum dollar",
                startDate: "07-05-2019",
                endDate: "10-05-2019",
                description: "Lorem ipsum dollar",
                status: "Inactive",
                progress: "Completed 43%",
            },
            {
                id: 4,
                goalType: "Event Goal",
                subject: "Project Goal",
                targetAchivement: "Lorem ipsum dollar",
                startDate: "07-05-2019",
                endDate: "10-05-2019",
                description: "Lorem ipsum dollar",
                status: "Active",
                progress: "Completed 53%",
            },
        ];
        let goaltype = [
            {
                id: 1,
                type: "Event goal",
                description: "Event goal	Lorem ipsum dollar",
                status: "active",
            },
            {
                id: 2,
                type: "Project goal",
                description: "Lorem ipsum dollar",
                status: "Inactive",
            },
            {
                id: 3,
                type: "Event goal",
                description: "Lorem ipsum dollar",
                status: "active",
            },
            {
                id: 4,
                type: "Invoice goal",
                description: "Event goal tested",
                status: "active",
            },
            {
                id: 5,
                type: "Project goal",
                description: "Lorem ipsum dollar",
                status: "Inactive",
            },
            {
                id: 6,
                type: "Event goal",
                description: "Event goal	Lorem ipsum dollar",
                status: "active",
            },
        ];
        let trainingtype = [
            {
                id: 1,
                type: "Event goal",
                description: "Event goal	Lorem ipsum dollar",
                status: "active",
            },
            {
                id: 2,
                type: "Project goal",
                description: "Lorem ipsum dollar",
                status: "Inactive",
            },
            {
                id: 3,
                type: "Event goal",
                description: "Lorem ipsum dollar",
                status: "active",
            },
            {
                id: 4,
                type: "Invoice goal",
                description: "Event goal tested",
                status: "active",
            },
            {
                id: 5,
                type: "Project goal",
                description: "Lorem ipsum dollar",
                status: "Inactive",
            },
            {
                id: 6,
                type: "Project goal",
                description: "Lorem ipsum dollar",
                status: "Inactive",
            },
        ];
        let trainers = [
            {
                id: 1,
                name: "John Doe",
                lname: "Doe",
                role: "developer",
                contactNumber: "9876543210",
                mail: "johndoe@example.com",
                description: "Lorem ipsum dollar",
                status: "active",
            },
            {
                id: 2,
                name: "Mike Litorus",
                lname: "Litorus",
                role: "developer",
                contactNumber: "9876543120",
                mail: "mikelitorus@example.com",
                description: "Lorem ipsum dollar",
                status: "active",
            },
            {
                id: 3,
                name: "Wilmer Deluna",
                lname: "Deluna",
                role: "developer",
                contactNumber: "9876543210",
                mail: "wilmerdeluna@example.com",
                description: "Lorem ipsum dollar",
                status: "active",
            },
            {
                id: 4,
                name: "John Smith",
                lname: "Smith",
                role: "developer",
                contactNumber: "9876543210",
                mail: "johnsmith@example.com",
                description: "Lorem ipsum dollar",
                status: "active",
            },
            {
                id: 5,
                name: "Richard Milesh",
                lname: "Milesh",
                role: "developer",
                contactNumber: "9876543210",
                mail: "richardmiles@example.com",
                description: "Lorem ipsum dollar",
                status: "active",
            },
        ];
        let traininglist = [
            {
                id: 1,
                trainingType: "Node Training",
                trainer: "John Doe",
                employee: "",
                timeDuration: "7 May 2019 - 10 May 2019",
                startDate: "07-05-2019",
                endDate: "10-05-2019",
                description: "Lorem ipsum dollar",
                cost: "$450",
                status: "active",
            },
            {
                id: 2,
                trainingType: "Git Training",
                trainer: "John Doe",
                employee: "",
                timeDuration: "7 May 2019 - 10 May 2019",
                startDate: "07-05-2019",
                endDate: "10-05-2019",
                description: "Lorem ipsum dollar",
                cost: "$450",
                status: "active",
            },
            {
                id: 3,
                trainingType: "Angular Training",
                trainer: "John Doe",
                employee: "",
                timeDuration: "7 May 2019 - 10 May 2019",
                startDate: "07-05-2019",
                endDate: "10-05-2019",
                description: "Lorem ipsum dollar",
                cost: "$450",
                status: "active",
            },
            {
                id: 4,
                trainingType: "Swift Training",
                trainer: "John Doe",
                employee: "",
                timeDuration: "7 May 2019 - 10 May 2019",
                startDate: "07-05-2019",
                endDate: "10-05-2019",
                description: "Lorem ipsum dollar",
                cost: "$450",
                status: "active",
            },
        ];
        let promotionmain = [
            {
                id: 1,
                employee: "John Doe",
                department: "Web development",
                designation: "Web Design",
                promotionFrom: "Web developer",
                promotionTo: "Sr.Web developer",
                promotionDate: "28-09-2019",
            },
            {
                id: 2,
                employee: "John Doe",
                department: "Web development",
                designation: "Web Design",
                promotionFrom: "Web developer",
                promotionTo: "Sr.Web developer",
                promotionDate: "28-09-2019",
            },
            {
                id: 3,
                employee: "John Doe",
                department: "Web development",
                designation: "Web Design",
                promotionFrom: "Web developer",
                promotionTo: "Sr.Web developer",
                promotionDate: "28-09-2019",
            },
            {
                id: 4,
                employee: "John Doe",
                department: "Web development",
                designation: "Web design",
                promotionFrom: "Web developer",
                promotionTo: "Sr.Web developer",
                promotionDate: "28-09-2019",
            },
        ];
        let resignationmain = [
            {
                id: 1,
                employee: "John Doe",
                department: "Web development",
                reason: "tested",
                noticedDate: "28-02-2019",
                resignDate: "28-03-2019",
            },
            {
                id: 2,
                employee: "Russia smith",
                department: "Web development",
                reason: "tested",
                noticedDate: "28-02-2019",
                resignDate: "28-03-2019",
            },
            {
                id: 3,
                employee: "Richared deo",
                department: "Web development",
                reason: "tested",
                noticedDate: "28-02-2019",
                resignDate: "28-03-2019",
            },
            {
                id: 4,
                employee: "Mark hentry",
                department: "Web development",
                reason: "tested",
                noticedDate: "28-02-2019",
                resignDate: "28-03-2019",
            },
        ];
        let terminationmain = [
            {
                id: 1,
                employee: "Richared dio",
                department: "Web development",
                terminationType: "Misconduct",
                terminationDate: "28-10-2019",
                reason: "Lorem Ipsum Dollar",
                noticedDate: "28-03-2019",
            },
            {
                id: 2,
                employee: "Mikel Rio",
                department: "Web development",
                terminationType: "Others",
                terminationDate: "28-02-2019",
                reason: "Lorem Ipsum Dollar",
                noticedDate: "28-03-2019",
            },
            {
                id: 3,
                employee: "John smith",
                department: "Web development",
                terminationType: "Others",
                terminationDate: "18-05-2019",
                reason: "Lorem Ipsum Dollar",
                noticedDate: "28-03-2019",
            },
            {
                id: 4,
                employee: "Russia hentry",
                department: "Web development",
                terminationType: "Misconduct",
                terminationDate: "28-08-2019",
                reason: "Lorem Ipsum Dollar",
                noticedDate: "28-03-2019",
            },
            {
                id: 5,
                employee: "Jackson feioz",
                department: "Web development",
                terminationType: "Others",
                terminationDate: "08-09-2019",
                reason: "Lorem Ipsum Dollar",
                noticedDate: "28-03-2019",
            },
            {
                id: 6,
                employee: "John Doe",
                department: "Web development",
                terminationType: "Misconduct",
                terminationDate: "27-10-2019",
                reason: "Lorem Ipsum Dollar",
                noticedDate: "28-03-2019",
            },
        ];
        let estimates = [
            {
                id: 1,
                number: "EST-0001",
                client: "Barry Cuda",
                project: "Office Management",
                email: "barrycuda@texas.com",
                tax: "GST",
                client_address: "Texas",
                billing_address: "Washington",
                estimate_date: "11-03-2019",
                expiry_date: "20-05-2019",
                items: [
                    {
                        item: "Item",
                        description: "Description",
                        unit_cost: "10",
                        qty: 10,
                        amount: 100,
                    },
                ],
                totalamount: 100,
                discount: 5,
                grandTotal: 100,
                other_information: "Description",
                status: "Accepted",
            },
            {
                id: 2,
                number: "EST-0002",
                client: "Barry Cuda",
                project: "Office Management",
                email: "barrycuda@texas.com",
                tax: "GST",
                client_address: "Texas",
                billing_address: "Washington",
                estimate_date: "11-03-2019",
                expiry_date: "20-05-2019",
                items: [
                    {
                        item: "Item",
                        description: "Description",
                        unit_cost: "10",
                        qty: 10,
                        amount: 100,
                    },
                ],
                totalamount: 100,
                discount: 5,
                grandTotal: 100,
                other_information: "Description",
                status: "Accepted",
            },
            {
                id: 3,
                number: "EST-0003",
                client: "Joshy",
                project: "Office Management",
                email: "barrycuda@texas.com",
                tax: "GST",
                client_address: "Texas",
                billing_address: "Florida",
                estimate_date: "11-04-2019",
                expiry_date: "13-05-2019",
                items: [
                    {
                        item: "Item",
                        description: "Description",
                        unit_cost: "10",
                        qty: 10,
                        amount: 100,
                    },
                ],
                totalamount: 100,
                discount: 5,
                grandTotal: 100,
                other_information: "Description",
                status: "Accepted",
            },
            {
                id: 4,
                number: "EST-0004",
                client: "Denver",
                project: "Office Management",
                email: "barrycuda@texas.com",
                tax: "VAT",
                client_address: "Texas",
                billing_address: "Washington",
                estimate_date: "11-04-2019",
                expiry_date: "13-05-2019",
                items: [
                    {
                        item: "Item",
                        description: "Description",
                        unit_cost: "10",
                        qty: 10,
                        amount: 100,
                    },
                ],
                totalamount: 100,
                discount: 5,
                grandTotal: 100,
                other_information: "Description",
                status: "Accepted",
            },
            {
                id: 5,
                number: "EST-0006",
                client: "Kenneth",
                project: "Office Management",
                email: "barrycuda@texas.com",
                tax: "GST",
                client_address: "Texas",
                billing_address: "Washington",
                estimate_date: "10-04-2019",
                expiry_date: "20-10-2019",
                items: [
                    {
                        item: "Item",
                        description: "Description",
                        unit_cost: "10",
                        qty: 10,
                        amount: 100,
                    },
                ],
                totalamount: 100,
                discount: 5,
                grandTotal: 100,
                other_information: "Description",
                status: "Decline",
            },
        ];
        let invoice = [
            {
                id: 1,
                number: "#INV-0001",
                client: "Barry Cuda",
                project: "Office Management",
                email: "barrycuda@texas.com",
                tax: "GST",
                client_address: "Texas",
                billing_address: "Washington",
                invoice_date: "11-03-2019",
                due_date: "20-03-2019",
                items: [
                    {
                        item: "Item",
                        description: "Description",
                        unit_cost: "10",
                        qty: 10,
                        amount: 100,
                    },
                ],
                totalamount: 100,
                discount: 5,
                grandTotal: 100,
                other_information: "Description",
                status: "Paid",
            },
            {
                id: 2,
                number: "#INV-0002 ",
                client: "Shooshi",
                project: "Office Management",
                email: "barrycuda@texas.com",
                tax: "GST",
                client_address: "Texas",
                billing_address: "Washington",
                invoice_date: "11-03-2019",
                due_date: "20-03-2019",
                items: [
                    {
                        item: "Item",
                        description: "Description",
                        unit_cost: "10",
                        qty: 10,
                        amount: 100,
                    },
                ],
                totalamount: 100,
                discount: 5,
                grandTotal: 100,
                other_information: "Description",
                status: "Paid",
            },
            {
                id: 3,
                number: "#INV-0003",
                client: "Kenneth",
                project: "Office Management",
                email: "barrycuda@texas.com",
                tax: "GST",
                client_address: "Texas",
                billing_address: "Washington",
                invoice_date: "10-03-2019",
                due_date: "20-04-2019",
                items: [
                    {
                        item: "Item",
                        description: "Description",
                        unit_cost: "10",
                        qty: 10,
                        amount: 100,
                    },
                ],
                totalamount: 100,
                discount: 5,
                grandTotal: 100,
                other_information: "Description",
                status: "Paid",
            },
            {
                id: 4,
                number: "#INV-0004",
                client: "Barry Cuda",
                project: "Office Management",
                email: "barrycuda@texas.com",
                tax: "VAT",
                client_address: "Florida",
                billing_address: "Washington",
                invoice_date: "11-03-2019",
                due_date: "20-03-2019",
                items: [
                    {
                        item: "Item",
                        description: "Description",
                        unit_cost: "10",
                        qty: 10,
                        amount: 100,
                    },
                ],
                totalamount: 100,
                discount: 5,
                grandTotal: 100,
                other_information: "Description",
                status: "Paid",
            },
            {
                id: 5,
                number: "#INV-0005",
                client: "Denver",
                project: "Office Management",
                email: "barrycuda@texas.com",
                tax: "GST",
                client_address: "Texas",
                billing_address: "Vegas",
                invoice_date: "10-03-2019",
                due_date: "21-03-2019",
                items: [
                    {
                        item: "Item",
                        description: "Description",
                        unit_cost: "10",
                        qty: 10,
                        amount: 100,
                    },
                ],
                totalamount: 100,
                discount: 5,
                grandTotal: 100,
                other_information: "Description",
                status: "Paid",
            },
            {
                id: 6,
                number: "#INV-0006",
                client: "John",
                project: "Office Management",
                email: "barrycuda@texas.com",
                tax: "GST",
                client_address: "Texas",
                billing_address: "Washington",
                invoice_date: "11-04-2019",
                due_date: "20-06-2019",
                items: [
                    {
                        item: "Item",
                        description: "Description",
                        unit_cost: "10",
                        qty: 10,
                        amount: 100,
                    },
                ],
                totalamount: 100,
                discount: 5,
                grandTotal: 100,
                other_information: "Description",
                status: "Paid",
            },
        ];
        let invoiceReport = [
            {
                id: 1,
                number: "#INV-0001",
                client: "Global Technologies",
                project: "Office Management",
                email: "barrycuda@texas.com",
                tax: "GST",
                client_address: "Texas",
                billing_address: "Washington",
                invoice_date: "11-03-2019",
                due_date: "20-03-2019",
                items: [
                    {
                        item: "Item",
                        description: "Description",
                        unit_cost: "10",
                        qty: 10,
                        amount: 100,
                    },
                ],
                totalamount: 100,
                discount: 5,
                grandTotal: 100,
                other_information: "Description",
                status: "Paid",
            },
            {
                id: 2,
                number: "#INV-0002",
                client: "Delta Technologies",
                project: "Office Management",
                email: "barrycuda@texas.com",
                tax: "VAT",
                client_address: "Combodia",
                billing_address: "Washington",
                invoice_date: "11-02-2019",
                due_date: "21-03-2019",
                items: [
                    {
                        item: "Item",
                        description: "Description",
                        unit_cost: "10",
                        qty: 10,
                        amount: 100,
                    },
                ],
                totalamount: 100,
                discount: 5,
                grandTotal: 100,
                other_information: "Description",
                status: "Pending",
            },
            {
                id: 3,
                number: "#INV-0003",
                client: "Aura Technologies",
                project: "Office Management",
                email: "barrycuda@texas.com",
                tax: "GST",
                client_address: "Newyork",
                billing_address: "Vegas",
                invoice_date: "14-03-2019",
                due_date: "21-03-2019",
                items: [
                    {
                        item: "Item",
                        description: "Description",
                        unit_cost: "10",
                        qty: 10,
                        amount: 100,
                    },
                ],
                totalamount: 100,
                discount: 5,
                grandTotal: 100,
                other_information: "Description",
                status: "Paid",
            },
            {
                id: 4,
                number: "#INV-0004",
                client: "Mine Technologies",
                project: "Office Management",
                email: "barrycuda@texas.com",
                tax: "GST",
                client_address: "Texas",
                billing_address: "Washington",
                invoice_date: "11-05-2019",
                due_date: "23-03-2019",
                items: [
                    {
                        item: "Item",
                        description: "Description",
                        unit_cost: "10",
                        qty: 10,
                        amount: 100,
                    },
                ],
                totalamount: 100,
                discount: 5,
                grandTotal: 100,
                other_information: "Description",
                status: "Paid",
            },
            {
                id: 5,
                number: "#INV-0005",
                client: "Global Technologies",
                project: "Office Management",
                email: "barrycuda@texas.com",
                tax: "VAT",
                client_address: "Texas",
                billing_address: "Arizona",
                invoice_date: "14-03-2019",
                due_date: "20-09-2019",
                items: [
                    {
                        item: "Item",
                        description: "Description",
                        unit_cost: "10",
                        qty: 10,
                        amount: 100,
                    },
                ],
                totalamount: 100,
                discount: 5,
                grandTotal: 100,
                other_information: "Description",
                status: "Paid",
            },
            {
                id: 6,
                number: "#INV-0006",
                client: "Senzer Technologies",
                project: "Office Management",
                email: "barrycuda@texas.com",
                tax: "GST",
                client_address: "Texas",
                billing_address: "Florida",
                invoice_date: "11-03-2019",
                due_date: "23-03-2019",
                items: [
                    {
                        item: "Item",
                        description: "Description",
                        unit_cost: "10",
                        qty: 10,
                        amount: 100,
                    },
                ],
                totalamount: 100,
                discount: 5,
                grandTotal: 100,
                other_information: "Description",
                status: "Paid",
            },
        ];
        let performanceindicator = [
            {
                id: 1,
                designation: "Web Designer",
                experience: "Beginner",
                integrirty: "",
                Marketing: "",
                professionalism: "",
                managementskill: "",
                teamwork: "",
                adminstartion: "",
                criticalthinking: "",
                presentationskil: "",
                conflictmanagement: "",
                qualityofwork: "",
                attendance: "",
                effientcy: "",
                meetdeadline: "",
                department: "Designing",
                addedBy: "John Doe",
                createdBy: "28 Feb 2019",
                status: "Active",
            },
            {
                id: 2,
                designation: "Ios developer",
                experience: "Beginner",
                department: "Ios",
                integrirty: "",
                Marketing: "",
                professionalism: "",
                managementskill: "",
                teamwork: "",
                adminstartion: "",
                criticalthinking: "",
                presentationskil: "",
                conflictmanagement: "",
                qualityofwork: "",
                attendance: "",
                effientcy: "",
                meetdeadline: "",
                addedBy: "Mike Litorus",
                createdBy: "28 Feb 2019",
                status: "Active",
            },
            {
                id: 3,
                designation: "Web developer",
                experience: "Beginner",
                department: "Web design",
                integrirty: "",
                Marketing: "",
                professionalism: "",
                managementskill: "",
                teamwork: "",
                adminstartion: "",
                criticalthinking: "",
                presentationskil: "",
                conflictmanagement: "",
                qualityofwork: "",
                attendance: "",
                effientcy: "",
                meetdeadline: "",
                addedBy: "John Smith",
                createdBy: "28 Feb 2019",
                status: "InActive",
            },
            {
                id: 4,
                designation: "Web Designer",
                experience: "Beginner",
                department: "Web development",
                integrirty: "",
                Marketing: "",
                professionalism: "",
                managementskill: "",
                teamwork: "",
                adminstartion: "",
                criticalthinking: "",
                presentationskil: "",
                conflictmanagement: "",
                qualityofwork: "",
                attendance: "",
                effientcy: "",
                meetdeadline: "",
                addedBy: "Jeffrey Warden",
                createdBy: "28 Feb 2019",
                status: "Active",
            },
        ];
        let performanceappraisal = [
            {
                id: 1,
                employee: "John deo",
                designation: "Web designer",
                apparaisaldate: "02-05-2020",
                department: "Web design",
                status: "Active",
            },
            {
                id: 2,
                employee: "Mixcle Rao",
                designation: "Ios developer",
                apparaisaldate: "02-05-2020",
                department: "Web design",
                status: "Active",
            },
            {
                id: 3,
                employee: "John rio",
                designation: "Web developer",
                apparaisaldate: "02-05-2020",
                department: "Web design",
                status: "Active",
            },
            {
                id: 4,
                employee: "effrey Warden",
                designation: "Web Designer",
                apparaisaldate: "02-05-2020",
                department: "Web development",
                status: "Active",
            },
        ];
        let taskboard = [
            {
                id: 1,
                taskname: "John deo",
                taskpriority: "Medium",
                duedate: "02-05-2020",
                followers: "John deo",
                status: "Active",
            },
            {
                id: 2,
                taskname: "John Mclaren",
                taskpriority: "Low",
                duedate: "02-10-2020",
                followers: "Richard Williams",
                status: "Active",
            },
            {
                id: 3,
                taskname: "Kennedy",
                taskpriority: "High",
                duedate: "05-11-2020",
                followers: "Richard deo",
                status: "Active",
            },
            {
                id: 4,
                taskname: "Barry cuda",
                taskpriority: "Medium",
                duedate: "02-05-2020",
                followers: "Williams",
                status: "Active",
            },
            {
                id: 5,
                taskname: "Joshy",
                taskpriority: "High",
                duedate: "02-05-2020",
                followers: "Loren",
                status: "Active",
            },
            {
                id: 6,
                taskname: "Hector",
                taskpriority: "Medium",
                duedate: "25-10-2020",
                followers: "Rihanna",
                status: "Active",
            },
        ];
        let pickListNames = [
            {
                id: 1,
                name: "John deo",
            },
            {
                id: 2,
                name: "John Mclaren",
            },
            {
                id: 3,
                name: "Kennedy",
            },
            {
                id: 4,
                name: "Barry cuda",
            },
        ];
        let customPolicy = [
            {
                id: 1,
                name: "John deo",
                days: 5,
            },
            {
                id: 2,
                name: "John Mclaren",
                days: 6,
            },
            {
                id: 3,
                name: "Kennedy",
                days: 8,
            },
            {
                id: 4,
                name: "Barry cuda",
                days: 9,
            },
        ];
        let categories = [
            {
                id: 1,
                categoryname: "Hardware",
                subcategoryname: "Hardware Expenses"
            },
            {
                id: 2,
                categoryname: "Material",
                subcategoryname: "Material Expenses"
            },
            {
                id: 3,
                categoryname: "Vehicle",
                subcategoryname: "Company Vehicle Information"
            }
        ];
        let revenue = [
            {
                id: 1,
                notes: "test",
                categoryname: "Project",
                subcategoryname: "Project Expenses",
                amount: "1000.00",
                revenuedate: "06 Jan 2020"
            },
            {
                id: 2,
                notes: "test",
                categoryname: "Hardware",
                subcategoryname: "Hardware Expenses",
                amount: "1000.00",
                revenuedate: "06 Jan 2020"
            }
        ];
        let useralljobs = [
            {
                id: 1,
                jobtitle: "Web Developer",
                department: "Development",
                startdate: "3 Mar 2019",
                expiredate: "31 May 2019",
                jobtype: "Full Time",
                status: "Open"
            },
            {
                id: 2,
                jobtitle: "Web Designer",
                department: "Designing",
                startdate: "3 Mar 2019",
                expiredate: "31 May 2019",
                jobtype: "Part Time",
                status: "Closed"
            },
            {
                id: 3,
                jobtitle: "Android Developer",
                department: "Android",
                startdate: "3 Mar 2019",
                expiredate: "31 May 2019",
                jobtype: "Internship",
                status: "Cancelled"
            }
        ];
        let offeredjobs = [
            {
                id: 1,
                jobtitle: "Web Developer",
                department: "Development",
                jobtype: "Full Time"
            },
            {
                id: 2,
                jobtitle: "Web Designer",
                department: "Designing",
                jobtype: "Part Time"
            },
            {
                id: 3,
                jobtitle: "Android Developer",
                department: "Android",
                jobtype: "Internship"
            }
        ];
        let visitedjobs = [
            {
                id: 1,
                jobtitle: "Web Developer",
                department: "Development",
                startdate: "3 Mar 2019",
                expiredate: "31 May 2019",
                jobtype: "Full Time",
                status: "Open"
            },
            {
                id: 2,
                jobtitle: "Web Designer",
                department: "Designing",
                startdate: "3 Mar 2019",
                expiredate: "31 May 2019",
                jobtype: "Part Time",
                status: "Closed"
            },
            {
                id: 3,
                jobtitle: "Android Developer",
                department: "Android",
                startdate: "3 Mar 2019",
                expiredate: "31 May 2019",
                jobtype: "Internship",
                status: "Cancelled"
            }
        ];
        let projectreports = [
            {
                id: 1,
                projecttitle: "Hospital Administration",
                clientname: "Global Technologies",
                startdate: "9 Jan 2021",
                expiredate: "10 Apr 2021",
                status: "Active"
            },
            {
                id: 2,
                projecttitle: "Office Management",
                clientname: "Delta Infotech",
                startdate: "10 Dec 2021",
                expiredate: "2 May 2021",
                status: "Pending"
            }
        ];
        let archivedjobs = [
            {
                id: 1,
                jobtitle: "Web Developer",
                department: "Development",
                startdate: "3 Mar 2019",
                expiredate: "31 May 2019",
                jobtype: "Full Time",
                status: "Open"
            },
            {
                id: 2,
                jobtitle: "Web Designer",
                department: "Designing",
                startdate: "3 Mar 2019",
                expiredate: "31 May 2019",
                jobtype: "Part Time",
                status: "Closed"
            },
            {
                id: 3,
                jobtitle: "Android Developer",
                department: "Android",
                startdate: "3 Mar 2019",
                expiredate: "31 May 2019",
                jobtype: "Internship",
                status: "Cancelled"
            }
        ];
        let appliedjobs = [
            {
                id: 1,
                jobtitle: "Web Developer",
                department: "Development",
                startdate: "3 Mar 2019",
                expiredate: "31 May 2019",
                jobtype: "Full Time",
                status: "Open"
            },
            {
                id: 2,
                jobtitle: "Web Designer",
                department: "Designing",
                startdate: "3 Mar 2019",
                expiredate: "31 May 2019",
                jobtype: "Part Time",
                status: "Closed"
            },
            {
                id: 3,
                jobtitle: "Android Developer",
                department: "Android",
                startdate: "3 Mar 2019",
                expiredate: "31 May 2019",
                jobtype: "Internship",
                status: "Cancelled"
            }
        ];
        let savedjobs = [
            {
                id: 1,
                jobtitle: "Web Developer",
                department: "Development",
                startdate: "3 Mar 2019",
                expiredate: "31 May 2019",
                jobtype: "Full Time",
                status: "Open"
            },
            {
                id: 2,
                jobtitle: "Web Designer",
                department: "Designing",
                startdate: "3 Mar 2019",
                expiredate: "31 May 2019",
                jobtype: "Part Time",
                status: "Closed"
            },
            {
                id: 3,
                jobtitle: "Android Developer",
                department: "Android",
                startdate: "3 Mar 2019",
                expiredate: "31 May 2019",
                jobtype: "Internship",
                status: "Cancelled"
            }
        ];
        let interview = [
            {
                id: 1,
                questions: "IS management has decided to rewrite a legacy customer relations system using fourth generation languages (4GLs). Which of the following risks is MOST often associated with system development using 4GLs?",
                option1: "design facilities",
                option2: "language subsets",
                option3: "Lack of portability",
                option4: "Inability to perform data",
                correctanswer: "A"
            },
            {
                id: 2,
                questions: "Which of the following would be the BEST method for ensuring that critical fields in a master record have been updated properly?",
                option1: "design facilities",
                option2: "language subsets",
                option3: "Lack of portability",
                option4: "Inability to perform data",
                correctanswer: "A"
            }
        ];
        let candidate = [
            {
                id: 1,
                name: "John Doe",
                mobilenumber: "9876543210",
                email: "johndoe@example.com",
                createddate: "1 Jan 2013"
            },
            {
                id: 2,
                name: "Richard Miles",
                mobilenumber: "9876543210",
                email: "richardmiles@example.com",
                createddate: "18 Mar 2014"
            },
            {
                id: 3,
                name: "John Smith",
                mobilenumber: "9876543210",
                email: "johnsmith@example.com",
                createddate: "1 Apr 2014"
            }
        ];
        let expire = [
            {
                id: 1,
                experience: "1-2",
                status: "Active"
            },
            {
                id: 2,
                experience: "1-3",
                status: "Active"
            },
            {
                id: 3,
                experience: "4-7",
                status: "Active"
            }
        ];
        let paymentreports = [
            {
                id: 1,
                transactionid: "834521",
                date: "2nd Dec 2020",
                clientname: "Dreams",
                paymentmethod: "Online",
                invoice: "INV0001",
                amount: "$4,329,970.7"
            },
            {
                id: 2,
                transactionid: "834521",
                date: "2nd Dec 2020",
                clientname: "Dreams",
                paymentmethod: "Online",
                invoice: "INV0001",
                amount: "$4,329,970.7"
            }
        ];
        let taskreports = [
            {
                id: 1,
                taskname: "Hospital Administration",
                startdate: "26 Mar 2019",
                enddate: "26 Apr 2021",
                status: "Active"
            },
            {
                id: 2,
                taskname: "Hospital Administration",
                startdate: "26 Mar 2019",
                enddate: "26 Apr 2021",
                status: "Active"
            }
        ];
        let userreports = [
            {
                id: 1,
                name1: "Barry Cuda",
                name2: "Global Technologies",
                company: "Global Technologies",
                email: "barrycuda@example.com",
                role: "Client",
                designation: "CEO",
                status: "Active"
            },
            {
                id: 2,
                name1: "Daniel Porter",
                name2: "Admin",
                company: "Focus Technologies",
                email: "danielporter@example.com",
                role: "Admin",
                designation: "Admin Manager",
                status: "Active"
            }
        ];
        let attendancereports = [
            {
                id: 1,
                date: "1 Jan 2020",
                clockin: "-",
                clockout: "-",
                workstatus: "-"
            },
            {
                id: 2,
                date: "2 Jan 2020",
                clockin: "-",
                clockout: "-",
                workstatus: "-"
            },
            {
                id: 3,
                date: "3 Jan 2020",
                clockin: "-",
                clockout: "-",
                workstatus: "-"
            },
            {
                id: 4,
                date: "4 Jan 2020",
                clockin: "-",
                clockout: "Week Off",
                workstatus: "-"
            },
            {
                id: 5,
                date: "5 Jan 2020",
                clockin: "-",
                clockout: "Week Off",
                workstatus: "-"
            },
            {
                id: 6,
                date: "6 Jan 2020",
                clockin: "-",
                clockout: "-",
                workstatus: "-"
            },
        ];
        let leavereports = [
            {
                id: 1,
                name1: "John Doe",
                name2: "#0001",
                date: "20 Dec 2020",
                department: "Design",
                leavetype: "Sick Leave",
                noofdays: "05",
                remainingleave: "08",
                totalleaves: "20",
                totalleavetaken: "12",
                leavecarryforward: "08"
            },
            {
                id: 2,
                name1: "Richard Miles",
                name2: "#0002",
                date: "21 Dec 2020",
                department: "Web Developer",
                leavetype: "Parenting Leave",
                noofdays: "03",
                remainingleave: "08",
                totalleaves: "20",
                totalleavetaken: "12",
                leavecarryforward: "05"
            },
            {
                id: 3,
                name1: "John Smith",
                name2: "#0003",
                date: "22 Dec 2020",
                department: "Android Developer",
                leavetype: "Emergency Leave",
                noofdays: "01",
                remainingleave: "09",
                totalleaves: "20",
                totalleavetaken: "17",
                leavecarryforward: "03"
            },
            {
                id: 4,
                name1: "Mike Litorus",
                name2: "#0004",
                date: "23 Dec 2020",
                department: "IOS Developer",
                leavetype: "Sick Leave",
                noofdays: "15",
                remainingleave: "05",
                totalleaves: "20",
                totalleavetaken: "15",
                leavecarryforward: "05"
            },
            {
                id: 5,
                name1: "John Doe",
                name2: "#0001",
                date: "24 Dec 2020",
                department: "Team Leader",
                leavetype: "Sick Leave",
                noofdays: "10",
                remainingleave: "07",
                totalleaves: "20",
                totalleavetaken: "18",
                leavecarryforward: "2"
            }
        ];
        let dailyreport = [
            {
                id: 1,
                name1: "John Doe",
                name2: "#0001",
                date: "20 Dec 2020",
                department: "Design",
                status: "Week off"
            },
            {
                id: 2,
                name1: "John Smith",
                name2: "#0003",
                date: "20 Dec 2020",
                department: "Android Developer",
                status: "Week off"
            },
            {
                id: 3,
                name1: "Mike Litorus",
                name2: "#0004",
                date: "20 Dec 2020",
                department: "IOS Developer",
                status: "Week off"
            },
            {
                id: 4,
                name1: "Richard Miles",
                name2: "#0002",
                date: "20 Dec 2020",
                department: "Web Developer",
                status: "Absent"
            },
            {
                id: 5,
                name1: "Wilmer Deluna",
                name2: "#0005",
                date: "20 Dec 2020",
                department: "Team Leader",
                status: "Week off"
            }
        ];
        let candidatelist = [
            {
                id: 1,
                name1: "John Doe",
                name2: "Web Designer",
                jobtitle: "Web Developer",
                department: "Development",
                status: "Offered"
            },
            {
                id: 2,
                name1: "Richard Miles",
                name2: "Web Developer",
                jobtitle: "Web Designer",
                department: "Designing",
                status: "Offered"
            },
            {
                id: 3,
                name1: "John Smith",
                name2: "Android Developer",
                jobtitle: "Android Developer",
                department: "Android",
                status: "Offered"
            }
        ];
        let offer = [
            {
                id: 1,
                name1: "John Doe",
                name2: "Web Designer",
                jobtitle: "Web Developer",
                jobtype: "Temporary",
                pay: "$25000",
                annualip: "15%",
                longtermip: "No",
                status: "requested"
            },
            {
                id: 2,
                name1: "Richard Miles",
                name2: "Web Developer",
                jobtitle: "Web Designer",
                jobtype: "Contract",
                pay: "$25000",
                annualip: "15%",
                longtermip: "No",
                status: "rejected"
            },
            {
                id: 3,
                name1: "John Smith",
                name2: "Android Developer",
                jobtitle: "Android Developer",
                jobtype: "Salary",
                pay: "$25000",
                annualip: "15%",
                longtermip: "No",
                status: "Approved"
            }
        ];
        let scheduletiming = [
            {
                id: 1,
                name1: "John Doe",
                name2: "Web Designer",
                jobtitle: "Web Developer",
                useravailable: "11-03-2020",
                useravailabletimings: "- 11:00 AM-12:00 PM",
                useravailable1: "11-03-2020",
                useravailabletimings1: "- 10:00 AM-11:00 AM",
                useravailable2: "01-01-1970",
                useravailabletimings2: "- 10:00 AM-11:00 AM"
            },
            {
                id: 2,
                name1: "Richard Miles",
                name2: "Web Developer",
                jobtitle: "Web Designer",
                useravailable: "11-03-2020",
                useravailabletimings: "- 11:00 AM-12:00 PM",
                useravailable1: "11-03-2020",
                useravailabletimings1: "- 10:00 AM-11:00 AM",
                useravailable2: "01-01-1970",
                useravailabletimings2: "- 10:00 AM-11:00 AM"
            },
            {
                id: 3,
                name1: "John Smith",
                name2: "Android Developer",
                jobtitle: "Android Developer",
                useravailable: "11-03-2020",
                useravailabletimings: "- 11:00 AM-12:00 PM",
                useravailable1: "11-03-2020",
                useravailabletimings1: "- 10:00 AM-11:00 AM",
                useravailable2: "01-01-1970",
                useravailabletimings2: "- 10:00 AM-11:00 AM"
            }
        ];
        let aptituteresult = [
            {
                id: 1,
                name1: "John Doe",
                name2: "Web Designer",
                jobtitle: "Web Developer",
                department: "Development",
                categorywise: "html -",
                categorywisemark: "1",
                categorywise1: "Level1 -",
                categorywisemark1: "0",
                totalmark: "1",
                status: "Action pending"
            },
            {
                id: 2,
                name1: "Richard Miles",
                name2: "Web Developer",
                jobtitle: "Web Designer",
                department: "Designing",
                categorywise: "html -",
                categorywisemark: "1",
                categorywise1: "Level1 -",
                categorywisemark1: "0",
                totalmark: "1",
                status: "Action pending"
            },
            {
                id: 3,
                name1: "John Smith",
                name2: "Android Developer",
                jobtitle: "Android Developer",
                department: "Android",
                categorywise: "html -",
                categorywisemark: "1",
                categorywise1: "Level1 -",
                categorywisemark1: "0",
                totalmark: "1",
                status: "Action pending"
            }
        ];
        let manage = [
            {
                id: 1,
                name1: "John Doe",
                name2: "Web Designer",
                jobtitle: "Web Developer",
                department: "Development",
                startdate: "3 Mar 2019",
                expiredate: "31 May 2019",
                jobtype: "Full Time",
                status: "Open",
                resume: "Download"
            },
            {
                id: 2,
                name1: "Richard Miles",
                name2: "Web Developer",
                jobtitle: "Web Designer",
                department: "Designing",
                startdate: "3 Mar 2019",
                expiredate: "31 May 2019",
                jobtype: "Part Time",
                status: "Closed",
                resume: "Download"
            },
            {
                id: 3,
                name1: "John Smith",
                name2: "Android Developer",
                jobtitle: "Android Developer",
                department: "Android",
                startdate: "3 Mar 2019",
                expiredate: "31 May 2019",
                jobtype: "Internship",
                status: "Cancelled",
                resume: "Download"
            }
        ];
        let payslip = [
            {
                id: 1,
                name1: "Bernardo Galaviz",
                name2: "Web Developer",
                paidamount: "$200",
                paymentmonth: "Apr",
                paymentyear: "2019",
                actions: "PDF"
            },
            {
                id: 2,
                name1: "Jeffrey Warden",
                name2: "Web Developer",
                paidamount: "$300",
                paymentmonth: "Dec",
                paymentyear: "2020",
                actions: "PDF"
            },
            {
                id: 3,
                name1: "John Doe",
                name2: "Web Designer",
                paidamount: "$400",
                paymentmonth: "Jun",
                paymentyear: "2020",
                actions: "PDF"
            },
            {
                id: 4,
                name1: "John Smith",
                name2: "Android Developer",
                paidamount: "$500",
                paymentmonth: "Feb",
                paymentyear: "2020",
                actions: "PDF"
            },
            {
                id: 5,
                name1: "Mike Litorus",
                name2: "IOS Developer",
                paidamount: "$600",
                paymentmonth: "Jan",
                paymentyear: "2020",
                actions: "PDF"
            }
        ];
        let employeereport = [
            {
                id: 1,
                name1: "John Doe",
                name2: "#0001",
                employeetype: "Employee",
                email: "johndoe@example.com",
                department: "Designing",
                designation: "UI Design",
                joiningdate: "20 Aug 2020",
                dob: "03 Mar 1992",
                marritalstatus: "Married",
                gender: "Male",
                terminateddate: "-",
                relievingdate: "-",
                salary: "$20000",
                address: "1861 Bayonne Ave, Manchester Township, NJ, 08759",
                contactnumber: "7894561235",
                experience: "0 years 4 months and 9 days",
                status: "Active"
            },
            {
                id: 2,
                name1: "Richard Miles",
                name2: "#0002",
                employeetype: "Employee",
                email: "richardmiles@example.com",
                department: "Android Developer",
                designation: "IT Support",
                joiningdate: "01 Jul 2020",
                dob: "05 Dec 1979",
                marritalstatus: "Married",
                gender: "Male",
                terminateddate: "-",
                relievingdate: "-",
                salary: "$20000",
                address: "1861 Bayonne Ave, Manchester Township, NJ, 08759",
                contactnumber: "7894561235",
                experience: "0 years 5 months and 24 days",
                status: "Active"
            },
            {
                id: 3,
                name1: "John Smith",
                name2: "#0003",
                employeetype: "Employee",
                email: "johnsmith@example.com",
                department: "IOS Developer",
                designation: "Development Manager",
                joiningdate: "03 Sep 2020",
                dob: "16 Apr 1984",
                marritalstatus: "Married",
                gender: "Male",
                terminateddate: "-",
                relievingdate: "-",
                salary: "$27000",
                address: "1861 Bayonne Ave, Manchester Township, NJ, 08759",
                contactnumber: "7894561235",
                experience: "0 years 3 months and 21 days",
                status: "Active"
            },
            {
                id: 4,
                name1: "Mike Litorus",
                name2: "#0004",
                employeetype: "Employee",
                email: "mikelitorus@example.com",
                department: "Web Developer",
                designation: "IT Support",
                joiningdate: "15 Nov 2020",
                dob: "15 Jul 2005",
                marritalstatus: "Single",
                gender: "Male",
                terminateddate: "-",
                relievingdate: "-",
                salary: "$15000",
                address: "1861 Bayonne Ave, Manchester Township, NJ, 08759",
                contactnumber: "7894561235",
                experience: "0 years 1 months and 9 days",
                status: "Active"
            },
            {
                id: 5,
                name1: "Wilmer Deluna",
                name2: "#005",
                employeetype: "Employee",
                email: "wilmerdeluna@example.com",
                department: "Team Leader",
                designation: "Development Manager",
                joiningdate: "01 Dec 2020",
                dob: "21 Jun 1984",
                marritalstatus: "Married",
                gender: "Male",
                terminateddate: "-",
                relievingdate: "-",
                salary: "$25000",
                address: "1861 Bayonne Ave, Manchester Township, NJ, 08759",
                contactnumber: "7894561235",
                experience: "0 years 0 months and 24 days",
                status: "Active"
            }
        ];
        let budgetexpense = [
            {
                id: 1,
                notes: "test",
                categoryname: "Hardware",
                subcategoryname: "Hardware Expenses",
                amount: "1000.00",
                revenuedate: "06 Jan 2020"
            },
            {
                id: 2,
                notes: "test",
                categoryname: "Project",
                subcategoryname: "Project Expenses",
                amount: "1000.00",
                revenuedate: "06 Jan 2020"
            }
        ];
        let budget = [
            {
                id: 1,
                budgettitle: "Tender",
                budgettype: "project",
                startdate: "01 Jan 2021",
                enddate: "31 Dec 2021",
                totalrevenue: "2500000",
                totalexpenses: "1500000",
                taxamount: "10",
                budgetamount: "999990"
            },
            {
                id: 2,
                budgettitle: "Project",
                budgettype: "project",
                startdate: "01 Feb 2021",
                enddate: "31 Apr 2021",
                totalrevenue: "100000",
                totalexpenses: "50000",
                taxamount: "1000",
                budgetamount: "49000"
            }
        ];
        let shiftlist = [
            {
                id: 1,
                shiftname: "10'0 clock Shift",
                minstarttime: "09.00:00 am",
                starttime: "10:00:00 am",
                maxstarttime: "10:30:00 am",
                minendtime: "06:00:00 pm",
                endtime: "06:30:00 pm",
                maxendtime: "07:00:00 pm",
                breaktime: "30 mins",
                status: "Active"
            },
            {
                id: 2,
                shiftname: "10:30 shift",
                minstarttime: "10.00:00 am",
                starttime: "10:30:00 am",
                maxstarttime: "11:00:00 am",
                minendtime: "06:30:00 pm",
                endtime: "07:00:00 pm",
                maxendtime: "07:30:00 pm",
                breaktime: "45 mins",
                status: "Active"
            },
            {
                id: 3,
                shiftname: "Daily Rout",
                minstarttime: "06.00:00 am",
                starttime: "06:30:00 am",
                maxstarttime: "07:00:00 am",
                minendtime: "03:00:00 pm",
                endtime: "03:30:00 pm",
                maxendtime: "04:00:00 pm",
                breaktime: "60 mins",
                status: "Active"
            },
            {
                id: 4,
                shiftname: "New Shift",
                minstarttime: "06.11:00 am",
                starttime: "06:30:00 am",
                maxstarttime: "08:12:00 am",
                minendtime: "09:12:00 pm",
                endtime: "09:30:00 pm",
                maxendtime: "09:45:00 pm",
                breaktime: "45 mins",
                status: "Active"
            },
            {
                id: 5,
                shiftname: "Recurring Shift",
                minstarttime: "08.30:00 am",
                starttime: "09:00:00 am",
                maxstarttime: "09:30:00 am",
                minendtime: "05:30:00 pm",
                endtime: "06:00:00 pm",
                maxendtime: "06:30:00 pm",
                breaktime: "60 mins",
                status: "Active"
            }
        ];
        let shiftscheduling = [
            {
                id: 1,
                name1: "Brenardo Galaviz",
                name2: "Web Developer"
            },
            {
                id: 2,
                name1: "Brenardo Galaviz",
                name2: "Web Developer"
            },
            {
                id: 3,
                name1: "John Doe",
                name2: "Web Designer"
            },
            {
                id: 4,
                name1: "John Smith",
                name2: "Android Developer"
            },
            {
                id: 5,
                name1: "Mike Litorus",
                name2: "IOS Developer"
            },
            {
                id: 6,
                name1: "Richard Miles",
                name2: "Web Developer"
            },
            {
                id: 7,
                name1: "Wilmer Deluna",
                name2: "Team Leader"
            }
        ];
        return {
            invoice: invoice,
            contacts: contacts,
            clients: clients,
            projects: projects,
            leaders: leaders,
            employeepage: employeepage,
            employeelist: employeelist,
            holidays: holidays,
            adminleaves: adminleaves,
            leads: leads,
            tickets: tickets,
            employeeleaves: employeeleaves,
            departments: departments,
            designation: designation,
            timesheet: timesheet,
            overtime: overtime,
            expenses: expenses,
            providentFund: providentFund,
            goallist: goallist,
            goaltype: goaltype,
            trainingtype: trainingtype,
            trainers: trainers,
            traininglist: traininglist,
            promotionmain: promotionmain,
            resignationmain: resignationmain,
            terminationmain: terminationmain,
            taxes: taxes,
            policies: policies,
            expenseReport: expenseReport,
            appliedCandidates: appliedCandidates,
            knowledgeBase: knowledgeBase,
            assets: assets,
            users: users,
            payments: payments,
            manageJobs: manageJobs,
            estimates: estimates,
            leaveType: leaveType,
            performanceindicator: performanceindicator,
            performanceappraisal: performanceappraisal,
            roles: roles,
            payrollAddition: payrollAddition,
            payrollOvertime: payrollOvertime,
            payrollDeduction: payrollDeduction,
            invoiceReport: invoiceReport,
            employeeSalary: employeeSalary,
            taskboard: taskboard,
            pickListNames: pickListNames,
            customPolicy: customPolicy,
            categories: categories,
            revenue: revenue,
            useralljobs: useralljobs,
            offeredjobs: offeredjobs,
            visitedjobs: visitedjobs,
            projectreports: projectreports,
            archivedjobs: archivedjobs,
            appliedjobs: appliedjobs,
            savedjobs: savedjobs,
            interview: interview,
            candidate: candidate,
            expire: expire,
            paymentreports: paymentreports,
            taskreports: taskreports,
            userreports: userreports,
            attendancereports: attendancereports,
            leavereports: leavereports,
            dailyreport: dailyreport,
            candidatelist: candidatelist,
            offer: offer,
            scheduletiming: scheduletiming,
            aptituteresult: aptituteresult,
            manage: manage,
            payslip: payslip,
            employeereport: employeereport,
            budgetexpense: budgetexpense,
            budget: budget,
            shiftlist: shiftlist,
            shiftscheduling: shiftscheduling
        };
    }
}


/***/ }),

/***/ 10342:
/*!********************************************************************************!*\
  !*** ./node_modules/angular-in-memory-web-api/__ivy_ngcc__/backend.service.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackendService": () => (/* binding */ BackendService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 12378);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 24383);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 25670);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 11133);
/* harmony import */ var _http_status_codes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http-status-codes */ 20006);
/* harmony import */ var _delay_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delay-response */ 78977);
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interfaces */ 33882);





/**
 * Base class for in-memory web api back-ends
 * Simulate the behavior of a RESTy web api
 * backed by the simple in-memory data store provided by the injected `InMemoryDbService` service.
 * Conforms mostly to behavior described here:
 * http://www.restapitutorial.com/lessons/httpmethods.html
 */

var BackendService =
/** @class */
function () {
  function BackendService(inMemDbService, config) {
    if (config === void 0) {
      config = {};
    }

    this.inMemDbService = inMemDbService;
    this.config = new _interfaces__WEBPACK_IMPORTED_MODULE_2__.InMemoryBackendConfig();
    this.requestInfoUtils = this.getRequestInfoUtils();
    var loc = this.getLocation('/');
    this.config.host = loc.host; // default to app web server host

    this.config.rootPath = loc.path; // default to path when app is served (e.g.'/')

    Object.assign(this.config, config);
  }

  Object.defineProperty(BackendService.prototype, "dbReady", {
    ////  protected /////
    get: function () {
      if (!this.dbReadySubject) {
        // first time the service is called.
        this.dbReadySubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(false);
        this.resetDb();
      }

      return this.dbReadySubject.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)(function (r) {
        return r;
      }));
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Process Request and return an Observable of Http Response object
   * in the manner of a RESTy web api.
   *
   * Expect URI pattern in the form :base/:collectionName/:id?
   * Examples:
   *   // for store with a 'customers' collection
   *   GET api/customers          // all customers
   *   GET api/customers/42       // the character with id=42
   *   GET api/customers?name=^j  // 'j' is a regex; returns customers whose name starts with 'j' or 'J'
   *   GET api/customers.json/42  // ignores the ".json"
   *
   * Also accepts direct commands to the service in which the last segment of the apiBase is the word "commands"
   * Examples:
   *     POST commands/resetDb,
   *     GET/POST commands/config - get or (re)set the config
   *
   *   HTTP overrides:
   *     If the injected inMemDbService defines an HTTP method (lowercase)
   *     The request is forwarded to that method as in
   *     `inMemDbService.get(requestInfo)`
   *     which must return either an Observable of the response type
   *     for this http library or null|undefined (which means "keep processing").
   */

  BackendService.prototype.handleRequest = function (req) {
    var _this = this; //  handle the request when there is an in-memory database


    return this.dbReady.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.concatMap)(function () {
      return _this.handleRequest_(req);
    }));
  };

  BackendService.prototype.handleRequest_ = function (req) {
    var _this = this;

    var url = req.urlWithParams ? req.urlWithParams : req.url; // Try override parser
    // If no override parser or it returns nothing, use default parser

    var parser = this.bind('parseRequestUrl');
    var parsed = parser && parser(url, this.requestInfoUtils) || this.parseRequestUrl(url);
    var collectionName = parsed.collectionName;
    var collection = this.db[collectionName];
    var reqInfo = {
      req: req,
      apiBase: parsed.apiBase,
      collection: collection,
      collectionName: collectionName,
      headers: this.createHeaders({
        'Content-Type': 'application/json'
      }),
      id: this.parseId(collection, collectionName, parsed.id),
      method: this.getRequestMethod(req),
      query: parsed.query,
      resourceUrl: parsed.resourceUrl,
      url: url,
      utils: this.requestInfoUtils
    };
    var resOptions;

    if (/commands\/?$/i.test(reqInfo.apiBase)) {
      return this.commands(reqInfo);
    }

    var methodInterceptor = this.bind(reqInfo.method);

    if (methodInterceptor) {
      // InMemoryDbService intercepts this HTTP method.
      // if interceptor produced a response, return it.
      // else InMemoryDbService chose not to intercept; continue processing.
      var interceptorResponse = methodInterceptor(reqInfo);

      if (interceptorResponse) {
        return interceptorResponse;
      }

      ;
    }

    if (this.db[collectionName]) {
      // request is for a known collection of the InMemoryDbService
      return this.createResponse$(function () {
        return _this.collectionHandler(reqInfo);
      });
    }

    if (this.config.passThruUnknownUrl) {
      // unknown collection; pass request thru to a "real" backend.
      return this.getPassThruBackend().handle(req);
    } // 404 - can't handle this request


    resOptions = this.createErrorResponseOptions(url, _http_status_codes__WEBPACK_IMPORTED_MODULE_0__.STATUS.NOT_FOUND, "Collection '" + collectionName + "' not found");
    return this.createResponse$(function () {
      return resOptions;
    });
  };
  /**
   * Add configured delay to response observable unless delay === 0
   */


  BackendService.prototype.addDelay = function (response) {
    var d = this.config.delay;
    return d === 0 ? response : (0,_delay_response__WEBPACK_IMPORTED_MODULE_1__.delayResponse)(response, d || 500);
  };
  /**
   * Apply query/search parameters as a filter over the collection
   * This impl only supports RegExp queries on string properties of the collection
   * ANDs the conditions together
   */


  BackendService.prototype.applyQuery = function (collection, query) {
    // extract filtering conditions - {propertyName, RegExps) - from query/search parameters
    var conditions = [];
    var caseSensitive = this.config.caseSensitiveSearch ? undefined : 'i';
    query.forEach(function (value, name) {
      value.forEach(function (v) {
        return conditions.push({
          name: name,
          rx: new RegExp(decodeURI(v), caseSensitive)
        });
      });
    });
    var len = conditions.length;

    if (!len) {
      return collection;
    } // AND the RegExp conditions


    return collection.filter(function (row) {
      var ok = true;
      var i = len;

      while (ok && i) {
        i -= 1;
        var cond = conditions[i];
        ok = cond.rx.test(row[cond.name]);
      }

      return ok;
    });
  };
  /**
   * Get a method from the `InMemoryDbService` (if it exists), bound to that service
   */


  BackendService.prototype.bind = function (methodName) {
    var fn = this.inMemDbService[methodName];
    return fn ? fn.bind(this.inMemDbService) : undefined;
  };

  BackendService.prototype.bodify = function (data) {
    return this.config.dataEncapsulation ? {
      data: data
    } : data;
  };

  BackendService.prototype.clone = function (data) {
    return JSON.parse(JSON.stringify(data));
  };

  BackendService.prototype.collectionHandler = function (reqInfo) {
    // const req = reqInfo.req;
    var resOptions;

    switch (reqInfo.method) {
      case 'get':
        resOptions = this.get(reqInfo);
        break;

      case 'post':
        resOptions = this.post(reqInfo);
        break;

      case 'put':
        resOptions = this.put(reqInfo);
        break;

      case 'delete':
        resOptions = this.delete(reqInfo);
        break;

      default:
        resOptions = this.createErrorResponseOptions(reqInfo.url, _http_status_codes__WEBPACK_IMPORTED_MODULE_0__.STATUS.METHOD_NOT_ALLOWED, 'Method not allowed');
        break;
    } // If `inMemDbService.responseInterceptor` exists, let it morph the response options


    var interceptor = this.bind('responseInterceptor');
    return interceptor ? interceptor(resOptions, reqInfo) : resOptions;
  };
  /**
   * Commands reconfigure the in-memory web api service or extract information from it.
   * Commands ignore the latency delay and respond ASAP.
   *
   * When the last segment of the `apiBase` path is "commands",
   * the `collectionName` is the command.
   *
   * Example URLs:
   *   commands/resetdb (POST) // Reset the "database" to its original state
   *   commands/config (GET)   // Return this service's config object
   *   commands/config (POST)  // Update the config (e.g. the delay)
   *
   * Usage:
   *   http.post('commands/resetdb', undefined);
   *   http.get('commands/config');
   *   http.post('commands/config', '{"delay":1000}');
   */


  BackendService.prototype.commands = function (reqInfo) {
    var _this = this;

    var command = reqInfo.collectionName.toLowerCase();
    var method = reqInfo.method;
    var resOptions = {
      url: reqInfo.url
    };

    switch (command) {
      case 'resetdb':
        resOptions.status = _http_status_codes__WEBPACK_IMPORTED_MODULE_0__.STATUS.NO_CONTENT;
        return this.resetDb(reqInfo).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.concatMap)(function () {
          return _this.createResponse$(function () {
            return resOptions;
          }, false
          /* no latency delay */
          );
        }));

      case 'config':
        if (method === 'get') {
          resOptions.status = _http_status_codes__WEBPACK_IMPORTED_MODULE_0__.STATUS.OK;
          resOptions.body = this.clone(this.config); // any other HTTP method is assumed to be a config update
        } else {
          var body = this.getJsonBody(reqInfo.req);
          Object.assign(this.config, body);
          this.passThruBackend = undefined; // re-create when needed

          resOptions.status = _http_status_codes__WEBPACK_IMPORTED_MODULE_0__.STATUS.NO_CONTENT;
        }

        break;

      default:
        resOptions = this.createErrorResponseOptions(reqInfo.url, _http_status_codes__WEBPACK_IMPORTED_MODULE_0__.STATUS.INTERNAL_SERVER_ERROR, "Unknown command \"" + command + "\"");
    }

    return this.createResponse$(function () {
      return resOptions;
    }, false
    /* no latency delay */
    );
  };

  BackendService.prototype.createErrorResponseOptions = function (url, status, message) {
    return {
      body: {
        error: "" + message
      },
      url: url,
      headers: this.createHeaders({
        'Content-Type': 'application/json'
      }),
      status: status
    };
  };
  /**
   * Create a cold response Observable from a factory for ResponseOptions
   * @param resOptionsFactory - creates ResponseOptions when observable is subscribed
   * @param withDelay - if true (default), add simulated latency delay from configuration
   */


  BackendService.prototype.createResponse$ = function (resOptionsFactory, withDelay) {
    if (withDelay === void 0) {
      withDelay = true;
    }

    var resOptions$ = this.createResponseOptions$(resOptionsFactory);
    var resp$ = this.createResponse$fromResponseOptions$(resOptions$);
    return withDelay ? this.addDelay(resp$) : resp$;
  };
  /**
   * Create a cold Observable of ResponseOptions.
   * @param resOptionsFactory - creates ResponseOptions when observable is subscribed
   */


  BackendService.prototype.createResponseOptions$ = function (resOptionsFactory) {
    var _this = this;

    return new rxjs__WEBPACK_IMPORTED_MODULE_6__.Observable(function (responseObserver) {
      var resOptions;

      try {
        resOptions = resOptionsFactory();
      } catch (error) {
        var err = error.message || error;
        resOptions = _this.createErrorResponseOptions('', _http_status_codes__WEBPACK_IMPORTED_MODULE_0__.STATUS.INTERNAL_SERVER_ERROR, "" + err);
      }

      var status = resOptions.status;

      try {
        resOptions.statusText = (0,_http_status_codes__WEBPACK_IMPORTED_MODULE_0__.getStatusText)(status);
      } catch (e) {
        /* ignore failure */
      }

      if ((0,_http_status_codes__WEBPACK_IMPORTED_MODULE_0__.isSuccess)(status)) {
        responseObserver.next(resOptions);
        responseObserver.complete();
      } else {
        responseObserver.error(resOptions);
      }

      return function () {}; // unsubscribe function
    });
  };

  BackendService.prototype.delete = function (_a) {
    var collection = _a.collection,
        collectionName = _a.collectionName,
        headers = _a.headers,
        id = _a.id,
        url = _a.url; // tslint:disable-next-line:triple-equals

    if (id == undefined) {
      return this.createErrorResponseOptions(url, _http_status_codes__WEBPACK_IMPORTED_MODULE_0__.STATUS.NOT_FOUND, "Missing \"" + collectionName + "\" id");
    }

    var exists = this.removeById(collection, id);
    return {
      headers: headers,
      status: exists || !this.config.delete404 ? _http_status_codes__WEBPACK_IMPORTED_MODULE_0__.STATUS.NO_CONTENT : _http_status_codes__WEBPACK_IMPORTED_MODULE_0__.STATUS.NOT_FOUND
    };
  };
  /**
   * Find first instance of item in collection by `item.id`
   * @param collection
   * @param id
   */


  BackendService.prototype.findById = function (collection, id) {
    return collection.find(function (item) {
      return item.id === id;
    });
  };
  /**
   * Generate the next available id for item in this collection
   * Use method from `inMemDbService` if it exists and returns a value,
   * else delegates to `genIdDefault`.
   * @param collection - collection of items with `id` key property
   */


  BackendService.prototype.genId = function (collection, collectionName) {
    var genId = this.bind('genId');

    if (genId) {
      var id = genId(collection, collectionName); // tslint:disable-next-line:triple-equals

      if (id != undefined) {
        return id;
      }
    }

    return this.genIdDefault(collection, collectionName);
  };
  /**
   * Default generator of the next available id for item in this collection
   * This default implementation works only for numeric ids.
   * @param collection - collection of items with `id` key property
   * @param collectionName - name of the collection
   */


  BackendService.prototype.genIdDefault = function (collection, collectionName) {
    if (!this.isCollectionIdNumeric(collection, collectionName)) {
      throw new Error("Collection '" + collectionName + "' id type is non-numeric or unknown. Can only generate numeric ids.");
    }

    var maxId = 0;
    collection.reduce(function (prev, item) {
      maxId = Math.max(maxId, typeof item.id === 'number' ? item.id : maxId);
    }, undefined);
    return maxId + 1;
  };

  BackendService.prototype.get = function (_a) {
    var collection = _a.collection,
        collectionName = _a.collectionName,
        headers = _a.headers,
        id = _a.id,
        query = _a.query,
        url = _a.url;
    var data = collection; // tslint:disable-next-line:triple-equals

    if (id != undefined && id !== '') {
      data = this.findById(collection, id);
    } else if (query) {
      data = this.applyQuery(collection, query);
    }

    if (!data) {
      return this.createErrorResponseOptions(url, _http_status_codes__WEBPACK_IMPORTED_MODULE_0__.STATUS.NOT_FOUND, "'" + collectionName + "' with id='" + id + "' not found");
    }

    return {
      body: this.bodify(this.clone(data)),
      headers: headers,
      status: _http_status_codes__WEBPACK_IMPORTED_MODULE_0__.STATUS.OK
    };
  };
  /**
   * Get location info from a url, even on server where `document` is not defined
   */


  BackendService.prototype.getLocation = function (url) {
    if (!url.startsWith('http')) {
      // get the document iff running in browser
      var doc = typeof document === 'undefined' ? undefined : document; // add host info to url before parsing.  Use a fake host when not in browser.

      var base = doc ? doc.location.protocol + '//' + doc.location.host : 'http://fake';
      url = url.startsWith('/') ? base + url : base + '/' + url;
    }

    return (0,_interfaces__WEBPACK_IMPORTED_MODULE_2__.parseUri)(url);
  };

  ;
  /**
   * get or create the function that passes unhandled requests
   * through to the "real" backend.
   */

  BackendService.prototype.getPassThruBackend = function () {
    return this.passThruBackend ? this.passThruBackend : this.passThruBackend = this.createPassThruBackend();
  };
  /**
   * Get utility methods from this service instance.
   * Useful within an HTTP method override
   */


  BackendService.prototype.getRequestInfoUtils = function () {
    var _this = this;

    return {
      createResponse$: this.createResponse$.bind(this),
      findById: this.findById.bind(this),
      isCollectionIdNumeric: this.isCollectionIdNumeric.bind(this),
      getConfig: function () {
        return _this.config;
      },
      getDb: function () {
        return _this.db;
      },
      getJsonBody: this.getJsonBody.bind(this),
      getLocation: this.getLocation.bind(this),
      getPassThruBackend: this.getPassThruBackend.bind(this),
      parseRequestUrl: this.parseRequestUrl.bind(this)
    };
  };

  BackendService.prototype.indexOf = function (collection, id) {
    return collection.findIndex(function (item) {
      return item.id === id;
    });
  };
  /** Parse the id as a number. Return original value if not a number. */


  BackendService.prototype.parseId = function (collection, collectionName, id) {
    if (!this.isCollectionIdNumeric(collection, collectionName)) {
      // Can't confirm that `id` is a numeric type; don't parse as a number
      // or else `'42'` -> `42` and _get by id_ fails.
      return id;
    }

    var idNum = parseFloat(id);
    return isNaN(idNum) ? id : idNum;
  };
  /**
   * return true if can determine that the collection's `item.id` is a number
   * This implementation can't tell if the collection is empty so it assumes NO
   * */


  BackendService.prototype.isCollectionIdNumeric = function (collection, collectionName) {
    // collectionName not used now but override might maintain collection type information
    // so that it could know the type of the `id` even when the collection is empty.
    return !!(collection && collection[0]) && typeof collection[0].id === 'number';
  };
  /**
   * Parses the request URL into a `ParsedRequestUrl` object.
   * Parsing depends upon certain values of `config`: `apiBase`, `host`, and `urlRoot`.
   *
   * Configuring the `apiBase` yields the most interesting changes to `parseRequestUrl` behavior:
   *   When apiBase=undefined and url='http://localhost/api/collection/42'
   *     {base: 'api/', collectionName: 'collection', id: '42', ...}
   *   When apiBase='some/api/root/' and url='http://localhost/some/api/root/collection'
   *     {base: 'some/api/root/', collectionName: 'collection', id: undefined, ...}
   *   When apiBase='/' and url='http://localhost/collection'
   *     {base: '/', collectionName: 'collection', id: undefined, ...}
   *
   * The actual api base segment values are ignored. Only the number of segments matters.
   * The following api base strings are considered identical: 'a/b' ~ 'some/api/' ~ `two/segments'
   *
   * To replace this default method, assign your alternative to your InMemDbService['parseRequestUrl']
   */


  BackendService.prototype.parseRequestUrl = function (url) {
    try {
      var loc = this.getLocation(url);
      var drop = this.config.rootPath.length;
      var urlRoot = '';

      if (loc.host !== this.config.host) {
        // url for a server on a different host!
        // assume it's collection is actually here too.
        drop = 1; // the leading slash

        urlRoot = loc.protocol + '//' + loc.host + '/';
      }

      var path = loc.path.substring(drop);
      var pathSegments = path.split('/');
      var segmentIx = 0; // apiBase: the front part of the path devoted to getting to the api route
      // Assumes first path segment if no config.apiBase
      // else ignores as many path segments as are in config.apiBase
      // Does NOT care what the api base chars actually are.

      var apiBase = void 0; // tslint:disable-next-line:triple-equals

      if (this.config.apiBase == undefined) {
        apiBase = pathSegments[segmentIx++];
      } else {
        apiBase = (0,_interfaces__WEBPACK_IMPORTED_MODULE_2__.removeTrailingSlash)(this.config.apiBase.trim());

        if (apiBase) {
          segmentIx = apiBase.split('/').length;
        } else {
          segmentIx = 0; // no api base at all; unwise but allowed.
        }
      }

      apiBase += '/';
      var collectionName = pathSegments[segmentIx++]; // ignore anything after a '.' (e.g.,the "json" in "customers.json")

      collectionName = collectionName && collectionName.split('.')[0];
      var id = pathSegments[segmentIx++];
      var query = this.createQueryMap(loc.query);
      var resourceUrl = urlRoot + apiBase + collectionName + '/';
      return {
        apiBase: apiBase,
        collectionName: collectionName,
        id: id,
        query: query,
        resourceUrl: resourceUrl
      };
    } catch (err) {
      var msg = "unable to parse url '" + url + "'; original error: " + err.message;
      throw new Error(msg);
    }
  }; // Create entity
  // Can update an existing entity too if post409 is false.


  BackendService.prototype.post = function (_a) {
    var collection = _a.collection,
        collectionName = _a.collectionName,
        headers = _a.headers,
        id = _a.id,
        req = _a.req,
        resourceUrl = _a.resourceUrl,
        url = _a.url;
    var item = this.clone(this.getJsonBody(req)); // tslint:disable-next-line:triple-equals

    if (item.id == undefined) {
      try {
        item.id = id || this.genId(collection, collectionName);
      } catch (err) {
        var emsg = err.message || '';

        if (/id type is non-numeric/.test(emsg)) {
          return this.createErrorResponseOptions(url, _http_status_codes__WEBPACK_IMPORTED_MODULE_0__.STATUS.UNPROCESSABLE_ENTRY, emsg);
        } else {
          console.error(err);
          return this.createErrorResponseOptions(url, _http_status_codes__WEBPACK_IMPORTED_MODULE_0__.STATUS.INTERNAL_SERVER_ERROR, "Failed to generate new id for '" + collectionName + "'");
        }
      }
    }

    if (id && id !== item.id) {
      return this.createErrorResponseOptions(url, _http_status_codes__WEBPACK_IMPORTED_MODULE_0__.STATUS.BAD_REQUEST, "Request id does not match item.id");
    } else {
      id = item.id;
    }

    var existingIx = this.indexOf(collection, id);
    var body = this.bodify(item);

    if (existingIx === -1) {
      collection.push(item);
      headers.set('Location', resourceUrl + '/' + id);
      return {
        headers: headers,
        body: body,
        status: _http_status_codes__WEBPACK_IMPORTED_MODULE_0__.STATUS.CREATED
      };
    } else if (this.config.post409) {
      return this.createErrorResponseOptions(url, _http_status_codes__WEBPACK_IMPORTED_MODULE_0__.STATUS.CONFLICT, "'" + collectionName + "' item with id='" + id + " exists and may not be updated with POST; use PUT instead.");
    } else {
      collection[existingIx] = item;
      return this.config.post204 ? {
        headers: headers,
        status: _http_status_codes__WEBPACK_IMPORTED_MODULE_0__.STATUS.NO_CONTENT
      } : // successful; no content
      {
        headers: headers,
        body: body,
        status: _http_status_codes__WEBPACK_IMPORTED_MODULE_0__.STATUS.OK
      }; // successful; return entity
    }
  }; // Update existing entity
  // Can create an entity too if put404 is false.


  BackendService.prototype.put = function (_a) {
    var collection = _a.collection,
        collectionName = _a.collectionName,
        headers = _a.headers,
        id = _a.id,
        req = _a.req,
        url = _a.url;
    var item = this.clone(this.getJsonBody(req)); // tslint:disable-next-line:triple-equals

    if (item.id == undefined) {
      return this.createErrorResponseOptions(url, _http_status_codes__WEBPACK_IMPORTED_MODULE_0__.STATUS.NOT_FOUND, "Missing '" + collectionName + "' id");
    }

    if (id && id !== item.id) {
      return this.createErrorResponseOptions(url, _http_status_codes__WEBPACK_IMPORTED_MODULE_0__.STATUS.BAD_REQUEST, "Request for '" + collectionName + "' id does not match item.id");
    } else {
      id = item.id;
    }

    var existingIx = this.indexOf(collection, id);
    var body = this.bodify(item);

    if (existingIx > -1) {
      collection[existingIx] = item;
      return this.config.put204 ? {
        headers: headers,
        status: _http_status_codes__WEBPACK_IMPORTED_MODULE_0__.STATUS.NO_CONTENT
      } : // successful; no content
      {
        headers: headers,
        body: body,
        status: _http_status_codes__WEBPACK_IMPORTED_MODULE_0__.STATUS.OK
      }; // successful; return entity
    } else if (this.config.put404) {
      // item to update not found; use POST to create new item for this id.
      return this.createErrorResponseOptions(url, _http_status_codes__WEBPACK_IMPORTED_MODULE_0__.STATUS.NOT_FOUND, "'" + collectionName + "' item with id='" + id + " not found and may not be created with PUT; use POST instead.");
    } else {
      // create new item for id not found
      collection.push(item);
      return {
        headers: headers,
        body: body,
        status: _http_status_codes__WEBPACK_IMPORTED_MODULE_0__.STATUS.CREATED
      };
    }
  };

  BackendService.prototype.removeById = function (collection, id) {
    var ix = this.indexOf(collection, id);

    if (ix > -1) {
      collection.splice(ix, 1);
      return true;
    }

    return false;
  };
  /**
   * Tell your in-mem "database" to reset.
   * returns Observable of the database because resetting it could be async
   */


  BackendService.prototype.resetDb = function (reqInfo) {
    var _this = this;

    this.dbReadySubject.next(false);
    var db = this.inMemDbService.createDb(reqInfo);
    var db$ = db instanceof rxjs__WEBPACK_IMPORTED_MODULE_6__.Observable ? db : typeof db.then === 'function' ? (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(db) : (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(db);
    db$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)()).subscribe(function (d) {
      _this.db = d;

      _this.dbReadySubject.next(true);
    });
    return this.dbReady;
  };

  return BackendService;
}();



/***/ }),

/***/ 78977:
/*!*******************************************************************************!*\
  !*** ./node_modules/angular-in-memory-web-api/__ivy_ngcc__/delay-response.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "delayResponse": () => (/* binding */ delayResponse)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 12378);

// Replaces use of RxJS delay. See v0.5.4.
/** adds specified delay (in ms) to both next and error channels of the response observable */
function delayResponse(response$, delayMs) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(function (observer) {
        var completePending = false;
        var nextPending = false;
        var subscription = response$.subscribe(function (value) {
            nextPending = true;
            setTimeout(function () {
                observer.next(value);
                if (completePending) {
                    observer.complete();
                }
            }, delayMs);
        }, function (error) { return setTimeout(function () { return observer.error(error); }, delayMs); }, function () {
            completePending = true;
            if (!nextPending) {
                observer.complete();
            }
        });
        return function () {
            return subscription.unsubscribe();
        };
    });
}


/***/ }),

/***/ 58159:
/*!********************************************************************************************!*\
  !*** ./node_modules/angular-in-memory-web-api/__ivy_ngcc__/http-client-backend.service.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpClientBackendService": () => (/* binding */ HttpClientBackendService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interfaces */ 33882);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _http_status_codes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http-status-codes */ 20006);
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./backend.service */ 10342);



var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






/**
 * For Angular `HttpClient` simulate the behavior of a RESTy web api
 * backed by the simple in-memory data store provided by the injected `InMemoryDbService`.
 * Conforms mostly to behavior described here:
 * http://www.restapitutorial.com/lessons/httpmethods.html
 *
 * ### Usage
 *
 * Create an in-memory data store class that implements `InMemoryDbService`.
 * Call `config` static method with this service class and optional configuration object:
 * ```
 * // other imports
 * import { HttpClientModule } from '@angular/common/http';
 * import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
 *
 * import { InMemHeroService, inMemConfig } from '../api/in-memory-hero.service';
 * @NgModule({
 *  imports: [
 *    HttpModule,
 *    HttpClientInMemoryWebApiModule.forRoot(InMemHeroService, inMemConfig),
 *    ...
 *  ],
 *  ...
 * })
 * export class AppModule { ... }
 * ```
 */
var HttpClientBackendService = /** @class */ (function (_super) {
    __extends(HttpClientBackendService, _super);
    function HttpClientBackendService(inMemDbService, config, xhrFactory) {
        var _this = _super.call(this, inMemDbService, config) || this;
        _this.xhrFactory = xhrFactory;
        return _this;
    }
    HttpClientBackendService.prototype.handle = function (req) {
        try {
            return this.handleRequest(req);
        }
        catch (error) {
            var err = error.message || error;
            var resOptions_1 = this.createErrorResponseOptions(req.url, _http_status_codes__WEBPACK_IMPORTED_MODULE_1__.STATUS.INTERNAL_SERVER_ERROR, "" + err);
            return this.createResponse$(function () { return resOptions_1; });
        }
    };
    ////  protected overrides /////
    HttpClientBackendService.prototype.getJsonBody = function (req) {
        return req.body;
    };
    HttpClientBackendService.prototype.getRequestMethod = function (req) {
        return (req.method || 'get').toLowerCase();
    };
    HttpClientBackendService.prototype.createHeaders = function (headers) {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders(headers);
    };
    HttpClientBackendService.prototype.createQueryMap = function (search) {
        var map = new Map();
        if (search) {
            var params_1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams({ fromString: search });
            params_1.keys().forEach(function (p) { return map.set(p, params_1.getAll(p)); });
        }
        return map;
    };
    HttpClientBackendService.prototype.createResponse$fromResponseOptions$ = function (resOptions$) {
        return resOptions$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(function (opts) { return new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse(opts); }));
    };
    HttpClientBackendService.prototype.createPassThruBackend = function () {
        try {
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpXhrBackend(this.xhrFactory);
        }
        catch (ex) {
            ex.message = 'Cannot create passThru404 backend; ' + (ex.message || '');
            throw ex;
        }
    };
    HttpClientBackendService = __decorate([ __param(1, (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Inject)(_interfaces__WEBPACK_IMPORTED_MODULE_0__.InMemoryBackendConfig)), __param(1, (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Optional)()),
        __metadata("design:paramtypes", [_interfaces__WEBPACK_IMPORTED_MODULE_0__.InMemoryDbService,
            _interfaces__WEBPACK_IMPORTED_MODULE_0__.InMemoryBackendConfigArgs,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.XhrFactory])
    ], HttpClientBackendService);
HttpClientBackendService.ɵfac = function HttpClientBackendService_Factory(t) { return new (t || HttpClientBackendService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_interfaces__WEBPACK_IMPORTED_MODULE_0__.InMemoryDbService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_interfaces__WEBPACK_IMPORTED_MODULE_0__.InMemoryBackendConfig, 8), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.XhrFactory)); };
HttpClientBackendService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: HttpClientBackendService, factory: function (t) { return HttpClientBackendService.ɵfac(t); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](HttpClientBackendService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable
    }], function () { return [{ type: _interfaces__WEBPACK_IMPORTED_MODULE_0__.InMemoryDbService }, { type: _interfaces__WEBPACK_IMPORTED_MODULE_0__.InMemoryBackendConfigArgs, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Inject,
                args: [_interfaces__WEBPACK_IMPORTED_MODULE_0__.InMemoryBackendConfig]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Optional
            }] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.XhrFactory }]; }, null); })();
    return HttpClientBackendService;
}(_backend_service__WEBPACK_IMPORTED_MODULE_2__.BackendService));




/***/ }),

/***/ 18066:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/angular-in-memory-web-api/__ivy_ngcc__/http-client-in-memory-web-api.module.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "httpClientInMemBackendServiceFactory": () => (/* binding */ httpClientInMemBackendServiceFactory),
/* harmony export */   "HttpClientInMemoryWebApiModule": () => (/* binding */ HttpClientInMemoryWebApiModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interfaces */ 33882);
/* harmony import */ var _http_client_backend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http-client-backend.service */ 58159);
////// HttpClient-Only version ////

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Internal - Creates the in-mem backend for the HttpClient module
// AoT requires factory to be exported
function httpClientInMemBackendServiceFactory(dbService, options, xhrFactory) {
    var backend = new _http_client_backend_service__WEBPACK_IMPORTED_MODULE_1__.HttpClientBackendService(dbService, options, xhrFactory);
    return backend;
}
var HttpClientInMemoryWebApiModule = /** @class */ (function () {
    function HttpClientInMemoryWebApiModule() {
    }
    HttpClientInMemoryWebApiModule_1 = HttpClientInMemoryWebApiModule;
    /**
    *  Redirect the Angular `HttpClient` XHR calls
    *  to in-memory data store that implements `InMemoryDbService`.
    *  with class that implements InMemoryDbService and creates an in-memory database.
    *
    *  Usually imported in the root application module.
    *  Can import in a lazy feature module too, which will shadow modules loaded earlier
    *
    * @param {Type} dbCreator - Class that creates seed data for in-memory database. Must implement InMemoryDbService.
    * @param {InMemoryBackendConfigArgs} [options]
    *
    * @example
    * HttpInMemoryWebApiModule.forRoot(dbCreator);
    * HttpInMemoryWebApiModule.forRoot(dbCreator, {useValue: {delay:600}});
    */
    HttpClientInMemoryWebApiModule.forRoot = function (dbCreator, options) {
        return {
            ngModule: HttpClientInMemoryWebApiModule_1,
            providers: [
                { provide: _interfaces__WEBPACK_IMPORTED_MODULE_0__.InMemoryDbService, useClass: dbCreator },
                { provide: _interfaces__WEBPACK_IMPORTED_MODULE_0__.InMemoryBackendConfig, useValue: options },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpBackend,
                    useFactory: httpClientInMemBackendServiceFactory,
                    deps: [_interfaces__WEBPACK_IMPORTED_MODULE_0__.InMemoryDbService, _interfaces__WEBPACK_IMPORTED_MODULE_0__.InMemoryBackendConfig, _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.XhrFactory] }
            ]
        };
    };
    /**
   *
   * Enable and configure the in-memory web api in a lazy-loaded feature module.
   * Same as `forRoot`.
   * This is a feel-good method so you can follow the Angular style guide for lazy-loaded modules.
   */
    HttpClientInMemoryWebApiModule.forFeature = function (dbCreator, options) {
        return HttpClientInMemoryWebApiModule_1.forRoot(dbCreator, options);
    };
    var HttpClientInMemoryWebApiModule_1;
HttpClientInMemoryWebApiModule.ɵfac = function HttpClientInMemoryWebApiModule_Factory(t) { return new (t || HttpClientInMemoryWebApiModule)(); };
HttpClientInMemoryWebApiModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: HttpClientInMemoryWebApiModule });
HttpClientInMemoryWebApiModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({});
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](HttpClientInMemoryWebApiModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule,
        args: [{}]
    }], function () { return []; }, null); })();
    return HttpClientInMemoryWebApiModule;
}());




/***/ }),

/***/ 20006:
/*!**********************************************************************************!*\
  !*** ./node_modules/angular-in-memory-web-api/__ivy_ngcc__/http-status-codes.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STATUS": () => (/* binding */ STATUS),
/* harmony export */   "STATUS_CODE_INFO": () => (/* binding */ STATUS_CODE_INFO),
/* harmony export */   "getStatusText": () => (/* binding */ getStatusText),
/* harmony export */   "isSuccess": () => (/* binding */ isSuccess)
/* harmony export */ });
var STATUS = {
    CONTINUE: 100,
    SWITCHING_PROTOCOLS: 101,
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NON_AUTHORITATIVE_INFORMATION: 203,
    NO_CONTENT: 204,
    RESET_CONTENT: 205,
    PARTIAL_CONTENT: 206,
    MULTIPLE_CHOICES: 300,
    MOVED_PERMANTENTLY: 301,
    FOUND: 302,
    SEE_OTHER: 303,
    NOT_MODIFIED: 304,
    USE_PROXY: 305,
    TEMPORARY_REDIRECT: 307,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    PAYMENT_REQUIRED: 402,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    NOT_ACCEPTABLE: 406,
    PROXY_AUTHENTICATION_REQUIRED: 407,
    REQUEST_TIMEOUT: 408,
    CONFLICT: 409,
    GONE: 410,
    LENGTH_REQUIRED: 411,
    PRECONDITION_FAILED: 412,
    PAYLOAD_TO_LARGE: 413,
    URI_TOO_LONG: 414,
    UNSUPPORTED_MEDIA_TYPE: 415,
    RANGE_NOT_SATISFIABLE: 416,
    EXPECTATION_FAILED: 417,
    IM_A_TEAPOT: 418,
    UPGRADE_REQUIRED: 426,
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504,
    HTTP_VERSION_NOT_SUPPORTED: 505,
    PROCESSING: 102,
    MULTI_STATUS: 207,
    IM_USED: 226,
    PERMANENT_REDIRECT: 308,
    UNPROCESSABLE_ENTRY: 422,
    LOCKED: 423,
    FAILED_DEPENDENCY: 424,
    PRECONDITION_REQUIRED: 428,
    TOO_MANY_REQUESTS: 429,
    REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
    UNAVAILABLE_FOR_LEGAL_REASONS: 451,
    VARIANT_ALSO_NEGOTIATES: 506,
    INSUFFICIENT_STORAGE: 507,
    NETWORK_AUTHENTICATION_REQUIRED: 511
};
/*tslint:disable:quotemark max-line-length one-line */
var STATUS_CODE_INFO = {
    '100': {
        'code': 100,
        'text': 'Continue',
        'description': '\"The initial part of a request has been received and has not yet been rejected by the server.\"',
        'spec_title': 'RFC7231#6.2.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.2.1'
    },
    '101': {
        'code': 101,
        'text': 'Switching Protocols',
        'description': '\"The server understands and is willing to comply with the client\'s request, via the Upgrade header field, for a change in the application protocol being used on this connection.\"',
        'spec_title': 'RFC7231#6.2.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.2.2'
    },
    '200': {
        'code': 200,
        'text': 'OK',
        'description': '\"The request has succeeded.\"',
        'spec_title': 'RFC7231#6.3.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.1'
    },
    '201': {
        'code': 201,
        'text': 'Created',
        'description': '\"The request has been fulfilled and has resulted in one or more new resources being created.\"',
        'spec_title': 'RFC7231#6.3.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.2'
    },
    '202': {
        'code': 202,
        'text': 'Accepted',
        'description': '\"The request has been accepted for processing, but the processing has not been completed.\"',
        'spec_title': 'RFC7231#6.3.3',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.3'
    },
    '203': {
        'code': 203,
        'text': 'Non-Authoritative Information',
        'description': '\"The request was successful but the enclosed payload has been modified from that of the origin server\'s 200 (OK) response by a transforming proxy.\"',
        'spec_title': 'RFC7231#6.3.4',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.4'
    },
    '204': {
        'code': 204,
        'text': 'No Content',
        'description': '\"The server has successfully fulfilled the request and that there is no additional content to send in the response payload body.\"',
        'spec_title': 'RFC7231#6.3.5',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.5'
    },
    '205': {
        'code': 205,
        'text': 'Reset Content',
        'description': '\"The server has fulfilled the request and desires that the user agent reset the \"document view\", which caused the request to be sent, to its original state as received from the origin server.\"',
        'spec_title': 'RFC7231#6.3.6',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.6'
    },
    '206': {
        'code': 206,
        'text': 'Partial Content',
        'description': '\"The server is successfully fulfilling a range request for the target resource by transferring one or more parts of the selected representation that correspond to the satisfiable ranges found in the requests\'s Range header field.\"',
        'spec_title': 'RFC7233#4.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7233#section-4.1'
    },
    '300': {
        'code': 300,
        'text': 'Multiple Choices',
        'description': '\"The target resource has more than one representation, each with its own more specific identifier, and information about the alternatives is being provided so that the user (or user agent) can select a preferred representation by redirecting its request to one or more of those identifiers.\"',
        'spec_title': 'RFC7231#6.4.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.1'
    },
    '301': {
        'code': 301,
        'text': 'Moved Permanently',
        'description': '\"The target resource has been assigned a new permanent URI and any future references to this resource ought to use one of the enclosed URIs.\"',
        'spec_title': 'RFC7231#6.4.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.2'
    },
    '302': {
        'code': 302,
        'text': 'Found',
        'description': '\"The target resource resides temporarily under a different URI.\"',
        'spec_title': 'RFC7231#6.4.3',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.3'
    },
    '303': {
        'code': 303,
        'text': 'See Other',
        'description': '\"The server is redirecting the user agent to a different resource, as indicated by a URI in the Location header field, that is intended to provide an indirect response to the original request.\"',
        'spec_title': 'RFC7231#6.4.4',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.4'
    },
    '304': {
        'code': 304,
        'text': 'Not Modified',
        'description': '\"A conditional GET request has been received and would have resulted in a 200 (OK) response if it were not for the fact that the condition has evaluated to false.\"',
        'spec_title': 'RFC7232#4.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7232#section-4.1'
    },
    '305': {
        'code': 305,
        'text': 'Use Proxy',
        'description': '*deprecated*',
        'spec_title': 'RFC7231#6.4.5',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.5'
    },
    '307': {
        'code': 307,
        'text': 'Temporary Redirect',
        'description': '\"The target resource resides temporarily under a different URI and the user agent MUST NOT change the request method if it performs an automatic redirection to that URI.\"',
        'spec_title': 'RFC7231#6.4.7',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.7'
    },
    '400': {
        'code': 400,
        'text': 'Bad Request',
        'description': '\"The server cannot or will not process the request because the received syntax is invalid, nonsensical, or exceeds some limitation on what the server is willing to process.\"',
        'spec_title': 'RFC7231#6.5.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.1'
    },
    '401': {
        'code': 401,
        'text': 'Unauthorized',
        'description': '\"The request has not been applied because it lacks valid authentication credentials for the target resource.\"',
        'spec_title': 'RFC7235#6.3.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7235#section-3.1'
    },
    '402': {
        'code': 402,
        'text': 'Payment Required',
        'description': '*reserved*',
        'spec_title': 'RFC7231#6.5.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.2'
    },
    '403': {
        'code': 403,
        'text': 'Forbidden',
        'description': '\"The server understood the request but refuses to authorize it.\"',
        'spec_title': 'RFC7231#6.5.3',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.3'
    },
    '404': {
        'code': 404,
        'text': 'Not Found',
        'description': '\"The origin server did not find a current representation for the target resource or is not willing to disclose that one exists.\"',
        'spec_title': 'RFC7231#6.5.4',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.4'
    },
    '405': {
        'code': 405,
        'text': 'Method Not Allowed',
        'description': '\"The method specified in the request-line is known by the origin server but not supported by the target resource.\"',
        'spec_title': 'RFC7231#6.5.5',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.5'
    },
    '406': {
        'code': 406,
        'text': 'Not Acceptable',
        'description': '\"The target resource does not have a current representation that would be acceptable to the user agent, according to the proactive negotiation header fields received in the request, and the server is unwilling to supply a default representation.\"',
        'spec_title': 'RFC7231#6.5.6',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.6'
    },
    '407': {
        'code': 407,
        'text': 'Proxy Authentication Required',
        'description': '\"The client needs to authenticate itself in order to use a proxy.\"',
        'spec_title': 'RFC7231#6.3.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.2'
    },
    '408': {
        'code': 408,
        'text': 'Request Timeout',
        'description': '\"The server did not receive a complete request message within the time that it was prepared to wait.\"',
        'spec_title': 'RFC7231#6.5.7',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.7'
    },
    '409': {
        'code': 409,
        'text': 'Conflict',
        'description': '\"The request could not be completed due to a conflict with the current state of the resource.\"',
        'spec_title': 'RFC7231#6.5.8',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.8'
    },
    '410': {
        'code': 410,
        'text': 'Gone',
        'description': '\"Access to the target resource is no longer available at the origin server and that this condition is likely to be permanent.\"',
        'spec_title': 'RFC7231#6.5.9',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.9'
    },
    '411': {
        'code': 411,
        'text': 'Length Required',
        'description': '\"The server refuses to accept the request without a defined Content-Length.\"',
        'spec_title': 'RFC7231#6.5.10',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.10'
    },
    '412': {
        'code': 412,
        'text': 'Precondition Failed',
        'description': '\"One or more preconditions given in the request header fields evaluated to false when tested on the server.\"',
        'spec_title': 'RFC7232#4.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7232#section-4.2'
    },
    '413': {
        'code': 413,
        'text': 'Payload Too Large',
        'description': '\"The server is refusing to process a request because the request payload is larger than the server is willing or able to process.\"',
        'spec_title': 'RFC7231#6.5.11',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.11'
    },
    '414': {
        'code': 414,
        'text': 'URI Too Long',
        'description': '\"The server is refusing to service the request because the request-target is longer than the server is willing to interpret.\"',
        'spec_title': 'RFC7231#6.5.12',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.12'
    },
    '415': {
        'code': 415,
        'text': 'Unsupported Media Type',
        'description': '\"The origin server is refusing to service the request because the payload is in a format not supported by the target resource for this method.\"',
        'spec_title': 'RFC7231#6.5.13',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.13'
    },
    '416': {
        'code': 416,
        'text': 'Range Not Satisfiable',
        'description': '\"None of the ranges in the request\'s Range header field overlap the current extent of the selected resource or that the set of ranges requested has been rejected due to invalid ranges or an excessive request of small or overlapping ranges.\"',
        'spec_title': 'RFC7233#4.4',
        'spec_href': 'http://tools.ietf.org/html/rfc7233#section-4.4'
    },
    '417': {
        'code': 417,
        'text': 'Expectation Failed',
        'description': '\"The expectation given in the request\'s Expect header field could not be met by at least one of the inbound servers.\"',
        'spec_title': 'RFC7231#6.5.14',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.14'
    },
    '418': {
        'code': 418,
        'text': 'I\'m a teapot',
        'description': '\"1988 April Fools Joke. Returned by tea pots requested to brew coffee.\"',
        'spec_title': 'RFC 2324',
        'spec_href': 'https://tools.ietf.org/html/rfc2324'
    },
    '426': {
        'code': 426,
        'text': 'Upgrade Required',
        'description': '\"The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.\"',
        'spec_title': 'RFC7231#6.5.15',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.15'
    },
    '500': {
        'code': 500,
        'text': 'Internal Server Error',
        'description': '\"The server encountered an unexpected condition that prevented it from fulfilling the request.\"',
        'spec_title': 'RFC7231#6.6.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.1'
    },
    '501': {
        'code': 501,
        'text': 'Not Implemented',
        'description': '\"The server does not support the functionality required to fulfill the request.\"',
        'spec_title': 'RFC7231#6.6.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.2'
    },
    '502': {
        'code': 502,
        'text': 'Bad Gateway',
        'description': '\"The server, while acting as a gateway or proxy, received an invalid response from an inbound server it accessed while attempting to fulfill the request.\"',
        'spec_title': 'RFC7231#6.6.3',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.3'
    },
    '503': {
        'code': 503,
        'text': 'Service Unavailable',
        'description': '\"The server is currently unable to handle the request due to a temporary overload or scheduled maintenance, which will likely be alleviated after some delay.\"',
        'spec_title': 'RFC7231#6.6.4',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.4'
    },
    '504': {
        'code': 504,
        'text': 'Gateway Time-out',
        'description': '\"The server, while acting as a gateway or proxy, did not receive a timely response from an upstream server it needed to access in order to complete the request.\"',
        'spec_title': 'RFC7231#6.6.5',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.5'
    },
    '505': {
        'code': 505,
        'text': 'HTTP Version Not Supported',
        'description': '\"The server does not support, or refuses to support, the protocol version that was used in the request message.\"',
        'spec_title': 'RFC7231#6.6.6',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.6'
    },
    '102': {
        'code': 102,
        'text': 'Processing',
        'description': '\"An interim response to inform the client that the server has accepted the complete request, but has not yet completed it.\"',
        'spec_title': 'RFC5218#10.1',
        'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.1'
    },
    '207': {
        'code': 207,
        'text': 'Multi-Status',
        'description': '\"Status for multiple independent operations.\"',
        'spec_title': 'RFC5218#10.2',
        'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.2'
    },
    '226': {
        'code': 226,
        'text': 'IM Used',
        'description': '\"The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.\"',
        'spec_title': 'RFC3229#10.4.1',
        'spec_href': 'http://tools.ietf.org/html/rfc3229#section-10.4.1'
    },
    '308': {
        'code': 308,
        'text': 'Permanent Redirect',
        'description': '\"The target resource has been assigned a new permanent URI and any future references to this resource SHOULD use one of the returned URIs. [...] This status code is similar to 301 Moved Permanently (Section 7.3.2 of rfc7231), except that it does not allow rewriting the request method from POST to GET.\"',
        'spec_title': 'RFC7238',
        'spec_href': 'http://tools.ietf.org/html/rfc7238'
    },
    '422': {
        'code': 422,
        'text': 'Unprocessable Entity',
        'description': '\"The server understands the content type of the request entity (hence a 415(Unsupported Media Type) status code is inappropriate), and the syntax of the request entity is correct (thus a 400 (Bad Request) status code is inappropriate) but was unable to process the contained instructions.\"',
        'spec_title': 'RFC5218#10.3',
        'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.3'
    },
    '423': {
        'code': 423,
        'text': 'Locked',
        'description': '\"The source or destination resource of a method is locked.\"',
        'spec_title': 'RFC5218#10.4',
        'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.4'
    },
    '424': {
        'code': 424,
        'text': 'Failed Dependency',
        'description': '\"The method could not be performed on the resource because the requested action depended on another action and that action failed.\"',
        'spec_title': 'RFC5218#10.5',
        'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.5'
    },
    '428': {
        'code': 428,
        'text': 'Precondition Required',
        'description': '\"The origin server requires the request to be conditional.\"',
        'spec_title': 'RFC6585#3',
        'spec_href': 'http://tools.ietf.org/html/rfc6585#section-3'
    },
    '429': {
        'code': 429,
        'text': 'Too Many Requests',
        'description': '\"The user has sent too many requests in a given amount of time (\"rate limiting\").\"',
        'spec_title': 'RFC6585#4',
        'spec_href': 'http://tools.ietf.org/html/rfc6585#section-4'
    },
    '431': {
        'code': 431,
        'text': 'Request Header Fields Too Large',
        'description': '\"The server is unwilling to process the request because its header fields are too large.\"',
        'spec_title': 'RFC6585#5',
        'spec_href': 'http://tools.ietf.org/html/rfc6585#section-5'
    },
    '451': {
        'code': 451,
        'text': 'Unavailable For Legal Reasons',
        'description': '\"The server is denying access to the resource in response to a legal demand.\"',
        'spec_title': 'draft-ietf-httpbis-legally-restricted-status',
        'spec_href': 'http://tools.ietf.org/html/draft-ietf-httpbis-legally-restricted-status'
    },
    '506': {
        'code': 506,
        'text': 'Variant Also Negotiates',
        'description': '\"The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.\"',
        'spec_title': 'RFC2295#8.1',
        'spec_href': 'http://tools.ietf.org/html/rfc2295#section-8.1'
    },
    '507': {
        'code': 507,
        'text': 'Insufficient Storage',
        'description': '\The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.\"',
        'spec_title': 'RFC5218#10.6',
        'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.6'
    },
    '511': {
        'code': 511,
        'text': 'Network Authentication Required',
        'description': '\"The client needs to authenticate to gain network access.\"',
        'spec_title': 'RFC6585#6',
        'spec_href': 'http://tools.ietf.org/html/rfc6585#section-6'
    }
};
/**
 * get the status text from StatusCode
 */
function getStatusText(status) {
    return STATUS_CODE_INFO[status].text || 'Unknown Status';
}
/**
 * Returns true if the the Http Status Code is 200-299 (success)
 */
function isSuccess(status) { return status >= 200 && status < 300; }
;


/***/ }),

/***/ 56018:
/*!*****************************************************************************************!*\
  !*** ./node_modules/angular-in-memory-web-api/__ivy_ngcc__/in-memory-web-api.module.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InMemoryWebApiModule": () => (/* binding */ InMemoryWebApiModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interfaces */ 33882);
/* harmony import */ var _http_client_in_memory_web_api_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http-client-in-memory-web-api.module */ 18066);
////// For apps with both Http and HttpClient ////

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var InMemoryWebApiModule = /** @class */ (function () {
    function InMemoryWebApiModule() {
    }
    InMemoryWebApiModule_1 = InMemoryWebApiModule;
    /**
    *  Redirect BOTH Angular `Http` and `HttpClient` XHR calls
    *  to in-memory data store that implements `InMemoryDbService`.
    *  with class that implements InMemoryDbService and creates an in-memory database.
    *
    *  Usually imported in the root application module.
    *  Can import in a lazy feature module too, which will shadow modules loaded earlier
    *
    * @param {Type} dbCreator - Class that creates seed data for in-memory database. Must implement InMemoryDbService.
    * @param {InMemoryBackendConfigArgs} [options]
    *
    * @example
    * InMemoryWebApiModule.forRoot(dbCreator);
    * InMemoryWebApiModule.forRoot(dbCreator, {useValue: {delay:600}});
    */
    InMemoryWebApiModule.forRoot = function (dbCreator, options) {
        return {
            ngModule: InMemoryWebApiModule_1,
            providers: [
                { provide: _interfaces__WEBPACK_IMPORTED_MODULE_0__.InMemoryDbService, useClass: dbCreator },
                { provide: _interfaces__WEBPACK_IMPORTED_MODULE_0__.InMemoryBackendConfig, useValue: options },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpBackend,
                    useFactory: _http_client_in_memory_web_api_module__WEBPACK_IMPORTED_MODULE_1__.httpClientInMemBackendServiceFactory,
                    deps: [_interfaces__WEBPACK_IMPORTED_MODULE_0__.InMemoryDbService, _interfaces__WEBPACK_IMPORTED_MODULE_0__.InMemoryBackendConfig, _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.XhrFactory] }
            ]
        };
    };
    /**
     *
     * Enable and configure the in-memory web api in a lazy-loaded feature module.
     * Same as `forRoot`.
     * This is a feel-good method so you can follow the Angular style guide for lazy-loaded modules.
     */
    InMemoryWebApiModule.forFeature = function (dbCreator, options) {
        return InMemoryWebApiModule_1.forRoot(dbCreator, options);
    };
    var InMemoryWebApiModule_1;
InMemoryWebApiModule.ɵfac = function InMemoryWebApiModule_Factory(t) { return new (t || InMemoryWebApiModule)(); };
InMemoryWebApiModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: InMemoryWebApiModule });
InMemoryWebApiModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({});
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](InMemoryWebApiModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule,
        args: [{}]
    }], function () { return []; }, null); })();
    return InMemoryWebApiModule;
}());




/***/ }),

/***/ 31969:
/*!**********************************************************************!*\
  !*** ./node_modules/angular-in-memory-web-api/__ivy_ngcc__/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackendService": () => (/* reexport safe */ _backend_service__WEBPACK_IMPORTED_MODULE_0__.BackendService),
/* harmony export */   "STATUS": () => (/* reexport safe */ _http_status_codes__WEBPACK_IMPORTED_MODULE_1__.STATUS),
/* harmony export */   "STATUS_CODE_INFO": () => (/* reexport safe */ _http_status_codes__WEBPACK_IMPORTED_MODULE_1__.STATUS_CODE_INFO),
/* harmony export */   "getStatusText": () => (/* reexport safe */ _http_status_codes__WEBPACK_IMPORTED_MODULE_1__.getStatusText),
/* harmony export */   "isSuccess": () => (/* reexport safe */ _http_status_codes__WEBPACK_IMPORTED_MODULE_1__.isSuccess),
/* harmony export */   "HttpClientBackendService": () => (/* reexport safe */ _http_client_backend_service__WEBPACK_IMPORTED_MODULE_2__.HttpClientBackendService),
/* harmony export */   "InMemoryWebApiModule": () => (/* reexport safe */ _in_memory_web_api_module__WEBPACK_IMPORTED_MODULE_3__.InMemoryWebApiModule),
/* harmony export */   "HttpClientInMemoryWebApiModule": () => (/* reexport safe */ _http_client_in_memory_web_api_module__WEBPACK_IMPORTED_MODULE_4__.HttpClientInMemoryWebApiModule),
/* harmony export */   "httpClientInMemBackendServiceFactory": () => (/* reexport safe */ _http_client_in_memory_web_api_module__WEBPACK_IMPORTED_MODULE_4__.httpClientInMemBackendServiceFactory),
/* harmony export */   "InMemoryBackendConfig": () => (/* reexport safe */ _interfaces__WEBPACK_IMPORTED_MODULE_5__.InMemoryBackendConfig),
/* harmony export */   "InMemoryBackendConfigArgs": () => (/* reexport safe */ _interfaces__WEBPACK_IMPORTED_MODULE_5__.InMemoryBackendConfigArgs),
/* harmony export */   "InMemoryDbService": () => (/* reexport safe */ _interfaces__WEBPACK_IMPORTED_MODULE_5__.InMemoryDbService),
/* harmony export */   "parseUri": () => (/* reexport safe */ _interfaces__WEBPACK_IMPORTED_MODULE_5__.parseUri),
/* harmony export */   "removeTrailingSlash": () => (/* reexport safe */ _interfaces__WEBPACK_IMPORTED_MODULE_5__.removeTrailingSlash)
/* harmony export */ });
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./backend.service */ 10342);
/* harmony import */ var _http_status_codes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http-status-codes */ 20006);
/* harmony import */ var _http_client_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http-client-backend.service */ 58159);
/* harmony import */ var _in_memory_web_api_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./in-memory-web-api.module */ 56018);
/* harmony import */ var _http_client_in_memory_web_api_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http-client-in-memory-web-api.module */ 18066);
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interfaces */ 33882);









/***/ }),

/***/ 33882:
/*!***************************************************************************!*\
  !*** ./node_modules/angular-in-memory-web-api/__ivy_ngcc__/interfaces.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InMemoryDbService": () => (/* binding */ InMemoryDbService),
/* harmony export */   "InMemoryBackendConfigArgs": () => (/* binding */ InMemoryBackendConfigArgs),
/* harmony export */   "InMemoryBackendConfig": () => (/* binding */ InMemoryBackendConfig),
/* harmony export */   "parseUri": () => (/* binding */ parseUri),
/* harmony export */   "removeTrailingSlash": () => (/* binding */ removeTrailingSlash)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
* Interface for a class that creates an in-memory database
*
* Its `createDb` method creates a hash of named collections that represents the database
*
* For maximum flexibility, the service may define HTTP method overrides.
* Such methods must match the spelling of an HTTP method in lower case (e.g, "get").
* If a request has a matching method, it will be called as in
* `get(info: requestInfo, db: {})` where `db` is the database object described above.
*/
var InMemoryDbService = /** @class */ (function () {
    function InMemoryDbService() {
    }
    return InMemoryDbService;
}());

/**
* Interface for InMemoryBackend configuration options
*/
var InMemoryBackendConfigArgs = /** @class */ (function () {
    function InMemoryBackendConfigArgs() {
    }
    return InMemoryBackendConfigArgs;
}());

/////////////////////////////////
/**
*  InMemoryBackendService configuration options
*  Usage:
*    InMemoryWebApiModule.forRoot(InMemHeroService, {delay: 600})
*
*  or if providing separately:
*    provide(InMemoryBackendConfig, {useValue: {delay: 600}}),
*/
var InMemoryBackendConfig = /** @class */ (function () {
    function InMemoryBackendConfig(config) {
        if (config === void 0) { config = {}; }
        Object.assign(this, {
            // default config:
            caseSensitiveSearch: false,
            dataEncapsulation: false,
            delay: 500,
            delete404: false,
            passThruUnknownUrl: false,
            post204: true,
            post409: false,
            put204: true,
            put404: false,
            apiBase: undefined,
            host: undefined,
            rootPath: undefined // default value is actually set in InMemoryBackendService ctor
        }, config);
    }
    InMemoryBackendConfig = __decorate([ __metadata("design:paramtypes", [InMemoryBackendConfigArgs])
    ], InMemoryBackendConfig);
InMemoryBackendConfig.ɵfac = function InMemoryBackendConfig_Factory(t) { return new (t || InMemoryBackendConfig)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](InMemoryBackendConfigArgs)); };
InMemoryBackendConfig.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InMemoryBackendConfig, factory: function (t) { return InMemoryBackendConfig.ɵfac(t); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InMemoryBackendConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
    }], function () { return [{ type: InMemoryBackendConfigArgs }]; }, null); })();
    return InMemoryBackendConfig;
}());

/** Return information (UriInfo) about a URI  */
function parseUri(str) {
    // Adapted from parseuri package - http://blog.stevenlevithan.com/archives/parseuri
    // tslint:disable-next-line:max-line-length
    var URL_REGEX = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
    var m = URL_REGEX.exec(str);
    var uri = {
        source: '',
        protocol: '',
        authority: '',
        userInfo: '',
        user: '',
        password: '',
        host: '',
        port: '',
        relative: '',
        path: '',
        directory: '',
        file: '',
        query: '',
        anchor: ''
    };
    var keys = Object.keys(uri);
    var i = keys.length;
    while (i--) {
        uri[keys[i]] = m[i] || '';
    }
    return uri;
}
function removeTrailingSlash(path) {
    return path.replace(/\/$/, '');
}



/***/ }),

/***/ 59403:
/*!*******************************************************************************************!*\
  !*** ./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Geometry": () => (/* binding */ Geometry),
/* harmony export */   "PERFECT_SCROLLBAR_CONFIG": () => (/* binding */ PERFECT_SCROLLBAR_CONFIG),
/* harmony export */   "PerfectScrollbarComponent": () => (/* binding */ PerfectScrollbarComponent),
/* harmony export */   "PerfectScrollbarConfig": () => (/* binding */ PerfectScrollbarConfig),
/* harmony export */   "PerfectScrollbarDirective": () => (/* binding */ PerfectScrollbarDirective),
/* harmony export */   "PerfectScrollbarModule": () => (/* binding */ PerfectScrollbarModule),
/* harmony export */   "Position": () => (/* binding */ Position)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 36312);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 88623);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 71695);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 53298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 29361);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! perfect-scrollbar */ 48623);
/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! resize-observer-polyfill */ 79674);







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */



function PerfectScrollbarComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ps-at-top", ctx_r0.states.top)("ps-at-left", ctx_r0.states.left)("ps-at-right", ctx_r0.states.right)("ps-at-bottom", ctx_r0.states.bottom);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ps-indicator-show", ctx_r0.indicatorY && ctx_r0.interaction);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ps-indicator-show", ctx_r0.indicatorX && ctx_r0.interaction);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ps-indicator-show", ctx_r0.indicatorX && ctx_r0.interaction);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ps-indicator-show", ctx_r0.indicatorY && ctx_r0.interaction);
} }
var _c0 = ["*"];
var PERFECT_SCROLLBAR_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken('PERFECT_SCROLLBAR_CONFIG');
var Geometry = /** @class */ (function () {
    function Geometry(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    return Geometry;
}());
var Position = /** @class */ (function () {
    function Position(x, y) {
        this.x = x;
        this.y = y;
    }
    return Position;
}());
/** @type {?} */
var PerfectScrollbarEvents = [
    'psScrollY',
    'psScrollX',
    'psScrollUp',
    'psScrollDown',
    'psScrollLeft',
    'psScrollRight',
    'psYReachEnd',
    'psYReachStart',
    'psXReachEnd',
    'psXReachStart'
];
var PerfectScrollbarConfig = /** @class */ (function () {
    function PerfectScrollbarConfig(config) {
        if (config === void 0) { config = {}; }
        this.assign(config);
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    PerfectScrollbarConfig.prototype.assign = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        if (config === void 0) { config = {}; }
        for (var key in config) {
            this[(/** @type {?} */ (key))] = config[(/** @type {?} */ (key))];
        }
    };
    return PerfectScrollbarConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PerfectScrollbarDirective = /** @class */ (function () {
    function PerfectScrollbarDirective(zone, differs, elementRef, platformId, defaults) {
        this.zone = zone;
        this.differs = differs;
        this.elementRef = elementRef;
        this.platformId = platformId;
        this.defaults = defaults;
        this.instance = null;
        this.ro = null;
        this.timeout = null;
        this.animation = null;
        this.configDiff = null;
        this.ngDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.disabled = false;
        this.psScrollY = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.psScrollX = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.psScrollUp = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.psScrollDown = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.psScrollLeft = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.psScrollRight = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.psYReachEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.psYReachStart = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.psXReachEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.psXReachStart = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    /**
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.disabled && (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
            /** @type {?} */
            var config_1 = new PerfectScrollbarConfig(this.defaults);
            config_1.assign(this.config); // Custom configuration
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                _this.instance = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__["default"](_this.elementRef.nativeElement, config_1);
            }));
            if (!this.configDiff) {
                this.configDiff = this.differs.find(this.config || {}).create();
                this.configDiff.diff(this.config || {});
            }
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                _this.ro = new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_1__["default"]((/**
                 * @return {?}
                 */
                function () {
                    _this.update();
                }));
                if (_this.elementRef.nativeElement.children[0]) {
                    _this.ro.observe(_this.elementRef.nativeElement.children[0]);
                }
                _this.ro.observe(_this.elementRef.nativeElement);
            }));
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                PerfectScrollbarEvents.forEach((/**
                 * @param {?} eventName
                 * @return {?}
                 */
                function (eventName) {
                    /** @type {?} */
                    var eventType = eventName.replace(/([A-Z])/g, (/**
                     * @param {?} c
                     * @return {?}
                     */
                    function (c) { return "-" + c.toLowerCase(); }));
                    (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(_this.elementRef.nativeElement, eventType)
                        .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.auditTime)(20), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(_this.ngDestroy))
                        .subscribe((/**
                     * @param {?} event
                     * @return {?}
                     */
                    function (event) {
                        _this[eventName].emit(event);
                    }));
                }));
            }));
        }
    };
    /**
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
            this.ngDestroy.next();
            this.ngDestroy.complete();
            if (this.ro) {
                this.ro.disconnect();
            }
            if (this.timeout && typeof window !== 'undefined') {
                window.clearTimeout(this.timeout);
            }
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                if (_this.instance) {
                    _this.instance.destroy();
                }
            }));
            this.instance = null;
        }
    };
    /**
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (!this.disabled && this.configDiff && (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
            /** @type {?} */
            var changes = this.configDiff.diff(this.config || {});
            if (changes) {
                this.ngOnDestroy();
                this.ngOnInit();
            }
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['disabled'] && !changes['disabled'].isFirstChange() && (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
            if (changes['disabled'].currentValue !== changes['disabled'].previousValue) {
                if (changes['disabled'].currentValue === true) {
                    this.ngOnDestroy();
                }
                else if (changes['disabled'].currentValue === false) {
                    this.ngOnInit();
                }
            }
        }
    };
    /**
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.ps = /**
     * @return {?}
     */
    function () {
        return this.instance;
    };
    /**
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.update = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (typeof window !== 'undefined') {
            if (this.timeout) {
                window.clearTimeout(this.timeout);
            }
            this.timeout = window.setTimeout((/**
             * @return {?}
             */
            function () {
                if (!_this.disabled && _this.configDiff) {
                    try {
                        _this.zone.runOutsideAngular((/**
                         * @return {?}
                         */
                        function () {
                            if (_this.instance) {
                                _this.instance.update();
                            }
                        }));
                    }
                    catch (error) {
                        // Update can be finished after destroy so catch errors
                    }
                }
            }), 0);
        }
    };
    /**
     * @param {?=} prefix
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.geometry = /**
     * @param {?=} prefix
     * @return {?}
     */
    function (prefix) {
        if (prefix === void 0) { prefix = 'scroll'; }
        return new Geometry(this.elementRef.nativeElement[prefix + 'Left'], this.elementRef.nativeElement[prefix + 'Top'], this.elementRef.nativeElement[prefix + 'Width'], this.elementRef.nativeElement[prefix + 'Height']);
    };
    /**
     * @param {?=} absolute
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.position = /**
     * @param {?=} absolute
     * @return {?}
     */
    function (absolute) {
        if (absolute === void 0) { absolute = false; }
        if (!absolute && this.instance) {
            return new Position(this.instance.reach.x || 0, this.instance.reach.y || 0);
        }
        else {
            return new Position(this.elementRef.nativeElement.scrollLeft, this.elementRef.nativeElement.scrollTop);
        }
    };
    /**
     * @param {?=} direction
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollable = /**
     * @param {?=} direction
     * @return {?}
     */
    function (direction) {
        if (direction === void 0) { direction = 'any'; }
        /** @type {?} */
        var element = this.elementRef.nativeElement;
        if (direction === 'any') {
            return element.classList.contains('ps--active-x') ||
                element.classList.contains('ps--active-y');
        }
        else if (direction === 'both') {
            return element.classList.contains('ps--active-x') &&
                element.classList.contains('ps--active-y');
        }
        else {
            return element.classList.contains('ps--active-' + direction);
        }
    };
    /**
     * @param {?} x
     * @param {?=} y
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollTo = /**
     * @param {?} x
     * @param {?=} y
     * @param {?=} speed
     * @return {?}
     */
    function (x, y, speed) {
        if (!this.disabled) {
            if (y == null && speed == null) {
                this.animateScrolling('scrollTop', x, speed);
            }
            else {
                if (x != null) {
                    this.animateScrolling('scrollLeft', x, speed);
                }
                if (y != null) {
                    this.animateScrolling('scrollTop', y, speed);
                }
            }
        }
    };
    /**
     * @param {?} x
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollToX = /**
     * @param {?} x
     * @param {?=} speed
     * @return {?}
     */
    function (x, speed) {
        this.animateScrolling('scrollLeft', x, speed);
    };
    /**
     * @param {?} y
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollToY = /**
     * @param {?} y
     * @param {?=} speed
     * @return {?}
     */
    function (y, speed) {
        this.animateScrolling('scrollTop', y, speed);
    };
    /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollToTop = /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    function (offset, speed) {
        this.animateScrolling('scrollTop', (offset || 0), speed);
    };
    /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollToLeft = /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    function (offset, speed) {
        this.animateScrolling('scrollLeft', (offset || 0), speed);
    };
    /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollToRight = /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    function (offset, speed) {
        /** @type {?} */
        var left = this.elementRef.nativeElement.scrollWidth -
            this.elementRef.nativeElement.clientWidth;
        this.animateScrolling('scrollLeft', left - (offset || 0), speed);
    };
    /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollToBottom = /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    function (offset, speed) {
        /** @type {?} */
        var top = this.elementRef.nativeElement.scrollHeight -
            this.elementRef.nativeElement.clientHeight;
        this.animateScrolling('scrollTop', top - (offset || 0), speed);
    };
    /**
     * @param {?} qs
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollToElement = /**
     * @param {?} qs
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    function (qs, offset, speed) {
        /** @type {?} */
        var element = this.elementRef.nativeElement.querySelector(qs);
        if (element) {
            /** @type {?} */
            var elementPos = element.getBoundingClientRect();
            /** @type {?} */
            var scrollerPos = this.elementRef.nativeElement.getBoundingClientRect();
            if (this.elementRef.nativeElement.classList.contains('ps--active-x')) {
                /** @type {?} */
                var currentPos = this.elementRef.nativeElement['scrollLeft'];
                /** @type {?} */
                var position = elementPos.left - scrollerPos.left + currentPos;
                this.animateScrolling('scrollLeft', position + (offset || 0), speed);
            }
            if (this.elementRef.nativeElement.classList.contains('ps--active-y')) {
                /** @type {?} */
                var currentPos = this.elementRef.nativeElement['scrollTop'];
                /** @type {?} */
                var position = elementPos.top - scrollerPos.top + currentPos;
                this.animateScrolling('scrollTop', position + (offset || 0), speed);
            }
        }
    };
    /**
     * @private
     * @param {?} target
     * @param {?} value
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.animateScrolling = /**
     * @private
     * @param {?} target
     * @param {?} value
     * @param {?=} speed
     * @return {?}
     */
    function (target, value, speed) {
        var _this = this;
        if (this.animation) {
            window.cancelAnimationFrame(this.animation);
            this.animation = null;
        }
        if (!speed || typeof window === 'undefined') {
            this.elementRef.nativeElement[target] = value;
        }
        else if (value !== this.elementRef.nativeElement[target]) {
            /** @type {?} */
            var newValue_1 = 0;
            /** @type {?} */
            var scrollCount_1 = 0;
            /** @type {?} */
            var oldTimestamp_1 = performance.now();
            /** @type {?} */
            var oldValue_1 = this.elementRef.nativeElement[target];
            /** @type {?} */
            var cosParameter_1 = (oldValue_1 - value) / 2;
            /** @type {?} */
            var step_1 = (/**
             * @param {?} newTimestamp
             * @return {?}
             */
            function (newTimestamp) {
                scrollCount_1 += Math.PI / (speed / (newTimestamp - oldTimestamp_1));
                newValue_1 = Math.round(value + cosParameter_1 + cosParameter_1 * Math.cos(scrollCount_1));
                // Only continue animation if scroll position has not changed
                if (_this.elementRef.nativeElement[target] === oldValue_1) {
                    if (scrollCount_1 >= Math.PI) {
                        _this.animateScrolling(target, value, 0);
                    }
                    else {
                        _this.elementRef.nativeElement[target] = newValue_1;
                        // On a zoomed out page the resulting offset may differ
                        oldValue_1 = _this.elementRef.nativeElement[target];
                        oldTimestamp_1 = newTimestamp;
                        _this.animation = window.requestAnimationFrame(step_1);
                    }
                }
            });
            window.requestAnimationFrame(step_1);
        }
    };
    /** @nocollapse */
    PerfectScrollbarDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.KeyValueDiffers },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject, args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID,] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject, args: [PERFECT_SCROLLBAR_CONFIG,] }] }
    ]; };
    PerfectScrollbarDirective.propDecorators = {
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input, args: ['perfectScrollbar',] }],
        psScrollY: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
        psScrollX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
        psScrollUp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
        psScrollDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
        psScrollLeft: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
        psScrollRight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
        psYReachEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
        psYReachStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
        psXReachEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
        psXReachStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
    };
PerfectScrollbarDirective.ɵfac = function PerfectScrollbarDirective_Factory(t) { return new (t || PerfectScrollbarDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.KeyValueDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](PERFECT_SCROLLBAR_CONFIG, 8)); };
PerfectScrollbarDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: PerfectScrollbarDirective, selectors: [["", "perfectScrollbar", ""]], inputs: { disabled: "disabled", config: ["perfectScrollbar", "config"] }, outputs: { psScrollY: "psScrollY", psScrollX: "psScrollX", psScrollUp: "psScrollUp", psScrollDown: "psScrollDown", psScrollLeft: "psScrollLeft", psScrollRight: "psScrollRight", psYReachEnd: "psYReachEnd", psYReachStart: "psYReachStart", psXReachEnd: "psXReachEnd", psXReachStart: "psXReachStart" }, exportAs: ["ngxPerfectScrollbar"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PerfectScrollbarDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
        args: [{
                selector: '[perfectScrollbar]',
                exportAs: 'ngxPerfectScrollbar'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.KeyValueDiffers }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
                args: [PERFECT_SCROLLBAR_CONFIG]
            }] }]; }, { disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], psScrollY: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], psScrollX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], psScrollUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], psScrollDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], psScrollLeft: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], psScrollRight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], psYReachEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], psYReachStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], psXReachEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], psXReachStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
            args: ['perfectScrollbar']
        }] }); })();
    return PerfectScrollbarDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PerfectScrollbarComponent = /** @class */ (function () {
    function PerfectScrollbarComponent(zone, cdRef, platformId) {
        this.zone = zone;
        this.cdRef = cdRef;
        this.platformId = platformId;
        this.states = {};
        this.indicatorX = false;
        this.indicatorY = false;
        this.interaction = false;
        this.scrollPositionX = 0;
        this.scrollPositionY = 0;
        this.scrollDirectionX = 0;
        this.scrollDirectionY = 0;
        this.usePropagationX = false;
        this.usePropagationY = false;
        this.allowPropagationX = false;
        this.allowPropagationY = false;
        this.stateTimeout = null;
        this.ngDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.stateUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.disabled = false;
        this.usePSClass = true;
        this.autoPropagation = false;
        this.scrollIndicators = false;
        this.psScrollY = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.psScrollX = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.psScrollUp = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.psScrollDown = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.psScrollLeft = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.psScrollRight = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.psYReachEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.psYReachStart = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.psXReachEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.psXReachStart = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    /**
     * @return {?}
     */
    PerfectScrollbarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
            this.stateUpdate
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngDestroy), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.distinctUntilChanged)((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) { return (a === b && !_this.stateTimeout); })))
                .subscribe((/**
             * @param {?} state
             * @return {?}
             */
            function (state) {
                if (_this.stateTimeout && typeof window !== 'undefined') {
                    window.clearTimeout(_this.stateTimeout);
                    _this.stateTimeout = null;
                }
                if (state === 'x' || state === 'y') {
                    _this.interaction = false;
                    if (state === 'x') {
                        _this.indicatorX = false;
                        _this.states.left = false;
                        _this.states.right = false;
                        if (_this.autoPropagation && _this.usePropagationX) {
                            _this.allowPropagationX = false;
                        }
                    }
                    else if (state === 'y') {
                        _this.indicatorY = false;
                        _this.states.top = false;
                        _this.states.bottom = false;
                        if (_this.autoPropagation && _this.usePropagationY) {
                            _this.allowPropagationY = false;
                        }
                    }
                }
                else {
                    if (state === 'left' || state === 'right') {
                        _this.states.left = false;
                        _this.states.right = false;
                        _this.states[state] = true;
                        if (_this.autoPropagation && _this.usePropagationX) {
                            _this.indicatorX = true;
                        }
                    }
                    else if (state === 'top' || state === 'bottom') {
                        _this.states.top = false;
                        _this.states.bottom = false;
                        _this.states[state] = true;
                        if (_this.autoPropagation && _this.usePropagationY) {
                            _this.indicatorY = true;
                        }
                    }
                    if (_this.autoPropagation && typeof window !== 'undefined') {
                        _this.stateTimeout = window.setTimeout((/**
                         * @return {?}
                         */
                        function () {
                            _this.indicatorX = false;
                            _this.indicatorY = false;
                            _this.stateTimeout = null;
                            if (_this.interaction && (_this.states.left || _this.states.right)) {
                                _this.allowPropagationX = true;
                            }
                            if (_this.interaction && (_this.states.top || _this.states.bottom)) {
                                _this.allowPropagationY = true;
                            }
                            _this.cdRef.markForCheck();
                        }), 500);
                    }
                }
                _this.cdRef.markForCheck();
                _this.cdRef.detectChanges();
            }));
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                if (_this.directiveRef) {
                    /** @type {?} */
                    var element = _this.directiveRef.elementRef.nativeElement;
                    (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(element, 'wheel')
                        .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(_this.ngDestroy))
                        .subscribe((/**
                     * @param {?} event
                     * @return {?}
                     */
                    function (event) {
                        if (!_this.disabled && _this.autoPropagation) {
                            /** @type {?} */
                            var scrollDeltaX = event.deltaX;
                            /** @type {?} */
                            var scrollDeltaY = event.deltaY;
                            _this.checkPropagation(event, scrollDeltaX, scrollDeltaY);
                        }
                    }));
                    (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(element, 'touchmove')
                        .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(_this.ngDestroy))
                        .subscribe((/**
                     * @param {?} event
                     * @return {?}
                     */
                    function (event) {
                        if (!_this.disabled && _this.autoPropagation) {
                            /** @type {?} */
                            var scrollPositionX = event.touches[0].clientX;
                            /** @type {?} */
                            var scrollPositionY = event.touches[0].clientY;
                            /** @type {?} */
                            var scrollDeltaX = scrollPositionX - _this.scrollPositionX;
                            /** @type {?} */
                            var scrollDeltaY = scrollPositionY - _this.scrollPositionY;
                            _this.checkPropagation(event, scrollDeltaX, scrollDeltaY);
                            _this.scrollPositionX = scrollPositionX;
                            _this.scrollPositionY = scrollPositionY;
                        }
                    }));
                    (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(element, 'ps-scroll-x')
                        .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.mapTo)('x')), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(element, 'ps-scroll-y')
                        .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.mapTo)('y')), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(element, 'ps-x-reach-end')
                        .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.mapTo)('right')), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(element, 'ps-y-reach-end')
                        .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.mapTo)('bottom')), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(element, 'ps-x-reach-start')
                        .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.mapTo)('left')), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(element, 'ps-y-reach-start')
                        .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.mapTo)('top')))
                        .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(_this.ngDestroy))
                        .subscribe((/**
                     * @param {?} state
                     * @return {?}
                     */
                    function (state) {
                        if (!_this.disabled && (_this.autoPropagation || _this.scrollIndicators)) {
                            _this.stateUpdate.next(state);
                        }
                    }));
                }
            }));
            window.setTimeout((/**
             * @return {?}
             */
            function () {
                PerfectScrollbarEvents.forEach((/**
                 * @param {?} eventName
                 * @return {?}
                 */
                function (eventName) {
                    if (_this.directiveRef) {
                        _this.directiveRef[eventName] = _this[eventName];
                    }
                }));
            }), 0);
        }
    };
    /**
     * @return {?}
     */
    PerfectScrollbarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
            this.ngDestroy.next();
            this.ngDestroy.unsubscribe();
            if (this.stateTimeout && typeof window !== 'undefined') {
                window.clearTimeout(this.stateTimeout);
            }
        }
    };
    /**
     * @return {?}
     */
    PerfectScrollbarComponent.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
            if (!this.disabled && this.autoPropagation && this.directiveRef) {
                /** @type {?} */
                var element = this.directiveRef.elementRef.nativeElement;
                this.usePropagationX = element.classList.contains('ps--active-x');
                this.usePropagationY = element.classList.contains('ps--active-y');
            }
        }
    };
    /**
     * @private
     * @param {?} event
     * @param {?} deltaX
     * @param {?} deltaY
     * @return {?}
     */
    PerfectScrollbarComponent.prototype.checkPropagation = /**
     * @private
     * @param {?} event
     * @param {?} deltaX
     * @param {?} deltaY
     * @return {?}
     */
    function (event, deltaX, deltaY) {
        this.interaction = true;
        /** @type {?} */
        var scrollDirectionX = (deltaX < 0) ? -1 : 1;
        /** @type {?} */
        var scrollDirectionY = (deltaY < 0) ? -1 : 1;
        if ((this.usePropagationX && this.usePropagationY) ||
            (this.usePropagationX && (!this.allowPropagationX ||
                (this.scrollDirectionX !== scrollDirectionX))) ||
            (this.usePropagationY && (!this.allowPropagationY ||
                (this.scrollDirectionY !== scrollDirectionY)))) {
            event.preventDefault();
            event.stopPropagation();
        }
        if (!!deltaX) {
            this.scrollDirectionX = scrollDirectionX;
        }
        if (!!deltaY) {
            this.scrollDirectionY = scrollDirectionY;
        }
        this.stateUpdate.next('interaction');
        this.cdRef.detectChanges();
    };
    /** @nocollapse */
    PerfectScrollbarComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject, args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID,] }] }
    ]; };
    PerfectScrollbarComponent.propDecorators = {
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
        usePSClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
        autoPropagation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostBinding, args: ['class.ps-show-limits',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
        scrollIndicators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostBinding, args: ['class.ps-show-active',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
        psScrollY: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
        psScrollX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
        psScrollUp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
        psScrollDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
        psScrollLeft: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
        psScrollRight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
        psYReachEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
        psYReachStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
        psXReachEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
        psXReachStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
        directiveRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: [PerfectScrollbarDirective, { static: true },] }]
    };
PerfectScrollbarComponent.ɵfac = function PerfectScrollbarComponent_Factory(t) { return new (t || PerfectScrollbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID)); };
PerfectScrollbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PerfectScrollbarComponent, selectors: [["perfect-scrollbar"]], viewQuery: function PerfectScrollbarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](PerfectScrollbarDirective, 7);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
    } }, hostVars: 4, hostBindings: function PerfectScrollbarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ps-show-limits", ctx.autoPropagation)("ps-show-active", ctx.scrollIndicators);
    } }, inputs: { disabled: "disabled", usePSClass: "usePSClass", autoPropagation: "autoPropagation", scrollIndicators: "scrollIndicators", config: "config" }, outputs: { psScrollY: "psScrollY", psScrollX: "psScrollX", psScrollUp: "psScrollUp", psScrollDown: "psScrollDown", psScrollLeft: "psScrollLeft", psScrollRight: "psScrollRight", psYReachEnd: "psYReachEnd", psYReachStart: "psYReachStart", psXReachEnd: "psXReachEnd", psXReachStart: "psXReachStart" }, exportAs: ["ngxPerfectScrollbar"], ngContentSelectors: _c0, decls: 4, vars: 5, consts: [[2, "position", "static", 3, "perfectScrollbar", "disabled"], [1, "ps-content"], ["class", "ps-overlay", 3, "ps-at-top", "ps-at-left", "ps-at-right", "ps-at-bottom", 4, "ngIf"], [1, "ps-overlay"], [1, "ps-indicator-top"], [1, "ps-indicator-left"], [1, "ps-indicator-right"], [1, "ps-indicator-bottom"]], template: function PerfectScrollbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, PerfectScrollbarComponent_div_3_Template, 5, 16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ps", ctx.usePSClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("perfectScrollbar", ctx.config)("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.scrollIndicators);
    } }, directives: [PerfectScrollbarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], styles: ["/*\n  TODO: Remove important flags after this bug if fixed:\n  https://github.com/angular/flex-layout/issues/381\n*/\n\nperfect-scrollbar {\n  position: relative;\n\n  display: block;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n}\n\nperfect-scrollbar[hidden] {\n  display: none;\n}\n\nperfect-scrollbar[fxflex] {\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  min-width: 0;\n  min-height: 0;\n\n  -webkit-box-direction: column;\n  -webkit-box-orient: column;\n}\n\nperfect-scrollbar[fxflex] > .ps {\n  -ms-flex: 1 1 auto;\n\n  flex: 1 1 auto;\n  width: auto;\n  height: auto;\n  min-width: 0;\n  min-height: 0;\n\n  -webkit-box-flex: 1;\n}\n\nperfect-scrollbar[fxlayout] > .ps,\nperfect-scrollbar[fxlayout] > .ps > .ps-content {\n  display: flex;\n\n  -ms-flex: 1 1 auto;\n\n  flex: 1 1 auto;\n  flex-direction: inherit;\n  align-items: inherit;\n  align-content: inherit;\n  justify-content: inherit;\n  width: 100%;\n  height: 100%;\n\n  -webkit-box-align: inherit;\n  -webkit-box-direction: inherit;\n  -webkit-box-flex: 1;\n  -webkit-box-orient: inherit;\n  -webkit-box-pack: inherit;\n}\n\nperfect-scrollbar[fxlayout='row'] > .ps,\nperfect-scrollbar[fxlayout='row'] > .ps > .ps-content, {\n  flex-direction: row !important;\n\n  -webkit-box-direction: row !important;\n  -webkit-box-orient: row !important;\n}\n\nperfect-scrollbar[fxlayout='column'] > .ps,\nperfect-scrollbar[fxlayout='column'] > .ps > .ps-content {\n  flex-direction: column !important;\n\n  -webkit-box-direction: column !important;\n  -webkit-box-orient: column !important;\n}\n\nperfect-scrollbar > .ps {\n  position: static;\n\n  display: block;\n  width: inherit;\n  height: inherit;\n  max-width: inherit;\n  max-height: inherit;\n}\n\nperfect-scrollbar > .ps textarea {\n  -ms-overflow-style: scrollbar;\n}\n\nperfect-scrollbar > .ps > .ps-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  display: block;\n  overflow: hidden;\n\n  pointer-events: none;\n}\n\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-top,\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-left,\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-right,\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-bottom {\n  position: absolute;\n\n  opacity: 0;\n\n  transition: opacity 300ms ease-in-out;\n}\n\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-top,\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-bottom {\n  left: 0;\n\n  min-width: 100%;\n  min-height: 24px;\n}\n\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-left,\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-right {\n  top: 0;\n\n  min-width: 24px;\n  min-height: 100%;\n}\n\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-top {\n  top: 0;\n}\n\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-left {\n  left: 0;\n}\n\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-right {\n  right: 0;\n}\n\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-bottom {\n  bottom: 0;\n}\n\nperfect-scrollbar > .ps.ps--active-y > .ps__rail-y {\n  top: 0 !important;\n  right: 0 !important;\n  left: auto !important;\n\n  width: 10px;\n\n  cursor: default;\n\n  transition:\n    width 200ms linear,\n    opacity 200ms linear,\n    background-color 200ms linear;\n}\n\nperfect-scrollbar > .ps.ps--active-y > .ps__rail-y:hover,\nperfect-scrollbar > .ps.ps--active-y > .ps__rail-y.ps--clicking {\n  width: 15px;\n}\n\nperfect-scrollbar > .ps.ps--active-x > .ps__rail-x {\n  top: auto !important;\n  bottom: 0 !important;\n  left: 0 !important;\n\n  height: 10px;\n\n  cursor: default;\n\n  transition:\n    height 200ms linear,\n    opacity 200ms linear,\n    background-color 200ms linear;\n}\n\nperfect-scrollbar > .ps.ps--active-x > .ps__rail-x:hover,\nperfect-scrollbar > .ps.ps--active-x > .ps__rail-x.ps--clicking {\n  height: 15px;\n}\n\nperfect-scrollbar > .ps.ps--active-x.ps--active-y > .ps__rail-y {\n  margin: 0 0 10px;\n}\n\nperfect-scrollbar > .ps.ps--active-x.ps--active-y > .ps__rail-x {\n  margin: 0 10px 0 0;\n}\n\nperfect-scrollbar > .ps.ps--scrolling-y > .ps__rail-y,\nperfect-scrollbar > .ps.ps--scrolling-x > .ps__rail-x {\n  opacity: 0.9;\n\n  background-color: #eee;\n}\n\nperfect-scrollbar.ps-show-always > .ps.ps--active-y > .ps__rail-y,\nperfect-scrollbar.ps-show-always > .ps.ps--active-x > .ps__rail-x {\n  opacity: 0.6;\n}\n\nperfect-scrollbar.ps-show-active > .ps.ps--active-y > .ps-overlay:not(.ps-at-top) .ps-indicator-top {\n  opacity: 1;\n\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%);\n}\n\nperfect-scrollbar.ps-show-active > .ps.ps--active-y > .ps-overlay:not(.ps-at-bottom) .ps-indicator-bottom {\n  opacity: 1;\n\n  background: linear-gradient(to top, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%);\n}\n\nperfect-scrollbar.ps-show-active > .ps.ps--active-x > .ps-overlay:not(.ps-at-left) .ps-indicator-left {\n  opacity: 1;\n\n  background: linear-gradient(to right, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%);\n}\n\nperfect-scrollbar.ps-show-active > .ps.ps--active-x > .ps-overlay:not(.ps-at-right) .ps-indicator-right {\n  opacity: 1;\n\n  background: linear-gradient(to left, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%);\n}\n\nperfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-y > .ps-overlay.ps-at-top .ps-indicator-top {\n  background: linear-gradient(to bottom, rgba(170, 170, 170, 0.5) 0%, rgba(170, 170, 170, 0) 100%);\n}\n\nperfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-y > .ps-overlay.ps-at-bottom .ps-indicator-bottom {\n  background: linear-gradient(to top, rgba(170, 170, 170, 0.5) 0%, rgba(170, 170, 170, 0) 100%);\n}\n\nperfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-x > .ps-overlay.ps-at-left .ps-indicator-left {\n  background: linear-gradient(to right, rgba(170, 170, 170, 0.5) 0%, rgba(170, 170, 170, 0) 100%);\n}\n\nperfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-x > .ps-overlay.ps-at-right .ps-indicator-right {\n  background: linear-gradient(to left, rgba(170, 170, 170, 0.5) 0%, rgba(170, 170, 170, 0) 100%);\n}\n\nperfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-y > .ps-overlay.ps-at-top .ps-indicator-top.ps-indicator-show,\nperfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-y > .ps-overlay.ps-at-bottom .ps-indicator-bottom.ps-indicator-show,\nperfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-x > .ps-overlay.ps-at-left .ps-indicator-left.ps-indicator-show,\nperfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-x > .ps-overlay.ps-at-right .ps-indicator-right.ps-indicator-show {\n  opacity: 1;\n}\n", "/*\n * Container style\n */\n.ps {\n  overflow: hidden !important;\n  overflow-anchor: none;\n  -ms-overflow-style: none;\n  touch-action: auto;\n  -ms-touch-action: auto;\n}\n\n/*\n * Scrollbar rail styles\n */\n.ps__rail-x {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  height: 15px;\n  /* there must be 'bottom' or 'top' for ps__rail-x */\n  bottom: 0px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__rail-y {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  width: 15px;\n  /* there must be 'right' or 'left' for ps__rail-y */\n  right: 0;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps--active-x > .ps__rail-x,\n.ps--active-y > .ps__rail-y {\n  display: block;\n  background-color: transparent;\n}\n\n.ps:hover > .ps__rail-x,\n.ps:hover > .ps__rail-y,\n.ps--focus > .ps__rail-x,\n.ps--focus > .ps__rail-y,\n.ps--scrolling-x > .ps__rail-x,\n.ps--scrolling-y > .ps__rail-y {\n  opacity: 0.6;\n}\n\n.ps .ps__rail-x:hover,\n.ps .ps__rail-y:hover,\n.ps .ps__rail-x:focus,\n.ps .ps__rail-y:focus,\n.ps .ps__rail-x.ps--clicking,\n.ps .ps__rail-y.ps--clicking {\n  background-color: #eee;\n  opacity: 0.9;\n}\n\n/*\n * Scrollbar thumb styles\n */\n.ps__thumb-x {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, height .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, height .2s ease-in-out;\n  height: 6px;\n  /* there must be 'bottom' for ps__thumb-x */\n  bottom: 2px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__thumb-y {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, width .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, width .2s ease-in-out;\n  width: 6px;\n  /* there must be 'right' for ps__thumb-y */\n  right: 2px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__rail-x:hover > .ps__thumb-x,\n.ps__rail-x:focus > .ps__thumb-x,\n.ps__rail-x.ps--clicking .ps__thumb-x {\n  background-color: #999;\n  height: 11px;\n}\n\n.ps__rail-y:hover > .ps__thumb-y,\n.ps__rail-y:focus > .ps__thumb-y,\n.ps__rail-y.ps--clicking .ps__thumb-y {\n  background-color: #999;\n  width: 11px;\n}\n\n/* MS supports */\n@supports (-ms-overflow-style: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}\n\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}\n"], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PerfectScrollbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
        args: [{
                selector: 'perfect-scrollbar',
                exportAs: 'ngxPerfectScrollbar',
                template: "<div style=\"position: static;\" [class.ps]=\"usePSClass\" [perfectScrollbar]=\"config\" [disabled]=\"disabled\">\n  <div class=\"ps-content\">\n    <ng-content></ng-content>\n  </div>\n\n  <div *ngIf=\"scrollIndicators\" class=\"ps-overlay\" [class.ps-at-top]=\"states.top\" [class.ps-at-left]=\"states.left\" [class.ps-at-right]=\"states.right\" [class.ps-at-bottom]=\"states.bottom\">\n    <div class=\"ps-indicator-top\" [class.ps-indicator-show]=\"indicatorY && interaction\"></div>\n    <div class=\"ps-indicator-left\" [class.ps-indicator-show]=\"indicatorX && interaction\"></div>\n    <div class=\"ps-indicator-right\" [class.ps-indicator-show]=\"indicatorX && interaction\"></div>\n    <div class=\"ps-indicator-bottom\" [class.ps-indicator-show]=\"indicatorY && interaction\"></div>\n  </div>\n</div>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewEncapsulation.None,
                styles: ["/*\n  TODO: Remove important flags after this bug if fixed:\n  https://github.com/angular/flex-layout/issues/381\n*/\n\nperfect-scrollbar {\n  position: relative;\n\n  display: block;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n}\n\nperfect-scrollbar[hidden] {\n  display: none;\n}\n\nperfect-scrollbar[fxflex] {\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  min-width: 0;\n  min-height: 0;\n\n  -webkit-box-direction: column;\n  -webkit-box-orient: column;\n}\n\nperfect-scrollbar[fxflex] > .ps {\n  -ms-flex: 1 1 auto;\n\n  flex: 1 1 auto;\n  width: auto;\n  height: auto;\n  min-width: 0;\n  min-height: 0;\n\n  -webkit-box-flex: 1;\n}\n\nperfect-scrollbar[fxlayout] > .ps,\nperfect-scrollbar[fxlayout] > .ps > .ps-content {\n  display: flex;\n\n  -ms-flex: 1 1 auto;\n\n  flex: 1 1 auto;\n  flex-direction: inherit;\n  align-items: inherit;\n  align-content: inherit;\n  justify-content: inherit;\n  width: 100%;\n  height: 100%;\n\n  -webkit-box-align: inherit;\n  -webkit-box-direction: inherit;\n  -webkit-box-flex: 1;\n  -webkit-box-orient: inherit;\n  -webkit-box-pack: inherit;\n}\n\nperfect-scrollbar[fxlayout='row'] > .ps,\nperfect-scrollbar[fxlayout='row'] > .ps > .ps-content, {\n  flex-direction: row !important;\n\n  -webkit-box-direction: row !important;\n  -webkit-box-orient: row !important;\n}\n\nperfect-scrollbar[fxlayout='column'] > .ps,\nperfect-scrollbar[fxlayout='column'] > .ps > .ps-content {\n  flex-direction: column !important;\n\n  -webkit-box-direction: column !important;\n  -webkit-box-orient: column !important;\n}\n\nperfect-scrollbar > .ps {\n  position: static;\n\n  display: block;\n  width: inherit;\n  height: inherit;\n  max-width: inherit;\n  max-height: inherit;\n}\n\nperfect-scrollbar > .ps textarea {\n  -ms-overflow-style: scrollbar;\n}\n\nperfect-scrollbar > .ps > .ps-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  display: block;\n  overflow: hidden;\n\n  pointer-events: none;\n}\n\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-top,\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-left,\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-right,\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-bottom {\n  position: absolute;\n\n  opacity: 0;\n\n  transition: opacity 300ms ease-in-out;\n}\n\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-top,\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-bottom {\n  left: 0;\n\n  min-width: 100%;\n  min-height: 24px;\n}\n\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-left,\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-right {\n  top: 0;\n\n  min-width: 24px;\n  min-height: 100%;\n}\n\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-top {\n  top: 0;\n}\n\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-left {\n  left: 0;\n}\n\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-right {\n  right: 0;\n}\n\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-bottom {\n  bottom: 0;\n}\n\nperfect-scrollbar > .ps.ps--active-y > .ps__rail-y {\n  top: 0 !important;\n  right: 0 !important;\n  left: auto !important;\n\n  width: 10px;\n\n  cursor: default;\n\n  transition:\n    width 200ms linear,\n    opacity 200ms linear,\n    background-color 200ms linear;\n}\n\nperfect-scrollbar > .ps.ps--active-y > .ps__rail-y:hover,\nperfect-scrollbar > .ps.ps--active-y > .ps__rail-y.ps--clicking {\n  width: 15px;\n}\n\nperfect-scrollbar > .ps.ps--active-x > .ps__rail-x {\n  top: auto !important;\n  bottom: 0 !important;\n  left: 0 !important;\n\n  height: 10px;\n\n  cursor: default;\n\n  transition:\n    height 200ms linear,\n    opacity 200ms linear,\n    background-color 200ms linear;\n}\n\nperfect-scrollbar > .ps.ps--active-x > .ps__rail-x:hover,\nperfect-scrollbar > .ps.ps--active-x > .ps__rail-x.ps--clicking {\n  height: 15px;\n}\n\nperfect-scrollbar > .ps.ps--active-x.ps--active-y > .ps__rail-y {\n  margin: 0 0 10px;\n}\n\nperfect-scrollbar > .ps.ps--active-x.ps--active-y > .ps__rail-x {\n  margin: 0 10px 0 0;\n}\n\nperfect-scrollbar > .ps.ps--scrolling-y > .ps__rail-y,\nperfect-scrollbar > .ps.ps--scrolling-x > .ps__rail-x {\n  opacity: 0.9;\n\n  background-color: #eee;\n}\n\nperfect-scrollbar.ps-show-always > .ps.ps--active-y > .ps__rail-y,\nperfect-scrollbar.ps-show-always > .ps.ps--active-x > .ps__rail-x {\n  opacity: 0.6;\n}\n\nperfect-scrollbar.ps-show-active > .ps.ps--active-y > .ps-overlay:not(.ps-at-top) .ps-indicator-top {\n  opacity: 1;\n\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%);\n}\n\nperfect-scrollbar.ps-show-active > .ps.ps--active-y > .ps-overlay:not(.ps-at-bottom) .ps-indicator-bottom {\n  opacity: 1;\n\n  background: linear-gradient(to top, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%);\n}\n\nperfect-scrollbar.ps-show-active > .ps.ps--active-x > .ps-overlay:not(.ps-at-left) .ps-indicator-left {\n  opacity: 1;\n\n  background: linear-gradient(to right, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%);\n}\n\nperfect-scrollbar.ps-show-active > .ps.ps--active-x > .ps-overlay:not(.ps-at-right) .ps-indicator-right {\n  opacity: 1;\n\n  background: linear-gradient(to left, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%);\n}\n\nperfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-y > .ps-overlay.ps-at-top .ps-indicator-top {\n  background: linear-gradient(to bottom, rgba(170, 170, 170, 0.5) 0%, rgba(170, 170, 170, 0) 100%);\n}\n\nperfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-y > .ps-overlay.ps-at-bottom .ps-indicator-bottom {\n  background: linear-gradient(to top, rgba(170, 170, 170, 0.5) 0%, rgba(170, 170, 170, 0) 100%);\n}\n\nperfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-x > .ps-overlay.ps-at-left .ps-indicator-left {\n  background: linear-gradient(to right, rgba(170, 170, 170, 0.5) 0%, rgba(170, 170, 170, 0) 100%);\n}\n\nperfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-x > .ps-overlay.ps-at-right .ps-indicator-right {\n  background: linear-gradient(to left, rgba(170, 170, 170, 0.5) 0%, rgba(170, 170, 170, 0) 100%);\n}\n\nperfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-y > .ps-overlay.ps-at-top .ps-indicator-top.ps-indicator-show,\nperfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-y > .ps-overlay.ps-at-bottom .ps-indicator-bottom.ps-indicator-show,\nperfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-x > .ps-overlay.ps-at-left .ps-indicator-left.ps-indicator-show,\nperfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-x > .ps-overlay.ps-at-right .ps-indicator-right.ps-indicator-show {\n  opacity: 1;\n}\n", "/*\n * Container style\n */\n.ps {\n  overflow: hidden !important;\n  overflow-anchor: none;\n  -ms-overflow-style: none;\n  touch-action: auto;\n  -ms-touch-action: auto;\n}\n\n/*\n * Scrollbar rail styles\n */\n.ps__rail-x {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  height: 15px;\n  /* there must be 'bottom' or 'top' for ps__rail-x */\n  bottom: 0px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__rail-y {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  width: 15px;\n  /* there must be 'right' or 'left' for ps__rail-y */\n  right: 0;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps--active-x > .ps__rail-x,\n.ps--active-y > .ps__rail-y {\n  display: block;\n  background-color: transparent;\n}\n\n.ps:hover > .ps__rail-x,\n.ps:hover > .ps__rail-y,\n.ps--focus > .ps__rail-x,\n.ps--focus > .ps__rail-y,\n.ps--scrolling-x > .ps__rail-x,\n.ps--scrolling-y > .ps__rail-y {\n  opacity: 0.6;\n}\n\n.ps .ps__rail-x:hover,\n.ps .ps__rail-y:hover,\n.ps .ps__rail-x:focus,\n.ps .ps__rail-y:focus,\n.ps .ps__rail-x.ps--clicking,\n.ps .ps__rail-y.ps--clicking {\n  background-color: #eee;\n  opacity: 0.9;\n}\n\n/*\n * Scrollbar thumb styles\n */\n.ps__thumb-x {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, height .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, height .2s ease-in-out;\n  height: 6px;\n  /* there must be 'bottom' for ps__thumb-x */\n  bottom: 2px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__thumb-y {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, width .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, width .2s ease-in-out;\n  width: 6px;\n  /* there must be 'right' for ps__thumb-y */\n  right: 2px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__rail-x:hover > .ps__thumb-x,\n.ps__rail-x:focus > .ps__thumb-x,\n.ps__rail-x.ps--clicking .ps__thumb-x {\n  background-color: #999;\n  height: 11px;\n}\n\n.ps__rail-y:hover > .ps__thumb-y,\n.ps__rail-y:focus > .ps__thumb-y,\n.ps__rail-y.ps--clicking .ps__thumb-y {\n  background-color: #999;\n  width: 11px;\n}\n\n/* MS supports */\n@supports (-ms-overflow-style: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}\n\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID]
            }] }]; }, { disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], usePSClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], autoPropagation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostBinding,
            args: ['class.ps-show-limits']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], scrollIndicators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostBinding,
            args: ['class.ps-show-active']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], psScrollY: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], psScrollX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], psScrollUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], psScrollDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], psScrollLeft: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], psScrollRight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], psYReachEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], psYReachStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], psXReachEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], psXReachStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], directiveRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
            args: [PerfectScrollbarDirective, { static: true }]
        }] }); })();
    return PerfectScrollbarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PerfectScrollbarModule = /** @class */ (function () {
    function PerfectScrollbarModule() {
    }
PerfectScrollbarModule.ɵfac = function PerfectScrollbarModule_Factory(t) { return new (t || PerfectScrollbarModule)(); };
PerfectScrollbarModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PerfectScrollbarModule });
PerfectScrollbarModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule], _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PerfectScrollbarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
                declarations: [PerfectScrollbarComponent, PerfectScrollbarDirective],
                exports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, PerfectScrollbarComponent, PerfectScrollbarDirective]
            }]
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PerfectScrollbarModule, { declarations: function () { return [PerfectScrollbarComponent, PerfectScrollbarDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule]; }, exports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, PerfectScrollbarComponent, PerfectScrollbarDirective]; } }); })();
    return PerfectScrollbarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */





/***/ }),

/***/ 48623:
/*!**********************************************************************!*\
  !*** ./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*!
 * perfect-scrollbar v1.5.0
 * Copyright 2020 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */

function get(element) {
  return getComputedStyle(element);
}

function set(element, obj) {
  for (var key in obj) {
    var val = obj[key];
    if (typeof val === 'number') {
      val = val + "px";
    }
    element.style[key] = val;
  }
  return element;
}

function div(className) {
  var div = document.createElement('div');
  div.className = className;
  return div;
}

var elMatches =
  typeof Element !== 'undefined' &&
  (Element.prototype.matches ||
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector);

function matches(element, query) {
  if (!elMatches) {
    throw new Error('No element matching method supported');
  }

  return elMatches.call(element, query);
}

function remove(element) {
  if (element.remove) {
    element.remove();
  } else {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }
}

function queryChildren(element, selector) {
  return Array.prototype.filter.call(element.children, function (child) { return matches(child, selector); }
  );
}

var cls = {
  main: 'ps',
  rtl: 'ps__rtl',
  element: {
    thumb: function (x) { return ("ps__thumb-" + x); },
    rail: function (x) { return ("ps__rail-" + x); },
    consuming: 'ps__child--consume',
  },
  state: {
    focus: 'ps--focus',
    clicking: 'ps--clicking',
    active: function (x) { return ("ps--active-" + x); },
    scrolling: function (x) { return ("ps--scrolling-" + x); },
  },
};

/*
 * Helper methods
 */
var scrollingClassTimeout = { x: null, y: null };

function addScrollingClass(i, x) {
  var classList = i.element.classList;
  var className = cls.state.scrolling(x);

  if (classList.contains(className)) {
    clearTimeout(scrollingClassTimeout[x]);
  } else {
    classList.add(className);
  }
}

function removeScrollingClass(i, x) {
  scrollingClassTimeout[x] = setTimeout(
    function () { return i.isAlive && i.element.classList.remove(cls.state.scrolling(x)); },
    i.settings.scrollingThreshold
  );
}

function setScrollingClassInstantly(i, x) {
  addScrollingClass(i, x);
  removeScrollingClass(i, x);
}

var EventElement = function EventElement(element) {
  this.element = element;
  this.handlers = {};
};

var prototypeAccessors = { isEmpty: { configurable: true } };

EventElement.prototype.bind = function bind (eventName, handler) {
  if (typeof this.handlers[eventName] === 'undefined') {
    this.handlers[eventName] = [];
  }
  this.handlers[eventName].push(handler);
  this.element.addEventListener(eventName, handler, false);
};

EventElement.prototype.unbind = function unbind (eventName, target) {
    var this$1 = this;

  this.handlers[eventName] = this.handlers[eventName].filter(function (handler) {
    if (target && handler !== target) {
      return true;
    }
    this$1.element.removeEventListener(eventName, handler, false);
    return false;
  });
};

EventElement.prototype.unbindAll = function unbindAll () {
  for (var name in this.handlers) {
    this.unbind(name);
  }
};

prototypeAccessors.isEmpty.get = function () {
    var this$1 = this;

  return Object.keys(this.handlers).every(
    function (key) { return this$1.handlers[key].length === 0; }
  );
};

Object.defineProperties( EventElement.prototype, prototypeAccessors );

var EventManager = function EventManager() {
  this.eventElements = [];
};

EventManager.prototype.eventElement = function eventElement (element) {
  var ee = this.eventElements.filter(function (ee) { return ee.element === element; })[0];
  if (!ee) {
    ee = new EventElement(element);
    this.eventElements.push(ee);
  }
  return ee;
};

EventManager.prototype.bind = function bind (element, eventName, handler) {
  this.eventElement(element).bind(eventName, handler);
};

EventManager.prototype.unbind = function unbind (element, eventName, handler) {
  var ee = this.eventElement(element);
  ee.unbind(eventName, handler);

  if (ee.isEmpty) {
    // remove
    this.eventElements.splice(this.eventElements.indexOf(ee), 1);
  }
};

EventManager.prototype.unbindAll = function unbindAll () {
  this.eventElements.forEach(function (e) { return e.unbindAll(); });
  this.eventElements = [];
};

EventManager.prototype.once = function once (element, eventName, handler) {
  var ee = this.eventElement(element);
  var onceHandler = function (evt) {
    ee.unbind(eventName, onceHandler);
    handler(evt);
  };
  ee.bind(eventName, onceHandler);
};

function createEvent(name) {
  if (typeof window.CustomEvent === 'function') {
    return new CustomEvent(name);
  } else {
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(name, false, false, undefined);
    return evt;
  }
}

function processScrollDiff(
  i,
  axis,
  diff,
  useScrollingClass,
  forceFireReachEvent
) {
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var fields;
  if (axis === 'top') {
    fields = [
      'contentHeight',
      'containerHeight',
      'scrollTop',
      'y',
      'up',
      'down' ];
  } else if (axis === 'left') {
    fields = [
      'contentWidth',
      'containerWidth',
      'scrollLeft',
      'x',
      'left',
      'right' ];
  } else {
    throw new Error('A proper axis should be provided');
  }

  processScrollDiff$1(i, diff, fields, useScrollingClass, forceFireReachEvent);
}

function processScrollDiff$1(
  i,
  diff,
  ref,
  useScrollingClass,
  forceFireReachEvent
) {
  var contentHeight = ref[0];
  var containerHeight = ref[1];
  var scrollTop = ref[2];
  var y = ref[3];
  var up = ref[4];
  var down = ref[5];
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var element = i.element;

  // reset reach
  i.reach[y] = null;

  // 1 for subpixel rounding
  if (element[scrollTop] < 1) {
    i.reach[y] = 'start';
  }

  // 1 for subpixel rounding
  if (element[scrollTop] > i[contentHeight] - i[containerHeight] - 1) {
    i.reach[y] = 'end';
  }

  if (diff) {
    element.dispatchEvent(createEvent(("ps-scroll-" + y)));

    if (diff < 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + up)));
    } else if (diff > 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + down)));
    }

    if (useScrollingClass) {
      setScrollingClassInstantly(i, y);
    }
  }

  if (i.reach[y] && (diff || forceFireReachEvent)) {
    element.dispatchEvent(createEvent(("ps-" + y + "-reach-" + (i.reach[y]))));
  }
}

function toInt(x) {
  return parseInt(x, 10) || 0;
}

function isEditable(el) {
  return (
    matches(el, 'input,[contenteditable]') ||
    matches(el, 'select,[contenteditable]') ||
    matches(el, 'textarea,[contenteditable]') ||
    matches(el, 'button,[contenteditable]')
  );
}

function outerWidth(element) {
  var styles = get(element);
  return (
    toInt(styles.width) +
    toInt(styles.paddingLeft) +
    toInt(styles.paddingRight) +
    toInt(styles.borderLeftWidth) +
    toInt(styles.borderRightWidth)
  );
}

var env = {
  isWebKit:
    typeof document !== 'undefined' &&
    'WebkitAppearance' in document.documentElement.style,
  supportsTouch:
    typeof window !== 'undefined' &&
    ('ontouchstart' in window ||
      ('maxTouchPoints' in window.navigator &&
        window.navigator.maxTouchPoints > 0) ||
      (window.DocumentTouch && document instanceof window.DocumentTouch)),
  supportsIePointer:
    typeof navigator !== 'undefined' && navigator.msMaxTouchPoints,
  isChrome:
    typeof navigator !== 'undefined' &&
    /Chrome/i.test(navigator && navigator.userAgent),
};

function updateGeometry(i) {
  var element = i.element;
  var roundedScrollTop = Math.floor(element.scrollTop);
  var rect = element.getBoundingClientRect();

  i.containerWidth = Math.ceil(rect.width);
  i.containerHeight = Math.ceil(rect.height);
  i.contentWidth = element.scrollWidth;
  i.contentHeight = element.scrollHeight;

  if (!element.contains(i.scrollbarXRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('x')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarXRail);
  }
  if (!element.contains(i.scrollbarYRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('y')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarYRail);
  }

  if (
    !i.settings.suppressScrollX &&
    i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth
  ) {
    i.scrollbarXActive = true;
    i.railXWidth = i.containerWidth - i.railXMarginWidth;
    i.railXRatio = i.containerWidth / i.railXWidth;
    i.scrollbarXWidth = getThumbSize(
      i,
      toInt((i.railXWidth * i.containerWidth) / i.contentWidth)
    );
    i.scrollbarXLeft = toInt(
      ((i.negativeScrollAdjustment + element.scrollLeft) *
        (i.railXWidth - i.scrollbarXWidth)) /
        (i.contentWidth - i.containerWidth)
    );
  } else {
    i.scrollbarXActive = false;
  }

  if (
    !i.settings.suppressScrollY &&
    i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight
  ) {
    i.scrollbarYActive = true;
    i.railYHeight = i.containerHeight - i.railYMarginHeight;
    i.railYRatio = i.containerHeight / i.railYHeight;
    i.scrollbarYHeight = getThumbSize(
      i,
      toInt((i.railYHeight * i.containerHeight) / i.contentHeight)
    );
    i.scrollbarYTop = toInt(
      (roundedScrollTop * (i.railYHeight - i.scrollbarYHeight)) /
        (i.contentHeight - i.containerHeight)
    );
  } else {
    i.scrollbarYActive = false;
  }

  if (i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth) {
    i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth;
  }
  if (i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight) {
    i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight;
  }

  updateCss(element, i);

  if (i.scrollbarXActive) {
    element.classList.add(cls.state.active('x'));
  } else {
    element.classList.remove(cls.state.active('x'));
    i.scrollbarXWidth = 0;
    i.scrollbarXLeft = 0;
    element.scrollLeft = i.isRtl === true ? i.contentWidth : 0;
  }
  if (i.scrollbarYActive) {
    element.classList.add(cls.state.active('y'));
  } else {
    element.classList.remove(cls.state.active('y'));
    i.scrollbarYHeight = 0;
    i.scrollbarYTop = 0;
    element.scrollTop = 0;
  }
}

function getThumbSize(i, thumbSize) {
  if (i.settings.minScrollbarLength) {
    thumbSize = Math.max(thumbSize, i.settings.minScrollbarLength);
  }
  if (i.settings.maxScrollbarLength) {
    thumbSize = Math.min(thumbSize, i.settings.maxScrollbarLength);
  }
  return thumbSize;
}

function updateCss(element, i) {
  var xRailOffset = { width: i.railXWidth };
  var roundedScrollTop = Math.floor(element.scrollTop);

  if (i.isRtl) {
    xRailOffset.left =
      i.negativeScrollAdjustment +
      element.scrollLeft +
      i.containerWidth -
      i.contentWidth;
  } else {
    xRailOffset.left = element.scrollLeft;
  }
  if (i.isScrollbarXUsingBottom) {
    xRailOffset.bottom = i.scrollbarXBottom - roundedScrollTop;
  } else {
    xRailOffset.top = i.scrollbarXTop + roundedScrollTop;
  }
  set(i.scrollbarXRail, xRailOffset);

  var yRailOffset = { top: roundedScrollTop, height: i.railYHeight };
  if (i.isScrollbarYUsingRight) {
    if (i.isRtl) {
      yRailOffset.right =
        i.contentWidth -
        (i.negativeScrollAdjustment + element.scrollLeft) -
        i.scrollbarYRight -
        i.scrollbarYOuterWidth -
        9;
    } else {
      yRailOffset.right = i.scrollbarYRight - element.scrollLeft;
    }
  } else {
    if (i.isRtl) {
      yRailOffset.left =
        i.negativeScrollAdjustment +
        element.scrollLeft +
        i.containerWidth * 2 -
        i.contentWidth -
        i.scrollbarYLeft -
        i.scrollbarYOuterWidth;
    } else {
      yRailOffset.left = i.scrollbarYLeft + element.scrollLeft;
    }
  }
  set(i.scrollbarYRail, yRailOffset);

  set(i.scrollbarX, {
    left: i.scrollbarXLeft,
    width: i.scrollbarXWidth - i.railBorderXWidth,
  });
  set(i.scrollbarY, {
    top: i.scrollbarYTop,
    height: i.scrollbarYHeight - i.railBorderYWidth,
  });
}

function clickRail(i) {
  var element = i.element;

  i.event.bind(i.scrollbarY, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarYRail, 'mousedown', function (e) {
    var positionTop =
      e.pageY -
      window.pageYOffset -
      i.scrollbarYRail.getBoundingClientRect().top;
    var direction = positionTop > i.scrollbarYTop ? 1 : -1;

    i.element.scrollTop += direction * i.containerHeight;
    updateGeometry(i);

    e.stopPropagation();
  });

  i.event.bind(i.scrollbarX, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarXRail, 'mousedown', function (e) {
    var positionLeft =
      e.pageX -
      window.pageXOffset -
      i.scrollbarXRail.getBoundingClientRect().left;
    var direction = positionLeft > i.scrollbarXLeft ? 1 : -1;

    i.element.scrollLeft += direction * i.containerWidth;
    updateGeometry(i);

    e.stopPropagation();
  });
}

function dragThumb(i) {
  bindMouseScrollHandler(i, [
    'containerWidth',
    'contentWidth',
    'pageX',
    'railXWidth',
    'scrollbarX',
    'scrollbarXWidth',
    'scrollLeft',
    'x',
    'scrollbarXRail' ]);
  bindMouseScrollHandler(i, [
    'containerHeight',
    'contentHeight',
    'pageY',
    'railYHeight',
    'scrollbarY',
    'scrollbarYHeight',
    'scrollTop',
    'y',
    'scrollbarYRail' ]);
}

function bindMouseScrollHandler(
  i,
  ref
) {
  var containerHeight = ref[0];
  var contentHeight = ref[1];
  var pageY = ref[2];
  var railYHeight = ref[3];
  var scrollbarY = ref[4];
  var scrollbarYHeight = ref[5];
  var scrollTop = ref[6];
  var y = ref[7];
  var scrollbarYRail = ref[8];

  var element = i.element;

  var startingScrollTop = null;
  var startingMousePageY = null;
  var scrollBy = null;

  function mouseMoveHandler(e) {
    if (e.touches && e.touches[0]) {
      e[pageY] = e.touches[0].pageY;
    }
    element[scrollTop] =
      startingScrollTop + scrollBy * (e[pageY] - startingMousePageY);
    addScrollingClass(i, y);
    updateGeometry(i);

    e.stopPropagation();
    e.preventDefault();
  }

  function mouseUpHandler() {
    removeScrollingClass(i, y);
    i[scrollbarYRail].classList.remove(cls.state.clicking);
    i.event.unbind(i.ownerDocument, 'mousemove', mouseMoveHandler);
  }

  function bindMoves(e, touchMode) {
    startingScrollTop = element[scrollTop];
    if (touchMode && e.touches) {
      e[pageY] = e.touches[0].pageY;
    }
    startingMousePageY = e[pageY];
    scrollBy =
      (i[contentHeight] - i[containerHeight]) /
      (i[railYHeight] - i[scrollbarYHeight]);
    if (!touchMode) {
      i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);
      i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);
      e.preventDefault();
    } else {
      i.event.bind(i.ownerDocument, 'touchmove', mouseMoveHandler);
    }

    i[scrollbarYRail].classList.add(cls.state.clicking);

    e.stopPropagation();
  }

  i.event.bind(i[scrollbarY], 'mousedown', function (e) {
    bindMoves(e);
  });
  i.event.bind(i[scrollbarY], 'touchstart', function (e) {
    bindMoves(e, true);
  });
}

function keyboard(i) {
  var element = i.element;

  var elementHovered = function () { return matches(element, ':hover'); };
  var scrollbarFocused = function () { return matches(i.scrollbarX, ':focus') || matches(i.scrollbarY, ':focus'); };

  function shouldPreventDefault(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    if (deltaX === 0) {
      if (!i.scrollbarYActive) {
        return false;
      }
      if (
        (scrollTop === 0 && deltaY > 0) ||
        (scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }

    var scrollLeft = element.scrollLeft;
    if (deltaY === 0) {
      if (!i.scrollbarXActive) {
        return false;
      }
      if (
        (scrollLeft === 0 && deltaX < 0) ||
        (scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }
    return true;
  }

  i.event.bind(i.ownerDocument, 'keydown', function (e) {
    if (
      (e.isDefaultPrevented && e.isDefaultPrevented()) ||
      e.defaultPrevented
    ) {
      return;
    }

    if (!elementHovered() && !scrollbarFocused()) {
      return;
    }

    var activeElement = document.activeElement
      ? document.activeElement
      : i.ownerDocument.activeElement;
    if (activeElement) {
      if (activeElement.tagName === 'IFRAME') {
        activeElement = activeElement.contentDocument.activeElement;
      } else {
        // go deeper if element is a webcomponent
        while (activeElement.shadowRoot) {
          activeElement = activeElement.shadowRoot.activeElement;
        }
      }
      if (isEditable(activeElement)) {
        return;
      }
    }

    var deltaX = 0;
    var deltaY = 0;

    switch (e.which) {
      case 37: // left
        if (e.metaKey) {
          deltaX = -i.contentWidth;
        } else if (e.altKey) {
          deltaX = -i.containerWidth;
        } else {
          deltaX = -30;
        }
        break;
      case 38: // up
        if (e.metaKey) {
          deltaY = i.contentHeight;
        } else if (e.altKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = 30;
        }
        break;
      case 39: // right
        if (e.metaKey) {
          deltaX = i.contentWidth;
        } else if (e.altKey) {
          deltaX = i.containerWidth;
        } else {
          deltaX = 30;
        }
        break;
      case 40: // down
        if (e.metaKey) {
          deltaY = -i.contentHeight;
        } else if (e.altKey) {
          deltaY = -i.containerHeight;
        } else {
          deltaY = -30;
        }
        break;
      case 32: // space bar
        if (e.shiftKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = -i.containerHeight;
        }
        break;
      case 33: // page up
        deltaY = i.containerHeight;
        break;
      case 34: // page down
        deltaY = -i.containerHeight;
        break;
      case 36: // home
        deltaY = i.contentHeight;
        break;
      case 35: // end
        deltaY = -i.contentHeight;
        break;
      default:
        return;
    }

    if (i.settings.suppressScrollX && deltaX !== 0) {
      return;
    }
    if (i.settings.suppressScrollY && deltaY !== 0) {
      return;
    }

    element.scrollTop -= deltaY;
    element.scrollLeft += deltaX;
    updateGeometry(i);

    if (shouldPreventDefault(deltaX, deltaY)) {
      e.preventDefault();
    }
  });
}

function wheel(i) {
  var element = i.element;

  function shouldPreventDefault(deltaX, deltaY) {
    var roundedScrollTop = Math.floor(element.scrollTop);
    var isTop = element.scrollTop === 0;
    var isBottom =
      roundedScrollTop + element.offsetHeight === element.scrollHeight;
    var isLeft = element.scrollLeft === 0;
    var isRight =
      element.scrollLeft + element.offsetWidth === element.scrollWidth;

    var hitsBound;

    // pick axis with primary direction
    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      hitsBound = isTop || isBottom;
    } else {
      hitsBound = isLeft || isRight;
    }

    return hitsBound ? !i.settings.wheelPropagation : true;
  }

  function getDeltaFromEvent(e) {
    var deltaX = e.deltaX;
    var deltaY = -1 * e.deltaY;

    if (typeof deltaX === 'undefined' || typeof deltaY === 'undefined') {
      // OS X Safari
      deltaX = (-1 * e.wheelDeltaX) / 6;
      deltaY = e.wheelDeltaY / 6;
    }

    if (e.deltaMode && e.deltaMode === 1) {
      // Firefox in deltaMode 1: Line scrolling
      deltaX *= 10;
      deltaY *= 10;
    }

    if (deltaX !== deltaX && deltaY !== deltaY /* NaN checks */) {
      // IE in some mouse drivers
      deltaX = 0;
      deltaY = e.wheelDelta;
    }

    if (e.shiftKey) {
      // reverse axis with shift key
      return [-deltaY, -deltaX];
    }
    return [deltaX, deltaY];
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    // FIXME: this is a workaround for <select> issue in FF and IE #571
    if (!env.isWebKit && element.querySelector('select:focus')) {
      return true;
    }

    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);

      // if deltaY && vertical scrollable
      if (deltaY && style.overflowY.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            (cursor.scrollTop > 0 && deltaY < 0) ||
            (cursor.scrollTop < maxScrollTop && deltaY > 0)
          ) {
            return true;
          }
        }
      }
      // if deltaX && horizontal scrollable
      if (deltaX && style.overflowX.match(/(scroll|auto)/)) {
        var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            (cursor.scrollLeft > 0 && deltaX < 0) ||
            (cursor.scrollLeft < maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function mousewheelHandler(e) {
    var ref = getDeltaFromEvent(e);
    var deltaX = ref[0];
    var deltaY = ref[1];

    if (shouldBeConsumedByChild(e.target, deltaX, deltaY)) {
      return;
    }

    var shouldPrevent = false;
    if (!i.settings.useBothWheelAxes) {
      // deltaX will only be used for horizontal scrolling and deltaY will
      // only be used for vertical scrolling - this is the default
      element.scrollTop -= deltaY * i.settings.wheelSpeed;
      element.scrollLeft += deltaX * i.settings.wheelSpeed;
    } else if (i.scrollbarYActive && !i.scrollbarXActive) {
      // only vertical scrollbar is active and useBothWheelAxes option is
      // active, so let's scroll vertical bar using both mouse wheel axes
      if (deltaY) {
        element.scrollTop -= deltaY * i.settings.wheelSpeed;
      } else {
        element.scrollTop += deltaX * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    } else if (i.scrollbarXActive && !i.scrollbarYActive) {
      // useBothWheelAxes and only horizontal bar is active, so use both
      // wheel axes for horizontal bar
      if (deltaX) {
        element.scrollLeft += deltaX * i.settings.wheelSpeed;
      } else {
        element.scrollLeft -= deltaY * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    }

    updateGeometry(i);

    shouldPrevent = shouldPrevent || shouldPreventDefault(deltaX, deltaY);
    if (shouldPrevent && !e.ctrlKey) {
      e.stopPropagation();
      e.preventDefault();
    }
  }

  if (typeof window.onwheel !== 'undefined') {
    i.event.bind(element, 'wheel', mousewheelHandler);
  } else if (typeof window.onmousewheel !== 'undefined') {
    i.event.bind(element, 'mousewheel', mousewheelHandler);
  }
}

function touch(i) {
  if (!env.supportsTouch && !env.supportsIePointer) {
    return;
  }

  var element = i.element;

  function shouldPrevent(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    var scrollLeft = element.scrollLeft;
    var magnitudeX = Math.abs(deltaX);
    var magnitudeY = Math.abs(deltaY);

    if (magnitudeY > magnitudeX) {
      // user is perhaps trying to swipe up/down the page

      if (
        (deltaY < 0 && scrollTop === i.contentHeight - i.containerHeight) ||
        (deltaY > 0 && scrollTop === 0)
      ) {
        // set prevent for mobile Chrome refresh
        return window.scrollY === 0 && deltaY > 0 && env.isChrome;
      }
    } else if (magnitudeX > magnitudeY) {
      // user is perhaps trying to swipe left/right across the page

      if (
        (deltaX < 0 && scrollLeft === i.contentWidth - i.containerWidth) ||
        (deltaX > 0 && scrollLeft === 0)
      ) {
        return true;
      }
    }

    return true;
  }

  function applyTouchMove(differenceX, differenceY) {
    element.scrollTop -= differenceY;
    element.scrollLeft -= differenceX;

    updateGeometry(i);
  }

  var startOffset = {};
  var startTime = 0;
  var speed = {};
  var easingLoop = null;

  function getTouch(e) {
    if (e.targetTouches) {
      return e.targetTouches[0];
    } else {
      // Maybe IE pointer
      return e;
    }
  }

  function shouldHandle(e) {
    if (e.pointerType && e.pointerType === 'pen' && e.buttons === 0) {
      return false;
    }
    if (e.targetTouches && e.targetTouches.length === 1) {
      return true;
    }
    if (
      e.pointerType &&
      e.pointerType !== 'mouse' &&
      e.pointerType !== e.MSPOINTER_TYPE_MOUSE
    ) {
      return true;
    }
    return false;
  }

  function touchStart(e) {
    if (!shouldHandle(e)) {
      return;
    }

    var touch = getTouch(e);

    startOffset.pageX = touch.pageX;
    startOffset.pageY = touch.pageY;

    startTime = new Date().getTime();

    if (easingLoop !== null) {
      clearInterval(easingLoop);
    }
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);

      // if deltaY && vertical scrollable
      if (deltaY && style.overflowY.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            (cursor.scrollTop > 0 && deltaY < 0) ||
            (cursor.scrollTop < maxScrollTop && deltaY > 0)
          ) {
            return true;
          }
        }
      }
      // if deltaX && horizontal scrollable
      if (deltaX && style.overflowX.match(/(scroll|auto)/)) {
        var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            (cursor.scrollLeft > 0 && deltaX < 0) ||
            (cursor.scrollLeft < maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function touchMove(e) {
    if (shouldHandle(e)) {
      var touch = getTouch(e);

      var currentOffset = { pageX: touch.pageX, pageY: touch.pageY };

      var differenceX = currentOffset.pageX - startOffset.pageX;
      var differenceY = currentOffset.pageY - startOffset.pageY;

      if (shouldBeConsumedByChild(e.target, differenceX, differenceY)) {
        return;
      }

      applyTouchMove(differenceX, differenceY);
      startOffset = currentOffset;

      var currentTime = new Date().getTime();

      var timeGap = currentTime - startTime;
      if (timeGap > 0) {
        speed.x = differenceX / timeGap;
        speed.y = differenceY / timeGap;
        startTime = currentTime;
      }

      if (shouldPrevent(differenceX, differenceY)) {
        e.preventDefault();
      }
    }
  }
  function touchEnd() {
    if (i.settings.swipeEasing) {
      clearInterval(easingLoop);
      easingLoop = setInterval(function() {
        if (i.isInitialized) {
          clearInterval(easingLoop);
          return;
        }

        if (!speed.x && !speed.y) {
          clearInterval(easingLoop);
          return;
        }

        if (Math.abs(speed.x) < 0.01 && Math.abs(speed.y) < 0.01) {
          clearInterval(easingLoop);
          return;
        }

        applyTouchMove(speed.x * 30, speed.y * 30);

        speed.x *= 0.8;
        speed.y *= 0.8;
      }, 10);
    }
  }

  if (env.supportsTouch) {
    i.event.bind(element, 'touchstart', touchStart);
    i.event.bind(element, 'touchmove', touchMove);
    i.event.bind(element, 'touchend', touchEnd);
  } else if (env.supportsIePointer) {
    if (window.PointerEvent) {
      i.event.bind(element, 'pointerdown', touchStart);
      i.event.bind(element, 'pointermove', touchMove);
      i.event.bind(element, 'pointerup', touchEnd);
    } else if (window.MSPointerEvent) {
      i.event.bind(element, 'MSPointerDown', touchStart);
      i.event.bind(element, 'MSPointerMove', touchMove);
      i.event.bind(element, 'MSPointerUp', touchEnd);
    }
  }
}

var defaultSettings = function () { return ({
  handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch'],
  maxScrollbarLength: null,
  minScrollbarLength: null,
  scrollingThreshold: 1000,
  scrollXMarginOffset: 0,
  scrollYMarginOffset: 0,
  suppressScrollX: false,
  suppressScrollY: false,
  swipeEasing: true,
  useBothWheelAxes: false,
  wheelPropagation: true,
  wheelSpeed: 1,
}); };

var handlers = {
  'click-rail': clickRail,
  'drag-thumb': dragThumb,
  keyboard: keyboard,
  wheel: wheel,
  touch: touch,
};

var PerfectScrollbar = function PerfectScrollbar(element, userSettings) {
  var this$1 = this;
  if ( userSettings === void 0 ) userSettings = {};

  if (typeof element === 'string') {
    element = document.querySelector(element);
  }

  if (!element || !element.nodeName) {
    throw new Error('no element is specified to initialize PerfectScrollbar');
  }

  this.element = element;

  element.classList.add(cls.main);

  this.settings = defaultSettings();
  for (var key in userSettings) {
    this.settings[key] = userSettings[key];
  }

  this.containerWidth = null;
  this.containerHeight = null;
  this.contentWidth = null;
  this.contentHeight = null;

  var focus = function () { return element.classList.add(cls.state.focus); };
  var blur = function () { return element.classList.remove(cls.state.focus); };

  this.isRtl = get(element).direction === 'rtl';
  if (this.isRtl === true) {
    element.classList.add(cls.rtl);
  }
  this.isNegativeScroll = (function () {
    var originalScrollLeft = element.scrollLeft;
    var result = null;
    element.scrollLeft = -1;
    result = element.scrollLeft < 0;
    element.scrollLeft = originalScrollLeft;
    return result;
  })();
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? element.scrollWidth - element.clientWidth
    : 0;
  this.event = new EventManager();
  this.ownerDocument = element.ownerDocument || document;

  this.scrollbarXRail = div(cls.element.rail('x'));
  element.appendChild(this.scrollbarXRail);
  this.scrollbarX = div(cls.element.thumb('x'));
  this.scrollbarXRail.appendChild(this.scrollbarX);
  this.scrollbarX.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarX, 'focus', focus);
  this.event.bind(this.scrollbarX, 'blur', blur);
  this.scrollbarXActive = null;
  this.scrollbarXWidth = null;
  this.scrollbarXLeft = null;
  var railXStyle = get(this.scrollbarXRail);
  this.scrollbarXBottom = parseInt(railXStyle.bottom, 10);
  if (isNaN(this.scrollbarXBottom)) {
    this.isScrollbarXUsingBottom = false;
    this.scrollbarXTop = toInt(railXStyle.top);
  } else {
    this.isScrollbarXUsingBottom = true;
  }
  this.railBorderXWidth =
    toInt(railXStyle.borderLeftWidth) + toInt(railXStyle.borderRightWidth);
  // Set rail to display:block to calculate margins
  set(this.scrollbarXRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(railXStyle.marginLeft) + toInt(railXStyle.marginRight);
  set(this.scrollbarXRail, { display: '' });
  this.railXWidth = null;
  this.railXRatio = null;

  this.scrollbarYRail = div(cls.element.rail('y'));
  element.appendChild(this.scrollbarYRail);
  this.scrollbarY = div(cls.element.thumb('y'));
  this.scrollbarYRail.appendChild(this.scrollbarY);
  this.scrollbarY.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarY, 'focus', focus);
  this.event.bind(this.scrollbarY, 'blur', blur);
  this.scrollbarYActive = null;
  this.scrollbarYHeight = null;
  this.scrollbarYTop = null;
  var railYStyle = get(this.scrollbarYRail);
  this.scrollbarYRight = parseInt(railYStyle.right, 10);
  if (isNaN(this.scrollbarYRight)) {
    this.isScrollbarYUsingRight = false;
    this.scrollbarYLeft = toInt(railYStyle.left);
  } else {
    this.isScrollbarYUsingRight = true;
  }
  this.scrollbarYOuterWidth = this.isRtl ? outerWidth(this.scrollbarY) : null;
  this.railBorderYWidth =
    toInt(railYStyle.borderTopWidth) + toInt(railYStyle.borderBottomWidth);
  set(this.scrollbarYRail, { display: 'block' });
  this.railYMarginHeight =
    toInt(railYStyle.marginTop) + toInt(railYStyle.marginBottom);
  set(this.scrollbarYRail, { display: '' });
  this.railYHeight = null;
  this.railYRatio = null;

  this.reach = {
    x:
      element.scrollLeft <= 0
        ? 'start'
        : element.scrollLeft >= this.contentWidth - this.containerWidth
        ? 'end'
        : null,
    y:
      element.scrollTop <= 0
        ? 'start'
        : element.scrollTop >= this.contentHeight - this.containerHeight
        ? 'end'
        : null,
  };

  this.isAlive = true;

  this.settings.handlers.forEach(function (handlerName) { return handlers[handlerName](this$1); });

  this.lastScrollTop = Math.floor(element.scrollTop); // for onScroll only
  this.lastScrollLeft = element.scrollLeft; // for onScroll only
  this.event.bind(this.element, 'scroll', function (e) { return this$1.onScroll(e); });
  updateGeometry(this);
};

PerfectScrollbar.prototype.update = function update () {
  if (!this.isAlive) {
    return;
  }

  // Recalcuate negative scrollLeft adjustment
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? this.element.scrollWidth - this.element.clientWidth
    : 0;

  // Recalculate rail margins
  set(this.scrollbarXRail, { display: 'block' });
  set(this.scrollbarYRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(get(this.scrollbarXRail).marginLeft) +
    toInt(get(this.scrollbarXRail).marginRight);
  this.railYMarginHeight =
    toInt(get(this.scrollbarYRail).marginTop) +
    toInt(get(this.scrollbarYRail).marginBottom);

  // Hide scrollbars not to affect scrollWidth and scrollHeight
  set(this.scrollbarXRail, { display: 'none' });
  set(this.scrollbarYRail, { display: 'none' });

  updateGeometry(this);

  processScrollDiff(this, 'top', 0, false, true);
  processScrollDiff(this, 'left', 0, false, true);

  set(this.scrollbarXRail, { display: '' });
  set(this.scrollbarYRail, { display: '' });
};

PerfectScrollbar.prototype.onScroll = function onScroll (e) {
  if (!this.isAlive) {
    return;
  }

  updateGeometry(this);
  processScrollDiff(this, 'top', this.element.scrollTop - this.lastScrollTop);
  processScrollDiff(
    this,
    'left',
    this.element.scrollLeft - this.lastScrollLeft
  );

  this.lastScrollTop = Math.floor(this.element.scrollTop);
  this.lastScrollLeft = this.element.scrollLeft;
};

PerfectScrollbar.prototype.destroy = function destroy () {
  if (!this.isAlive) {
    return;
  }

  this.event.unbindAll();
  remove(this.scrollbarX);
  remove(this.scrollbarY);
  remove(this.scrollbarXRail);
  remove(this.scrollbarYRail);
  this.removePsClasses();

  // unset elements
  this.element = null;
  this.scrollbarX = null;
  this.scrollbarY = null;
  this.scrollbarXRail = null;
  this.scrollbarYRail = null;

  this.isAlive = false;
};

PerfectScrollbar.prototype.removePsClasses = function removePsClasses () {
  this.element.className = this.element.className
    .split(' ')
    .filter(function (name) { return !name.match(/^ps([-_].+|)$/); })
    .join(' ');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PerfectScrollbar);


/***/ }),

/***/ 79674:
/*!*************************************************************************!*\
  !*** ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);


/***/ }),

/***/ 71925:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/Scheduler.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Scheduler": () => (/* binding */ Scheduler)
/* harmony export */ });
class Scheduler {
    constructor(SchedulerAction, now = Scheduler.now) {
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    schedule(work, delay = 0, state) {
        return new this.SchedulerAction(this, work).schedule(state, delay);
    }
}
Scheduler.now = () => Date.now();


/***/ }),

/***/ 36312:
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/fromEvent.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromEvent": () => (/* binding */ fromEvent)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Observable */ 12378);
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isArray */ 94327);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isFunction */ 51900);
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../operators/map */ 86942);




const toString = (() => Object.prototype.toString)();
function fromEvent(target, eventName, options, resultSelector) {
    if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(options)) {
        resultSelector = options;
        options = undefined;
    }
    if (resultSelector) {
        return fromEvent(target, eventName, options).pipe((0,_operators_map__WEBPACK_IMPORTED_MODULE_1__.map)(args => (0,_util_isArray__WEBPACK_IMPORTED_MODULE_2__.isArray)(args) ? resultSelector(...args) : resultSelector(args)));
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_3__.Observable(subscriber => {
        function handler(e) {
            if (arguments.length > 1) {
                subscriber.next(Array.prototype.slice.call(arguments));
            }
            else {
                subscriber.next(e);
            }
        }
        setupSubscription(target, eventName, handler, subscriber, options);
    });
}
function setupSubscription(sourceObj, eventName, handler, subscriber, options) {
    let unsubscribe;
    if (isEventTarget(sourceObj)) {
        const source = sourceObj;
        sourceObj.addEventListener(eventName, handler, options);
        unsubscribe = () => source.removeEventListener(eventName, handler, options);
    }
    else if (isJQueryStyleEventEmitter(sourceObj)) {
        const source = sourceObj;
        sourceObj.on(eventName, handler);
        unsubscribe = () => source.off(eventName, handler);
    }
    else if (isNodeStyleEventEmitter(sourceObj)) {
        const source = sourceObj;
        sourceObj.addListener(eventName, handler);
        unsubscribe = () => source.removeListener(eventName, handler);
    }
    else if (sourceObj && sourceObj.length) {
        for (let i = 0, len = sourceObj.length; i < len; i++) {
            setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
        }
    }
    else {
        throw new TypeError('Invalid event target');
    }
    subscriber.add(unsubscribe);
}
function isNodeStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
}
function isJQueryStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
}
function isEventTarget(sourceObj) {
    return sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
}


/***/ }),

/***/ 45398:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/timer.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timer": () => (/* binding */ timer)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Observable */ 12378);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scheduler/async */ 10328);
/* harmony import */ var _util_isNumeric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isNumeric */ 7269);
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isScheduler */ 27507);




function timer(dueTime = 0, periodOrScheduler, scheduler) {
    let period = -1;
    if ((0,_util_isNumeric__WEBPACK_IMPORTED_MODULE_0__.isNumeric)(periodOrScheduler)) {
        period = Number(periodOrScheduler) < 1 && 1 || Number(periodOrScheduler);
    }
    else if ((0,_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__.isScheduler)(periodOrScheduler)) {
        scheduler = periodOrScheduler;
    }
    if (!(0,_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__.isScheduler)(scheduler)) {
        scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_2__.async;
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_3__.Observable(subscriber => {
        const due = (0,_util_isNumeric__WEBPACK_IMPORTED_MODULE_0__.isNumeric)(dueTime)
            ? dueTime
            : (+dueTime - scheduler.now());
        return scheduler.schedule(dispatch, due, {
            index: 0, period, subscriber
        });
    });
}
function dispatch(state) {
    const { index, period, subscriber } = state;
    subscriber.next(index);
    if (subscriber.closed) {
        return;
    }
    else if (period === -1) {
        return subscriber.complete();
    }
    state.index = index + 1;
    this.schedule(state, period);
}


/***/ }),

/***/ 76763:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/audit.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "audit": () => (/* binding */ audit)
/* harmony export */ });
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../OuterSubscriber */ 75266);
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/subscribeToResult */ 60640);


function audit(durationSelector) {
    return function auditOperatorFunction(source) {
        return source.lift(new AuditOperator(durationSelector));
    };
}
class AuditOperator {
    constructor(durationSelector) {
        this.durationSelector = durationSelector;
    }
    call(subscriber, source) {
        return source.subscribe(new AuditSubscriber(subscriber, this.durationSelector));
    }
}
class AuditSubscriber extends _OuterSubscriber__WEBPACK_IMPORTED_MODULE_0__.OuterSubscriber {
    constructor(destination, durationSelector) {
        super(destination);
        this.durationSelector = durationSelector;
        this.hasValue = false;
    }
    _next(value) {
        this.value = value;
        this.hasValue = true;
        if (!this.throttled) {
            let duration;
            try {
                const { durationSelector } = this;
                duration = durationSelector(value);
            }
            catch (err) {
                return this.destination.error(err);
            }
            const innerSubscription = (0,_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__.subscribeToResult)(this, duration);
            if (!innerSubscription || innerSubscription.closed) {
                this.clearThrottle();
            }
            else {
                this.add(this.throttled = innerSubscription);
            }
        }
    }
    clearThrottle() {
        const { value, hasValue, throttled } = this;
        if (throttled) {
            this.remove(throttled);
            this.throttled = null;
            throttled.unsubscribe();
        }
        if (hasValue) {
            this.value = null;
            this.hasValue = false;
            this.destination.next(value);
        }
    }
    notifyNext(outerValue, innerValue, outerIndex, innerIndex) {
        this.clearThrottle();
    }
    notifyComplete() {
        this.clearThrottle();
    }
}


/***/ }),

/***/ 71695:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/auditTime.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "auditTime": () => (/* binding */ auditTime)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 10328);
/* harmony import */ var _audit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audit */ 76763);
/* harmony import */ var _observable_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/timer */ 45398);



function auditTime(duration, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
    return (0,_audit__WEBPACK_IMPORTED_MODULE_1__.audit)(() => (0,_observable_timer__WEBPACK_IMPORTED_MODULE_2__.timer)(duration, scheduler));
}


/***/ }),

/***/ 53298:
/*!*******************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/distinctUntilChanged.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "distinctUntilChanged": () => (/* binding */ distinctUntilChanged)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ 60014);

function distinctUntilChanged(compare, keySelector) {
    return (source) => source.lift(new DistinctUntilChangedOperator(compare, keySelector));
}
class DistinctUntilChangedOperator {
    constructor(compare, keySelector) {
        this.compare = compare;
        this.keySelector = keySelector;
    }
    call(subscriber, source) {
        return source.subscribe(new DistinctUntilChangedSubscriber(subscriber, this.compare, this.keySelector));
    }
}
class DistinctUntilChangedSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber {
    constructor(destination, compare, keySelector) {
        super(destination);
        this.keySelector = keySelector;
        this.hasKey = false;
        if (typeof compare === 'function') {
            this.compare = compare;
        }
    }
    compare(x, y) {
        return x === y;
    }
    _next(value) {
        let key;
        try {
            const { keySelector } = this;
            key = keySelector ? keySelector(value) : value;
        }
        catch (err) {
            return this.destination.error(err);
        }
        let result = false;
        if (this.hasKey) {
            try {
                const { compare } = this;
                result = compare(this.key, key);
            }
            catch (err) {
                return this.destination.error(err);
            }
        }
        else {
            this.hasKey = true;
        }
        if (!result) {
            this.key = key;
            this.destination.next(value);
        }
    }
}


/***/ }),

/***/ 29361:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/mapTo.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mapTo": () => (/* binding */ mapTo)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ 60014);

function mapTo(value) {
    return (source) => source.lift(new MapToOperator(value));
}
class MapToOperator {
    constructor(value) {
        this.value = value;
    }
    call(subscriber, source) {
        return source.subscribe(new MapToSubscriber(subscriber, this.value));
    }
}
class MapToSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber {
    constructor(destination, value) {
        super(destination);
        this.value = value;
    }
    _next(x) {
        this.destination.next(this.value);
    }
}


/***/ }),

/***/ 25353:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/Action.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Action": () => (/* binding */ Action)
/* harmony export */ });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscription */ 32425);

class Action extends _Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription {
    constructor(scheduler, work) {
        super();
    }
    schedule(state, delay = 0) {
        return this;
    }
}


/***/ }),

/***/ 3670:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsyncAction.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncAction": () => (/* binding */ AsyncAction)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Action */ 25353);

class AsyncAction extends _Action__WEBPACK_IMPORTED_MODULE_0__.Action {
    constructor(scheduler, work) {
        super(scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
        this.pending = false;
    }
    schedule(state, delay = 0) {
        if (this.closed) {
            return this;
        }
        this.state = state;
        const id = this.id;
        const scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    }
    requestAsyncId(scheduler, id, delay = 0) {
        return setInterval(scheduler.flush.bind(scheduler, this), delay);
    }
    recycleAsyncId(scheduler, id, delay = 0) {
        if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
        }
        clearInterval(id);
        return undefined;
    }
    execute(state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        const error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    }
    _execute(state, delay) {
        let errored = false;
        let errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    }
    _unsubscribe() {
        const id = this.id;
        const scheduler = this.scheduler;
        const actions = scheduler.actions;
        const index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
    }
}


/***/ }),

/***/ 52901:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsyncScheduler.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncScheduler": () => (/* binding */ AsyncScheduler)
/* harmony export */ });
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Scheduler */ 71925);

class AsyncScheduler extends _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler {
    constructor(SchedulerAction, now = _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler.now) {
        super(SchedulerAction, () => {
            if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
                return AsyncScheduler.delegate.now();
            }
            else {
                return now();
            }
        });
        this.actions = [];
        this.active = false;
        this.scheduled = undefined;
    }
    schedule(work, delay = 0, state) {
        if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
            return AsyncScheduler.delegate.schedule(work, delay, state);
        }
        else {
            return super.schedule(work, delay, state);
        }
    }
    flush(action) {
        const { actions } = this;
        if (this.active) {
            actions.push(action);
            return;
        }
        let error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift());
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    }
}


/***/ }),

/***/ 10328:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/async.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "async": () => (/* binding */ async)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncAction */ 3670);
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 52901);


const async = new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__.AsyncAction);


/***/ }),

/***/ 7269:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/isNumeric.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNumeric": () => (/* binding */ isNumeric)
/* harmony export */ });
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray */ 94327);

function isNumeric(val) {
    return !(0,_isArray__WEBPACK_IMPORTED_MODULE_0__.isArray)(val) && (val - parseFloat(val) + 1) >= 0;
}


/***/ }),

/***/ 82006:
/*!******************************************************************!*\
  !*** ./src/app/all-modules/all-modules.component.css?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGwtbW9kdWxlcy5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 3263:
/*!********************************************************!*\
  !*** ./src/app/header/header.component.css?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 57938:
/*!**********************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = ".submenu-slidedown {\r\n  display: block;\r\n  transition: display 2s ease-out;\r\n}\r\n\r\n.submenu-slideup {\r\n  display: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1Ym1lbnUtc2xpZGVkb3duIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0cmFuc2l0aW9uOiBkaXNwbGF5IDJzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4uc3VibWVudS1zbGlkZXVwIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59Il19 */";

/***/ }),

/***/ 16335:
/*!*******************************************************************!*\
  !*** ./src/app/all-modules/all-modules.component.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<app-sidebar></app-sidebar>\r\n<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n";

/***/ }),

/***/ 46727:
/*!*********************************************************!*\
  !*** ./src/app/header/header.component.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "<!-- Header -->\r\n<div class=\"header\">\r\n\r\n    <!-- Logo -->\r\n    <div class=\"header-left\">\r\n        <a routerLink=\"/layout/dashboard/admin\" class=\"logo\">\r\n            <img src=\"assets/img/EserveLogo/350w/digi-logo.png\" height=\"40\" alt=\"\">\r\n        </a>\r\n    </div>\r\n    <!-- /Logo -->\r\n\r\n    <a id=\"toggle_btn\">\r\n        <span class=\"bar-icon\">\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n        </span>\r\n    </a>\r\n\r\n    <!-- Header Title -->\r\n    <div class=\"page-title-box\">\r\n        <h3>{{static_constants.projectLabel}}</h3>\r\n    </div>\r\n    <!-- /Header Title -->\r\n\r\n    <a id=\"mobile_btn\" class=\"mobile_btn\" href=\"javascript:\"><i class=\"fa fa-bars\"></i></a>\r\n\r\n    <!-- Header Menu -->\r\n    <ul class=\"nav user-menu\">\r\n        <!-- Search -->\r\n        <li class=\"nav-item\">\r\n            <div class=\"top-nav-search\">\r\n                <a  class=\"responsive-search\">\r\n                    <i class=\"fa fa-search\"></i>\r\n                </a>\r\n                <form (ngSubmit)=\"onSubmit()\">\r\n                    <input class=\"form-control\" type=\"text\" placeholder=\"Search here\">\r\n                    <button class=\"btn\" type=\"button\"><i class=\"fa fa-search\"></i></button>\r\n                </form>\r\n            </div>\r\n        </li>\r\n        <!-- /Search -->\r\n\r\n        <!-- Flag -->\r\n        <li class=\"nav-item dropdown has-arrow flag-nav\">\r\n            <a href=\"javascript:\" class=\"nav-link dropdown-toggle\" data-bs-toggle=\"dropdown\">\r\n                <img src=\"assets/img/flags/us.png\" alt=\"\" height=\"20\"> <span>English</span>\r\n            </a>\r\n            <div class=\"dropdown-menu dropdown-menu-right\">\r\n                <a  class=\"dropdown-item\">\r\n                    <img src=\"assets/img/flags/us.png\" alt=\"\" height=\"16\"> English\r\n                </a>\r\n                <a  class=\"dropdown-item\">\r\n                    <img src=\"assets/img/flags/fr.png\" alt=\"\" height=\"16\"> French\r\n                </a>\r\n                <a  class=\"dropdown-item\">\r\n                    <img src=\"assets/img/flags/es.png\" alt=\"\" height=\"16\"> Spanish\r\n                </a>\r\n                <a  class=\"dropdown-item\">\r\n                    <img src=\"assets/img/flags/de.png\" alt=\"\" height=\"16\"> German\r\n                </a>\r\n            </div>\r\n        </li>\r\n        <!-- /Flag -->\r\n\r\n        <!-- Notifications -->\r\n        <li class=\"nav-item dropdown\">\r\n            <a href=\"javascript:\" class=\"dropdown-toggle nav-link\" data-bs-toggle=\"dropdown\">\r\n                <i class=\"fa fa-bell-o\"></i> <span class=\"badge rounded-pill\">3</span>\r\n            </a>\r\n            <div class=\"dropdown-menu notifications\">\r\n                <div class=\"topnav-dropdown-header\">\r\n                    <span class=\"notification-title\">Notifications</span>\r\n                    <a (click)=\"clearData('notification')\" href=\"javascript:\" class=\"clear-noti\"> Clear All </a>\r\n                </div>\r\n                <div class=\"noti-content\">\r\n                    <ul class=\"notification-list\">\r\n                        <li class=\"notification-message\" *ngFor=\"let item of notifications;let i = index\">\r\n                            <a routerLink=\"/layout/activities/activities-main\">\r\n                                <div class=\"media d-flex\">\r\n                                    <span class=\"avatar flex-shrink-0\">\r\n                                        <img alt=\"\" src=\"assets/img/profiles/avatar-{{i+ 1}}.jpg\">\r\n                                    </span>\r\n                                    <div class=\"media-body flex-grow-1\">\r\n                                        <p class=\"noti-details\"><span class=\"noti-title\">{{ item.author }}</span>\r\n                                            {{ item.function }} <span class=\"noti-title\">{{ item.message }}</span></p>\r\n                                        <p class=\"noti-time\"><span class=\"notification-time\">{{ item.time }}</span></p>\r\n                                    </div>\r\n                                </div>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"topnav-dropdown-footer\">\r\n                    <a routerLink=\"/layout/activities/activities-main\">View all Notifications</a>\r\n                </div>\r\n            </div>\r\n        </li>\r\n        <!-- /Notifications -->\r\n\r\n        <!-- Message Notifications -->\r\n        <li class=\"nav-item dropdown\">\r\n            <a href=\"javascript:\" class=\"dropdown-toggle nav-link\" data-bs-toggle=\"dropdown\">\r\n                <i class=\"fa fa-comment-o\"></i> <span class=\"badge rounded-pill\">8</span>\r\n            </a>\r\n            <div class=\"dropdown-menu notifications\">\r\n                <div class=\"topnav-dropdown-header\">\r\n                    <span class=\"notification-title\">Messages</span>\r\n                    <a (click)=\"clearData('message')\" href=\"javascript:\" class=\"clear-noti\"> Clear All </a>\r\n                </div>\r\n                <div class=\"noti-content\">\r\n                    <ul class=\"notification-list\">\r\n                        <li class=\"notification-message\" *ngFor=\"let data of messagesData;let i = index\">\r\n                            <a routerLink=\"/layout/apps/chat\">\r\n                                <div class=\"list-item\">\r\n                                    <div class=\"list-left\">\r\n                                        <span class=\"avatar\">\r\n                                            <img alt=\"\" src=\"assets/img/profiles/avatar-{{i+ 1}}.jpg\">\r\n                                        </span>\r\n                                    </div>\r\n                                    <div class=\"list-body\">\r\n                                        <span class=\"message-author\">{{data.author}}</span>\r\n                                        <span class=\"message-time\">{{data.time}}</span>\r\n                                        <div class=\"clearfix\"></div>\r\n                                        <span class=\"message-content\">{{data.message}}</span>\r\n                                    </div>\r\n                                </div>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"topnav-dropdown-footer\">\r\n                    <a routerLink=\"/layout/apps/chat\">View all Messages</a>\r\n                </div>\r\n            </div>\r\n        </li>\r\n        <!-- /Message Notifications -->\r\n\r\n        <li class=\"nav-item dropdown has-arrow main-drop\">\r\n            <a href=\"javascript:\" class=\"dropdown-toggle nav-link\" data-bs-toggle=\"dropdown\">\r\n                <span class=\"user-img\"><img src=\"assets/img/profiles/avatar-21.jpg\" alt=\"\">\r\n                    <span class=\"status online\"></span></span>\r\n                <span>{{userData?.name}}</span>\r\n            </a>\r\n            <div class=\"dropdown-menu\">\r\n                <a class=\"dropdown-item\" routerLink=\"/layout/employees/employeeprofile\">My Profile</a>\r\n                <a class=\"dropdown-item\" routerLink=\"/layout/settings/company-settings\">Settings</a>\r\n                <a class=\"dropdown-item\" (click)=\"Logout()\">Logout</a>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n    <!-- /Header Menu -->\r\n\r\n    <!-- Mobile Menu -->\r\n    <div class=\"dropdown mobile-user-menu\">\r\n        <a class=\"nav-link dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\"><i\r\n                class=\"fa fa-ellipsis-v\"></i></a>\r\n        <div class=\"dropdown-menu dropdown-menu-right\">\r\n            <a class=\"dropdown-item\" routerLink=\"/layout/employees/employeeprofile\">My Profile</a>\r\n            <a class=\"dropdown-item\" href=\"javascript:\">Settings</a>\r\n            <a class=\"dropdown-item\" (click)=\"Logout()\">Logout</a>\r\n        </div>\r\n    </div>\r\n    <!-- /Mobile Menu -->\r\n\r\n</div>\r\n<!-- /Header -->\r\n";

/***/ }),

/***/ 28945:
/*!***********************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "<!-- Sidebar -->\r\n<div class=\"sidebar\" id=\"sidebar\">\r\n  <div class=\"sidebar-inner slimscroll\">\r\n    <perfect-scrollbar [scrollIndicators]=\"false\">\r\n      <div id=\"sidebar-menu\" class=\"sidebar-menu\">\r\n        <ul *ngIf=\"sidebarMenus.default\">\r\n          <li class=\"menu-title\">\r\n            <span>Main</span>\r\n          </li>\r\n          <li\r\n            class=\"submenu\"\r\n            [ngClass]=\"{ active: urlComplete.mainUrl === 'dashboard' }\"\r\n          >\r\n            <a\r\n              href=\"javascript:\"\r\n              [ngClass]=\"{ subdrop: urlComplete.mainUrl === 'dashboard' }\"\r\n            >\r\n              <i class=\"la la-dashboard\"></i>\r\n              <span>Dashboard</span>\r\n              <span class=\"menu-arrow\"></span>\r\n            </a>\r\n            <ul\r\n              style=\"display: none\"\r\n              [ngStyle]=\"{\r\n                display: urlComplete.mainUrl === 'dashboard' ? 'block' : 'none'\r\n              }\"\r\n            >\r\n              <li routerLink=\"/layout/dashboard/admin\">\r\n                <a\r\n                  [ngClass]=\"{ active: urlComplete.subUrl === 'admin' }\"\r\n                  href=\"javascript:\"\r\n                  >Admin Dashboard</a\r\n                >\r\n              </li>\r\n              <li routerLink=\"/layout/dashboard/employee\">\r\n                <a\r\n                  [ngClass]=\"{ active: urlComplete.subUrl === 'employee' }\"\r\n                  href=\"javascript:\"\r\n                  >Employee Dashboard</a\r\n                >\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <li\r\n            class=\"submenu\"\r\n            [ngClass]=\"{ active: urlComplete.mainUrl === 'apps' }\"\r\n          >\r\n            <a\r\n              href=\"javascript:\"\r\n              [ngClass]=\"{ subdrop: urlComplete.mainUrl === 'apps' }\"\r\n            >\r\n              <i class=\"la la-cube\"></i>\r\n              <span> Apps</span>\r\n              <span class=\"menu-arrow\"></span\r\n            ></a>\r\n            <ul\r\n              style=\"display: none\"\r\n              [ngStyle]=\"{\r\n                display: urlComplete.mainUrl === 'apps' ? 'block' : 'none'\r\n              }\"\r\n            >\r\n              <li routerLink=\"/layout/apps/chat\">\r\n                <a href=\"javascript:\">Chat</a>\r\n              </li>\r\n              <li\r\n                class=\"submenu\"\r\n                [ngClass]=\"{ active: urlComplete.mainUrl === 'calls' }\"\r\n              >\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{ subdrop: urlComplete.subUrl === 'calls' }\"\r\n                >\r\n                  <span> Calls</span>\r\n                  <span class=\"menu-arrow\"></span>\r\n                </a>\r\n                <ul\r\n                  style=\"display: none\"\r\n                  [ngStyle]=\"{\r\n                    display: urlComplete.subUrl === 'calls' ? 'block' : 'none'\r\n                  }\"\r\n                >\r\n                  <li routerLink=\"/layout/apps/calls/voice\">\r\n                    <a\r\n                      [ngClass]=\"{ active: urlComplete.childUrl === 'voice' }\"\r\n                      href=\"javascript:\"\r\n                      >Voice Call</a\r\n                    >\r\n                  </li>\r\n                  <li routerLink=\"/layout/apps/calls/video\">\r\n                    <a\r\n                      [ngClass]=\"{ active: urlComplete.childUrl === 'video' }\"\r\n                      href=\"javascript:\"\r\n                      >Video Call</a\r\n                    >\r\n                  </li>\r\n                  <li routerLink=\"/layout/apps/calls/outgoing\">\r\n                    <a\r\n                      [ngClass]=\"{\r\n                        active: urlComplete.childUrl === 'outgoing'\r\n                      }\"\r\n                      href=\"javascript:\"\r\n                      >Outgoing Call</a\r\n                    >\r\n                  </li>\r\n                  <li routerLink=\"/layout/apps/calls/incoming\">\r\n                    <a\r\n                      [ngClass]=\"{\r\n                        active: urlComplete.childUrl === 'incoming'\r\n                      }\"\r\n                      href=\"javascript:\"\r\n                      >Incoming Call</a\r\n                    >\r\n                  </li>\r\n                </ul>\r\n              </li>\r\n              <li routerLink=\"/layout/apps/calendar\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{ active: urlComplete.subUrl === 'calendar' }\"\r\n                  >Calendar</a\r\n                >\r\n              </li>\r\n              <li routerLink=\"/layout/apps/contacts\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{ active: urlComplete.subUrl === 'contacts' }\"\r\n                  >Contacts</a\r\n                >\r\n              </li>\r\n              <li routerLink=\"/layout/apps/email\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{ active: urlComplete.subUrl === 'email' }\"\r\n                  >Email</a\r\n                >\r\n              </li>\r\n              <li routerLink=\"/layout/apps/file-manager\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{ active: urlComplete.subUrl === 'file-manager' }\"\r\n                  >File Manager</a\r\n                >\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <li class=\"menu-title\">\r\n            <span>Employees</span>\r\n          </li>\r\n          <li\r\n            class=\"submenu\"\r\n            [ngClass]=\"{\r\n              active:\r\n                (urlComplete.mainUrl === 'employees' &&\r\n                  urlComplete.subUrl === 'employeepage') ||\r\n                (urlComplete.mainUrl === 'employees' &&\r\n                  urlComplete.subUrl === 'holidays') ||\r\n                (urlComplete.mainUrl === 'employees' &&\r\n                  urlComplete.subUrl === 'adminleaves') ||\r\n                (urlComplete.mainUrl === 'employees' &&\r\n                  urlComplete.subUrl === 'employeeleaves') ||\r\n                (urlComplete.mainUrl === 'employees' &&\r\n                  urlComplete.subUrl === 'leavesettings') ||\r\n                (urlComplete.mainUrl === 'employees' &&\r\n                  urlComplete.subUrl === 'attendanceadmin') ||\r\n                (urlComplete.mainUrl === 'employees' &&\r\n                  urlComplete.subUrl === 'attendanceemployee') ||\r\n                (urlComplete.mainUrl === 'employees' &&\r\n                  urlComplete.subUrl === 'departments') ||\r\n                (urlComplete.mainUrl === 'employees' &&\r\n                  urlComplete.subUrl === 'designation') ||\r\n                (urlComplete.mainUrl === 'employees' &&\r\n                  urlComplete.subUrl === 'timesheet') ||\r\n                (urlComplete.mainUrl === 'employees' &&\r\n                  urlComplete.subUrl === 'overtime') ||\r\n                (urlComplete.mainUrl === 'employees' &&\r\n                  urlComplete.subUrl === 'employeelist') ||\r\n                urlComplete.mainUrl === 'scheduling' ||\r\n                urlComplete.mainUrl === 'shift'\r\n            }\"\r\n          >\r\n            <a\r\n              href=\"javascript:\"\r\n              [ngClass]=\"{\r\n                subdrop:\r\n                  (urlComplete.mainUrl === 'employees' &&\r\n                    urlComplete.subUrl === 'employeepage') ||\r\n                  (urlComplete.mainUrl === 'employees' &&\r\n                    urlComplete.subUrl === 'holidays') ||\r\n                  (urlComplete.mainUrl === 'employees' &&\r\n                    urlComplete.subUrl === 'adminleaves') ||\r\n                  (urlComplete.mainUrl === 'employees' &&\r\n                    urlComplete.subUrl === 'employeeleaves') ||\r\n                  (urlComplete.mainUrl === 'employees' &&\r\n                    urlComplete.subUrl === 'leavesettings') ||\r\n                  (urlComplete.mainUrl === 'employees' &&\r\n                    urlComplete.subUrl === 'attendanceadmin') ||\r\n                  (urlComplete.mainUrl === 'employees' &&\r\n                    urlComplete.subUrl === 'attendanceemployee') ||\r\n                  (urlComplete.mainUrl === 'employees' &&\r\n                    urlComplete.subUrl === 'departments') ||\r\n                  (urlComplete.mainUrl === 'employees' &&\r\n                    urlComplete.subUrl === 'designation') ||\r\n                  (urlComplete.mainUrl === 'employees' &&\r\n                    urlComplete.subUrl === 'timesheet') ||\r\n                  (urlComplete.mainUrl === 'employees' &&\r\n                    urlComplete.subUrl === 'overtime') ||\r\n                  (urlComplete.mainUrl === 'employees' &&\r\n                    urlComplete.subUrl === 'employeelist') ||\r\n                  urlComplete.mainUrl === 'scheduling' ||\r\n                  urlComplete.mainUrl === 'shift'\r\n              }\"\r\n              class=\"noti-dot\"\r\n              ><i class=\"la la-user\"></i> <span> Employees</span>\r\n              <span class=\"menu-arrow\"></span\r\n            ></a>\r\n            <ul\r\n              style=\"display: none\"\r\n              [ngStyle]=\"{\r\n                display:\r\n                  (urlComplete.mainUrl === 'employees' &&\r\n                    urlComplete.subUrl === 'employeepage') ||\r\n                  (urlComplete.mainUrl === 'employees' &&\r\n                    urlComplete.subUrl === 'holidays') ||\r\n                  (urlComplete.mainUrl === 'employees' &&\r\n                    urlComplete.subUrl === 'adminleaves') ||\r\n                  (urlComplete.mainUrl === 'employees' &&\r\n                    urlComplete.subUrl === 'employeeleaves') ||\r\n                  (urlComplete.mainUrl === 'employees' &&\r\n                    urlComplete.subUrl === 'leavesettings') ||\r\n                  (urlComplete.mainUrl === 'employees' &&\r\n                    urlComplete.subUrl === 'attendanceadmin') ||\r\n                  (urlComplete.mainUrl === 'employees' &&\r\n                    urlComplete.subUrl === 'attendanceemployee') ||\r\n                  (urlComplete.mainUrl === 'employees' &&\r\n                    urlComplete.subUrl === 'departments') ||\r\n                  (urlComplete.mainUrl === 'employees' &&\r\n                    urlComplete.subUrl === 'designation') ||\r\n                  (urlComplete.mainUrl === 'employees' &&\r\n                    urlComplete.subUrl === 'timesheet') ||\r\n                  (urlComplete.mainUrl === 'employees' &&\r\n                    urlComplete.subUrl === 'overtime') ||\r\n                  (urlComplete.mainUrl === 'employees' &&\r\n                    urlComplete.subUrl === 'employeelist') ||\r\n                  urlComplete.mainUrl === 'scheduling' ||\r\n                  urlComplete.mainUrl === 'shift'\r\n                    ? 'block'\r\n                    : 'none'\r\n              }\"\r\n            >\r\n              <li routerLink=\"/layout/employees/employeepage\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{\r\n                    active:\r\n                      urlComplete.subUrl === 'employeepage' ||\r\n                      urlComplete.subUrl === 'employeelist'\r\n                  }\"\r\n                  >All Employees</a\r\n                >\r\n              </li>\r\n              <li routerLink=\"/layout/employees/holidays\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{ active: urlComplete.subUrl === 'holidays' }\"\r\n                  >Holidays</a\r\n                >\r\n              </li>\r\n              <li routerLink=\"/layout/employees/adminleaves\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{ active: urlComplete.subUrl === 'adminleaves' }\"\r\n                  >Leaves (Admin)\r\n                  <span class=\"badge rounded-pill bg-primary float-end\"\r\n                    >1</span\r\n                  ></a\r\n                >\r\n              </li>\r\n              <li routerLink=\"/layout/employees/employeeleaves\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{\r\n                    active: urlComplete.subUrl === 'employeeleaves'\r\n                  }\"\r\n                  >Leaves (Employee)</a\r\n                >\r\n              </li>\r\n              <li routerLink=\"/layout/employees/leavesettings\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{ active: urlComplete.subUrl === 'leavesettings' }\"\r\n                  >Leave Settings</a\r\n                >\r\n              </li>\r\n              <li routerLink=\"/layout/employees/attendanceadmin\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{\r\n                    active: urlComplete.subUrl === 'attendanceadmin'\r\n                  }\"\r\n                  >Attendance (Admin)</a\r\n                >\r\n              </li>\r\n              <li routerLink=\"/layout/employees/attendanceemployee\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{\r\n                    active: urlComplete.subUrl === 'attendanceemployee'\r\n                  }\"\r\n                  >Attendance (Employee)</a\r\n                >\r\n              </li>\r\n              <li routerLink=\"/layout/employees/departments\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{ active: urlComplete.subUrl === 'departments' }\"\r\n                  >Departments</a\r\n                >\r\n              </li>\r\n              <li routerLink=\"/layout/employees/designation\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{ active: urlComplete.subUrl === 'designation' }\"\r\n                  >Designations</a\r\n                >\r\n              </li>\r\n              <li routerLink=\"/layout/employees/timesheet\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{ active: urlComplete.subUrl === 'timesheet' }\"\r\n                  >Timesheet</a\r\n                >\r\n              </li>\r\n              <li routerLink=\"/layout/scheduling/shift-scheduling\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{\r\n                    active:\r\n                      urlComplete.subUrl === 'shift-scheduling' ||\r\n                      urlComplete.subUrl === 'shift-list'\r\n                  }\"\r\n                  >Shift & Schedule</a\r\n                >\r\n              </li>\r\n              <li routerLink=\"/layout/employees/overtime\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{ active: urlComplete.subUrl === 'overtime' }\"\r\n                  >Overtime</a\r\n                >\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <li\r\n            [ngClass]=\"{\r\n              active:\r\n                urlComplete.subUrl === 'clientspage' ||\r\n                urlComplete.subUrl === 'clientslist'\r\n            }\"\r\n          >\r\n            <a routerLink=\"/layout/clients/clientspage\"\r\n              ><i class=\"la la-users\"></i> <span>Clients</span></a\r\n            >\r\n          </li>\r\n          <li\r\n            class=\"submenu\"\r\n            [ngClass]=\"{\r\n              active:\r\n                urlComplete.mainUrl === 'projects' ||\r\n                urlComplete.subUrl === 'projectlist' ||\r\n                urlComplete.subUrl === 'projectview'\r\n            }\"\r\n          >\r\n            <a\r\n              href=\"javascript:\"\r\n              [ngClass]=\"{\r\n                subdrop:\r\n                  urlComplete.mainUrl === 'projects' ||\r\n                  urlComplete.subUrl === 'projectlist' ||\r\n                  urlComplete.subUrl === 'projectview'\r\n              }\"\r\n              href=\"javascript:\"\r\n              ><i class=\"la la-rocket\"></i> <span> Projects</span>\r\n              <span class=\"menu-arrow\"></span\r\n            ></a>\r\n            <ul\r\n              style=\"display: none\"\r\n              [ngStyle]=\"{\r\n                display:\r\n                  urlComplete.mainUrl === 'projects' ||\r\n                  urlComplete.subUrl === 'projectlist' ||\r\n                  urlComplete.subUrl === 'projectview'\r\n                    ? 'block'\r\n                    : 'none'\r\n              }\"\r\n            >\r\n              <li routerLink=\"/layout/projects/projectpage\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{\r\n                    active:\r\n                      urlComplete.subUrl === 'projectpage' ||\r\n                      urlComplete.subUrl === 'projectlist' ||\r\n                      urlComplete.subUrl === 'projectview'\r\n                  }\"\r\n                  >Projects</a\r\n                >\r\n              </li>\r\n              <li routerLink=\"/layout/projects/tasks\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{ active: urlComplete.subUrl === 'tasks' }\"\r\n                  >Tasks</a\r\n                >\r\n              </li>\r\n              <li routerLink=\"/layout/projects/taskboard\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{ active: urlComplete.subUrl === 'taskboard' }\"\r\n                  >Task Board</a\r\n                >\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <li [ngClass]=\"{ active: urlComplete.subUrl === 'leadscontent' }\">\r\n            <a routerLink=\"/layout/leads/leadscontent\"\r\n              ><i class=\"la la-user-secret\"></i> <span>Leads</span></a\r\n            >\r\n          </li>\r\n          <li\r\n            [ngClass]=\"{\r\n              active:\r\n                urlComplete.subUrl === 'ticketscontent' ||\r\n                urlComplete.subUrl === 'ticketsview'\r\n            }\"\r\n          >\r\n            <a routerLink=\"/layout/tickets/ticketscontent\"\r\n              ><i class=\"la la-ticket\"></i> <span>Tickets</span></a\r\n            >\r\n          </li>\r\n          <li class=\"menu-title\">\r\n            <span>HR</span>\r\n          </li>\r\n          <li\r\n            class=\"submenu\"\r\n            [ngClass]=\"{\r\n              active:\r\n                urlComplete.mainUrl === 'accounts' ||\r\n                urlComplete.mainUrl === 'reports'\r\n            }\"\r\n          >\r\n            <a\r\n              href=\"javascript:\"\r\n              [ngClass]=\"{\r\n                subdrop:\r\n                  urlComplete.mainUrl === 'accounts' ||\r\n                  urlComplete.mainUrl === 'reports'\r\n              }\"\r\n              ><i class=\"la la-files-o\"></i> <span> Sales </span>\r\n              <span class=\"menu-arrow\"></span\r\n            ></a>\r\n            <ul\r\n              style=\"display: none\"\r\n              [ngStyle]=\"{\r\n                display:\r\n                  urlComplete.mainUrl === 'accounts'\r\n                    ? 'block' || urlComplete.mainUrl === 'reports'\r\n                    : 'none'\r\n              }\"\r\n            >\r\n              <li routerLink=\"/layout/accounts/estimates\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{\r\n                    active:\r\n                      urlComplete.subUrl === 'estimates' ||\r\n                      urlComplete.subUrl === 'estimates-view' ||\r\n                      urlComplete.subUrl === 'create-estimates' ||\r\n                      urlComplete.subUrl === 'edit-estimates?id=1'\r\n                  }\"\r\n                  >Estimates</a\r\n                >\r\n              </li>\r\n              <li routerLink=\"/layout/accounts/invoices\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{\r\n                    active:\r\n                      urlComplete.subUrl === 'invoices' ||\r\n                      urlComplete.subUrl === 'invoice-view' ||\r\n                      urlComplete.subUrl === 'create-invoice' ||\r\n                      urlComplete.subUrl === 'edit-invoice-report' ||\r\n                      urlComplete.subUrl === 'edit-invoice?id=1'\r\n                  }\"\r\n                  >Invoices</a\r\n                >\r\n              </li>\r\n              <li routerLink=\"/layout/accounts/payments\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{ active: urlComplete.subUrl === 'payments' }\"\r\n                  >Payments</a\r\n                >\r\n              </li>\r\n              <li routerLink=\"/layout/accounts/expenses\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{ active: urlComplete.subUrl === 'expenses' }\"\r\n                  >Expenses</a\r\n                >\r\n              </li>\r\n              <li routerLink=\"/layout/accounts/provident-fund\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{\r\n                    active: urlComplete.subUrl === 'provident-fund'\r\n                  }\"\r\n                  >Provident Fund</a\r\n                >\r\n              </li>\r\n              <li routerLink=\"/layout/accounts/taxes\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{ active: urlComplete.subUrl === 'taxes' }\"\r\n                  >Taxes</a\r\n                >\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <li\r\n            class=\"submenu\"\r\n            [ngClass]=\"{\r\n              active:\r\n                urlComplete.mainUrl === 'budget' ||\r\n                urlComplete.mainUrl === 'budgetexpenses' ||\r\n                urlComplete.mainUrl === 'category' ||\r\n                urlComplete.mainUrl === 'budgetrevenues'\r\n            }\"\r\n          >\r\n            <a\r\n              href=\"javascript:\"\r\n              [ngClass]=\"{\r\n                subdrop:\r\n                  urlComplete.mainUrl === 'budgets' ||\r\n                  urlComplete.mainUrl === 'budgetexpenses' ||\r\n                  urlComplete.mainUrl === 'category' ||\r\n                  urlComplete.mainUrl === 'budgetrevenues'\r\n              }\"\r\n              ><i class=\"la la-files-o\"></i> <span> Accounting </span>\r\n              <span class=\"menu-arrow\"></span\r\n            ></a>\r\n            <ul\r\n              style=\"display: none\"\r\n              [ngStyle]=\"{\r\n                display:\r\n                  urlComplete.mainUrl === 'budgets' ||\r\n                  urlComplete.mainUrl === 'budgetexpenses' ||\r\n                  urlComplete.mainUrl === 'category' ||\r\n                  urlComplete.mainUrl === 'budgetrevenues'\r\n                    ? 'block'\r\n                    : 'none'\r\n              }\"\r\n            >\r\n              <li routerLink=\"/layout/category/categories\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{ active: urlComplete.subUrl === 'categories' }\"\r\n                  >Categories</a\r\n                >\r\n              </li>\r\n              <li routerLink=\"/layout/budget/budgets\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{ active: urlComplete.subUrl === 'budgets' }\"\r\n                  >Budgets</a\r\n                >\r\n              </li>\r\n              <li routerLink=\"/layout/budgetexpenses/budget-expenses\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{\r\n                    active: urlComplete.subUrl === 'budget-expenses'\r\n                  }\"\r\n                  >Budget Expenses</a\r\n                >\r\n              </li>\r\n              <li routerLink=\"/layout/budgetrevenues/budget-revenues\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{\r\n                    active: urlComplete.subUrl === 'budget-revenues'\r\n                  }\"\r\n                  >Budget Revenues</a\r\n                >\r\n              </li>\r\n            </ul>\r\n          </li>\r\n\r\n          <li\r\n            class=\"submenu\"\r\n            [ngClass]=\"{ active: urlComplete.mainUrl === 'payroll' }\"\r\n          >\r\n            <a\r\n              href=\"javascript:\"\r\n              [ngClass]=\"{ subdrop: urlComplete.mainUrl === 'payroll' }\"\r\n              ><i class=\"la la-money\"></i> <span> Payroll </span>\r\n              <span class=\"menu-arrow\"></span\r\n            ></a>\r\n            <ul\r\n              style=\"display: none\"\r\n              [ngStyle]=\"{\r\n                display: urlComplete.mainUrl === 'payroll' ? 'block' : 'none'\r\n              }\"\r\n            >\r\n              <li routerLink=\"/layout/payroll/employee-salary\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{\r\n                    active: urlComplete.subUrl === 'employee-salary'\r\n                  }\"\r\n                >\r\n                  Employee Salary\r\n                </a>\r\n              </li>\r\n              <li routerLink=\"/layout/payroll/salary-view\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{ active: urlComplete.subUrl === 'salary-view' }\"\r\n                >\r\n                  Payslip\r\n                </a>\r\n              </li>\r\n              <li routerLink=\"/layout/payroll/payroll-items\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{ active: urlComplete.subUrl === 'payroll-items' }\"\r\n                >\r\n                  Payroll Items\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <li [ngClass]=\"{ active: urlComplete.subUrl === 'policies-main' }\">\r\n            <a routerLink=\"/layout/policies/policies-main\"\r\n              ><i class=\"la la-file-pdf-o\"></i> <span>Policies</span></a\r\n            >\r\n          </li>\r\n          <li\r\n            class=\"submenu\"\r\n            [ngClass]=\"{\r\n              active:\r\n                urlComplete.mainUrl === 'reports' ||\r\n                urlComplete.mainUrl === 'employeereports' ||\r\n                urlComplete.mainUrl === 'payslipreports' ||\r\n                urlComplete.mainUrl === 'projectreports' ||\r\n                urlComplete.mainUrl === 'paymentreports' ||\r\n                urlComplete.mainUrl === 'taskreports' ||\r\n                urlComplete.mainUrl === 'userreports' ||\r\n                urlComplete.mainUrl === 'attendancereports' ||\r\n                urlComplete.mainUrl === 'leavereports' ||\r\n                urlComplete.mainUrl === 'dailyreports'\r\n            }\"\r\n          >\r\n            <a\r\n              href=\"javascript:\"\r\n              [ngClass]=\"{\r\n                subdrop:\r\n                  urlComplete.mainUrl === 'reports' ||\r\n                  urlComplete.mainUrl === 'employeereports' ||\r\n                  urlComplete.mainUrl === 'payslipreports' ||\r\n                  urlComplete.mainUrl === 'projectreports' ||\r\n                  urlComplete.mainUrl === 'paymentreports' ||\r\n                  urlComplete.mainUrl === 'taskreports' ||\r\n                  urlComplete.mainUrl === 'userreports' ||\r\n                  urlComplete.mainUrl === 'attendancereports' ||\r\n                  urlComplete.mainUrl === 'leavereports' ||\r\n                  urlComplete.mainUrl === 'dailyreports'\r\n              }\"\r\n              ><i class=\"la la-pie-chart\"></i> <span> Reports </span>\r\n              <span class=\"menu-arrow\"></span\r\n            ></a>\r\n            <ul\r\n              style=\"display: none\"\r\n              [ngStyle]=\"{\r\n                display:\r\n                  urlComplete.mainUrl === 'reports' ||\r\n                  urlComplete.mainUrl === 'employeereports' ||\r\n                  urlComplete.mainUrl === 'payslipreports' ||\r\n                  urlComplete.mainUrl === 'projectreports' ||\r\n                  urlComplete.mainUrl === 'paymentreports' ||\r\n                  urlComplete.mainUrl === 'taskreports' ||\r\n                  urlComplete.mainUrl === 'userreports' ||\r\n                  urlComplete.mainUrl === 'attendancereports' ||\r\n                  urlComplete.mainUrl === 'leavereports' ||\r\n                  urlComplete.mainUrl === 'dailyreports'\r\n                    ? 'block'\r\n                    : 'none'\r\n              }\"\r\n            >\r\n              <li routerLink=\"/layout/reports/expense-report\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{\r\n                    active: urlComplete.subUrl === 'expense-report'\r\n                  }\"\r\n                >\r\n                  Expense Report\r\n                </a>\r\n              </li>\r\n              <li routerLink=\"/layout/reports/invoice-report\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{\r\n                    active: urlComplete.subUrl === 'invoice-report'\r\n                  }\"\r\n                >\r\n                  Invoice Report\r\n                </a>\r\n              </li>\r\n              <li routerLink=\"/layout/paymentreports/payments-reports\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{\r\n                    active: urlComplete.subUrl === 'payments-reports'\r\n                  }\"\r\n                >\r\n                  Payments Report\r\n                </a>\r\n              </li>\r\n              <li routerLink=\"/layout/projectreports/project-reports\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{\r\n                    active: urlComplete.subUrl === 'project-reports'\r\n                  }\"\r\n                >\r\n                  Project Report\r\n                </a>\r\n              </li>\r\n              <li routerLink=\"/layout/taskreports/task-reports\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{ active: urlComplete.subUrl === 'task-reports' }\"\r\n                >\r\n                  Task Report\r\n                </a>\r\n              </li>\r\n              <li routerLink=\"/layout/userreports/user-reports\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{ active: urlComplete.subUrl === 'user-reports' }\"\r\n                >\r\n                  User Report\r\n                </a>\r\n              </li>\r\n              <li routerLink=\"/layout/employeereports/employee-reports\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{\r\n                    active: urlComplete.subUrl === 'employee-reports'\r\n                  }\"\r\n                >\r\n                  Employee Report\r\n                </a>\r\n              </li>\r\n              <li routerLink=\"/layout/payslipreports/payslip-reports\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{\r\n                    active: urlComplete.subUrl === 'payslip-reports'\r\n                  }\"\r\n                >\r\n                  Payslip Report\r\n                </a>\r\n              </li>\r\n              <li routerLink=\"/layout/attendancereports/attendance-reports\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{\r\n                    active: urlComplete.subUrl === 'attendance-reports'\r\n                  }\"\r\n                >\r\n                  Attendance Report\r\n                </a>\r\n              </li>\r\n              <li routerLink=\"/layout/leavereports/leave-reports\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{ active: urlComplete.subUrl === 'leave-reports' }\"\r\n                >\r\n                  Leave Report\r\n                </a>\r\n              </li>\r\n              <li routerLink=\"/layout/dailyreports/daily-reports\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{ active: urlComplete.subUrl === 'daily-reports' }\"\r\n                >\r\n                  Daily Report\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <li class=\"menu-title\">\r\n            <span>Performance</span>\r\n          </li>\r\n          <li\r\n            class=\"submenu\"\r\n            [ngClass]=\"{ active: urlComplete.mainUrl === 'performance' }\"\r\n          >\r\n            <a\r\n              href=\"javascript:\"\r\n              [ngClass]=\"{ subdrop: urlComplete.mainUrl === 'performance' }\"\r\n              ><i class=\"la la-graduation-cap\"></i> <span> Performance </span>\r\n              <span class=\"menu-arrow\"></span\r\n            ></a>\r\n            <ul\r\n              style=\"display: none\"\r\n              [ngStyle]=\"{\r\n                display:\r\n                  urlComplete.mainUrl === 'performance' ? 'block' : 'none'\r\n              }\"\r\n            >\r\n              <li routerLink=\"/layout/performance/performanceindicator\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{\r\n                    active: urlComplete.subUrl === 'performanceindicator'\r\n                  }\"\r\n                >\r\n                  Performance Indicator\r\n                </a>\r\n              </li>\r\n              <li routerLink=\"/layout/performance/performancereview\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{\r\n                    active: urlComplete.subUrl === 'performancereview'\r\n                  }\"\r\n                >\r\n                  Performance Review\r\n                </a>\r\n              </li>\r\n              <li routerLink=\"/layout/performance/performanceappraisal\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{\r\n                    active: urlComplete.subUrl === 'performanceappraisal'\r\n                  }\"\r\n                >\r\n                  Performance Appraisal\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <li\r\n            class=\"submenu\"\r\n            [ngClass]=\"{ active: urlComplete.mainUrl === 'goals' }\"\r\n          >\r\n            <a\r\n              href=\"javascript:\"\r\n              [ngClass]=\"{ subdrop: urlComplete.mainUrl === 'goals' }\"\r\n              ><i class=\"la la-crosshairs\"></i> <span> Goals </span>\r\n              <span class=\"menu-arrow\"></span\r\n            ></a>\r\n            <ul\r\n              style=\"display: none\"\r\n              [ngStyle]=\"{\r\n                display: urlComplete.mainUrl === 'goals' ? 'block' : 'none'\r\n              }\"\r\n            >\r\n              <li routerLink=\"/layout/goals/goallist\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{ active: urlComplete.subUrl === 'goallist' }\"\r\n                >\r\n                  Goal List\r\n                </a>\r\n              </li>\r\n              <li routerLink=\"/layout/goals/goaltype\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{ active: urlComplete.subUrl === 'goaltype' }\"\r\n                >\r\n                  Goal Type\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <li\r\n            class=\"submenu\"\r\n            [ngClass]=\"{ active: urlComplete.mainUrl === 'training' }\"\r\n          >\r\n            <a\r\n              href=\"javascript:\"\r\n              [ngClass]=\"{ subdrop: urlComplete.mainUrl === 'training' }\"\r\n              ><i class=\"la la-edit\"></i> <span> Training </span>\r\n              <span class=\"menu-arrow\"></span\r\n            ></a>\r\n            <ul\r\n              style=\"display: none\"\r\n              [ngStyle]=\"{\r\n                display: urlComplete.mainUrl === 'training' ? 'block' : 'none'\r\n              }\"\r\n            >\r\n              <li routerLink=\"/layout/training/traininglist\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{ active: urlComplete.subUrl === 'traininglist' }\"\r\n                >\r\n                  Training List\r\n                </a>\r\n              </li>\r\n              <li routerLink=\"/layout/training/trainers\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{ active: urlComplete.subUrl === 'trainers' }\"\r\n                >\r\n                  Trainers</a\r\n                >\r\n              </li>\r\n              <li routerLink=\"/layout/training/trainingtype\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{ active: urlComplete.subUrl === 'trainingtype' }\"\r\n                >\r\n                  Training Type\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <li [ngClass]=\"{ active: urlComplete.subUrl === 'promotionmain' }\">\r\n            <a routerLink=\"/layout/promotion/promotionmain\"\r\n              ><i class=\"la la-bullhorn\"></i> <span>Promotion</span></a\r\n            >\r\n          </li>\r\n          <li [ngClass]=\"{ active: urlComplete.subUrl === 'resignationmain' }\">\r\n            <a routerLink=\"/layout/resignation/resignationmain\"\r\n              ><i class=\"la la-external-link-square\"></i>\r\n              <span>Resignation</span></a\r\n            >\r\n          </li>\r\n          <li [ngClass]=\"{ active: urlComplete.subUrl === 'terminationmain' }\">\r\n            <a routerLink=\"/layout/termination/terminationmain\"\r\n              ><i class=\"la la-times-circle\"></i> <span>Termination</span></a\r\n            >\r\n          </li>\r\n          <li class=\"menu-title\">\r\n            <span>Administration</span>\r\n          </li>\r\n          <li [ngClass]=\"{ active: urlComplete.subUrl === 'assets-main' }\">\r\n            <a routerLink=\"/layout/assets/assets-main\"\r\n              ><i class=\"la la-object-ungroup\"></i> <span>Assets</span></a\r\n            >\r\n          </li>\r\n          <li\r\n            class=\"submenu\"\r\n            [ngClass]=\"{\r\n              active:\r\n                urlComplete.mainUrl === 'jobs' ||\r\n                urlComplete.mainUrl === 'manageresume' ||\r\n                urlComplete.mainUrl === 'experience' ||\r\n                urlComplete.mainUrl === 'studentcandidate' ||\r\n                urlComplete.mainUrl === 'interview' ||\r\n                urlComplete.mainUrl === 'userdashboard' ||\r\n                urlComplete.mainUrl === 'visitedjobs' ||\r\n                urlComplete.mainUrl === 'offeredjobs' ||\r\n                urlComplete.mainUrl === 'useralljobs' ||\r\n                urlComplete.mainUrl === 'archivedjobs' ||\r\n                urlComplete.mainUrl === 'appliedjobs' ||\r\n                urlComplete.mainUrl === 'savedjobs' ||\r\n                urlComplete.mainUrl === 'jobsdashboard' ||\r\n                urlComplete.mainUrl === 'candidate' ||\r\n                urlComplete.mainUrl === 'offer' ||\r\n                urlComplete.mainUrl === 'scheduletiming' ||\r\n                urlComplete.mainUrl === 'aptitute' ||\r\n                urlComplete.mainUrl === 'interviewing'\r\n            }\"\r\n          >\r\n            <a\r\n              href=\"javascript:\"\r\n              [ngClass]=\"{\r\n                subdrop:\r\n                  urlComplete.mainUrl === 'jobs' ||\r\n                  urlComplete.mainUrl === 'manageresume' ||\r\n                  urlComplete.mainUrl === 'experience' ||\r\n                  urlComplete.mainUrl === 'studentcandidate' ||\r\n                  urlComplete.mainUrl === 'interview' ||\r\n                  urlComplete.mainUrl === 'userdashboard' ||\r\n                  urlComplete.mainUrl === 'visitedjobs' ||\r\n                  urlComplete.mainUrl === 'offeredjobs' ||\r\n                  urlComplete.mainUrl === 'useralljobs' ||\r\n                  urlComplete.mainUrl === 'archivedjobs' ||\r\n                  urlComplete.mainUrl === 'appliedjobs' ||\r\n                  urlComplete.mainUrl === 'savedjobs' ||\r\n                  urlComplete.mainUrl === 'jobsdashboard' ||\r\n                  urlComplete.mainUrl === 'candidate' ||\r\n                  urlComplete.mainUrl === 'offer' ||\r\n                  urlComplete.mainUrl === 'scheduletiming' ||\r\n                  urlComplete.mainUrl === 'aptitute' ||\r\n                  urlComplete.mainUrl === 'interviewing'\r\n              }\"\r\n              ><i class=\"la la-briefcase\"></i> <span> Jobs </span>\r\n              <span class=\"menu-arrow\"></span\r\n            ></a>\r\n            <ul\r\n              style=\"display: none\"\r\n              [ngStyle]=\"{\r\n                display:\r\n                  urlComplete.mainUrl === 'jobs' ||\r\n                  urlComplete.mainUrl === 'manageresume' ||\r\n                  urlComplete.mainUrl === 'experience' ||\r\n                  urlComplete.mainUrl === 'studentcandidate' ||\r\n                  urlComplete.mainUrl === 'interview' ||\r\n                  urlComplete.mainUrl === 'userdashboard' ||\r\n                  urlComplete.mainUrl === 'visitedjobs' ||\r\n                  urlComplete.mainUrl === 'offeredjobs' ||\r\n                  urlComplete.mainUrl === 'useralljobs' ||\r\n                  urlComplete.mainUrl === 'archivedjobs' ||\r\n                  urlComplete.mainUrl === 'appliedjobs' ||\r\n                  urlComplete.mainUrl === 'savedjobs' ||\r\n                  urlComplete.mainUrl === 'jobsdashboard' ||\r\n                  urlComplete.mainUrl === 'candidate' ||\r\n                  urlComplete.mainUrl === 'offer' ||\r\n                  urlComplete.mainUrl === 'scheduletiming' ||\r\n                  urlComplete.mainUrl === 'aptitute' ||\r\n                  urlComplete.mainUrl === 'interviewing'\r\n                    ? 'block'\r\n                    : 'none'\r\n              }\"\r\n            >\r\n              <li routerLink=\"/layout/userdashboard/user-dashboard\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{\r\n                    active:\r\n                      urlComplete.subUrl === 'user-dashboard' ||\r\n                      urlComplete.subUrl === 'visited-jobs' ||\r\n                      urlComplete.subUrl === 'offered-jobs' ||\r\n                      urlComplete.subUrl === 'user-all-jobs' ||\r\n                      urlComplete.subUrl === 'archived-jobs' ||\r\n                      urlComplete.subUrl === 'applied-jobs' ||\r\n                      urlComplete.subUrl === 'saved-jobs' ||\r\n                      urlComplete.subUrl === 'interviewing'\r\n                  }\"\r\n                >\r\n                  User Dasboard\r\n                </a>\r\n              </li>\r\n\r\n              <li routerLink=\"/layout/jobsdashboard/jobs-dashboard\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{\r\n                    active: urlComplete.subUrl === 'jobs-dashboard'\r\n                  }\"\r\n                >\r\n                  Jobs Dasboard\r\n                </a>\r\n              </li>\r\n\r\n              <li routerLink=\"/layout/jobs/manage-jobs\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{\r\n                    active:\r\n                      urlComplete.subUrl === 'manage-jobs' ||\r\n                      urlComplete.subUrl === 'job-details'\r\n                  }\"\r\n                >\r\n                  Manage Jobs\r\n                </a>\r\n              </li>\r\n              <li routerLink=\"/layout/manageresume/manage-resumes\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{\r\n                    active: urlComplete.subUrl === 'manage-resumes'\r\n                  }\"\r\n                >\r\n                  Manage Resumes\r\n                </a>\r\n              </li>\r\n              <li routerLink=\"/layout/candidate/shortlist-candidates\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{\r\n                    active: urlComplete.subUrl === 'shortlist-candidates'\r\n                  }\"\r\n                >\r\n                  Shortlist Candidates\r\n                </a>\r\n              </li>\r\n              <li routerLink=\"/layout/interview/interview-questions\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{\r\n                    active: urlComplete.subUrl === 'interview-questions'\r\n                  }\"\r\n                >\r\n                  Interview Questions\r\n                </a>\r\n              </li>\r\n              <li routerLink=\"/layout/offer/offer-approvals\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{\r\n                    active: urlComplete.subUrl === 'offer-approvals'\r\n                  }\"\r\n                >\r\n                  Offer Approvals\r\n                </a>\r\n              </li>\r\n              <li routerLink=\"/layout/experience/experience-level\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{\r\n                    active: urlComplete.subUrl === 'experience-level'\r\n                  }\"\r\n                >\r\n                  Experience Level\r\n                </a>\r\n              </li>\r\n              <li routerLink=\"/layout/studentcandidate/candidates\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{ active: urlComplete.subUrl === 'candidates' }\"\r\n                >\r\n                  Candidates List\r\n                </a>\r\n              </li>\r\n              <li routerLink=\"/layout/scheduletiming/schedule-timing\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{\r\n                    active: urlComplete.subUrl === 'schedule-timing'\r\n                  }\"\r\n                >\r\n                  Schedule timing\r\n                </a>\r\n              </li>\r\n              <li routerLink=\"/layout/aptitute/aptitute-result\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{\r\n                    active: urlComplete.subUrl === 'aptitute-result'\r\n                  }\"\r\n                >\r\n                  Aptitude Results\r\n                </a>\r\n              </li>\r\n              <li routerLink=\"/layout/jobs/job-applicants\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{\r\n                    active: urlComplete.subUrl === 'job-applicants'\r\n                  }\"\r\n                >\r\n                  Applied Candidates\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <li\r\n            [ngClass]=\"{ active: urlComplete.subUrl === 'knowledgebase-main' }\"\r\n          >\r\n            <a routerLink=\"/layout/knowledgebase/knowledgebase-main\"\r\n              ><i class=\"la la-question\"></i> <span>Knowledgebase</span></a\r\n            >\r\n          </li>\r\n          <li [ngClass]=\"{ active: urlComplete.subUrl === 'activities-main' }\">\r\n            <a routerLink=\"/layout/activities/activities-main\"\r\n              ><i class=\"la la-bell\"></i> <span>Activities</span></a\r\n            >\r\n          </li>\r\n          <li [ngClass]=\"{ active: urlComplete.subUrl === 'user-main' }\">\r\n            <a routerLink=\"/layout/users/user-main\"\r\n              ><i class=\"la la-user-plus\"></i> <span>Users</span></a\r\n            >\r\n          </li>\r\n          <li [ngClass]=\"{ active: urlComplete.subUrl === 'company-settings' }\">\r\n            <a routerLink=\"/layout/settings/company-settings\"\r\n              ><i class=\"la la-cog\"></i> <span>Settings</span></a\r\n            >\r\n          </li>\r\n          <li class=\"menu-title\">\r\n            <span>Pages</span>\r\n          </li>\r\n          <li\r\n            class=\"submenu\"\r\n            [ngClass]=\"{\r\n              active:\r\n                (urlComplete.mainUrl === 'employees' &&\r\n                  urlComplete.subUrl === 'employeeprofile') ||\r\n                (urlComplete.mainUrl === 'clients' &&\r\n                  urlComplete.subUrl === 'clientsprofile')\r\n            }\"\r\n          >\r\n            <a\r\n              href=\"javascript:\"\r\n              [ngClass]=\"{\r\n                subdrop:\r\n                  (urlComplete.mainUrl === 'employees' &&\r\n                    urlComplete.subUrl === 'employeeprofile') ||\r\n                  (urlComplete.mainUrl === 'clients' &&\r\n                    urlComplete.subUrl === 'clientsprofile')\r\n              }\"\r\n              ><i class=\"la la-user\"></i> <span> Profile </span>\r\n              <span class=\"menu-arrow\"></span\r\n            ></a>\r\n            <ul\r\n              style=\"display: none\"\r\n              [ngStyle]=\"{\r\n                display:\r\n                  (urlComplete.mainUrl === 'employees' &&\r\n                    urlComplete.subUrl === 'employeeprofile') ||\r\n                  (urlComplete.mainUrl === 'clients' &&\r\n                    urlComplete.subUrl === 'clientsprofile')\r\n                    ? 'block'\r\n                    : 'none'\r\n              }\"\r\n            >\r\n              <li routerLink=\"/layout/employees/employeeprofile\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{\r\n                    active: urlComplete.subUrl === 'employeeprofile'\r\n                  }\"\r\n                >\r\n                  Employee Profile\r\n                </a>\r\n              </li>\r\n              <li routerLink=\"/layout/clients/clientsprofile/1\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{\r\n                    active: urlComplete.subUrl === 'clientsprofile'\r\n                  }\"\r\n                >\r\n                  Client Profile\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <li\r\n            class=\"submenu\"\r\n            [ngClass]=\"{ active: urlComplete.mainUrl === 'login' }\"\r\n          >\r\n            <a\r\n              href=\"javascript:\"\r\n              [ngClass]=\"{ subdrop: urlComplete.mainUrl === 'login' }\"\r\n              ><i class=\"la la-key\"></i> <span> Authentication </span>\r\n              <span class=\"menu-arrow\"></span\r\n            ></a>\r\n            <ul\r\n              style=\"display: none\"\r\n              [ngStyle]=\"{\r\n                display: urlComplete.mainUrl === 'login' ? 'block' : 'none'\r\n              }\"\r\n            >\r\n              <li routerLink=\"/login\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{ active: urlComplete.subUrl === 'login' }\"\r\n                >\r\n                  Login\r\n                </a>\r\n              </li>\r\n              <li routerLink=\"/login/register\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{ active: urlComplete.subUrl === 'register' }\"\r\n                >\r\n                  Register\r\n                </a>\r\n              </li>\r\n              <li routerLink=\"/login/forgot\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{ active: urlComplete.subUrl === 'forgot' }\"\r\n                >\r\n                  Forgot Password\r\n                </a>\r\n              </li>\r\n              <li routerLink=\"/login/otp\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{ active: urlComplete.subUrl === 'otp' }\"\r\n                >\r\n                  OTP\r\n                </a>\r\n              </li>\r\n              <li routerLink=\"/login/lockscreen\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{ active: urlComplete.subUrl === 'lockscreen' }\"\r\n                >\r\n                  Lock Screen\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <li\r\n            class=\"submenu\"\r\n            [ngClass]=\"{ active: urlComplete.mainUrl === 'error' }\"\r\n          >\r\n            <a\r\n              href=\"javascript:\"\r\n              [ngClass]=\"{ subdrop: urlComplete.mainUrl === 'error' }\"\r\n              ><i class=\"la la-exclamation-triangle\"></i>\r\n              <span> Error Pages </span> <span class=\"menu-arrow\"></span\r\n            ></a>\r\n            <ul\r\n              style=\"display: none\"\r\n              [ngStyle]=\"{\r\n                display: urlComplete.mainUrl === 'error' ? 'block' : 'none'\r\n              }\"\r\n            >\r\n              <li routerLink=\"/error/error404\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{ active: urlComplete.subUrl === 'error404' }\"\r\n                  >404 Error\r\n                </a>\r\n              </li>\r\n              <li routerLink=\"/error/error500\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{ active: urlComplete.subUrl === 'error500' }\"\r\n                  >500 Error\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <li\r\n            class=\"submenu\"\r\n            [ngClass]=\"{ active: urlComplete.mainUrl === 'pages' }\"\r\n          >\r\n            <a\r\n              href=\"javascript:\"\r\n              [ngClass]=\"{ subdrop: urlComplete.mainUrl === 'pages' }\"\r\n              ><i class=\"la la-columns\"></i> <span> Pages </span>\r\n              <span class=\"menu-arrow\"></span\r\n            ></a>\r\n            <ul\r\n              style=\"display: none\"\r\n              [ngStyle]=\"{\r\n                display: urlComplete.mainUrl === 'pages' ? 'block' : 'none'\r\n              }\"\r\n            >\r\n              <li routerLink=\"/layout/pages/search\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{ active: urlComplete.subUrl === 'search' }\"\r\n                >\r\n                  Search\r\n                </a>\r\n              </li>\r\n              <li routerLink=\"/layout/pages/faq\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{ active: urlComplete.subUrl === 'faq' }\"\r\n                >\r\n                  FAQ\r\n                </a>\r\n              </li>\r\n              <li routerLink=\"/layout/pages/terms\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{ active: urlComplete.subUrl === 'terms' }\"\r\n                >\r\n                  Terms\r\n                </a>\r\n              </li>\r\n              <li routerLink=\"/layout/pages/privacy-policy\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{\r\n                    active: urlComplete.subUrl === 'privacy-policy'\r\n                  }\"\r\n                >\r\n                  Privacy Policy\r\n                </a>\r\n              </li>\r\n              <li routerLink=\"/layout/pages/blank-page\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{ active: urlComplete.subUrl === 'blank-page' }\"\r\n                >\r\n                  Blank Page\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <li class=\"menu-title\">\r\n            <span>UI Interface</span>\r\n          </li>\r\n          <li [ngClass]=\"{ active: urlComplete.subUrl === 'component-main' }\">\r\n            <a routerLink=\"/layout/components/component-main\"\r\n              ><i class=\"la la-puzzle-piece\"></i> <span>Components</span></a\r\n            >\r\n          </li>\r\n          <li\r\n            class=\"submenu\"\r\n            [ngClass]=\"{ active: urlComplete.mainUrl === 'forms' }\"\r\n          >\r\n            <a\r\n              href=\"javascript:\"\r\n              [ngClass]=\"{ subdrop: urlComplete.mainUrl === 'forms' }\"\r\n              ><i class=\"la la-object-group\"></i> <span> Forms </span>\r\n              <span class=\"menu-arrow\"></span\r\n            ></a>\r\n            <ul\r\n              style=\"display: none\"\r\n              [ngStyle]=\"{\r\n                display: urlComplete.mainUrl === 'forms' ? 'block' : 'none'\r\n              }\"\r\n            >\r\n              <li routerLink=\"/layout/forms/basic-inputs\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{ active: urlComplete.subUrl === 'basic-inputs' }\"\r\n                  >Basic Inputs\r\n                </a>\r\n              </li>\r\n              <li routerLink=\"/layout/forms/input-groups\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{ active: urlComplete.subUrl === 'input-groups' }\"\r\n                  >Input Groups\r\n                </a>\r\n              </li>\r\n              <li routerLink=\"/layout/forms/horizontal-form\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{\r\n                    active: urlComplete.subUrl === 'horizontal-form'\r\n                  }\"\r\n                  >Horizontal Form\r\n                </a>\r\n              </li>\r\n              <li routerLink=\"/layout/forms/vertical-form\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{ active: urlComplete.subUrl === 'vertical-form' }\"\r\n                >\r\n                  Vertical Form\r\n                </a>\r\n              </li>\r\n              <li routerLink=\"/layout/forms/form-mask\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{ active: urlComplete.subUrl === 'form-mask' }\"\r\n                >\r\n                  Form Mask\r\n                </a>\r\n              </li>\r\n              <li routerLink=\"/layout/forms/form-validation\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{\r\n                    active: urlComplete.subUrl === 'form-validation'\r\n                  }\"\r\n                >\r\n                  Form Validation\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <li\r\n            class=\"submenu\"\r\n            [ngClass]=\"{ active: urlComplete.mainUrl === 'tables' }\"\r\n          >\r\n            <a\r\n              href=\"javascript:\"\r\n              [ngClass]=\"{ subdrop: urlComplete.mainUrl === 'tables' }\"\r\n              ><i class=\"la la-table\"></i> <span> Tables </span>\r\n              <span class=\"menu-arrow\"></span\r\n            ></a>\r\n            <ul\r\n              style=\"display: none\"\r\n              [ngStyle]=\"{\r\n                display: urlComplete.mainUrl === 'tables' ? 'block' : 'none'\r\n              }\"\r\n            >\r\n              <li routerLink=\"/layout/tables/basic-tables\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{ active: urlComplete.subUrl === 'basic-tables' }\"\r\n                  >Basic Tables\r\n                </a>\r\n              </li>\r\n              <li routerLink=\"/layout/tables/data-tables\">\r\n                <a\r\n                  href=\"javascript:\"\r\n                  [ngClass]=\"{ active: urlComplete.subUrl === 'data-tables' }\"\r\n                  >Data Table\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <li class=\"menu-title\">\r\n            <span>Extras</span>\r\n          </li>\r\n          <li>\r\n            <a href=\"javascript:\"\r\n              ><i class=\"la la-file-text\"></i> <span>Documentation</span></a\r\n            >\r\n          </li>\r\n          <li>\r\n            <a href=\"javascript:\"\r\n              ><i class=\"la la-info\"></i> <span>Change Log</span>\r\n              <span class=\"badge badge-primary ms-auto\">v3.2</span></a\r\n            >\r\n          </li>\r\n          <li class=\"submenu\">\r\n            <a href=\"javascript:\"\r\n              ><i class=\"la la-share-alt\"></i> <span>Multi Level</span>\r\n              <span class=\"menu-arrow\"></span\r\n            ></a>\r\n            <ul style=\"display: none\">\r\n              <li class=\"submenu\">\r\n                <a href=\"javascript:\">\r\n                  <span>Level 1</span> <span class=\"menu-arrow\"></span\r\n                ></a>\r\n                <ul style=\"display: none\">\r\n                  <li>\r\n                    <a href=\"javascript:\"><span>Level 2</span></a>\r\n                  </li>\r\n                  <li class=\"submenu\">\r\n                    <a href=\"javascript:\">\r\n                      <span> Level 2</span> <span class=\"menu-arrow\"></span\r\n                    ></a>\r\n                    <ul style=\"display: none\">\r\n                      <li><a href=\"javascript:\">Level 3</a></li>\r\n                      <li><a href=\"javascript:\">Level 3</a></li>\r\n                    </ul>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"javascript:\"> <span>Level 2</span></a>\r\n                  </li>\r\n                </ul>\r\n              </li>\r\n              <li>\r\n                <a href=\"javascript:\"> <span>Level 1</span></a>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n        </ul>\r\n        <ul *ngIf=\"sidebarMenus.chat\">\r\n          <li routerLink=\"/layout/dashboard/admin\">\r\n            <a href=\"javascript:\"\r\n              ><i class=\"la la-home\"></i> <span>Back to Home</span></a\r\n            >\r\n          </li>\r\n          <li class=\"menu-title\">\r\n            <span>Chat Groups</span>\r\n            <a\r\n              href=\"javascript:\"\r\n              data-bs-toggle=\"modal\"\r\n              data-bs-target=\"#add_group\"\r\n              ><i class=\"la la-plus\"></i\r\n            ></a>\r\n          </li>\r\n          <li>\r\n            <a href=\"javascript:\" *ngFor=\"let item of groups.total\">\r\n              <span class=\"chat-avatar-sm user-img\">\r\n                <img\r\n                  class=\"rounded-circle\"\r\n                  alt=\"\"\r\n                  src=\"assets/img/profiles/avatar-5.jpg\"\r\n                />\r\n              </span>\r\n              <span class=\"chat-user\">#{{ item | titlecase }}</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"menu-title\">\r\n            Direct Chats\r\n            <a data-bs-toggle=\"modal\" data-bs-target=\"#add_chat_user\"\r\n              ><i class=\"la la-plus\"></i\r\n            ></a>\r\n          </li>\r\n          <li\r\n            [ngClass]=\"{ active: members.active == item.name }\"\r\n            (click)=\"setActive(item.name)\"\r\n            *ngFor=\"let item of members.total\"\r\n          >\r\n            <a href=\"javascript:\">\r\n              <span class=\"chat-avatar-sm user-img\">\r\n                <img\r\n                  class=\"rounded-circle\"\r\n                  alt=\"\"\r\n                  src=\"assets/img/profiles/avatar-5.jpg\"\r\n                /><span class=\"status online\"></span>\r\n              </span>\r\n              <span class=\"chat-user\">{{ item.name }}</span>\r\n              <span\r\n                class=\"badge rounded-pill bg-danger\"\r\n                [hidden]=\"item.count < 1\"\r\n                >{{ item.count }}</span\r\n              >\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </perfect-scrollbar>\r\n  </div>\r\n</div>\r\n<!-- /Sidebar -->\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_all-modules_all-modules_module_ts.js.map