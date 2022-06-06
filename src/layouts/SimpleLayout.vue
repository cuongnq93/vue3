<script setup>
import { useI18n } from 'vue-i18n'
import DefaultHeader from '@organisms/DefaultHeader.vue'
import Breadcrumb from '@organisms/Breadcrumb.vue'

const { t } = useI18n()
</script>
<template>
  <a-layout class="default-layout">
    <a-layout-header>
      <default-header />
    </a-layout-header>
    <a-layout-content class="container mx-auto">
      <breadcrumb />
      <div class="content"><router-view /></div>
    </a-layout-content>
    <a-layout-footer class="text-center">
      {{ t('app.footer') }}
    </a-layout-footer>
  </a-layout>
</template>
