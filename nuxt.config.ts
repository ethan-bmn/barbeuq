// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
import pkg from './package.json'

export default defineNuxtConfig({
    modules: ['@nuxt/image', '@nuxt/eslint', '@nuxt/ui'],
    plugins: ['~/plugins/error-handler.ts'],
    devtools: { enabled: true },
    css: ['~/assets/style/app.css'],
    runtimeConfig: {
        public: {
            clientVersion: pkg.version,
        },
    },
    compatibilityDate: '2025-07-15',
    nitro: {
        preset: 'bun',
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
})
