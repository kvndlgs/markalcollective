import React from 'react';
import { ThemeProvider } from "styled-components"


/*

@import url('https://fonts.googleapis.com/css?family=Raleway:400,600');

html {font-size: 100%;} 

body {
    background: white;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    line-height: 1.75;
    color: #000000;
  }
  
  p {margin-bottom: 1rem;}
  
  h1, h2, h3, h4, h5 {
    margin: 3rem 0 1.38rem;
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    line-height: 1.3;
  }
  
  h1 {
    margin-top: 0;
    font-size: 3.052rem;
  }
  
  h2 {font-size: 2.441rem;}
  
  h3 {font-size: 1.953rem;}
  
  h4 {font-size: 1.563rem;}
  
  h5 {font-size: 1.25rem;}
  
  small, .text_small {font-size: 0.8rem;}
}

*/

  export const theme = {
    colors: {
      primary: "#703B91",
      secondary: "#BA92D3",
      dark: "#3e1955",
      gray1: "#F0EEF2",
      gray2: "#d7d0db",
      gray3: "#908299",
      error: "red",
      warning: "orange",
      success: "green"
    },
    space: [0, 4, 8, 16, 32, 64, 128, 256, 5120],
    fonts:{
      sansSerif: ["sans-serif", "Raleway"],
      serif: ["serif", "Ultra"],
    },
    fontSizes: {
      h1: "3,052rem",
      h2: "2.441rem",
      h3: "1.953rem",
      h4: "1.25rem",
      p: "1rem",
      small: "0.65rem"
    }
  }


  const Theme = ({ children }) => {
    return (
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    )
  }


  export default Theme;