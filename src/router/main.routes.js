import Main from "@/layouts/Main";
import viewLoader from "../utils/view-loader";

export default {
  path: "/main",
  name: "MainRoot",
  component: Main,
  redirect: "/main/discover",
  children: [
    {
      path: "discover",
      name: "Discover",
      component: viewLoader("Discover/index")
    },
    {
      path: "detail/:movieId",
      name: "Detail",
      component: viewLoader("Detail/index")
    }
  ]
};
