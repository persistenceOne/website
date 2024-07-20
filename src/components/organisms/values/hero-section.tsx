import {
  Box,
  Flex,
  Heading,
  Spacer,
  Text,
  Container,
  Image
} from "@chakra-ui/react";
// import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <Container maxW={"1440px"} px={{ base: "20px", md: "80px" }}>
      <Box>
        <Spacer h={{ base: "100px", md: "162px" }} />
        <Flex
          justify={"space-between"}
          gap={"30px"}
          mb={{ base: "0px", md: "90px" }}
        >
          <Flex
            maxW={"673px"}
            flex={1}
            flexDir={"column"}
            justifyContent={"flex-end"}
          >
            <Heading
              variant={"main"}
              color={"#633C0D"}
              mb={5}
              textAlign={{ base: "left", md: "left" }}
              fontSize={{ base: "42px", md: "66px" }}
              lineHeight={{ base: "60px", md: "90px" }}
            >
              Bitcoiners at heart
            </Heading>

            <Text
              color={"#633C0DCC"}
              fontSize={{ base: "16px", md: "24px" }}
              lineHeight={{ base: "24px", md: "36px" }}
              textAlign={{ base: "left", md: "left" }}
              mb={{ base: 4, md: 0 }}
            >
              Our core values: Humility, Integrity, Patience, Persistence are
              deeply aligned with those of Bitcoin itself.
            </Text>
          </Flex>
          <Box>
            <Image
              src="/images/values/values_hero.svg"
              alt="Persistence Coin"
              width={332}
              height={540}
              mx={"auto"}
            />
          </Box>
        </Flex>
      </Box>
    </Container>
  );
};

export default HeroSection;
