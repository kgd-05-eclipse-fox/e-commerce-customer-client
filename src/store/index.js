import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axios.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accessToken: '',
    email: '',
    status: '',
    products: []
  },
  mutations: {
    setAccessToken (state, payload) {
      state.accessToken = payload
    },
    setEmail (state, payload) {
      state.email = payload
    },
    setStatus (state, payload) {
      state.status = payload
    },
    setProducts (state, payload) {
      state.products = payload
    }
  },
  actions: {
    login (context, payload) {
      return axios({
        method: 'POST',
        url: '/login',
        data: payload
      })
    },
    register (context, payload) {
      return axios({
        method: 'POST',
        url: '/register',
        data: payload
      })
    },
    fetchProducts (context) {
      axios({
        method: 'GET',
        url: '/product'
      })
        .then(({ data }) => {
          context.commit('setProducts', data.products)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
