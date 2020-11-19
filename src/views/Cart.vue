<template>
  <div>
    <Navbar></Navbar>
    <CardCart></CardCart>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import CardCart from '@/components/CardCart.vue'
export default {
  name: 'Cart',
  components: {
    CardCart, Navbar
  },
  beforeCreate () {
    this.$store.dispatch('fetchCart')
    const token = localStorage.getItem('access_token')
    if (token) {
      this.$store.commit('SET_LOGIN_STATUS', true)
    } else {
      this.$store.commit('SET_LOGIN_STATUS', false)
    }
  }

}
</script>

<style>

</style>
