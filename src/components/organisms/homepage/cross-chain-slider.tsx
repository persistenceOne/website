import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide1 from "../../../../public/images/lotties/swap.json";
import "swiper/css";
import "swiper/css/autoplay";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import {
  Box,
  Container,
  Heading,
  Text,
  useMediaQuery,
  Image
} from "@chakra-ui/react";
import LottieAnimation from "@/components/molecules/lottie-container";
import { useTranslation } from "next-export-i18n";

const CrossChainSlider = () => {
  const [isMobile] = useMediaQuery("(max-width: 500px)");
  const { t } = useTranslation();
  const list = [
    {
      title: t("HOME_SECTION2_SLIDE1"),
      content: ``,
      imageUrl: <LottieAnimation lottie={Slide1} />
    },
    {
      title: t("HOME_SECTION2_SLIDE2"),
      content: ``,
      imageUrl: <LottieAnimation lottie={Slide1} />
    },
    {
      title: t("HOME_SECTION2_SLIDE3"),
      content: ``,
      imageUrl: <LottieAnimation lottie={Slide1} />
    },
    {
      title: t("HOME_SECTION2_SLIDE4"),
      content: ``,
      imageUrl: <LottieAnimation lottie={Slide1} />
    },
    {
      title: t("HOME_SECTION2_SLIDE5"),
      content: ``,
      imageUrl: <LottieAnimation lottie={Slide1} />
    },
    {
      title: t("HOME_SECTION2_SLIDE6"),
      content: ``,
      imageUrl: <LottieAnimation lottie={Slide1} />
    }
  ];

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
          {t("HOME_SECTION2_TITLE")}
        </Heading>
        <Swiper
          spaceBetween={18}
          speed={1500}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 1500,
            duration: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            waitForTransition: true,
            reverseDirection: false
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            480: { slidesPerView: 1.5, spaceBetween: 15 },
            768: { slidesPerView: 2.5, spaceBetween: 15 },
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
                // bg="#fff"
                borderRadius={"24px"}
                h={{ base: "400px", md: "450px" }}
                my={2}
                boxShadow={"md"}
                display={"flex"}
                flexDir={"column"}
                className={"slider-card"}
                position={"relative"}
              >
                <Text
                  px={6}
                  pt={2}
                  pb={"18px"}
                  h={"114px"}
                  color={"#633C0D"}
                  fontSize={{ base: "16px", md: "22px" }}
                  lineHeight={{ base: "30px", md: "33px" }}
                  fontWeight={600}
                  className={"slide-title"}
                  position={"absolute"}
                  top={"20px"}
                  left={{ base: "30px", md: "auto" }}
                  zIndex={10}
                >
                  {resource.title}
                </Text>
                <Box
                  className={"video-container"}
                  flex={1}
                  w={"100%"}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  flexDir="column"
                  position={"absolute"}
                  top={0}
                  bottom={0}
                  borderRadius={"24px"}
                  overflow={"hidden"}
                  bg={"#FFFFFF"}
                  pt={"140px"}
                  pb={"70px"}
                >
                  {resource.imageUrl}
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default CrossChainSlider;
