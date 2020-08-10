import React, { useState } from 'react';
import { Col } from 'reactstrap';
import layer from '../../assets/Layer.svg'
import layer1 from '../../assets/Layer01.png'
import layer2 from '../../assets/Layer02.png'
import layer3 from '../../assets/Layer03.png'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

const items = [
    {
        src: layer,
        altText: 'Slide 1',
        caption: 'The Persistence technology stack is a full suite of products covering the end-to-end journey of facilitating borrowing of cryptoassets using real-world assets as collateral and removes all complexities of using Public Blockchains to allow for easier institutional adoption while catering to easy use for crypto-native users'

    },
    {
        src: layer1,
        altText: 'Slide 2',
        caption: 'The Persistence dApp is a crypto user-facing dApp to aggregate liquidity from crypto investors/lenders.',
        caption2: 'The Comdex dApp Is an institutional user-facing dApp that aggregates liquidity from institutional investors/lenders and has facilitated $30 Million worth of transactions'

    },
    {
        src: layer2,
        altText: 'Slide 3',
        caption: 'The Persistence SDK contains the building blocks (modules) for Asset Tokenization, Decentralized Exchange of Assets and Financing against real-world assets as collateral'
    },
    {
        src: layer3,
        altText: 'Slide 4',
        caption: 'The Persistence chain is a natively interoperable chain that facilitates auditable, verifiable logging of information'
    }
];

const Slider = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            ><div className="row">
                    <div className="col-lg-6">
                        <Col lg="12" className="slider-title"><CarouselCaption captionText={item.caption} /></Col>
                        <Col lg="12" className="slider-title2"><CarouselCaption captionText={item.caption2} /></Col>
                    </div>
                    <div className="col-lg-6">
                        <Col lg="12" className="slider-width"><img src={item.src} alt={item.altText} /></Col>
                    </div>
                </div>


            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel >
    );

}

export default Slider;