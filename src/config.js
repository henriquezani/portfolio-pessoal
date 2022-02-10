import React from 'react'
import PortfolioImg from './images/portfolioImg.png'
import SpotifyImg from './images/spotifyProfile.png'
import DtmoneyImg from './images/dtmoney.png'



module.exports = {
    email: 'henrique.zani@hotmail.com',

    socialMedia: [
        {
            name: 'GitHub',
            url: 'https://github.com/henriquezani'
        },
        {
            name: 'Linkedin',
            url: 'https://www.linkedin.com/in/henrique-zani-068b9716a/',
        },
        {
            name: 'Twitter',
            url: 'https://twitter.com/henriquezani_'
        },
    ],

    navLinks: [
        {
            name: 'Sobre',
            url: '/#about'
        },

        {
            name: 'Projetos',
            url: '/#projects',
        },

        {
            name: 'Contato',
            url: '/#contact'
        },
    ],

    projects: [
        {   
            title: 'Portfolio',
            description: 'Um portfólio pessoal é uma coleção de registros que refletem suas habilidades, experiências e atributos. Mostra a sua personalidade para um potencial empregador.',
            tech: ['React', 'Next.js', 'Styled Components', 'Vercel'],
            githubLink: 'https://github.com/henriquezani/portfolio-pessoal',
            external: 'https://henriquezani.com',
            img: PortfolioImg,
        },
        {
            title: 'Spotify Profile',
            description: (
            <p>
                Um aplicativo web para visualizar dados personalizados do Spotify. Esses dados estão disponibilizado na <a 
                href="https://developer.spotify.com/documentation/web-api/" target="_blank"  rel="noreferrer">
                API do Spotify.
                </a>
            </p>
            ),
            tech: ['React', 'Styled Components', 'Express', 'Spotify API', 'Heroku'],
            githubLink: 'https://github.com/henriquezani/spotify-profile',
            external: 'https://spotify-profile-henriquezani.herokuapp.com/',
            img: SpotifyImg
        },
        {
            title: 'Dtmoney',
            description: 'Um aplicativo web para gerenciar suas entradas e saídas usando uma API criada com Mirage.js.',
            tech: ['React', 'TypeScript', 'Styled Components', 'Mirage.js', 'Axios'],
            githubLink: 'https://github.com/henriquezani/dtmoney',
            external: 'https://github.com/henriquezani/dtmoney',
            img: DtmoneyImg
        }
    ],

    srConfig: (delay = 200, viewFactor = 0.25) => ({
        origin: 'bottom',
        distance: '20px',
        duration: 500,
        delay,
        rotate: { x: 0, y: 0, z: 0 },
        opacity: 0,
        scale: 1,
        easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
        mobile: true,
        reset: false,
        useDelay: 'always',
        viewFactor,
        viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    }),
}

