<template>
  <section class="dashboard">
      <NavbarDashboard/>
      <Card class="card"/>
  </section>
</template>

<script>
import Card from '../components/Card'
import NavbarDashboard from '../components/NavbarDashboard'

export default {
  components: {
    Card,
    NavbarDashboard
  },
  created () {
    this.$store.dispatch('fetchProduct')
    this.$store.dispatch('fetchCart')
  }
}
</script>

<style scoped>
.card{
  margin-left: 250px;
}
</style>
