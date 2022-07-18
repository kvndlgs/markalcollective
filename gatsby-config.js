module.exports = {
  siteMetadata: {
    title: `Markal Collective`,
    description: `Studio D'enregistrements`,
    author: `@kvds`,
    siteUrl: `https://markalcollective.com`,
    ogImage: `src/images/ogimages.png`,
    keywords: `studio d'enregistrement, saint-jerome, instrumentals, concpetion graphique, beats, hip-hop`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-open-graph-images`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false,
        disableVendorPrefixes: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
        name: `data`,
        path: `${__dirname}/src/data`
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Les Studios Markal Collective`,
        short_name: `Markal Collective`,
        description: `Studio D'enregistrement situé en plein coeur du centre ville de Saint-Jérôme.`,
        lang: `fr`,
        start_url: `/`,
        theme_color: `#3e1955`,
        display: `standalone`,
        icon: `src/icons/icon-32x32.png`
    },
  },
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      // The property ID; the tracking code won't be generated without it
      trackingId: "G-KPV5DPKF2Z",
      // Defines where to place the tracking script - `true` in the head and `false` in the body
      head: false,
      // Setting this parameter is optional
      anonymize: true,
      // Setting this parameter is also optional
      respectDNT: true,
      // Avoids sending pageview hits from custom paths
      exclude: ["/preview/**", "/do-not-track/me/too/"],
      // Delays sending pageview hits on route update (in milliseconds)
      pageTransitionDelay: 0,
      // Enables Google Optimize using your container Id
      optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
      // Enables Google Optimize Experiment ID
      experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
      // Set Variation ID. 0 for original 1,2,3....
      variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
      // Defers execution of google analytics script after page load
      defer: false,
      // Any additional optional fields
      sampleRate: 5,
      siteSpeedSampleRate: 10,
      cookieDomain: "markalcollective.com",
      // defaults to false
      enableWebVitalsTracking: true,
    },
  },
],
}

