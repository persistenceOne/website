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
        url:'https://medium.com/persistence-blog/the-vision-for-persistence-and-xprt-value-accrual-53fd56619e3d',
        image:'https://miro.medium.com/max/1400/1*yyGtq7g0FQRKsmzIWdP6Rw.png',
        title:"The Vision for Persistence",
        subtitle:"$XPRT TOKEN"
    },
    {
        url:'https://medium.com/persistence-blog/from-the-founders-desk-mission-2022-d3a2a1d20de1',
        image:'https://miro.medium.com/max/1400/0*ZgVUN-HPoMTO5AEO',
        title:"From the Founder’s Desk",
        subtitle:"MISSION 2022"
    },
    {
        url:'https://medium.com/persistence-blog/community-newsletter-20-may-2022-afb562173221',
        image:'https://miro.medium.com/max/1400/0*0WYZ8Pk5xU5ods2l',
        title:"Community Newsletter #20",
        subtitle:"MAY 2022"
    },
    {
        url:'https://medium.com/persistence-blog/from-the-founders-desk-mission-2022-d3a2a1d20de1',
        image:'https://miro.medium.com/max/1400/0*r0zQspc5rwCjUGwZ',
        title:"Community Newsletter #19",
        subtitle:"APRIL 2022"
    },
    {
        url:'https://medium.com/persistence-blog/community-newsletter-18-march-2022-9925d8bbd545',
        image:'https://miro.medium.com/max/1400/0*QvLinyxZydtFUAam',
        title:"Community Newsletter #18",
        subtitle:"MARCH 2022"
    },
];

const Blogs = ({ deviceType }) => {
    return (
        <section className="stay-updated">
            <div className="container">
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
                                    <h6>{image.subtitle}</h6>
                                    <h5>{image.title}</h5>
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
