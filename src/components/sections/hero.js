import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'
import { navDelay, loaderDelay} from '../../utils/index'
import Icon from '../icons/icon'
import { socialMedia } from '../../config'
import {IconLinkedin, IconGitHub, IconTwitter} from  '../icons/index'

const StyledHeroSection = styled.section`
    ${({ theme }) => theme.mixins.flexCenter};
    flex-direction: column;
    align-items: flex-start;
    min-height: 100vh;
    padding: 0;

    @media(max-width: 480px) and (min-height: 700px){
        padding-bottom: 10vh;
    }

    h1{
        margin: 0 0 30px 4px;
        color: var(--white);
        font-family: var(--font-mono);
        font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
        font-weight: 700;

        @media(max-width: 480px){
            margin: 0 0 20px 2px;
        }
    }

    h3{
        margin-top: 10px;
        color: var(--gray);
        line-height: 0.9;
    }

    P{
        color: var(--gray);
        margin: 20px 0;
        max-width: 540px;
    }
`
const StyledSocialLinks = styled.div`
    display: block;
    width: 100%;
    max-width: 150px;
    margin: 0 auto 10px;
    color: var(--white);


    ul {
        ${({ theme }) => theme.mixins.flexBetween};
        padding: 0;
        margin: 0;
        list-style: none;

        a{
            padding: 10px;
            svg{
                width: 25px;
                height: 25px;
            }
        }
    }

`


export default function Hero (){
    const [isMounted, setIsMounted] = useState(false);
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
      if (prefersReducedMotion) {
        return;
      }
  
      const timeout = setTimeout(() => setIsMounted(true), navDelay);
      return () => clearTimeout(timeout);
    }, []);

    const one = <h2 className="big-heading">Olá, me chamo Henrique.</h2>;
    const two = <h3 className="big-heading">Sou desenvolvedor web.</h3>;
    const three = (
    <>
      <p>
        Estou focado em desenvolvimento de sites interativos que funcionam em qualquer plataforma e dispositivo. Me preocupo profundamente em desenvolver códigos de alta qualidade e escalável.
      </p>
    </>
    );
    
      const four = (
        <StyledSocialLinks>
          <ul>
            {socialMedia &&
                socialMedia.map(({ name, url }, i) => (
                    <li key={i}>
                        <a 
                            href={url} 
                            aria-label={name}
                            target="_blank"  
                            rel="noreferrer"
                        >
                            <Icon name={name} />
                        </a>
                    </li>
            ))}
          </ul>
        </StyledSocialLinks>
      )

  const items = [one, two, three, four]

  return(
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition 
                key={i} 
                classNames="fadeup" 
                timeout={loaderDelay}
              >
                <div style={{ transitionDelay: `${i + 1}00ms` }}
                >
                  {item}
                </div>
                
              </CSSTransition>
              
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  )
}