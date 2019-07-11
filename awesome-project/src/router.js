import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
        path: "/login",
        name: "login",
        component: () =>
            import(/* webpackChunkName: "about" */ "./views/Login.vue")
    },
    {
      path: "/users",
      name: "users",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Users.vue")
    },
    {
        path: "/user/:id",
        name: "user",
        component: () =>
            import(/* webpackChunkName: "about" */ "./views/User/UserShow.vue")
    },
      {
          path: "/user/:id/edit",
          name: "userEdit",
          component: () =>
              import(/* webpackChunkName: "about" */ "./views/User/UserEdit.vue")
      }
  ]
});
