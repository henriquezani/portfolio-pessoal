import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon  from '../components/icons/icon';
import { socialMedia } from '../config'


const StyledFooter = styled.footer`
    ${({ theme }) => theme.mixins.flexCenter};
    flex-direction: column;
    height: auto;
    min-height: 70px;
    padding: 15px;
    text-align: center;
    /* background-color: var(--light-dark); */
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
                width: 20px;
                height: 20px;
            }
        }
    }
`;

const StyledCredit = styled.div`
    color: var(--white);
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    line-height: 1;

    a{
        padding: 10px;
    }

    .github-stats {
    margin-top: 10px;

    & > span {
      display: inline-flex;
      align-items: center;
      margin: 0 7px;
    }
    svg {
      display: inline-block;
      margin-right: 5px;
      width: 14px;
      height: 14px;
    }
  }
`

const Footer = () => {
    return(
        <StyledFooter>
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

            <StyledCredit tabIndex="-1">
                <a 
                    href="https://github.com/henriquezani"
                    target="_blank"  
                    rel="noreferrer"
                >
                    <div>Designed &amp; Built by Henrique Zani</div>
                </a>
            </StyledCredit>
        </StyledFooter>
    )
}

export default Footer;