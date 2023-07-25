import React, { useEffect, useRef } from "react";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";
import { srConfig } from "../../config";
import styled from "styled-components";
import Image from "next/image";
import Me from "../../images/me.jpeg";

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-sm);

      &:before {
        content: "▹";
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-md);
        line-height: 12px;
      }
    }
  }
`;

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--test);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      /* object-fit: cover; */
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--gray);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;
export default function About() {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    async function animate() {
      if (revealContainer.current) {
        const sr = (await import("scrollreveal")).default;
        sr().reveal(revealContainer.current, srConfig());
      }
    }
    animate();
  }, []);

  const skills = ["Angular", "React", "TypeScript", "JavaScript", "Nodejs", "PHP", "Laravel", "Docker"];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">Sobre mim</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Olá! Me chamo Henrique, sou desenvolvedor web e estudante de
              ciência da computação. Sou apaixonado em solucionar problemas
              reais com o uso de tecnologias.
            </p>

            <p>
              Atualmente estou trabalhando como desenvolvedor Full Stack na
              empresa{" "}
              <a href="https://siimp.com.br/" target="_blank" rel="noreferrer">
                {" "}
                Siimp Sistemas
              </a>
            </p>

            <p>Tenho como experiência o desenvolvimento Full Stack.</p>

            <p>
              Aqui estão algumas tecnologias com as quais tenho experiência:
            </p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <Image
              className="img"
              src={Me}
              quality={95}
              alt="Headshot"
              layout="responsive"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
}
