/*import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
{posts.map(({ node, index }) => {
            const title = node[index].title || node[index].slug
            return <div key={node[index].slug}>{title}</div>
        })}
export default class BlogList extends React.Component {
  render() {
    const posts = this.props.data.tictic.lists.edges
    console.log(posts);
    console.log(posts[0].title);
    const lists = [];
    for (const [value, index] of posts.entries()) {
      lists.push(<li key = {index}>{value}</li>)
    }
    
    return (
      <Layout>
        {posts.map(({ node }) => {
            const title = node.title || node.slug
            return <div key={node.slug}>{title}</div>
        })} 
      </Layout>
    )
  }
}

export const discoverQuery = graphql`
    query ($skip: Int!, $limit: Int!) {
        tictic {
            lists(first: $limit, skip: $skip) {
                edges {
                    node {
                        title
                        slug
                    }
                }
            }
        }
    }
`*/