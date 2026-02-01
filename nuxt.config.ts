// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
import pkg from './package.json'

export default defineNuxtConfig({
    modules: ['@nuxt/image', '@nuxt/eslint'],
    ssr: true,
    devtools: { enabled: true },
    compatibilityDate: '2025-07-15',
    nitro: {
        baseURL: import.meta.baseURL,
        prerender: {
            crawlLinks: false,
            failOnError: false,
        },
    },
    vite: {
        plugins: [tailwindcss()],
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/style/global.scss"; @use "@/assets/style/_variables.scss" as *;',
                },
            },
        },
    },
    eslint: {
        config: {
            stylistic: {
                indent: 4,
            },
        },
    },
    runtimeConfig: {
        public: {
            clientVersion: pkg.version,
        },
    },
})
