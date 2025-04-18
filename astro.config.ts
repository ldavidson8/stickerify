import { defineConfig, fontProviders } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

import react from '@astrojs/react'

import cloudflare from '@astrojs/cloudflare'

import Icons from 'unplugin-icons/vite'

export default defineConfig({
  experimental: {
    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: 'Pretendard',
        cssVariable: '--font-pretendard',
      },
      {
        provider: fontProviders.fontsource(),
        name: 'Roboto Mono',
        cssVariable: '--font-roboto-mono',
      },
    ],
  },
  output: 'server',
  integrations: [react()],
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
    imageService: 'compile',
  }),
  vite: {
    plugins: [
      tailwindcss(),
      Icons({
        compiler: 'jsx',
        jsx: 'react',
        autoInstall: true,
      }),
      Icons({
        compiler: 'astro',
        autoInstall: true,
      }),
    ],
    resolve: {
      // Use react-dom/server.edge instead of react-dom/server.browser for React 19.
      // Without this, MessageChannel from node:worker_threads needs to be polyfilled.
      alias: {
        'icons:react': '~icons',
        'icons:astro': '~icons',
        ...(import.meta.env.PROD
          ? { 'react-dom/server': 'react-dom/server.edge' }
          : {}),
      },
    },
  },
})
