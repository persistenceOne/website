import React, { useState } from 'react';
import { Col } from 'reactstrap';
import Animate from '../components/animate';
import language from '../translationlang';
import {connect} from 'react-redux';
import {
    Carousel,
    CarouselItem,
    CarouselCaption
} from 'reactstrap';

const Slider = (props) => {
    const [selectedCaption, setSelectedCaption] = useState('caption');
    const items = [
        {
            animate: <Animate selectedCaption={selectedCaption} enter={(caption) => onEnter.bind(this, caption)} leave={(caption) => onLeave.bind(this, caption)} />,
            altText: 'Slide 1',
            caption: language[props.lang].persistence_technology,
            caption1: language[props.lang].comdex_dapp,
            caption2: language[props.lang].persistence_dapp,
            caption3: language[props.lang].p_sdk,
            caption4: language[props.lang].p_chanin,

        }
    ];

    const onEnter = (caption) => {
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
const mapStateToProps = state => {
    return {
        lang: state.language.language,
    }
};

export default connect(mapStateToProps)(Slider);
