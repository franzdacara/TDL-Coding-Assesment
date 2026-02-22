import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './lib/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    bg: '#F5F2ED',
                    yellow: '#F2C94C',
                    blue: '#56CCF2',
                    green: '#6FCF97',
                    purple: '#BB6BD9',
                    red: '#EB5757',
                    orange: '#F2994A',
                    ink: '#1A1A1A',
                },
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                serif: ['"Playfair Display"', 'serif'],
            },
        },
    },
    plugins: [],
};

export default config;
