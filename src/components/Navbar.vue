<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-info fixed-top">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
            <a class="nav-link font-weight-bold" href="#" id="btn-home" @click.prevent="toHomePage">Home</a>
        </li>
        <li class="nav-item active">
            <a class="nav-link font-weight-bold" href="#" id="btn-list" @click.prevent="toCartPage" v-if="token == true">My Cart</a>
        </li>
        <li class="nav-item active">
            <a class="nav-link font-weight-bold" href="#" id="btn-list" @click.prevent="toHistoryPage" v-if="token == true">My History</a>
        </li>
        </ul>
        <form class="form-inline my-lg-0" @submit.prevent="signOut" v-if="token === true">
        <button class="btn btn-danger" type="submit">Sign Out</button>
        </form>
        <form class="form-inline my-lg-0" @submit.prevent="signIn" v-else>
        <button class="btn btn-danger" type="submit">Sign In</button>
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
      this.$store.commit('SET_LOGIN_STATUS', false)
      this.$router.push({
        name: 'Home'
      })
    },
    toCartPage () {
      this.$router.push({
        name: 'Cart'
      })
    },
    toHomePage () {
      this.$router.push({
        name: 'Home'
      })
    },
    signIn () {
      this.$router.push({
        name: 'Login'
      })
    },
    toHistoryPage () {
      this.$router.push({
        name: 'History'
      })
    }
  },
  computed: {
    token () {
      return this.$store.state.token
    }
  }
}
</script>

<style>

</style>
