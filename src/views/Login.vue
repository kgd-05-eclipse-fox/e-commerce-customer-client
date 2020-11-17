<template>
  <div id="login-page">
    <div class=" container">
        <div class="row d-flex">
            <div class=" col-sm-8 my-5" style="padding: 0px;">
                <img id="imgLogin" src="../assets/img/bgLogin.jpg" alt="">
            </div>
            <div class=" col-sm-4 cardLogin">
                <div class="card card-signin my-5 text-center">
                <h1 class=" h1 mb-0 mt-2"><u class="nameLogin">Sainapa-Store</u></h1>
                    <div class=" card-body">
                    <h6 class=" card-title text-center mb-2">Log In</h6>
                    <form @submit.prevent="userLogin" class="form-signin">
                        <div class="form-label-group">
                            <input v-model="email" type="email" id="inputEmail" class=" form-control" placeholder="Email address" required autofocus>
                            <label for="inputEmail">Email address</label>
                        </div>
                        <div class="form-label-group mb-5">
                            <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
                            <label for="inputPassword">Password</label>
                        </div>
                            <button class=" btn btn-lg btn-primary btn-block text-uppercase" type="submit"><router-link class=" text-light" :to="changePage">Log in</router-link></button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      changePage: '',
      access_token: ''
    }
  },
  methods: {
    userLogin () {
      const data = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('loginUser', data)
        .then(({ data }) => {
          const accesstoken = data.access_token
          localStorage.setItem('access_token', accesstoken)
          console.log(accesstoken)
          this.$router.push({ name: 'Home' })
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Welcome',
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
  },
  created () {
    if (!localStorage.getItem('access_token')) {
      this.$router.push({ name: 'Login' })
    } else {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
.cardLogin{
  margin-top: 10vh;
}
#imgLogin{
    width: 100%;
}
.nameLogin{
  font-family: 'Pacifico', cursive;
  color: #223B4C;
}
.btn{
  background-color: #223B4C;
}
.btn:hover{
  background-color: #659BB5;
}
</style>
