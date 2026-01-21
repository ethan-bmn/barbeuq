<script setup lang="ts">
import { randInt } from '~/utils/randInt'

const props = defineProps({
    content: {
        type: String,
        required: true,
    },
})

defineEmits(['swiped'])

const visible = ref(false)
const transitionName = ref('swipe-in-up')
const players: string[] = inject('players')!
const penalties: number[] = inject('penalties')!

function swipeOut() {
    transitionName.value = 'swipe-out-down'
    visible.value = false
}

function swipeIn() {
    transitionName.value = 'swipe-in-up'
    visible.value = true
}

function getRandomPlayer() {
    return players[randInt(0, players.length - 1)]
}

function formatContent(content: string) {
    let result = content
    result = result.replaceAll('$player', `<span style="color: #fe8b14">${getRandomPlayer()}</span>`)
    const embers = randInt(Number(penalties[0]), Number(penalties[1]))
    let text = 'sanctions'
    if (embers === 1) {
        text = 'sanction'
    }
    result = result.replaceAll('$penalties', `<span style="color: #fe8b14">${embers}</span> ${text}`)
    return result
}

defineExpose({
    swipeIn: swipeIn,
})

onMounted(() => {
    swipeIn()
})
</script>

<template>
    <Transition
        :name="transitionName"
        @after-leave="$emit('swiped')"
    >
        <div
            v-if="visible"
            class="swipe-card belanosima mx-auto text-lg px-4 py-3"
            @click="swipeOut"
        >
            <span v-html="formatContent(content)" />
        </div>
    </Transition>
</template>

<style scoped>
/* In and out swipe animations */
.swipe-in-up-enter-active {
    animation: swipeInUp 0.4s ease-out forwards;
}

.swipe-out-down-leave-active {
    animation: swipeOutDown 0.4s ease-in backwards;
}

.swipe-card {
    background-color: #262626 ;
    border-radius: 12px;
    box-shadow: 0 6px 18px rgba(109, 64, 64, 0.4);
    transition: 0.3s ease-in-out, transform 0.3s ease, box-shadow 0.3s ease;;
    cursor: default;
    aspect-ratio: 5/7;
    width: 75%
}

.swipe-card:hover {
    background-color: #5e5e5e;
    cursor: pointer;
}

@keyframes swipeInUp {
    from {
        transform: translateY(100%);
        opacity: 0;
    }
    to {
        transform: translateY(0%);
        opacity: 1;
    }
}

@keyframes swipeOutDown {
    from {
        transform: translateY(0%);
        opacity: 1;
    }
    to {
        transform: translateY(100%);
        opacity: 0;
    }
}
</style>
