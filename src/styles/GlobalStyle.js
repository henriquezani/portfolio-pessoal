import { createGlobalStyle } from "styled-components";
import variables from './variables'
import TransitionStyles from './TransitionStyles'



const GlobalStyle = createGlobalStyle`
    ${variables};
    ${TransitionStyles};



    html{
        box-sizing: border-box;
        width: 100%;
        scroll-behavior: smooth;
    }

    *,
    *:before,
    *:after{
        box-sizing: inherit;
    }

    ::selection{
        background-color: var(--green-tint);
        color: var(--white)
    }


    :focus{
        outline: 2px dashed var(--green);
        outline-offset: 3px;
    }

    :focus:not(:focus-visible) {
        outline: none;
        outline-offset: 0px;
    }

    :focus-visible {
        outline: 2px dashed var(--green);
        outline-offset: 3px;
    }


    /* Scrollbar */
    html{
        scrollbar-width: thin;
        scrollbar-color: var(--blue);
    }

    body::-webkit-scrollbar {
        width: 12px;
    }

    body::-webkit-scrollbar-track {
        background: var(--blue);
    }

    body::-webkit-scrollbar-thumb {
        background-color: var(--blue);
        border: 3px solid var(--blue);
        border-radius: 10px;
    }

    body{
        margin: 0;
        width: 100%;
        min-height: 100%;
        overflow-x: hidden;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        background-color: var(--dark);
        color: var(--white);
        line-height: 1.3;
        font-family: var(--font-sans);
        font-size: var(--fz-xl);

        @media (max-width: 480px) {
            font-size: var(--fz-lg);
        }

        &.hidden{
            overflow: hidden;
        }

        &.blur{
            overflow: hidden;

            header{
                background-color: transparent;
            }

            #content > * {
                filter: blur(5px) brightness(0.7);
                transition: var(--transition);
                pointer-events: none;
                user-select: none;
            }
        }
    }

  

    main{
        margin: 0 auto;
        width: 100%;
        max-width: 1600px;
        min-height: 100vh;
        padding: 200px 150px;

        @media (max-width: 1080px){
        padding: 200px 100px;
        }

        @media (max-width: 768px){
        padding: 150px 50px;
        }

        @media (max-width: 480px){
        padding: 125px 25px;
        }

        &.fillHeight {
            padding: 0 150px;

            @media (max-width: 1080px) {
                padding: 0 100px;
            }
            @media (max-width: 768px) {
                padding: 0 50px;
            }
            @media (max-width: 480px) {
                padding: 0 25px;
            }
        }       
    }

    section{
        margin: 0 auto;
        padding: 100px 0;
        max-width: 1000px;

        @media (max-width: 768px) {
            padding: 80px 0;
        }

        @media (max-width: 480px) {
            padding: 60px 0;
        }
    }

    h1,h2,h3,h4,h5,h6 {
        margin: 0 0 10px 0;
        font-weight: 700;
        color: var(--white);
        line-height: 1.1;
    }

    .big-heading {
        margin: 0;
        font-size: clamp(40px, 8vw, 80px);
    }

    .numbered-heading {
        display: flex;
        align-items: center;
        position: relative;
        margin: 10px 0 40px;
        width: 100%;
        font-size: clamp(22px, 5vw, var(--fz-heading));
        white-space: nowrap;

        &:before {
            position: relative;
            bottom: 4px;
            counter-increment: section;
            content: '0' counter(section) '.';
            margin-right: 10px;
            color: var(--green);
            font-family: var(--font-mono);
            font-size: clamp(var(--fz-md), 3vw, var(--fz-xl));
            font-weight: 400;

            @media (max-width: 480px) {
                margin-bottom: -3px;
                margin-right: 5px;
            }
        }

    &:after {
            content: '';
            display: block;
            position: relative;
            top: -5px;
            width: 300px;
            height: 1px;
            margin-left: 20px;
            background-color: var(--gray);

        @media (max-width: 1080px) {
            width: 200px;
        }
        @media (max-width: 768px) {
            width: 100%;
        }
        @media (max-width: 600px) {
            margin-left: 10px;
        }
    }
  }

    img,
    svg{
        width: 100%;
        max-width: 100%;
        vertical-align: middle;
    }

    a {
        display: inline-block;
        text-decoration: none;
        text-decoration-skip-ink: auto;
        color: inherit;
        position: relative;
        transition: var(--transition);

        &:hover,
        &:focus{
            color: var(--green);
        }

        &.inline-link{
            ${({ theme }) => theme.mixins.inlineLink};
        }
    }
    button{
        cursor:pointer;
        border: 0;
        border-radius: 0;
    }

    input, textarea{
        border-radius: 0;
        outline: 0;
        font-family: var(--font-sans);


        &:focus{
            outline:0;
        }

        &:focus,
        &:active{
            &::placeholder{
                opacity: 0.5;
            }
        }
    }

    p{
        margin: 0 0 15px 0;

        /* &:last-child,
        &:last-of-type{
            margin: 0;
        } */

        & > a {
            ${({ theme }) => theme.mixins.inlineLink};
        }
    }

    ul {
        &.fancy-list {
        padding: 0;
        margin: 0;
        list-style: none;
        font-size: var(--fz-lg);
        li {
            position: relative;
            padding-left: 30px;
            margin-bottom: 10px;
            &:before {
            content: '▹';
            position: absolute;
            left: 0;
            color: var(--green);
            }
        }
        }
    }
    
    svg {
        width: 100%;
        height: 100%;
        fill: currentColor;
        vertical-align: middle;

        &.feather {
            fill: none;
        }
    }

    .overline {
        color: var(--green);
        font-family: var(--font-mono);
        font-size: var(--fz-md);
        font-weight: 400;
    }

    .skip-to-content {
        ${({ theme }) => theme.mixins.button};
        position: absolute;
        top: auto;
        left: -999px;
        width: 1px;
        height: 1px;
        overflow: hidden;
        z-index: -99;

        &:focus,
        &:active {
        background-color: var(--green);
        color: var(--white);
        top: 0;
        left: 0;
        width: auto;
        height: auto;
        overflow: auto;
        z-index: 99;
        }
    }

    .react-modal-overlay{
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background: var(--light-dark);
        padding: 3rem;
        position: relative;
        border-radius: var(--border-radius);

        &:focus{
            outline: none;
            outline-offset: none;
        }
    }

    .react-modal-close{
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        transition: filter 0.2s;

        img{
            width: 40px;
            height: 40px;
        }

        &:hover{
            filter: brightness(0.8)
        }
    }
`

export default GlobalStyle;