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
    },

    //钱包
    {
      path: '/my/wallet/index',
      name: 'wallet',
      component: () => {
        return import('../views/my/wallet/index')
      }
    },
    //充值
    {
      path: '/my/wallet/invest/invest',
      name: 'invest',
      component: () => {
        return import('../views/my/wallet/invest/invest')
      }
    },
    //提现
    {
      path: '/my/wallet/cash/cash',
      name: 'cash',
      component: () => {
        return import('../views/my/wallet/cash/cash')
      }
    },
    //明细
    {
      path: '/my/wallet/detailed/detailed',
      name: 'detailed',
      component: () => {
        return import('../views/my/wallet/detailed/detailed')
      }
    },
    //毕业证书
    {
      path: '/identity/school',
      name: 'school',
      component: () => {
        return import('../views/identity/school')
      }
    },
    //保险
    {
      path: '/identity/insure',
      name: 'insure',
      component: () => {
        return import('../views/identity/insure')
      }
    },
    //行驶证认证副页
    {
      path: '/identity/driver',
      name: 'driver',
      component: () => {
        return import('../views/identity/driver')
      }
    },
    //国内行驶证正页
    {
      path: '/identity/driverFace',
      name: 'driverFace',
      component: () => {
        return import('../views/identity/driverFace')
      }
    },
    //交通强险认证
    {
      path: '/identity/traffic',
      name: 'traffic',
      component: () => {
        return import('../views/identity/traffic')
      }
    },
    //许可证
    {
      path: '/identity/permit',
      name: 'permit',
      component: () => {
        return import('../views/identity/permit')
      }
    },
    //动物免疫合格认证
    {
      path: '/identity/zoon',
      name: 'zoon',
      component: () => {
        return import('../views/identity/zoon')
      }
    },
    //饲料生产许可证
    {
      path: '/identity/feed',
      name: 'feed',
      component: () => {
        return import('../views/identity/feed')
      }
    },
    //兽药
    {
      path: '/identity/drug',
      name: 'drug',
      component: () => {
        return import('../views/identity/drug')
      }
    },
    //兽药检测
    {
      path: '/identity/drugtest',
      name: 'drugtest',
      component: () => {
        return import('../views/identity/drugtest')
      }
    },
    //物流公司认证
    {
      path: '/identity/logistics',
      name: 'logistics',
      component: () => {
        return import('../views/identity/logistics')
      }
    },
    //企业对银行
    {
      path: '/identity/bank',
      name: 'bank',
      component: () => {
        return import('../views/identity/bank')
      }
    },
    //工商执照
    {
      path: '/identity/business',
      name: 'business',
      component: () => {
        return import('../views/identity/business')
      }
    },
    //授权证书
    {
      path: '/identity/empower',
      name: 'empower',
      component: () => {
        return import('../views/identity/empower')
      }
    },
    //营业执照
    {
      path: '/identity/license',
      name: 'license',
      component: () => {
        return import('../views/identity/license')
      }
    }
  ]
})

