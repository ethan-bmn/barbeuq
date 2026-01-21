<script setup lang="ts">
import Sequential from "~/components/game-managers/sequential.vue";
const route = useRoute()

const players = String(route.query.players).split(',')
const gamemode = String(route.query.gamemode)
const gameTypes: { [key: string]: string } = {
    'classic': 'sequential',
    'truth-or-dare': 'truth-or-dare',
    'autobahn': 'autobahn',
}
const gameType = ref(gameTypes[gamemode])

onMounted(() => {
    if (!Object.keys(gameTypes).includes(gamemode) || !players) {
        useRouter().push('/')
        return
    }
})

console.log(players)
</script>

<template>
    <div class="flex justify-center w-full">
        <component :is="'sequential'" />
    </div>
</template>
