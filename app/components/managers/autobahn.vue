<script setup lang="ts">
interface Card {
    suit: string
    value: string
}
const cardValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'V', 'D', 'R']

const cards: Ref<Card[]> = ref([])

const cardRef = useTemplateRef('card')

cardRef.value?.swipeIn()

function resetCards() {
    cards.value = []
    for (const suit of ['♠', '♥', '♣', '♦']) {
        for (const value of cardValues) {
            cards.value.push({
                suit: suit,
                value,
            })
        }
    }
}

onMounted(() => {
    resetCards()
    console.log(cards.value)
})
</script>

<template>
    <div
        class="py-4 mx-5 rounded-2xl min-h-full overflow-y-auto max-h-100 z-2 w-full relative flex justify-center pb-10"
        style="scrollbar-width: none;"
    >
        <PlayingCard
            v-if="cards[0]"
            ref="card"
            :suit="cards[0].suit"
            :value="cards[0].value"
        />
    </div>
</template>
