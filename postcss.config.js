module.exports = {
  plugins: {
    'postcss-import': {},

    tailwindcss: {},

    ...(process.env.NODE_ENV === 'development'
      ? {}
      : { '@csstools/postcss-cascade-layers': { onImportLayerRule: 'warn' } }),

    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      features: {
        'custom-properties': false,
      },
      stage: 3,
    },

    'postcss-logical': {},
  },
}
