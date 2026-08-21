/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      screens: {
        xs: '390px',
        '3xl': '1680px'
      },
      colors: {
        mangaale: {
          /* --- Mangaale turquoise brand --- */
          primary: '#0CB79D',
          bright: '#10C9AA',
          secondary: '#087F70',
          deep: '#065F54',
          accent: '#0CB79D',
          'accent-soft': '#10C9AA',

          /* --- Neutrals --- */
          text: '#10212B',
          ink: '#10212B',
          subtext: '#5E6B73',
          muted: '#5E6B73',
          border: '#E7EEEC',
          bg: '#FFFFFF',
          'bg-soft': '#F2FBF9',
          tint: '#F2FBF9',

          /* --- Footer / dark surfaces --- */
          dark: '#0A1A22',
          navy: '#0A1A22',
          'navy-soft': '#123039'
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
        soft: '0 1px 2px rgba(16, 33, 43, 0.04), 0 8px 24px -12px rgba(16, 33, 43, 0.10)',
        card: '0 1px 2px rgba(16, 33, 43, 0.04), 0 12px 32px -16px rgba(16, 33, 43, 0.14)',
        lift: '0 2px 4px rgba(16, 33, 43, 0.04), 0 24px 48px -20px rgba(16, 33, 43, 0.22)',
        float: '0 24px 60px -24px rgba(8, 127, 112, 0.28)',
        glow: '0 8px 30px -8px rgba(12, 183, 157, 0.45)',
        'glow-lg': '0 18px 50px -12px rgba(12, 183, 157, 0.5)',
        phone: '0 60px 120px -40px rgba(8, 60, 55, 0.45), 0 30px 60px -30px rgba(16, 33, 43, 0.3)',
        inset: 'inset 0 1px 0 rgba(255,255,255,0.65)'
      },
      fontFamily: {
        sans: ['"Manrope"', '"Inter"', '"Segoe UI"', 'system-ui', 'sans-serif'],
        display: ['"Manrope"', '"Inter"', '"Segoe UI"', 'system-ui', 'sans-serif']
      },
      fontSize: {
        'display-sm': ['2.5rem', { lineHeight: '1.08', letterSpacing: '-0.03em' }],
        'display-md': ['3.5rem', { lineHeight: '1.05', letterSpacing: '-0.035em' }],
        'display-lg': ['4.5rem', { lineHeight: '1.02', letterSpacing: '-0.04em' }]
      },
      borderRadius: {
        '2xl': '1.2rem',
        '3xl': '1.65rem',
        '4xl': '2.25rem'
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.16, 1, 0.3, 1)',
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)'
      },
      keyframes: {
        'float-y': {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -18px, 0)' }
        },
        'float-soft': {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) rotate(0deg)' },
          '50%': { transform: 'translate3d(0, -12px, 0) rotate(2deg)' }
        },
        'float-tilt': {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) rotate(-3deg)' },
          '50%': { transform: 'translate3d(0, -22px, 0) rotate(3deg)' }
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.85)', opacity: '0.6' },
          '100%': { transform: 'scale(1.6)', opacity: '0' }
        },
        'gradient-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        marquee: {
          from: { transform: 'translate3d(0, 0, 0)' },
          to: { transform: 'translate3d(-50%, 0, 0)' }
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' }
        },
        'draw-line': {
          from: { strokeDashoffset: '1000' },
          to: { strokeDashoffset: '0' }
        },
        'particle-drift': {
          '0%': { transform: 'translate3d(0,0,0) scale(1)', opacity: '0' },
          '10%, 80%': { opacity: '0.7' },
          '100%': { transform: 'translate3d(14px, -80px, 0) scale(0.4)', opacity: '0' }
        }
      },
      animation: {
        'float-y': 'float-y 6s ease-in-out infinite',
        'float-soft': 'float-soft 7s ease-in-out infinite',
        'float-tilt': 'float-tilt 8s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 3s ease-out infinite',
        'gradient-pan': 'gradient-pan 8s ease infinite',
        marquee: 'marquee 40s linear infinite',
        'marquee-slow': 'marquee 60s linear infinite',
        'particle-drift': 'particle-drift 9s linear infinite'
      }
    }
  },
  plugins: []
}
