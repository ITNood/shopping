import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => {
        return import('../views/home')
      }
    },
    {
      path: '/car',
      name: 'car',
      component: () => {
        return import('../views/car')
      }
    },
    {
      path: '/discount',
      name: 'discount',
      component: () => {
        return import('../views/discount')
      }
    }
  ]
})
