// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'
import getApi from './api/export'
import ElementUI from 'element-ui';
//import 'element-plus/lib/theme-chalk/index.css';
//import swiper from 'vue-awesome-swiper'
Vue.prototype.$axios = axios
Vue.prototype.$api = getApi
Vue.config.productionTip = false

Vue.use(ElementUI)

//Vue.use(swiper)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
