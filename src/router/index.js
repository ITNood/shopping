import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => {
        return import('../views/life/home')
      }
    },
    {
      path: '/life/car',
      name: 'car',
      component: () => {
        return import('../views/life/car')
      }
    },
    //限时打折
    {
      path: '/life/discount',
      name: 'discount',
      component: () => {
        return import('../views/life/discount')
      }
    },
    //优惠券``
    {
      path: '/life/coupon',
      name: 'coupon',
      component: () => {
        return import('../views/life/coupon')
      }
    },
    {
      path: '/life/news',
      name: 'news',
      component: () => {
        return import('../views/life/news')
      }
    },
    //供应链
    {
      path: '/life/supply',
      name: 'supply',
      component: () => {
        return import('../views/life/supply')
      }
    },
    {
      path: '/life/telphone',
      name: 'telphone',
      component: () => {
        return import('../views/life/telphone')
      }
    },
   
    {
      path: '/life/details',
      name: 'details',
      component: () => {
        return import('../views/life/details')
      }
    },
    {
      path: '/life/address',
      name: 'address',
      component: () => {
        return import('../views/life/address')
      }
    },
    {
      path: '/life/addEdit',
      name: 'addEdit',
      component: () => {
        return import('../views/life/addEdit')
      }
    },
    {
      path: '/life/subOrder',
      name: 'subOrder',
      component: () => {
        return import('../views/life/subOrder')
      }
    },
    {
      path: '/life/payment',
      name: 'payment',
      component: () => {
        return import('../views/life/payment')
      }
    },
    {
      path: '/life/paySuccess',
      name: 'paySuccess',
      component: () => {
        return import('../views/life/paySuccess')
      }
    },
    //商品分类
    {
      path: '/life/life/shopClassify',
      name: 'shopClassify',
      component: () => {
        return import('../views/life/shopClassify')
      }
    },
    //商品列表
    {
      path: '/life/life/product',
      name: 'product',
      component: () => {
        return import('../views/life/product')
      }
    },
    {
      path: '/life/like',
      name: 'like',
      component: () => {
        return import('../views/life/like')
      }
    },
    {
      path: '/life/login',
      name: 'login',
      component: () => {
        return import('../views/life/login')
      }
    },
    //我
    {
      path: '/my/index',
      name: 'my',
      component: () => {
        return import('../views/my/index')
      }
    },
    //我的二维码
    {
      path: '/my/mycode/code',
      name: 'code',
      component: () => {
        return import('../views/my/mycode/code')
      }
    },
    //身份证认证
    {
      path: '/identity/idcard',
      name: 'idcard',
      component: () => {
        return import('../views/identity/idcard')
      }
    },
    //个人信息
    {
      path: '/my/mynews/mynews',
      name: 'mynews',
      component: () => {
        return import('../views/my/mynews/mynews')
      }
    },
    //设置
    {
      path: '/my/seted/set',
      name: 'set',
      component: () => {
        return import('../views/my/seted/set')
      }
    },
    //账号安全
    {
      path: '/my/seted/accountSecurity/index',
      name: 'security',
      component: () => {
        return import('../views/my/seted/accountSecurity/index')
      }
    },
    //邮箱认证
    {
      path: '/my/seted/accountSecurity/email',
      name: 'email',
      component: () => {
        return import('../views/my/seted/accountSecurity/email')
      }
    },
    //手机绑定
    {
      path: '/my/seted/accountSecurity/phone',
      name: 'phone',
      component: () => {
        return import('../views/my/seted/accountSecurity/phone')
      }
    },
    //密码设置
    {
      path: '/my/seted/accountSecurity/password',
      name: 'password',
      component: () => {
        return import('../views/my/seted/accountSecurity/password')
      }
    }
  ]
})

