import React, { Component } from 'react'
import picture from "../../images/Extrafeatures.jpg"
import "../../CSS/styles.scss"
import circlestar from "../../images/circlestar.jpg"

export class Extrafeatures extends Component {
    render() {
        return (
            <div className="Extrafeatures">
                <div className="Extrafeatures-main">
                    <h1 className="Extrafeatures-main-h1">Extra Features</h1>
                    <p className="Extrafeatures-main-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className="Extrafeatures-secondary">
                    <div className="Extrafeatures-secondary-one">

                        <div className="Extrafeatures-secondary-text">
                            <div className="Extrafeatures-secondary-text-div">
                                <img src={circlestar} alt="cirlestar" className="Extrafeatures-secondary-text-img"/>
                                <h1 className="Extrafeatures-secondary-text-h1">Awesome Apps Featurs</h1>
                            </div>
                            <p className="Extrafeatures-secondary-text-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when </p>
                        </div>
                        <div className="Extrafeatures-secondary-text">
                            <div className="Extrafeatures-secondary-text-div">
                                <img src={circlestar} alt="cirlestar" className="Extrafeatures-secondary-text-img"/>
                                <h1 className="Extrafeatures-secondary-text-h1">Awesome Apps Featurs</h1>
                            </div>
                            <p className="Extrafeatures-secondary-text-p"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when </p>
                        </div>
                        <div className="Extrafeatures-secondary-text">
                            <div className="Extrafeatures-secondary-text-div">
                                <img src={circlestar} alt="cirlestar" className="Extrafeatures-secondary-text-img"/>
                                <h1 className="Extrafeatures-secondary-text-h1">Awesome Apps Featurs</h1>
                            </div>
                            <p className="Extrafeatures-secondary-text-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when </p>
                        </div>

                    </div>
                    <div className="Extrafeatures-secondary-two">

                        <img src={picture} alt="phone-image" className="Extrafeatures-secondary-two-img"/>
                    </div>
                    <div className="Extrafeatures-secondary-three">

                        <div className="Extrafeatures-secondary-text">
                            <div className="Extrafeatures-secondary-text-div">
                                <img src={circlestar} alt="cirlestar" className="Extrafeatures-secondary-text-img"/>
                                <h1 className="Extrafeatures-secondary-text-h1">Awesome Apps Featurs</h1>
                            </div>
                            <p className="Extrafeatures-secondary-text-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when </p>
                        </div>
                        <div className="Extrafeatures-secondary-text">
                            <div className="Extrafeatures-secondary-text-div">
                                <img src={circlestar} alt="cirlestar" className="Extrafeatures-secondary-text-img"/>
                                <h1 className="Extrafeatures-secondary-text-h1">Awesome Apps Featurs</h1>
                            </div>
                            <p className="Extrafeatures-secondary-text-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when </p>
                        </div>
                        <div className="Extrafeatures-secondary-text">
                            <div className="Extrafeatures-secondary-text-div">
                                <img src={circlestar} alt="cirlestar" className="Extrafeatures-secondary-text-img"/>
                                <h1 className="Extrafeatures-secondary-text-h1">Awesome Apps Featurs</h1>
                            </div>
                            <p className="Extrafeatures-secondary-text-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when </p>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default Extrafeatures
