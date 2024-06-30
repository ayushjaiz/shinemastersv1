// tailwind.config.js
module.exports = {
  content: [
    "./**/*.{html,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1d4ed8',
        primary_dark: '#1e40af', // Darker primary accent color (blue_800)
        text_primary: '#111827', // Primary text color (gray_900)
        text_secondary: '#f3f4f6',
      },
    },
  },
plugins: [
  require('flowbite/plugin'),
],
};
