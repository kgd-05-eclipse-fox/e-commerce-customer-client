import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin, BModal, VBModal } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import Swal from 'vue-sweetalert2'
import './assets/style.css'
import VueCarousel from 'vue-carousel'
Vue.use(VueCarousel)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Swal)
Vue.component('BModal', BModal)
Vue.directive('b-modal', VBModal)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
