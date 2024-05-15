import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/iconfont/iconfont.css'
import './rem'
import Varlet from '@varlet/ui'
import router from './router/router.js'
import '@varlet/ui/es/style'
const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(Varlet)
app.mount('#app')
Vue.prototype.$globalVar = null; 
// mounted() {  
//     const redirect = localStorage.getItem('redirectAfterReload'); // 尝试获取重定向路由  
//     if (redirect) {  
//       localStorage.removeItem('redirectAfterReload'); // 清除重定向标记  
//       this.$router.push({ path: redirect }); // 导航到重定向路由  
//     }  
// }




