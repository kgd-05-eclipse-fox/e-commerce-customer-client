<template>
  <section style="margin-top: 3em">
    <h1>Your Cart</h1>
    <hr>
    <div v-if="!carts[0]" style="margin-top: 3em">
      <h3 class="mb-3">Put Some Stuff in here, it's getting dusty</h3>
      <img src="../assets/empty.svg" alt="empty cart" width="30%">
    </div>
    <div class="row mt-5" v-else-if="carts[0]">
      <div class="col-6">
        <div class="row" style="margin-left: 20em">
          <CartItem
            v-for="item in carts"
            :key="item.id"
            :item="item"
          />
        </div>
      </div>
      <div class=" col-6">
        <div class="card" style="width:300px; margin-left: 10em">
          <div class="card-body">
            <h5 class="card-subtitle text-muted">Total</h5>
            <h3 class="card-title">{{ totalPrice }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CartItem from '../components/Cart_Item'

export default {
  name: 'CartPage',
  computed: {
    carts () {
      return this.$store.state.carts
    },
    totalPrice () {
      return 'some number for now'
    }
  },
  components: {
    CartItem
  }
}
</script>

<style>

</style>
