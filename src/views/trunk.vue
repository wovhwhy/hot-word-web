<template>
  <div class="heard">
    <div class="logo">
      <img src="../assets/logo3.jpg" alt="logo">
      <span>网络热词</span>
    </div>
    <div class="heardmenu">
      <ul>
        <li @click="gohome" style="cursor: pointer;">首页</li>
        <li @click="gorecom" style="cursor: pointer;">推荐</li>
        <li @click="goabout" style="cursor: pointer;">关于我们</li>
        <li @click="gosay" style="cursor: pointer;">留言板</li>
      </ul>
      <el-button type="danger" @click="gosign" >登录/注册</el-button>
    </div>
  </div>

  <div class="main">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'trunk',
  data() {
    return {};
  },
  methods: {
    gosign() {
      this.$router.push('/login');
    },
    gohome() {
      this.$router.push('/home');
    },
    gorecom() {
      this.$router.push('/recom');
    },
    goabout() {
      this.$router.push('/about');
    },
    gosay() {
      this.$router.push('/say');
    },
  },
};
</script>

<style scoped>
.heard {
  width: 100%;
  height: 90px;
  background-color: #343232;
  display: flex;
  justify-content: space-between;
  color: white;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
   margin-left: 35px
}

.logo img {
  margin-right: 15px;
  height: 85px;
  border: 1px;
  border-radius: 10%;
}

.logo span {
  font-size: 28px;
  color: #F56C6C;
  font-weight: bold;
}

.heardmenu {
  height: 100px;
  text-align: center;
  display: flex;
  align-items: center;

}

.heardmenu ul {
  list-style-type: none;
  display: flex;
}

.heardmenu li {
  margin-left: 20px;
  margin-right:100px;
  font-size: 20px;
  justify-content: space-between;
}

.heardmenu button {
  width: 80px;
  font-size: 18px;
  cursor: pointer;
  margin-right: 30px;
}

.main {
  width: 100%;
}
.el-button--danger {
  font-weight: bold; 
  font-size: 22px; 
  padding: 25px 50px; /* 设置按钮的内边距，增大按钮的大小 */
}
</style>
