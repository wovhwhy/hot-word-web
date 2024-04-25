<template>
  <div class="say">
    <div class="card">
      <h1>留言板</h1>
      <div class="text1">
        <span>Name:</span>
        <var-input variant="outlined" class="input1"  placeholder="请输入您的用户名" clearable v-model="name"  />
      </div>
      <div class="text2">
        <span>Message:</span>
        <var-input variant="outlined" class="input2"   placeholder="请输入您的留言" textarea v-model="message" />
      </div>
      <div class="button">
      <var-button
      color="linear-gradient(to right bottom,  #2980E3, #D0BCFF)" text-color="#fff" type="send" style="width: 12%;"  @click="sendMessage" >发送留言</var-button>
      <var-button
      color="linear-gradient(to right bottom,  #2980E3, #D0BCFF)" text-color="#fff" type="resetMessage" style="width:12%;" @click="resetMessage">重置</var-button>
    </div>
      <div class="text3">
        <h3>留言：</h3>
      <ul>
        <li v-for="(msg, index) in messages" :key="index"> 
          <strong>{{ msg.name }}:</strong> {{ msg.message }}
        </li>
      </ul>
    </div>
    </div>
  </div>
  <div class="end">
    <span>版权声明 | 联系方式 | 刊登广告 | 关于我们<br>版权所有</span>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  data() {
    return {
      name: '',
      message: '',
      messages: [],
     
    };
  },
  methods: {
    resetMessage() {
                    this.message = ''; // 清空文本域内容
                    this.messages = [];// 清空留言列表
                    this.name = ''; 
                },
    sendMessage() {
      if (this.name && this.message) {
        this.messages.push({ name: this.name, message: this.message });
        this.name = '';
        this.message = '';
      } else {
        alert('请填写姓名和留言内容');
       
      }
    }
  }
}
</script>

<style scoped>
h1 {
  margin-top: 20px;
  font-size: 50px;
  color: black;
}
.card {
  background:rgba(179, 160, 163, 0.404) ;
  width: 60%;
  height: 100%;
  backdrop-filter: blur(10px); /*模糊度，磨砂感 */
}

.say {
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../assets/背景.jpg");
  width: 99%;
  position: fixed;
  height: 100%;
  background-size: 100%;
  margin-right: 5px;
}
.text1 {
  display: flex;
  height: 35px;
  margin-left:310px;
  margin-top: 180px;
  color: black;
}
button {
  margin-top: 20px;
}
.text2 {
  display: flex;
  margin-top: 50px;
  height: 200px;
  margin-left: 25px;
  margin-left:310px;
  color: black;

}
textarea {
  width: 600px;
  font-size: 15px;
  padding-top: 10px;
  font-size: 15px
}
.text1 .input1{
  border-width: 3px;
  margin-left: 30px;
  padding: 5px;
}
.text2 .input2{
  width: 500px;
 
}
.end {
  background-color: rgba(33, 27, 27, 0.826);
  height: 150px;
  width: 99%;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  display: flex;
  bottom: 0;
  position: fixed;
}
.end span {
  text-align: center;
  margin-top: 20px;
  padding: 20px;
  text-align: center;
  font-size: 18px;
  color: white;
}
.text3{
  height: 20px;
  text-align: left;
  margin-top: 50px;
  margin-left: 150px;
}
h3{
  font-size: 28px;
  color: black;
}
ul, li {
    list-style: none;
    padding: 0;
    margin: 0;
}
li{
  margin-top: 10px;
  padding: 15px;
  font-size: 22px;
  border-bottom: 2px solid #6d6d85;
  border-radius: 10px;
  width: 900px;
}

.text1 span,
.text2 span{
margin-right: 20px ;
}
.var-button {
  margin-right: 50px;
  margin-left: 40px;

}
.button{
  display: flex;
  margin-left:500px;
  margin-top: 12px;
 
}
</style>
