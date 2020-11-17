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
  created () {
    const token = localStorage.getItem('access_token')
    if (!token) {
      this.$router.push({
        name: 'Login'
      })
    }
  }
}
</script>

<style>

</style>
