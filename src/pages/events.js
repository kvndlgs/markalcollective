import React from 'react';
import Layout from '../components/layout';
import Seo from "../components/seo";
import styled from 'styled-components';
import {useStaticQuery, graphql} from 'gatsby'






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
  const data =  useStaticQuery(graphql`
  query EventsQuery {
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
`)

function getEvents(data) {
  const eventsArray = [];
  data.allEventsJson.edges.forEach(event => {
    eventsArray.push(
      <section className="event-container" key={event}>
      <article className="event">
        <h1>{event.node.title}</h1> 
        <p>{ event.node.place }</p>
        <p> { event.node.time }</p>
        <p>{event.node.price }</p>
        <img src={event.node.flyer}  />
      </article>
    </section>
    )
  })
  return eventsArray;
}

  return (
    <Layout>
      <Seo title="Évènements" />
      <Wrapper>
        { getEvents(data) }
      </Wrapper>
    </Layout>
  )
}


export default Events;