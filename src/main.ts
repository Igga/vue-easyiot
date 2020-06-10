import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import { BootstrapVue, IconsPlugin, ToastPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(ToastPlugin);

Vue.config.productionTip = false;

Vue.filter('caps', (value: string) => {
    return value.toUpperCase();
})

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
