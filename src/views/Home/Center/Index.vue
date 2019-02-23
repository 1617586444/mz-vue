<template>
  <div>
    <div class="center-header">
      <div class="avatar">
        <img :src="strImg2">
        <span class="nick-name" @click="handLogin">{{ nickName ? nickName : info}}</span>
      </div>
    </div>
    <div class="my-order-tab">
      <a href="#">
        <i class="iconfont icon-qiaquan" style="color: #ffc82f;"></i>电影订单
      </a>
      <a href="#">
        <i class="iconfont icon-team" style="color: #c6da5c;"></i>拼团订单
      </a>
    </div>
    <!--主体内容-->
    <div class="mz-main">
      <div class="margin-set">
        <router-link tag="p" to="/card" class="my-card">
          <i class="iconfont icon-qiaquan"></i>
          <span>卖座卡</span>
          <span class="yjt"><i class="iconfont icon-iconfontjiantou5"></i></span>
        </router-link>
        <router-link tag="p" to="/money" class="my-card">
          <i class="iconfont icon-yue"></i>
          <span>余额</span>
          <span class="yjt"><i class="iconfont icon-iconfontjiantou5"></i></span>
          <span class="perve">￥{{ initMoney }}.00</span>
        </router-link>
        <router-link tag="p" to="/system" class="my-card">
          <i class="iconfont icon-shezhi"></i>
          <span>设置</span>
          <span class="yjt"><i class="iconfont icon-iconfontjiantou5"></i></span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      initMoney: '0',
      money: '10000',
      info: '立即登录',
      nickName: sessionStorage.getItem('nickname'),
      strImg2: 'https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=341815867,4121040157&fm=85&s=C6DA7D88862332AC7CA059060100E0C1'
    }
  },
  mounted () {
    if (this.nickName) {
      this.strImg2 = 'https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=341815867,4121040157&fm=85&s=C6DA7D88862332AC7CA059060100E0C1';
      this.initMoney = '10000';
    } else {
      this.strImg2 = 'https://mall.s.maizuo.com/bd6d9303e481f78fcdcee3f4a295f9b9.jpg';
    }
  },
  methods: {
    handLogin () {
      if (this.nickName) {
        this.$router.push('/system');
      } else {
        this.$router.push('/login');
      }
    }
  }
};
</script>

<style lang="less" scope>
.center-header {
  height: 170px;
  background: url(../../../assets/images/wd_header.png) no-repeat;
  background-size: 100% 100%;
}
.avatar {
  height: 67px;
  padding: 65px 0;
  padding-left: 54px;
  box-sizing: border-box;
  img {
    width: 67px;
    height: 67px;
    border-radius: 50%;
    margin-right: 34px;
    border: 2px solid #fff;
    float: left;
  }
}
.nick-name {
  float: left;
  line-height: 71px;
  color: #fffcfb;
  font-weight: 900;
}
/*选项卡*/
.my-order-tab {
  height: 79px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  a {
    display: flex;
    text-align: center;
    flex-flow: column;
    color: #92969c;
    text-decoration: none;
    i {
      font-size: 26px;
      margin-bottom: 10px;
    }
  }
}
/*主体内容区*/
.mz-main {
  height: 376px;
  background: #f4f4f4;
}
.margin-set {
  width: 100%;
  float: left;
  background: #fff;
  margin-top: 18px;
}
.my-card {
  height: 49px;
  border-bottom: 1px solid #ccc;
  line-height: 49px;
  padding: 0 10px;
  i {
    margin-left: 10px;
  }
  span {
    margin-left: 10px;
  }
}
.yjt {
  color: #000;
  margin-right: 0.11rem;
  float: right;
}
.perve {
  float: right;
  margin-right: 0.11rem;
  font-size:16px;
}
</style>
