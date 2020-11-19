<template>
    <div class="container">
      <div class="row">
        <div class="col-3" v-for="product in products" :key="product.id">
          <div class="card mb-3" style="width: 16rem; height: 30rem;">
            <img class="card-img-top" style="width: 100%; height: 300px;" :src="product.image_url" alt="product.image">
            <div class="card-body">
              <h5 class="card-title">{{product.name}}</h5>
              <p>Rp. {{product.price}}</p>
              <p>Stock: {{product.stock}}</p>
            </div>
            <div class="card-body">
              <button v-if="product.stock" class="btn btn-primary" @click="addToCart(product.id)">Add to cart</button>
              <span v-else>Out of stock</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Products',
  methods: {
    fetchProduct () {
      this.$store.dispatch('fetchProducts')
    },
    addToCart (productId) {
      const token = localStorage.getItem('access_token')
      if (!token) {
        this.$router.push({
          name: 'Login'
        })
      } else {
        this.$store.dispatch('addToCart', productId)
      }
    }
  },
  created () {
    this.fetchProduct()
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  }
}
</script>

<style>

</style>
