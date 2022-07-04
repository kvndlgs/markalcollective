import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import * as Icon from '@easy-eva-icons/react';
import Seo from '../components/seo';
import { theme } from '../theme';

const Container = styled.div`
max-width:100%;
padding: 13rem 0;
height: auto;
display: flex;
align-items: center;
justify-content:center;
background: ${theme.colors.gray1};
@media(max-width:1024px) {

    align-items:center;

    flex-direction: column;
    padding: 8rem 0;
}
`
const Box = styled.div`
display: flex;
flex-direction: column;
align-items:flex-start;
justify-content:space-around;
padding:4rem 3rem;
margin: 0 1.4rem;
width: 300px;
height:420px;
border-radius:10px;
background: #fff;
box-shadow: 0 12px 12px 2px rgba(144,130,153,0.2);
@media(min-width:1024px) {
&:nth-child(2) {
    width: 340px;
    height: 480px;
    ul {
        margin-top:40px;
    }
    #rate {
        top: -34px;
    }
    a {
        margin-top:70px;
    }
    h2 {
   
    }
}
}
@media(max-width:1024px) {
    margin: 2rem 0 2rem 0;
    padding:1.8rem;
    max-width:72%;
}
  #rate {
      position: relative;
      font-weight: 600;
      color: #703B91;
      font-size:18px;
      top:-32px;
  }
 h2 {
     font-family: Ultra, serif;
     font-weight: 400;
     font-size:78px;
     line-height: 96.96px;
     letter-spacing:0.1rem;
     color: #703B91;
     
 }

 ul {
     list-style: none;
     padding:1rem;
     margin-left:-10px;
     li {
         color: #908299;
         display: flex;
         flex-direction: row;
         align-items:flex-start;
         justify-content: flex-start;
         font-weight:600;
         font-size: 18px;
         line-height:21px;
         margin-bottom: 20px;
         letter-spacing:0.012rem;
         svg {
             fill: #d7d0db;
             width:18.78px;
             margin:0 8px 0 0;
         }
     }
 }

 a {
    position: relative;
    background: #703B91;
    color: #fff;
    border-radius:5px;
    text-decoration: none;
    font-weight:700;
    padding:20px 28px;
    text-align:center;
    font-size: 18px;
    border-bottom: 0.18rem solid #AA6CD0;
    border-top: 0.18rem solid transparent;
    cursor: pointer;
    letter-spacing:0.05rem;
    align-self: center;
    @media(max-width:1024px){
        margin-bottom:20px;
    }
    &:hover {
      background: #AA6CD0;
      border-top: 0.18rem solid #9345C4;
      border-bottom: 0.18rem solid transparent;
      transition: all 0.2s ease-in;
    }
`






const PriceCard = ({ price, title, rate, desc, children, isCenter }) => {
    return (
        <Box >

            <h2> {price}</h2>
            <span id="rate"> {rate} </span>
            <ul>
                {children}
            </ul>

            <a href="/contact"> BOOK TA SESSION </a>

        </Box>
    )
}

const PricePlans = () => {
    return (
        <Layout>
            <Seo title="Tarifs" />
            <Container>
                <PriceCard
                    price="50$"
                    rate="Par heure"
                >
                    <li>
                        <Icon.CheckmarkCircle2 />   Enregistrement
                    </li>
                    <li>
                        <Icon.CheckmarkCircle2 />       Mixage
                    </li>
                </PriceCard>
                <PriceCard
                    price="150$"
                    rate="Pour 4 heures"
                    isCenter
                >
                    <li>
                        <Icon.CheckmarkCircle2 />     Enregistrement
                    </li>
                    <li>
                        <Icon.CheckmarkCircle2 />       Mixage
                    </li>
                    <li>
                        <Icon.CheckmarkCircle2 />    Mastering
                    </li>
                </PriceCard>
                <PriceCard
                    price="350$"
                    rate="Pour 10 heures" à
                    desc=""
                >
                    <li>
                        <Icon.CheckmarkCircle2 />      Enregistrement
                    </li>
                    <li>
                        <Icon.CheckmarkCircle2 />        Mixage
                    </li>
                    <li>
                        <Icon.CheckmarkCircle2 />         Mastering
                    </li>
                    <li>
                        <Icon.CheckmarkCircle2 />         Cover Art
                    </li>
                </PriceCard>
            </Container>
        </Layout>
    )
}


export default PricePlans;