// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuescroll from 'vue-scroll'
import store from './store'
import shapeui from 'shapeui'
import $ from '../static/js/jquery-3.3.1.min'
Vue.config.productionTip = false
Vue.use(shapeui)

Vue.use(vuescroll)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render(h){
    return h(App)
  }
})
