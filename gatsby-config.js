module.exports = {
  siteMetadata: {
    title: `tictic`,
    author: {
      name: `tictic dev team`,
    },
    siteUrl: `https://gatsby-starter-blog-demo.netlify.app/`,
    testListData: {
      title: "Game of Thrones",
      description: "What's west of Westeros? We don't know, but here are some known hangouts for GoT characters.",
      image: {
        imageId: "list-cover-images/category-game-of-thrones_nb6s4e",
        baseUrl: "https://res.cloudinary.com/ticticapp/image/upload/",
      },
      items: [
      {
        itemId: "2a0a86f9-b3df-4fe7-94a3-79616674ec75",
        name: "Alcázar of Seville",
        images: [
          {
            imageId: "places-images-new/338337_Viator_Shutterstock_171366_bvf25n",
            baseUrl: "https://res.cloudinary.com/ticticapp/image/upload/"
          }
        ],
      },
      {
        itemId: "d4c6ecd1-2d1d-4de0-8e94-f24715562b7e",
        name: "Dark Hedges",
        images: [
          {
            imageId: "places-images-new/Dark-Hedges",
            baseUrl: "https://res.cloudinary.com/ticticapp/image/upload/"
          }
        ]
      },
      {
        itemId: "e1a3a26c-3975-42b9-9872-1f88b15bd71d",
        name: "Walls of Dubrovnik",
        images: [
          {
            imageId: "places-images-new/5fa4f698-47f3-40e1-abb1-9809a9859591",
            baseUrl: "https://res.cloudinary.com/ticticapp/image/upload/"
          },
          {
            imageId: "places-images-new/eaf1c3e3-c5b6-4aba-993e-53dd39920d99",
            baseUrl: "https://res.cloudinary.com/ticticapp/image/upload/"
          },
          {
            imageId: "places-images-new/95e9ac7d-ba53-4ef1-abc1-9dbb61fc0fbc",
            baseUrl: "https://res.cloudinary.com/ticticapp/image/upload/"
          },
        ]
      },
      ],
    },
  },
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        //This type will containe remote shcema query type
        typeName: "MyGraph",
        //This is the field under which it's accessible
        fieldName: "myGraph",
        url: "http://localhost:4000/graphql",
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `tictic`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
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
