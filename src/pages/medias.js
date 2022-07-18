import * as React from "react";
import Layout from "../components/layout";
import styled from 'styled-components';
import Seo from "../components/seo"
import { theme } from '../theme';


const Box = styled.div`
 position: relative;
 display: flex;
 flex-direction: row;
 align-items:center;
 justify-content:center;
 padding: 10rem 4rem;
 background: ${theme.colors.gray1};



 @media(max-width: 1024px) {
     padding:4rem 2rem;
 }
`

const Bg = styled.div`
 position: absolute;
 max-width:100%;
 min-height:100vh;
 top:0;
 bottom:0;
 left:0;
 right:0;
 padding-bottom:10rem;
 background: ${theme.colors.gray1};
 z-index:-2;
 @media(max-width: 1024px){
     padding-bottom: 14rem;
 }
`


function Medias(){

    return (
        <Layout>
            <Seo title="Medias" keywords="chansons, studio, saint-jerome, montreal, instrumentals, réalisation"/>
            <Bg />
            <Box>
               yo
            </Box>
        </Layout>
    )
}

export default Medias