/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        scroll: "scroll var(--animation-duration, 20s) linear infinite",
      },
      keyframes: {
        scroll: {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        custom: {
          red: {
            DEFAULT: "#B30000",
            dark: "#4D0000",
          },
          yellow: "#FED700",
          lightblue: "#F8F9FE",
          black: "#101010",
        },
      },
    },
  },
  plugins: [],
};
