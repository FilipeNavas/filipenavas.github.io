import Vue from "vue";
import Router from "vue-router";
import Home from "./views/HomePage";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        //header: AppHeader,
        default: Home,
        footer: AppFooter
      }
    }
  ]
});
