<template>
  <div class="container">
        <div class="row">
            <div class="col-6">
                <img src='../assets/undraw_Login_re_4vu2.png' alt="login-user" height="350px">
            </div>
            <div class="col-6">
                <h3>Register</h3>
                <form @submit.prevent="signUp">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signUp () {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('signUp', payload)
    }
  }
}
</script>

<style>

</style>
