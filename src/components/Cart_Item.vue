<template>
  <div class="col-12">
    <div class="container d-flex" style="justify-content: space-between; width: 300px">
      <img :src="item.Product.image_url" alt="image">
      <div>
        <h2><strong>{{ item.Product.name }}</strong></h2>
        <p>{{ toCurrency }} each</p>
        <div>
          <button>-</button>
          <i class="mx-2">{{item.quantity}}</i>
          <button>+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartItem',
  props: ['item'],
  computed: {
    toCurrency () {
      return new Intl.NumberFormat('id', { style: 'currency', currency: 'IDR' }).format(this.item.Product.price)
    }
  }
}
</script>

<style>

</style>
