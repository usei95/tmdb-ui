import Vue from "vue";
import VueRouter from "vue-router";
import authRoutes from "./auth.routes";
import mainRoutes from "./main.routes";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/main/discover"
  },
  authRoutes,
  mainRoutes
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
