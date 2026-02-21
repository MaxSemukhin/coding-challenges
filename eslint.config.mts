import js from '@eslint/js';
import ts from 'typescript-eslint';
import unicorn from 'eslint-plugin-unicorn';
import jest from 'eslint-plugin-jest';
import regexp from 'eslint-plugin-regexp';
import imports from 'eslint-plugin-import';
import node from 'eslint-plugin-n';
import prettier from 'eslint-config-prettier';

const importFlatConfig = {
    name: 'import/flat/recommended (shim)',
    plugins: {
        import: imports,
    },
    rules: imports.configs.recommended.rules,
};

const jestFlatConfig = {
    ...jest.configs['flat/recommended'],
    name: 'jest/flat/recommended',
    settings: {
        jest: {
            version: 29,
        },
    },
};

export default [
    js.configs.recommended,
    ...ts.configs.recommended,

    unicorn.configs.recommended,

    jestFlatConfig,

    regexp.configs['flat/recommended'],

    importFlatConfig,

    node.configs['flat/recommended'],

    { ignores: ['dist/**', 'node_modules/**', 'coverage/**', 'eslint.config.*'] },

    prettier,
];
