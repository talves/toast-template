// const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  content: ["./src/**/*.js", "./content/**/*.mdx"],
  theme: {
    colors: {
      transparent: "transparent",
      gray: {
        100: "#f7fafc",
        200: "#edf2f7",
        300: "#e2e8f0",
        400: "#cbd5e0",
        500: "#a0aec0",
        600: "#718096",
        700: "#4a5568",
        800: "#2d3748",
        900: "#1a202c",
      },
      primary: {
        100: "#f8fcff",
        200: "#d1eaf2",
        300: "#a5deea",
        400: "#62c8d3",
        500: "#3f9fb2",
        600: "#40859d",
        700: "#3c6a84",
        800: "#355069",
        900: "#2b394d",
      },
      secondary: {
        100: "#6492A6",
        200: "#59879b",
        300: "#527b8e",
        400: "#4A7082",
        500: "#3C5A68",
        600: "#344F5B",
        700: "#2D444E",
        800: "#253941",
        900: "#1E2E34",
      },
    },
    extend: {
      colors: {
        brandblue: colors.blue[500],
        brandred: colors.red[300],
        brandpurple: colors.purple[500],
      },
    },
  },
  variants: {},
  plugins: [
    // require("@tailwindcss/ui")
  ],
};
