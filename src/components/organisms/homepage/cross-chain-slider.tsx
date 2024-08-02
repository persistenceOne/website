import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Slide1 from "../../../../public/images/lotties/swap.json";
import Slide2 from "../../../../public/images/lotties/bridge.json";
import Slide3 from "../../../../public/images/lotties/fast.json";
import Slide4 from "../../../../public/images/lotties/secured.json";
import Slide5 from "../../../../public/images/lotties/scalable.json";
import Slide6 from "../../../../public/images/lotties/trade.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import LottieAnimation from "@/components/molecules/test-lottie";

const list = [
  {
    title: "Swap BTC for BTC",
    content: `< show swaps between 1 BTC variant to another> - via animation`,
    imageUrl: <LottieAnimation lottie={Slide1} />
  },
  {
    title: "Bridge without bridging",
    content: "Cross-chain transfers between BTC L2s, EVM, etc",
    imageUrl: <LottieAnimation lottie={Slide2} />
  },
  {
    title: "Low Slippage, High Speed",
    content: "< show fast movement via animation>",
    imageUrl: <LottieAnimation lottie={Slide3} />
  },
  {
    title: "Secured by Bitcoin",
    content: "Shared BTC security via Babylon",
    imageUrl: <LottieAnimation lottie={Slide4} />
  },
  {
    title: "Scalable Liquidity, No limitations",
    content: "Powered by Cross-chain Intents",
    imageUrl: <LottieAnimation lottie={Slide5} />
  },
  {
    title: "Trading for BTC and LSTs on the DEX",
    content:
      "Efficient trading and LPing for BTC ecosystem assets, LSTs, and Stablecoins.",
    imageUrl: <LottieAnimation lottie={Slide6} />
  }
];
const CrossChainSlider = () => {
  return (
    <Box bg={"#FCF7F1"} pos={"relative"} zIndex={10} mt={"80pz"}>
      <Container
        maxW={"1440px"}
        pt={{ base: "32px", md: "80px" }}
        pb={{ base: "30px", md: "50px" }}
        className="aos-init aos-animate py-10"
        data-aos="fade-up"
      >
        <Heading
          mb={"40px"}
          fontWeight={700}
          textAlign={"center"}
          color={"#633C0D"}
          fontSize={{ base: "26px", xl: "48px" }}
          lineHeight={{ base: "32px", xl: "72px" }}
        >
          ₿itcoin Transfers Cross-chain
        </Heading>
        <Swiper
          slidesPerView={5.2}
          spaceBetween={18}
          speed={2000}
          centeredSlides={true}
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
                className={"slider-card"}
              >
                {resource.imageUrl}
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default CrossChainSlider;
