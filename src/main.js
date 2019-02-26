import Vue from 'vue';
import App from './App.vue';
import router from './router.js'
import store from './store/index.js';
import './assets/styles/reset.less';
import './assets/styles/common.less';
import './mockData';

Vue.config.productionTip = false;

store.dispatch('getCityName');

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
