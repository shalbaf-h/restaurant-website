/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      brightness: {
        25: '25%',
      },

      fontFamily: {
        'nova': '"Nova slim"',
        'mogra': 'mogra',
      },

      keyframes: {
        scaling: {
          '0%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' }
        },
        moveup: {
          '0%': { transform: 'translateY(360px)', opacity: '0' },
          '100%': { transform: 'translateY(0px)' }
        }
      },
      animation: {
        myscale: 'scaling 7s linear',
        moveup: 'moveup 0.7s ease-out',
      },
    },
    plugins: [],
  }
}
