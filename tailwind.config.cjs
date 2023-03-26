/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-banner': "url('/src/assets/bannerImg.jpg')"
      }
    },
    fontFamily: {
      alkatra: ['Alkatra', 'cursive']
    }
  },
  plugins: []
}
