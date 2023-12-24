<script lang="ts" setup>
const props = defineProps(['bestellungen'])
const audio = ref<HTMLAudioElement>()

// wenn bestellungen sich ändern, dann soll ein sound abgespielt werden
watch(() => props.bestellungen.length, () => {
  console.log('bestellungen changed')
  audio.value?.play()
})

onMounted(() => {
  audio.value?.load()
})
</script>

<template>
  {{ props.bestellungen.length }}
  <audio src="/notification.mp3" ref="audio" preload="auto"/>
</template>

