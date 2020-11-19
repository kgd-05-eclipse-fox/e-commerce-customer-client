<template>
<div class="row">
  <div v-for="product in this.$store.state.products" :key="product.id" class="col-md-3">
    <div class="card card-product-grid my-4 hvr-grow shadow-sm">
      <img :src="product.image_url" style="max-width: 40vh; max-height: 40vh">
      <figcaption class="info-wrap">
        <h5 class="title">{{product.name}}</h5>
        <div class="price my-1">Rp. {{rpFormat(product.price)}}</div>
        <div v-if="product.stock" class="row" style="justify-content: center;">
          <a @click.prevent="addToCart(product.id)" href="#"><i class="fa fa-cart-plus mx-2" style="color: black; font-size:25px"></i></a>
        </div>
        <div v-else><span class="text-danger">Out Of Stock</span></div>
      </figcaption>
    </div>
  </div>
</div>
</template>

<script>
import Toast from '../swal/config'
export default {
  name: 'ProductCard',
  data () {
    return {
    }
  },
  methods: {
    rpFormat (num) {
      return new Intl.NumberFormat('id').format(num)
    },
    addToCart (ProductId) {
      if (localStorage.token && this.$store.state.loggedIn) {
        this.$store.dispatch('addToCart', { ProductId })
      } else {
        Toast.fire({
          icon: 'error',
          title: 'Please Login before adding Cart.'
        })
      }
    }
  }
}
</script>

<style>
.title {
  font-family: 'Space Mono', monospace;
  font-size: 15px;
}
.hvr-grow {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
}
.hvr-grow:hover, .hvr-grow:focus, .hvr-grow:active {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
