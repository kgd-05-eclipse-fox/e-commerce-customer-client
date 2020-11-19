<template>
  <div>
    <!-- * Start of List History -->
    <div class="mt-5 container" v-if="histories.length > 0">
      <h1 class="text-center">My Purchase History</h1>
      <div class="row pt-5">
        <div class="col-12 overflow-auto" style="max-height: 80vh;">
          <HistoryCard
            v-for="history in histories"
            :key="history.id"
            :history="history"
          ></HistoryCard>
        </div>
      </div>
    </div>
    <!-- * Else -->
    <div v-else class="container text-center mt-5">
      <h1>You don't have any history</h1>
    </div>
  </div>
</template>

<script>
import HistoryCard from '@/components/HistoryCard.vue'

export default {
  name: 'History',
  components: {
    HistoryCard
  },
  computed: {
    histories () {
      return this.$store.state.histories
    }
  }
}
</script>
