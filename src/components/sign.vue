<template>
<div class="image">
  <!-- <div class="login"> -->
    <div class="aa">
            <h1 style="margin-top: 10%;margin-left: 5%;">Login To Your Account</h1>
            <div class="id">
                <var-input  style="width:32%;height: 100%; background-color:rgba(2, 5, 80, 0.1);" variant="outlined" placeholder="id" v-model="userRegister.userId">
                <template #prepend-icon>
                    <var-icon class="prepend-icon" name="account-circle-outline" />
                </template>
                </var-input>
                <var-input type="password" style="width:32%;margin-top: 20px;background-color:rgba(2, 0, 80, 0.1);" variant="outlined" placeholder="password" v-model="userRegister.password">
                <template #prepend-icon>
                    <var-icon class="prepend-icon" name="lock-outline" />
                </template>
                </var-input>
        </div> 
        <div class="login">
            <var-button @click="gotoLogin" style="width:35%;" color="linear-gradient(to right bottom, #2980E3, #D0BCFF)" block type="primary">Register</var-button>
        </div>
        </div>
</div>

</template>



<script>
import { Snackbar } from '@varlet/ui';
import user from '../api/user';
import { useRouter } from 'vue-router';
export default {
  
  data() {
    return {
      router:useRouter(),
      userRegister:{
                userId:'',
                password:'',
                phoneNumber:'',
                nickname:'',
                identity:''
            },
      // username: '',
      // password: '',
      // components:{
      // }
    
    };
  },methods:{
    async gotoLogin(){
            if(this.userRegister.userId === '' || this.userRegister.password === ''){
                Snackbar.error('注册失败');
            }else{
                Snackbar.success('注册成功');
                user.addUser(this.userRegister.userId,this.userRegister.password)
                this.$router.push({name:'login'})
            }
            
        }
  //   gohome(){
  // this.$router.push('/home')
        
  //   }
    
      },
}
</script>


<style scoped>
/* .login{
  margin-top:300px;
  
} */
.image{
background:url("../assets/背景.jpg");
width:99%;	
position:fixed;
height:100%;
background-size:100%;
 margin-right: 5px;
}
/* 
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
} */
.id{
    margin-top: 8%;
    margin-left:43%;
}
.login{
    margin-top: 6%;
    margin-left:42%;
}
</style>