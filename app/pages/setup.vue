<script setup lang="ts">
import DualRange from '@/components/dual-range.vue'

const route = useRoute()

const gameMode = route.query.gamemode

const validGameModes = ['classic', 'truth-or-dare', 'autobahn']

const embersValues = ref<number[]>([1, 5])

const playerInput = ref('')
const inputValid = computed(() => {
    return playerInput.value
        && playerInput.value.length > 0
        && playerInput.value.trim().length > 0
        && playerInput.value.trimEnd().length === playerInput.value.length
        && playerInput.value.trimStart().length === playerInput.value.length
        && !players.value.includes(playerInput.value)
        && playerInput.value.length <= 15
})

const players: Ref<string[]> = ref(JSON.parse(localStorage.getItem('players') || '[]'))

const router = useRouter()

function syncLocalStorage() {
    localStorage.setItem('players', JSON.stringify(players.value))
}

function addPlayer() {
    if (!players.value.includes(playerInput.value)) {
        players.value.push(playerInput.value)
        playerInput.value = ''
        syncLocalStorage()
    }
}

function removePlayer(player: string) {
    players.value.splice(players.value.indexOf(player), 1)
    syncLocalStorage()
}

function play() {
    router.push(`/lobby?gamemode=${gameMode}&players=${players.value.join(',')}`)
}

onMounted(() => {
    if (!gameMode || typeof gameMode !== 'string' || !validGameModes.includes(gameMode)) {
        router.push('/')
    }
})
</script>

<template>
    <div>
        <div class="belanosima text-3xl text-center mb-3 w-[1/3%]">
            Qui joue ?
        </div>
        <form
            class="flex mx-auto mb-4 text-xl w-[80%]"
            @submit.prevent="addPlayer()"
        >
            <input
                v-model="playerInput"
                type="text"
                class="player-input rounded-lg belanosima px-3"
            >
            <button
                class="add-btn"
                type="submit"
                :disabled="!inputValid"
            >
                +
            </button>
        </form>
        <div class="w-[90%] mx-auto">
            <div
                class="bg-[#1a1a1a] py-4 mx-auto overflow-y-auto max-h-full relative z-2 w-full rounded-2xl px-7"
                style="scrollbar-width: none; height: 22vh;"
            >
                <div class="grid grid-rows-1 gap-5 w-full">
                    <div
                        v-for="player in players"
                        :key="player"
                        class="font-bold flex justify-between"
                    >
                        {{ player }}
                        <button
                            class="rounded-lg pb-1.5 px-2.5 text-red-600 font-normal hover:text-white transition duration-300 cursor-pointer"
                            @click="removePlayer(player)"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024">
                                <path
                                    fill="currentColor"
                                    d="m896.8 159.024l-225.277.001V71.761c0-40.528-33.008-72.496-73.536-72.496H426.003c-40.528 0-73.52 31.968-73.52 72.496v87.264h-225.28c-17.665 0-32 14.336-32 32s14.335 32 32 32h44.015l74.24 739.92c3.104 34.624 32.608 61.776 67.136 61.776h398.8c34.528 0 64-27.152 67.088-61.472l74.303-740.24h44.016c17.68 0 32-14.336 32-32s-14.32-31.985-32-31.985zM416.482 71.762c0-5.232 4.271-9.505 9.52-9.505h171.984c5.248 0 9.536 4.273 9.536 9.505v87.264h-191.04zm298.288 885.44c-.16 1.777-2.256 3.536-3.376 3.536h-398.8c-1.12 0-3.232-1.744-3.425-3.84l-73.632-733.856H788.45z"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        v-if="players.length === 0"
                        class="italic text-gray-500 text-center"
                    >
                        Aucun joueur ajouté.
                    </div>
                </div>
            </div>
            <div class="mt-3">
                <p class="text-center belanosima text-lg mb-3">
                    Nombre de sanctions : {{ embersValues[0] }} à {{ embersValues[1] }}
                </p>
                <DualRange
                    v-model="embersValues"
                    class="mx-auto block w-[75%]"
                />
                <button
                    class="play-btn text-3xl px-8 py-3 mx-auto mt-5"
                    :disabled="players.length < 2"
                    @click="play()"
                >
                    Jouer
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use "sass:color";

.play-btn {
    display: grid;
    background-color: $secondary;
    transition: ease-in-out 0.4s;
    z-index: 2;
    text-align: center;

    font-family: "Belanosima", sans-serif;
    font-style: normal;
    font-weight: 600;

    color: white;
    border-radius: var(--radius-xl);
    cursor: pointer;

    .inner-btn {
        grid-template-columns: 20% auto;
    }

    h1 {
        font-size: var(--text-2xl);
        text-align: start;
        line-height: 25px;
    }

    p {
        margin-top: var(--spacing);
        font-size: var(--text-xs);
        text-align: start;
    }
}

.play-btn:hover {
    box-shadow: 0 15px 30px rgba(194, 88, 18, 0.5);
    background-color: #3a3a3a;
    transform: translateY(-5px);
}

.play-btn:disabled {
    background-color: #1a1a1a;
    color: gray;
    box-shadow: none;
    transform: none;
    pointer-events: none;
}

.add-btn {
    display: grid;
    background-color: $secondary;
    transition: ease-in-out 0.4s;
    z-index: 2;
    text-align: center;
    width: 80%;
    margin: 0 auto;

    font-family: "Belanosima", sans-serif;
    font-style: normal;
    font-weight: 600;

    color: white;
    border-radius: var(--radius-xl);
    border-start-start-radius: 0;
    border-end-start-radius: 0;
    padding-top: calc(var(--spacing) * 3);
    padding-bottom: calc(var(--spacing) * 3);
    max-width: 32px;
    cursor: pointer;
}

.add-btn:hover {
    background-color: #3a3a3a;
    text-align: center;
}

.add-btn:disabled {
    background-color: darken($secondary, 7%);
    color: gray;
    pointer-events: none;
}

.player-input {
    background-color: rgba($secondary, 0.7);
    border-radius: var(--radius-2xl);
    border-start-end-radius: 0;
    border-end-end-radius: 0;
    outline: none;
    border: 0 solid #3a3a3a;
    transition: ease-in-out 0.2s;
    width: 100%;
}

.player-input:focus-visible {
    border: 1px solid #5e5e5e;
    border-radius: var(--radius-2xl);
    border-start-end-radius: 0;
    border-end-end-radius: 0;
}
</style>
