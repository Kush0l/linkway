/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      clipPath: {
        diagonal: "polygon(0 0, 100% 0, 100% 70%, 0% 100%)",
      },
      backgroundImage: {
        'gradient-wave': 'linear-gradient(135deg, #2563eb, #ffffff)',
        neon: 'linear-gradient(90deg, #00f0ff, #8a2be2, #00f0ff)',
      },
      keyframes: {
        neonFlow: {
          '0%': { backgroundPosition: '0% 50%', opacity: '0.2' },
          '25%': { opacity: '1' },
          '75%': { opacity: '1' },
          '100%': { backgroundPosition: '100% 50%', opacity: '0.2' },
        },
        moveBG: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        waveGradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        fall: {
          '0%': {
            transform: 'translateY(-100px)',
            opacity: '0',
          },
          '30%': {
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(100vh)',
            opacity: '0',
          },
        },
      },
      animation: {
        neonFlow: 'neonFlow 5s ease-in-out infinite',
        'bg-move': 'moveBG 8s linear infinite',
        'wave-gradient': 'waveGradient 10s ease-in-out infinite',
        fall: 'fall 6s linear infinite',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwind-clip-path'),
  ],
};
