/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f8ff',
          100: '#e6eeff',
          200: '#c4d4ff',
          300: '#9fb9ff',
          400: '#6b90ff',
          500: '#3b69ff',
          600: '#1f4efe',
          700: '#173ddb',
          800: '#1633ae',
          900: '#142c8a',
        },
      },
    },
  },
  plugins: [],
}
