import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

const ListPage = ({ data, location }) => {
  {/*const list = data.getList*/}
  {/* 
      THIS IS TEST DATA 
      REMEMBER TO DELETE LATER
      IN SITEMETADATA gatsby-config.js 

      TODO -- MOVE THIS PAGE TO A TEMPLATE
      TODO -- SET UP SLUGS
  */}
  const siteTitle = data.site.siteMetadata.title
  const list = data.site.siteMetadata.testListData

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

export default ListPage

/*
export const listQuery = graphql`
{
  query {
    getList($slug: String!) {
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
*/

