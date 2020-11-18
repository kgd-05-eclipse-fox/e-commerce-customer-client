<template>
<div>
  <NavBar/>
  <SlideShow/>
  <div id="home-page">
    <form class="form-inline mt-4 ml-2 mb-4 justify-content-center">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    <div id="mySidenav" class="sidenav">
      <a @click.prevent="goToBasket" href="#" id="about"><img class=" my-1 ml-5" src="../assets/img/shop.png" alt=""></a>
      <a href="#" id="blog"><img class=" my-1 ml-5" src="../assets/img/love.png" alt=""></a>
  </div>
    <div class="container d-flex p-0">
        <Card/>
    </div>
    <div>
      <Footer/>
    </div>
  </div>
</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import SlideShow from '@/components/SlideShow.vue'
import Card from '@/components/Card.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  data () {
    return {
    }
  },
  methods: {
    getALlDataBanner () {
      this.$store.dispatch('getALlDataBanner')
    },
    getAllProductUser () {
      this.$store.dispatch('getAllDataProduct')
    },
    goToBasket () {
      this.$router.push({ name: 'Basket' })
    }
  },
  components: {
    NavBar,
    SlideShow,
    Card,
    Footer
  },
  created () {
    if (!localStorage.getItem('access_token')) {
      this.$router.push({ name: 'Login' })
    } else {
      this.$router.push({ name: 'Home' })
      this.getALlDataBanner()
      this.getAllProductUser()
    }
  }
}
</script>

<style scoped>
/* Style the links inside the sidenav */
#mySidenav a {
  margin-top: 120vh;
  position: absolute; /* Position them relative to the browser window */
  left: -50px; /* Position them outside of the screen */
  transition: 0.3s; /* Add transition on hover */
  padding: 15px; /* 15px padding */
  width: 120px; /* Set a specific width */
  text-decoration: none; /* Remove underline */
  font-size: 20px; /* Increase font size */
  color: white; /* White text color */
  border-radius: 0 5px 5px 0; /* Rounded corners on the top right and bottom right side */
}

#mySidenav a:hover {
  left: 0; /* On mouse-over, make the elements appear as they should */
}

/* The about link: 20px from the top with a green background */
#about {
  top: 20px;
  background-color: #FCDA4F;
}

#blog {
  top: 100px;
  background-color: #F94857; /* Blue */
}
</style>
