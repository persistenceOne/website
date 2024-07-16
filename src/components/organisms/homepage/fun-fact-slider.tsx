import React, { useContext, useEffect } from "react";
import Slider from "react-slick";
import { Box, Spacer, Text } from "@chakra-ui/react";

const FunFactSlider = () => {
  const imgList = [
    { path: "/images/btc/btc_asset3.png" },
    { path: "/images/btc/btc_asset4.png" },
    { path: "/images/btc/btc_asset5.png" },
    { path: "/images/btc/btc_asset6.png" },
    { path: "/images/btc/btc_asset7.png" },
    { path: "/images/btc/btc_asset8.png" },
    { path: "/images/btc/btc_asset9.svg" },
    { path: "/images/btc/btc_asset6.png" },
    { path: "/images/btc/btc_asset7.png" },
    { path: "/images/btc/btc_asset8.png" },
    { path: "/images/btc/btc_asset9.svg" },
    { path: "/images/btc/btc_asset6.png" },
    { path: "/images/btc/btc_asset7.png" },
    { path: "/images/btc/btc_asset8.png" },
    { path: "/images/btc/btc_asset9.svg" },
  ];

  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 5,
    autoplay: false,
    autoplaySpeed: 5000,
    dots: true,
    // afterChange: (current:any) => {
    //   const currentSlide = document.getElementsByClassName('slick-center');
    //   const currentAttributeValue = currentSlide[0].getAttribute('data-index');
    //   console.log(currentSlide, "prevv", currentAttributeValue, 0-1,Number(currentAttributeValue))
    //   const prevAttributeValue = Number(currentAttributeValue)-1;
    //   const nextAttributeValue = Number(currentAttributeValue)+1;
    //   const prev = document.querySelectorAll(`[data-index='${prevAttributeValue.toString()}']`);
    //   const next = document.querySelectorAll(`[data-index='${nextAttributeValue.toString()}']`);
    //   prev[0].classList.add("prev-slide");
    //   next[0].classList.add("next-slide");
    // },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box>
      <Box maxW={"1272px"} mx={"auto"} py={"65px"}>
        <Text mx={"auto"}>
            Test
        </Text>
        <Slider {...settings} className={"btc-assets"}>
          {imgList.map((item, index) => (
              <img src={item.path} alt={"ss"} key={index} />
          ))}
        </Slider>
      </Box>
    </Box>
  );
};
export default FunFactSlider;
