import React, {useState} from 'react';
import {Col} from 'reactstrap';
import layer1 from '../../assets/slider/Layer01.png';
import layer2 from '../../assets/slider/Layer02.png';
import layer3 from '../../assets/slider/Layer03.png';
import Animate from "../../components/animations/animate";

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
            animate: <Animate selectedCaption={selectedCaption} enter={(caption) => onEnter.bind(this, caption)}
                              leave={(caption) => onLeave.bind(this, caption)}/>,
            caption: {
                text: 'By removing all the complexities of using public blockchains, Persistence products enable seamless institutional adoption while catering to crypto-native users.',
                header: 'The Persistence technology stack consists of products facilitating the end-to-end journey of the borrowing of cryptoassets using real-world assets as collateral.'
            },
            caption1: {
                text: 'The Comdex dApp is an institutional user-facing application providing end-to-end commodities trade solution - trade discovery, trade settlement and trade financing.',
                header: ''
            },
            caption2: {
                text: 'The Persistence dApp is crypto user-facing application enabling liquidity aggregation from crypto investors or lenders.',
                header: ''
            },
            caption3: {
                text: 'The Persistence SDK comprises the building blocks (modules) for asset tokenization, decentralized exchange of assets and crypto financing against real-world assets as collateral.',
                header: ''
            },
            caption4: {
                text: 'The Persistence chain is a natively interoperable chain facilitating auditable and verifiable logging of information.',
                header: ''
            }

        },
        {
            src: layer3,
            altText: 'Slide 4',
            captionalt: 'The Persistence chain is a natively interoperable chain facilitating auditable and verifiable logging of information.',
        },
        {
            src: layer2,
            altText: 'Slide 3',
            captionalt: 'The Persistence SDK comprises the building blocks (modules) for asset tokenization, decentralized exchange of assets and crypto financing against real-world assets as collateral.',
        },
        {
            src: layer1,
            altText: 'Slide 2',
            captionalt: 'The Persistence dApp is crypto user-facing application enabling liquidity aggregation from crypto investors or lenders.',
            caption5: 'The Comdex dApp is an institutional user-facing application providing end-to-end commodities trade solution - trade discovery, trade settlement and trade financing.',

        }


    ];

    const onEnter = (caption) => {
        setSelectedCaption(caption);
    };
    const onLeave = (caption) => {
        setSelectedCaption('caption');
    };
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
    const slides = items.map((item, index) => {
        return (
            <CarouselItem key={index}
                          onExiting={() => setAnimating(true)}
                          onExited={() => setAnimating(false)}
                //  key={item.src}
            >
                <div className="row">
                    <div className="col-lg-6">
                        <Col lg="12" className="slider-title"><CarouselCaption
                            captionHeader={item[selectedCaption]?.header}
                            captionText={item[selectedCaption]?.text}/><span>&nbsp;</span></Col>

                        <Col lg="12" className="slider-title"><CarouselCaption
                            captionText={item.captionalt}/><span>&nbsp;</span></Col>
                        <Col lg="12" className="slider-title2"><CarouselCaption
                            captionText={item.caption5}/><span>&nbsp;</span></Col>
                    </div>
                    <div className="col-lg-6">
                        <Col lg="12" className="slider-width"><span>{item.animate}</span></Col>
                        <Col lg="12" className="slider-width"><img src={item.src} alt={item.altText}/></Col>
                        <p className="slider-watermark">Technology Stack</p>
                    </div>
                </div>
            </CarouselItem>
        );
    });

    return (
        <section className="section-slider" id="products">
            <div className="inner_section-line">
                <h3 className="product-head">products</h3>
                <div className="container">
                    <div className="row head-slider">
                        <Carousel
                            activeIndex={activeIndex}
                            next={next}
                            previous={previous}
                            interval={100000}
                        >
                            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex}/>
                            {slides}
                            <div className="c-indicators">
                                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous}/>
                                <CarouselControl direction="next" directionText="Next" onClickHandler={next}/>
                            </div>
                        </Carousel>
                    </div>

                </div>
            </div>
        </section>

    );

};

export default Slider;
