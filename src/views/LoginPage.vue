<template>
  <div class="text-center">
    <form class="form-signin" @submit.prevent="userLogin">
      <img class="mb-4" src="../assets/storepedia.png" alt="" width="200" height="200">
      <h1 class="h3 mb-3 font-weight-normal text-muted">Login Storepedia</h1>
      <label for="email" class="sr-only">Email address</label>
      <input type="email" id="email" class="form-control" name="email" placeholder="Email address" autofocus v-model="email">
      <label for="password" class="sr-only">Password</label>
      <input type="password" id="password" class="form-control" name="password" placeholder="Password" v-model="password">
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      <div class="mt-3">
          <p class="text-muted">Don't have Storepedia account? <a href="/" @click.prevent="changeView('/register')">Register</a></p>
      </div>
      <p class="mt-5 mb-3 text-muted">&copy; 2020 Storepedia</p>
    </form>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import Toast from '@/toast/toast.js'

export default {
  name: 'LoginPage',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async userLogin () {
      try {
        const payload = {
          email: this.email,
          password: this.password
        }

        if (!payload.email || !payload.password) throw new Error('Please complete all form')

        const loggedIn = await this.$store.dispatch('login', payload)
        const { data } = loggedIn

        localStorage.setItem('access_token', data.access_token)
        localStorage.setItem('email', data.email)

        this.clearForm()

        this.$store.commit('setAccessToken', data.access_token)

        this.$router.push('/')
        Toast.fire({
          icon: 'success',
          title: 'Hello, ' + payload.email + '.',
          text: 'Welcome Back !'
        })
      } catch (error) {
        let err = ''

        if (error.response) {
          err = error.response.data.message
        } else {
          err = error.message
        }

        Swal.fire({
          title: 'Oops...',
          text: err,
          icon: 'error'
        })
      }
    },
    clearForm () {
      this.email = ''
      this.password = ''
    },
    changeView (url) {
      this.$router.push(url)
    }
  },
  beforeRouteEnter (to, from, next) {
    const accessToken = localStorage.getItem('access_token')
    const email = localStorage.getItem('email')

    if (!accessToken || !email) {
      next()
    } else {
      next('/')
    }
  }
}
</script>

<style scoped>
  .text-center {
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    -ms-flex-align: center;
    -ms-flex-pack: center;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    padding-top: 5rem;
    padding-bottom: 5rem;
    background-color: #ffffff;
  }

  .form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;
  }
  .form-signin .checkbox {
    font-weight: 400;
  }
  .form-signin .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
  }
  .form-signin .form-control:focus {
    z-index: 2;
  }
  .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
</style>
