import React from 'react';
import Layout from '../components/layout';
import Seo from "../components/seo"
import styled from 'styled-components'
import LouisPic from '../images/louis.jpg';
import JoPic from '../images/jo.jpg';
import KevPic from '../images/kev.jpg';
import SashPic from '../images/sasha.jpg';


const Container = styled.div`
display: flex;
flex-direction: column;
max-width:100%;
width:100%;
height: auto;
position: relative;
margin:6rem 0 6rem 0;

 .title {
     max-width:100%;
     height: auto;
     display: flex;
     align-items: flex-end;
     justify-content: center;
     font-size:3rem;
     padding:3rem 0 1rem 0;
     color: #3e1955;
     font-weight:800;
 }
`


const Box = styled.div`
 display: flex;
 align-items:center;
 justify-content:center;
 max-width:100%;
 height: auto;
 padding:2rem 0 3rem 0;
 @media(max-width: 1024px) {
     flex-direction: column;
 }
 `

 const StyledCard = styled.div`
  max-width: 600px;
  width:80%;
  min-height 400px;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:space-between;
  padding:2rem;
  margin: 1rem;
  border:0.2rem solid #3e1955;
  border-radius:10px;

  @media(max-width:1024px){
      max-width: 70%;

  }
  #title {
     align-self: flex-start;
     line-height:0.5;
     color: #3e1955;
     font-weight:800;
  }
  #role {
      font-weight:500;
      font-size:0.9rem;
      align-self: flex-start;
      color: #86798F;
  }

  #desc {
      font-weight:600;
      color: #3e1955;
      font-size:1rem;
      width:100%;
  }
  img{
      width: 100%;
      max-width:200px;
      margin-bottom: 2rem;
  }
 `

const Card = ({imgUrl, title, desc, role}) => {
    return (
        <StyledCard>
            <img src={imgUrl} alt={title} />
            <h3 id="title"> { title } </h3>
            <span id="role"> {role } </span>
            <span id="desc"> { desc } </span>
        </StyledCard>
    )
}

const Studio = () => {

        return (
            <Layout>
                <Seo title="Studio" />
        <Container>
                <span className="title"> L'ÉQUIPE </span>
            <Box>
              <Card 
                title="JOEL (JO-HELL)"
                imgUrl={JoPic}
                role="Auteur-Compositeur-Interprète, Producteur"
          
               />
               <Card
                title="LOUIS (TRAXTER)"
                imgUrl={LouisPic}
                role="Sound Designer, Producteur"
        
               />
               <Card
                title="KEVIN (SK)"
                imgUrl={KevPic}
                role="Beatmaker, Producteur, Graphic Designer"
               />
            </Box>
            </Container>
            </Layout>
        )

}

export default Studio;
