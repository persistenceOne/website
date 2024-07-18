import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { Box, Container, Heading, Text } from "@chakra-ui/react";

const list = [
  {
    title: "Swap BTC for BTC",
    content: `< show swaps between 1 BTC variant to another> - via animation`,
    imageUrl: "/images/home-page/slides/slide1.svg"
  },
  {
    title: "Bridge without bridging",
    content: "Cross-chain transfers between BTC L2s, EVM, etc",
    imageUrl: "/images/home-page/slides/slide2.svg"
  },
  {
    title: "Low Slippage, High Speed",
    content: "< show fast movement via animation>",
    imageUrl: "/images/home-page/slides/slide3.svg"
  },
  {
    title: "Secured by Bitcoin",
    content: "Shared BTC security via Babylon",
    imageUrl: "/images/home-page/slides/slide4.svg"
  },
  {
    title: "Scalable Liquidity, No limitations",
    content: "Powered by Cross-chain Intents",
    imageUrl: "/images/home-page/slides/slide5.svg"
  },
  {
    title: "Trading for BTC and LSTs on the DEX",
    content:
      "Efficient trading and LPing for BTC ecosystem assets, LSTs, and Stablecoins.",
    imageUrl: "/images/home-page/slides/slide6.svg"
  }
];
const CrossChainSlider = () => {
  return (
    <Container
      maxW={"1440px"}
      bg={"#F7F7F7"}
      pt={{ base: "32px", md: "60px" }}
      pb={{ base: "40px", md: "100px" }}
    >
      <Heading
        mb={"40px"}
        fontWeight={700}
        color={"#081E21"}
        textAlign={"left"}
        px={{ base: "20px", md: "80px" }}
        fontSize={{ base: "26px", md: "44px" }}
      >
        ₿itcoin Transfers Cross-chain
      </Heading>
      <Swiper
        slidesPerView={4.4}
        spaceBetween={18}
        speed={2000}
        loop={true}
        autoplay={{
          delay: 2000,
          duration: 3000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
          waitForTransition: true,
          reverseDirection: false
        }}
        breakpoints={{
          340: {
            width: 340,
            slidesPerView: 1
          },
          640: {
            width: 640,
            slidesPerView: 2
          },
          1220: {
            width: 1220,
            slidesPerView: 3.4
          },
          1440: {
            width: 1440,
            slidesPerView: 4.4
          }
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
      >
        {list.map((resource, index) => (
          <SwiperSlide key={index}>
            <Box
              bg="#fff"
              borderRadius={"24px"}
              h={"450px"}
              my={2}
              boxShadow={"md"}
              display={"flex"}
              flexDir={"column"}
            >
              <Text
                px={6}
                pt={6}
                pb={"18px"}
                h={"114px"}
                color={"#434343"}
                fontSize={{ base: "22px" }}
                lineHeight={{ base: "20px", md: "33px" }}
                fontWeight={600}
              >
                {resource.title}
              </Text>
              <Box
                flex={1}
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDir="column"
              >
                <Image
                  src={resource.imageUrl}
                  width={100}
                  height={5}
                  alt={"Image"}
                />
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default CrossChainSlider;
