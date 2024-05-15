<template>
 <trunk @login="islogin" :islogin="islogin"></trunk> 

</template>



<script>
import trunk from "./views/trunk.vue";
export default{
  components:{
    trunk,
  },
  data(){
    return{
      islogin: false,
    }
  },
  methods:{
    islogin(data){
      consle.log(data.islogin); //
      this.islogin=data.islogin;
    }
  
  }
}
</script>
<style scoped>

</style>
