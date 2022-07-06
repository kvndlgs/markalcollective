import React from 'react';
import Layout from '../components/layout';
import Seo from "../components/seo";
import styled from 'styled-components';
import {StaticQuery, graphql} from 'gatsby'




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

const EventQuery = ({children}) => (
  <StaticQuery
     query={ graphql`
       query EventItemsQuery {
          allEventsJson {
            edges {
               node {
                 title
                 date
                 time
                 price
                 place
                 flyer
               }
            }
          }
       }
     `
     }
     render={data => (
        
        <>
            { getEvents(data) }
        </>
     )}
  />
  
);

function getEvents(data) {
   {
                const eventItemsArray = [];
               data.allEventsJson.edges.forEach(item =>
                 eventItemsArray.push(
                    
                        <div key={item.node}>
                        <h2> { item.title } </h2>
                        <span> {item.date} </span>
                        <span> {item.time } </span>
                        <span> { item.place } </span>
                        <span> { item.price } </span>
                        <img src={item.flyer} alt={item.title} />
                        </div>
                 )
                );
                return eventItemsArray;
            } 
}



function Events() {
    return (
        <Layout>
            <Seo title="Évènements" />
            <Wrapper>
               <EventQuery />
            </Wrapper>
        </Layout>
    )
}

export default Events;