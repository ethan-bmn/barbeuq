// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
    {
        rules: {
            '@stylistic/brace-style': 'off',
            'vue/no-v-html': 'off',
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': [
                'warn', // or 'error'
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    caughtErrorsIgnorePattern: '^_',
                },
            ],
        },
    },
)
