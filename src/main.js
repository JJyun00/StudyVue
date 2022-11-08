import Vue from 'vue'
import App from './App.vue'
import axios from "axios"
import VueRouter from 'vue-router'
import Routes from './router.js'

Vue.use(VueRouter)
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

const router = new VueRouter({
  routes: Routes,
  mode : 'history' //history 모드
});

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
