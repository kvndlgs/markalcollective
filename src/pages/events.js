import React from 'react';
import Layout from '../components/layout';
import Seo from "../components/seo";
import styled from 'styled-components';
// import {StaticQuery, graphql} from 'gatsby'





  {/*
const EventQuery = ({children}) => (
  <StaticQuery
     query={ graphql`
       query EventItemsQuery {
          allEventItemsJson {
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
               data.allEventItemsJson.edges.forEach(item =>
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

*/}

const Wrapper = styled.div`
  margin: 8rem auto;
  width:100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;

  }
  
  
  .event {
     display: flex;
     flex-direction: column;
     align-items: space-around;
     justify-content: center;
     ul {
         list-style: none;
         padding:0;
         margin:0;
         display: flex;
         flex-direction: columb;
     }
       img {
    width: 40%;
    margin-top:2rem;
    @media(max-width: 1024px) {
        width: 80%;
    }
  }
  
  
`


function Event({time, date, title, hours, price, place, flyer}){
    return (
      <div className="event">
         <h2> {title} </h2>
         <ul>
            <li> { date } </li>
            <li> { hours } </li>
            <li> { place } </li>
            <li> { price } </li>
         </ul>
         <img src={flyer} alt={title} />
      </div>
      </>
    )
}


function Events() {
    return (
        <Layout>
            <Seo title="Évènements" />
            <Wrapper>
              <Event
                 title="LA GÉNESE"
                 date="16 JUIlLLET 2022"
                 hours="7:00 PM"
                 place="181 RUE BRIÈRE, ST-JEROME"
                 price="15$"
                 flyer="https://i.imgur.com/sNgF356.png"
                 />
            </Wrapper>
        </Layout>
    )
}

export default Events;