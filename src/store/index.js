import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../assets/axios/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    loginUser (context, dataAdminLogin) {
      const payload = {
        email: dataAdminLogin.email,
        password: dataAdminLogin.password
      }
      return axios.post('/login/customer', payload)
    }
  },
  modules: {
  }
})
