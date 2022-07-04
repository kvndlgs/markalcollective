/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import OgImage from '../images/ogimage.png';





function Seo({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
          }
        }
      }
    `
  )

  const keywords = site.siteMetadata.keywords?.keywords
  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: `Studio d'enregistrement en plein coeur du centre ville de Saint-Jérôme.`,
        },
        {
          property: `og:title`,
          content: `Markal Collective`,
        },
        {
          property: `og:description`,
          content: `Studio d'enregistrement en plein coeur du centre ville de Saint-Jérôme.`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content:  OgImage,
        },
        {
          property: `og:image:width`,
          content:  `1200`,
        },
        {
          property: `og:image:weight`,
          content:  `627`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: keywords,
        },
      ].concat(meta)}

    >
    
  
      <link rel="canonical" href="https://markalcollective.com" />
      <meta name="description" content="Studio d'enregistrement en plein coeur du centre ville de Saint-Jérôme." />
      <meta name="keywords" content="studio d'enregistrement, saint-jerome, instrumentals, concpetion graphique, beats, hip-hop" />
      <meta name="og:image" content={OgImage} />
      <meta name="og:image:width" content="1200" />
      <meta name="og:image:height" content="627" />
      <meta name="robots" content="index, follow" />
      <meta name="google-site-verification" content="DGvyRCHjk1iSjoJR7gmW1NOVnh5xnWo2ORo4DenKY1w" />
      <script src="path/to/dist/eva-icons.js"></script>
      </Helmet>
  )
}

Seo.defaultProps = {
  lang: `fr`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
