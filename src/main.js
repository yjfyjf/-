import Vue from 'vue'
import App from './App.vue'


// 全局的内容
import './assets/statics/site/css/style.css'

// Vue.config.productionTip = false
// 引入组件
// 首页
import index from './components/index.vue'
// 购物车
import cart from './components/cart.vue'
// 详情页
import detail from './components/detail.vue'
// 会员中心
import usercontainer from './components/usercontainer.vue'
// 会员中心主页
import userindex from './components/userindex.vue'
// 会员中心列表
import userorder from './components/userorder.vue'
// 会员中心详情
import userdetail from './components/userdetail.vue'

// 导入路由
import VueRouter from 'vue-router'
// use一下
Vue.use(VueRouter)


// 引入全局axios
import axios from 'axios'
Vue.prototype.$axios = axios

// 设置基地址
axios.defaults.baseURL = 'http://111.230.232.110:8899/'
// 引入moment
import moment from "moment"
// 全局过滤器
Vue.filter('globalFormatTime',function(value,fmtTemplate){
  if (fmtTemplate) {
    return moment(value).format(fmtTemplate)
  }else{
    return moment(value).format('YYYY-MM-DD')
  }
})


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import App from './App.vue';
Vue.use(ElementUI);

// // 引入moment
// import moment from 'moment'
// // 全局过滤器
// Vue.filter('globalFormatTime',function(value,fmtTemplate){
//   if (fmtTemplate) {
//     return moment(value).format(fmtTemplate)
//   }else{
//     return moment(value).format('YYYY-MM-DD')
//   }
// })
// 实例组件
let routes = [
  {
    path:'/',
    component: index
  },
  {
    path:'/index',
    component:index
  },
  {
    path:'/cart',
    component:cart
  },
  {
    path:'/detail/:id',
    component:detail
  },
  {
    // 会员中心利用路由嵌套
    path:'/usercontainer',
    component:usercontainer,
    // 往下嵌了一层
    // 3个分页面
    children:[
      {
        path:'userindex',
        component:userindex
      },
      {
        path:'userorder',
        component: userorder
      },
      {
        path:'userdetail',
        component: userdetail
      }
    ]
  }
]

let router = new VueRouter({
  routes
})

// 实例顶级对象
new Vue({
  // 挂载到顶级实例vue中
  router,
  render: h => h(App),
}).$mount('#app')
