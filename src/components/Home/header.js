import React, { Component } from 'react'
import logo from "../../images/icon_large_1024.jpg"
import tictic from '../../images/logo_text_blue.jpg'
import "../../CSS/styles.scss"

export class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="Header-main">
                    <img src={logo} className="Header-main-logo"/>
                    <img src={tictic} className="Header-main-text"/>
                </div>
                <div className="Header-secondary">
                    <ul className="Header-secondary-list">
                        <li className="Header-secondary-list-item">Home</li>
                        <li className="Header-secondary-list-item">Contact</li>
                        <li className="Header-secondary-list-item">Privacy Policy</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header
