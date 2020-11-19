<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" class="navbar">
      <b-navbar-brand to="/" class="nav-icon">E-commerce</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/login" v-if="isLogin === false">login</b-nav-item>
          <b-nav-item to="/register" v-if="isLogin === false">register</b-nav-item>
          <b-nav-item right @click="logout" v-if="isLogin === true"><i class="fa fa-sign-out" aria-hidden="true"></i>Sign Out</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>

export default {
  name: 'Navbar',
  data () {
    return {
      isLogin: false
    }
  },
  methods: {
    logout () {
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  },
  created () {
    if (localStorage.getItem('token')) {
      this.isLogin = true
    } else {
      this.isLogin = false
    }
  }
}
</script>

<style scoped>
@media (min-width: 100px) {
  .navbar {
    padding: 10px 10px;
  }
}

@media (min-width: 668px) {
  .navbar {
    padding: 10px 50px;
  }
}

@media (min-width: 992px) {
  .navbar {
    padding: 10px 110px;
  }
}

.nav-icon {
  font-size: 40px;
  font-family: Avenir, Helvetica, Arial, sans-serif;}
</style>
