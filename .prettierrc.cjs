module.exports = {
  tabWidth: 2,
  printWidth: 80,
  semi: true,
  singleQuote: true,
  endOfLine: 'lf',
  pluginSearchDirs: ['.'],
  plugins: ['prettier-plugin-svelte', 'prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: '*.svelte',
      options: {
        svelteAllowShorthand: false,
        svelteSortOrder: 'scripts-markup-styles',
        plugins: ['prettier-plugin-svelte'],
      },
    },
  ],
};
