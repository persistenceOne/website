import React, {useState} from "react";
import Carousel from 'react-bootstrap/Carousel';
import sliderImg from '../../assets/slider.svg';
import Icon from '../../pages/icon';

const ControlledCarousel = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="container-fluid pl-0 pr-0">
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item interval={100000}>
                    <img
                        className="d-block w-100"
                        src={sliderImg}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>Amet minim mollit non deserunt ullamco est sit aliqua</h1>
                        <ul className="list-unstyled first-section-social-icons">
                            <a href="https://medium.com/persistence-blog/pos-token-holders-prepare-yourselves-for-persistence-stakedrop-the-grand-unveiling-d5f6ca6ddc40" target="_blank" rel="noopener noreferrer"><li className="learnmore primary-bg-color primay-secondary-color">LearnMore</li></a>
                            <a href="https://twitter.com/PersistenceOne" rel="noopener noreferrer" target="_blank" title="Twitter"><li><Icon viewClass="social_icon_imgg primary-bg-color" icon="twitter-logo" /></li></a>
                            <a href="https://t.me/PersistenceOne" rel="noopener noreferrer" target="_blank" title="Announcements"><li><Icon viewClass="social_icon_imgg primary-bg-color" icon="telegram-plane" /></li></a>
                            <a href="https://medium.com/persistence-blog" rel="noopener noreferrer" target="_blank" title="Medium"><li><Icon viewClass="social_icon_imgg primary-bg-color" icon="medium-m" /></li></a>
                        </ul>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={100000}>
                    <img
                        className="d-block w-100"
                        src={sliderImg}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1>Amet minimasd</h1>
                        <ul className="list-unstyled first-section-social-icons">
                            <a href="https://medium.com/persistence-blog/pos-token-holders-prepare-yourselves-for-persistence-stakedrop-the-grand-unveiling-d5f6ca6ddc40" target="_blank" rel="noopener noreferrer"><li className="learnmore primary-bg-color primay-secondary-color">LearnMore</li></a>
                            <a href="https://twitter.com/PersistenceOne" rel="noopener noreferrer" target="_blank" title="Twitter"><li><Icon viewClass="social_icon_imgg primary-bg-color" icon="twitter-logo" /></li></a>
                            <a href="https://t.me/PersistenceOne" rel="noopener noreferrer" target="_blank" title="Announcements"><li><Icon viewClass="social_icon_imgg primary-bg-color" icon="telegram-plane" /></li></a>
                            <a href="https://medium.com/persistence-blog" rel="noopener noreferrer" target="_blank" title="Medium"><li><Icon viewClass="social_icon_imgg primary-bg-color" icon="medium-m" /></li></a>
                        </ul>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={100000}>
                    <img
                        className="d-block w-100"
                        src={sliderImg}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1>Amet minim mollit non deserunt ullamco est sit aliqua</h1>
                        <ul className="list-unstyled first-section-social-icons">
                            <a href="https://medium.com/persistence-blog/pos-token-holders-prepare-yourselves-for-persistence-stakedrop-the-grand-unveiling-d5f6ca6ddc40" target="_blank" rel="noopener noreferrer"><li className="learnmore primary-bg-color primay-secondary-color">LearnMore</li></a>
                            <a href="https://twitter.com/PersistenceOne" rel="noopener noreferrer" target="_blank" title="Twitter"><li><Icon viewClass="social_icon_imgg primary-bg-color" icon="twitter-logo" /></li></a>
                            <a href="https://t.me/PersistenceOne" rel="noopener noreferrer" target="_blank" title="Announcements"><li><Icon viewClass="social_icon_imgg primary-bg-color" icon="telegram-plane" /></li></a>
                            <a href="https://medium.com/persistence-blog" rel="noopener noreferrer" target="_blank" title="Medium"><li><Icon viewClass="social_icon_imgg primary-bg-color" icon="medium-m" /></li></a>
                        </ul>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}


export default ControlledCarousel