import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import { rhythm } from "../utils/typography"

const ItemPage = ({ data, location }) => {
  const item = data.tictic.getItem
  const siteTitle = data.site.siteMetadata.title
  console.log(data)
  return (
    <Layout location={location} title={siteTitle}>
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
        <img src={item.images[0].baseUrl + item.images[0].imageId} alt="" />
        <h3>{item.name}</h3>
        <p>{item.description}</p>
    </Layout>
  )
}

export default ItemPage

export const query = graphql`
{
  site {
    siteMetadata {
      title
    }
  }

  tictic {
    getItem(itemId: "16df4e41-76c5-480e-b7ad-f828e82aad93") {
      description
      name
      slug
      images {
        baseUrl
        imageId
      }
      itemId
    }
  }
}
`
