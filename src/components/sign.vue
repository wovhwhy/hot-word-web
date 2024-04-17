<template>
<div class="image">
  <div class="login">
    <h2>注册</h2>
    <form @submit.prevent="login">
      <label for="username">电话号码:</label>
      <input type="text" v-model="username" required>
      <label for="password">密码:</label>
      <input type="password" v-model="password" required>
      <br>
      <button @click="gohome" type="submit">注册</button>
    </form>
  </div>
</div>

</template>



<script>

export default {
  data() {
    return {
      username: '',
      password: '',
      components:{
      }
     
    };
  },methods:{
    gohome(){
  this.$router.push('/home')
        
    }
     
      },
}
</script>


<style scoped>
.login{
  margin-top:400px;
  
}
.image{
background:url("../assets/登录.png");
width:99%;	
position:fixed;
height:100%;
background-size:100%;
 margin-right: 5px;
}

h2 {
  text-align: center;
}
  
form {
  margin-top: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 25%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

button {
  width: 10%;
  padding: 8px;
  background-color:pink;
  color:black;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

button:hover {
  background-color:rgb(134, 43, 58);
}
</style>