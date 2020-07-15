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
          <img src={list.image?.dynamicUrl?.replace('[WIDTH]', 400)?.replace('[HEIGHT]', 265) || ''} alt={list.title} />
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
      {list.items.map(({ itemId, name, cardImage }) => (
        <div key={itemId}>
          <img src={cardImage?.thumbUrl || ''} alt="" />
          <h3>{name}</h3>
        </div>
      ))}
    </Layout>
  )
}


export default ListTemplate

export const query = graphql`
query($listId: ID!) {
  site {
    siteMetadata {
      title
    }
  }

  tictic {
    getList(listId: $listId) {
      title
      description
      image {
        dynamicUrl
      }
      items{
        itemId
        name
        cardImage {
          thumbUrl
          cardUrl
          dynamicUrl
        }
      }
    }
  }
}
`
