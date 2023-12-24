<script lang="ts" setup>
defineProps(['bestellung'])
const emit = defineEmits(['close'])
</script>

<template>
  <div class="full-dialog">
    <header>
      <h1
          class="text-2xl text-white font-bold"
      >Bestellung {{ bestellung.id }}</h1>
    </header>
    <main>

    </main>
    <footer>
      <v-btn @click="emit('close')">Schließen</v-btn>
    </footer>
  </div>
</template>

<style scoped>
.full-dialog {
  @apply absolute inset-0 z-50 bg-neutral-800 mt-16;

  header {
    @apply p-4;
  }

  footer {
    @apply absolute bottom-0 right-0 p-4;
  }
}
</style>
