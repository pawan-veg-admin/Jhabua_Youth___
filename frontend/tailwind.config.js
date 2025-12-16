/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        neon: '#7C3AED',
        blush: '#F472B6',
        midnight: '#0B1021',
        foam: '#E0F2FE',
      },
      boxShadow: {
        glow: '0 10px 40px rgba(124, 58, 237, 0.35)',
      }
    },
  },
  plugins: [],
};
