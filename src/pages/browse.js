import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BrowsePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const a = {
      display: "block",
  padding: "8px 15px",
  textDecoration: "none",
      fontWeight: "bold",
      fontSize: "30px",
      color: "white",
      textShadow: "2px 2px 2px #000000",
  }
  const items = [];
  while (items.length < 5) {
      let randItem = Math.floor(Math.random() * 10);
      if(items.indexOf(data.tictic.items.nodes[randItem]) === -1) {
          items.push(data.tictic.items.nodes[randItem]);
      }
  }
  
  return (
      <Layout location={location} title={siteTitle}>
          <SEO title="All posts" />
          <h2 style = {{textAlign: "center"}}>
              Browse
          </h2>
          <ul style = {{listStyle: "none"}}>
              {items.map((value, index) => {
                  return (
                    <a style = {a} href = {`/${value.itemId}`}><li style = {{backgroundImage: `url(${value.cardImage.baseUrl + value.cardImage.imageId})`, borderRadius: "10px", height: "200px", }} key={index}>{value.name}</li></a>
                  )
              })}
          </ul>
      </Layout>
  )
}

export default BrowsePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    tictic {
        items(input:{first:10, skip: 0}) {
            nodes {
                itemId
                name
                slug
                cardImage {
                    imageId
                    baseUrl
                    thumbUrl
                }
            }
        }
    }
  }
`