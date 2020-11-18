<template>
  <div id="basket">
    <div>
        <NavBar/>
    </div>
    <div class="container">
        <div class=" d-flex justify-content-center mb-4 posisiBasket">
            <h1  style="font-family: 'Pacifico', cursive;" class=" text-light">Your Favorite Product</h1>
            {{ getDataFavorit }}
        </div>
        <div class="row d-flex- justify-content-center columFavorit">
            <div class=" col-8 align-items-center text-light d-flex row" style="background-color: rgb(0, 0, 0, 0.5);">
                <div class=" d-flex mt-3 col-1">
                    <p class="p-0">1</p>
                </div>
                <div class=" d-flex col-4">
                    <p>Name: Makan Malam Nikmat</p>
                </div>
                <div class=" d-flex col-5 imgFavorit">
                    <img class="m-2" src="https://eigeradventure.com/media/catalog/product/cache/4fcc276cc458f0c20c7cb141f7d9fdf7/9/1/910003343002-1_2.jpg" alt="">
                </div>
                <div class=" d-flex col-2">
                    <button class=" btn btn-danger btn-group mb-2">Delete</button>
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

export default {
  name: 'Favorit',
  data () {
    return {}
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
