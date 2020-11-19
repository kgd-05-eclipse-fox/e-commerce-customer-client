<template>
  <div>
    <!-- * Start of List Cart -->
    <div class="mt-5 container" v-if="carts.length > 0">
      <h1 class="text-center">My Cart</h1>
      <div class="row pt-5">
        <div class="col-8">
          <CartCard
            v-for="cart in carts"
            :key="cart.id"
            :cart="cart"
          ></CartCard>
        </div>
        <div class="col-4">
          <ShoppingSummary></ShoppingSummary>
        </div>
      </div>
    </div>
    <!-- * Else -->
    <div v-else class="container text-center mt-5">
      <h1>You don't have any Cart</h1>
    </div>
  </div>
</template>

<script>
import CartCard from '@/components/CartCard.vue'
import ShoppingSummary from '@/components/ShoppingSummary.vue'

export default {
  name: 'Cart',
  components: {
    CartCard,
    ShoppingSummary
  },
  computed: {
    carts () {
      return this.$store.state.carts
    }
  }
}
</script>

<style scoped>
.container {
  justify-content: center;
}
</style>
