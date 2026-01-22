<script setup lang="ts">
const route = useRoute()

const players = String(route.query.players).split(',')
const gameMode = String(route.query.gamemode)
const penalties = String(route.query.penalties).split(',').map(p => Number(p))

provide('players', players)
provide('gameMode', gameMode)
provide('penalties', penalties)

const gameTypes: { [key: string]: string } = {
    'classic': 'sequential',
    'truth-or-dare': 'truth-or-dare',
    'autobahn': 'autobahn',
}
const gameType = ref<string | null>(gameTypes[gameMode] || null)

const managers: { [key: string]: Component } = {
    'sequential': defineAsyncComponent(() => import('@/components/managers/sequential.vue')),
    'truth-or-dare': defineAsyncComponent(() => import('@/components/managers/truth-or-dare.vue')),
    'autobahn': defineAsyncComponent(() => import('@/components/managers/autobahn.vue')),
}

const currentManager = computed(() => {
    return managers[gameType.value!] ?? null
})

onMounted(() => {
    if (!gameType.value || !players || Number.isNaN(penalties[0]) || Number.isNaN(penalties[1])) {
        console.log('Either you\'re tinkering with some stuff, or something has gone really wrong.')
        useRouter().push('/')
        return
    }
})
</script>

<template>
    <div class="flex justify-center items-center h-full">
        <component :is="currentManager" />
    </div>
</template>
