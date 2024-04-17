<template>
  <div class="body">
  <div class="main">
    <h2>搜索结果：</h2>
    <hr class="hr-solid">
    <div class="search" >
      <!-- 搜索关键词 -->
      <!-- $route.params.keyword显示搜索关键词 -->
       <h3> {{ $route.params.keyword }}</h3> 
      <p> {{ p }}</p>
    </div>
  </div>
  <div class="end">
    <foot/>
  </div>
</div>

</template>

<script>
import foot from '../components/foot.vue'
export default {
  components:{
        foot,
      },
  data() {
    return {
      p: '', // 给属性 p 一个初始值
      searchKeyWord:this.$route.params.searchKeyWord
      
    };
  },
  created() {
    this.searchContent(this.$route.params.searchKeyWord); // 调用搜索函数
  },
  methods: {
    //传入路由参数中的关键词并进行搜索
    searchContent(searchKeyWord) {
      // 模拟搜索逻辑，这里可以替换为实际的搜索函数
      if (searchKeyWord === 'example') {
        this.p = this.searchKeyWord;
      } else {
        this.p = '未找到相关搜索结果。';
      }
    }
  }
};
</script>

<style scoped>
 .body{
  /* background-color: grey; */
  width: 100%;
  height: 1000px;
} 
.main{
 /* 设置中间区域背景颜色 */
  width: 100%;
  height: 100px;
}
.search {
  display: flex;
  font-size: 20px;
  width: 100%;
  height: 30px;
  margin-top: 15px;
}
h2{
  font-size: 32px;
  margin-top: 15px;
}
h3{
  font-size: 28px;
}
p{
  font-size: 25px;
}
.end{
  bottom: 0;
  position: fixed;
}
.hr-solid {
		border: 1px;
		border-top: 2px solid #d0d0d5;
    margin-bottom: 20px;
	}
</style>
