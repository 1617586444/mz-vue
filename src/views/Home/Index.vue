// 这个是一个一级路由 他包裹着 films | cinema | center 这些二级路由
<template>
  <div>
    <!-- 这里要有个坑。去现实 film ciema center -->
    <transition
      appear
      mode="out-in"
      enter-active-class="animated bounceInUp faster"
      leave-active-class="animated bounceOutDown faster"
      >
    <router-view></router-view>
    </transition>
    <MzFooter></MzFooter>
  </div>
</template>

<script>

import MzFooter from '@/components/MzFooter/Index.vue';

export default {
  components: {
    MzFooter
  }
}
</script>
