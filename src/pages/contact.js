import React, { Component } from 'react'
import Header from '../components/Home/header'
import Bottom from '../components/Home/bottom-nav'

export class Contact extends Component {
    render() {
        return (
            <div>
                <Header />
                <h1>Sample Body Contact</h1>
                <Bottom />
            </div>
        )
    }
}

export default Contact
