<template>
  <div class="image">
    <div class="aa">
            <h1 style="margin-top: 10%;margin-left: 5%;">Login To Your Account</h1>
            <div class="id">
                <var-input  style="width:32%;height: 100%; background-color:rgba(2, 5, 80, 0.1);" variant="outlined" placeholder="id" v-model="userLogin.userId">
                <template #prepend-icon>
                    <var-icon class="prepend-icon" name="account-circle-outline" />
                </template>
                </var-input>
                <var-input style="width:32%;margin-top: 20px;background-color:rgba(2, 0, 80, 0.1);" variant="outlined" placeholder="password" v-model="userLogin.password">
                <template #prepend-icon>
                    <var-icon class="prepend-icon" name="lock-outline" />
                </template>
                </var-input>
        </div>
        <div class="login">
            <var-button @click="gotoHome" style="width:35%;" color="linear-gradient(to right bottom,  #2980E3, #D0BCFF)" block type="primary">Login</var-button>
            <var-button @click="gotoRegister" style="width:35%;margin-top: 20px;" color="linear-gradient(to right bottom, #2980E3, #D0BCFF)" block type="primary">Register</var-button>
        </div>
        </div>
</div>
</template>



<script>
import { Snackbar } from '@varlet/ui'
import user from '../api/user'
export default {
  data(){
    return{
      userLogin:{
                userId:"",
                password:""
            },
            result:false
      // username: '',
      // password: '',
      // components:{
      // }
    }
  },methods:{
    async gotoHome(){
            const password1 = await user.getUserPassword(this.userLogin.userId);
            if(this.userLogin.password === password1[0].password){
                this.result = true;
                Snackbar.success('登录成功');
                localStorage.setItem('userId',this.userLogin.userId);
                this.$router.push({name:'home'});
            }
            if(this.userLogin.userId === '' || this.userLogin.password === '' || this.result === false){
                console.log(this.result);
                Snackbar.error('登录失败,请检查id和密码');
            }
            
        },
        gotoRegister(){
            this.$router.push({
                name:'sign'
            });
        }
  //   gohome(){
  // this.$router.push('/home')
        
  //   }
    
      },
}
</script>


<style scoped>
.image{
background:url("../assets/背景.jpg");
width:99%;	
position:fixed;
height:100%;
background-size:100%;
margin-right: 5px;
}
/* .login{
  margin-top:300px
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
  width: 5%;
  padding: 8px;
  background-color: pink;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

button:hover {
  background-color: rgb(134, 43, 58);
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
