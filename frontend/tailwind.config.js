const color = require("tailwindcss/colors");

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        colors: {
            ...color,
            modalWrapper: "rgba(0,0,0,0.8)",
        },

        extend: {},
    },
    plugins: [],
};
