<script setup>
import Actionbar from "~/components/actionbar.vue";

const {
  data, refresh, loading, pending
} = await useLazyFetch('https://fatima-dresden.de/wp-content/plugins/fatima_api_status_plugin/api.php?api_key=ad31f2b0-8b7c-11eb-8dcd-0242ac17841741897830003')

// when data changes, save request_time in store
const orders = useOrdersStore()
watch(data, () => {
  orders.request_time = data.value.request_time
})

setInterval(refresh, 1000 * 60 * 1)
</script>
<template>
  <v-theme-provider theme="dark">
    <v-app>
      <actionbar/>
      <v-main v-if="data !== null">
        <v-progress-circular v-if="data.pending" indeterminate/>
        <bestellungen :bestellungen="data.bestellungen" @refresh="refresh" v-else/>
        <notification-sound :bestellungen="data.bestellungen"/>
      </v-main>
    </v-app>
  </v-theme-provider>
</template>
