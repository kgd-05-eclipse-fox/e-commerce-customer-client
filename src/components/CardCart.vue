<template>
  <div>
    <h2>This is your cart</h2>
    <div class="container d-flex flex-column">
      <div class="card d-flex flex-row my-3" v-for="product in productsInCart" :key="product.id">
        <div class="col-4">
          <img :src="product.Product.image_url" style="height: 150px;" alt="product-img">
        </div>
        <div class="col-8 d-flex flex-column">
          <p>{{product.Product.name}}</p>
          <p>Rp. {{product.Product.price}}</p>
          <p>{{product.Qty}}</p>
          <button type="submit" class="btn btn-primary btn-sm mb-2" @click="addQty(product.id)" :disabled="product.Qty == product.Product.stock ? true : false">+</button>
          <button type="submit" class="btn btn-primary btn-sm mb-2" @click="decQty(product.id)" :disabled="product.Qty == 1 ? true : false">-</button>
          <button type="submit" class="btn btn-danger btn-sm" @click="removeFromCart(product.id)">Remove Item</button>
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
    },
    removeFromCart (id) {
      // console.log(id)
      this.$store.dispatch('removeCart', id)
    },
    addQty (id) {
      this.$store.dispatch('addQty', id)
    },
    decQty (id) {
      this.$store.dispatch('decQty', id)
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
