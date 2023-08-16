// eslint-disable-next-line @typescript-eslint/no-var-requires
const {configure, presets} = require('eslint-kit')

/**
 * Creates eslint config
 *
 * @param {string} root - define root of project (ex: __dirname)
 * @param {string} tsconfig - specify tsconfig name
 * @param {Object} rules - eslint additional rules
 * @param {Array} ignorePatterns - eslint ignorePatterns property
 * @return {Linter.Config<Linter.RulesRecord>}
 */

module.exports = configure({
  mode: 'only-errors',
  allowDebug: process.env.NODE_ENV !== 'production',
  root: __dirname,
  presets: [
    presets.node(),
    presets.prettier({
      singleQuote: true,
      trailingComma: 'none',
      endOfLine: 'auto'
    }),
    presets.typescript({
      tsconfig: 'tsconfig.base.json',
      root: './'
    }),
    presets.react(),
    presets.imports({
      sort: {
        newline: true
      }
    })
  ],
  extend: {
    ignorePatterns: ["**/*"],
    plugins: ['@nx', 'prefer-arrow'],
    rules: {
      'react/react-in-jsx-scope': 'off',
      quotes: [2, 'single', { avoidEscape: true }],
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/member-delimiter-style': [
        'error',
        { multiline: { delimiter: 'none' } }
      ],
      'import/no-unresolved': 'off',
      '@typescript-eslint/no-unnecessary-condition': 'off',
      'import/extensions': 'off',
      'react-hooks/exhaustive-deps': 'warn',
      'react/no-array-index-key': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'dot-notation': 'off',
      'prefer-arrow/prefer-arrow-functions': 'error'
    }
  }
})
