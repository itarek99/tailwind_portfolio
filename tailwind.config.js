/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./*html'],
    theme: {
        extend: {
            screens: {
                sm: '480px',
            },
            spacing: {
                big: '48rem',
                '50vh': '50vh',
            },
        },
        fontFamily: {
            nunito: ['Nunito', 'sans-serif'],
            openSans: ['Open Sans', 'sans-serif'],
            montserrat: ['Montserrat', 'sans-serif'],
        },
    },
    plugins: [],
};

// npx tailwindcss -i ./css/input.css -o ./css/tailwind.css --watch
