import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'
import router from '../router'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    user: '',
    carts: []
  },
  mutations: {
    SET_PRODUCT (state, data) {
      state.products = data
    },
    SET_USER (state, data) {
      state.user = data
    },
    SET_CART (state, data) {
      state.carts = data
    }
  },
  actions: {
    fetchProduct (context) {
      axios({
        url: '/products',
        method: 'GET'
      })
        .then(({ data }) => {
          context.commit('SET_PRODUCT', data.product)
        })
        .catch(err => {
          console.log(err)
        })
    },
    login (context, payload) {
      axios({
        url: '/login/customer',
        method: 'POST',
        data: payload
      })
        .then(({ data }) => {
          Swal.fire({
            position: 'center',
            timer: 1500,
            showConfirmButton: false,
            icon: 'success',
            title: 'Log In Successfull'
          })
          const token = data.access_token
          localStorage.setItem('token', token)
          localStorage.setItem('email', payload.email)
          const email = localStorage.getItem('email')
          context.dispatch('fetchProduct')
          context.commit('SET_USER', email)
          router.push({ name: 'Dashboard' })
        })
        .catch(err => {
          Swal.fire({
            title: 'Invalid Email/Password',
            icon: 'error',
            allowEnterKey: false,
            text: err
          })
        })
    },
    register (context, payload) {
      axios({
        url: '/register',
        method: 'POST',
        data: payload
      })
        .then(_ => {
          Swal.fire({
            position: 'top',
            timer: 1500,
            showConfirmButton: false,
            icon: 'success',
            title: 'Register Successfull'
          })
          router.push({ name: 'Login' })
        })
        .catch(err => {
          Swal.fire({
            title: 'Invalid Email/Password',
            icon: 'error',
            allowEnterKey: false,
            text: err
          })
        })
    },
    fetchCart (context) {
      const token = localStorage.getItem('token')
      axios({
        url: '/carts',
        method: 'GET',
        headers: {
          access_token: token
        }
      })
        .then(({ data }) => {
          context.commit('SET_CART', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addToCart (context, id) {
      const token = localStorage.getItem('token')
      axios({
        url: '/carts/' + id,
        method: 'POST',
        headers: {
          access_token: token
        }
      })
        .then(({ data }) => {
          context.dispatch('fetchCart')
        })
        .catch(err => {
          console.log(err)
        })
    },
    incrementQty (context, id) {
      const token = localStorage.getItem('token')
      axios({
        url: '/carts/' + id,
        method: 'PATCH',
        headers: {
          access_token: token
        }
      })
        .then(_ => {
          Swal.fire({
            icon: 'success',
            title: 'Cart has been updated',
            timer: 1500,
            showConfirmButton: false
          })
          context.dispatch('fetchCart')
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'You have reached the stock limits',
            footer: err,
            showConfirmButton: true
          })
          console.log(err)
        })
    },
    decrementQty (context, id) {
      const token = localStorage.getItem('token')
      axios({
        url: '/carts/' + id,
        method: 'PUT',
        headers: {
          access_token: token
        }
      })
        .then(_ => {
          Swal.fire({
            icon: 'success',
            title: 'Cart has been updated',
            timer: 1500,
            showConfirmButton: false
          })
          context.dispatch('fetchCart')
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: err,
            timer: 1500
          })
          console.log(err)
        })
    },
    deleteCart (context, id) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your cart has been deleted.',
            'success'
          )
          const token = localStorage.getItem('token')
          axios({
            url: '/carts/' + id,
            method: 'DELETE',
            headers: {
              access_token: token
            }
          })
            .then((_) => {
              context.dispatch('fetchCart')
            })
            .catch(err => {
              console.log(err)
            })
        }
      })
    }
  },
  modules: {
  }
})
