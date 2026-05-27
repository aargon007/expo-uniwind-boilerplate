const { defineConfig } = require('eslint/config');
const { fixupConfigRules } = require('@eslint/compat');
const universe = require('eslint-config-universe/flat/native');
const tanstackQuery = require('@tanstack/eslint-plugin-query');
const globals = require('globals');

module.exports = defineConfig([
    { ignores: ['node_modules/', 'dist/', '.expo/', 'android/', 'ios/'] },
    // Node.js globals for root config files (metro.config.js, babel.config.js, etc.)
    {
        files: ['*.config.js', '*.config.ts', '*.config.mjs'],
        languageOptions: { globals: globals.node },
    },
    ...fixupConfigRules(universe),
    tanstackQuery.configs['flat/recommended'],
    {
        rules: {
            'prettier/prettier': 0,
            'import/order': 0,
            'react-native/no-inline-styles': 0,
            'import/namespace': 0,
            'no-duplicate-imports': 'error',
            // apiClient is a stable Axios instance passed as a fn arg — not a query param
            '@tanstack/query/exhaustive-deps': 0,
        },
    },
]);
