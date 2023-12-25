<script lang="ts" setup>
defineProps(['bestellung'])
const emit = defineEmits(['close'])
</script>

<template>
  <div class="full-dialog" v-if="bestellung?.id">
    <header>
      <h1
          class="text-2xl text-white font-bold"
      >Bestellung {{ bestellung.id }}</h1>

      <v-btn-toggle
          v-model="bestellung.status"
          divided
          variant="outlined"
          @click="emit('close')"
          mandatory
      >
<!--        <v-btn value="Neu">Neu</v-btn>-->
        <v-btn value="Erhalten">Erhalten</v-btn>
        <v-btn value="Bearbeitung">Bearbeitung</v-btn>
        <v-btn value="Abholbereit">Abholbereit</v-btn>
        <v-btn value="Abgeholt">Abgeholt</v-btn>
        <v-btn value="Storniert">Storniert</v-btn>
      </v-btn-toggle>

    </header>
    <main>
      {{ bestellung }}
    </main>
    <footer>
      <v-btn :href="`tel:${bestellung.rufnummer}`" prepend-icon="mdi-phone">Anrufen</v-btn>
      <v-spacer/>
      <v-btn @click="emit('close')" prepend-icon="mdi-close">Schließen
      </v-btn>
    </footer>
  </div>
</template>

<style scoped>
.full-dialog {
  @apply absolute inset-0 z-50 bg-neutral-800 mt-16;

  .v-btn {
    @apply w-1/5;
  }

  header {
    @apply p-4;
  }

  footer {
    @apply absolute bottom-0 p-4 flex w-full;
  }
}
</style>
