<template>
  <div class="card border-primary mb-3" style="max-width: 18rem;">
    <div class="card-header">Shopping summary</div>
    <div class="card-body text-primary">
      <h5 class="card-title">Total Price</h5>
      <p class="card-text">{{ totalPrice }}</p>
      <button class="btn btn-primary" @click="checkout">Checkout</button>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'ShoppingSummary',
  computed: {
    totalPrice () {
      return `IDR ${this.$store.state.totalPrice}`
    }
  },
  methods: {
    checkout () {
      Swal.fire({
        title: 'Proceed to Checkout?',
        icon: 'question',
        showCancelButton: true,
        reverseButtons: true
      })
        .then(({ isConfirmed }) => {
          if (isConfirmed) {
            return this.$store.dispatch('checkoutCart')
          } else {
            throw new Error('')
          }
        })
        .then(({ data }) => {
          this.$store.dispatch('fetchCarts')
          this.$store.dispatch('fetchProducts')
          this.$store.dispatch('fetchHistories')
          Swal.fire({
            title: 'Yayy!',
            text: 'Successfully Checkout All Products',
            icon: 'success'
          })
        })
        .catch(err => {
          if (err.response) {
            Swal.fire({
              title: 'Oopss...',
              text: err.response.data.message,
              icon: 'error'
            })
          }
        })
    }
  }
}
</script>
