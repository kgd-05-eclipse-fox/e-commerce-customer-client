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
  }
}
</script>
