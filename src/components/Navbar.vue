<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
            <a class="nav-link" href="#" id="btn-home">Home</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#" id="btn-list" @click.prevent="toCartPage">My Cart</a>
        </li>
        </ul>
        <form class="form-inline my-lg-0" @submit.prevent="signOut">
        <button class="btn btn-danger" type="submit">Sign Out</button>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    signOut () {
      localStorage.clear()
      this.$router.push({
        name: 'Home'
      })
    },
    toCartPage () {
      this.$router.push({
        name: 'Cart'
      })
    }
  }
}
</script>

<style>

</style>
