/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        'loop-scroll':'loop-scroll 50s linear infinite',
        'smoky': 'smoky 5s linear infinite',
      },
      keyframes:{
        "loop-scroll":{
          from:{transform:'translateX(-100%)'},
          to:{transform:'translateX(0)'}

        },
        'smoky': {
          '0%, 100%': { opacity: 0.2 },
          '50%': { opacity: 0.8 }
        }
      }
    },
  },
  plugins: [],
}

