<template>
  <div id="basket">
    <div>
        <NavBar/>
    </div>
    <div class="container">
        <div class=" d-flex justify-content-center mb-4 posisiBasket">
            <h1  style="font-family: 'Pacifico', cursive;" class=" text-light">Your Favorite Product</h1>
        </div>
        <div class="row d-flex- justify-content-center columFavorit">
            <div v-for="el in getDataFavorit" :key="el.id" class=" col-8 align-items-center text-light d-flex row" style="background-color: rgb(0, 0, 0, 0.5);">
                <div class=" d-flex mt-3 col-1">
                    <p class="p-0">{{ el.id }}</p>
                </div>
                <div class=" d-flex col-4">
                    <p>Name: {{ el.Product.name }}</p>
                </div>
                <div class=" d-flex col-5 imgFavorit">
                    <img class="m-2" :src="el.Product.image_url" alt="">
                </div>
                <div class=" d-flex col-2">
                    <button @click.prevent="deleteFavorit(el.id)" class=" btn btn-danger btn-group mb-2">Delete</button>
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
  name: 'Favorit',
  data () {
    return {}
  },
  methods: {
    deleteFavorit (id) {
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
          this.$store.dispatch('deleteDataFavorit', id)
            .then(({ data }) => {
              this.$store.dispatch('getAllDataFavorit')
              this.$router.push({ name: 'Favorit' })
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your Favorite Product has been Delete',
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
    getDataFavorit () {
      return this.$store.state.setDataFavorit
    }
  },
  components: {
    NavBar,
    Footer
  },
  created () {
    this.$store.dispatch('getAllDataFavorit')
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

.imgFavorit img{
  width: 200px;
}
</style>
