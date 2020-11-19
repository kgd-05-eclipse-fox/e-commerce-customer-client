<template>
  <section class="register">
    <div class="container">
      <div class="row">
        <div class="col-10">
          <div class="box row">
            <div class="col-5">
              <img class="rounded" src="../assets/pics/achats.png" alt="" width="100%">
            </div>
            <div class="col-7">
              <h2 class="text-center pt-3">Register</h2>
              <form @submit.prevent="register">
                <div class="form-group pt-2">
                  <label for="email"><h5>Email</h5></label>
                  <input v-model="user.email" type="email" class="form-control" placeholder="example@mail.com">
                </div>
                <div class="form-group">
                  <label for="password"><h5>Password</h5></label>
                  <input v-model="user.password" type="password" class="form-control" placeholder="******">
                </div>
                <div class="form-group">
                  <p>Already have account?<a class="pl-2" href="#"><router-link to="/login">Log In Here!</router-link></a></p>
                </div>
                <div class="form-group text-center">
                  <button type="submit" class="btn">Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    register () {
      const payload = this.user
      this.$store.dispatch('register', payload)
    }
  }
}
</script>

<style scoped>
h2{
  font-weight: bold;
}
.col-10{
  margin-top: 10%;
  margin-left: 10%;
  border-radius: 30px;
}
.col-5{
  background-color: black;
}
.btn{
  width: 80%;
  font-weight: bold;
  border: 1px black solid;
  background-color: black;
  color: #ffffff;
  height: 50px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
}
.btn:hover{
  background-color: #ffffff;
  color: #000000;
  border: 1px solid black
}
.box{
  box-shadow: 15px 15px 10px grey;
}
a{
  color: orangered;
}
</style>
