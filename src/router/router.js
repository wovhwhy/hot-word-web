import { createRouter, createWebHistory } from 'vue-router';
import Search from '../components/search.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [//规则，配置路由规则才会显示组件
        { 
            path: '/', 
            name:'',
            redirect:'/home'
        },
        {
            path: '/home',//地址栏路径
            name: 'home',//路由名称
            component:()=> import('../views/home.vue'),
            meta: {
                home: true,
            },
        },
        {
          path: '/login',//地址栏路径
          name: 'login',//路由名称
          component:()=> import('../components/login.vue'),
          meta: {
              login: true,
          },
      },
      {
        path: '/about',//地址栏路径
        name: 'about',//路由名称
        component:()=> import('../views/about.vue'),
        meta: {
            about: true,
        },
    },
    {
        path: '/recom',//地址栏路径
        name: 'recom',//路由名称
        component:()=> import('../views/recom.vue'),
        meta: {
            recom: true,
        },
    },
    {
        path: '/say',//地址栏路径
        name: 'say',//路由名称
        component:()=> import('../views/say.vue'),
        meta: {
            say: true,
        },
    },
    {
        path: '/sign',//地址栏路径
        name: 'sign',//路由名称
        component:()=> import('../components/sign.vue'),
        meta: {
            sign: true,
        },
    },
    {
        path: '/word/:word/:wordMeaning',//地址栏路径
        name: 'WordMeaning',//路由名称
        component:()=> import('../components/WordMeaning.vue'),
        meta: {
            WordMeaning: true,
        },
       
    },
    {
        path: '/search/:wordName',//地址栏路径
        name: 'search',//路由名称
        component:()=> import('../components/search.vue'),
        meta: {
            search: true,
        },
       
    },
    ]
});

export default router;//导出才能在main.js中使用