<script setup>
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

const orders = useOrdersStore()
const bestellung = computed(() => orders.bestellung)
</script>

<template>
  <v-theme-provider theme="dark">
    <v-app>
      <v-app-bar>
        <v-toolbar-title>{{ bestellung?.id ? `#${bestellung.id}` : 'Übersicht' }}</v-toolbar-title>
        <template v-if="bestellung?.id">
          <v-btn :href="`tel:${bestellung.rufnummer}`" prepend-icon="mdi-phone">Anrufen</v-btn>
          <v-btn icon="mdi-close" @click="orders.closeBestellung()"/>
        </template>
        <template v-else>
          <v-chip text-color="white">Stand {{
              new Date(data?.request_time).toLocaleTimeString('de-de', {
                hour: '2-digit',
                minute: '2-digit'
              })
            }}
          </v-chip>
          <v-btn icon="mdi-refresh" @click="refresh"/>
        </template>
      </v-app-bar>
      <v-main>
        <v-progress-circular v-if="data.pending" indeterminate/>
        <bestellungen :bestellungen="data.bestellungen" @refresh="refresh" v-else/>
      </v-main>
      <notification-sound :bestellungen="data.bestellungen"/>
    </v-app>
  </v-theme-provider>
</template>

<style>
</style>
