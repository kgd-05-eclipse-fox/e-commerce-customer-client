import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/config'
import Toast from '../swal/config'
import Swal from 'sweetalert2'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    banners: [],
    products: [],
    loggedIn: false,
    carts: [],
    total: 0,
    histories: [],
    totalSpent: 0
  },
  mutations: {
    setBanners (state, data) {
      state.banners = []
      data.forEach(el => {
        state.banners.push(el.image_url)
      })
    },
    setProducts (state, data) {
      state.products = data
    },
    changeLoginStatus (state, status) {
      state.loggedIn = status
    },
    setCart (state, payload) {
      state.carts = payload
      let total = 0
      state.carts.forEach(el => {
        total += (el.qty * el.Product.price)
      })
      state.total = total
    },
    setHistories (state, data) {
      state.histories = data
      state.totalSpent = 0
      state.histories.forEach(el => {
        state.totalSpent += (el.qty * el.Product.price)
      })
    }
  },
  actions: {
    getBanners (context) {
      axios.get('/banners')
        .then(({ data }) => {
          context.commit('setBanners', data)
        })
        .catch(err => {
          Toast.fire({
            icon: 'error',
            title: err.response.data.msg
          })
        })
    },
    getProducts (context) {
      axios.get('/products')
        .then(({ data }) => {
          context.commit('setProducts', data)
        })
        .catch(err => {
          Toast.fire({
            icon: 'error',
            title: err.response.data.msg
          })
        })
    },
    login (context, payload) {
      return axios.post('/login', payload)
    },
    register (context, payload) {
      return axios.post('/register', payload)
    },
    getCart (context) {
      axios.get('/carts', { headers: { token: localStorage.token } })
        .then(({ data }) => {
          context.commit('setCart', data)
        })
        .catch(err => {
          Toast.fire({
            icon: 'error',
            title: err.response.data.msg
          })
        })
    },
    deleteCart (context, id) {
      Swal.fire({
        title: 'Are you sure want to delete?',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Delete!'
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(`/carts/${id}`, { headers: { token: localStorage.token } })
            .then(_ => {
              context.dispatch('getCart')
              Toast.fire({
                icon: 'success',
                title: 'Delete Cart Success!!'
              })
            })
            .catch(err => {
              Toast.fire({
                icon: 'error',
                title: err.response.data.msg
              })
            })
        }
      })
    },
    updateQty (context, payload) {
      const token = localStorage.token
      axios.get('/carts/' + payload.id, { headers: { token } })
        .then(({ data }) => {
          if ((data.qty) < data.Product.stock) {
            if (payload.condition === 'increment') {
              const qty = data.qty + 1
              axios.patch(`/carts/${payload.id}`, { qty }, { headers: { token } })
                .then(({ data }) => {
                  context.dispatch('getCart')
                  Toast.fire({
                    icon: 'success',
                    title: 'Update Cart Success!!'
                  })
                })
                .catch(err => {
                  Toast.fire({
                    icon: 'error',
                    title: err.response.data.msg
                  })
                })
            } else {
              if (data.qty <= 1) {
                context.dispatch('deleteCart', payload.id)
              } else {
                const qty = data.qty - 1
                axios.patch(`/carts/${payload.id}`, { qty }, { headers: { token } })
                  .then(({ data }) => {
                    context.dispatch('getCart')
                    Toast.fire({
                      icon: 'success',
                      title: 'Update Cart Success!!'
                    })
                  })
                  .catch(err => {
                    Toast.fire({
                      icon: 'error',
                      title: err.response.data.msg
                    })
                  })
              }
            }
          } else {
            if (data.qty === 0) {
              context.dispatch('deleteCart', payload.id)
            } else if (data.qty === data.Product.stock) {
              Toast.fire({
                icon: 'error',
                title: 'Limit stock reached!'
              })
            } else {
              const qty = data.qty - 1
              axios.patch(`/carts/${payload.id}`, { qty }, { headers: { token } })
                .then(({ data }) => {
                  Toast.fire({
                    icon: 'success',
                    title: 'Update Cart Success!!'
                  })
                  context.dispatch('getCart')
                })
                .catch(err => {
                  Toast.fire({
                    icon: 'error',
                    title: err.response.data.msg
                  })
                })
            }
          }
        })
        .catch(err => {
          Toast.fire({
            icon: 'error',
            title: err.response.data.msg
          })
        })
    },
    addToCart (context, ProductId) {
      const token = localStorage.token
      axios.post('/carts', ProductId, { headers: { token } })
        .then(({ data }) => {
          if (!data[1]) {
            const payload = {
              id: data[0].id,
              condition: 'increment'
            }
            context.dispatch('updateQty', payload)
          } else {
            Toast.fire({
              icon: 'success',
              title: 'Add Cart Success!!'
            })
          }
        })
        .catch(err => {
          Toast.fire({
            icon: 'error',
            title: err.response.data.msg
          })
        })
    },
    checkout (context) {
      const token = localStorage.token
      axios.patch('/carts', {}, { headers: { token } })
        .then(({ data }) => {
          if (data[0]) {
            Toast.fire({
              icon: 'success',
              title: 'Checkout Succeed!!',
              text: 'Please check your email to make sure your order.'
            })
            context.dispatch('getCart')
          } else {
            Toast.fire({
              icon: 'error',
              title: 'Checkout Failed!'
            })
          }
        })
        .catch(err => {
          Toast.fire({
            icon: 'error',
            title: err.response.data.msg
          })
        })
    },
    getHistory (context) {
      const token = localStorage.token
      axios.get('/carts/history', { headers: { token } })
        .then(({ data }) => {
          context.commit('setHistories', data)
        })
        .catch(err => {
          Toast.fire({
            icon: 'error',
            title: err.response.data.msg
          })
        })
    }
  },
  modules: {
  }
})
