<template>
  <div>
    <Navbar/>
    <h1 class="mt-5 pt-5">Transaction History</h1>
    <div class="container pt-2">
      <div class="row">
        <div class="col-7">
          <div v-for="history in this.$store.state.histories" :key="history.id" class="card mb-2">
            <div class="row">
              <div class="col-4">
                <img :src="history.Product.image_url" :alt="history.Product.name" width="150vh">
              </div>
              <div class="col-8">
                <h4>
                  {{history.Product.name}}
                </h4>
                <strong>Rp. {{rpFormat(history.Product.price)}} x {{history.qty}}</strong><br>
                <strong>Total: Rp. {{rpFormat(history.Product.price * history.qty)}}</strong><br>
                <div class="card-footer bg-white">
                <strong style="float: right; font-size: smaller" class="mt-3">{{dateFormat(history.updatedAt)}}</strong><br>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="this.$store.state.histories.length > 0" class="col-4">
          <div class="card">
            <div class="card-title">
              <h4>Total Spent</h4>
              <hr>
            </div>
            <div class="card-body mb-4">
              <h5 class="totalspent">Rp. {{rpFormat(this.$store.state.totalSpent)}}</h5>
            </div>
          </div>
        </div>
      </div>
      <div v-if="this.$store.state.histories.length <= 0" class="container bg-light rounded shadow-lg py-5">
        <h1 style="color: black !important;">You haven't bought anything.</h1>
        <router-link to="/" class="btn btn-dark mt-3 hvr-shutter-out-horizontal">Back to Home</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
  name: 'HistoryPage',
  components: {
    Navbar
  },
  beforeCreate () {
    this.$store.dispatch('getHistory')
    if (localStorage.token) {
      this.$store.commit('changeLoginStatus', true)
    } else {
      this.$store.commit('changeLoginStatus', false)
    }
  },
  methods: {
    rpFormat (num) {
      return new Intl.NumberFormat('id').format(num)
    },
    dateFormat (date) {
      const o = new Intl.DateTimeFormat('id', {
        timeStyle: 'short',
        dateStyle: 'long'
      })
      return o.format(new Date(date))
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Subrayada&display=swap');
h1, h4 {
  font-family: 'Space Mono', monospace;
  color: white;
}
h4 {
  color: black !important;
}
.totalspent {
  font-family: 'Montserrat Subrayada', sans-serif;
  font-size: 35px;
}
.hvr-shutter-out-horizontal {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  background: black;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}
.hvr-shutter-out-horizontal:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: navy;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transform-origin: 50%;
  transform-origin: 50%;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.hvr-shutter-out-horizontal:hover, .hvr-shutter-out-horizontal:focus, .hvr-shutter-out-horizontal:active {
  color: rgb(255, 255, 255);
}
.hvr-shutter-out-horizontal:hover:before, .hvr-shutter-out-horizontal:focus:before, .hvr-shutter-out-horizontal:active:before {
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}
</style>
