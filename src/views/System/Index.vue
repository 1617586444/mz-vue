<template>
  <div>
    <header class="system-header"><i class="iconfont icon-zuojiantou1" @click="$router.push('/center')"></i><span>设置</span></header>
    <ul class="system-ul">
      <li><p class="Identification"><span class="span-id">账号ID</span><span class="span-num">230270647</span></p></li>
      <li>
        <p class="Identification active"><span class="span-id">登录密码</span><span class="span-num">未设置<i class="iconfont icon-iconfontjiantou5"></i></span></p>
        <p class="Identification"><span class="span-id">安全密码</span><span class="span-num">未设置<i class="iconfont icon-iconfontjiantou5"></i></span></p>
      </li>
      <li>
        <p class="Identification active"><span class="span-id">软件版本</span><i class="iconfont icon-iconfontjiantou5 span-num"></i></p>
        <p class="Identification"><span class="span-id">意见反馈</span><i class="iconfont icon-iconfontjiantou5 span-num"></i></p>
      </li>
      <li><p class="Identification"><span class="span-id">清除缓存</span><span class="span-num">0.1KB</span></p></li>
    </ul>
    <div class="system-footer"><span @click="outLogin">退出登录</span></div>
  </div>
</template>

<style lang="less">
  @import url(./index.less);
</style>

<script>
export default {
  methods: {
    outLogin () {
      // 清空sessionStorage数据
      sessionStorage.clear();
      this.$router.push('/center')
    }
  }
}
</script>
