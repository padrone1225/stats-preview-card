/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "hsl(233, 47%, 7%)",
        "desaturated-blue": "hsl(244, 38%, 16%)",
        "soft-violet": "hsl(277, 64%, 61%)",
        "main-white": "hsla(0, 0%, 100%, 0.75)",
        "stat-white": "hsla(0, 0%, 100%, 0.6)",
      },
      boxShadow: {
        "primary-shadow":
          "0.75rem 0.75rem 12.5rem 1.25rem rgb(203 12 153 / 22%)",
        "secondary-shadow":
          "0.75rem 0.75rem 12.5rem 1.25rem rgb(203 12 153 / 40%)",
      },
      keyframes: {
        slideIn: {
          "0%": {
            "-webkit-transform": "translateX(-1.25rem)",
            transform: "translateX(-1.25rem)",
            opacity: 0,
          },
          "20%": {
            "-webkit-transform": "translateY(0.7rem)",
            transform: "translateX(0.7rem)",
            opacity: 1,
          },
          "40%": {
            "-webkit-transform": "translateY(-0.5rem)",
            transform: "translateX(-0.5rem)",
          },
          "60%": {
            "-webkit-transform": "translateY(0.3rem)",
            transform: "translateX(0.3rem)",
          },
          "80%": {
            "-webkit-transform": "translateY(-0.1rem)",
            transform: "translateX(-0.1rem)",
          },
          "100%": {
            "-webkit-transform": "translateY(0)",
            transform: "translateX(0)",
          },
        },
        move: {
          to: {
            "background-position": "300% center",
          },
        },
      },
    },
    screens: {
      sm: { max: "700px" },
    },
  },
  plugins: [],
};
