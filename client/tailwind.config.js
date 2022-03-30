module.exports = {
  // mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      Fruktur: ["Fruktur"],
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        crunchyBlue: {
          light: "#dbebf9",
          DEFAULT: "#128ced",
          dark: "#0e70be",
          darker: "#1c49c2",
          darkest: "#002957",
          evenDarker: "#163977",
        },

        crunchyGreen: {
          light: "#ff7ce5",
          DEFAULT: "#327435",
          dark: "#ff16d1",
        },
        crunchyOrange: {
          light: "#ff9800",
          DEFAULT: "#ef6c00",
        },
        crunchyRed: {
          DEFAULT: "#d0021b",
        },

        crunchyYellow: {
          DEFAULT: "#f8d81c",
        },
        crunchyGray: {
          lightest: "#fff",
          lighter: "#f9f9f9",
          light: "#ddd",
          DEFAULT: "#999",
          dark: "#555",
          darker: "#333",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
