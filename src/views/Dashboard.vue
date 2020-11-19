<template>
  <div>
    <Navbar></Navbar>
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Dashboard',
  components: {
    Navbar
  },
  created () {
    const accessToken = localStorage.getItem('access_token')
    const email = localStorage.getItem('email')
    const storeToken = this.$store.state.accessToken

    if (accessToken && email) {
      if (!storeToken) {
        this.$store.commit('setAccessToken', accessToken)
      }
      this.$store.commit('setEmail', email)
      this.$store.commit('setStatus', 'loggedIn')
    }

    this.$store.dispatch('fetchProducts')
    this.$store.dispatch('fetchCarts')
    this.$store.dispatch('fetchHistories')
  },
  beforeRouteEnter (to, from, next) {
    const accessToken = localStorage.getItem('access_token')
    const email = localStorage.getItem('email')
    const destination = to.name

    const loggedIn = accessToken && email

    if (!loggedIn && destination !== 'Product') {
      next('/')
    } else {
      next()
    }
  }
}
</script>
