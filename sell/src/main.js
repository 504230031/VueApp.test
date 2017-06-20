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
  data: function () {
    return {
      peopleJSON: []
    }
  },
  router,
  watch: {

  }
})

console.log(vm)
