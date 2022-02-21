// tailwind.config.cjs

const writingMode = require('tailwindcss-writing-mode')({
  variants: ['responsive', 'hover']
})

module.exports = {
  // add this section
  purge: [
    './src/**/*.html',
    './src/**/*.svelte'
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    writingMode
  ],
}