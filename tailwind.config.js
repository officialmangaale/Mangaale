/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        mangaale: {
          primary: '#FF7A00',
          secondary: '#FFA133',
          dark: '#1F2937',
          text: '#111827',
          subtext: '#6B7280',
          bg: '#FFFFFF',
          'bg-soft': '#FFF7ED',
          accent: '#FF7A00',
          'accent-soft': '#FFA133'
        }
      },
      opacity: {
        6: '0.06',
        7: '0.07',
        8: '0.08',
        12: '0.12',
        15: '0.15',
        35: '0.35',
        65: '0.65',
        85: '0.85'
      },
      boxShadow: {
        luxe: '0 25px 80px -30px rgba(225, 186, 88, 0.45)'
      },
      fontFamily: {
        sans: ['"Manrope"', '"Inter"', '"Segoe UI"', 'system-ui', 'sans-serif'],
        display: ['"Manrope"', '"Inter"', '"Segoe UI"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif']
      },
      borderRadius: {
        '2xl': '1.2rem',
        '3xl': '1.65rem'
      }
    }
  },
  plugins: []
}
