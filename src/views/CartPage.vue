<template>
  <div>
    <Navbar/>
    <h1 class="mt-5 pt-5">Cart</h1>
    <Cart/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Cart from '../components/Cart.vue'
export default {
  name: 'CartPage',
  components: {
    Navbar,
    Cart
  },
  beforeCreate () {
    this.$store.dispatch('getCart')
    if (localStorage.token) {
      this.$store.commit('changeLoginStatus', true)
    } else {
      this.$store.commit('changeLoginStatus', false)
    }
  }
}
</script>

<style scoped>
h1 {
  font-family: 'Space Mono', monospace;
  color: white;
}
</style>
