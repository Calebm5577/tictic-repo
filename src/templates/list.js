import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const ListTemplate = ({ data, location }) => {
  const list = data.tictic.getList
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={list.title}
        description={list.description}
      />
      <article>
        <header>
          <img src={list.image.baseUrl + list.image.imageId} alt={list.title} />
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            {list.title}
          </h1>
        </header>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
      </article>
      {list.items.map(({ itemId, name, images }) => (
        <div key={itemId}>
          <img src={images[0].baseUrl + images[0].imageId} alt="" />
          <h3>{name}</h3>
        </div>
      ))}
    </Layout>
  )
}

export default ListTemplate

export const query = graphql`
query($slug: ID!) {
  site {
    siteMetadata {
      title
    }
  }

  tictic {
    getList(listId: $slug) {
      title
      description
      image {
        imageId
        baseUrl
      }
      items{
        itemId
        name
        images {
          imageId
          baseUrl
        }
      }
    }
  }
}
`
