// const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  content: ["./src/**/*.js", "./content/**/*.mdx"],
  theme: {},
  variants: {},
  plugins: [
    // require("@tailwindcss/ui")
  ],
};
