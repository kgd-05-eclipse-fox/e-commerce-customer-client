<template>
  <div>
    <carousel
    :perPage="1"
    :loop="true"
    :centerMode="true"
    :autoplay="true"
    class="mt-5 pt-5">
      <slide v-for="(banner,i) in this.$store.state.banners" :key="i">
        <img :src="banner" :alt="banner.name">
      </slide>
    </carousel>
    {{banner}}
  </div>
</template>

<script>
export default {
  name: 'Swiper',
  mounted () {
    this.$store.dispatch('getBanners')
  },
  data () {
    return {
      banners: this.$store.state.banners
    }
  }
}
</script>

<style scoped>
.swiper-container {
  max-height: 50vh;
}
img {
  max-width: auto;
  max-height: 50vh;
}
</style>
