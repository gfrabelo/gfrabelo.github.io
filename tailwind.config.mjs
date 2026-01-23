/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        bg: {
          main: 'rgb(2 4 16 / <alpha-value>)',
          card: 'rgb(15 17 26 / <alpha-value>)',
          surface: 'rgb(19 21 32 / <alpha-value>)'
        },
        accent: {
          primary: 'rgb(99 102 241 / <alpha-value>)',
          secondary: 'rgb(139 92 246 / <alpha-value>)',
          tertiary: 'rgb(6 182 212 / <alpha-value>)',
          success: 'rgb(16 185 129 / <alpha-value>)',
          glow: 'rgb(79 70 229 / <alpha-value>)',
        },
        text: {
          primary: 'rgb(248 250 252 / <alpha-value>)',
          secondary: 'rgb(148 163 184 / <alpha-value>)',
          muted: 'rgb(100 116 139 / <alpha-value>)',
        }
      },
      animation: {
        'blob': 'blob 25s infinite',
        'spin-slow': 'spin 15s linear infinite',
        'float': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-xy': 'gradient-xy 6s ease infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(50px, -80px) scale(1.2)' },
          '66%': { transform: 'translate(-40px, 40px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-25px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(99, 102, 241, 0.2)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 40px rgba(99, 102, 241, 0.6)' },
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01))',
      }
    },
  },
  plugins: [],
}
