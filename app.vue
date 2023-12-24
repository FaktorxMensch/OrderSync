<script setup>
const {
  data,
  refresh
} = await useLazyFetch('https://fatima-dresden.de/wp-content/plugins/fatima_api_status_plugin/api.php?api_key=ad31f2b0-8b7c-11eb-8dcd-0242ac17841741897830003')

setInterval(refresh, 1000 * 60 * 5)
</script>
<template>
  <h1>Bestellungen</h1>
  <div class="bestellungen">
  <bestellung v-for="item in data.bestellungen" :key="item.id" :item="item"/>
  </div>
  Refreshed: {{ data.request_time }}

  <button @click="refresh">Refresh</button>
</template>
