/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#E393A6',
          200: '#BE4465',
          300: '#A33556',
          400: '#9E3353',
          500: '#AD3C5C',
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(135deg, #AD3C5C 0%, #E393A6 100%)',
        'gradient-card': 'linear-gradient(160deg, #BE4465 0%, #9E3353 100%)',
        'gradient-hover': 'linear-gradient(160deg, #A33556 0%, #AD3C5C 100%)',
      },
    },
  },
  plugins: [],
}

