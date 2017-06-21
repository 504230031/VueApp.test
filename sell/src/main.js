import Vue from 'vue'
import VueRouter from 'vue-router'
import goods from './components/goods/goods.vue'
import App from './App.vue'

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
  el: 'form',
  data: function () {
    return {
      peopleJSON: []
    }
  },
  router: router,
  watch: {

  }
})

console.log(vm)
console.log(App)
