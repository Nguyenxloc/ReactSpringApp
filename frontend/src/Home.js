import React, { Component } from 'react';
import './App.css';
import CarouselCom from './component/CarouselCom';
import FooterCom from './component/FooterCom';
import NavBarCom from "./component/NavBarCom";
import ListProductCom from "./component/ListProductCom";

class Home extends Component {
    render() {
        return (
            <div>
                <NavBarCom/>
                <CarouselCom/>
                <ListProductCom/>
                <br/><br/><br/><br/>
                <FooterCom/>
            </div>
        );
    }
}
export default Home;