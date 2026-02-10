<script setup lang="ts">
useHead({
    title: 'BarbeuQ - Jeu de cartes entre amis',
    meta: [
        {
            name: 'description',
            content: 'BarbeuQ - Jeu de carte entre amis.',
        },
        {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0',
        },
        {
            name: 'google-site-verification',
            content: 'uhn_4_itVnjix46qeV9CbIh-X9r50jBh50ZqJR775kM',
        },
    ],
    htmlAttrs: {
        lang: 'fr',
    },
})

useSeoMeta({
    ogTitle: 'BarbeuQ - Jeu de cartes entre amis',
    ogType: 'website',
    ogDescription: 'Jeu de cartes entre amis pour tes soirées barbecue.',
    ogUrl: 'https://barbeuq.stellaar.fr',
    ogSiteName: 'BarbeuQ',
    ogLocale: 'fr_FR',
})

const isLoading = ref(true)
provide('isLoading', isLoading)

function onAfterEnter() {
    window.dispatchEvent(new CustomEvent('onAfterEnter'))
}

onNuxtReady(() => {
    isLoading.value = false
})
</script>

<template>
    <UApp>
        <NuxtLayout>
            <NuxtPage
                :transition="{
                    onAfterEnter,
                }"
            />
        </NuxtLayout>
    </UApp>
</template>

<style>
@import 'tailwindcss';

body {
    background-color: #121212;
}
</style>
