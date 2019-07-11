import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Auth from "./auth";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;

window.auth = new Auth();

let vm = new Vue({
  router,
  render: h => h(App)
}).$mount("#app");