import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/DetailProduct.scss';
import '../css/BtnAddToCart.css';
import {Col, Row} from "reactstrap";

function DetailProductCom({product}) {
    return (
        <Col className="bg col-xl-12 col-xs-12 mt-5" style={{}}>
            <p className="ms-2" style={{}}>
                Link1>link2>link3
                <hr/>
            </p>
            <section>
                <div className="container">
                    <div className="carousel">
                        <input type="radio" name="slides" id="slide-1"/>
                        <input type="radio" name="slides" id="slide-2"/>
                        <input type="radio" name="slides" id="slide-3"/>
                        <input type="radio" name="slides" id="slide-4"/>
                        <input type="radio" name="slides" id="slide-5"/>
                        <input type="radio" name="slides" id="slide-6"/>
                        <Row className="carousel__slides" xl="2" xs="2" style={{width:"800px"}}>
                            <Col className="bg col-xl-6 col-xs-6"  style={{width:"50%"}}>
                                <ul className="carousel__slides">
                                    <li className="carousel__slide">
                                        <figure>
                                            <div>
                                                <img src={product.link1} alt=""/>
                                            </div>
                                        </figure>
                                    </li>
                                    <li className="carousel__slide">
                                        <figure>
                                            <div>
                                                <img src={product.link2} alt=""/>
                                            </div>
                                        </figure>
                                    </li>
                                    <li className="carousel__slide">
                                        <figure>
                                            <div>
                                                <img src={product.link3} alt=""/>
                                            </div>
                                        </figure>
                                    </li>
                                    <li className="carousel__slide">
                                        <figure>
                                            <div>
                                                <img src="https://picsum.photos/id/1045/800/450" alt=""/>
                                            </div>
                                        </figure>
                                    </li>
                                    <li className="carousel__slide">
                                        <figure>
                                            <div>
                                                <img src="https://picsum.photos/id/1049/800/450" alt=""/>
                                            </div>
                                        </figure>
                                    </li>
                                    <li className="carousel__slide">
                                        <figure>
                                            <div>
                                                <img src="https://picsum.photos/id/1052/800/450" alt=""/>
                                            </div>
                                        </figure>
                                    </li>
                                </ul>
                            </Col>
                            <Col className="bg col-xl-6 col-xs-6"  style={{}}>
                            <figcaption>
                                <br/>
                                <h3>{product.sp.ten}</h3>
                                <br/>
                                <p style={{color:"darkred",fontSize:"25px"}}>{product.giaBan}$</p>
                                <hr/>
                                <label>Số lượng</label>
                                <br/>
                                <input style={{width:"40px"}} type="number"/>
                                <br/><br/>
                                <button className="addtocart">
                                    <div className="pretext">
                                        <i className="bi bi-cart4"></i> ADD TO CART
                                    </div>
                                </button>
                            </figcaption>
                            </Col>
                        </Row>
                        <ul className="carousel__thumbnails">
                            <li>
                                <label htmlFor="slide-1"><img src={product.link1}
                                                              alt=""/></label>
                            </li>
                            <li>
                                <label htmlFor="slide-2"><img src={product.link2}
                                                              alt=""/></label>
                            </li>
                            <li>
                                <label htmlFor="slide-3"><img src={product.link3}
                                                              alt=""/></label>
                            </li>
                            <li>
                                <label htmlFor="slide-4"><img src="https://picsum.photos/id/1045/150/150"
                                                              alt=""/></label>
                            </li>
                            <li>
                                <label htmlFor="slide-5"><img src="https://picsum.photos/id/1049/150/150"
                                                              alt=""/></label>
                            </li>
                            <li>
                                <label for="slide-6"><img src="https://picsum.photos/id/1052/150/150" alt=""/></label>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <hr/>
        </Col>
    );
}

export default DetailProductCom;