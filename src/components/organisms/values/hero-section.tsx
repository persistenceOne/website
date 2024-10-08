import {
  Box,
  Flex,
  Heading,
  Spacer,
  Text,
  Container,
  Image
} from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "next-export-i18n";

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <Container maxW={"1440px"} px={{ base: "20px", md: "80px" }}>
      <Box>
        <Spacer h={{ base: "100px", md: "162px" }} />
        <Flex
          justify={"space-between"}
          gap={"30px"}
          mb={{ base: "0px", md: "90px" }}
          flexDirection={{ base: "column-reverse", md: "row" }}
        >
          <Flex flex={1} flexDir={"column"} justifyContent={"flex-end"}>
            <Heading
              variant={"main"}
              color={"#633C0D"}
              mb={5}
              textAlign={{ base: "left", md: "left" }}
              fontSize={{ base: "34px", xl: "66px" }}
              lineHeight={{ base: "48px", xl: "90px" }}
            >
              {t("VALUES_HERO_TITLE")}
            </Heading>

            <Text
              color={"#633C0DCC"}
              fontSize={{ base: "16px", xl: "24px" }}
              lineHeight={{ base: "24px", xl: "36px" }}
              textAlign={{ base: "left", md: "left" }}
              mb={{ base: 4, md: 0 }}
            >
              {t("VALUES_HERO_SUB_TITLE")}
            </Text>
          </Flex>
          <Box width={{ base: "auto", xl: "600px" }}>
            <Image
              src="/images/values/values_hero.svg"
              alt="Persistence Coin"
              width={{ base: 200, xl: 332 }}
              height={{ base: 350, xl: 540 }}
              mx={"auto"}
            />
          </Box>
        </Flex>
      </Box>
    </Container>
  );
};

export default HeroSection;
