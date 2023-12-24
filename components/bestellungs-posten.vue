<script lang="ts" setup>
defineProps(['posten'])
</script>

<template>
  <v-chip class="bestellungs-posten">
    <div class="w-5">{{ posten.menge }}x</div>
    <div class="w-full">{{ posten.gericht.name }}</div>
  </v-chip>
</template>

<style scoped>
.bestellungs-posten {
  @apply my-1 border-b border-gray-200 flex;
}
</style>
