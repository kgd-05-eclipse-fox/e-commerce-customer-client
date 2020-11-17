import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    GET_PRODUCTS (state, data) {
      state.products = data
    }
  },
  actions: {
    fetchProducts (context) {
      axios({
        url: '/product',
        method: 'GET'
      })
        .then(({ data }) => {
          context.commit('GET_PRODUCTS', data)
        })
        .catch(err => {
          console.log(err.response.data)
        })
    },
    signUp (context, payload) {
      axios({
        url: '/register/user',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          router.push('Login')
        })
        .catch(err => {
          console.log(err.response.data)
        })
    },
    signIn (context, payload) {
      axios({
        url: '/login/customer',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          router.push('/')
        })
        .catch(err => {
          console.log(err.response.data)
        })
    }
  },
  modules: {
  }
})
