import React, { Component } from 'react';
import JCDLC from "../assets/profilePic.jpg"
class AboutUs extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render () {
        return (
            <div>
                <div class='people'>
                    <div class='bio'>
                        <h2>Head Caveman</h2>
                        <img alt='not yet here' src={JCDLC}></img>
                        <p>Jose Carlos de la Colina Horta</p>
                        <p> I invite you to browse through all of our bios and services to see if we can find a solution for you</p>
                    </div>
                    <div class='services'>
                        <h4>Services</h4>
                        <ul></ul>
                            <li>Business Consulting</li>
                            <li>Web and Phone Application Development</li>
                            <li>Photography</li>
                        <a>josecarlosdlch.com</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutUs;
