import Vue from 'vue';
import VueRouter from 'vue-router';
import Film from './views/Film.vue';
import Cinema from './views/Cinema.vue';
import Center from './views/Center.vue';
import City from './views/City.vue';
import Home from './views/Home.vue';

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
  // localhost:8080/#/city -> City.vue
  routes: [ // !!!routes 没有r 不是routers
    {
      path: '/',
      component: Home,
      children: [
        // 不是一级路由的话 path 路径前面不要加/
        // PS: 二级路由或者二级以上的路由。他们的url地址，是会从一级路由开始一直做追加的
        // localhost:8080/#、home/films -> City.vue
        {
          path: 'films',
          component: Film
        },
        {
          path: 'cinemas',
          component: Cinema
        },
        {
          path: 'center',
          component: Center
        },
        // 空的儿子
        // http://localhost:8080/#/
        {
          path: '',
          // component: Film
          // 重定向
          redirect: '/films'
        }

      ]
    },
    {
      path: '/city',
      component: City
    },
    // 设置一个通配符的一级路由，当url地址无法与上面的规则匹配的时候就会跟我匹配
    {
      path: '*',
      redirect: '/films'
    }
    /* {
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
    },
    {
      path: '/city',
      component: City
    } */
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
