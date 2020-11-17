<template>
  <div class="carousel-item active">
    <img :src="banner.image_url" class="d-block w-100" height="500px" alt="...">
  </div>
</template>

<script>
export default {
  name: 'CarouselItem',
  props: ['banner']
}
</script>

<style>
.carousel .carousel-item {
  height: 500px;
}
img {
  object-fit: fill;
}
</style>
