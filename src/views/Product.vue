<template>
  <div>
    <!-- * Start of List Products -->
    <div class="container">
      <div class="row">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        ></ProductCard>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'

export default {
  name: 'Product',
  components: {
    ProductCard
  },
  computed: {
    products () {
      return this.$store.state.products
    },
    banners () {
      return this.$store.state.banners
    }
  }
}
</script>
