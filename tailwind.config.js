module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            textColor: {
                "edu-sky": "#4a78e1",
                "edu-navy": "#272774",
            },
            backgroundColor: (theme) => ({
                "edu-soft-blue": "#e4fdfd",
                "edu-sky": "#4a78e1",
                "edu-navy": "#272774",
            }),
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
