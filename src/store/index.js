import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../assets/axios/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    setAllDataBanner: [],
    setDataAllProduct: [],
    setDataAllBasket: [],
    setTotalBasket: [],
    setDataCheckOut: [],
    setDataFavorit: []
  },
  mutations: {
    setAllDataBanner (state, payload) {
      state.setAllDataBanner = payload
    },
    setDataAllProduct (state, payload) {
      state.setDataAllProduct = payload
    },
    setDataAllBasket (state, payload) {
      state.setDataAllBasket = payload
    },
    setTotalBasket (state, payload) {
      state.setTotalBasket = payload
    },
    setDataCheckOut (state, payload) {
      state.setDataCheckOut = payload
    },
    setDataFavorit (state, payload) {
      state.setDataFavorit = payload
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
    },
    postProductToBasket (context, ProductId) {
      const accesstoken = localStorage.getItem('access_token')
      return axios.post('/userproduct', ProductId, ({ headers: { access_token: accesstoken } }))
    },
    getAllDataBasket (context) {
      const accesstoken = localStorage.getItem('access_token')
      axios
        .get('/userproduct', ({ headers: { access_token: accesstoken } }))
        .then(({ data }) => {
          console.log(data)
          context.commit('setDataAllBasket', data)
        })
        .catch(err => console.log(err))
    },
    deleteUserProduct (context, id) {
      const accesstoken = localStorage.getItem('access_token')
      return axios.delete(`/userproduct/${id}`, ({ headers: { access_token: accesstoken } }))
    },
    updateQuantity (context, dataUpdate) {
      const accesstoken = localStorage.getItem('access_token')
      return axios.patch(`/userproduct/${dataUpdate.id}`, dataUpdate, ({ headers: { access_token: accesstoken } }))
    },
    getTotalPrice (context) {
      const accesstoken = localStorage.getItem('access_token')
      axios
        .get('/userproduct/total', ({ headers: { access_token: accesstoken } }))
        .then(({ data }) => {
          context.commit('setTotalBasket', data)
        })
        .catch(err => console.log(err))
    },
    checkOutDataBasket (context, total) {
      const accesstoken = localStorage.getItem('access_token')
      return axios.post('/chechout', total, ({ headers: { access_token: accesstoken } }))
    },
    getAllDataCheckOut (context) {
      const accesstoken = localStorage.getItem('access_token')
      axios
        .get('/chechout', ({ headers: { access_token: accesstoken } }))
        .then(({ data }) => {
          context.commit('setDataCheckOut', data)
        })
        .catch(err => console.log(err))
    },
    deleteHistory (context, id) {
      const accesstoken = localStorage.getItem('access_token')
      return axios.delete(`/chechout/${id}`, ({ headers: { access_token: accesstoken } }))
    },
    postProductToFavorit (context, ProductId) {
      const accesstoken = localStorage.getItem('access_token')
      return axios.post('/favorit', ProductId, ({ headers: { access_token: accesstoken } }))
    },
    getAllDataFavorit (context) {
      const accesstoken = localStorage.getItem('access_token')
      axios
        .get('/favorit', ({ headers: { access_token: accesstoken } }))
        .then(({ data }) => {
          console.log('masuk then store')
          context.commit('setDataFavorit', data)
        })
        .catch(err => console.log(err))
    }
  },
  modules: {
  }
})
