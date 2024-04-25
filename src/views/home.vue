<template>
  <div main>
    <div header>
      <lun></lun>

  </div>
  <div class="nav">
    <span>热词潮流，尽在指尖</span>
  </div>
  <div class="content">
    <div class="left">
      <img src="../assets/图片2.png" alt="image">
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
    <div class="end">
      <span>版权声明 | 联系方式 | 刊登广告 | 关于我们<br>版权所有</span>
    </div>
  <!-- </div> -->
  
  </template>
  
  <script>
import ban from '../components/ban.vue';
import lun from '../components/lun.vue';
import { dateEquals } from 'element-plus'
import Lun from '../components/lun.vue';
  export default{
    name:'home',
    components:{
        Lun,ban
},
data(){
return{
    title:'网络热词简介',
    introudes:'网络热词指的是在特定时间段内在网络上广泛传播和讨论的词语或短语。这些热词通常反映了当下社会、文化或时事事件的热点话题, 成为人们讨论、分享和关注的焦点。网络热词可以来源于各种网络平台，如社交媒体、网络论坛、视频网站等，也可以通过新闻报道、娱乐节目等渠道传播。 通过汇总网络热词，让部分不热爱于网络冲浪的年轻人也可以与同龄人在聊天时可以在“同一频道上”； 让中老年人更加了解当代年轻人使自己在与年轻人聊天时更加得心应手、能了解年轻人的潮流，消除年龄代沟问题，成为老年人与家人、朋友以及其他社交圈子保持联系的话题。了解和参与热词讨论可以促进社交互动，增进彼此之间的沟通和理解。此外，网络热词通常具有一定的趣味性和幽默性，老年人可以通过了解和分享这些热词来增加娱乐和消遣的乐趣，放松心情。',
    words: [
        {word:'奥利给:' , mean:'该词是“给力奥”的倒读，因网络主播的使用而流行。作为感叹词，包含赞美、加油、打气等多种感情色彩，被网友配以夸张、魔性的表情和音调广泛使用。'},
        {word:'好家伙:' , mean:'最早是相声中常见的语气词，表示感叹之意。后来网友在吐槽某事或对某事感到惊讶时，通常会加上“好家伙”加强语气。'},
        {word:'干饭人:', mean:'指吃饭时非常积极的人。干饭人用语:“干啥啥不行，吃饭第一名”，“干饭人干饭魂，干饭人吃饭得用盆”。'},
        {word:' 爷青回:' , mean:'是“爷的青春又回来了”的缩写，用来表达人在变化后的环境中面对曾经熟悉的人和事物时，油然而生的一种喜悦之情。'},
        {word:'真香:' , mean:'意思是打脸。这个梗的由来是《变形记》。其中有一期的城市主人公去了乡村后，发誓不吃乡村家庭的蛋炒饭，后来又吃了，并说“真香”。'},
        {word:'夺笋' , mean:'“夺笋“是“多损”的东北方言谐音，多用于吐槽某人“很缺德”，由网络主播带火。相声中常能听到将“多”读为二声的“多损呐”，但用动宾短语“夺笋”来记录音变后的“多损”，并以文字形式大范围流行仍是近两年的新语言现象。由于“夺笋”包含着实体“笋”，又极具画面感，便逐渐衍生出“山上的笋都被你夺完了”等变体,以及像“大熊猫点外卖——笋到家了”这样的歇后语。2021年,与“夺笋”类似的“槽言槽语”还有诸如“你礼貌吗”“离谱”“……了但没完全……”“我不理解”等。'
},],
    }
  }
}
  </script>
  
  <style scoped> 
  .main{
  width: 100%;
  margin: 20px;
  padding: 20px;
  }
  
  .nav{
    background-color: rgba(33, 27, 27, 0.826);
    height: 50px;
    width: 97%;
    justify-content: center;
     align-items: center; 
     margin-left: 35px;
     margin-right: 20px
  }
  .nav span{
    font-size: 35px ;
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
    color: rgb(0, 0, 0);
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
  .main .text{
    padding: 20px;
    margin-left: 15px; 
  }
  .main .text h2{
    text-align: left;
    color: rgb(134, 43, 58);
    font-size: 28px;
  }
  .main .text ul{
    font-size: 20px;
    text-align: left;
    margin-left: 20px; 
  }
  .end{
    background-color: rgba(33, 27, 27, 0.826);
    height: 150px;
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
 