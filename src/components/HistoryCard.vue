<template>
  <div class="col-12 py-2">
    <div class="card flex-row flex-wrap" style="width:700px; margin-left: 20em">
      <div class="card-header border-0">
          <img :src="item.Product.image_url" alt="image" height="150px" width="200px">
      </div>
      <div class="card-block" style="padding-top: 2em;">
          <h4 class="card-title"><strong>{{item.Product.name}}</strong></h4>
          <p class="card-text">{{currency}} X {{item.quantity}}</p>
          <p class="card-text">Total: {{total}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'History Card',
  props: ['item'],
  computed: {
    currency () {
      return new Intl.NumberFormat('id',
        { style: 'currency', currency: 'IDR' })
        .format(this.item.Product.price)
    },
    total () {
      return new Intl.NumberFormat('id',
        { style: 'currency', currency: 'IDR' })
        .format(this.item.Product.price * this.item.quantity)
    }
  }
}
</script>

<style>
img {
  object-fit: contain;
}
</style>
