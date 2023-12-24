<script lang="ts" setup>
defineProps(['bestellungen'])
const emit = defineEmits(['refresh'])
const headers = [
  {title: 'Nr.', value: 'id'},
  {title: 'Name', value: 'name'},
  {title: 'Abholzeit', value: 'abholzeit', sortable: true},
  // {title: 'Rufnummer', value: 'rufnummer'},
  // {title: 'Vegan', value: 'vegan'},
  // {title: 'Kommentar', value: 'kommentar'},
  // {title: 'Vor Ort', value: 'vor_ort'},
  {title: 'Posten', value: 'posten'},
  {title: 'Summe', value: 'summe'},
  {title: 'Status', value: 'status', sortable: true},
  {title: 'Aktionen', value: 'actions'}
]

// funktion die datumzeit bekommt, und zurück gibt in wieivel minuten das ist oder vor wieviel minuten das war
const timeAgo = (date: Date) => {
  const now = new Date()
  const diff = date.getTime() - now.getTime()
  const minutes = Math.floor(diff / 1000 / 60)
  if (minutes < 60) {
    return `${minutes}min`
  } else {
    const hours = Math.floor(minutes / 60)
    if (hours < 24) {
      return `${hours}h`
    } else {
      const days = Math.floor(hours / 24)
      return `${days}d`
    }
  }
}

// funktion die double zu euro mit 2 nachkommastellen umwandelt
const euro = (value: number) => {
  if (typeof value !== 'number') {
    return value
  }

  return value.toFixed(2).replace('.', ',') + '€';
}

</script>

<template>
  <v-data-table
      :headers="headers"
      :items="bestellungen"
  >
    <template v-slot:item.abholzeit="{ item }">
      <v-chip text-color="white">
        {{ timeAgo(new Date(item.abholzeit)) }}
      </v-chip>
    </template>
    <template v-slot:item.summe="{ item }">
      <v-chip text-color="white">
        {{ euro(item.summe) }}
      </v-chip>
    </template>
    <template v-slot:item.posten="{ item }">
      <bestellungs-posten v-for="posten in item.posten" :posten="posten" :key="posten.id"/>
      <v-icon v-if="item.vegan" color="green" icon="mdi-leaf"/>
      <span v-if="item.kommentar" density="compact" type="info">
        <v-icon left>mdi-comment</v-icon>
        {{ item.kommentar }}
      </span>
    </template>

    <template v-slot:item.actions="{ item }">
      <v-btn icon @click="emit('refresh')">
        <v-icon>mdi-refresh</v-icon>
      </v-btn>
    </template>
  </v-data-table>
</template>

<style scoped></style>
