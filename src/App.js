import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import OurWork from './components/OurWork'
import ContactUs from './components/ContactUs'
import AboutUs from './components/AboutUs'

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar />
                <Route exact path='/' component={Home} />
                <Route path='/AboutUs' component={AboutUs} />
                <Route path='/OurWork' component={OurWork} />
                <Route path='/ContactUs' component={ContactUs} />
            </div>
        </BrowserRouter>
    );
}

export default App;
