<template>
  <div>
    <Navbar/>
    <div>
      <Swiper/>
    </div>
    <div class="container">
      <ProductCard/>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Swiper from '../components/Swiper'
import ProductCard from '../components/ProductCard'

export default {
  name: 'HomePage',
  components: {
    Navbar,
    Swiper,
    ProductCard
  },
  mounted () {
    this.$store.dispatch('getProducts')
    if (localStorage.token) {
      this.$store.commit('changeLoginStatus', true)
    } else {
      this.$store.commit('changeLoginStatus', false)
    }
  }
}
</script>

<style>

</style>
