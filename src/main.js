import Vue from 'vue'
import App from './App.vue'

//全局引入vuetouter
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter)

//注册vuex
import Vuex from 'vuex'
Vue.use(Vuex)

//每次刚进来网站，先从本地存储中把购物车的数据读出来放到store 中
var car = JSON.parse(localStorage.getItem('car') || '[]')

const store = new Vuex.Store({
  state: {
    car: car //将购物车中的商品数据，存在car数组中
  },
  mutations: {
    addToCar(state, potoinfo) {
      //点击加入购物车，把商品信息保存到store中的car上

      //假设，在购物车中，没有找到对应的商品
      var flag = false

      state.car.some(itme => {
        if (itme.id == potoinfo.id) {
          itme.count += parseInt(potoinfo.count)
          return true
        }
      });

      //如果循环完毕得到flag还是false，则把商品直接push到购物车中
      if(!flag){
        state.car.push(potoinfo)
      }

      //当更新car之后把car数组存到本地
      localStorage.setItem('car',JSON.stringify(state.car));
    }
  },
  getters: {}
})

// 全局引入
import axios from 'axios'

// Vue继承axios
Vue.prototype.$axios = axios

//定义路由组件
import Tabbar from './views/Tabbar'
//列表页
import List from './views/List'

//嵌套路由
import Home from './views/Tabbar/Home'
//购物车
import Car from './views/Tabbar/Car'
//分页列
import Fenlei from './views/Tabbar/Fenlei'
//个人中心
import Geren from './views/Tabbar/Geren'
//首页的详情
import Photoinfo from './views/Tabbar/Photoinfo'
//列表页
import Xiangqin from './views/Tabbar/Xiangqin'

const routes = [{
  name: 'tabbar',
  path: '/tabbar',
  component: Tabbar,
  // 嵌套路由，先进底部选项卡，再去找首页
  children: [{
    name: 'home',
    // 第二层路由的path是没有/
    path: 'home',
    component: Home,
  }, {
    name: 'fenlei',
    path: 'fenlei',
    component: Fenlei,
  }, {
    name: 'geren',
    path: 'geren',
    component: Geren,
  }, {
    name: 'car',
    path: 'car',
    component: Car,
  }],
}, {
  name: 'list',
  path: '/list/:id',
  component: List
}, {
  name: 'photoinfo',
  path: '/photoinfo/:id',
  component: Photoinfo
}, {
  name: 'xiangqin',
  path: '/xiangqin/',
  component: Xiangqin
}, {
  path: '/',
  redirect: () => {
    // 我要跳进/123获取路由的一些详情信息
    // console.log(to)
    // 方法接收 目标路由 作为参数
    // return 重定向的 字符串路径/路径对象
    return '/tabbar/home'
  }
}]

const router = new VueRouter({
  routes //(缩写) routes : routes
})



//引入vant组件
import Vant from './vant/index'
Vant()


Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')