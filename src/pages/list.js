import React from 'react';
import { graphql } from 'gatsby'
import { Router } from "@reach/router";

import ListComponent from "../components/list-component"
import Layout from "../components/layout"
import SEO from "../components/seo"

const List = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <div>
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <Router basepath="/list">
          <ListComponent path="/:listId" />
        </Router>
      </Layout>
    </div>
  )
}

export default List

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`