import { Box, Flex, Heading, Spacer, Text, Container } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <Container maxW={"1440px"} px={{ base: "20px", md: "80px" }}>
      <Box>
        <Spacer h={{ base: "80px", md: "140px" }} />
        <Flex
          justify={"space-between"}
          gap={"30px"}
          mb={{ base: "0px", md: "90px" }}
          // w={{ base: "auto", md: "55%" }}
        >
          <Flex flex={1} flexDir={"column"} justifyContent={"flex-end"}>
            <Heading
              variant={"main"}
              color={"#633C0D"}
              mb={5}
              textAlign={{ base: "left", md: "left" }}
              fontSize={{ base: "42px", md: "66px" }}
              lineHeight={{ base: "50px", md: "79px" }}
            >
              Building for Bitcoin with Persistence.
            </Heading>

            <Text
              color={"#633C0DCC"}
              fontSize={{ base: "16px", md: "24px" }}
              lineHeight={{ base: "24px", md: "36px" }}
              textAlign={{ base: "left", md: "left" }}
              mb={{ base: 4, md: 0 }}
            >
              To make Bitcoin DeFi scaleable, we need to overcome the hurdles of
              fragmentation. Thats where interoperability comes in.
            </Text>
          </Flex>
          <Box
          // bottom={0}
          // display={{ base: "block", md: "none" }}
          >
            <Image
              src="/images/vision/vision_hero.svg"
              alt="Persistence Coin"
              width={500}
              height={400}
            />
          </Box>
        </Flex>
      </Box>
    </Container>
  );
};

export default HeroSection;
