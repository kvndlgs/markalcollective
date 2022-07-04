import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import HeaderLayout from "./HeaderLayout"
import styled from "styled-components";
import '../components/layout.css';
import Footer from '../components/footer';
import CustomerChat from "../components/messenger";
import { theme } from '../theme';



const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
 
    <>
      <HeaderLayout />
        <main>{children}</main>
      <Footer />
      <CustomerChat />
      </>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
