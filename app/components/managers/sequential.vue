<script setup lang="ts">
import classic from '@/assets/gamemodes-data/classic.json'
import { randInt } from '~/utils/randInt'

const card = useTemplateRef('card')
const gameMode: string = inject('gameMode')!
const chosenCard = ref<string>('')
const cardCount = ref(0)

const MAX_CARDS = 30

const router = useRouter()

function getGameModeData(): string[] {
    switch (gameMode) {
        case 'classic':
            return classic
        default:
            return []
    }
}

const data = getGameModeData()

function getRandomCard() {
    if (data.length === 0) return []
    chosenCard.value = data[randInt(0, data.length - 1)]!
    data.splice(data.indexOf(chosenCard.value), 1)
    cardCount.value++
}

function swipeCard() {
    if (!card.value) {
        return
    }
    getRandomCard()
    card.value.swipeIn()
}

function goBack() {
    router.back()
}

onMounted(() => {
    getRandomCard()
})
</script>

<template>
    <div
        class="py-4 mx-5 rounded-2xl min-h-full overflow-y-auto max-h-100 z-2 w-full relative flex justify-center pb-10"
        style="scrollbar-width: none;"
    >
        <PlayingCard
            v-if="data.length > 0 && cardCount < MAX_CARDS"
            ref="card"
            :content="chosenCard"
            @swiped="swipeCard()"
        />

        <Transition>
            <div
                v-if="data.length === 0 || cardCount >= MAX_CARDS"
                class="quicksand text-center"
            >
                <p class="text-2xl mb-3">
                    Partie terminée !
                </p>
                <p class="text-lg mb-6">
                    On en refait une ?
                </p>
                <button
                    class="link-btn hover:cursor-pointer"
                    @click="goBack()"
                >
                    C'est reparti !
                </button>
            </div>
        </Transition>
    </div>
</template>

<style lang="scss">
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.link-btn {
    display: grid;
    background-color: $secondary;
    transition: ease-in-out 0.4s;
    z-index: 2;
    text-align: center;
    width: 80%;
    margin: 0 auto;

    font-family: "quicksand", sans-serif;
    font-style: normal;
    font-weight: 600;

    color: white;
    border-radius: var(--radius-xl);
    padding: calc(var(--spacing) * 3);

    .inner-btn {
        grid-template-columns: 20% auto;
    }

    h1 {
        font-size: var(--text-lg);
        text-align: start;
        line-height: 25px;
    }
    p {
        margin-top: var(--spacing);
        font-size: var(--text-xs);
        text-align: start;
    }
}

.link-btn:hover {
    box-shadow: 0 15px 30px rgba(194, 88, 18, 0.5);
    background-color: #3a3a3a;
    transform: translateY(-5px);
}
</style>
