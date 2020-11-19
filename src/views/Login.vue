<template>
  <div class="login">
    <form @submit.prevent="login" class="form">
      <img
        src="../assets/banner.png"
        alt=""
        class="banner mb-4"
        width="300px"
      />
      <div class="control" id="signIn">
        <button
          class="buttonSignIn btn btn-outline-light hvr-sweep-to-right text-info"
          aria-disabled="true" disabled
        >
          Login
        </button>
        <button
          @click.prevent="toRegister"
          class="buttonSignIn btn btn-outline-light hvr-sweep-to-right text-primary"
          aria-disabled="true"
        >
          Register
        </button>
      </div>
      <div class="control block-cube block-input">
        <input
          v-model="email"
          name="Email"
          placeholder="Email"
          type="email"
        />
        <div class="bg-top">
          <div class="bg-inner"></div>
        </div>
        <div class="bg-right">
          <div class="bg-inner"></div>
        </div>
        <div class="bg">
          <div class="bg-inner"></div>
        </div>
      </div>
      <div class="control block-cube block-input">
        <input
          v-model="password"
          name="password"
          placeholder="Password"
          type="password"
        />
        <div class="bg-top">
          <div class="bg-inner"></div>
        </div>
        <div class="bg-right">
          <div class="bg-inner"></div>
        </div>
        <div class="bg">
          <div class="bg-inner"></div>
        </div>
      </div>
      <button class="btn block-cube block-cube-hover" type="submit">
        <div class="bg-top">
          <div class="bg-inner"></div>
        </div>
        <div class="bg-right">
          <div class="bg-inner"></div>
        </div>
        <div class="bg">
          <div class="bg-inner"></div>
        </div>
        <div class="text">Log In</div>
      </button>
    </form>
  </div>
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
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    toRegister () {
      this.$router.push({ name: 'RegisterPage' })
    },
    login () {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', payload)
        .then(({ data }) => {
          Toast.fire({
            icon: 'success',
            title: 'Welcome!!'
          })
          localStorage.setItem('token', data.token)
          this.$router.push({ name: 'HomePage' })
          this.$store.commit('changeLoginStatus', true)
        })
        .catch(err => {
          Toast.fire({
            icon: 'error',
            title: err.response.data.msg
          })
        })
    }
  }
}
</script>

<style>

</style>
