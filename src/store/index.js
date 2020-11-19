import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axios.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accessToken: '',
    email: '',
    status: '',
    products: [],
    carts: [],
    histories: [],
    totalPrice: 0
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
    },
    setCarts (state, payload) {
      state.carts = payload
    },
    setHistories (state, payload) {
      state.histories = payload
    },
    setTotalPrice (state, payload) {
      state.totalPrice = payload
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
    },
    fetchCarts (context) {
      axios({
        method: 'GET',
        url: '/cart',
        headers: {
          access_token: this.state.accessToken
        }
      })
        .then(({ data }) => {
          context.commit('setCarts', data.myCarts)
          context.commit('setTotalPrice', data.totalPrice)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchHistories (context) {
      axios({
        method: 'GET',
        url: '/history',
        headers: {
          access_token: this.state.accessToken
        }
      })
        .then(({ data }) => {
          context.commit('setHistories', data.myHistory)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addToCart (context, payload) {
      return axios({
        method: 'POST',
        url: '/cart/' + payload,
        headers: {
          access_token: this.state.accessToken
        }
      })
    },
    updateCart (context, payload) {
      return axios({
        method: 'PATCH',
        url: '/cart/' + payload.id,
        headers: {
          access_token: this.state.accessToken
        },
        data: {
          increment: payload.status
        }
      })
    },
    checkoutCart (context) {
      return axios({
        method: 'PUT',
        url: '/cart/checkout',
        headers: {
          access_token: this.state.accessToken
        },
        data: {
          carts: this.state.carts
        }
      })
    },
    deleteCart (context, payload) {
      return axios({
        method: 'DELETE',
        url: '/cart/' + payload,
        headers: {
          access_token: this.state.accessToken
        }
      })
    }
  },
  modules: {
  }
})
