<template>
  <div class="carousel-item active">
    <img :src="banner.image_url" class="d-block w-100" alt="...">
  </div>
</template>

<script>
export default {
  name: 'CarouselItem',
  props: ['banner']
}
</script>

<style>

</style>
