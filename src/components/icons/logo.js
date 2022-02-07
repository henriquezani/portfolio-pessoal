import React from 'react'
import styled from 'styled-components';

const StyledLogo = styled.h1`

    display: flex;

    color: var(--white);

    span{
        color: var(--gray);
    }
`

const IconLogo = () => {
    return(
        <StyledLogo>
            Henrique <span>Zani</span>
        </StyledLogo>
    )
}

export default IconLogo