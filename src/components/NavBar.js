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
                    href='./Home'
                    id="title"
                    style={{fontSize: 40, }}
                    className="brand">caveman collaborative</a>
                    <ul
                    id="rightSide"
                    className="right">
                        <li><Link to="/">Home</Link></li>
                        <li><NavLink to="/AboutUs">About Us</NavLink></li>
                        <li><NavLink to="/OurWork">Our Work</NavLink></li>
                        <li><NavLink to="/ContactUs">Contact Us</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;