<script setup>
const {
  data, refresh, loading, pending
} = await useLazyFetch('https://fatima-dresden.de/wp-content/plugins/fatima_api_status_plugin/api.php?api_key=ad31f2b0-8b7c-11eb-8dcd-0242ac17841741897830003')

setInterval(refresh, 1000 * 60 * 5)
</script>

<template>
  <v-app>
    <v-app-bar>
      <v-toolbar-title>Bestellungen</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-chip color="green" text-color="white">{{ new Date(data?.request_time).toLocaleString('de-de') }}</v-chip>
      <v-btn icon="mdi-refresh" @click="refresh"/>
    </v-app-bar>
    <v-main>
      <v-progress-circular v-if="data.pending" indeterminate/>
      <bestellungs-liste :bestellungen="data.bestellungen" @refresh="refresh" v-else/>
    </v-main>
  </v-app>
</template>
