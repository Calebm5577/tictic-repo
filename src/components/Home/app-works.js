import React, { Component } from 'react'
import picture from "../../images/Appworks.jpg"
import "../../CSS/styles.scss"

export class Appworks extends Component {
    render() {
        return (
            <div className="Appworks">
            <div className="Appworks-main">
                <h1 className="Appworks-main-h1">How Does This App Work?</h1>
                <p className="Appworks-main-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </div>
            <div className="Appworks-secondary">
                <div className="Appworks-secondary-one">
                    <img src={picture} alt="App-works" className="Appworks-secondary-one-img"/>
                </div>
                <div className="Appworks-secondary-two">
                    <div className="Appworks-secondary-two-text">
                        <h1 className="Appworks-secondary-two-text-h1">Awesome Apps Featurs</h1>
                        <p className="Appworks-secondary-two-text-p">n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a </p>
                    </div>
                    <div className="Appworks-secondary-two-text">
                        <h1 className="Appworks-secondary-two-text-h1">Awesome Apps Featurs</h1>
                        <p className="Appworks-secondary-two-text-p">n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a </p>
                    </div>
                    <div className="Appworks-secondary-two-text">
                        <h1 className="Appworks-secondary-two-text-h1">Awesome Apps Featurs</h1>
                        <p className="Appworks-secondary-two-text-p">n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a </p>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Appworks
