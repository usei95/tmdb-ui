import Auth from "@/layouts/Auth";
import viewLoader from "../utils/view-loader";
export default {
  path: "/auth",
  name: "AuthRoot",
  component: Auth,
  redirect: "/auth/sign-in",
  children: [
    {
      path: "sign-in",
      name: "SignIn",
      component: viewLoader("SignIn")
    }
  ]
};
