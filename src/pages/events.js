import React from 'react';
import Layout from '../components/layout';
import Seo from "../components/seo";
import styled from 'styled-components';
import {graphql} from 'gatsby'






const Wrapper = styled.div`
  margin-top: 8rem;
  width:100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  .event-container {
    width: 50%;
    margin: 1rem 0;
    @media(max-width:1024px) {
      width: 80%;
    }
  }
}
`





function Events(){
  return (
    <Layout>
      <Seo title="Évènements" />
      <Wrapper>
        <div className="upcoming">
         <h2> ÈVÈVEMENTS A VENIR </h2>
        </div>
        <div className="past">
          <h2> ÉVÈNEMENTS PASSÉS </h2>
        </div>
      </Wrapper>
    </Layout>
  )
}


export default Events;