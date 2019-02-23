<template>
   <div class="main">
    <div class="main-top">
      <a href="#" @click="fn('MzFilmListLeft')">正在热映</a>
      <a href="#" @click="fn('MzFilmListRight')">即将上映</a>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
      fn(nameId){
        this.curPage = nameId
      }
    }
}
</script>

<style lang="less">
.main-top {
  height: 49px;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #ccc;
  a {
    display: inline-block;
    color: #191a1b;
    height: 49px;
    line-height: 49px;
    box-sizing: border-box;
    text-decoration: none;
  }
  a:nth-child(1) {
      color: #ff5200;
      border-bottom: 5px solid #ff5200;
  }
}
</style>
