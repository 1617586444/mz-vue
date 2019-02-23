import Vue from 'vue';
import VueRouter from 'vue-router';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
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
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  // 配置路由对对照表 url ->视图组件
  // localhost:8080/#/films -> Film.vue
  // localhost:8080/#/cinemas -> Cinema.vue
  // localhost:8080/#/center -> Center.vue
  // localhost:8080/#/city -> City.vue
  routes: [ // !!!routes 没有r 不是routers
    {
      path: '/',
      component: () => import(/* webpackChunkName: "Home" */ './views/Home/Index.vue'),
      children: [
        // 不是一级路由的话 path 路径前面不要加/
        // PS: 二级路由或者二级以上的路由。他们的url地址，是会从一级路由开始一直做追加的
        // localhost:8080/#、home/films -> City.vue
        {
          path: 'films',
          component: () => import(/* webpackChunkName: "Film" */ './views/Home/Film/Index.vue')
        },
        {
          path: 'cinemas',
          component: () => import(/* webpackChunkName: "cinema" */ './views/Home/Cinema/Index.vue')
        },
        {
          path: 'center',
          component: () => import(/* webpackChunkName: "center" */ './views/Home/Center/Index.vue')
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
      // 城市选择页
      path: '/city',
      component: () => import(/* webpackChunkName: "city" */ './views/City/Index.vue')
    },
    {
      // 登录
      path: '/login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login/Index.vue')
    },
    {
      path: '/detail/:id',
      component: () => import(/* webpackChunkName: "detail" */ './views/Detail/Index.vue'),
      props: true
    },
    {
      path: '/card',
      component: () => import(/* webpackChunkName: "card" */ './views/Card/Index.vue')
    },
    {
      path: '/money',
      component: () => import(/* webpackChunkName: "money" */ './views/Money/Index.vue')
    },
    {
      path: '/system',
      component: () => import(/* webpackChunkName: "system" */ './views/System/Index.vue')
    },
    // 设置一个通配符的一级路由，当url地址无法与上面的规则匹配的时候就会跟我匹配
    {
      path: '*',
      redirect: '/films'
    }
  ]
})

// 导航守卫 全局前置守卫
/*
  路由守卫中
  a -> b
  to 将要去的路由的路由对象 b
  from 从哪里去的路由对象   a
  next 是否允许去

  a -> b 如果不想去 next(false)  或者不使用 next()
  a -> b 如果想去 next()
  如果不允许跳转，并且想去到指定页面  next('/xxxx')
*/
router.beforeEach((to, from, next) => {
  // nprogress.start()
  nprogress.start();
  let nickname = sessionStorage.getItem('nickname');
  let list = ['/card', '/money', '/system'];
  if (list.indexOf(to.path) > -1 && !nickname) {
    // 阻止
    // next(false)
    // next('/login'); 字符串模式
    next({
      path: '/Login',
      query: {
        redirect: to.fullPath
      }
    })
  } else {
    next()
  }
})

// 全局后置守卫

router.afterEach((to, from) => {
  // 完成nprogress.done()
  nprogress.done();
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
