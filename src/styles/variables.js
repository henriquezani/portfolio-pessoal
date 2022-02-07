import { css } from 'styled-components';

const variables = css`
    :root{
        // Cores
        --dark: #181818;
        --light-dark: #1D2025;
        --gray: #656C76;
        --green: #B0F7BF;
        --green-tint: rgba(100, 255, 218, 0.1);
        --white: #FFFEFF;
        --blue: #121E30;
        --navy-shadow: rgba(29, 32, 37, 0.7);
        --test: #272727;

        // Fontes
        --font-sans: 'Inter', 'Open Sans', sans-serif;
        --font-mono: 'Fira Mono', 'Fira Code', 'Roboto Mono' monospace;


        // Font size
        --fz-xxs: 12px;
        --fz-xs: 13px;
        --fz-sm: 14px;
        --fz-md: 16px;
        --fz-lg: 18px;
        --fz-xl: 20px;
        --fz-xxl: 22px;
        --fz-heading: 32px;

        --border-radius: 4px;
        --nav-height: 100px;
        --nav-scroll-height: 70px;

        --tab-height: 42px;
        --tab-width: 120px;

        --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
        --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

        --hamburger-width: 30px;

        --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
        --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
        --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
        --ham-after-active: bottom 0.1s ease-out,
        transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;

        }
`

export default variables;