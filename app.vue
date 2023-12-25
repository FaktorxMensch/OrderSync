<script setup>
import Actionbar from "~/components/actionbar.vue";

const {
  data, refresh, loading, pending
} = await useLazyFetch('https://fatima-dresden.de/wp-content/plugins/fatima_api_status_plugin/api.php?api_key=ad31f2b0-8b7c-11eb-8dcd-0242ac17841741897830003')

const addRandomOrder = async () => {
  data.value.bestellungen.push({
    id: Math.floor(Math.random() * 1000),
    abholzeit: new Date().toISOString(),
    name: 'Zufälliger Gast',
    summe: Math.random() * 100,
    bezahlt: Math.random() > 0.5,
    status: 'Neu',
    posten: [
      {
        id: Math.floor(Math.random() * 1000),
        gericht: {
          id: Math.floor(Math.random() * 1000),
          name: 'Zufälliges Gericht'
        },
        menge: Math.floor(Math.random() * 10)
      }
    ]
  })
}

setInterval(refresh, 1000 * 60 * 5)

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
