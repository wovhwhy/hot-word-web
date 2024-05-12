<template>
  <div class=recom>
 <div class=main>
    <img src="../assets/recom.png" alt="">
</div>
</div>


<section class="w3l-news" id="news">
  <div id="grids5-block" class="py-5">
    <div class="search-box">
    <input  placeholder="搜一搜" icon type="搜索" extraclass="icon"  v-model="wordName"/>
    <el-button type="primary" plain class="iconfont icon-sousuo1"  @click="goSearch(wordName)" >搜索</el-button>
  </div>
  
        <div class="container py-lg-5 py-md-4 py-2">
            <div class="row">
                <div  v-for="word in words" :key="word.wordId" class="col-lg-4 col-md-6 mt-5">
                    <div class="grids5-info">
                        <a  @click="goSearch(word.wordName)" class="d-block zoom"><img :src=word.img alt=""
                                class="img-fluid news-image" style="max-height: 600px;"/></a>
                        <div class="blog-info">
                            <h4><a @click="goSearch(word.wordName)">{{ word.wordName }}</a></h4>
                            <p class="date"><span class="fa fa-calendar mr-2"></span> {{ word.date }}</p>
                            <a href="blog-single.html" class="btn btn-news mt-4">Read More</a>
                        </div>
                    </div>
                </div>
        </div></div>
        </div>
</section>
<foot></foot> 
</template>



<script>
import icon from "../components/icon.vue"
import foot from "../components/foot.vue";
import { ElMessage } from 'element-plus';
import "../assets/css/style-liberty.css";
import user from "../api/user";
export default{
  components:{
    foot,icon,
  },
  data(){
    return{
      wordName: '',
      words:[]
    };
  },
  created(){
    this.getWord();
  },
  methods:{
    open4() {  
      ElMessage({  
        message: '请输入一个你想查找的热词',  
        type: 'error',  
        plain: true,  
      });  
    },
    goSearch(wordName) {
        if(wordName === ''){
          this.open4();
        }else{
          this.$router.push({ name: 'search', params:{ wordName: wordName } });
        }
    },
    async getWord(){
      const words = await user.getWord();
      this.words = words;
    }
  }
}
</script>
<style scoped>
.recom{
  width: 100%;
  margin:0 auto;
}
.main{
  width: 100%;
  position: relative;
  }
.main img{
    width: 95%;
    height: 850px;
    position: relative;
  }
 .search-box {
  text-align: center;
  border-radius: 5px;
  left: 50%; 
} 
input {
  width:600px;
  height: 50px;
  padding: 5px;
  font-size: 16px;
  border-radius: 10px;
}
button {
  padding: 5px 10px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  margin-left: 5px;
  width: 100px;
  height: 50px;
}
.text{
  margin: 50px 20px;
}
.text .content{
  text-align: left;
}
.content h3{
  font-size: 22px;
}
.content p{
  font-size: 18px;
}

h2{
    text-align: left;
    color: rgb(134, 43, 58);
    font-size: 28px;
    margin-top: 25px;
 }
 .img-fluid news-image{
  height: 500px;
 }
</style>
