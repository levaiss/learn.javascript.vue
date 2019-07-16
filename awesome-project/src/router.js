import Vue from "vue";
import Router from "vue-router";
import { isAdmin } from "@/auth.js";

Vue.use(Router);

let router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/Home.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/Login.vue")
    },
    {
      path: "/users",
      name: "users",
      component: () => import("./views/Users.vue")
    },
    {
      path: "/user/:id",
      name: "user",
      component: () => import("./views/User/UserShow.vue"),
      props: true
    },
    {
      path: "/user/:id/edit",
      name: "userEdit",
      component: () => import("./views/User/UserEdit.vue"),
      props: true
    },
    {
      path: "/user/create",
      name: "userCreate",
      component: () => import("./views/User/UserEdit.vue")
    }
  ]
});

router.beforeEach((to, from, next) => {
  const available = ["login", "home"];

  if (available.indexOf(to.name) !== -1) {
    next();
  } else if (to.path !== "/login" && !isAdmin()) {
    next("/login");
  } else {
    next();
  }
});

export default router;
