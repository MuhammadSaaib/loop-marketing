import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a1819',
        secondary: '#2a2829',
        accent: {
          yellow: '#FFD700',
          gold: '#FFC107',
          white: '#FFFFFF',
          gray: '#E8E8E8',
        },
        text: {
          primary: '#FFFFFF',
          muted: '#B0B0B0',
        },
      },
      fontFamily: {
        thin: ['Thin', 'sans-serif'],
        light: ['Light', 'sans-serif'],
        grotesk: ['Space Grotesk', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        xs: ['12px', { lineHeight: '16px' }],
        sm: ['14px', { lineHeight: '20px' }],
        base: ['16px', { lineHeight: '24px' }],
        lg: ['18px', { lineHeight: '28px' }],
        xl: ['20px', { lineHeight: '28px' }],
        '2xl': ['24px', { lineHeight: '32px' }],
        '3xl': ['30px', { lineHeight: '36px' }],
        '4xl': ['36px', { lineHeight: '40px' }],
        '5xl': ['48px', { lineHeight: '1.2' }],
        '6xl': ['60px', { lineHeight: '1.2' }],
        '7xl': ['72px', { lineHeight: '1.2' }],
      },
      fontWeight: {
        thin: '100',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #1a1819, #2a2829)',
        'gradient-accent': 'linear-gradient(90deg, #FFD700, #FFC107)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'subtle-glow': 'subtleGlow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        subtleGlow: {
          '0%, 100%': { textShadow: '0 0 10px rgba(255, 215, 0, 0.2)' },
          '50%': { textShadow: '0 0 20px rgba(255, 215, 0, 0.4)' },
        },
      },
    },
  },
  plugins: [],
}
export default config