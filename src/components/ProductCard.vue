<template>
  <div class="col-3 mt-5">
    <div class="card">
      <img class="card-img-top" :src="product.image_url" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">
          Price: {{ product.price }} <br>
          Stock: {{ product.stock }}
        </p>
      </div>
      <div class="card-body" v-if="status && product.stock > 0">
        <a href="#" class="btn btn-primary" @click="addToCart(product.id)">Add to cart</a>
      </div>
      <div class="card-body" v-else-if="product.stock > 0">
        <p>Login to add to your cart!</p>
      </div>
      <div class="card-body" v-else>
        Out of stock
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import Toast from '@/toast/toast.js'
export default {
  name: 'ProductCard',
  props: ['product'],
  computed: {
    status () {
      return this.$store.state.status
    }
  },
  methods: {
    addToCart (id) {
      this.$store.dispatch('addToCart', id)
        .then(({ data }) => {
          this.$store.dispatch('fetchCarts')
          Toast.fire({
            icon: 'success',
            title: data.message
          })
        })
        .catch(err => {
          Swal.fire({
            title: 'Oopss...',
            text: err.response.data.message,
            icon: 'error'
          })
        })
    }
  }
}
</script>

<style scoped>
.card {
  height: 30rem;
}

.card-img-top {
  width: 100%;
  height: 15vw;
  object-fit: cover;
}
</style>
