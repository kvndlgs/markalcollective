import React from 'react';
import Layout from '../components/layout';
import Seo from "../components/seo";
import styled from 'styled-components';
import {useStaticQuery, graphql, Link} from 'gatsby'






const Wrapper = styled.div`
  margin-top: 6rem;
  width:100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  padding:2rem 4rem;
  align-items: flex-start;

    h3 {
    color: #BA92D3;
    }
  
  
  h4 {
    color: #d7d0db;
    font-weight: 400;
  }

  .upcoming {
    padding:4rem;
    border-bottom:2px solid gray;
    width:100%;
    height: auto;
  }

  .past {
    padding: 4rem;
  }

  .hero {
    align-self: center;
  }
}
`



const Divider = styled.div`
 width: 75%;
 height:4px;
 background: #f2f2f2;
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
        <div className="upcoming" key={event}>
         <h4> Á VENIR </h4>
         <h3> { event.node.upcoming.title }</h3>
         <Link to="#"> PLUS D'INFO </Link>
       </div>
      )
    })
    return eventsArray
  }
  
  function getPastEvents(data){
    const eventsArray = [];
    data.allEventsJson.edges.forEach(event => {
      eventsArray.push(
        <div className="past" key={event}>
          <h4> ARCHIVES </h4>
        <h3> { event.node.past.title }</h3> 
        <Link to="#"> PLUS D'INFO </Link>
       </div>
      )
    })
    return eventsArray;
  }
  return (
    <Layout>
      <Seo title="Events" />
      <Wrapper>
        <div className="hero">
        <h2> ÉVÈNEMENTS </h2>
        </div>

         { getUpcomingEvents(data) }
         <Divider />
          { getPastEvents(data) }

      </Wrapper>
    </Layout>
  )
}


export default Events;