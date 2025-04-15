import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

import react from '@astrojs/react'

import cloudflare from '@astrojs/cloudflare'

export default defineConfig({
  output: 'server',
  integrations: [react()],
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      // Use react-dom/server.edge instead of react-dom/server.browser for React 19.
      // Without this, MessageChannel from node:worker_threads needs to be polyfilled.
      // @ts-ignore
      alias: import.meta.env.PROD && {
        'react-dom/server': 'react-dom/server.edge',
      },
    },
  },
})
