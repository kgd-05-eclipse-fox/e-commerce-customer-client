<template>
  <div id="navBar">
    <nav class="mb-1 navbar navbar-expand-lg navbar-dark secondary-color lighten-1 shadowNav bgNav fixed-top" style="background: linear-gradient(to right, #223B4C, #659BB5);">
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
                <li id="nameOLS" class="nav-item active">
                    <router-link class=" text-light" to="/home">Sainapa-store</router-link>
                </li>
                <!-- <li class="nav-item active mt-3 ml-3">
                    <router-link class=" text-light text-decoration-none mx-1" to="/addproduct">Add Product<span class="sr-only">(current)</span></router-link>
                    <router-link class=" text-light text-decoration-none mx-1" to="/addbenner">Add Benner<span class="sr-only">(current)</span></router-link>
                </li> -->
                <!-- <li class="nav-item dropdown mt-2">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Other</a>
                    <div class="dropdown-menu dropdown-secondary">
                    <router-link class="dropdown-item" to="/cardpage">Show Product</router-link>
                    <a @click.prevent="getAllBenner" href="" class="dropdown-item">All Benner</a>
                    </div>
                </li> -->
            </ul>
            <ul class="navbar-nav ml-auto nav-flex-icons">
                <li id="nameOLS_logout" class="nav-item mt-3">
                    <a @click="logout" class="nav-link" href="#">Log Out</a>
                </li>
            </ul>
        </div>
    </nav>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'NavBar',
  data () {
    return {
    }
  },
  methods: {
    logout () {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be Log out!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Log out!'
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.clear()
          this.$router.push({ name: 'Login' })
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your has been Logout',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
    }
  }
}
</script>

<style scoped>
#logoOLS{
    width: 50px;
}

#nameOLS a{
    font-family: 'Pacifico', cursive;
    font-size: 30px;
}

#nameOLS_logout a{
    font-family: 'Pacifico', cursive;
    font-size: 15px;
}
</style>
