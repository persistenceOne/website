import React, { useState } from 'react';
import { Col } from 'reactstrap';
import Animate from '../components/animate';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

const Slider = (props) => {

    const [selectedCaption, setSelectedCaption] = useState('caption');
    const items = [
        {
            animate: <Animate selectedCaption={selectedCaption} enter={(caption) => onEnter.bind(this, caption)} leave={(caption) => onLeave.bind(this, caption)} />,
            altText: 'Slide 1',
            caption: 'The Persistence technology stack is a full suite of products covering the end-to-end journey of facilitating borrowing of cryptoassets using real-world assets as collateral and removes all complexities of using Public Blockchains to allow for easier institutional adoption while catering to easy use for crypto-native users',
            caption1: 'The Comdex dApp Is an institutional user-facing dApp that aggregates liquidity from institutional investors/lenders and has facilitated $30 Million worth of transactions',
            caption2: 'The Persistence dApp is a crypto user-facing dApp to aggregate liquidity from crypto investors/lenders.',
            caption3: 'The Persistence SDK contains the building blocks (modules) for Asset Tokenization, Decentralized Exchange of Assets and Financing against real-world assets as collateral',
            caption4: 'The Persistence chain is a natively interoperable chain that facilitates auditable, verifiable logging of information',

        }
    ];

    const onEnter = (caption) => {
        console.log('onenter')
        setSelectedCaption(caption);
    }
    const onLeave = (caption) => {
        setSelectedCaption('caption');
    }
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

    const slides = items.map((item, index) => {
        return (
            <CarouselItem key={index}
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
            // key={item.src}
            ><div className="row">
                    <div className="col-lg-6">
                        <Col lg="12" className="slider-title" ><CarouselCaption captionText={item[selectedCaption]} /></Col>
                        <Col lg="12" className="persistence-caption"><CarouselCaption captionText={item.persistenceCaption} /></Col>
                        <Col lg="12" className="slider-title2"><CarouselCaption captionText={item.comdexCap} /></Col>
                    </div>
                    <div className="col-lg-6">
                        <Col lg="12" className="slider-width"><span>{item.animate}</span></Col>
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
            {/* <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} /> */}
            {slides}
            {/* <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} /> */}
        </Carousel >
    );

}

export default Slider;