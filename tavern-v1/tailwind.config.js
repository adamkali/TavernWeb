/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{ts,tsx}',
        './pages/**/*.{js,jsx,ts,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'vaporwave-primary': '#38fae0',
                'vaporwave-secondary': '#0099cc',
                'vaporwave-tertiary': '#FF00FF',
                'vaporwave-normal': '#001e8c',
                'vaporwave-normal-1': '#7390fb',
                'vaporwave-normal-2': '#00114d',
                'vaporwave-dark': '#5104af',
                'vaporwave-dark-1': '#2e0264',
                'vaporwave-dark-2': '#aa65ff',
                'vaporwave-accent': '#b30086',
                'vaporwave-accent-1': '#4d0039',
                'vaporwave-accent-2': '#ff00ff',
            },
            fontSize: {
                '16xl': '12rem',
                '32xl': '24rem',
            },
            size: {
                '9/10': '90%',
                '8/10': '80%',
                '7/10': '70%',
                '6/10': '60%',
                '5/10': '50%',
                '4/10': '40%',
                '3/10': '30%',
                '2/10': '20%',
                '1/10': '10%',
            },
            scale: {
                '200': '2',
                '250': '2.5',
                '500': '5',
                '1000': '10',
            },
        },
    },
    plugins: [],
};
