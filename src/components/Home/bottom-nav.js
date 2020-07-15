import React, { Component } from 'react'
import "../../CSS/styles.scss"
import { Link } from 'gatsby'

export class Bottom extends Component {
    render() {
        return (
            <div className="main-container">
                <div className="main-container-titles">
                        <ul><h1 className="main-container-title">Quick Links</h1>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><Link to="/privacypolicy">Privacy Policy</Link></li>
                        </ul>

                        <ul> <h1 className="main-container-title">Download</h1>
                            <li><a href="https://play.google.com/store/apps/details?id=co.tictic.tictic" target="_blank">Android App</a></li>
                            <li><a href="https://apps.apple.com/us/app/tictic-bucket-lists/id1437805697" target="_blank">iOS App</a></li>
                        </ul>

                        <ul> <h1 className="main-container-title">Support</h1>
                            <li>hello@tictic.co</li>
                        </ul>
                        
                        <ul>
                            <h1 className="main-container-title">Follow Us</h1>
                        </ul>
                </div>
            </div>
        )
    }
}

export default Bottom
