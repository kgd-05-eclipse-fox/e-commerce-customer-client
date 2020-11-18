import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'
import router from '../router/index'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    productsInCart: []
  },
  mutations: {
    GET_PRODUCTS (state, data) {
      state.products = data
    },
    GET_CART (state, data) {
      state.productsInCart = data
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
    },
    addToCart (context, productId) {
      const token = localStorage.getItem('access_token')
      axios({
        url: `/cart/${productId}`,
        method: 'POST',
        headers: { access_token: token }
      })
        .then(({ data }) => {
          Swal.fire({
            icon: 'success',
            title: 'Product has been addedd successfully',
            showConfirmButton: false,
            timer: 2000
          })
        })
        .catch(err => {
          console.log(err.response.data)
        })
    },
    fetchCart (context) {
      const token = localStorage.getItem('access_token')
      axios({
        url: '/cart',
        method: 'GET',
        headers: { access_token: token }
      })
        .then(({ data }) => {
          context.commit('GET_CART', data)
        })
        .catch(err => {
          console.log(err.response.data)
        })
    },
    removeCart (context, id) {
      const token = localStorage.getItem('access_token')
      axios({
        url: `/cart/${id}`,
        method: 'DELETE',
        headers: { access_token: token }
      })
        .then(({ data }) => {
          Swal.fire({
            icon: 'success',
            title: 'Product has been remove from your cart',
            showConfirmButton: false,
            timer: 2000
          })
          context.dispatch('fetchCart')
        })
        .catch(err => {
          console.log(err.response.data)
        })
    },
    addQty (context, id) {
      const token = localStorage.getItem('access_token')
      axios({
        url: `/cart/${id}`,
        method: 'PATCH',
        headers: { access_token: token }
      })
        .then(({ data }) => {
          context.dispatch('fetchCart')
        })
        .catch(err => {
          console.log(err.response.data)
        })
    },
    decQty (context, id) {
      const token = localStorage.getItem('access_token')
      axios({
        url: `/cart/${id}`,
        method: 'PUT',
        headers: { access_token: token }
      })
        .then(({ data }) => {
          context.dispatch('fetchCart')
        })
        .catch(err => {
          console.log(err.response.data)
        })
    }
  },
  modules: {
  }
})
