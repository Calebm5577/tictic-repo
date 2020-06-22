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
  console.log(data)
  return (
    <Layout location={location} title={siteTitle}>
      {/*
      <SEO
        title={list.title}
        description={list.description}
      />
      */}
      {/*
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
      */}
    </Layout>
  )
}

export default ListPage

export const listQuery = graphql`
{
  tictic {
    getList(listId: "3f204bad-f0d5-48c5-938b-05c39822a9c3") {
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