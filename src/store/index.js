import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'
import router from '../router/index'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    productsInCart: {},
    token: false,
    histories: []
  },
  mutations: {
    SET_PRODUCT (state, data) {
      state.products = data
    },
    SET_CART (state, data) {
      state.productsInCart = data
    },
    SET_LOGIN_STATUS (state, data) {
      state.token = data
    },
    SET_HISTORY (state, data) {
      state.histories = data
    }
  },
  actions: {
    fetchProducts (context) {
      axios({
        url: '/product',
        method: 'GET'
      })
        .then(({ data }) => {
          context.commit('SET_PRODUCT', data)
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
          Swal.fire({
            icon: 'success',
            title: 'Register success, please check your email',
            showConfirmButton: false,
            timer: 2000
          })
          router.push('Login')
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: err.response.data.message,
            showConfirmButton: false,
            timer: 2000
          })
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
          context.commit('SET_LOGIN_STATUS', true)
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: err.response.data.message,
            showConfirmButton: false,
            timer: 2000
          })
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
          context.commit('SET_CART', data)
        })
        .catch(err => {
          console.log(err.response.data)
        })
    },
    removeCart (context, id) {
      const token = localStorage.getItem('access_token')
      Swal.fire({
        title: 'Are you sure to remove this product ?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
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
        }
      })
    },
    addQty (context, id) {
      const token = localStorage.getItem('access_token')
      axios({
        url: `/cart/${id}/quantity/inc`,
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
        url: `/cart/${id}/quantity/dec`,
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
    checkoutCart (context) {
      const token = localStorage.getItem('access_token')
      axios({
        url: '/cart/checkouts',
        method: 'PATCH',
        headers: { access_token: token }
      })
        .then(({ data }) => {
          context.dispatch('fetchCart')
          Swal.fire({
            icon: 'success',
            title: 'Checkout success',
            showConfirmButton: false,
            timer: 2000
          })
        })
        .catch(err => {
          console.log(err.response.data)
        })
    },
    fetchHistory (context) {
      const token = localStorage.getItem('access_token')
      axios({
        url: '/history',
        method: 'GET',
        headers: { access_token: token }
      })
        .then(({ data }) => {
          context.commit('SET_HISTORY', data)
        })
        .catch(err => {
          console.log(err.response.data)
        })
    }
  },
  modules: {
  }
})
