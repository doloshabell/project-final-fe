import Vue from "vue";
import VueRouter from "vue-router";
import NotFoundPage from "../views/NotFoundPage.vue";
import LoginPage from "../views/LoginPage.vue";
import HomePage from "../views/HomePage.vue";
import AllBranchOfficer from "../views/AllBranchOfficer.vue";
import AllLoans from "../views/AllLoans.vue";
import AllSavings from '../views/AllSavings.vue';
import AllCustomers from "../views/AllCustomers.vue";
import AddNewBranchOfficer from "../views/AddNewBranchOfficer.vue";
import AddNewLoans from "../views/AddNewLoans.vue";
import AddNewCustomers from "../views/AddNewCustomers.vue";
import DetailBranchOfficer from '../views/DetailBranchOfficer.vue';
import DetailCustomer from '../views/DetailCustomer.vue';
import UpdateBranchOfficer from '../views/UpdateBranchOfficer.vue';
import UpdateCustomer from '../views/UpdateCustomer.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
    meta: { requiresAuth: true },
  },
  {
    path: "/branch-officer",
    name: "branch-officer",
    component: AllBranchOfficer,
    meta: { requiresAuth: true },
  },
  {
    path: "/loans",
    name: "loans",
    component: AllLoans,
    meta: { requiresAuth: true },
  },
  {
    path: "/savings",
    name: "savings",
    component: AllSavings,
    meta: { requiresAuth: true },
  },
  {
    path: "/customers",
    name: "customers",
    component: AllCustomers,
    meta: { requiresAuth: true },
  },
  {
    path: "/add-new-branch-officer",
    name: "addNewBranchOfficer",
    component: AddNewBranchOfficer,
    meta: { requiresAuth: true },
  },
  {
    path: "/add-new-loans",
    name: "addNewLoans",
    component: AddNewLoans,
    meta: { requiresAuth: true },
  },
  {
    path: "/add-new-customers",
    name: "addNewCustomers",
    component: AddNewCustomers,
    meta: { requiresAuth: true },
  },
  {
    path: "/branch-officer/detail",
    name: "detailBranchOfficer",
    component: DetailBranchOfficer,
    meta: {requiresAuth: true},
  },
  {
    path: "/customers/detail",
    name: "detailCustomer",
    component: DetailCustomer,
    meta: {requiresAuth: true},
  },
  {
    path: "/branch-officer/update",
    name: "updateBranchOfficer",
    component: UpdateBranchOfficer,
    meta: {requiresAuth: true},
  },
  {
    path: "/customers/update",
    name: "updateCustomer",
    component: UpdateCustomer,
    meta: {requiresAuth: true},
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
    meta: { alreadyLogged: true },
  },
  {
    path: "*",
    component: NotFoundPage,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
