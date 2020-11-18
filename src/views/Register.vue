<template>
  <div id="register-page">
    <div class=" container">
        <div class="row d-flex">
            <div class=" col-sm-8 my-5" style="padding: 0px;">
                <img id="imgLogin" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" alt="">
            </div>
            <div class=" col-sm-4 mt-5">
                <div class="card card-signin my-5">
                    <div class="card-body">
                    <h1 class="card-title text-center nameLogin">Register</h1>
                    <form @submit.prevent="userRegister" class="form-signin">
                        <div class="form-label-group">
                            <input v-model="email" type="email" id="inputEmail" class="form-control my-4" placeholder="Email address" required autofocus>
                        </div>
                        <div class="form-label-group">
                            <input v-model="password" type="password" id="inputPassword" class="form-control my-4" placeholder="Password" required>
                        </div>
                            <button class="btn btn-lg btn-primary btn-block text-uppercase my-4" type="submit">Register</button>
                            <hr>
                            <button @click.prevent="backToLogin" class="btn btn-lg btn-primary btn-block text-uppercase my-4" type="submit">Back To LogIn</button>
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
  name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    backToLogin () {
      this.$router.push({ name: 'Login' })
    },
    userRegister () {
      const dataUser = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('registerUser', dataUser)
        .then(({ data }) => {
          this.$router.push({ name: 'Login' })
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Registration Success',
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

:root {
  --input-padding-x: 1.5rem;
  --input-padding-y: .75rem;
}

body {
  background: #007bff;
  background: linear-gradient(to right, #404E4D, #62BEC1);
}

.btn-google {
  color: white;
  background-color: #ea4335;
  font-size: 15px;
}

.btn-register {
  color: white;
  background-color: #3b5998;
  font-size: 15px;
}

.btn{
  border-radius: 20px;
}
input{
  border-radius: 20px;
}
</style>
