<template>
    <section class="cardproduct">
        <div class="container">
            <div class="row">
                <div class="col-3 mt-5" v-for="product in products" :key="product.id">
                    <div class="card" style="width: 17rem;">
                        <img :src="product.image_url" height="300px" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">{{product.name}}</h5>
                        <p class="card-text">Price: IDR {{product.price}}</p>
                        <p class="card-text">Stock: {{product.stock}} items</p>
                        <a href="#" @click="addToCart(product.id)" class="btn btn-info" v-if="isToken === true">Add to Cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Card',
  data () {
    return {
      isToken: false
    }
  },
  methods: {
    addToCart (id) {
      this.$store.dispatch('addToCart', id)
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    const token = localStorage.getItem('token')
    if (token) {
      this.isToken = true
    }
  }
}
</script>

<style scoped>
p{
  color: orangered;
  font-size: 16px;
  font-weight: bold;
}
h5{
  color: black;
  font-weight: bold;
  text-align: center;
}
</style>
