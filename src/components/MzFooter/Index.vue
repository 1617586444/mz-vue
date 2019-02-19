<template>
  <footer class="footer">
    <router-link to="/films">
      <i class="iconfont icon-dy"></i>电影
    </router-link>
    <router-link to="/cinemas">
      <i class="iconfont icon-yingyuana"></i>影院
    </router-link>
    <router-link to="/shuop">
      <i class="iconfont icon-pintuandingdan"></i>9.9拼团
    </router-link>
    <router-link to="/center">
      <i class="iconfont icon-wd"></i>我的
    </router-link>
  </footer>
</template>

<style lang="less">
.footer {
  height: 48px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background: #fff;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
i {
  font-size: 21px;
}

a {
  color: #797d82;
  display: flex;
  flex-flow: column;
  text-align: center;
  text-decoration: none;

  // 当前被激活的 a
  &.router-link-active {
    color: #ff5f16;
  }
}
}

</style>
