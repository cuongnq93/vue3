<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
<template>
  <div class="logo">{{ t('app.title') }}</div>
</template>
