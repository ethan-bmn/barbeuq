<script setup lang="ts">
const route = useRoute()

const gameMode = route.query.gamemode

const validGameModes = ['classic', 'truth-or-dare', 'truth-or-dare-hard', 'bedroom']

const players: string[] = ref(localStorage.getItem('players') || [])

function addPlayer() {

}

onMounted(() => {
    if (!gameMode || typeof gameMode !== 'string' || !validGameModes.includes(gameMode)) {
        const router = useRouter()
        router.push('/')
    }
})
</script>

<template>
    <div>
        <div class="belanosima text-3xl text-center mb-3">
            Qui joue ?
        </div>
        <form
            class="flex mx-auto mb-4 text-xl w-[80%]"
            @submit.prevent="addPlayer()"
        >
            <input
                type="text"
                class="player-input rounded-lg belanosima px-3"
            >
            <button
                class="add-btn"
                type="submit"
            >
                +
            </button>
        </form>
        <div class="flex justify-center w-full">
            <div
                class="bg-[#1a1a1a] py-4 mx-5 h-full overflow-y-auto max-h-100 relative z-2 w-full"
                style="scrollbar-width: none;"
            >
                <div class="grid grid-rows-1 gap-8 w-full">
                    Test
                </div>
            </div>
            <div class="fadedScroller_fade" />
        </div>
    </div>
</template>

<style lang="scss">
@use "sass:color";
.link-btn {
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
    padding: calc(var(--spacing) * 3);

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

.link-btn:hover {
    box-shadow: 0 15px 30px rgba(194, 88, 18, 0.5);
    background-color: #3a3a3a;
    transform: translateY(-5px);
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
