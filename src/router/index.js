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
    //限时打折
    {
      path: '/discount',
      name: 'discount',
      component: () => {
        return import('../views/discount')
      }
    },
    //优惠券
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
    //供应链
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
    },
    {
      path: '/paySuccess',
      name: 'paySuccess',
      component: () => {
        return import('../views/paySuccess')
      }
    },
    //商品分类
    {
      path: '/shopClassify',
      name: 'shopClassify',
      component: () => {
        return import('../views/shopClassify')
      }
    },
    //商品列表
    {
      path: '/product',
      name: 'product',
      component: () => {
        return import('../views/product')
      }
    },
    {
      path: '/like',
      name: 'like',
      component: () => {
        return import('../views/like')
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => {
        return import('../views/login')
      }
    },
    {
      path: '/form/graduationCard',
      name: 'graduationCard',
      component: () => {
        return import('../views/form/graduationCard')
      }
    },
    {
      path: '/form/driver',
      name: 'driver',
      component: () => {
        return import('../views/form/driver')
      }
    },
    {
      path: '/form/license',
      name: 'license',
      component: () => {
        return import('../views/form/license')
      }
    },
    {
      path: '/form/licensePage',
      name: 'licensePage',
      component: () => {
        return import('../views/form/licensePage')
      }
    },
    {
      path: '/form/insurance',
      name: 'insurance',
      component: () => {
        return import('../views/form/insurance')
      }
    },
    {
      path: '/form/traffic',
      name: 'traffic',
      component: () => {
        return import('../views/form/traffic')
      }
    },
    {
      path: '/license/animal',
      name: 'animal',
      component: () => {
        return import('../views/license/animal')
      }
    },
    {
      path: '/license/drugs',
      name: 'drugs',
      component: () => {
        return import('../views/license/drugs')
      }
    },
    {
      path: '/license/logistics',
      name: 'logistics',
      component: () => {
        return import('../views/license/logistics')
      }
    },
    {
      path: '/license/drugsDetection',
      name: 'drugsDetection',
      component: () => {
        return import('../views/license/drugsDetection')
      }
    },
    {
      path: '/license/feed',
      name: 'feed',
      component: () => {
        return import('../views/license/feed')
      }
    },
    {
      path: '/license/sewage',
      name: 'sewage',
      component: () => {
        return import('../views/license/sewage')
      }
    },
    {
      path: '/industrial/index',
      name: '/industrial',
      component: () => {
        return import('../views/industrial/index')
      }
    },
    {
      path: '/industrial/impower',
      name: 'impower',
      component: () => {
        return import('../views/industrial/impower')
      }
    },
    {
      path: '/industrial/quality',
      name: 'quality',
      component: () => {
        return import('../views/industrial/quality')
      }
    },
    {
      path: '/industrial/inspector',
      name: 'inspector',
      component: () => {
        return import('../views/industrial/inspector')
      }
    },
    {
      path: '/industrial/business',
      name: 'business',
      component: () => {
        return import('../views/industrial/business')
      }
    },
    {
      path: '/industrial/bank',
      name: 'bank',
      component: () => {
        return import('../views/industrial/bank')
      }
    },
    {
      path: '/form/idCard',
      name: 'idCard',
      component: () => {
        return import('../views/form/idCard')
      }
    }
  ]
})
