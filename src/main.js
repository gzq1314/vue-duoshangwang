import Vue from 'vue'
import App from './App.vue'
//引入element样式
import 'element-ui/lib/theme-chalk/index.css'

// 引入路由模块
import router from './routers/index'

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
      if (!flag) {
        state.car.push(potoinfo)
      }

      //当更新car之后把car数组存到本地
      localStorage.setItem('car', JSON.stringify(state.car));
    }
  },
  getters: {}
})

// 全局引入
import axios from 'axios'

// Vue继承axios
Vue.prototype.$axios = axios


//引入vant组件
import Vant from './vant/index'
Vant()

//引入Element组件
import Element from './element/index'
Element()

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')