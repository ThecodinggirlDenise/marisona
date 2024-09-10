// tailwind.config.js

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      screens: {
        'hide-logo': { 'raw': '(max-width: 998px) and (max-height: 814px)' }, // Custom screen to hide the logo
      },
    },
  },
  plugins: [],
};
