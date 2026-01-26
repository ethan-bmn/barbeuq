<script setup lang="ts">
const router = useRouter()

function goBack() {
    router.back()
}

useSeoMeta({
    title: 'Barbeuq - Jeu de cartes entre amis',
})
</script>

<template>
    <div class="min-w-full flex justify-center">
        <div class="app-container w-full sm:w-[70%] md:w-[55%] lg:w-[45%] xl:w-[40%] 2xl:w-[33%]">
            <header class="h-[20%] w-full flex justify-center py-5 mb-20 relative">
                <div class="glow-wrap">
                    <object
                        data="img/barbeuq_logo.svg"
                        type="image/svg+xml"
                    />
                </div>
                <div class="momo-trust-display-regular absolute top-90/100 text-5xl text-white">
                    BarbeuQ
                </div>
                <button
                    v-if="router.currentRoute.value.name !== 'index'"
                    class="absolute left-5 back-btn"
                    @click="goBack()"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1024 1024">
                        <path fill="currentColor" d="M752.145 0c8.685 0 17.572 3.434 24.237 10.099c13.33 13.33 13.33 35.143 0 48.473L320.126 515.03l449.591 449.591c13.33 13.33 13.33 35.144 0 48.474s-35.142 13.33-48.472 0L247.418 539.268c-13.33-13.33-13.33-35.144 0-48.474L727.91 10.1C734.575 3.435 743.46.002 752.146.002z" />
                    </svg>
                </button>
            </header>
            <main style="position: relative; height: 100%;">
                <slot id="main" />
            </main>
        </div>
    </div>
</template>

<style lang="scss">
.app-container {
    display: block;
    justify-content: center;
    max-height: 100vh;
    min-height: 100vh;
    background-color: $primary;
    color: white;
    overflow: clip;
}

.fire-ball {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    filter: blur(50px);
    z-index: 1;
}

.glow-wrap {
    display: inline-block;
    filter:
        drop-shadow(0 0 10px rgba(255, 255, 255, 0.4))
        drop-shadow(0 0 16px #ffad10)
        drop-shadow(0 0 32px red);
}

object {
    width: 125px; /* adjust size */
    height: 125px; /* keep square for nicer centering */
    display: block;
}

canvas {
    display: block;
    vertical-align: bottom;
}

.back-btn {
    border-radius: 50%;
    background-color: #202020;
    aspect-ratio: 1;
    display: grid;
    place-items: center;
    padding: 0 0.5em;
    color: white;
    transition: ease-in-out 0.3s;
}

.back-btn:hover {
    background-color: #5e5e5e;
    cursor: pointer;
}

.page-left-enter-active,
.page-right-enter-active,
.page-left-leave-active,
.page-right-leave-active {
    position: absolute;
    left: 0;
    right: 0;
    transition: all 0.6s ease;
}

.page-left-enter-from, .page-right-leave-to {
    transform: translateX(100%);
    opacity: 0;
}

.page-left-leave-to, .page-right-enter-from {
    transform: translateX(-100%);
    opacity: 0;
}

.page-left-enter-to, .page-right-enter-to {
    transform: translateX(0);
    opacity: 1;
}
</style>
