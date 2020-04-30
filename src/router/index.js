import Vue from "vue";
import VueRouter from "vue-router";
import mainRoutes from "./main.routes";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/main/discover"
  },
  mainRoutes
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
