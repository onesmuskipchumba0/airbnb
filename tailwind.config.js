/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'airbnb-red': '#FF385C',
        'airbnb-dark': '#222222',
        'airbnb-light': '#FFFFFF',
        'airbnb-gray': '#717171',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in',
        'fade-in-delay': 'fadeIn 1s ease-in 0.5s forwards',
        'fade-in-delay-2': 'fadeIn 1s ease-in 1s forwards',
        'scroll': 'scroll 2s ease-in-out infinite',
        'bounce': 'bounce 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scroll: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          "primary": "#FF385C",
          "primary-focus": "#FF385C",
          "primary-content": "#FFFFFF",
          "base-100": "#FFFFFF",
          "base-200": "#F7F7F7",
          "base-300": "#EBEBEB",
          "base-content": "#222222",
        },
      },
    ],
  },
}
