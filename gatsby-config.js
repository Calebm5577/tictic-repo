const fs = require("fs")
const { buildSchema, buildClientSchema } = require("graphql")

require("dotenv").config({
  path: `.env`,
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
        createSchema: async () => {
          const sdl = fs.readFileSync(`${__dirname}/tictic_schema.graphql`).toString()
          return buildSchema(sdl)
        },
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
