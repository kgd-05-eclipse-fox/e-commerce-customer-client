<template>
  <div>
    <h1>This is Products</h1>
    {{ products }}
  </div>
</template>

<script>
export default {
  name: 'Product',
  computed: {
    products () {
      return this.$store.state.products
    }
  }
}
</script>
