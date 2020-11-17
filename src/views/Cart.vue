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
  }
}
</script>

<style>

</style>
