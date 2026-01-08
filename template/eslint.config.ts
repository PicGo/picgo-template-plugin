import path from 'node:path'
import { fileURLToPath } from 'node:url'

import stylistic from '@stylistic/eslint-plugin'
import { defineConfig } from 'eslint/config'
import love from 'eslint-config-love'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig([
  {
    ignores: ['dist/**'],
  },
  {
    ...love,
    files: ['src/**/*.ts'],
    languageOptions: {
      ...love.languageOptions,
      parserOptions: {
        ...love.languageOptions?.parserOptions,
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      ...love.plugins,
      '@stylistic': stylistic,
    },
    rules: {
      ...love.rules,
      'no-console': 'off',
      semi: 'off',
      '@stylistic/indent': ['error', 2],
      '@stylistic/semi': ['error', 'never'],
      'no-unexpected-multiline': 'error',

      '@typescript-eslint/strict-boolean-expressions': 'off',
      '@typescript-eslint/restrict-template-expressions': 'off',
      '@typescript-eslint/require-await': 'off',
      'no-prototype-builtins': 'off',
      'no-throw-literal': 'error',
      'no-unused-expressions': 'error',
      'no-redeclare': 'error',
      curly: 'error',
      eqeqeq: 'error',
    },
  },
])
