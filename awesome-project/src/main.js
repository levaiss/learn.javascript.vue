import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import "bootstrap/dist/css/bootstrap.min.css";
import {isAdmin} from "@/auth.js";

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
    if ((to.path !== "/login") && (!isAdmin())) {
        next("/login")
    } else {
        next()
    }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
