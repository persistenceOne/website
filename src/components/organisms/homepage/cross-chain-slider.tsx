import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';


// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { Box, Container, Heading, Text } from "@chakra-ui/react";

const list = [
  {
    title: "Swap BTC for BTC",
    content: `< show swaps between 1 BTC variant to another> - via animation`,
    imageUrl: "/",
  },
  {
    title: "Bridge without bridging",
    content: "Cross-chain transfers between BTC L2s, EVM, etc",
    imageUrl: "/",
  },  {
    title: "Low Slippage, High Speed",
    content: "< show fast movement via animation>",
    imageUrl: "/",
  },
  {
    title: "Secured by Bitcoin",
    content: "Shared BTC security via Babylon",
    imageUrl: "/",
  },
  {
    title: "Scalable Liquidity, No limitations",
    content: "Powered by Cross-chain Intents",
    imageUrl: "/",
  },
  {
    title: "Trading for BTC and LSTs on the DEX",
    content: "Efficient trading and LPing for BTC ecosystem assets, LSTs, and Stablecoins.",
    imageUrl: "/",
  },

]
const CrossChainSlider = () => {
  return (
    <Container maxW={"1440px"} px={{ base: "20px", md: "30px" }}>
      <Heading
        mb={"40px"}
        color={"text.blackTitle"}
        textAlign={"left"}
        fontSize={{ base: "26px", md: "44px" }}
      >
        ₿itcoin Transfers Cross-chain
      </Heading>
      <Swiper
        slidesPerView={4.1}
        spaceBetween={18}
        speed={3000}
        autoplay={{
          delay: 2000,
          duration: 3000,
          disableOnInteraction: false,
          waitForTransition: true,
          reverseDirection: false
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
      >
        {list.map((resource, index) => (
          <SwiperSlide key={index}>
            <Box bg="#fff" borderRadius={"8px"} h={"450px"}>
              <Text p={6}>
                {resource.title}
              </Text>
              <Box p={6} display="flex" justifyContent="center" alignItems="center" flexDir="column">
                <Image
                  src={"/images/home-page/tech.svg"}
                  width={100}
                  height={5}
                  alt={"Image"}
                />
                <Text fontWeight={400} fontSize={12}>
                  {resource.content}
                </Text>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default CrossChainSlider
