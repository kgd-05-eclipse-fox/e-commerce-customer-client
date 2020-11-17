<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="/"
      @click.prevent="changePage('Product')"
    >
      <img src="../assets/storepedia.png"
        width="30"
        height="30"
        class="d-inline-block align-top"
        alt="Storepedia Logo"
      >
      Storepedia
    </a>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto"></ul>
      <div class="pr-3">
        <a href="" @click.prevent="changePage('Cart')" style="color: inherit;" v-if="status"><font-awesome-icon :icon="['fa', 'shopping-cart']" /></a>
      </div>
      <div class="pr-3">
        <a href="" @click.prevent="changePage('History')" style="color: inherit;" v-if="status"><font-awesome-icon :icon="['fa', 'history']" /></a>
      </div>
      <a class="pr-3" style="text-decoration: none; color: green;" @click.prevent v-if="status">Hello, {{ email }} !</a>
      <button class="btn btn-outline-success my-2 my-sm-0" v-if="!status" @click="login">Login</button>
      <button class="btn btn-outline-danger my-2 my-sm-0" v-else @click="logout">Logout</button>
    </div>
  </nav>
</template>

<script>
import Swal from 'sweetalert2'
import Toast from '@/toast/toast.js'

export default {
  name: 'Navbar',
  computed: {
    email () {
      return this.$store.state.email
    },
    status () {
      return this.$store.state.status
    }
  },
  methods: {
    changePage (pageName) {
      this.$router.push({ name: pageName })
    },
    login () {
      this.$router.push('/login')
    },
    logout () {
      Swal.fire({
        title: 'Goodbye...',
        text: 'Are you sure you want to log out?',
        icon: 'question',
        showCancelButton: true,
        reverseButtons: true
      })
        .then(({ isConfirmed }) => {
          if (isConfirmed) {
            localStorage.removeItem('access_token')
            localStorage.removeItem('email')
            this.$store.commit('setAccessToken', '')
            this.$store.commit('setEmail', '')
            this.$store.commit('setStatus', '')
            if (this.$route.name !== 'Product') this.$router.push({ name: 'Product' })
            Toast.fire({
              icon: 'success',
              title: 'Successfully logged out!',
              text: 'See you again!'
            })
          }
        })
    }
  }
}
</script>
