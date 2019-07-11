import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
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
            component: () => import("./views/User/UserShow.vue")
        },
        {
            path: "/user/:id/edit",
            name: "userEdit",
            component: () => import("./views/User/UserEdit.vue")
        }
    ]
});
