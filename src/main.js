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

// 导入路由
import VueRouter from 'vue-router'
// use一下
Vue.use(VueRouter)


// 引入全局axios
import axios from 'axios'
Vue.prototype.$axios = axios

// 设置基地址
axios.defaults.baseURL = 'http://111.230.232.110:8899/'
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
