// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App'
import store from './store'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-theme-chalk'

import Firebase from 'firebase'
import { firebaseConfig } from './config'
let firebaseApp = Firebase.initializeApp(firebaseConfig)
let db = firebaseApp.database()

Vue.prototype.Firebase = firebaseApp
Vue.prototype.FBDB = db

let loadingInstance
Vue.prototype.ElementUI = ElementUI
Vue.prototype.$Loading = (isLoading) => {
  if (isLoading) {
    loadingInstance = ElementUI.Loading.service({ fullscreen: true })
  } else {
    loadingInstance.close()
  }
}
Vue.use(VueFire)
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
