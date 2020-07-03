import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const ItemTemplate = ({ data, location }) => {
  const item = data.tictic.getItem
  const siteTitle = data.site.siteMetadata.title
  let imageSrc = ""
  if (item.images[0] === undefined) {
    imageSrc = "./globe.jpg"
  } else {
    imageSrc = item.images[0].baseUrl + item.images[0].imageId
  }
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={item.title}
        description={item.description}
      />
      <article>
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            {item.title}
          </h1>
        </header>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
      </article>
      <img src = {imageSrc} alt="" />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
    </Layout>
  )
}

export default ItemTemplate

export const query = graphql`
query($slug: ID!) {
  site {
    siteMetadata {
      title
    }
  }

  tictic {
    getItem(itemId: $slug) {
      name
      description
      slug
      images {
        imageId
        baseUrl
      }
      itemId
    }
  }
}
`
