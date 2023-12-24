<script lang="ts" setup>
defineProps(['bestellungen'])
const emit = defineEmits(['refresh'])

const headers = [
  {title: 'Zeit', value: 'abholzeit', sortable: true},
  {title: 'Gastname', value: 'name'},
  {title: '#', value: 'id'},
  {title: 'Gesamtpreis', value: 'summe', align: 'end'},
  {title: 'Zahlung', value: 'bezahlt'},
  {title: 'Status', value: 'status', sortable: true},
]

// const timeAgo = (date: Date) => {
//   const now = new Date()
//   const diff = date.getTime() - now.getTime()
//   const minutes = Math.floor(diff / 1000 / 60)
//   if (minutes < 60) {
//     return `${minutes}min`
//   } else {
//     const hours = Math.floor(minutes / 60)
//     if (hours < 24) {
//       return `${hours}h`
//     } else {
//       const days = Math.floor(hours / 24)
//       return `${days}d`
//     }
//   }
// }
const euro = (value: number) => {
  if (typeof value !== 'number') return value
  return value.toFixed(2).replace('.', ',')
}
</script>

<template>
  <v-data-table :headers="headers" :items="bestellungen" items-per-page="4">
    <template v-slot:item.abholzeit="{ item }">
      {{ new Date(item.abholzeit).toLocaleTimeString('de-de', {hour: '2-digit', minute: '2-digit'}) }}
    </template>
    <template v-slot:item.summe="{ item }"> {{ euro(item.summe) }} EUR</template>
  </v-data-table>
</template>
