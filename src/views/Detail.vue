<template>
  <div>
    详情页
  <!-- <div>当前id是： {{ $route.params.id}}</div> -->
  <div>当前id是： {{ id}}</div>
  </div>
</template>

<script>
export default {
  props: {
    id: Number
  }
}
</script>
