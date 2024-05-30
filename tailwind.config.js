// tailwind.config.js
module.exports = {
  content: [
    "./**/*.{html,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        star: '#fc0', // Example primary color
        secondary: '#71717a', // Example secondary color
        danger: '#282828',
        // Add other custom colors here
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
