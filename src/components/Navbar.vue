<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
    <div class="container">
      <a @click.prevent="toHome" class="navbar-brand" style="text-align: left; cursor: pointer;"><img src="../assets/amongus.png" alt="" class="w-25"></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li @click.prevent="toCart" v-if="this.$store.state.loggedIn" class="nav-item">
            <a class="nav-link" href="#"><i class="fa fa-shopping-cart navicon"></i></a>
          </li>
          <li @click.prevent="toHistory" v-if="this.$store.state.loggedIn" class="nav-item">
            <a class="nav-link" href="#"><i class="fa fa-history navicon"></i></a>
          </li>
          <li @click.prevent="logout" v-if="this.$store.state.loggedIn" class="nav-item">
            <a class="nav-link" href="#"><i class="fa fa-sign-out navicon"></i></a>
          </li>
          <li>
            <button @click.prevent="toLogin" v-if="!this.$store.state.loggedIn" type="button" class="btn btn-outline-light">Login</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import Swal from 'sweetalert2'
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})
export default {
  name: 'Navbar',
  methods: {
    logout () {
      Swal.fire({
        title: 'Are you sure want to logout?',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Logout!'
      }).then((result) => {
        if (result.isConfirmed) {
          Toast.fire({
            icon: 'success',
            title: 'Logout Success!!'
          })
          localStorage.clear()
          this.$store.commit('changeLoginStatus', false)
          this.$router.push({ name: 'HomePage' })
        }
      })
    },
    toLogin () {
      this.$router.push({ name: 'LoginPage' })
    },
    toHome () {
      this.$router.push({ name: 'HomePage' })
    },
    toCart () {
      this.$router.push({ name: 'CartPage' })
    },
    toHistory () {
      this.$router.push({ name: 'HistoryPage' })
    }
  }
}
</script>

<style scoped>
i {
  font-size: x-large;
}
</style>
