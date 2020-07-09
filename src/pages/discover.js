import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const DiscoverPage = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title
    const a = {
        display: "block",
		padding: "8px 15px",
		textDecoration: "none",
		fontWeight: "bold",
		color: "black"
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
                Discover
            </h2>
            <ul style = {{listStyle: "none"}}>
                {items.map((value, index) => {
                    return (
                        <li key={index}><a style = {a} href = {`/${value.itemId}`}>{value.name}</a></li>
                    )
                })}
            </ul>
        </Layout>
    )
}

export default DiscoverPage

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