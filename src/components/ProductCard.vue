<template>
  <div class="col-3 my-2">
    <div class="card card-bordered">
      <img :src="product.image_url" class="card-img-top" alt="..." height="200px">
      <div class="card-body">
        <h5 class="card-title text-right"><strong>{{ product.name }}</strong></h5>
        <hr>
        <h6 class="card-subtitle text-left">{{ toCurrency }}</h6>
        <p class="card-text text-left">In Stock ({{ product.stock }} items)</p>
        <button
          @click="addToCart(product.id)"
          class="btn btn-sm btn-block btn-primary"
          :class="hideAddToCart"
        >
        <i class="fas fa-cart-arrow-down"></i> Add To Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  methods: {
    addToCart (id) {
      if (this.loggedIn) {
        this.$store.dispatch('addToCart', id)
      } else {
        this.$router.push({ name: 'Login' })
      }
    }
  },
  computed: {
    toCurrency () {
      return new Intl.NumberFormat('id', { style: 'currency', currency: 'IDR' }).format(this.product.price)
    },
    loggedIn () {
      return this.$store.state.loggedIn
    },
    hideAddToCart () {
      if (this.product.stock === 0) {
        return 'd-none'
      } else {
        return ''
      }
    }
  }
}
</script>

<style>

</style>
