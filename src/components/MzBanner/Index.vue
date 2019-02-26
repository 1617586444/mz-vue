<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in bannerList" :key="item.bannerId">
          <img :src="item.imgUrl" alt>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
// 使用axios 调用后台的接口
// 1.引入模块
import axios from 'axios';
export default {
  data () {
    return {
      // 轮播图的数据
      bannerList: [],
      // swiper 轮播图的实例对象
      mySwiper: null
    };
  },
  methods: {
    initSeiper () {
      // 对某个代码不校验 eslint 的规则
      /* eslint-disable */

      this.mySwiper = new Swiper(".swiper-container", {
        autoplay: true,
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination"
        },
        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      });
      /* eslint-disable */
    }
  },
  // 2. 调用 axios
  created() {
    axios
      .get("https://m.maizuo.com/gateway?type=2&cityId=210300&k=3124088", {
        headers: {
          // 配置请求头
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"1550840606101571681584854"}',
          'X-Host':' mall.cfg.common-banner'
        }
      })
      .then(res => {
        //  res 不是 后台返回给你的数据 真正后台返回的数据是在 res.data 里面的
        let data = res.data;
        if (data.status === 0) {
          this.bannerList = data.data;
          //  1. 数据更新后 对轮播图做个更新
          //  2. 数据更新后 在new swiper(PS: 数据的更新到页面真实DOM的更新还需要一点点时间)
          //  $enxtTick() 接收一个回调函数直到DOM 元素更新结束后(能够确保真实DOM的更新)
          this.$nextTick(() => {
            this.initSeiper();
          });
        } else {
          alert("网络异常，请稍后重试");
        }
      });
  },

  mounted() {}
};
</script>
<style lang="less">
</style>
