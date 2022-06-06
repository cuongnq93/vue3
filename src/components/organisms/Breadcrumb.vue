<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const route = useRoute()

const breadcrumbs = computed(() => {
  const { title, breadcrumbs } = route.meta
  if (breadcrumbs === true) {
    return [
      {
        title
      }
    ]
  }
  if (breadcrumbs?.length > 0) {
    return breadcrumbs
  }

  return []
})
</script>

<template>
  <a-breadcrumb class="my-4">
    <a-breadcrumb-item>
      <router-link :to="{ path: '/' }">
        {{ t('app.home') }}
      </router-link>
    </a-breadcrumb-item>
    <a-breadcrumb-item v-for="(item, index) in breadcrumbs" :key="index">
      <span v-if="item.router">
        <router-link :to="{ name: item.router }">{{ item.title }}</router-link>
      </span>
      <span v-else>{{ item.title }}</span>
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>
