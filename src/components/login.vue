<template>
  <div class="image">
    <div class="container" >
    <div class="aa">
            <h2 style="margin-top:10%;margin-left: 5%;">Login To Your Account</h2>
            <div class="id">
                <var-input  style="width:50%;height: 100%; margin-top: 20%;background-color:rgba(2, 5, 80, 0.1);" variant="outlined" placeholder="id" v-model="userLogin.userId">
                <template #prepend-icon>
                    <var-icon class="prepend-icon" name="account-circle-outline" />
                </template>
                </var-input>
                <var-input type="password" style="width:50%;margin-top: 20px;background-color:rgba(2, 0, 80, 0.1);" variant="outlined" placeholder="password" v-model="userLogin.password">
                <template #prepend-icon>
                    <var-icon class="prepend-icon" name="lock-outline" />
                </template>
                </var-input>
        </div>
        <div class="login">
            <var-button @click="gotoHome" style="width:15%;margin-top: 18px;" color="linear-gradient(to right bottom,  #2980E3, #D0BCFF)" block type="primary">登录</var-button>
            <var-button @click="gotoRegister" style="width:15%;margin-top: 18px;" color="linear-gradient(to right bottom, #2980E3, #D0BCFF)" block type="primary">注册</var-button>
        </div>
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
/* /* width:99%;	
position:fixed;
height:100%;
background-size:100%; */
background-size: cover;
/* margin-right: 5px;  */
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
}
.container {
  height: 900px;
  max-width: 800px;
  background: white;
  margin: 0 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}
.id{
    margin-top: 8%;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  margin-left: 35%;
}
.login{
    margin-top: 1.5%;

    display: flex;
    flex-direction: column;
   align-items: center;
}
.aa{
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
