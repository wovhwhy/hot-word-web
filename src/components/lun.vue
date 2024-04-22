<template>
  <el-carousel :interval="4000" type="card" height="700px">
    <el-carousel-item v-for="item in 3" :key="item">
      <img :src="getImagePath(item)" alt="image" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  methods: {
    getImagePath(item) {
      return `images/image${item}.png`;
    }
  }
}
</script>

<style>
  .el-carousel__item {
    height:701px; /* 设置图片容器高度 */
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
