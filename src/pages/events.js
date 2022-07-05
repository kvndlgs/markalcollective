import React from 'react';
import Layout from '../components/layout';
import Seo from "../components/seo";
import styled from 'styled-components';
import Flyer from '../images/final.png';


const Wrapper = styled.div`
  margin: 8rem auto;
  width:100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  h1 {
    margin-top: 1rem;
  }
  img {
    width: 40%;
    margin-top:2rem;
    @media(max-width: 1024px) {
        width: 80%;
    }
  }
`



function Events() {
    return (
        <Layout>
            <Seo title="Évènements" />
            <Wrapper>
          
            <h1> ÉVÈNEMENTS </h1>
                <img src={Flyer} />
            </Wrapper>
        </Layout>
    )
}

export default Events;