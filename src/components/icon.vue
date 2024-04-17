<template>
  <i class="iconfont" :class="[iconclass, extraclass]"></i>
</template>

<script>
var map = {
  user: 'icon-caidan07',
  搜索:'icon-sousuo'
};
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    extraclass: {
      type: String,
      default: '',
    },
  },
  computed: {
    iconclass() {
      return map[this.type];
    },
  },
};
</script>

<style scoped>
@import '//at.alicdn.com/t/c/font_4502270_iyoii2mfg3.css';
</style>