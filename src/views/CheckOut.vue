<template>
  <div id="basket">
    <div>
        <NavBar/>
    </div>
    <div class="container">
        <div class=" d-flex justify-content-center mb-4 posisiBasket">
            <h1  style="font-family: 'Pacifico', cursive;" class=" text-light">Your History</h1>
        </div>
        <!-- get data product "getAllDataProductUser[0].Product.image_url" -->
        <div class="row d-flex- justify-content-center">
            <div v-for="el in dataCheckOut" :key="el.id" class=" col-8 align-items-center text-light" style="background-color: rgb(0, 0, 0, 0.5);">
                <div class=" d-flex mt-3">
                    <h6>ID: {{ el.id }}</h6>
                </div>
                <div class=" d-flex">
                    <h4>Total: Rp. {{ el.total }},00</h4>
                </div>
                <div class=" d-flex">
                    <h4>{{ el.createdAt }}</h4>
                </div>
                <div>
                    <button @click.prevent="deleteHistory(el.id)" class=" btn btn-danger btn-group mb-2">Delete</button>
                </div>
                <hr>
            </div>
        </div>
    </div>
    <div>
        <Footer/>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import Swal from 'sweetalert2'

export default {
  name: 'CheckOut',
  data () {
    return {}
  },
  components: {
    NavBar,
    Footer
  },
  methods: {
    getAllDataCheckOut () {
      this.$store.dispatch('getAllDataCheckOut')
    },
    deleteHistory (id) {
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
          this.$store.dispatch('deleteHistory', id)
            .then(({ data }) => {
              this.$store.dispatch('getAllDataProduct')
              this.$router.push({ name: 'Home' })
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your History has been Delete',
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
    }
  },
  computed: {
    dataCheckOut () {
      return this.$store.state.setDataCheckOut
    }
  },
  created () {
    this.getAllDataCheckOut()
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
  background-color: rgb(0, 0, 0, 0.5)
}

.deletBasket:hover{
    background-color: rgb(252, 88, 88)
}
</style>
