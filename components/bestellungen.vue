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

const click = (item: any) => {
  // $valid_statuses = array('Neu', 'Erhalten', 'Bearbeitung', 'Abholbereit', 'Abgeholt', 'Storniert');
  if (item.status === 'Neu') {
    item.status = 'Erhalten'
  } else if (item.status === 'Erhalten') {
    item.status = 'Bearbeitung'
  } else if (item.status === 'Bearbeitung') {
    item.status = 'Abholbereit'
  } else if (item.status === 'Abholbereit') {
    item.status = 'Abgeholt'
  } else if (item.status === 'Abgeholt') {
    item.status = 'Storniert'
  } else if (item.status === 'Storniert') {
    item.status = 'Neu'
  }
}
</script>

<template>
  <v-data-table :headers="headers" :items="bestellungen" items-per-page="4">
    <template v-slot:item="{ item }">
      <tr :class="item.status" @click="click(item)">
        <td>{{ new Date(item.abholzeit).toLocaleTimeString('de-de', {hour: '2-digit', minute: '2-digit'}) }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.id }}</td>
        <td class="text-end">{{ euro(item.summe) }} EUR</td>
        <td>{{ item.bezahlt ? 'bezahlt' : 'offen' }}</td>
        <td>{{ item.status }}</td>
      </tr>
    </template>
  </v-data-table>
</template>
<style scoped>
tr.Neu {
  animation: blinking 1s infinite;
}

tr.Erhalten {
  background: rgba(255, 255, 255, 0.1);
}

tr.Bearbeitung {
  background: rgba(0, 157, 255, 0.1);
}

tr.Abholbereit {
  background: rgba(23, 254, 2, 0.1);
}

tr.Storniert {
  text-decoration: line-through;
}

tr.Abgeholt,tr.Storniert {
  opacity: 0.1;
}

@keyframes blinking {
  0% {
    background-color: #7770;
  }
  50% {
    background-color: #7773;
  }
  100% {
    background-color: #7770;
  }
}
</style>
