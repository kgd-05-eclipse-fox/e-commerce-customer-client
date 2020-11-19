<template>
  <section class="navbarlanding">
      <nav class="navbar">
        <a class="navbar-brand"><img src="../assets/pics/achats.png" width="100px" alt=""></a>
        <form class="form-inline">
          <a href="#"><button @click="goToLogin" class="btn btn-outline-light btn-lg my-2 my-sm-0">Log In</button></a>
        </form>
      </nav>
  </section>
</template>

<script>
export default {
  name: 'NavbarLanding',
  methods: {
    goToLogin () {
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style scoped>
nav{
    background: #000000;
}
</style>
