/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/*.{js,jsx}", "./src/styles/**/*.css"],
  theme: {
    extend: {
      colors: {
        darkCyan: "#5BA4A4",
        grayishCyan: "#EFFAFA",
        darkGrayishCyan: "#7B8E8E",
        veryDarkGrayishCyan: "#2C3A3A",
        lightGrayishCyanFilter: "#EEF6F6",
      },
      backgroundImage: {
        headerImage:
          "url('https://res.cloudinary.com/dwdz4mn27/image/upload/v1684532111/bg-header-desktop_kczt74.svg')",
      },
      spacing: {
        "30px": "30px",
      },
      height: {
        200: "200vh",
      },
      fontFamily: {
        league: ["League Spartan", "sans-serif"],
      },
    },
    fontWeight: {
      medium: "500",
      bold: "700",
    },
    minHeight: {
      20: "80px",
    },
  },
  plugins: [],
};
