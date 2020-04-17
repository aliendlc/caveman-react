import React, { Component } from 'react';
import JCDLC from "../assets/profilePic.jpg";
import DLCFILMS from "../assets/DLCFILMS.jpg";
import ANA from "../assets/ana.jpg";

class AboutUs extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render () {
        return (
            <div class='aboutUs'>
                <div class='people'>
                    <div class='bio'>
                        <h2>Caveman</h2>
                        <img alt='not yet here' src={JCDLC}></img>
                        <p>Jose Carlos de la Colina Horta</p>
                        <p class='intro'> I invite you to browse through all of our bios and services to see if we can find a solution for you</p>
                    </div>
                    <div class='services'>
                        <h4>Services</h4>
                        <ul></ul>
                        <li class='serviceLi'>Business Consulting</li>
                        <li class='serviceLi'>Web and Phone Application Development</li>
                        <li class='serviceLi'>Photography</li>
                    <a>josecarlosdlch.com</a>
                    </div>
                </div>
                <div class='people'>
                    <div class='bio'>
                        <h2>DELACOLINA FILMS</h2>
                        <img alt='not yet here' src={DLCFILMS}></img>
                        <p>Jorge De La Colina</p>
                        <p class='intro'>At DELACOLINA Films, we're proud to have worked on many projects from initial conception, all the way to post-production and delivery. Not only do we specialize in professional-quality digital film production, but also proudly offer pre-production and post-production services including editing, color grading and processing, 2D and 3D design and rendering. Wherever you are in your project, let us know how we can help.</p>
                    </div>
                    <div class='services'>
                        <h4>Services</h4>
                        <ul></ul>
                            <li class='serviceLi'>Digital Film Production</li>
                            <li class='serviceLi'>Post Production</li>
                            <li class='serviceLi'>Aerial Cinematography</li>
                            <li class='serviceLi'>2D/3D Graphics and Animation</li>
                        <a>delacolinafilms.com</a>
                    </div>
                </div>
                <div class='people'>
                    <div class='bio'>
                        <h2>ana.belle.pepper</h2>
                        <img alt='not yet here' src={ANA}></img>
                        <p>Ana</p>
                        <p class='intro'> I invite you to browse through all of our bios and services to see if we can find a solution for you</p>
                    </div>
                    <div class='services'>
                        <h4>Services</h4>
                        <ul></ul>
                        <li class='serviceLi'>Business Consulting</li>
                        <li class='serviceLi'>Web and Phone Application Development</li>
                        <li class='serviceLi'>Photography</li>
                    <a>josecarlosdlch.com</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutUs;
