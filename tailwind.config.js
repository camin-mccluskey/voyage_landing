// color palette generation: https://color.adobe.com/create/color-wheel
// shade generation: https://noeldelgado.github.io/shadowlord/#3b82f6 (using 20% as the gradation)

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      }
    },
    colors: {
      primary: {
        50: "#ffffff",
        100: "#d8e6fd", 
        200: "#b1cdfb",
        300: "#89b4fa",
        400: "#629bf8",
        500: "#3b82f6",
        600: "#2f68c5",
        700: "#234e94",
        800: "#183462",
        900: "#0c1a31",
      },
      light: {
        50: "#ffffff",
        100: "#d6fafe", 
        200: "#acf6fd",
        300: "#83f1fc",
        400: "#59edfb",
        500: "#30e8fa",
        600: "#26bac8",
        700: "#1d8b96",
        800: "#135d64",
        900: "#0a2e32",
      },
      mid_light: {
        50: "#ffffff",
        100: "#d4ecf8", 
        200: "#aad8f2",
        300: "#7fc5eb",
        400: "#55b1e5",
        500: "#2a9ede",
        600: "#227eb2",
        700: "#195f85",
        800: "#113f59",
        900: "#08202c",
      },
      mid_dark: {
        50: "#ffffff",
        100: "#d4d9f8", 
        200: "#aab3f2",
        300: "#7f8ceb",
        400: "#5566e5",
        500: "#2a40de",
        600: "#2233b2",
        700: "#192685",
        800: "#111a59",
        900: "#080d2c",
      },
      dark: {
        50: "#ffffff",
        100: "#dcd6fe", 
        200: "#b8acfd",
        300: "#9583fc",
        400: "#7159fb",
        500: "#4e30fa",
        600: "#3e26c8",
        700: "#2f1d96",
        800: "#1f1364",
        900: "#100a32",
      }
    },
  },
  variants: {
    animation: ["motion-safe"],
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
