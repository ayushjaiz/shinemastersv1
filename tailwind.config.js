// tailwind.config.js
module.exports = {
  content: ["./**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        star: '#fc0', // Example primary color
        secondary: '#64748B', // Example secondary color
        danger: '#282828',
        // Add other custom colors here
      },
    },
  },
  plugins: [],
}
