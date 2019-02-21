<template>
  <div>
    <div class="addr" @click="goTo">深圳<i class="iconfont icon-xjt" style="font-size:10px;margin-left:5px;"></i></div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in bannerList" :key="item._id">
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
    },
    goTo() {
      this.$router.push("/city");
    }
  },

  // 2. 调用 axios
  created() {
    axios
      .get("http://localhost:3000/banner/search", {
        params: {
          pageSize: 6
        }
      })
      .then(res => {
        //  res 不是 后台返回给你的数据 真正后台返回的数据是在 res.data 里面的
        // console.log(res.data);
        let data = res.data;
        if (data.code === 0) {
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
.addr {
    position: absolute;
    top: 18px;
    left: 7px;
    color: #fff;
    z-index: 10;
    font-size: 13px;
    background: rgba(0,0,0,.2);
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
</style>
