<script setup lang="ts">
import classic from '@/assets/gamemodes-data/classic.json'
import { randInt } from '~/utils/randInt'

const card = useTemplateRef('card')
const gameMode: string = inject('gameMode')!
const chosenCard = ref<string>('')

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
}

function swipeCard() {
    if (!card.value) {
        return
    }
    console.log('onCardSwipe')
    getRandomCard()
    card.value.swipeIn()
}

window.addEventListener('onAfterEnter', () => {
    swipeCard()
})
</script>

<template>
    <div
        class="py-4 mx-5 rounded-2xl min-h-full overflow-y-auto max-h-100 relative z-2 w-full "
        style="scrollbar-width: none;"
    >
        <PlayingCard
            ref="card"
            class="absolute"
            :content="chosenCard"
            @swiped="swipeCard()"
        />
    </div>
</template>
