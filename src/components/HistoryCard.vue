<template>
<div class="card shadow mb-3" style="max-height: 25vh;">
  <div class="mb-1">
    <div class="row">
      <div class="col-4">
        <img class="card-img-top" :src="history.image_url" :alt="`Image of ${history.name}`">
      </div>
      <div class="col-8">
        <p><b>Name:</b> {{ history.name }}</p>
        <p><b>Price:</b> {{ totalPrice }}</p>
        <p><b>Quantity:</b> {{ history.qty }}</p>
        <p><b>Date:</b> {{ date }}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'HistoryCard',
  props: ['history'],
  computed: {
    totalPrice () {
      return `IDR ${this.history.total_price}`
    },
    date () {
      const date = new Date(this.history.createdAt)
      const year = date.getFullYear()
      let month = date.getMonth() + 1
      let dt = date.getDate()

      if (dt < 10) dt = '0' + dt
      if (month < 10) month = '0' + month
      return dt + '-' + month + '-' + year
    }
  }
}
</script>

<style scoped>
.card {
  height: 30rem;
}

.card-img-top {
  width: 80%;
  object-fit: cover;
}

.qty .count {
  display: inline-block;
  vertical-align: top;
  font-size: 15px;
  padding: 0 2px;
  min-width: 35px;
  text-align: center;
}
.qty .plus {
  cursor: pointer;
  display: inline-block;
  vertical-align: top;
  color: white;
  width: 20px;
  height: 20px;
  font: 20px/1 Arial,sans-serif;
  text-align: center;
  border-radius: 50%;
}
.qty .minus {
  cursor: pointer;
  display: inline-block;
  vertical-align: top;
  color: white;
  width: 20px;
  height: 20px;
  font: 20px/1 Arial,sans-serif;
  text-align: center;
  border-radius: 50%;
  background-clip: padding-box;
}
.minus:hover{
    background-color: #717fe0 !important;
}
.plus:hover{
    background-color: #717fe0 !important;
}
/*Prevent text selection*/
span{
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
}
input{
    border: 0;
    width: 2%;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
input:disabled{
    background-color:white;
}

</style>
