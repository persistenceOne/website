import {
  Box,
  Wrap,
  Flex,
  Heading,
  Container,
  Text,
  Image
} from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "next-export-i18n";

const VisionSection = () => {
  const { t } = useTranslation();
  const list = [
    {
      imgUrl: "/images/vision/vision1.svg",
      title: t("VISION_SECTION2_CARD1_TITLE"),
      content: t("VISION_SECTION2_CARD1_CONTENT")
    },
    {
      imgUrl: "/images/vision/vision2.svg",
      title: t("VISION_SECTION2_CARD2_TITLE"),
      content: t("VISION_SECTION2_CARD2_CONTENT")
    },
    {
      imgUrl: "/images/vision/vision3.svg",
      title: t("VISION_SECTION2_CARD3_TITLE"),
      content: t("VISION_SECTION2_CARD3_CONTENT")
    }
  ];
  return (
    <Container maxW={"1440px"} px={{ base: "20px", md: "100px" }}>
      <Box pt={{ base: "32px", md: "60px" }} pb={{ base: "32px", md: "100px" }}>
        <Heading
          textAlign={"center"}
          color={"#633C0D"}
          fontSize={{ base: "26px", xl: "48px" }}
          lineHeight={{ base: "32px", xl: "72px" }}
          mb={{ base: "20px", md: "40px" }}
        >
          {t("VISION_SECTION2_TITLE")}
        </Heading>
        <Wrap
          spacing={{ base: "12px", xl: "18px" }}
          direction="row"
          justify={"center"}
        >
          {list.map((item, index) => (
            <Flex
              bg={"#fff"}
              w={{ base: "100%", md: "250px", xl: "398px" }}
              borderRadius={"22px"}
              direction={"column"}
              key={index}
              boxShadow={"lg"}
              transform={"scale(1)"}
              transitionDuration={"0.5s"}
              transitionTimingFunction={"all ease-in"}
              _hover={{
                transform: "scale(1.05)",
                zIndex: 10,
                transitionDuration: "0.5s",
                transitionTimingFunction: "all ease-in"
              }}
            >
              <Box display={"flex"} flexDir={"column"}>
                <Text
                  color={"text.blackLow"}
                  p={{ base: "16px", xl: "32px" }}
                  fontSize={{ base: "14px", xl: "21px" }}
                  lineHeight={{ base: "24px", xl: "31px" }}
                >
                  {item.content}
                </Text>
                <Image
                  src={item.imgUrl}
                  alt={item.title}
                  px={{ base: "20px", md: "40px" }}
                  width={{ base: 250, xl: 401 }}
                  mx={{ base: "auto", md: "0" }}
                  height={{ base: 190, xl: 340 }}
                  // objectFit="cover"
                />
              </Box>
            </Flex>
          ))}
        </Wrap>
      </Box>
    </Container>
  );
};

export default VisionSection;
