import Vue from 'vue'
import App from './App'
import cuCustom from './colorui/components/cu-custom.vue'
import commonFuc from '@/utils/util.js'

Vue.component('cu-custom',cuCustom)
Vue.config.productionTip = false

Vue.prototype.$util = commonFuc
App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
