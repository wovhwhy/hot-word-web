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
                <var-input type="password" style="width:32%;margin-top: 20px;background-color:rgba(2, 0, 80, 0.1);" variant="outlined" placeholder="password" v-model="userLogin.password">
                <template #prepend-icon>
                    <var-icon class="prepend-icon" name="lock-outline" />
                </template>
                </var-input>
        </div>
        <div class="login">
            <var-button @click="gotoHome" style="width:30%;" color="linear-gradient(to right bottom,  #2980E3, #D0BCFF)" block type="primary">Login</var-button>
            <var-button @click="gotoRegister" style="width:30%;margin-top: 18px;" color="linear-gradient(to right bottom, #2980E3, #D0BCFF)" block type="primary">Register</var-button>
        </div>
        </div>
</div>
</template>



<script>
import { Snackbar } from '@varlet/ui'
import user from '../api/user'
import authentication from '../utils/authentication'
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
      const userId = this.userLogin.userId;
            const result = await authentication.login({ userId: userId, password:this.userLogin.password });
            if(result === true ){
                this.result = true;
                Snackbar.success('登录成功');
                localStorage.setItem('userId',this.userLogin.userId);
                this.$router.push({name:'home'});
                this.$emit('login', {islogin: true});
            }else{
                Snackbar.error('登录失败,请检查id和密码');
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
background-size: cover;
margin-right: 5px;
}
.id{
    margin-top: 8%;
    margin-left:43%;
}
.login{
    margin-top: 1.5%;
    margin-left:43%;
}
</style>
