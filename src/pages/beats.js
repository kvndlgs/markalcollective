import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo"
import styled from 'styled-components';
import { theme } from '../theme';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  min-height:100vh;
  max-width:100%;
  align-items:center;
  justify-content: center;
  padding:10rem 0 5rem 0;
  background: ${theme.colors.gray1};


@media (max-width: 1024px) {
    iframe {
        width: 90%;
    }
}
  iframe {
      width:84%;
      height: 700px;
      margin:0;
      padding:0;
      border-radius: 8px;
  }
`

const Beats = () => {
    return (
        <Layout style={{paddingTop: '4rem'}}>
            <Seo title="Instrumentals" />
            <div style={{marginTop: '8rem', alignSelf: 'center', textAlign: 'center', width: '100%'}}>
            <h1> BEATS </h1>
            </div>
            <Box> 
            <h2 style={{padding: '1.5rem 0'}}> MARKAL COLLECTIVE </h2>
            <iframe src="https://player.beatstars.com/?storeId=128407" title="markalcollective"  frameBorder="0"/>
            </Box>
            <Box>
            <h2 style={{padding: '1.5rem 0'}}> LGTB </h2>
            <iframe id="bs-player" title="lgtb" src="https://player.beatstars.com/?storeId=122232" frameBorder="0" />
            </Box>
            <Box>
                <h2> JBAG </h2>
                <iframe
                   title="jbag"
                   src="https://player.beatstars.com/?storeId=130823"
                   frameBorder="0"
                />
            </Box>
            <Box>
                <h2> TRAXTER </h2>
                <h4> BIENTÔT </h4>
            </Box>
            <Box>
                <h2> JO-HELL </h2>
                <h4> BIENTÔT </h4>
            </Box>
            <Box>
                <h2> DRUNKEN ZAC </h2>
                <h4> BIENTÔT </h4>
            </Box>

        </Layout>
    )
}

export default Beats
