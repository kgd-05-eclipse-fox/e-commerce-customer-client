<template>
<section class="cartpage">
  <NavbarDashboard/>
  <div class="container text-center">
        <h1 class="pt-4 pb-2">Your Cart</h1>
        <h2 v-if="carts.length < 1"> Your cart is empty <i class="fas fa-cart-plus"></i></h2>
        <div class="row" v-for="cart in carts" :key="cart.id" >
            <div class="col-4 text-center border-dark">
                <img :src="cart.Product.image_url" width="300px" height="300px" class="border rounded shadow mb-2" alt="">
            </div>
            <div class="col-8 pt-5 border-dark">
                <div class="card shadow">
                    <div class="card-body">
                      <h5 class="card-title">{{cart.Product.name}}</h5>
                      <p class="card-text">Price: Rp {{cart.quantity*cart.Product.price}}</p>
                      <p class="card-text">Quantity: {{cart.quantity}}</p>
                      <a href="#" class="card-link" @click="incrementQty(cart.id)"><i class="fas fa-plus" style="font-size: 25px; color: black;"></i></a>
                      <a href="#" class="card-link" @click="decrementQty(cart.id)"><i class="fas fa-minus" style="font-size: 25px; color: black;"></i></a>
                      <div>
                        <button class="mt-2 btn btn-outline-danger ml-2 btn-sm" @click="deleteCart(cart.id)">Remove from Cart</button>
                      </div>
                    </div>
                  </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import NavbarDashboard from '../components/NavbarDashboard'
export default {
  name: 'Cart',
  components: {
    NavbarDashboard
  },
  computed: {
    carts () {
      return this.$store.state.carts
    }
  },
  methods: {
    incrementQty (id) {
      this.$store.dispatch('incrementQty', id)
    },
    decrementQty (id) {
      this.$store.dispatch('decrementQty', id)
    },
    deleteCart (id) {
      this.$store.dispatch('deleteCart', id)
    }
  },
  created () {
    this.$store.dispatch('fetchCart')
  }
}
</script>

<style scoped>
.cartpage{
    margin-left: 250px;
}
h1{
  font-weight: bold;
}
h5{
    font-weight: bold;
}
h2{
  padding-top: 200px;
  font-size: 60px;
  text-decoration-line: underline;
}
.card{
  box-shadow: 15px 15px #17A2B8;
}
</style>
