import Vue from 'vue'
import App from './App'

const FastClick = require('fastclick');
FastClick.attach(document.body)
import axios from 'axios'
Vue.prototype.$http = axios
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
