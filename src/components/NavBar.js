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
                    style={{fontSize: 30, }}
                    className="brand">caveman collaborative</a>
                    <ul
                    id="rightSide"
                    className="right">
                        <li><NavLink className='Nav_link'
                            activeStyle={{ textDecoration: 'underline white' }}
                            to="/AboutUs">
                            About Us</NavLink></li>
                        <li><NavLink className='Nav_link'
                            activeStyle={{ textDecoration: 'underline white' }}
                            to="/OurWork">
                            Our Work</NavLink></li>
                        <li><NavLink className='Nav_link'
                            activeStyle={{ textDecoration: 'underline white' }}
                            to="/ContactUs">
                            Contact Us</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;
