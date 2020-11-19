<template>
  <div id="slideShow-page" style="margin-top: 7%;">
    <div class=" container-fluid p-0 my-3 justify-content-center">
        <div v-for="el in dataBanner" :key="el.id" id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li v-if="el === dataBanner[0]"  data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li v-if="el !== dataBanner[0]" data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <!-- <li data-target="#carouselExampleIndicators" data-slide-to="2"></li> -->
            </ol>
            <div class="carousel-inner">
                <div v-if="el === dataBanner[0]" class="carousel-item active">
                    <img style="width:100%" :src="el.banner_url" alt="Chicago">
                </div>
                <div v-if="el !== dataBanner[0]" class="carousel-item">
                    <img style="width:100%" :src="el.banner_url" alt="Los Angeles">
                </div>
                <!-- <div class="carousel-item">
                    <img style="width:100%" src="https://eigeradventure.com/media/weltpixel/owlcarouselslider/images/_/b/_brandsite_outlive_202010_sis_movember_banner1366x630.jpg" alt="New York">
                </div> -->
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'SlideShow',
  data () {
    return {
    }
  },
  methods: {
  },
  computed: {
    dataBanner () {
      return this.$store.state.setAllDataBanner
    }
  }
}
</script>

<style scoped>

</style>
