import js from '@eslint/js'
import globals from 'globals'

export default [
    js.configs.recommended,

    {
        languageOptions: {
            globals: {
                ...globals.broaser,
                ...globals.node,
            },
        },
        rules: {
            'no-unused-vars': 'warn',
            'no-undef': 'warn',
        },
    },
]
