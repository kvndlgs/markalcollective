import React, { useEffect } from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import styled from 'styled-components';
import Mic from '../images/mic2.png';
import Graphic from '../images/graphic1.png';
import Piano from '../images/keyboard2.png';
import Money from '../images/cash1.png';
import { theme } from '../theme';
import Aos from 'aos';
import 'aos/dist/aos.css';
// import Calendar from '../components/calendar';
// import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
// import addDays from 'date-fns/addDays';
// import fr from 'date-fns/locale/fr-CA'
// import "react-datepicker/dist/react-datepicker.css";

// registerLocale('fr', fr)



const Wrapper = styled.div`
 width: 100%;
 padding:0;
 margin: 6rem auto 0 auto;
 height: auto;
 display: flex;
 flex-direction: column;
 justify-content: space-around;

 @media(max-width:1024px) {
   width:100%;
   margin: 1rem 0 0 0;
 }
`

const Box = styled.div`

 position: relative;
 display: flex;
 flex-direction: row;
 align-items: qcenter;
 justify-content: space-around;
 padding: 4rem 0 4rem 0;
 max-width: 100%;
 min-height:80vh;

 @media(max-width:1024px) {
  min-height:100vh;
 }

 .container {

   margin:0 auto;
   padding:1rem;
   display: flex;
   align-items: center;
   justify-content:center;

   .content {
     display: flex;
     flex-direction: row;
     align-items: center;
     h3 {
       color : ${theme.colors.primary};
     }


     @media(max-width: 1024px) {
      flex-direction: column;
      padding:1rem;
      align-self:center;
      justify-self: center;
      max-width:100%;

      .content {
        flex-direction: column;
        justify-content: center;
      }

      img {
        align-self: flex-start;
      }
  
  
      p {
        align-self:center;
      }
    }
     #right {
       display: flex;
       flex-direction: column;
       justify-self: center;
     }



     a {
      position: relative;
      background: ${theme.colors.primary};
      color: #fff;
      border-radius:6px;
      text-decoration: none;
      font-weight:600;
      padding:1rem;
      margin-top:1rem;
      text-align:center;
      font-size:0.9rem;
      line-height:1.4;
      border-bottom: 0.22rem solid ${theme.colors.secondary};
      cursor: pointer;
      justify-self: flex-start;
      max-width: 220px;
      &:hover {
        background: #4B1E66;
        transition: background 0.2s ease-in;
      }
     .text {
       display: flex;
       flex-direction: column;
     }
   }

   small {
    font-size: 0.9rem;
  }

 img {
   width: 320px;
   padding:0.6rem;
 }
 p {
   color:#fff;
   font-size:1.07rem;
   text-align: left;
 }
 }
}
`


const Service = ({icon, title, desc,smallDesc, buttonText, url, filled, animate}) => {
  useEffect(() => {
    Aos.init({duration: 1200});
  }, [])
    return (
        <Box style={{background: filled ? `${theme.colors.gray1}` : "#fff"}}
       
        >
          <div className="container">
          <div className="content"   data-aos={animate ? animate : ""}>
          <img src={icon} alt={title} />
          <div id="right">
          <div className="text">
          <h3> { title } </h3>
          <p style={{color: `${theme.colors.gray3}`}}>{desc} </p>
          <small style={{color:  `${theme.colors.gray3}`}}>{smallDesc} </small>
          </div>
          <a href={url}> {buttonText } </a>  
          </div>
          </div>
          </div>
        </Box>
    )
}




const Services = () => {

    return (
        <Layout>
          <Seo title="Services" />
          <Wrapper>
            <Service
             icon={Mic}
             title="ENREGISTREMENT & MIXAGE"
             desc='Que vous soyez amateur où un artiste établit,
             nous mettrons notre expertise a votre service.'
             smallDesc=""
             buttonText="VOIR LES TARIFS"
             url="/priceplans"
            />
            <Service 
             filled
             icon={Piano}
             title="INSTRUMENTALS"
             desc="Parcourez notre vaste librairie d'instrumentals ou offrez vous une composition sur mesure."
             buttonText="PARCOURIR"
             url="/beats"
             animate="fade-up"
            />
            <Service
            animate="fade-up"
             icon={Graphic}
             title="CRÉATION GRAPHIQUE"
             desc="Conception de pochette personnalisée pour votre album, mixtape ou single a prix abordable."
             smallDesc=''
             buttonText="PLUS D'INFOS"
             url="/contact"
             />
          </Wrapper>
        </Layout>
    )
}

export default Services
