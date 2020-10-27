import React, { useState } from 'react';
import { Col } from 'reactstrap';
import layer1 from '../../assets/Layer01.png'
import layer2 from '../../assets/Layer02.png'
import layer3 from '../../assets/Layer03.png'
import Animate from '../components/animations/animate';
import language from '../translationlang';
import {connect} from 'react-redux';
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
           
            caption: language[props.lang].persistence_technology,
            caption1: language[props.lang].comdex_dapp,
            caption2: language[props.lang].persistence_dapp,
            caption3: language[props.lang].p_sdk,
            caption4: language[props.lang].p_chanin,

        },
        {
            src: layer3,
            altText: 'Slide 4',
            captionalt: language[props.lang].p_chanin,
        },
        {
            src: layer2,
            altText: 'Slide 3',
            captionalt:language[props.lang].p_sdk,
        },
        {
            src: layer1,
            altText: 'Slide 2',
            captionalt: language[props.lang].persistence_dapp,
            caption5: language[props.lang].comdex_dapp,
    
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

   
    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
      }
    const slides = items.map((item, index) => {
        return (
            <CarouselItem key={index}
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
            //  key={item.src}
            ><div className="row">
                    <div className="col-lg-6">
                        <Col lg="12" className="slider-title" ><CarouselCaption captionText={item[selectedCaption]} /><span>&nbsp;</span></Col>
                       
                        <Col lg="12" className="slider-title"><CarouselCaption captionText={item.captionalt} /><span>&nbsp;</span></Col>
                        <Col lg="12" className="slider-title2"><CarouselCaption captionText={item.caption5} /><span>&nbsp;</span></Col>
                    </div>
                    <div className="col-lg-6">
                        <Col lg="12" className="slider-width"><span>{item.animate}</span></Col>
                        <Col lg="12" className="slider-width"><img src={item.src} alt={item.altText} /></Col>
                        <p className="slider-watermark">Technology Stack</p>
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
            interval={100000}
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <div className="c-indicators">
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </div>
        </Carousel >
    );

}
const mapStateToProps = state => {
    return {
        lang: state.language.language,
    }
};

export default connect(mapStateToProps)(Slider);
