<template>
  <div>
    <MzBanner></MzBanner>
    <MzTabs></MzTabs>
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
