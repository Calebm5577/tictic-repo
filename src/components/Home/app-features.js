import React, { Component } from 'react'
import "../../CSS/styles.scss"

import middlestar from "../../images/middlestar.jpg"
import sidestar from "../../images/sidestar.jpg"

export class Appfeatures extends Component {
    render() {
        return (
            <div className="Awesome">
                <div className="Awesome-main">
                    <h1 className="Awesome-main-h1">Awesome Apps Features</h1>
                    <p className="Awesome-main-p">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                </div>
                <div className="Awesome-second">
                    <div className="Awesome-second-box">
                        <img src={sidestar} alt="sidestar" className="Awesome-second-box-img"/>
                        <h1 className="Awesome-second-box-h1">Awesome Apps Features</h1>
                        <p className="Awesome-second-box-p">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                    </div>

                    <div className="Awesome-second-box" id="middlebox">
                        <img src={middlestar} alt="middlestar" className="Awesome-second-box-img"/>
                        <h1 className="Awesome-second-box-h1">Awesome Apps Features</h1>
                        <p className="Awesome-second-box-p">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                    </div>

                    <div  className="Awesome-second-box">
                        <img src={sidestar} alt="sidestar" className="Awesome-second-box-img"/>
                        <h1 className="Awesome-second-box-h1">Awesome Apps Features</h1>
                        <p className="Awesome-second-box-p">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Appfeatures
