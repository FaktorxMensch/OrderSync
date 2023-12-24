<script lang="ts" setup>
defineProps(['bestellung'])
const emit = defineEmits(['close'])
</script>

<template>
  <div class="full-dialog">
    <h1>Bestellung {{ bestellung.id }}</h1>
    <v-btn @click="emit('close')">Schließen</v-btn>
  </div>
</template>

<style>
.full-dialog {
  @apply absolute inset-0 z-50 bg-neutral-800 mt-16;
}
</style>
