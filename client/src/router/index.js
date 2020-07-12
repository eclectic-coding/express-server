import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Register from '../views/RegisterUser';
import Login from '../views/LoginUser';


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/api/register",
    name: "Register",
    component: Register
  },
  {
    path: "/api/login",
    name: "Login",
    component: Login
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
