<template>
  <div>
    <h2>This is your cart</h2>
    <div class="container d-flex flex-column">
      <div class="card d-flex flex-row" v-for="product in productsInCart" :key="product.id">
        <div class="col-4">
          <img src="../assets/logo.png" alt="product-img">
        </div>
        <div class="col-8">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardCart',
  methods: {
    fetchCart () {
      this.$store.dispatch('fetchCart')
    }
  },
  created () {
    this.fetchCart()
  },
  computed: {
    productsInCart () {
      return this.$store.state.productsInCart
    }
  }
}
</script>

<style>

</style>
