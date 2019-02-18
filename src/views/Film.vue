<template>
  <div>
    <MzBanner></MzBanner>
    <MzTabs></MzTabs>
    <MzFooter></MzFooter>
  </div>
</template>

<script>
import MzBanner from '../components/MzBanner/Index';
import MzTabs from '../components/MzTabs/Index';
import MzFooter from '../components/MzFooter/Index';

export default {
  // 局部注册组件
  components: {
    MzBanner,
    MzTabs,
    MzFooter
  }
}
</script>
