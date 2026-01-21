<script setup lang="ts">
console.log('sequential')
</script>

<template>
    <div class="flex justify-center w-full">
        <div
            class="border-2 border-[#1a1a1a] py-4 mx-5 rounded-2xl h-full overflow-y-auto max-h-100 relative z-2"
            style="scrollbar-width: none;"
        >
            <div class="grid grid-rows-1 gap-5 w-full">
                <NuxtLink
                    to="/setup?gamemode=classic"
                    class="link-btn"
                >
                    <div class="inner-btn grid grid-cols-2 gap-6">
                        <NuxtImg
                            src="img/sausage.png"
                            class="my-auto link-img"
                        />
                        <div>
                            <h1>
                                Classique
                            </h1>
                            <p>
                                Cartes à boire tranquilles, pour bien commencer.
                            </p>
                        </div>
                    </div>
                </NuxtLink>
                <NuxtLink
                    to="/setup?gamemode=truth-or-dare"
                    class="link-btn"
                >
                    <div class="inner-btn grid grid-cols-2 gap-6">
                        <NuxtImg
                            src="img/truth-or-dare.png"
                            class="my-auto link-img"
                        />
                        <div>
                            <h1>
                                Action ou vérité
                            </h1>
                            <p>
                                Des questions ou des actions.
                            </p>
                        </div>
                    </div>
                </NuxtLink>
                <NuxtLink
                    to="/setup?gamemode=bedroom"
                    class="link-btn belanosima text-5xl px-10 py-4 font-bold text-white rounded-lg"
                >
                    <div class="inner-btn grid grid-cols-2 gap-6">
                        <NuxtImg
                            src="img/autoroute.svg"
                            class="my-auto link-img"
                        />
                        <div>
                            <h1>
                                Autoroute
                            </h1>
                            <p>
                                File de gauche, fond de 5.
                            </p>
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
