import React from 'react';
import { ThemeProvider } from "styled-components"


  export const theme = {
    colors: {
      primary: "#703B91",
      secondary: "#BA92D3",
      dark: "#3e1955",
      gray1: "#F0EEF2",
      gray2: "#d7d0db",
      gray3: "#908299",
      error: "#913b3b",
      warning: "#916d3b",
      success: "#5d913b"
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