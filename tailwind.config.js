/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'oceania': {
          50: '#F0F3FF',
          100: '#E5E4F5',
          300: '#CCCBDE',
          400: '#7F7CA5',
          600: '#8F8CB2',
          700: '#8A86B6',
          800: '#3D3971',
          900: '#16114E',
        },
        'airbnb': {
          DEFAULT: '#FF385C'
        }
      }
    },
  },
  plugins: [],
}
