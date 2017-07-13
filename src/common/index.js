import Vue from 'vue'
 Vue.use(MuseUI)

import VueResource from 'vue-resource'
Vue.use(VueResource)



//默认domReady事件
import domReady from './ready.js'
//默认plusReady事件
import plusReady from './plusReady.js'

module.exports = {
    domReady,
    plusReady
}