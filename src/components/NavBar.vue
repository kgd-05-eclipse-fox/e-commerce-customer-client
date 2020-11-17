<template>
  <nav class="navbar navbar-expand-md navbar-light fixed-top bg-light shadow" style="justify-content: space-between;">
    <div>
      <router-link to="/" class="navbar-brand" style="font-weight:bold">SHOP</router-link>
    </div>
    <div>
      <div v-if="loggedIn">
        <router-link to="/carts" class="navbar-brand mr-4"><i class="fas fa-shopping-cart nav-pic"></i></router-link>
        <router-link to="/history" class="navbar-brand ml-3"><i class="fas fa-history nav-pic"></i></router-link>
        <button @click="logout" class="btn btn-no-ouline text-primary" data-toggle="button" aria-pressed="false"> Logout <i class="fas fa-sign-out-alt"></i></button>
      </div>
      <div v-if="!loggedIn">
        <button @click="toLogin" class="btn btn-primary"><i class="fas fa-sign-in-alt"></i> Login</button>
      </div>
    </div>
  </nav>
</template>

<script>
import { Swal } from '../config/swal'

export default {
  name: 'Navbar',
  methods: {
    logout () {
      Swal.fire({
        icon: 'warning',
        title: 'Are You Sure ?',
        text: 'You will be logged out',
        showCancelButton: true,
        confirmButtonText: 'Logout',
        cancelButtonColor: '#DC3545'
      })
        .then(res => {
          if (res.isConfirmed) {
            localStorage.clear()
            this.$router.push({ name: 'Home' })
            this.$store.commit('setLoggedIn', false)
          }
        })
    },
    toLogin () {
      this.$router.push({ name: 'Login' })
    }
  },
  computed: {
    loggedIn () {
      return this.$store.state.loggedIn
    }
  }
}
</script>

<style scoped>
.nav-pic {
  font-size: 16px;
  opacity: 0.7;
}
.blue-text {
  color: #0058E6;
}
</style>
