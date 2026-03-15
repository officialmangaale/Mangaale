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
          bg: '#07080f',
          panel: '#12131c',
          card: '#181a24',
          ink: '#f4f1e8',
          'ink-soft': '#c9c4b7',
          accent: '#e1ba58',
          'accent-soft': '#f5d78f'
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
