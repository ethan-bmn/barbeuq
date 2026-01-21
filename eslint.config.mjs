// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
    {
        rules: {
            '@stylistic/brace-style': 'off',
            'vue/no-v-html': 'off',
        },
    },
)
