/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './App.tsx', './index.tsx', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        logo: ['MuseoModerno', 'sans-serif'],
      },
      colors: {
        anhanga: {
          green: '#064e3b',
          lime: '#d9f99d',
          stone: '#f5f5f4',
          dark: '#1c1917',
          accent: '#f97316',
        },
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        marquee: 'marquee 20s linear infinite',
        blob: 'blob 10s infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
