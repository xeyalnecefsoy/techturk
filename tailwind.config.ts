import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#7dd3fc', // sky-300
          DEFAULT: '#0ea5e9', // sky-500
          dark: '#075985', // sky-900 (navy-ish)
        },
        navy: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'Segoe UI', 'Inter', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(2, 132, 199, 0.25)',
      },
    },
  },
  plugins: [],
} satisfies Config
