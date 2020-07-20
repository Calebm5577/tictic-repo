import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Bottom from '../components/Home/bottom-nav'
import Firstparagraph from '../components/Home/first-paragraph'
import Appfeatures from '../components/Home/app-features'
import Appworks from '../components/Home/app-works'
import Extrafeatures from '../components/Home/extra-features'
import Appreview from '../components/Home/app-review'
import Appreviewcard from '../components/Home/app-review-card'
import Header from '../components/Home/header'





const PageIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  
  
  function appcardWasClicked(e) {
      const element = e.target;
      console.log(e.target);
      
  }
  

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Link to = "/item/16df4e41-76c5-480e-b7ad-f828e82aad93">Sample Item</Link><br></br>
      <Link to = "/list/3f204bad-f0d5-48c5-938b-05c39822a9c3">Sample List</Link>
      <Header />
      <Firstparagraph />
      <Appfeatures />
      <Appworks />
      <Extrafeatures />
      <Appreview />
      <div className="Appreviewcard-index">
        <Appreviewcard/>
        <Appreviewcard/>
        <Appreviewcard/>
      </div>
      <Bottom />
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