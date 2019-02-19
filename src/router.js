import Vue from 'vue';
import VueRouter from 'vue-router';
import Film from './views/Film.vue';
import Cinema from './views/Cinema.vue';
import Center from './views/Center.vue';

// 这个 router.js 就是vue-router 的配置文件
/*
  1. 引入vue
  2. 使用 vue-router
  3. 使用 vue.use(vue-router)
  4. 路由配置
  5. new VueRouter({
    router: [

    ]
  })
  5. 暴露这个配置
*/

Vue.use(VueRouter);

let router = new VueRouter({
  // 配置路由对对照表 url ->视图组件
  // localhost:8080/#/films -> Film.vue
  // localhost:8080/#/cinemas -> Cinema.vue
  // localhost:8080/#/center -> Center.vue
  routes: [ // !!!routes 没有r 不是routers
    {
      path: '/films',
      component: Film
    },
    {
      path: '/cinemas',
      component: Cinema
    },
    {
      path: '/center',
      component: Center
    }
  ]
})

export default router;
/*
  1. VueRouter 为什么要使用 Vue.use() 方法，为了去触发 VueRouter 的 install 方法

  {
    install: function (Vue) {
      Vue.component('router-view', {})
      Vue.component('router-link', {})
    }
  }
*/
