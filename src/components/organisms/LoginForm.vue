<script setup>
import { reactive, toRaw } from 'vue'
import { useI18n } from 'vue-i18n'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import { Form } from 'ant-design-vue'
import useNotification from '@/hooks/useNotification'

const { t } = useI18n()
const { pushNotification } = useNotification()
const formState = reactive({
  username: '',
  password: ''
})

const { resetFields, validate, validateInfos } = Form.useForm(formState, {
  username: [
    {
      required: true,
      message: t('message.required', {
        field: t('field.username').toLowerCase()
      })
    }
  ],
  password: [
    {
      required: true,
      message: t('message.required', {
        field: t('field.password').toLowerCase()
      })
    }
  ]
})

const onSubmit = () => {
  validate()
    .then(() => {
      console.log(toRaw(formState))
    })
    .catch((err) => {
      console.log('validateInfos', validateInfos)
      console.log('error', err)
      pushNotification('updata_success', 'success')
    })
}
const onReset = () => {
  resetFields()
}
</script>
<template>
  <a-card :title="t('app.login_title')" class="login-block">
    <a-form :model="formState" autocomplete="off">
      <a-form-item v-bind="validateInfos.username" class="mb-4">
        <a-input
          v-model:value="formState.username"
          :placeholder="t('field.username')"
        >
          <template v-slot:prefix>
            <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item v-bind="validateInfos.password" class="mb-4">
        <a-input-password
          v-model:value="formState.password"
          type="password"
          :placeholder="t('field.password')"
        >
          <template v-slot:prefix>
            <LockOutlined style="color: rgba(0, 0, 0, 0.25)" />
          </template>
        </a-input-password>
      </a-form-item>
      <div class="form-action mb-4 text-center">
        <a-button type="primary" @click="onSubmit" size="large" class="mr-4">
          {{ t('button.login') }}
        </a-button>
        <a-button @click="onReset" size="large">
          {{ t('button.cancel') }}
        </a-button>
      </div>
      <div class="form-action text-center">
        <a href="/">Quên mật khẩu?</a>
      </div>
    </a-form>
  </a-card>
</template>
