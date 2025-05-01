/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          950: '#0a0a16',
          900: '#121225',
          800: '#1e1e3a',
          700: '#2c2c54',
        },
        purple: {
          500: '#8b5cf6',
        },
        cyan: {
          400: '#34d9eb',
          500: '#06b6d4',
        },
      },
      animation: {
        blink: 'blink 1s infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 2s infinite',
      },
      boxShadow: {
        glow: '0 0 20px rgba(139, 92, 246, 0.5)',
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};