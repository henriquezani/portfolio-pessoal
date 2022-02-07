import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '../../config'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  p{
    color: var(--gray);
  }
  
  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;


export default function Contact({onRequestOpen}) {
    const revealContainer = useRef(null)
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        if (prefersReducedMotion) {
            return;
         }

        async function animate() {
          if (revealContainer.current) {
            const sr = (await import("scrollreveal")).default
            sr().reveal(revealContainer.current, srConfig())
          }
        }
        animate()
      }, [])

      return(
          <StyledContactSection id="contact" ref={revealContainer}>
              <h2 className="numbered-heading overline">E agora?</h2>

              <h2 className="title">Entrar em contato</h2>

              <p>
                Em caso queira entrar em contato comigo, você pode enviar um email ou mandar uma mensagem nas minhas redes sociais. 
              </p>

              <a className="email-link" onClick={onRequestOpen}>
                  Diga Olá
              </a>
          </StyledContactSection>
      )
}