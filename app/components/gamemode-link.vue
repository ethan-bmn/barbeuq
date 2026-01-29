<script setup lang="ts">
const props = defineProps({
    to: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    disableOnProd: {
        type: Boolean,
        required: false,
        default: true,
    },
})

const isProd = import.meta.env.VITE_ENV === 'production'

const router = useRouter()

function navigateTo(to: string) {
    if (!(isProd && props.disableOnProd)) {
        router.push(to)
    }
}
</script>

<template>
    <a
        :class="`link-btn ${isProd && disableOnProd ? 'disabled' : ''}`"
        @click="navigateTo(to)"
    >
        <div class="inner-btn grid grid-cols-2 gap-6 relative">
            <NuxtImg
                :src="img"
                class="my-auto link-img"
            />
            <div>
                <h1>
                    {{ title }}
                </h1>
                <p>
                    {{ description }}
                </p>
            </div>
            <div
                v-if="isProd && disableOnProd"
                class="coming-soon absolute top-1/4 text-white"
            >
                Bientôt disponible !
            </div>
        </div>
    </a>
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

    color: white;
    border-radius: var(--radius-xl);
    padding: calc(var(--spacing) * 3);

    .inner-btn {
        grid-template-columns: 20% auto;
    }

    h1 {
        font-size: var(--text-xl);
        text-align: start;
        line-height: 25px;
    }
    p {
        margin-top: var(--spacing);
        font-size: var(--text-sm);
        text-align: start;
    }
}

.disabled {
    background-color: color.adjust($secondary, $lightness: -13%);
    color: #656565;

    .inner-btn :not(.coming-soon) {
        filter: blur(3px);
    }

    cursor: default;
    .link-img {
        opacity: 0.3;
    }
}

.link-btn:not(.disabled):hover {
    box-shadow: 0 15px 30px rgba(194, 88, 18, 0.5);
    background-color: #3a3a3a;
    transform: translateY(-5px);
    cursor: pointer;
}

.link-img {
    width: 46px;
}

.coming-soon {
    width: calc(100% + calc(var(--spacing) * 6)); left: calc(var(--spacing) * -3);
}
</style>
