import React from 'react';
import Layout from '../components/layout';
import Seo from "../components/seo";
import styled from 'styled-components';
import {useStaticQuery, graphql} from 'gatsby'



const Wrapper = styled.div`
  margin: 8rem 0 4rem 0;
  width: 100%;
  display: flex;
  flex-direction: row;
     @media(max-width: 1024px){
      flex-direction: column;
      
      .artists {
        width: 100%;
      }
   }
  
  .artists {
   max-width: 33.33%;
   height: auto;
   padding: 0.25rem;

    .artist {
       
       display:flex;
       flex-direction: column;;
       img {
          align-self: start;
       }
       a {
          margin: 0.2rem;
       }
    }
  }
`

function Artists(){

    const data =  useStaticQuery(graphql`
    query ArtistsQuery {
       allArtistsJson {
         edges {
            node {
              img
              name
              roles
              bio
              beatstars
              facebook
              insta
              youtube
            }
           }
       }
    }
  `)

function getArtists(data) {
    const artistsArray = [];
    data.allArtistsJson.edges.forEach(artist => {
      artistsArray.push(
        <section className="artists" key={artist}>
        <article className="artist">
          <img src={artist.node.img}/>
          <h1>{artist.node.name}</h1> 
          <p>{ artist.node.roles }</p>
          <p> { artist.node.bio }</p>
          <a href={artist.node.beatstars}>BEATSTARS</a>
          <a href={artist.node.facebook}>FACEBOOK</a>
          <a href={artist.node.insta}>INSTAGRAM</a>
          <a href={artist.node.youtube}>YOUTUBE</a>
        </article>
      </section>
      )
    })
    return artistsArray;
  }
  
    return (
      <Layout>
        <Seo title="L'ÉQUIPE" />
        <Wrapper>
          { getArtists(data) }
        </Wrapper>
      </Layout>
    )
  }
  
  
  export default Artists;