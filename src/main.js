// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Header from './components/Header'
import Banner from './components/Banner'
import Content from './components/Content'
import Counter from './components/Counter'

Vue.config.productionTip = false

Vue.component('app-header', Header)
Vue.component('app-banner', Banner)
Vue.component('app-content', Content)
Vue.component('app-counter', Counter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
