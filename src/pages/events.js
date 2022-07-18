import React from 'react';
import Layout from '../components/layout';
import Seo from "../components/seo";
import styled from 'styled-components';
import {useStaticQuery, graphql, Link} from 'gatsby'






const Wrapper = styled.div`
  margin-top: 8rem;
  width:100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  padding:2rem 4rem;
  align-items: flex-start;
  .upcoming {
    padding:4rem;
  }

  .past {
    padding: 4rem;
  }
}
`





function Events(){
  const data = useStaticQuery(graphql`
   query EventsQuery {
    allEventsJson {
      edges {
        node {
        upcoming {
          title
          place
          flyer
          video
          price {
            at_door
            presale
          }
        }
        past {
          title
          place
          flyer
          video
          price {
            at_door
            presale
          }
        }
      }
     }
    }
   }
  `)

  function getUpcomingEvents(data){
    const eventsArray = [];
    data.allEventsJson.edges.forEach(event => {
      eventsArray.push(
        <div key={event}>
         <h2> SHOW A VENIR </h2>
         <Link to="#"><h4> { event.node.upcoming.title }</h4> </Link>
       </div>
      )
    })
    return eventsArray
  }
  
  function getPastEvents(data){
    const eventsArray = [];
    data.allEventsJson.edges.forEach(event => {
      eventsArray.push(
        <div key={event}>
          <h2> SHOW PASSÉS </h2>
         <h3> { event.node.past.title }</h3> 
       </div>
      )
    })
    return eventsArray;
  }
  return (
    <Layout>
      <Seo title="Évènements" />
      <Wrapper>
        <div className="upcoming">
         { getUpcomingEvents(data)}
        </div>
        <div className="past">
          { getPastEvents(data)}
        </div>
      </Wrapper>
    </Layout>
  )
}


export default Events;