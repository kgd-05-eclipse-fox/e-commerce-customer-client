<template>
  <div class="container mt-2">
    <div class="row" style="justify-content: center;">
      <div class="col-6">
        <div v-for="cart in this.$store.state.carts" :key="cart.id" class="card mb-2 px-2">
          <div class="row center">
            <div class="col-md-8 px-3">
              <div class="card-block px-6">
                <h4 class="card-title">{{cart.Product.name}}</h4>
                  <div class="pb-1">Rp {{rpFormat(cart.Product.price)}}</div>
                <div class="row">
                  <div class="col-6 row">
                    <div class="col-4">
                    <a @click.prevent="decrementQty(cart.id)" href=""><i class="fa fa-minus-square"></i></a>
                    </div>
                    <div class="pt-1">
                      <h5>{{cart.qty}}</h5>
                    </div>
                    <div class="col-3 pl-2">
                      <a @click.prevent="incrementQty(cart.id)" href=""><i class="fa fa-plus-square"></i></a>
                    </div>
                  </div>
                  <div class="col-4"></div>
                </div>
                  <div class="pb-1"> <strong>Total: <br> Rp. {{rpFormat(cart.qty * cart.Product.price)}}</strong> </div>
                <a @click.prevent="deleteCart(cart.id)" href="#" class="mt-auto btn-sm btn-danger">Delete Item</a>
              </div>
            </div>
            <div class="col-md-4">
              <img :src="cart.Product.image_url" :alt="cart.Product.name" width="150vh">
            </div>
          </div>
        </div>
      </div>
      <div v-if="this.$store.state.carts.length > 0" class="col-4">
        <div class="card">
          <h4>Order Summary:</h4>
          <hr>
          <strong class="total">Grand Total: <br>
          Rp. {{rpFormat(this.$store.state.total)}}
          </strong>
          <hr>
          <button @click.prevent="checkout" class="btn btn-success mb-3 mx-2">Checkout</button>
        </div>
      </div>
    </div>
    <div v-if="this.$store.state.carts.length <= 0" class="container bg-light rounded shadow-lg py-5">
      <h1>Your Cart is Empty.</h1>
      <router-link to="/" class="btn btn-dark mt-3 hvr-shutter-out-horizontal">Back to Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data () {
    return {
    }
  },
  methods: {
    deleteCart (id) {
      this.$store.dispatch('deleteCart', id)
      this.$store.dispatch('getCart')
    },
    incrementQty (id) {
      const payload = {
        id,
        condition: 'increment'
      }
      this.$store.dispatch('updateQty', payload)
    },
    decrementQty (id) {
      const payload = {
        id,
        condition: 'decrement'
      }
      this.$store.dispatch('updateQty', payload)
    },
    rpFormat (num) {
      return new Intl.NumberFormat('id').format(num)
    },
    checkout () {
      this.$store.dispatch('checkout')
    }
  }
}
</script>
<style scoped>
.card {
  text-align: -webkit-left;
}
.card-title {
  font-family: 'Space Mono', monospace;
  font-size: 20px;
}
i {
  font-size: 5vh;
  color: black;
}
.total {
  font-size: 5vh
}
.hvr-shutter-out-horizontal {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  background: black;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}
.hvr-shutter-out-horizontal:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: navy;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transform-origin: 50%;
  transform-origin: 50%;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.hvr-shutter-out-horizontal:hover, .hvr-shutter-out-horizontal:focus, .hvr-shutter-out-horizontal:active {
  color: rgb(255, 255, 255);
}
.hvr-shutter-out-horizontal:hover:before, .hvr-shutter-out-horizontal:focus:before, .hvr-shutter-out-horizontal:active:before {
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}
</style>
