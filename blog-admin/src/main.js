import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import leftMenu from "./components/leftMenu"
import headerTop from "./components/headerTop"

Vue.config.productionTip = false

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import http from './utils/http'
Vue.use(http)

Vue.use(mavonEditor)

Vue.component('leftMenu',leftMenu)
Vue.component('headerTop',headerTop)

Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
