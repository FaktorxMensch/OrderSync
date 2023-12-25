<script lang="ts" setup>
import {useOrdersStore} from "~/stores/orders";

defineProps(['bestellungen'])
const emit = defineEmits(['refresh'])

const headers = [
  {title: 'Zeit', value: 'abholzeit', sortable: true},
  {title: 'Gastname', value: 'name'},
  {title: '#', value: 'id'},
  {title: 'Gesamtpreis', value: 'summe', align: 'end'},
  {title: 'Status', value: 'status', sortable: true},
]

const euro = (value: number) => {
  if (typeof value !== 'number') return value
  return value.toFixed(2).replace('.', ',')
}

const orders = useOrdersStore()
const openBestellung = (item: any) => {
  // wenn status Neu, setze auf Erhalten
  if (item.status === 'Neu') {
    item.status = 'Erhalten'
    return
  }
  orders.openBestellung(item)
}
</script>

<template>
  <bestellung-dialog/>
  <v-data-table :headers="headers" :items="bestellungen" items-per-page="4">
    <template v-slot:item="{ item }">
      <tr :class="item.status" @click="openBestellung(item)">
        <td>{{ new Date(item.abholzeit).toLocaleTimeString('de-de', {hour: '2-digit', minute: '2-digit'}) }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.id }}</td>
        <td class="text-end">{{ euro(item.summe) }} EUR</td>
        <td>{{ item.status }}</td>
      </tr>
    </template>
  </v-data-table>
</template>

<style>
tr.Neu, .v-btn.Neu {
  animation: blinking 1s infinite;
}

tr.Erhalten {
  background: rgba(255, 255, 255, 0.1);
}

tr.Bearbeitung {
  background: #2E3F52;
  color: #4994EA;
}

tr.Abholbereit {
  background: #344432;
  color: #66AD5B;
}

tr.Storniert {
  text-decoration: line-through;
}

tr.Abgeholt, tr.Storniert {
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
