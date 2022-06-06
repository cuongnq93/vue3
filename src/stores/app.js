import { defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'app',
  state: () => ({
    isAuthenticated: false,
    currentUser: null
  }),
  getters: {},
  actions: {}
})
