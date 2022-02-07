import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle}   from '../styles/index'
import PropTypes from 'prop-types';
import Footer from './footer'
import Nav from './nav'
import Loader from './loader'
import { useLocation } from '@reach/router';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;


const Layout = ({children}) =>{
    const location = useLocation();
    const isHome = location.pathname === "/";
    const [isLoading, setIsLoading] = useState(isHome);

    // useEffect(() => {
    //     if(isLoading){
    //         return
    //     }

    //     if (location.hash){
    //         const id = location.hash.substring(1);
    //         setTimeout(() => {
    //             const el = document.getElementById(id);
    //             if(el){
    //                 el.scrollIntoView();
    //                 el.focus();
    //             }
    //         }, 0)
    //     }
    // }, [isLoading])

    return(
        <ThemeProvider theme={theme}>
           <GlobalStyle />

           <a className="skip-to-content" href="#content">
                Skip to Content
           </a>

            {isLoading && isHome ? (
                <Loader finishLoading ={() => setIsLoading(false)} />
            ) : (
                <StyledContent>
                    <Nav isHome={isHome}/>

                    <div id="content">
                        {children}
                        <Footer />
                    </div>
                </StyledContent>
            )}            
        </ThemeProvider>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
