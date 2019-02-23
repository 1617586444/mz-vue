<template>
  <div>
    <header class="money-header"><i class="iconfont icon-fz" @click="$router.push('/center')"></i><span>余额明细</span><i class="iconfont icon-zixun"></i></header>
    <div class="cur-money">
      <p>当前余额</p>
      <div class="remaining"><span>￥</span><span>10000.00</span></div>
    </div>
    <div class="money-img"><img src="../../assets/images/money_03.jpg" alt=""></div>
    <div class="noMoney">暂无余额使用明细</div>
  </div>
</template>

<style lang="less">
  @import url(./index.less);
</style>
