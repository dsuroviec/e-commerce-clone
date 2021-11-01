module.exports = {
    // mode: "jit",
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    options: {
        safelist: ["color:chewyBlue"],
    },
    darkMode: "class", // or 'media' or 'class'
    theme: {
        borderWidth: {
            DEFAULT: "2px",
            1: "1px",
        },
        extend: {
            colors: {
                transparent: "transparent",
                current: "currentColor",
                chewyBlue: {
                    light: "#dbebf9",
                    DEFAULT: "#128ced",
                    dark: "#0e70be",
                    darker: "#1c49c2",
                    darkest: "#002957",
                    evenDarker: "#163977",
                },

                chewyGreen: {
                    light: "#ff7ce5",
                    DEFAULT: "#327435",
                    dark: "#ff16d1",
                },
                chewyOrange: {
                    DEFAULT: "#ef6c00",
                },
                chewyRed: {
                    DEFAULT: "#d0021b",
                },

                chewyYellow: {
                    DEFAULT: "#f8d81c",
                },
                chewyGray: {
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
