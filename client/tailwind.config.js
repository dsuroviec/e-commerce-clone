module.exports = {
    mode: "jit",
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    options: {
        safelist: ["color:chewyBlue"],
    },
    darkMode: "class", // or 'media' or 'class'
    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",
            chewyBlue: {
                light: "#dbebf9",
                DEFAULT: "#128ced",
                dark: "#0e70be",
                darker: "#1c49c2",
                darkest: "#002957",
            },
            chewyGreen: {
                light: "#ff7ce5",
                DEFAULT: "#327435",
                dark: "#ff16d1",
            },
            chewyOrange: {
                DEFAULT: "#ef6c00",
            },

            chewyYellow: {
                DEFAULT: "#f8d81c",
            },
            chewygray: {
                lightest: "#fff",
                lighter: "#f9f9f9",
                light: "#f5f5f5",
                DEFAULT: "#999",
            },
        },
        extend: {
            colors: {
                chewyRed: "#FF0000",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
