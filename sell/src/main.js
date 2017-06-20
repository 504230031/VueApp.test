import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import App from './App.vue'
import goods from './components/goods/goods.vue'


// 定义路由配置  
const routes = [
  {
    path: '/goods',
    component: Hgoodsome
  }
]

// 创建路由实例  
const router = new VueRouter({
  routes
})

router.start(app, '#app')
