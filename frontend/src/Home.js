import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import AppCarousel from './AppCarousel';
import AppFooter from './AppFooter';
import AppShowProduct from "./AppShowProduct";

class Home extends Component {
    render() {
        return (
            <div>
                <AppNavbar/>
                <AppCarousel/>
                <AppShowProduct/>
                <br/><br/><br/><br/>
                <AppFooter/>
            </div>
        );
    }
}
export default Home;