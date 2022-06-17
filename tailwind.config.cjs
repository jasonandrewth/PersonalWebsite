// tailwind.config.cjs

const writingMode = require('tailwindcss-writing-mode')({
  variants: ['responsive', 'hover']
})

module.exports = {
  // add this section
  content: [
    './src/**/*.html',
    './src/**/*.svelte'
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    writingMode
  ],
}