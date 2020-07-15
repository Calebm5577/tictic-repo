require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `tictic`,
    author: {
      name: `tictic dev team`,
    },
    siteUrl: `https://www.tictic.co`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        short_name: `tictic`,
        name: `tictic: travel bucket lists`,
        description: `experience matters`,
        start_url: `/?source=pwa`,
        background_color: `#f7f0eb`,
        theme_color: `#001344`,
        display: `standalone`,
        icon: `src/images/icon_v2.png`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: "TICTIC",
        fieldName: "tictic",
        url: process.env.API_SERVER_URL,
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
