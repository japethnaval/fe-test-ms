module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'prettier',
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['simple-import-sort', 'prefer-arrow', 'import'],
  rules: {
    'simple-import-sort/imports': [
      'error',
      {
        groups: [['^\\u0000', '^@?\\w', '^[^.]', '^\\.']], //disables the new line between imports
      },
    ],
    'import/no-named-as-default': 0,
    'react/function-component-definition': ['off'],
    'import/extensions': ['off'],
    'import/no-unresolved': 'error',
    'import/first': 'error',
    'import/no-duplicates': 'error',
    'react/jsx-filename-extension': ['off'],
    'react/react-in-jsx-scope': ['off'],
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],
    'no-restricted-syntax': [
      'error',
      'FunctionExpression',
      'FunctionDeclaration',
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        // use <root>/path/to/folder/tsconfig.json
        project: './tsconfig.json',
      },
    },
  },
}
