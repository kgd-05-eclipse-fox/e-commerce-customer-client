<template>
  <div>
    <h2 style="font-size: -webkit-xxx-large">This is your cart</h2>
    <div class="container">
      <div class="row">
        <div class="container col-8">
            <div class="card my-3" style="width: 15 rem" v-for="product in productsInCart.products" :key="product.id">
                <div class="row">
                  <div class="col-4">
                    <img :src="product.Product.image_url" width="100%" alt="product-img">
                  </div>
                  <div class="col-8">
                    <p>{{product.Product.name}}</p>
                    <p>Rp. {{product.Product.price}}</p>
                    <p>{{product.Qty}}</p>
                    <a class="btn btn-sm mb-2 mx-2" @click="addQty(product.id)" v-if="product.Qty !== product.Product.stock"><i class="fa fa-plus-square" style="color: blue; font-size: xx-large"></i></a>
                    <button v-if="product.Qty == product.Product.stock" class="px-0 border border-white bg-white" disabled>
                    <i class="fa mx-3 fa-plus-square text-secondary" style="font-size: xx-large;"></i>
                    </button>
                    <a class="btn btn-sm mb-2 mx-2" @click="decQty(product.id)" v-if="product.Qty > 1"><i class="fa fa-minus-square" style="color: red; font-size: xx-large;"></i></a><br v-if="product.Qty > 1">
                    <button v-if="product.Qty <= 1" class="px-0 border border-white bg-white" disabled>
                    <i class="fa mx-3 fa-minus-square text-secondary" style="font-size: xx-large;"></i>
                    </button><br v-if="product.Qty <= 1">
                    <button type="submit" class="btn btn-danger btn-sm" @click="removeFromCart(product.id)">Remove Item</button>
                  </div>
                </div>
            </div>
        </div>
        <div class="col-4">
            <div class="card mt-3">
              <div class="card-body">
                <h5 class="card-title">Total</h5>
                <p class="card-text">Rp. {{productsInCart.totalPrice}}</p>
                <button class="btn btn-success" :disabled="productsInCart.totalPrice == 0 ? true : false" @click="checkoutCart">Checkout</button>
              </div>
            </div>
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
      this.$store.dispatch('removeCart', id)
    },
    addQty (id) {
      this.$store.dispatch('addQty', id)
    },
    decQty (id) {
      this.$store.dispatch('decQty', id)
    },
    checkoutCart () {
      this.$store.dispatch('checkoutCart')
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
