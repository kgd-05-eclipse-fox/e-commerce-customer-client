<template>
  <section class="navbardashboard">
    <div class="sidebar">
        <header> <img src="../assets/pics/achats.png" alt="" width="150px"> </header>
        <ul>
            <li><p><i class="fas fa-user-circle mr-2"></i>{{user}}</p></li>
            <li><a href="#" @click="goToDashboard"><i class="fas fa-qrcode"></i>Dashboard</a></li>
            <li>
              <a href="#" @click="goToCartPage">
                <i
                  class="fa fa-cart-plus"
                >
                </i>
                  Cart
                <span
                  class="badge badge-info"
                  v-if="cartsProduct.length > 0">{{cartsProduct.length}}
                </span>
              </a>
            </li>
            <li><a @click="goToAboutPage" href="#"><i class="fas fa-question-circle"></i>About</a></li>
            <li><a @click="goToContactPage" href="#"><i class="far fa-envelope"></i>Contact</a></li>
            <li><a @click="logout" href="#"><i class="fas fa-power-off"></i>Log Out</a></li>
        </ul>
    </div>
  </section>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'NavbarDashboard',
  methods: {
    logout () {
      Swal.fire({
        title: 'Are you sure?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Log Out!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: 'Log Out Successfull',
            icon: 'success',
            timer: 1500,
            showConfirmButton: false
          })
          localStorage.clear()
          this.$router.push({ name: 'Home' })
        }
      })
    },
    goToCartPage () {
      this.$router.push({ name: 'Cart' })
    },
    goToDashboard () {
      this.$router.push({ name: 'Dashboard' })
    },
    goToAboutPage () {
      this.$router.push({ name: 'About' })
    },
    goToContactPage () {
      this.$router.push({ name: 'Contact' })
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    },
    cartsProduct () {
      return this.$store.state.carts
    },
    isShowCart () {
      return this.$store.state.isShowCart
    }
  },
  created () {
    const email = localStorage.getItem('email')
    this.$store.commit('SET_USER', email)
  }
}
</script>

<style scoped>
p{
  color: white;
  font-size: 20px;
  padding-left: 20px;
  font-weight: bold;
  background-color: #17A2B8 ;
}
*{
  margin: 0;
  padding: 0;
}
.navbardashboard{
  font-family: 'Quicksand', sans-serif;
  list-style: none;
  text-decoration: none;
}
.sidebar{
  position: fixed;
  left: 0px;
  width: 250px;
  height: 100%;
  background: #000000;
  transition: all .5s;
}

.sidebar header{
  font-size: 22px;
  color: white;
  text-align: center;
  line-height: 70px;
  background: #000000;
  user-select: none;
}

.sidebar ul a{
  display: block;
  height: 100%;
  width: 100%;
  line-height: 65px;
  font-size: 20px;
  color: white;
  padding-left: 20px;
  box-sizing: border-box;
  border-top: 1px solid rgba(255, 255, 255, .1);
  border-bottom: 1px solid black;
  transition: .4s;
}

ul li:hover a{
  padding-left: 50px;
}

.sidebar ul a i{
  margin-right: 16px;
}
.badge{
  font-size: 20px;
  width: 30px;
  margin-left: 8px;
}
</style>
