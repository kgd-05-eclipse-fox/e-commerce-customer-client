import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../assets/axios/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    setAllDataBanner: [],
    setDataAllProduct: []
  },
  mutations: {
    setAllDataBanner (state, payload) {
      state.setAllDataBanner = payload
    },
    setDataAllProduct (state, payload) {
      state.setDataAllProduct = payload
    }
  },
  actions: {
    loginUser (context, dataAdminLogin) {
      const payload = {
        email: dataAdminLogin.email,
        password: dataAdminLogin.password
      }
      return axios.post('/login/customer', payload)
    },
    getALlDataBanner (context) {
      const accesstoken = localStorage.getItem('access_token')
      axios
        .get('/banner', ({ headers: { access_token: accesstoken } }))
        .then(({ data }) => {
          context.commit('setAllDataBanner', data)
        })
        .catch(err => console.log(err))
    },
    getAllDataProduct (context) {
      const accesstoken = localStorage.getItem('access_token')
      axios
        .get('/product', ({ headers: { access_token: accesstoken } }))
        .then(({ data }) => {
          console.log(data)
          context.commit('setDataAllProduct', data)
        })
        .catch(err => console.log(err))
    },
    registerUser (context, registerUser) {
      return axios.post('/register', registerUser)
    }
  },
  modules: {
  }
})
