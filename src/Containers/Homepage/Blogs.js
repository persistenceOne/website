import Carousel from "react-multi-carousel";
import React from "react";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const images = [
  {
    url: "https://blog.persistence.one/2023/04/25/persistence-2023-liquid-staking-roadmap-update/",
    image:
      "https://blog.persistence.one/wp-content/uploads/2023/04/23_Persistence-min.png",
    title: "Roadmap Update",
    subtitle: "2023"
  },
  {
    url: "https://blog.persistence.one/2023/04/17/persistence-quarterly-recap-q1-2023/",
    image:
      "https://blog.persistence.one/wp-content/uploads/2023/04/Q1_Persistence-min.png",
    title: "Persistence Quarterly Recap",
    subtitle: "Q1 2023"
  },
  {
    url: "https://blog.persistence.one/2022/06/03/community-newsletter-20-may-2022/",
    image:
      "https://blog.persistence.one/wp-content/uploads/2022/06/Persistence-Monthly-Newsletter-For-May-2022.png",
    title: "Community Newsletter #20",
    subtitle: "MAY 2022"
  }
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
          {images.slice(0, 5).map((image) => {
            return (
              <a
                href={image.url}
                rel="noopener noreferrer"
                target="_blank"
                key={image.url}
                className="button"
              >
                <img
                  draggable={false}
                  alt={image.image}
                  style={{ width: "100%", height: "100%" }}
                  src={image.image}
                />
                <div className={"blog-title"}>
                  <h6>{image.subtitle}</h6>
                  <h5>{image.title}</h5>
                </div>
              </a>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
};

export default Blogs;
