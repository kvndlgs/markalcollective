import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import styled from 'styled-components';


const Container = styled.div`
 display: flex;
 justify-content: center;
 align-items:center;
 margin: 10rem auto;
 padding: 10rem 10rem 6rem 10rem;
 #box {
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items:center;
  margin: 2rem 0;

  h1 {
      color: #3e1955;
  }

  h4 {
     font-size: 1.22rem; 
     font-weight: 500;
     color: #86798F;
  }
 a {
     text-decoration: none;
     font-weight: 600;
     margin: 1rem 0;
     padding: 0.8rem 1.4rem;
     border: 0.1rem solid #86798F;
     justify-content: center;
     align-items:center;
     border-radius: 0.2rem;
     font-size: 0.8rem;
     align-self: flex-end;
 }
}

 @media(max-width:1024px) {
     margin: 7rem auto;
     padding: 4rem 2rem;
     #box {
         width: 100%;
         @media(max-width: 1024px) {
             a {
                 padding: 0.5rem 1rem;
             }
         }
     }
 }
`

const Thanks = () => {
    return (
        <Layout>
            <Container>
            <div id="box">
                <h1> C'est fait! 😎  </h1>
            <h4>
                Votre message a été envoyé avec success. Un membre de notre équipe vous répondra dans les plus brefs delais. 
            </h4>
            <Link to="/"> RETOURNER AU SITE </Link>
            </div>
            </Container>
        </Layout>
    )
}

export default Thanks;