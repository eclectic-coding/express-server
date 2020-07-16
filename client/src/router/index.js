import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/RegisterUser.vue";
import Login from "../views/LoginUser.vue";
import Dashboard from "../views/Dashboard.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/signup",
    name: "Register",
    component: Register
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/api/user/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, _from, next) => {
  if (
    to.matched.some(record => record.meta.requiresAuth) &&
    store.state.authenticatedUser === false
  ) {
    console.log("Router:", store.state.authenticatedUser);
    next("/login");
  } else {
    next();
  }
});

export default router;
