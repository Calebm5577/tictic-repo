import React, { Component } from 'react'
import person1 from "../../images/myself.jpg"

export class Appreviewcard extends Component {
    render() {
        return (
            <div className="Appreviewcard">
                <div className="Appreviewcard-main">
                    <div className="Appreviewcard-main-picture">
                        <img src={person1} alt="person" className="Appreviewcard-main-picture-img"/>
                    </div>
                    <div className="Appreviewcard-main-text"> 
                        <h1 className="Appreviewcard-main-text-h1">John Deo</h1>
                        <p className="Appreviewcard-main-text-h3">CEO, ABC Company</p>
                    </div>
                </div>
                <div className="Appreviewcard-secondary">
                    <p className="Appreviewcard-secondary-h2">Lorem Ispum dollar ispestum sosad Lorem Ispum dollar ispestum sosad Lorem Ispum dollar ispestum sosad Lorem Ispum dollar ispestum sosad</p>
                </div>
            </div>
        )
    }
}

export default Appreviewcard
