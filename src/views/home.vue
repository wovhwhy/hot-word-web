<template>
  <div main>
    <div header>
      <lun></lun>

  </div>
 
  <div class="nav">
    <span>热词潮流，尽在指尖</span>
  </div>
  <div class="center">
  <div class="content">
    <div class="left">
      <img src="../assets/logo6.png" alt="image">
       <h2>{{title }}</h2>
        <hr class="hr-solid">
       <p>  {{ introudes }}</p>
      </div>
    </div>
    <div class="text">
  <h2>你可能感兴趣</h2>
  <hr class="hr-solid">
  <div class="ban"> 
  <ban></ban>
</div>
  <!-- <div class="content1" v-for="item in words" :key="item.word"> 
   <h3>{{ item.word }}</h3>
   <p>{{ item.mean }}</p> -->
  </div>
    </div>
  </div>
    <div class="end">
      <span>版权声明 | 联系方式 | 刊登广告 | 关于我们<br>版权所有</span>
    </div>
  <!-- </div> -->
  
  </template>
  
  <script name="name">
import ban from '../components/ban.vue';
import lun from '../components/lun.vue';
import { dateEquals } from 'element-plus'
import Lun from '../components/lun.vue';
import user from '../api/user'
  export default{
    name:'home',
    components:{
        Lun,ban
    },
    data(){
      return{
        title:'网络热词简介',
        introudes:'网络热词指的是在特定时间段内在网络上广泛传播和讨论的词语或短语。这些热词通常反映了当下社会、文化或时事事件的热点话题, 成为人们讨论、分享和关注的焦点。网络热词可以来源于各种网络平台，如社交媒体、网络论坛、视频网站等，也可以通过新闻报道、娱乐节目等渠道传播。 通过汇总网络热词，让部分不热爱于网络冲浪的年轻人也可以与同龄人在聊天时可以在“同一频道上”； 让中老年人更加了解当代年轻人使自己在与年轻人聊天时更加得心应手、能了解年轻人的潮流，消除年龄代沟问题，成为老年人与家人、朋友以及其他社交圈子保持联系的话题。了解和参与热词讨论可以促进社交互动，增进彼此之间的沟通和理解。此外，网络热词通常具有一定的趣味性和幽默性，老年人可以通过了解和分享这些热词来增加娱乐和消遣的乐趣，放松心情。',
        userId:this.$route.params.userId,
        words:[]
      }
    },
    created(){}
}
  </script>
  
  <style scoped> 
  .main{
  width: 100%;
  margin: 20px;
  padding: 20px;
  }
  
  .nav{
    /* background-color: #ED93A2; */
  
    background-color: #ca7d8ac2; 
    height: 40px;
    width: 97%;
    justify-content: center;
    align-items: center; 
    margin-left: 35px;
    margin-right: 20px;
 
  }
  .nav span{
    font-size: 28px ;
    color: white;
    letter-spacing: 0.6em;
  }
  .content {
    display: flex;
    float: left;
    margin-left: 20px;
  
  }
.content .left{
  float: left;
  flex: 1;
  margin-right: 20px; 
  padding: 10px;
}

.center{
  margin: 0 auto; 
  max-width: 92%;

}
  .content .left img{
    height:400px;
    width:400px;
    margin-right: 30px;
    float: left;
  }
  
  .hr-solid {
		border-top: 2px solid #d0d0d5;
    margin-bottom: 20px;
	}
  .content .left h2{
    font-size: 30px;
    text-align: center;
    vertical-align: middle;
    color: rgba(0, 0, 0, 0.963);
    padding: 15px;

  }
  .content1{
  text-align: left;
}
.content1 h3{
  font-size: 22px;
}
.content1 p{
  font-size: 18px;
}
  .content .left p{
    flex: 2;
    font-size: 25px;
    line-height: 1.5; 
    text-align: left;
    color: rgba(0, 0, 0, 0.806);
  }
.text{
    padding: 20px;
    margin-left: 15px; 
    margin-top: 20px;
  }
 .text h2{
    text-align: left;
    color: rgb(134, 43, 58);
    font-size: 28px;
    margin-top: 30px;
  }
  .main .text ul{
    font-size: 20px;
    text-align: left;
    margin-left: 20px; 
  }
  .end{
    border-top: 1px solid rgba(124, 76, 84, 0.646);
    background-color: #ca7d8ac2;
    height: 110px;
    width: 100%;
    justify-content: center;
     align-items: center; 
     margin-top: 20px;
    display: flex;
    bottom: 0;

  }
  .end span{
    text-align: center;
    margin-top: 20px;
    padding: 20px;
    text-align: center;
    font-size: 18px;
    color: white;
  }
  .ban{
    font-size: 80px;
  }

</style>
 