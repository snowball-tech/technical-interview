import base from '@snowball-tech/eslint-snowball-config/configs/base.js'
import html from '@snowball-tech/eslint-snowball-config/configs/html.js'
import importConfig from '@snowball-tech/eslint-snowball-config/configs/import.js'
import json from '@snowball-tech/eslint-snowball-config/configs/json.js'
import lodash from '@snowball-tech/eslint-snowball-config/configs/lodash.js'
import markdown from '@snowball-tech/eslint-snowball-config/configs/markdown.js'
import next from '@snowball-tech/eslint-snowball-config/configs/next.js'
import perfectionist from '@snowball-tech/eslint-snowball-config/configs/perfectionist.js'
import prettier from '@snowball-tech/eslint-snowball-config/configs/prettier.js'
import react from '@snowball-tech/eslint-snowball-config/configs/react.js'
import secrets from '@snowball-tech/eslint-snowball-config/configs/secrets.js'
import tailwind from '@snowball-tech/eslint-snowball-config/configs/tailwind.js'
import typescript from '@snowball-tech/eslint-snowball-config/configs/typescript.js'
import yml from '@snowball-tech/eslint-snowball-config/configs/yml.js'

export default [
  {
    ignores: ['**/translations/*', '**/next-env.d.ts'],
  },

  ...base,
  ...html,
  ...json,
  ...markdown,
  ...yml,
  ...secrets,
  ...importConfig,
  ...typescript,
  ...react,
  ...next,
  ...lodash,
  ...tailwind,
  ...perfectionist,
  ...prettier,

  {
    settings: {
      'import/ignore': ['@tooni/iconscout-unicons-react'],
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: 'tsconfig.json',
        },
      },
    },
  },

  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,mts,tsx}'],

    rules: {
      '@next/next/no-html-link-for-pages': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
      'import/no-cycle': 'off',
    },
  },

  {
    files: ['**/eslint.config.{js,mjs,cjs,ts,mts,cts}'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },

    rules: {
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          cjs: 'always',
          css: 'always',
          cts: 'never',
          js: 'always',
          json: 'always',
          jsx: 'never',
          mjs: 'always',
          mts: 'never',
          sass: 'always',
          svg: 'always',
          ts: 'never',
          tsx: 'never',
        },
      ],
    },
  },

  {
    files: ['**/*.md/*.{js,jsx,ts,tsx}'],

    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
]
