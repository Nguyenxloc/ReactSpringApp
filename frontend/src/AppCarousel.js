import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption, Container, Row, Col,
} from 'reactstrap';
const items = [
    {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Ph%E1%BB%91_T%E1%BA%A1_Hi%E1%BB%87n_-_NKS.jpg/800px-Ph%E1%BB%91_T%E1%BA%A1_Hi%E1%BB%87n_-_NKS.jpg',
        altText: 'Slide 1',
        caption: 'Slide 1',
        key: 1,
    },
    {
        src: 'https://cdn.pixabay.com/photo/2021/08/04/02/54/hoi-an-6520902_960_720.jpg',
        altText: 'Slide 2',
        caption: 'Slide 2',
        key: 2,
    },
    {
        src: 'https://vcdn1-vnexpress.vnecdn.net/2021/03/21/phocoHaNoi-1616302929-4490-1616303680.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=0oOjUngzMxH_Py-FbauYyg',
        altText: 'Slide 3',
        caption: 'Slide 3',
        key: 3,
    },
];

function AppCarousel(args) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
                className="carouselItem"
            >
                <img src={item.src} alt={item.altText} style={{width:"100%", height:"100%"}}/>
                <CarouselCaption
                    captionText={item.caption}
                    captionHeader={item.caption}
                />
            </CarouselItem>
        );
    });

    return (
        <Container>
            <Row className="bg" lg="3" xs="1">
                <Col className="bg col-lg-8 mt-3" style={{}}>
                    <Carousel
                        style={{width:"100%",height:"100%"}}
                        activeIndex={activeIndex}
                        next={next}
                        previous={previous}
                        {...args}
                    >
                        <CarouselIndicators
                            items={items}
                            activeIndex={activeIndex}
                            onClickHandler={goToIndex}
                        />
                        {slides}
                        <CarouselControl
                            direction="prev"
                            directionText="Previous"
                            onClickHandler={previous}
                        />
                        <CarouselControl
                            direction="next"
                            directionText="Next"
                            onClickHandler={next}
                        />
                    </Carousel>
                </Col>
                <Col className="bg col-lg-4" style={{}}>
                    <Row className="bg mt-3" lg="1" xs="1">
                        <Col className="bg col-lg-12 col-xs-12" style={{}}>
                            <img src="https://www.ochrehandcrafted.com/cdn/shop/products/slimminimalistcardleatherwallet-OCHREhandcrafted_fbe9b50a-297e-4b7f-9335-0337594db9c7_600x.jpg?v=1668699217" alt=""
                                 style={{width: "100%", height: "100%"}}/>
                        </Col>
                        <Col className="bg col-lg-12 col-xs-12 mt-3" style={{}}>
                            <img src="https://www.galenleather.com/cdn/shop/products/leather-zippered-mega-mini-wallet-crazy-horse-brown_1500x.jpg?v=1625262721" alt=""
                                 style={{width: "100%", height: "100%"}}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default AppCarousel;