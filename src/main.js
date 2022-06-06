import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue'
import { createI18n } from 'vue-i18n'
import languages from '@/locales'
import App from '@/App.vue'
import router from '@/router'

const locale = import.meta.env.APP_DEFAULT_LANGUAGE
const app = createApp(App)
const i18n = createI18n({
  legacy: false,
  locale,
  messages: languages
})

app.use(Antd)
app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
