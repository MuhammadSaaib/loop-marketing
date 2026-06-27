import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#070B16',
        secondary: '#111827',
        accent: {
          blue: '#3B82F6',
          cyan: '#00E5FF',
          purple: '#8B5CF6',
          pink: '#FF4FD8',
        },
        text: {
          primary: '#F8FAFC',
          muted: '#B6C2D9',
        },
      },
      fontFamily: {
        grotesk: ['Space Grotesk', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #3B82F6, #8B5CF6, #00E5FF)',
        'gradient-cta': 'linear-gradient(90deg, #3B82F6, #00E5FF)',
        'gradient-hover': 'linear-gradient(135deg, #8B5CF6, #FF4FD8)',
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
          '0%, 100%': { textShadow: '0 0 20px rgba(59, 130, 246, 0.5)' },
          '50%': { textShadow: '0 0 40px rgba(59, 130, 246, 0.8)' },
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