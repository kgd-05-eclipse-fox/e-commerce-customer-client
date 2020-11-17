<template>
  <div id="navBar">
    <nav class="mb-1 navbar navbar-expand-lg navbar-dark secondary-color lighten-1 shadowNav bgNav fixed-top" style="background: linear-gradient(to right, #404E4D, #62BEC1);">
        <!-- <a class="navbar-brand" href="#"><img id="logoOLS" class="logo-nav" src="./logoOLS.png" alt=""></a> -->
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
            <li id="nameOLS" class="nav-item active">
                <a class="nav-link" href="#">Sainapa-store</a>
            </li>
            <li class="nav-item active mt-3">
                <a id="add-todo" class="nav-link" href="#">Add Product<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item dropdown mt-3">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Other</a>
                <div class="dropdown-menu dropdown-secondary">
                <a class="dropdown-item" href="#">test 1</a>
                <a class="dropdown-item" href="#">test 2</a>
                <a class="dropdown-item" href="#">test 3</a>
                <a class="dropdown-item" href="#">test 4</a>
                </div>
            </li>
            </ul>
            <ul class="navbar-nav ml-auto nav-flex-icons">
                <!--Log out-->
                <li id="nameOLS_logout" class="nav-item mt-2">
                    <a v-on:click.prevent="logout()" id="btn-logout" class="nav-link" href="#">Log Out</a>
                </li>
              </ul>
          </div>
      </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style>

</style>
