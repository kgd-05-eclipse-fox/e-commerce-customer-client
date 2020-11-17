import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'

const token = localStorage.getItem('access_token')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedIn: false,
    banners: [],
    products: [],
    carts: []
  },
  mutations: {
    setLoggedIn (state, data) {
      state.loggedIn = data
    },
    set_banners (state, data) {
      state.banners = data
    },
    set_products (state, data) {
      state.products = data
    },
    set_cart (state, data) {
      state.carts = data
    }
  },
  actions: {
    login (context, data) {
      return axios({
        method: 'POST',
        url: '/login/customer',
        data: data
      })
    },
    register (context, data) {
      return axios({
        method: 'POST',
        url: '/register',
        data: data
      })
    },
    getBanners (context) {
      axios({
        method: 'GET',
        url: '/banners/active'
      })
        .then(({ data }) => {
          context.commit('set_banners', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getProducts (context) {
      axios({
        method: 'GET',
        url: '/products'
      })
        .then(({ data }) => {
          context.commit('set_products', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getCart (context) {
      axios({
        method: 'GET',
        url: '/carts',
        headers: {
          access_token: token
        }
      })
        .then(({ data }) => {
          context.commit('set_cart', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addToCart (context, id) {
      axios({
        method: 'POST',
        url: '/carts',
        headers: {
          access_token: token
        },
        data: {
          ProductId: id,
          quantity: 1
        }
      })
        .then(({ data }) => {
          context.dispatch('getCart')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
