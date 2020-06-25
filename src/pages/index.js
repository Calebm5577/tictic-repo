import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PageIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Link to = "/16df4e41-76c5-480e-b7ad-f828e82aad93">Sample Item</Link><br></br>
      <Link to = "/3f204bad-f0d5-48c5-938b-05c39822a9c3">Sample List</Link>
    </Layout>
  )
}

export default PageIndex


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`