<template>
  <section class="landingpage">
    <NavbarLanding/>
    <Card/>
  </section>
</template>

<script>
import NavbarLanding from '../components/NavbarLanding'
import Card from '../components/Card'

export default {
  components: {
    NavbarLanding,
    Card
  },
  methods: {
    fetchProduct () {
      this.$store.dispatch('fetchProduct')
    }
  },
  created () {
    this.fetchProduct()
  }
}
</script>

<style scoped>

</style>
