// src/main.js
import Vue from 'vue'
import App from './App.vue'
import store from './common/store/';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')