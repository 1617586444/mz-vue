<template>
  <div>
    <MzBanner></MzBanner>
    <MzTabs></MzTabs>
    <ul>
      <router-link tag="li" to="/detail/100">浏览地球</router-link>
      <router-link tag="li" to="/detail/200">飞驰人数</router-link>
      <router-link tag="li" to="/detail/300">西游记</router-link>
    </ul>

    <div style="height:2002px;"></div>
  </div>
</template>

<script>
import MzBanner from '../components/MzBanner/Index';
import MzTabs from '../components/MzTabs/Index';

export default {
  // 局部注册组件
  components: {
    MzBanner,
    MzTabs
  }
}
</script>
