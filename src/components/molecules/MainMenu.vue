<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import findIndex from 'lodash/findIndex'

const route = useRoute()
const router = useRouter()

const selectedKeys = ref([0])
const menuItems = [
  {
    title: 'Trang chủ',
    router: 'dashboard'
  },
  {
    title: 'Quản lý thành viên',
    router: 'user'
  }
]

const handleMenuChange = async (e) => {
  if (e.key != undefined) {
    const menu = menuItems[e.key] || null
    await router.push({ name: menu.router })
  }
}

const updateSelectedKey = (key = false) => {
  if (key === false) {
    const index = findIndex(menuItems, { router: route.name })
    key = index < 0 ? 0 : index
  }
  selectedKeys.value = [key]
}

onMounted(() => {
  updateSelectedKey()
})

watch(route, () => {
  updateSelectedKey()
})
</script>
<template>
  <a-menu
    :selectedKeys="selectedKeys"
    theme="dark"
    mode="horizontal"
    :style="{ lineHeight: '64px' }"
    @click="handleMenuChange"
  >
    <a-menu-item v-for="(item, index) in menuItems" :key="index">
      {{ item.title }}
    </a-menu-item>
  </a-menu>
</template>
