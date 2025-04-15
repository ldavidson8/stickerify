import eslintPluginAstro from 'eslint-plugin-astro'
import jsxA11y from 'eslint-plugin-jsx-a11y' // Import the plugin

export default [
  ...eslintPluginAstro.configs.recommended,
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroEslintParser,
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
    },
  },
  {
    rules: {
      // Add any specific rules for .astro files here
    },
  },
  {
    ignores: ['dist', 'node_modules', '.github', '.astro'],
  },
  {
    plugins: {
      'jsx-ally': jsxA11y,
    },
    rules: {
      ...jsxA11y.configs.recommended.rules,
    },
  },
]
