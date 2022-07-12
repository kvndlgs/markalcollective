import React from 'react';
import Layout from '../components/layout';
import Seo from "../components/seo";
import styled from 'styled-components';
import {useStaticQuery, graphql} from 'gatsby'


const Wrapper = styled.div`
  margin: 8rem 0 4rem 0;
  width: 100%;
`

function Artists(){

    const data =  useStaticQuery(graphql`
    query ArtistsQuery {
       allArtistsJson {
         edges {
            node {
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
        <section className="artist-container" key={artist}>
        <article className="artist">
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