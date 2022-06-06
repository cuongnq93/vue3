<script setup>
import { onMounted } from 'vue'
import AppLogo from '@molecules/AppLogo.vue'
import MainMenu from '@molecules/MainMenu.vue'

onMounted(() => {
  console.log('HEADER onMounted')
})
</script>

<template>
  <div class="container mx-auto">
    <app-logo />
    <main-menu />
  </div>
</template>
