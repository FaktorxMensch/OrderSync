<script lang="ts" setup>
defineProps(['posten'])
</script>

<template>
  <div class="posten">
    <img class="aspect-square w-20" :src="posten.gericht.bild_url"/>
    <div class="flex-1">
      <h2>{{ posten.gericht.name }}</h2>
      <span class="text-neutral-500">{{ posten.gericht.kategorie }}</span>
    </div>
    <div class="flex-1 text-end">{{ posten.menge }}x</div>
  </div>
</template>

<style scoped>
.posten {
  @apply flex gap-2 items-center border-b border-neutral-700 p-2 px-4 ;

  img {
    @apply rounded-md;
  }

  h2 {
    @apply text-lg;
  }
}
</style>
