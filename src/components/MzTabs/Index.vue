<template>
   <div class="main">
    <div class="main-top">
      <a href="#" @click="fn2('MzFilmListLeft')" :class="{ active: isActive }">正在热映</a>
      <a href="#" @click="fn2('MzFilmListRight')" :class="{ active: hasError }">即将上映</a>
    </div>
  </div>
</template>

<script>
export default {
  props:['name'],
  data () {
    return {
      isActive: true,
      hasError: false
    }
  },
  methods: {
    fn2 (zujianName) {
    this.$emit('test',zujianName)
    if ( zujianName === 'MzFilmListLeft') {
        this.isActive = true
       this.hasError = false
      } else{
       this.isActive = false
       this.hasError = true
      }
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
  .active {
      color: #ff5200;
      border-bottom: 5px solid #ff5200;
  }
}
</style>
