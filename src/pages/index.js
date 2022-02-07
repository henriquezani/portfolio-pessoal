import { useState } from "react";
import  Hero  from '../components/sections/hero'
import  About  from '../components/sections/about'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Layout from '../components/layout'
import Featured from '../components/sections/featured'
import Contact from '../components/sections/contact'
import ContactModal from '../components/modal'
import Head from 'next/head'

import { LocationProvider } from '@reach/router'

const StyledMainContainer = styled.main`
  counter-reset: section;
`
export default function Home(){

  const [isModalOpen, setIsModalOpen] = useState(false); 

  function handleOpenModal(){
    setIsModalOpen(true)
  }

  function handleCloseModal(){
    setIsModalOpen(false)
  }

    return(
      <LocationProvider>
        <Head>
          <title>Henrique Zani</title>
        </Head>
        <Layout>
        <StyledMainContainer className="fillHeight">
            <Hero />
            <About />
            <Featured />
            <Contact onRequestOpen={handleOpenModal}/>
            <ContactModal 
              isOpen={isModalOpen}
              onRequestClose={handleCloseModal}
            />
        </StyledMainContainer>
        </Layout>
      </LocationProvider>
    )
}

