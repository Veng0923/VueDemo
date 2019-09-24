import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from "@/store";
import router from "@/route";
Vue.config.productionTip = false;

Vue.use(ElementUI);
new Vue({
  el:"#app",
  store,
  router,
  render: h => h(App),
});
