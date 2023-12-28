import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption, Container, Row, Col,
} from 'reactstrap';

const items = [
    {
        src: 'https://picsum.photos/id/123/1200/400',
        altText: 'Slide 1',
        caption: 'Slide 1',
        key: 1,
    },
    {
        src: 'https://picsum.photos/id/456/1200/400',
        altText: 'Slide 2',
        caption: 'Slide 2',
        key: 2,
    },
    {
        src: 'https://picsum.photos/id/678/1200/400',
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
            >
                <img src={item.src} alt={item.altText} height={350}/>
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
                        <Col className="bg col-lg-8 mt-3" style={{border:"solid"}}>
                            <Carousel
                                style={{}}
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
                            <Row className="bg mt-3" lg="1" xs="2">
                                <Col className="bg col-lg-12 col-xs-6" style={{border:"solid"}}>
                                <img src="https://ladaleather.com/wp-content/uploads/2022/07/DSCF9724.jpg" alt=""
                                     style={{height: 200}}/>
                                </Col>
                                <Col className="bg col-lg-12 col-xs-6" style={{border:"solid"}}>
                                <img src="https://ladaleather.com/wp-content/uploads/2022/07/DSCF9724.jpg" alt=""
                                     style={{height: 200}}/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
    );
}

export default AppCarousel;