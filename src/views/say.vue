<template>
  <div class="say">
    <div class="card">
      <h2>留言板</h2>
      <div class="text1">
        <span>Name:</span>
        <input type="text" v-model="name" placeholder="请输入您的用户名">
      </div>
      <div class="text2">
        <span>Message:</span>
        <textarea v-model="message" style="vertical-align: top;" placeholder="请输入您的留言"></textarea>
      </div>
      <el-button type="send"  @click="sendMessage">发送留言</el-button>
    <el-button type="resetMessage" @click="resetMessage">重置</el-button>
      <div class="text3">
        <h3>留言：</h3>
      <ul>
        <li v-for="(msg, index) in messages" :key="index"> 
          <strong>{{ msg.name }}:</strong> {{ msg.message }}
          <hr class="hr-solid">
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
export default {
  data() {
    return {
      name: '',
      message: '',
      messages: []
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
h2 {
  margin-top: 15px;
  font-size: 30px;
}
.card {
  background: #ffc0cb93;
  width: 40%;
  height: 700px;
}
.say {
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../assets/登录.png");
  width: 99%;
  position: fixed;
  height: 100%;
  background-size: 100%;
  margin-right: 5px;
}
.text1 {
  display: flex;
  margin-top: 60px;
  margin-left: 55px;
  height: 35px;
}
button {
  margin-top: 20px;
}
.text2 {
  display: flex;
  margin-top: 20px;
  height: 200px;
  margin-left: 25px;
}
textarea {
  width: 600px;
  font-size: 15px;
  padding-top: 10px;
}
.text1 input {
  width: 200px;
  font-size: 15px;
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
  margin-left: 50px;
}
h3{
  font-size: 28px;
 
}
ul, li {
    list-style: none;
    padding: 0;
    margin: 0;
}
li{
  margin-top: 10px;
  font-size: 19px;
}
.hr-solid {
		border: 1;
		border-top: 1px solid #6d6d85;
    margin-bottom: 20px;
	}

</style>
