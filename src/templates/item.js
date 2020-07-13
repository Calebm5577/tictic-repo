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
      <h3>{item.nameOthers}</h3>
      <h4>{item.cardLocation}</h4>
      <p>{item.description}</p>
      <h3>Tags:</h3>
      {item.tags.map(({ tagId, name }) => (
        <div key={tagId}>
          <span style={{padding: "1px 9px 2px",
                        fontSize: "20px",
                        fontWeight: "bold",
                        whiteSpace: "nowrap",
                        color: "#ffffff",
                        webkitBorderRadius: "9px",
                        mozBorderRadius: "9px",
                        borderRadius: "9px",
                        backgroundColor: "#b94a48"}}>{name}</span>
        </div>
      ))}
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
      itemId
      name
      nameOthers
      slug
      description
      cardImage {
        imageId
        baseUrl
        thumbUrl
      }
      cardLocation
      images {
        imageId
        baseUrl
      }
      locations {
        locationId
        name
        nameDisplay
        country
      }
      tags {
        tagId
        name
        displayOrder
      }
    }
  }
}
`
