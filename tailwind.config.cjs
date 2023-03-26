/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-banner': "url('/src/assets/bannerImg.jpg')",
        'hero-events': "url('/src/assets/fondobar2.jpg')",
        'hero-happy-hour': "url('/src/assets/happyHour.jpg')"
      }
    },
    fontFamily: {
      alkatra: ['Alkatra', 'cursive']
    }
  },
  plugins: []
}
