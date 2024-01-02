import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/DetailProduct.scss';
import {Col} from "reactstrap";
function DetailProductCom({link1,link2,link3}) {
 return (
     <Col className="bg col-xl-12 col-xs-12 mt-5" style={{border:"solid"}}>
     <section>
        <div className="container">
            <div className="carousel">
                <input type="radio" name="slides" id="slide-1"/>
                    <input type="radio" name="slides" id="slide-2"/>
                        <input type="radio" name="slides" id="slide-3"/>
                            <input type="radio" name="slides" id="slide-4"/>
                                <input type="radio" name="slides" id="slide-5"/>
                                    <input type="radio" name="slides" id="slide-6"/>
                                        <ul className="carousel__slides">
                                            <li className="carousel__slide">
                                                <figure>
                                                    <div>
                                                        <img src="https://picsum.photos/id/1041/800/450" alt=""/>
                                                    </div>
                                                    <figcaption>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                        <span className="credit">Photo: Tim Marshall</span>
                                                    </figcaption>
                                                </figure>
                                            </li>
                                            <li className="carousel__slide">
                                                <figure>
                                                    <div>
                                                        <img src="https://picsum.photos/id/1043/800/450" alt=""/>
                                                    </div>
                                                    <figcaption>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                        <span className="credit">Photo: Christian Joudrey</span>
                                                    </figcaption>
                                                </figure>
                                            </li>
                                            <li className="carousel__slide">
                                                <figure>
                                                    <div>
                                                        <img src="https://picsum.photos/id/1044/800/450" alt=""/>
                                                    </div>
                                                    <figcaption>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                        <span className="credit">Photo: Steve Carter</span>
                                                    </figcaption>
                                                </figure>
                                            </li>
                                            <li className="carousel__slide">
                                                <figure>
                                                    <div>
                                                        <img src="https://picsum.photos/id/1045/800/450" alt=""/>
                                                    </div>
                                                    <figcaption>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                        <span className="credit">Photo: Aleksandra Boguslawska</span>
                                                    </figcaption>
                                                </figure>
                                            </li>
                                            <li className="carousel__slide">
                                                <figure>
                                                    <div>
                                                        <img src="https://picsum.photos/id/1049/800/450" alt=""/>
                                                    </div>
                                                    <figcaption>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                        <span className="credit">Photo: Rosan Harmens</span>
                                                    </figcaption>
                                                </figure>
                                            </li>
                                            <li className="carousel__slide">
                                                <figure>
                                                    <div>
                                                        <img src="https://picsum.photos/id/1052/800/450" alt=""/>
                                                    </div>
                                                    <figcaption>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                        <span className="credit">Photo: Annie Spratt</span>
                                                    </figcaption>
                                                </figure>
                                            </li>
                                        </ul>
                                        <ul className="carousel__thumbnails">
                                            <li>
                                                <label htmlFor="slide-1"><img src="https://picsum.photos/id/1041/150/150" alt=""/></label>
                                            </li>
                                            <li>
                                                <label htmlFor="slide-2"><img src="https://picsum.photos/id/1043/150/150" alt=""/></label>
                                            </li>
                                            <li>
                                                <label htmlFor="slide-3"><img src="https://picsum.photos/id/1044/150/150" alt=""/></label>
                                            </li>
                                            <li>
                                                <label htmlFor="slide-4"><img src="https://picsum.photos/id/1045/150/150" alt=""/></label>
                                            </li>
                                            <li>
                                                <label htmlFor="slide-5"><img src="https://picsum.photos/id/1049/150/150" alt=""/></label>
                                            </li>
                                            <li>
                                                <label for="slide-6"><img src="https://picsum.photos/id/1052/150/150" alt=""/></label>
                                            </li>
                                        </ul>
            </div>
        </div>
    </section>
         </Col>
);
}

export default DetailProductCom;