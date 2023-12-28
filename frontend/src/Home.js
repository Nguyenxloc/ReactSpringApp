import React, { Component } from 'react';
import './App.css';
import AppCarousel from './AppCarousel';
import AppFooter from './AppFooter';
import AppShowProduct from "./AppShowProduct";
import NavBar from "./component/NavBar";
class Home extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <AppCarousel/>
                <AppShowProduct/>
                <br/><br/><br/><br/>
                <AppFooter/>
            </div>
        );
    }
}
export default Home;