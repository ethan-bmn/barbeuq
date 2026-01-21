<script setup lang="ts">
useHead({
    title: 'BarbeuQ - Jeu de cartes entre amis',
    meta: [
        {
            name: 'description',
            content: 'BarbeuQ - Jeu de carte entre amis... ou plus !',
        },
        {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0',
        },
    ],
    htmlAttrs: {
        lang: 'fr',
    },
})

useSeoMeta({
    ogTitle: 'BarbeuQ - Jeu de cartes entre amis',
    ogType: 'website',
    ogDescription: 'Jeu de cartes entre amis, parfait pour accompagner ta soirée barbecue du début à la fin ;-)',
    ogUrl: 'https://barbeuq.stellaar.fr',
    ogSiteName: 'BarbeuQ',
    ogLocale: 'fr_FR',
})
</script>

<template>
    <div>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<style>
@import 'tailwindcss';
</style>