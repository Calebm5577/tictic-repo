import React, { Component } from 'react'
import "../../CSS/styles.scss"

import google from "../../images/google.jpg"
import iOS from "../../images/iOS.jpg"
import phone from '../../images/firstphone.jpg'

export class Firstparagraph extends Component {
    render() {
        return (
            <div className="fp-container">
                <div className="fp-container-one">
                    <div className="fp-container-one-text">
                        <h1 className="fp-container-one-text-h1">Lorem Ipsum Title Put Here...</h1>
                        <p className="fp-container-one-text-p"> Lorem Ipsum is simply dummy trextydssdfsdgsDdsfsdSDF Lorem Ispum Lorem Ipsum is simply dummy trextydss dfsdgsDdsfsdSDF Lorem Ispum</p>
                    </div>
                    <div>
                        <a href="https://play.google.com/store/apps/details?id=co.tictic.tictic" target="_blank"><img src={google} alt="google play button" className="fp-container-google"/></a>
                        <a href="https://apps.apple.com/us/app/tictic-bucket-lists/id1437805697" target="_blank"><img src={iOS} alt="app store button" className="fp-container-ios"/></a>
                    </div>
                </div>

                <div>
                    <img src={phone} alt="phone" className="fp-container-phone"/>
                </div>
            
            </div>
        )
    }
}

export default Firstparagraph
