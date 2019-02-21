<template>
  <div>
    <div class="header">
      <a href="#" class="address" @click="$router.push('/city')">
        深圳
        <i class="iconfont icon-xjt" style="font-size:.08rem; margin-left:.05rem;"></i>
      </a>
      <h2>影院</h2>
      <a href="#" class="iconfont icon-fangdajing"></a>
    </div>
    <!--影院地址列表名-->
    <div class="cinema-list-name">
      <a href="#">
        全城
        <i class="iconfont icon-xjt" style="font-size:.08rem; margin-left:.05rem;"></i>
      </a>
      <a href="#">
        最近去过
        <i class="iconfont icon-xjt" style="font-size:.08rem; margin-left:.05rem;"></i>
      </a>
    </div>
    <!--影院地址列表-->
    <ul class="cinema-list">
      <li class="cinema-list-item" v-for="item in addressList" :key="item._id">
        <div class="cinema-info-lf cinema-info">
          <h3>
            <span v-text="item.name">英皇电影城（东海缤纷店）</span>
          </h3>
          <p v-text="item.address" class="ciema-address">东海国际中心二期B区101之B1002号商铺</p>
        </div>
        <div class="cinema-info-rt">
          <h3>
            <span>￥</span>
            <span>25</span>
            <span>起</span>
          </h3>
          <p>
            <span class="km">398.69km</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    // 定义装载数据列表
    return {
      addressList: []
    };
  },
  created() {
    axios
      .get("http://localhost:3000/cinema/search", {
        params: {
          pageSize: 10
        }
      })
      .then(res => {
        var data = res.data;
        if (data.code === 0) {
          // 成功
          this.addressList = data.data;
        } else {
          alert(data.msg);
        }
        console.log(data);
      });
  }
};
</script>

<style lang="less" scope>
.header {
  height: 44px;
  border-bottom: 1px solid #ededed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #191a1b;
  a {
    color: #191a1b;
    text-decoration: none;
    margin-right: 20px;
  }
  h2 {
    margin-right: 40px;
  }
}

/* 最近去过 */
.cinema-list-name {
  height: 49px;
  border-bottom: 1px solid #ededed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  a {
    color: #191a1b;
    text-decoration: none;
  }
}
/* 影院地址列表 */
.cinema-list {
  height: auto;
  .cinema-list-item {
    height: 75px;
    width: 100%;
    padding: 15px;
    border-bottom: 1px solid #ededed;
    box-sizing: border-box;
  }
}
.cinema-info {
  width: 250px;
  height: 45px;
  .ciema-address {
    width: 250px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.cinema-info-lf {
  float: left;
  p {
    width: 100%;
    float: left;
    color: #797d82;
    font-size: 12px;
  }
  h3 {
    color: #191a1b;
    margin-bottom: 16px;
    font-size: 15px;
  }
}
.cinema-info-rt {
  width: 65px;
  height: 100%;
  float: right;
  color: #797d82;
  h3 {
    color: #ff5f16;
    margin-bottom: 10px;
    font-size: 15px;
    span:nth-child(2) {
      font-size: 14px;
      margin: 0 3px;
    }
  }
  p {
    .km {
      font-size: 12px;
    }
  }
}
</style>
