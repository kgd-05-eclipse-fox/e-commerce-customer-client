<template>
  <div>
    <div class="container">
        <div class="d-flex justify-content-center align-items-center">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title" style="justify-self: center; font-size: -webkit-xxx-large">Your History Transaction</h5>
              <table class="table table-striped" style="width: 1000px;">
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Image</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                    <tr v-for="history in histories" :key="history.id">
                        <td>{{history.product}}</td>
                        <td><img :src="history.image_url" alt="image product" height="150px"></td>
                        <td>Rp. {{history.price}}</td>
                        <td>{{history.qty}}</td>
                    </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HistoryTable',
  computed: {
    histories () {
      return this.$store.state.histories
    }
  }
}
</script>

<style>

</style>
