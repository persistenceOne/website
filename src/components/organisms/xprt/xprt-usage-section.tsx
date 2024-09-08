import {
  Box,
  Container,
  Heading,
  Image,
  Text,
  VStack,
  SimpleGrid
} from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "next-export-i18n";

const XPRTUsageSection = () => {
  const { t } = useTranslation();
  const xprtUsageCards = [
    {
      title: t("XPRT_SECTION2_CARD1_TITLE"),
      description: t("XPRT_SECTION2_CARD1_CONTENT"),
      image: "/images/xprt-page/utility1.svg",
      cta: {
        text: "Learn More",
        link: "https://www.mintscan.io/persistence/tx",
        isExternal: true
      }
    },
    {
      title: t("XPRT_SECTION2_CARD2_TITLE"),
      description: t("XPRT_SECTION2_CARD2_CONTENT"),
      image: "/images/xprt-page/utility2.svg",
      cta: {
        text: "Participate",
        link: "https://www.mintscan.io/persistence/proposals",
        isExternal: true
      }
    },
    {
      title: t("XPRT_SECTION2_CARD3_TITLE"),
      description: t("XPRT_SECTION2_CARD3_CONTENT"),
      image: "/images/xprt-page/utility3.svg",
      cta: {
        text: "Start Staking",
        link: "https://wallet.keplr.app/chains/persistence?tab=staking",
        isExternal: true
      }
    },
    {
      title: t("XPRT_SECTION2_CARD4_TITLE"),
      description: t("XPRT_SECTION2_CARD4_CONTENT"),
      image: "/images/xprt-page/utility4.svg",
      cta: {
        text: "Explore",
        link: "https://app.persistence.one/pools",
        isExternal: true
      }
    }
  ];
  return (
    <Container
      maxW={"1440px"}
      px={{ base: "16px", md: "80px" }}
      pt={{ base: "50px", md: "80px" }}
      pb={"40px"}
    >
      <VStack align={"center"}>
        <Heading
          textAlign={"center"}
          color={"#633C0D"}
          fontSize={{ base: "26px", xl: "48px" }}
          lineHeight={{ base: "32px", xl: "72px" }}
          mb={{ base: "20px", md: "40px" }}
        >
          {t("XPRT_SECTION2_TITLE")}
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={"18px"}>
          {/*<Box display={"flex"} gap={"18px"} mt={4}>*/}
          {xprtUsageCards.map((card, index) => (
            <Box
              bg={"#fff"}
              // w={{ base: "100%", md: "50%" }}
              maxW={"631px"}
              borderRadius={"20px"}
              // direction={"column"}
              key={card.title}
              pos={"relative"}
              boxShadow={"md"}
            >
              <Box p={"40px"}>
                <Heading
                  variant={"secondary"}
                  color={"#633C0D"}
                  fontSize={{ base: "22px", xl: "32px" }}
                  lineHeight={{ base: "38px", xl: "48px" }}
                  fontWeight={700}
                  mb={2}
                >
                  {card.title}
                </Heading>
                <Text
                  color={"#633C0D"}
                  fontSize={{ base: "12px", xl: "20px" }}
                  lineHeight={{ base: "22px", xl: "30px" }}
                  fontWeight={400}
                >
                  {card.description}
                </Text>
              </Box>
              <Box>
                <Image
                  src={card.image}
                  alt=""
                  pb={"30px"}
                  width={{ base: "631px", xl: "631px" }}
                  height={{ base: "180px", xl: "330px" }}
                />
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default XPRTUsageSection;
