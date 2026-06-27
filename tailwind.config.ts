import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F5F5F5',
        secondary: '#FFFFFF',
        accent: {
          grey: '#6B7280',
          darkgrey: '#1F2937',
          lightgrey: '#E5E7EB',
          white: '#FFFFFF',
        },
        text: {
          primary: '#1F2937',
          muted: '#6B7280',
        },
      },
      fontFamily: {
        grotesk: ['Space Grotesk', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #E5E7EB, #D1D5DB, #F3F4F6)',
        'gradient-cta': 'linear-gradient(90deg, #1F2937, #374151)',
        'gradient-hover': 'linear-gradient(135deg, #6B7280, #4B5563)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'glow': 'glow 3s ease-in-out infinite',
        'particle-float': 'particleFloat 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 20px rgba(31, 41, 55, 0.3)' },
          '50%': { textShadow: '0 0 40px rgba(31, 41, 55, 0.5)' },
        },
        particleFloat: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-30px) translateX(20px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config