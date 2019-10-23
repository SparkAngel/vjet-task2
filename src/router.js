import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import aboutMovie from "@/components/aboutMovie";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/movies",
      component: () => import("./views/movies.vue")
    },
    {
      path: "/movies/:id",
      name: "aboutMovie",
      component: aboutMovie,
      props: true
    }
  ]
});
