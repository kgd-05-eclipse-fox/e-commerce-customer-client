<template>
<div>
  <NavBar/>
  <SlideShow/>
  <div id="home-page">
    <form class="form-inline mt-4 ml-2 mb-4 justify-content-center">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    <div class="container d-flex p-0">
        <Card/>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  </div>
</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import SlideShow from '@/components/SlideShow.vue'
import Card from '@/components/Card.vue'

export default {
  name: 'Home',
  data () {
    return {
    }
  },
  methods: {
    getALlDataBanner () {
      this.$store.dispatch('getALlDataBanner')
    },
    getAllProductUser () {
      this.$store.dispatch('getAllDataProduct')
    }
  },
  components: {
    NavBar,
    SlideShow,
    Card
  },
  created () {
    if (!localStorage.getItem('access_token')) {
      this.$router.push({ name: 'Login' })
    } else {
      this.$router.push({ name: 'Home' })
      this.getALlDataBanner()
      this.getAllProductUser()
    }
  }
}
</script>

<style scoped>

</style>
