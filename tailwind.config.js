module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.vue',
  ],
  theme: {
    extend: {
      colors: {
        'vdc-primary-color': '#9333EA',
        'vdc-secondary-color': '#34A853',
      },
    },
  },
  plugins: [
    require('tailwindcss-animation-advanced'),
  ],
}
