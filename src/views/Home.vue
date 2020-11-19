<template>
  <div>
    <Navbar></Navbar>
    <Products></Products>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Products from '@/components/Products.vue'

export default {
  name: 'Home',
  components: {
    Navbar, Products
  },
  beforeCreate () {
    this.$store.dispatch('fetchProducts')
    const token = localStorage.getItem('access_token')
    if (token) {
      this.$store.commit('SET_LOGIN_STATUS', true)
    } else {
      this.$store.commit('SET_LOGIN_STATUS', false)
    }
  }
}
</script>
