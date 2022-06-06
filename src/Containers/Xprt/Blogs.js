import Carousel from "react-multi-carousel";
import React from "react";


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};
const images = [
    {
        url:'https://medium.com/persistence-blog/persistence-xprt-wallet-guide-dbf5e27100f3',
        image:'https://miro.medium.com/max/1400/1*U0Aon_iKKgBqxbroQRz9Xw.png',
        text:'Wallet Setup Guide'
    },
    {
        url:'https://medium.com/persistence-blog/persistence-xprt-staking-guide-4504cf9a19df',
        image:'https://miro.medium.com/max/1400/1*ZQmstOH9DYK30v8zQWB8-g.png',
        text:'XPRT Staking Guide'
    },
    {
        url:'https://www.youtube.com/watch?v=QG7VCqGFc_8',
        image:'https://img.youtube.com/vi/QG7VCqGFc_8/hqdefault.jpg',
        text:'Provide Liquidity on Osmosis'
    }
];

const Blogs = ({ deviceType }) => {
    return (
        <section className="stay-updated">
            <div className="container">
                <p className="title">Tutorials</p>
                <Carousel
                    ssr
                    partialVisbile
                    deviceType={deviceType}
                    itemClass="image-item"
                    responsive={responsive}
                    autoPlay={false}
                >
                    {images.slice(0, 5).map(image => {
                        return (
                            <>
                            <a href={image.url} rel="noopener noreferrer"
                               target="_blank"
                               key={image.url}
                               className="button">
                                <img
                                    draggable={false}
                                    alt={image.image}
                                    style={{ width: "100%", height: "100%" }}
                                    src={image.image}
                                />
                                <div className={'blog-title'}>
                                    <a href={image.url} target="_blank" rel="noopener noreferrer">{image.text}</a>
                                </div>
                            </a>



                            </>
                        );
                    })}
                </Carousel>
            </div>
        </section>
    );
};

export default Blogs;
