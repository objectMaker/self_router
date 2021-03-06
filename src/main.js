import Vue from "vue";
import App from "./App.vue";
import VueRouter from "./vue-router";
Vue.config.productionTip = false;
Vue.use(VueRouter);
import routes from "./router/routes";
const router = new VueRouter(routes);
new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
