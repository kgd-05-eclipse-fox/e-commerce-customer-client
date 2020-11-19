<template>
<div class="card shadow mb-3" style="max-height: 25vh; width: 80vh">
  <div class="mb-1">
    <div class="row">
      <div class="col-4">
        <img class="card-img-top" :src="cart.Product.image_url" alt="Card image cap">
      </div>
      <div class="col-8">
        <p><b>Name:</b> {{ cart.Product.name }}</p>
        <p><b>Price:</b> {{ price }}</p>
        <div class="qty">
          <button v-if="cart.qty > 1" class="p-0 border-0 bg-white"><span class="minus bg-dark" @click="updateCart(false)">-</span></button>
          <button v-else class="p-0 border-0 bg-white" disabled ><span class="minus bg-dark">-</span></button>
          <input type="number" class="count" name="qty" :value="cart.qty" disabled>
          <button v-if="cart.qty !== cart.Product.stock" class="p-0 border-0 bg-white"><span class="plus bg-dark border-0" @click="updateCart(true)">+</span></button>
          <button v-else class="p-0 border-0 bg-white" disabled><span class="plus bg-dark">+</span></button>
        </div>
        <div class="pt-2">
          <button class="p-0 bg-white border-0" @click="deleteCart"><font-awesome-icon :icon="['fa', 'trash']" /></button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Swal from 'sweetalert2'
import Toast from '@/toast/toast.js'

export default {
  name: 'CartCard',
  props: ['cart'],
  methods: {
    updateCart (status) {
      const payload = {
        id: this.cart.id,
        status: status
      }
      this.$store.dispatch('updateCart', payload)
        .then(({ data }) => {
          this.$store.dispatch('fetchCarts')
          Toast.fire({
            title: data.message,
            icon: 'success'
          })
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Oopss...',
            text: err.response.data.message
          })
        })
    },
    deleteCart () {
      Swal.fire({
        title: 'Delete Cart',
        text: 'Are you sure you want to delete this cart?',
        icon: 'warning',
        showCancelButton: true,
        reverseButtons: true
      })
        .then(({ isConfirmed }) => {
          if (isConfirmed) {
            return this.$store.dispatch('deleteCart', this.cart.id)
          } else {
            throw new Error('')
          }
        })
        .then(() => {
          this.$store.dispatch('fetchCarts')
        })
        .catch(err => {
          if (err.response) {
            Swal.fire({
              title: 'Oopss..',
              text: err.response.data.message,
              icon: 'error'
            })
          }
        })
    }
  },
  computed: {
    price () {
      return `IDR ${this.cart.Product.price}`
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
  object-fit: cover;
}

.qty .count {
  display: inline-block;
  vertical-align: top;
  font-size: 15px;
  padding: 0 2px;
  min-width: 35px;
  text-align: center;
}
.qty .plus {
  cursor: pointer;
  display: inline-block;
  vertical-align: top;
  color: white;
  width: 20px;
  height: 20px;
  font: 20px/1 Arial,sans-serif;
  text-align: center;
  border-radius: 50%;
}
.qty .minus {
  cursor: pointer;
  display: inline-block;
  vertical-align: top;
  color: white;
  width: 20px;
  height: 20px;
  font: 20px/1 Arial,sans-serif;
  text-align: center;
  border-radius: 50%;
  background-clip: padding-box;
}
.minus:hover{
    background-color: #717fe0 !important;
}
.plus:hover{
    background-color: #717fe0 !important;
}
/*Prevent text selection*/
span{
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
}
input{
    border: 0;
    width: 2%;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
input:disabled{
    background-color:white;
}

</style>
