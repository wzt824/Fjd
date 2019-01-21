import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '../pages/index'
import Find from '../pages/find'
import Selects from '../pages/selects'
import Shopcarts from '../pages/shopcarts'
import My from '../pages/my'
import Product from '../pages/product'
import Login from '../pages/login'
import test from '../pages/test'

Vue.use(Router)

const routes = [
  // {
  //   path: '/',
  //   name: 'HelloWorld',
  //   component: HelloWorld
  // },
  {
    path: '/',
    name:'Index',
    component:Index
  },
  {
    path: '/Index',
    name:"index",
    component:Index
  },

  {
    path: '/Find',
    name:'Find',
    component:Find
  },
  {
    path: '/Selects',
    name:'Selects',
    component:Selects
  },
  {
    path: '/Shopcarts',
    name:'Shopcarts',
    component:Shopcarts,
    meta:{
      requireAuth:true  //添加该字段表明
    }
  },
  {
    path: '/My',
    name:'My',
    component:My
  },
  {
    path: '/Product',
    name:'Product',
    component:Product
  },
  {
    path: '/Login',
    name:'Login',
    component:Login
  },
  {
    path: '/test',
    name:'test',
    component:test
  }
  ]
const router = new Router({
  routes,
})
//全局守卫 记录登录状态
router.beforeEach((to,from,next)=>{
  //判断需不需要登录才可进入
  // if(to.meta.requireAuth){
  //   console.log(index.getters.isLogin);
  //     if(index.getters.isLogin==0){
  //       next({path:"/Login"})
  //     }else{
  //       next()
  //     }
  // }else{
  //   next()
  // }

  if(to.meta.requireAuth){
    var islogin= window.localStorage.getItem("exist")
    //注意,第一次,必须next()
    if(islogin){
      //如果登录过,直接到路转的页面
      next()
    }else{
      //如果没有登录,还是到login页面
      next({path:"/Login"})
    }
  }else{
    next()
  }

})
export default router

