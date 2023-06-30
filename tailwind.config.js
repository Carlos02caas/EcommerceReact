/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'gray-low': '#DBDBDB',
      'gray-mid': '#808080',
      'gray-up': '#494A4D',
      'body-text': '#212933',
      'gray-black': '#0F0F0F',
      'blue-up':'#6979DD',
    },
    extend: {},
  },
  plugins: [],
}

