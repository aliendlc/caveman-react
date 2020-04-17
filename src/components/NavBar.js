import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='home'>
            <nav className="navBar"
        id="navWrap">
                <div
                id="nav"
                className="nav-collapse collapse">
                    <a
                    href='/'
                    id="title"
                    style={{fontSize: 22 }}
                    className="brand">caveman</a>
                    <a
                    href='/'
                    id="title"
                    style={{fontSize: 22 }}
                    className="brand"> collaborative</a>
                    <ul
                    id="rightSide"
                    className="right">
                        <li><NavLink className='Nav_link'
                            activeStyle={{ textDecoration: 'underline black' }}
                            to="/AboutUs">
                            About Us</NavLink></li>
                        <li><NavLink className='Nav_link'
                            activeStyle={{ textDecoration: 'underline black' }}
                            to="/OurWork">
                            Our Work</NavLink></li>
                        <li><NavLink className='Nav_link'
                            activeStyle={{ textDecoration: 'underline black' }}
                            to="/ContactUs">
                            Contact Us</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;
