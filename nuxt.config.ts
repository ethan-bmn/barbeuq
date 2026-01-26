// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
    modules: ['@nuxt/image', '@nuxt/eslint'],
    ssr: true,
    devtools: { enabled: true },
    compatibilityDate: '2025-07-15',
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
