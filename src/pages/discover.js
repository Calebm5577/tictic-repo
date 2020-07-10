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
        fontSize: "30px",
        color: "white",
        textShadow: "2px 2px 2px #000000",
    }
    const lists = [];
    while (lists.length < 5) {
        let randList = Math.floor(Math.random() * 10);
        if(lists.indexOf(data.tictic.lists.nodes[randList]) === -1) {
            lists.push(data.tictic.lists.nodes[randList]);
        }
    }

    return (
        <Layout location={location} title={siteTitle}>
            <SEO title="All posts" />
            <h2 style = {{textAlign: "center"}}>
                Discover
            </h2>
            <ul style = {{listStyle: "none"}}>
                {lists.map((value, index) => {
                    return (
                        <a style = {a} href = {`/${value.listId}`}><li style = {{backgroundImage: `url(${value.image.baseUrl + value.image.imageId})`, borderRadius: "10px", height: "200px", textAlign: "center"}} key={index}>{value.title}</li></a>
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
        lists(input:{first:10, skip: 0}) {
            nodes {
                listId
                title
                image {
                    imageId
                    baseUrl
                }
                itemsCount
            }
        }
    }
  }
`