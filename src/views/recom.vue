<template>

  <div class=recom>
 <div class=main>
    <img src="../assets/recom.png" alt="">
  <div class="search-box">
    <input  placeholder="搜一搜" icon type="搜索" extraclass="icon"  v-model="wordName"/>
    <el-button type="primary" plain class="iconfont icon-sousuo1"  @click="queryWordMeaning(wordName)" >搜索</el-button>
  </div>
</div>
<div class="text">
  <hr1/>
  <div class="content" v-for="item in words" :key="item.word"> 
   <h3>{{ item.word }}</h3>
   <p>{{ item.mean }}</p>
  </div>
  <h2>往期热词</h2>
  <hr class="hr-solid">
  <div class="content" v-for="item in datelist" :key="item.word"> 
  <h3>{{ item.word }}</h3>
   <p>{{ item.mean }}</p>

 </div>
  </div>
</div>
<foot></foot> 
</template>



<script>
import icon from "../components/icon.vue"
import foot from "../components/foot.vue";
import hr1 from "../components/hr1.vue";
import user from '../api/user';
export default{
  components:{
    foot,hr1,icon,
  },
  data(){
    return{
      wordName: '',
      word: [],
      words: [
        {word:'主打一个××:' , mean:'一种流行的网络句式，强调某个人或某件事物在特定领域内的特色和优势。如“主打一个高性价比”、“主打一个便宜”、“主打一个方便”、“主打一个开心”。'},
        {word:'命运的齿轮开始转动:' , mean:'指改写命运的某个瞬间或影响人生轨迹的某个转折点。这个短语表面上说的是成功背后的运气、机遇等偶然因素，更多强调的是在压力和逆境中应尽快行动起来，才能把握自我命运曲线的走势、创造属于自己的辉煌"。'},
        {word:'尊嘟假嘟 :', mean:'出自博主@伯恩山bot,模仿小猫小狗的说话方式,谐音"真的假的", 这是尊嘟O.O,这是假嘟o.o,所以尊嘟假嘟是O.o。'},
        {word:' 电子榨菜:' , mean:'电子零食。它将短视频、表情包和社交媒体帖子等轻松内容比作下饭零食，而非主餐。'},
        {word:'内卷:' , mean:'原指一类文化模式达到了某种最终的形态以后，既没有办法稳定下来，也没有办法转变为新的形态，而只能不断地在内部变得更加复杂的现象。 经网络流传，很多高等学校学生用其来指代非理性的内部竞争或“被自愿”竞争。 现指同行间竞相付出更多努力以争夺有限资源，从而导致个体“收益努力比”下降的现象。'},
        {word:'Citywalk:' , mean:'这个词汇指的是在城市里漫步的活动,是一种通过步行的方式探索城市大街小巷的生活休闲方式。它强调了对城市环境的探索和发现,是一种健康而有趣的生活方式。通常用于描述人们的休闲活动,例如周末或假期时,人们可能选择进行一次Citywalk,从而放松身心，享受城市风景。'}
      ],
      datelist:[
        {word:' emo:' , mean:'“永远的神”最开始是一个电竞圈梗,其流行始于一个游戏主播在直播时对职业电竞选手Uzi的夸赞:“乌兹!永远的神!”这句话随后受到Uzi粉丝的青睐,频繁用来夸奖Uzi。“永远的神”及其拼音首字母缩写形式yyds(也写作YYDS)便因此逐渐爆火“出圈”,成为网络流行语,常用来赞许某人或某物非常优秀,在自己心中占据很高的地位。值得注意的是,yyds虽然表面上看完全由外文字母组成,但其实是汉语拼音缩写。yyds及其他拼音缩写式流行语的流行,正是拼音在信息社会作为辅助文字功能扩大的体现。'},
        {word:' yyds(永远的神):' , mean:'指改写命运的某个瞬间或影响人生轨迹的某个转折点。这个短语表面上说的是成功背后的运气、机遇等偶然因素，更多强调的是在压力和逆境中应尽快行动起来，才能把握自我命运曲线的走势、创造属于自己的辉煌"。'},
        {word:'社恐/社牛:', mean:'“社恐”全称“社交恐惧症”，本指一种会因社交焦虑而严重影响生活的心理疾病，网络上多用于指有这种“社交恐惧症”的人。不过，现在流行的“社恐”们的“症状”其实没有这么严重，“我社恐”往往只是一种带有调侃意味的标签，表达自己不愿意出门社交的心理，其背后是人们因恐惧陌生而想要逃避的人之常情。而“社牛”则正相反，往往可以在陌生的环境中游刃有余、毫不胆怯地开展社交，与原本并不熟悉的人迅速打成一片。东京奥运会和全运会赛场下，年轻的体操运动员管晨辰和跳水运动员陈芋汐都因与众多运动员合照、交流而被夸赞为“社牛”。'},
        {word:' 集美:' , mean:'指好姐妹，来源于抖音主播迷人的郭老师。她的口头禅就是姐妹们。由于她发音比较奇特，听起来就像是集美们，引众多网友模仿，进而火了起来。'},
        {word:'奥利给:' , mean:'该词是“给力奥”的倒读，因网络主播的使用而流行。作为感叹词，包含赞美、加油、打气等多种感情色彩，被网友配以夸张、魔性的表情和音调广泛使用。'},
        {word:'干饭人:' , mean:'指吃饭时非常积极的人。干饭人用语:“干啥啥不行，吃饭第一名”，“干饭人干饭魂，干饭人吃饭得用盆”。'},
      ],// 词列表
    };
  },
  methods:{
    // gosearch(wordName,wordMeaning){
    //   this.$router.push({ name: 'search', params:{ wordName: wordName ,wordMeaning: wordMeaning } });
    // },
    async queryWordMeaning(wordName) {
            const wordMeaning = await user.getWordDetal({ wordName });
            this.word=wordMeaning[0];
            await this.$router.push(`/search/${wordMeaning[0].wordName}`);
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
    width: 98%;
    height: 600px;
    position: relative;
  }
 .search-box {
  position: absolute;
  top: 30px;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  left: 50%; 
  transform: translate(-50%, -50%);
} 
input {
  width:400px;
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
  width: 80px;
  height: 40px;
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

.hr-solid {
		border: 1;
		border-top: 2px solid #d0d0d5;
    margin-bottom: 20px;
	}

</style>
