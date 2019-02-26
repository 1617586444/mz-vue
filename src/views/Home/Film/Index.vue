<template>
  <div>
    <div class="addr" @click="$router.push('/city')">
      {{curCityName}}
      <i class="iconfont icon-xjt" style="font-size:10px;margin-left:5px;"></i>
    </div>
    <MzBanner></MzBanner>
    <MzTabs></MzTabs>
      <!-- <component :is="son1Name" :name="son2Name" @test="fn1"></component> -->
    <!--三级路由-->
    <router-view></router-view>
  </div>
</template>

<script>
import MzBanner from '@/components/MzBanner/Index';
import MzTabs from '@/components/MzTabs/Index';

export default {
  // 局部注册组件
  components: {
    MzBanner,
    MzTabs
  },
  computed: {
    curCityName () {
      return this.$store.state.curCityName;
    }
  }

};
</script>

<style lang="less">
.addr {
  position: absolute;
  top: 18px;
  left: 7px;
  color: #fff;
  z-index: 10;
  font-size: 13px;
  background: rgba(0, 0, 0, 0.2);
  height: 30px;
  line-height: 30px;
  border-radius: 15px;
  text-align: center;
  padding: 0 5px;
}
.swiper-container {
  height: 210px;
  img {
    width: 100%;
    height: 100%;
  }
  .swiper-pagination-bullet {
    opacity: 0.8;
  }
}
.film-list {
  .city-fixed {
    position: absolute;
    top: 18px;
    left: 7px;
    color: #fff;
    z-index: 10;
    font-size: 13px;
    background: rgba(0, 0, 0, 0.2);
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    padding: 0 5px;
  }
}
</style>
