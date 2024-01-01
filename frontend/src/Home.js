import React, { Component } from 'react';
import './App.css';
import AppCarousel from './component/AppCarousel';
import AppFooter from './component/AppFooter';
import ListProduct from "./component/ListProduct";
import NavBar from "./component/NavBar";

class Home extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <AppCarousel/>
                <ListProduct/>
                <br/><br/><br/><br/>
                <AppFooter/>
            </div>
        );
    }
}
export default Home;