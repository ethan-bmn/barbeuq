<script setup lang="ts">
import truths from '@/assets/gamemodes-data/truth-or-dare/truths.json'
import dares from '@/assets/gamemodes-data/truth-or-dare/dares.json'
import { randInt } from '~/utils/randInt'

const card = useTemplateRef('card')
const chosenCard = ref<string>('')
const cardCount = ref(0)

const MAX_CARDS = 30

const router = useRouter()

const data: Ref<Record<'truth' | 'dare', string[]>> = ref({ truth: [], dare: [] })

const pickedType: Ref<'truth' | 'dare' | null> = ref(null)

const isLoaded = ref(false)

const selectedPlayer: Ref<string | null> = ref(null)

const gameEnded = computed(() =>
    data.value['truth'].length === 0 || data.value['dare'].length === 0 || cardCount.value >= MAX_CARDS,
)

function initGame() {
    data.value = JSON.parse(JSON.stringify({ truth: truths, dare: dares }))
    pickedType.value = null
    cardCount.value = 0
    window.addEventListener('onAfterEnter', () => {
        isLoaded.value = true
    })
}

function getRandomCard() {
    if (!pickedType.value) {
        console.error('Error: Tried to pick a random card but no card type was given.')
        return
    }
    if (data.value[pickedType.value].length === 0) return []
    chosenCard.value = data.value[pickedType.value][randInt(0, data.value[pickedType.value].length - 1)]!
    data.value[pickedType.value].splice(data.value[pickedType.value].indexOf(chosenCard.value), 1)
}

function selectType(value: 'truth' | 'dare') {
    pickedType.value = value
    getRandomCard()
    if (!card.value) {
        return
    }
    card.value.swipeIn()
}

function swipeCard() {
    pickedType.value = null
    cardCount.value++
}

function goBack() {
    router.back()
}

onMounted(() => {
    initGame()
})
</script>

<template>
    <div
        class="py-4 mx-5 rounded-2xl min-h-full overflow-y-auto max-h-100 z-2 w-full relative flex justify-center pb-10"
        style="scrollbar-width: none;"
    >
        <Transition
            mode="out-in"
        >
            <div
                v-if="isLoaded && !gameEnded && pickedType === null"
                class="w-full h-full text-center text-2xl mt-10"
            >
                <div class="w-full mb-10">
                    {{ selectedPlayer }}
                </div>
                <div class="flex justify-center gap-7 px-15 items-center">
                    <button
                        class="link-btn text-xl"
                        @click="selectType('dare')"
                    >
                        Action
                    </button>
                    ou
                    <button
                        class="link-btn text-xl"
                        @click="selectType('truth')"
                    >
                        Vérité
                    </button>
                </div>
            </div>
            <PlayingCard
                v-else-if="isLoaded && !gameEnded && pickedType && data[pickedType].length > 0 && cardCount < MAX_CARDS"
                ref="card"
                :content="chosenCard"
                @swiped="swipeCard()"
            />
        </Transition>
        <Transition>
            <div
                v-if="isLoaded && gameEnded"
                class="quicksand text-center"
            >
                <p class="text-2xl mb-3">
                    Partie terminée !
                </p>
                <p class="text-lg mb-6">
                    On en refait une ?
                </p>
                <button
                    class="restart-btn hover:cursor-pointer"
                    @click="goBack()"
                >
                    C'est reparti !
                </button>
            </div>
        </Transition>
    </div>
</template>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.link-btn {
    background-color: $secondary;
    transition: ease-in-out 0.4s;
    text-align: center;

    font-family: "quicksand", sans-serif;
    font-style: normal;
    font-weight: 600;

    color: white;
    border-radius: var(--radius-xl);
    padding: calc(var(--spacing) * 3);

    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1/1;
    width: 50%;
    height: auto;
}

.link-btn:hover {
    box-shadow: 0 15px 30px rgba(194, 88, 18, 0.5);
    background-color: #3a3a3a;
    transform: translateY(-5px);
    cursor: pointer;
}

.restart-btn {
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
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
