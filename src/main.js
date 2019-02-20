import Vue from 'vue';
import App from './App.vue';
import router from './router.js'
import './assets/styles/reset.less';
import './assets/styles/common.less';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
