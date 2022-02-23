import Carousel from "react-multi-carousel";
import React from "react";
import {useTranslation} from "react-i18next";


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
        url:'https://medium.com/persistence-blog/exploring-the-relationship-between-xprt-and-pstake-f0190efcee2a',
        image:'https://miro.medium.com/max/1400/1*InSUTrBmx7so7xjEGWVRQQ.png'
    },
    {
        url:'https://medium.com/persistence-blog/the-vision-for-persistence-and-xprt-value-accrual-53fd56619e3d',
        image:'https://miro.medium.com/max/1400/1*yyGtq7g0FQRKsmzIWdP6Rw.png'
    },
    {
        url:'https://medium.com/persistence-blog/from-the-founders-desk-mission-2022-d3a2a1d20de1',
        image:'https://miro.medium.com/max/1400/0*ZgVUN-HPoMTO5AEO'
    },
    {
        url:'https://medium.com/persistence-blog/community-newsletter-16-january-2022-ecde69cb2721',
        image:'https://miro.medium.com/max/1400/1*VSeIXPpjTnKaQeTrpLi70g.png'
    },
];

const Blogs = ({ deviceType }) => {
    const {t} = useTranslation();
    return (
        <section className="stay-updated">
            <h3 className="section-title">{t("BLOGS_SECTION_TITLE")}</h3>
            <div className="container">
                <Carousel
                    ssr
                    partialVisbile
                    deviceType={deviceType}
                    itemClass="image-item"
                    responsive={responsive}
                    autoPlay={true}
                >
                    {images.slice(0, 5).map(image => {
                        return (
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
                            </a>

                        );
                    })}
                </Carousel>
            </div>
        </section>
    );
};

export default Blogs;
