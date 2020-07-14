const fs = require("fs")
const { buildSchema, buildClientSchema } = require("graphql")

require("dotenv").config({
  path: `.env.development`,
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
