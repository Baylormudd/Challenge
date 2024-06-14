<script>
import cardGrid from '@/components/cardGrid.vue'
export default {
  name: 'App',
  components: {
    cardGrid
  }
}
</script>

<template>
  <section id="app" class="section">
    <div
      class="container is-flex pt-5-desktop is-paddingless-mobile p-3 p-4-tablet is-flex-direction-column p-5-desktop">
      <div class="is-size-3 text-page-heading has-text-weight-bold"> Monthly Bookkeeping</div>
      <div class="is-size-5 text-page-subtitle pb-6">List of paid and outstanding invoices.</div>
      <cardGrid />
    </div>
  </section>
</template>

