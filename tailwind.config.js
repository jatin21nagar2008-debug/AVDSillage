/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F4F7F2',
          100: '#E6ECE2',
          200: '#CFDBC8',
          300: '#ADC2A3',
          400: '#8FA986',
          500: '#6E8A64',
          600: '#536D4B',
          700: '#3F5439',
          800: '#1D3B23',
          900: '#0F2E18',
          950: '#081D0F',
          // Theme specific highlights from reference
          lime: '#C8E870',        // Lime/Chartreuse pill button in screenshot
          limeHover: '#B9DB5F',
          limeLight: '#E8F7B8',
          sage: '#9EB495',        // Soft sage green canvas border
          sageLight: '#E9EFE6',
          forest: '#0D381E',
          surface: '#F7FAF5',
          cream: '#FAFCF8',
          gold: '#EAB308',
          goldDark: '#CA8A04',
          border: '#E3EAE0',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 10px 30px -5px rgba(15, 46, 24, 0.06), 0 4px 12px -2px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 20px 40px -8px rgba(15, 46, 24, 0.12), 0 8px 16px -4px rgba(0, 0, 0, 0.05)',
        'hero-card': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}
