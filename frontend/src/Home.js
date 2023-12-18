import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import AppCarousel from './AppCarousel';
import AppFooter from './AppFooter';
import AppWelcomePage from './AppWelcomePage';

class Home extends Component {
    render() {
        return (
            <div>
                <AppNavbar/>
                <AppCarousel/>
                <AppWelcomePage/>
                <br/><br/><br/><br/>
                <AppFooter/>
            </div>
        );
    }
}
export default Home;