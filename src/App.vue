<template>
<!-- mode="in-out" out-in  设置路由动态切换效果-->
<transition
  appear
  mode="out-in"
  enter-active-class="animated bounceInUp faster"
  leave-active-class="animated bounceOutDown faster"
>
  <router-view></router-view>
</transition>

  <!-- <div> -->
    <!-- 放置一个路由视图 ,就会安装路由对照表的配置去渲染对应的内容 -->
    <!-- <router-view></router-view> -->
    <!--
      1. localhost:8080/#/films Film.vue
      2. localhost:8080/#/cinema Cinema.vue
      3. localhost:8080/#/center Center.vue
     -->
     <!-- <MzFooter></MzFooter>
  </div> -->
</template>
