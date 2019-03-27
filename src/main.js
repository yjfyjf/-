import Vue from 'vue'
import App from './App.vue'


// 全局的内容
import './assets/statics/site/css/style.css'

// Vue.config.productionTip = false
// 引入组件
import index from './components/index.vue'

// 导入路由
import VueRouter from 'vue-router'
// use一下
Vue.use(VueRouter)

// 实例组件
let routes = [
  {
    path:'/',
    component: index
  },
  {
    path:'/index',
    component:index
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
