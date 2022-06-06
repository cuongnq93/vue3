import { fileURLToPath, URL } from 'url'

import vue from '@vitejs/plugin-vue'
import { defineConfig, loadEnv, splitVendorChunkPlugin } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, './', '')
  return {
    plugins: [
      vue(),
      eslintPlugin(),
      splitVendorChunkPlugin(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            title: env.APP_TITLE
          }
        }
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@components': fileURLToPath(
          new URL('./src/components', import.meta.url)
        ),
        '@atoms': fileURLToPath(
          new URL('./src/components/atoms', import.meta.url)
        ),
        '@molecules': fileURLToPath(
          new URL('./src/components/molecules', import.meta.url)
        ),
        '@organisms': fileURLToPath(
          new URL('./src/components/organisms', import.meta.url)
        ),
        '@templates': fileURLToPath(
          new URL('./src/components/templates', import.meta.url)
        ),
        '@layouts': fileURLToPath(new URL('./src/layouts', import.meta.url)),
        '@pages': fileURLToPath(new URL('./src/pages', import.meta.url))
      }
    },
    envPrefix: 'APP',
    build: {
      chunkSizeWarningLimit: 500,
      terserOptions: {
        sourceMap: true
      },
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              if (id.includes('ant-design-vue')) {
                return 'vendor_antd'
              }

              return 'vendor' // all other package goes here
            }
          }
        }
      }
    }
  }
})
