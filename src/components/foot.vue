<template>
  <div class="end">
      <span>版权声明 | 联系方式 | 刊登广告 | 关于我们<br>版权所有</span>
    </div>
</template>

<script>
export default {
  data() {
    return {
      
  }
     
      },
}
</script>

<style  scoped>
 .end{
    background-color:rgba(33, 27, 27, 0.826);
    height: 150px;
    width: 100%;
    justify-content: center;
     align-items: center; 
     margin-top: 20px;
    display: flex;
    bottom: 0;
    /* position: fixed; */
  }
  .end span{
    text-align: center;
    margin-top: 20px;
    padding: 20px;
    text-align: center;
    font-size: 18px;
    color: white;
  }


</style>