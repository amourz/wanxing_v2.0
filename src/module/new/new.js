import Vue from 'vue'
import App from './App'
const FastClick = require('fastclick');
FastClick.attach(document.body)

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
