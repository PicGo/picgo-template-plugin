const js = require('@eslint/js')
const globals = require('globals')

const importPlugin = require('eslint-plugin-import')
const nPlugin = require('eslint-plugin-n')
const promisePlugin = require('eslint-plugin-promise')
const stylisticPlugin = require('@stylistic/eslint-plugin')

module.exports = [
  {
    ignores: [
      '**/node_modules/**'
    ]
  },
  {
    files: [
      '**/*.js',
      '**/*.cjs'
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'script',
      globals: {
        ...globals.node
      }
    }
  },
  js.configs.recommended,
  nPlugin.configs['flat/recommended-script'],
  promisePlugin.configs['flat/recommended'],
  {
    plugins: {
      import: importPlugin,
      '@stylistic': stylisticPlugin
    },
    rules: {
      ...(importPlugin.configs.recommended?.rules ?? {}),
      '@stylistic/indent': ['error', 2],
      '@stylistic/semi': ['error', 'never'],
      'no-unexpected-multiline': 'error'
    }
  },
  {
    rules: {
      'n/no-unpublished-require': 'off',
      'no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_'
        }
      ]
    }
  }
]
