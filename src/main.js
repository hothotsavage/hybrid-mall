import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 根据屏幕宽度，动态计算html根元素的fontsize
// @js：路径别名，在vue.config.js中定义
import '@js/htmlFontSize'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
