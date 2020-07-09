import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const Navbar = ({ locations, titles, childrens }) => {
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (locations.pathname === rootPath) {
        header = (
        <h1>
            <Link
            style={{
                boxShadow: `none`,
                color: `#001344`,
                textDecoration: `none`
            }}
            to={`/`}
            >
            {titles}
            </Link>
        </h1>
        )
    } else {
        header = (
        <h3>
            <Link
            style={{
                boxShadow: `none`,
                color: `#001344`,
                textDecoration: `none`
            }}
            to={`/`}
            >
            {titles}
            </Link>
        </h3>
        )
    }
    const nav = {
        width: "100%",
        float: "left",
        margin: "0 0 3em 0",
        padding: "0",
        listStyle: "none",
        backgroundColor: "#08B1FA"
    }
    const li = {
        float: "left"
    }
    const a = {
        display: "block",
		padding: "8px 15px",
		textDecoration: "none",
		fontWeight: "bold",
		color: "white"
    }
    return (
        <div>
            <header style = {{textAlign: "center",}}>{header}</header>
            <ul style = {nav}>
                <li style = {li}><a style = {a} href="/">Home</a></li>
                <li style = {li}><a style = {a} href="/discover">Discover</a></li>
                <li style = {li}><a style = {a} href="/browse">Browse</a></li>
                <li style = {li}><a style = {a} href="/blog">Blog</a></li>
                <li style = {li}><a style = {a} href="/contact">Contact</a></li>
                <li style = {li}><a style = {a} href="/about">About</a></li>
            </ul>
        </div>
    )
}

export default Navbar