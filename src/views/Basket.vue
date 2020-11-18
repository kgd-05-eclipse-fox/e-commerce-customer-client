<template>
  <div id="basket">
    <div>
        <NavBar/>
    </div>
    <div class="container">
        <div class=" d-flex justify-content-center mb-4 posisiBasket">
            <h1  style="font-family: 'Pacifico', cursive;" class=" text-light">Your Basket</h1>
        </div>
        <!-- get data product "getAllDataProductUser[0].Product.image_url" -->
        <div v-for="el in dataBasket" :key="el.id" class="row d-flex- justify-content-center">
            <div class=" col-3" style="background-color: rgb(0, 0, 0, 0.5);">
                <div class="card my-2 text-light">
                    <img class="card-img-top" :src="el.Product.image_url" alt="HYPERLITE SUMMIT 35">
                </div>
            </div>
            <div class=" col-8 align-items-center text-light" style="background-color: rgb(0, 0, 0, 0.5);">
                <div class=" d-flex mt-3">
                    <h3>Name: {{ el.Product.name }}</h3>
                </div>
                <div class=" d-flex">
                    <h3>Price: Rp. {{ el.Product.price }},00</h3>
                </div>
                <div class=" d-flex">
                    <h3>Total : <a href="#"><img @click.prevent="minus({ id: el.id, stock: el.Product.stock, quantity: el.quantity })" src="../assets/img/minus.png" width="20px" alt=""></a> {{ el.quantity }} <a href="#"><img @click.prevent="plus({ id: el.id, stock: el.Product.stock, quantity: el.quantity })" width="20px" src="../assets/img/plus.png" alt=""></a></h3>
                </div>
            </div>
            <div class="deletBasket col-1 p-0 text-center text-light">
                <a @click.prevent="deleteDataProduct(el.id)" href="#" style="text-decoration: none; color: white;"><h3 style="margin-top: 80px;">Delete</h3></a>
            </div>
        </div>
        <div class="row d-flex  text-center mb-4 border-top">
            <div class=" col-3 text-light" style="background-color: rgb(0, 0, 0, 0.5);">
                <h3 class=" mt-2">Total</h3>
            </div>
            <div class=" col-8 align-items-center text-light" style="background-color: rgb(0, 0, 0, 0.5);">
                <h3 class=" mt-2">Rp. {{ getTotalBasket }},00</h3>
            </div>
            <div class="chectOut col-1 text-light p-0">
                <a @click.prevent="checkOutBasket" href="#" style="text-decoration: none; color: white;"><h6 class=" mt-3">Chect Out</h6></a>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Swal from 'sweetalert2'

export default {
  name: 'Basket',
  data () {
    return {
    }
  },
  methods: {
    deleteDataProduct (id) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store.dispatch('deleteUserProduct', id)
            .then(({ data }) => {
              this.$store.dispatch('getTotalPrice')
              this.$store.dispatch('getAllDataBasket')
              this.$router.push({ name: 'Basket' })
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your Product has been Delete',
                showConfirmButton: false,
                timer: 1500
              })
            })
            .catch(err => {
              Swal.fire({
                icon: 'error',
                title: 'Oops, Sorry...',
                text: 'Something went wrong, Internal Server ERROR',
                showConfirmButton: false,
                timer: 1500
              })
              console.log(err)
            })
        }
      })
    },
    minus (dataMinus) {
      const dataUp = {
        id: dataMinus.id,
        stock: dataMinus.stock,
        quantity: dataMinus.quantity
      }
      if (dataUp.quantity === 1) {
        this.deleteDataProduct(dataUp.id)
      } else {
        const newQuantiity = dataUp.quantity - 1
        const dataUpdate = {
          id: dataUp.id,
          quantity: newQuantiity
        }
        this.$store.dispatch('updateQuantity', dataUpdate)
          .then(({ data }) => {
            this.$store.dispatch('getTotalPrice')
            this.$store.dispatch('getAllDataBasket')
            this.$router.push({ name: 'Basket' })
          })
          .catch(err => {
            Swal.fire({
              icon: 'error',
              title: 'Oops, Sorry...',
              text: 'Something went wrong, Internal Server ERROR',
              showConfirmButton: false,
              timer: 1500
            })
            console.log(err)
          })
      }
    },
    plus (dataPlus) {
      const dataUp = {
        id: dataPlus.id,
        stock: dataPlus.stock,
        quantity: dataPlus.quantity
      }
      if (dataUp.quantity === dataUp.stock) {
        Swal.fire({
          icon: 'error',
          title: 'Oops, Sorry...',
          text: 'Something went wrong, Over Stock',
          showConfirmButton: false,
          timer: 1500
        })
      } else {
        const newQuantiity = dataUp.quantity + 1
        const dataUpdate = {
          id: dataUp.id,
          quantity: newQuantiity
        }
        this.$store.dispatch('updateQuantity', dataUpdate)
          .then(({ data }) => {
            this.$store.dispatch('getTotalPrice')
            this.$store.dispatch('getAllDataBasket')
            this.$router.push({ name: 'Basket' })
          })
          .catch(err => {
            Swal.fire({
              icon: 'error',
              title: 'Oops, Sorry...',
              text: 'Something went wrong, Internal Server ERROR',
              showConfirmButton: false,
              timer: 1500
            })
            console.log(err)
          })
      }
    },
    checkOutBasket () {
      const total = this.getTotalBasket
      console.log(total, '<<<<<<<<<<<<<<<<<<<<')
      this.$store.dispatch('checkOutDataBasket', total)
        .then(({ data }) => {
          this.$store.dispatch('getAllDataProduct')
          this.$router.push({ name: 'Home' })
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops, Sorry...',
            text: 'Something went wrong, Internal Server ERROR',
            showConfirmButton: false,
            timer: 1500
          })
          console.log(err)
        })
    }
  },
  computed: {
    dataBasket () {
      return this.$store.state.setDataAllBasket
    },
    getTotalBasket () {
      return this.$store.state.setTotalBasket
    }
  },
  components: {
    NavBar
  },
  created () {
    this.$store.dispatch('getAllDataBasket')
    this.$store.dispatch('getTotalPrice')
  }
}
</script>

<style scoped>
.posisiBasket {
  margin-top: 10%;
}
.chectOut{
  background-color: rgb(40, 119, 40);
}

.chectOut:hover {
  background-color: rgb(55, 162, 55);;
}

.deletBasket{
    background-color: rgb(249,70,70)
}

.deletBasket:hover{
    background-color: rgb(252, 88, 88)
}
</style>
