<template>
  <div class="body">
  <div class="main">
    <el-card style="width:1500px; height:800px;" shadow="always">
      <div class="common-layout">
    <el-container>
      <el-header><h2>搜索结果</h2></el-header>
      <hr class="hr-solid">
      <el-container>
        <el-aside  class="left" width="750px" height="auto">
          <img class="responsive-image" src="../assets/图片2.png" alt="image">
        </el-aside>
        <el-main>
          <h3> {{ word.wordName }}</h3> 
          <br>
      <p> {{ word.wordMeaning }}</p>
        </el-main>
      </el-container>
    </el-container>
  </div>
    </el-card>
    </div>
  </div>
  <div class="end">
    <foot/>
  </div>
</template>

<script>
import foot from '../components/foot.vue'
import user from '../api/user';
export default {
  components:{
        foot,
      },
  data() {
    return {
      p: '', // 给属性 p 一个初始值
      searchKeyWord:this.$route.params.searchKeyWord,
      word:{
        wordName:this.$route.params.wordName,
        wordMeaning:''
      }
    };
  },
  created() {
    this.searchContent(); // 调用搜索函数
  },
  methods: {
    //传入路由参数中的关键词并进行搜索
    searchContent() {
      // 模拟搜索逻辑，这里可以替换为实际的搜索函数
      this.getWordMeaning(this.word.wordName);
      if (this.word.wordMeaning == '') {
        this.word.wordMeaning = '未找到相关搜索结果。';
        // this.word.wordName = '';
      } 
    },

    async getWordMeaning(wordName){
        const wordMeaning = await user.getWordDetal({ wordName });
        this.word.wordMeaning=wordMeaning[0].wordMeaning;
    }
  }
};
</script>

<style scoped>
 .body{
  width: 100%;
  height: 1000px;
} 
.main{
  justify-content: center;
  text-align: center;
  display: inline-block;
  margin-top: 100px;
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
  margin-bottom: 20px;
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
    margin-top: 20px;
	}
.left{
  margin-top: 20px;
}
.responsive-image {
  width: 90%;
  height: 90%;
  object-fit: contain; /* 保持图片比例并填充整个容器 */
}

</style>
