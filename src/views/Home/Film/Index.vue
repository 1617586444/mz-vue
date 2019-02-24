<template>
  <div>
    <div class="addr" @click="$router.push('/city')">
      {{curCityName}}
      <i class="iconfont icon-xjt" style="font-size:10px;margin-left:5px;"></i>
    </div>
    <MzBanner></MzBanner>
    <MzTabs :name="son1Name" @test="fn1"></MzTabs>
    <!--主体内容区-->
    <keep-alive>
      <component :is="son1Name" :name="son2Name" @test="fn1"></component>
    </keep-alive>
  </div>
</template>

<script>
import MzBanner from "@/components/MzBanner/Index";
import MzTabs from "@/components/MzTabs/Index";
import MzFilmListLeft from "@/components/MzFilmListLeft/Index";
import MzFilmListRight from "@/components/MzFilmListRight/Index";

export default {
  // 局部注册组件
  components: {
    MzBanner,
    MzTabs,
    MzFilmListLeft,
    MzFilmListRight
  },
  data () {
    return {
      son1Name:'MzFilmListLeft',
      son2Name:'MzFilmListRight',
    }
  },
  computed: {
    curCityName() {
      return this.$store.state.curCityName;
    }
  },
  methods:{
    fn1(nameId){
      this.son1Name = nameId
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
