import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

import Navbar from "./navbar"

const Layout = ({ location, title, children }) => {
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <Navbar titles = {title} locations = {location} childrens = {children}/>
      <main>{children}</main>
    </div>
  )
}

export default Layout
