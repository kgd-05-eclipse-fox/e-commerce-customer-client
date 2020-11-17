import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'

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
    }
  },
  modules: {
  }
})
