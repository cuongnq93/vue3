import { notification } from 'ant-design-vue'
import { useI18n } from 'vue-i18n'

export default function useNotification() {
  const { t } = useI18n()

  const pushNotification = (mesasge, type = 'info') => {
    notification[type]({
      message: t('app.notification'),
      description: t(`notification.${mesasge}`)
    })
  }

  return {
    pushNotification
  }
}
