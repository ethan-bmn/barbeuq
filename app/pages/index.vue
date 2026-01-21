<script setup lang="ts">
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
                    to="/setup?gamemode=autobahn"
                    class="link-btn belanosima text-5xl px-10 py-4 font-bold text-white rounded-lg"
                >
                    <div class="inner-btn grid grid-cols-2 gap-6">
                        <NuxtImg
                            src="img/autoroute.svg"
                            class="my-auto link-img"
                        />
                        <div>
                            <h1>
                                Autobahn
                            </h1>
                            <p>
                                La meilleure défense, c'est l'attaque.
                            </p>
                        </div>
                    </div>
                </NuxtLink>
            </div>
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

.link-img {
    width: 46px;
}
</style>
