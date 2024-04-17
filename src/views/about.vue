<template>
  <div class=about>
 <div class=main>
    <img src="../assets/about.png" alt="">
    <div class="content1" v-for="item in datalist1" :key="item.p">
    <h1>——网站简介——</h1>
    <p>{{ item.p }}</p>
      <div class="logo">
        <img src="../assets/logo4.png" alt="">
        <img src="../assets/logo5.png" alt="">
      </div>
      <div class="content2">
        <h2>——发展历程——</h2>
        <div class="content3" v-for="item in datalist" :key="item.p"> 
   <p>{{ item.p}}</p>
  </div>
    <img src="../assets/进程.png" alt="">
      </div>
  </div>
  <foot></foot> 
</div>
</div>
 </template>

<script>
import foot from "../components/foot.vue"
export default{
    name:'about',
      components:{
        foot,
      },
      data(){
        return{
          datalist:[
        {p:'早期互联网时代(1990s - 2000s): 互联网的普及使得信息传播更加便捷,一些早期的网络热词如“cyber”(网络)、“web”(网络)、“email”(电子邮件)等开始出现。随着社交媒体的兴起,一些社交媒体平台特有的词汇和概念开始进入人们的生活,如“friend request”(好友请求)、“like”(点赞)等.'},
        {p:'社交媒体时代(2010s - 至今)随着社交媒体平台如Facebook、Twitter、Instagram等的普及,网络热词开始更加频繁地出现和传播。社交媒体上的一些挑战、趋势和流行文化元素也成为网络热词,如“selfie”(自拍)、“trending”(热门话题)、“meme”(网络迷因)等。新兴科技和数字化时代：随着新兴科技如区块链、人工智能、虚拟现实等的发展,相关的术语和概念成为热门话题,如“NFT”、“元宇宙”、“区块链游戏”等。数字化媒体和内容创作的兴起也催生了一些与数字媒体相关的网络热词,如“vlog”(视频博客)、“streamer”(直播主)等。'},
        {p:'全球化和跨文化交流：互联网的全球化特性使得不同国家和地区的文化交流更加频繁，促进了网络热词在全球范围内的传播和接受。全球性事件、趋势和话题也会催生一些全球性的网络热词,如“pandemic”(大流行病)、“climate change”(气候变化)等。网络热词的发展历程反映了互联网和社交媒体对人们生活、文化和语言的影响，同时也受到科技发展、全球化和文化交流等多种因素的共同影响。随着社会不断变迁和技术不断进步，我们可以期待网络热词的发展会继续呈现多样化和多元化的趋势。'},
],
 datalist1:[
        {p:'该网站是为年轻人,中老年人等人群打设的，了解网络热词的网站,以此减少交流的代沟，网络热词的流行不受地域限制，促进了不同文化之间的交流和理解。 它们有助于推动全球化，使人们更加了解和尊重不同文化背景。'},
]
    }
        }
      }
      
    
</script>



<style scoped>
.about{
  width: 100%;
  margin:0 auto;
}
.main{
  width: 100%;
  position: relative;
  }
.main img{
    width: 100%;
    height: 800px;
    position: relative;
  }
h1{
  font-size: 40px;
  margin-top: 20px;
}
p{
  font-size: 22px;
  margin: 5px 80px;
  text-align: left;
  display: inline-block;
}
.logo{
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo img{
  height: 350px;
  width: 350px;
  margin: 0 10px;
}
.content2 img{
  height: 600px;
  width: 900px;
}
.content2 h2{
  margin-top: 60px;
}

</style>