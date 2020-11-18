<template>
  <div id="MyCarousel" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
          <div class="carousel-item active">
              <img class="d-block w-100" :src="this.banner.image_url" alt="First slide" height="500px">
          </div>
          <div v-for="banner in banners" :key="banner.id" class="carousel-item">
              <img class="d-block w-100" :src="banner.image_url" alt="Banner" height="500px">
          </div>
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
export default {
  name: 'Carousel',
  computed: {
    banner () {
      return this.$store.state.banners[0]
    },
    banners () {
      return this.$store.state.banners.slice(1)
    }
  },
  created () {
    this.$store.dispatch('getBanners')
  }
}
</script>

<style scoped>
.carousel .carousel-item {
  height: 500px;
}

.carousel-item img {
  position: absolute;
  object-fit: contain;
  top: 0;
  left: 0;
}
</style>
