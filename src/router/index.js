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
    },
    {
      path: '/coupon',
      name: 'coupon',
      component: () => {
        return import('../views/coupon')
      }
    },
    {
      path: '/news',
      name: 'news',
      component: () => {
        return import('../views/news')
      }
    },
    {
      path: '/supply',
      name: 'supply',
      component: () => {
        return import('../views/supply')
      }
    },
    {
      path: '/telphone',
      name: 'telphone',
      component: () => {
        return import('../views/telphone')
      }
    },
    {
      path: '/my',
      name: 'my',
      component: () => {
        return import('../views/my')
      }
    },
    {
      path: '/details',
      name: 'details',
      component: () => {
        return import('../views/details')
      }
    },
    {
      path: '/address',
      name: 'address',
      component: () => {
        return import('../views/address')
      }
    },
    {
      path: '/addEdit',
      name: 'addEdit',
      component: () => {
        return import('../views/addEdit')
      }
    },
    {
      path: '/subOrder',
      name: 'subOrder',
      component: () => {
        return import('../views/subOrder')
      }
    },
    {
      path: '/payment',
      name: 'payment',
      component: () => {
        return import('../views/payment')
      }
    }
  ]
})
