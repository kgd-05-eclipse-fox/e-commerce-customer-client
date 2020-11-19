<template>
  <div class="login">
    <form class="form">
      <img
        src="../assets/banner.png"
        alt=""
        class="banner mb-4"
        width="300px"
      />
      <div class="control" id="signIn">
        <button
          @click.prevent="toLogin"
          class="buttonSignIn btn btn-outline-light hvr-sweep-to-right text-info"
          aria-disabled="true"
        >
          Login
        </button>
        <button
          class="buttonSignIn btn btn-outline-light hvr-sweep-to-right text-primary"
          aria-disabled="true" disabled
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
      <button @click.prevent="register" class="btn block-cube block-cube-hover" type="submit">
        <div class="bg-top">
          <div class="bg-inner"></div>
        </div>
        <div class="bg-right">
          <div class="bg-inner"></div>
        </div>
        <div class="bg">
          <div class="bg-inner"></div>
        </div>
        <div class="text">Register</div>
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
  name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    toLogin () {
      this.$router.push({ name: 'LoginPage' })
    },
    register () {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('register', payload)
        .then(({ data }) => {
          Toast.fire({
            icon: 'success',
            title: 'Register Success!!'
          })
          this.$router.push({ name: 'LoginPage' })
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
