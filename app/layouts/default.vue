<script setup lang="ts">
</script>

<template>
    <div class="min-w-full flex justify-center">
        <div class="app-container w-full sm:w-[70%] md:w-[55%] lg:w-[45%] xl:w-[40%] 2xl:w-[33%]">
            <svg
                class="fire-ball"
                width="200"
                height="100"
                viewBox="0 0 200 100"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <radialGradient
                        id="halfCircleGradient"
                        cx="50%"
                        cy="100%"
                        r="90%"
                    >
                        <stop
                            offset="50%"
                            stop-color="orange"
                        />
                        <stop
                            offset="100%"
                            stop-color="red"
                        />
                    </radialGradient>
                </defs>

                <path
                    d="M 10 100 A 90 90 0 0 1 190 100 L 190 100 L 10 100 Z"
                    fill="url(#halfCircleGradient)"
                />
            </svg>
            <header class="h-[20%] w-full flex justify-center py-5 mb-20 relative">
                <div class="glow-wrap">
                    <object data="img/barbeuq_logo.svg" type="image/svg+xml"></object>
                </div>
                <div class="belanosima absolute top-90/100 text-5xl">
                    BarbeuQ
                </div>
            </header>
            <main>
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
        drop-shadow(0 0 6px rgba(255, 255, 255, 0.75))
        drop-shadow(0 0 16px rgba(255, 255, 255, 0.60))
        drop-shadow(0 0 32px rgba(255, 255, 255, 0.35));
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
</style>
