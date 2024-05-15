const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'neutralSilver': '#F5F7FA',
        'neutralDGrey': '#4D4D4D',
        'brandPrimary': '#4CAF4F',
        'gray900': '#717171',
        'search' : "#d8f3dc",
        'serachIcon' : "#95d5b2",
      },
    },
  },
  presets: [
    flowbite,
  ],
  plugins: [],
};
