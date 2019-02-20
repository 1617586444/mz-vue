<template>
  <div>电影详情页
    <div>当前电影的ID为：{{ id }}</div>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    name: String,
    age: Number,
    sex: String
  },
  created () {
    // 根据ID去请求数据
    console.log(this.$route);
    console.log(this.$router);
  }
}
</script>
