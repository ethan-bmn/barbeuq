<script setup lang="ts">
import sausage from '~/assets/img/sausage.png'
import truthOrDare from '~/assets/img/truth-or-dare.png'
import autoroute from '~/assets/img/autoroute.svg'

useHead({
    link: [
        {
            rel: 'canonical',
            href: 'https://barbeuq.stellaar.fr/',
        },
    ],
    title: 'Accueil - BarbeuQ',
})

const isLoading: Ref<boolean> | undefined = inject('isLoading')
</script>

<template>
    <div class="flex justify-center w-full">
        <Transition
            name="fade"
            mode="out-in"
        >
            <div
                v-if="isLoading"
                class="quicksand font-bold text-3xl p-5 absolute text-center left-0 w-full"
            >
                Chargement...
                <UProgress
                    animation="swing"
                    class="w-[66%] mx-auto mt-8"
                    :ui="{
                        base: ['progress-base'],
                        indicator: ['progress-indicator'],
                    }"
                />
            </div>
            <div
                v-else
                class="border-2 border-[#1a1a1a] py-4 mx-5 rounded-2xl h-full overflow-y-auto max-h-100 relative z-2"
                style="scrollbar-width: none;"
            >
                <div class="grid grid-rows-1 gap-5 w-full">
                    <GamemodeLink
                        title="Classique"
                        :img="sausage"
                        description="Cartes à boire tranquilles, pour bien commencer."
                        to="/setup?gamemode=classic"
                        :disable-on-prod="false"
                    />
                    <GamemodeLink
                        title="Action ou vérité"
                        :img="truthOrDare"
                        description="Des questions et des actions"
                        to="/setup?gamemode=truth-or-dare"
                    />
                    <GamemodeLink
                        title="Autobahn"
                        :img="autoroute"
                        description="La meilleure défense, c'est l'attaque."
                        to="/setup?gamemode=autobahn"
                    />
                </div>
            </div>
        </Transition>
    </div>
</template>