module.exports = {
  root: true,
  env: { browser: true, es6: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: {
    react: { version: '18.2' },
    'import/resolver': {
      node: {
        paths: ['src'],
      },
      alias: {
        map: [
          ['@components', './src/components'],
          ['@utils', './src/utils'],
        ],
      },
    },
  },
  plugins: ['react-refresh', 'eslint-plugin-no-inline-styles', 'extra-rules'],
  rules: {
    'import/no-named-as-default': 0,
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['../', './../'],
            message: 'Relative imports are not allowed',
          },
        ],
      },
    ],
    'arrow-body-style': ['error', 'as-needed'],
    'prefer-const': 'error',
    'no-var': 'error',
    'no-shadow': 'error',
    'object-shorthand': 'error',
    'no-nested-ternary': 'warn',
    'no-dupe-else-if': 'error',
    'array-callback-return': 'error',
    eqeqeq: 'error',
    'no-else-return': 'error',
    'no-return-await': 'error',
    'no-console': 'error',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-key': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/default-props-match-prop-types': 'error',
    'react/forbid-prop-types': 'error',
    'react/no-array-index-key': 'error',
    'react/no-typos': 'error',
    'react/no-unescaped-entities': 'error',
    'react/prefer-stateless-function': 'error',
    'react/prop-types': 'error',
    'react/require-default-props': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        shorthandFirst: true,
        ignoreCase: true,
        reservedFirst: true,
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'extra-rules/no-commented-out-code': 'error',
    'no-inline-styles/no-inline-styles': 1,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
