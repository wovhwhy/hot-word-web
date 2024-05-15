<template>
  <div class="body">
  <div class="main">
    <el-card style="width:1500px; height:900px;" shadow="always">
      <div class="common-layout">
    <el-container>
      <el-header><h2>搜索结果</h2></el-header>
      <hr class="hr-solid">
      <el-container>
        <el-aside  class="left" width="750px" height="auto">
          <img class="responsive-image" :src = word.img alt="image" >
        </el-aside>
        <el-main  class="center-container">
          <h3> {{ word.wordName }}</h3> 
        
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
        wordMeaning:'',
        img:''
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
        this.word.img = '../assets/图片2.png'
        // this.word.wordName = '';
      } 
    },
    async getWordMeaning(wordName){
        const wordMeaning = await user.getWordDetal({ wordName });
        this.word.wordMeaning=wordMeaning[0].wordMeaning;
        this.word.img = wordMeaning[0].img;
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
  margin-top: 50px;
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
  line-height: 1.5;
  margin-top: 80px;
}
p{
  font-size: 25px;
  color: rgba(0, 0, 0, 0.664);
  /* text-align: left; */
  line-height: 1.5;
  margin: 0 80px;
  padding: 10px;
  text-align: justify;
  text-align-last: left;
}
.end{
  bottom: 0;
  position: fixed;
}
.hr-solid {
		border: 1px;
		border-top: 2px solid #d0d0d5;
    margin-bottom: 15px;
    margin-top: 20px;
	}
.left{
  width: 36%;
  height: 100%;
}
.responsive-image {
  width: 90%;
  height: 90%;
  object-fit: contain; /* 保持图片比例并填充整个容器 */
}

  .center-container {
  display: flex; 
  flex-direction: column;
}


</style>
