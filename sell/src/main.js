import Vue from 'vue'
import VueRouter from 'vue-router'
import goods from './components/goods/goods.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/goods',
    component: goods
  }
]

const router = new VueRouter({
  routes
})

var vm = new Vue({
  el: '#app',
  data() {
    return {

    }
  },
  router, // 在vue实例配置中，用router  
  watch: {
    '$route'(to, from) {
      const toDepth = to.path.substring(0, to.path.length - 2).split('/').length
      const fromDepth = from.path.substring(0, from.path.length - 2).split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide_back' : 'slide'
    }
  }
})
