<script setup lang="ts">
import { ref } from 'vue'
import { Range } from 'vue-range-multi'

const model = ref<number[]>([1, 10])
</script>

<template>
    <Range
        v-model="model"
        range-highlight
        size="medium"
        :min="1"
        :max="10"
        :smooth="true"
    />
</template>

<style lang="scss">
@use 'vue-range-multi/style.css';

.m-range-highlight {
    background-color: #ea913b;
}

.m-range-theme {
    --c-primary: #630b12;
}
</style>
