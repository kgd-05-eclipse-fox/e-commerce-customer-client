<template>
  <div id="MyCarousel" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <CarouselItem
        v-for="banner in banners"
        :key="banner.id"
        :banner="banner"
      />
    </div>
    <a class="carousel-control-prev" href="#MyCarousel" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#MyCarousel" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
import CarouselItem from './Carousel_Item'

export default {
  name: 'Carousel',
  computed: {
    banners () {
      return this.$store.state.banners
    }
  },
  components: {
    CarouselItem
  },
  created () {
    this.$store.dispatch('getBanners')
  }
}
</script>

<style>

</style>
