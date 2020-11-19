<template>
  <div>
    <Navbar></Navbar>
    <HistoryTable></HistoryTable>
  </div>
</template>

<script>
import HistoryTable from '@/components/HistoryTable.vue'
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'History',
  components: {
    HistoryTable, Navbar
  },
  beforeCreate () {
    this.$store.dispatch('fetchHistory')
    const token = localStorage.getItem('access_token')
    if (token) {
      this.$store.commit('SET_LOGIN_STATUS', true)
    } else {
      this.$store.commit('SET_LOGIN_STATUS', false)
    }
  }
}
</script>

<style>

</style>
