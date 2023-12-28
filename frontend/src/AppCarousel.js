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
                <img src={item.src} alt={item.altText} height={360}/>
                <CarouselCaption
                    captionText={item.caption}
                    captionHeader={item.caption}
                />
            </CarouselItem>
        );
    });

    return (
                <Row lg="2" xs="1" >
                    <Col className="bg" style={{padding: 20}}>
                        <Carousel
                            style={{width: 940, height: 360, padding: 20}}
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
                    <Col className="bg" style={{padding: 20}}>
                        <div>
                            <img src="https://ladaleather.com/wp-content/uploads/2022/07/DSCF9724.jpg" alt=""
                                 style={{width: 350, height: 200, paddingTop: 20, paddingBottom: 20}}/>
                            <br/>
                            <img src="https://ladaleather.com/wp-content/uploads/2022/07/DSCF9724.jpg" alt=""
                                 style={{width: 350, height: 200, paddingBottom: 20}}/>
                        </div>
                    </Col>
                </Row>
    );
}

export default AppCarousel;