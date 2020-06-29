import React from 'react';
import { graphql } from 'gatsby'
import { Router } from "@reach/router";

import ItemComponent from "../components/item-component"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Item = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <div>
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <Router basepath="/item">
          <ItemComponent path="/:itemId" />
        </Router>
      </Layout>
    </div>
  )
}

export default Item

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`