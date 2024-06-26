import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Container,
  Spacer,
  Flex,
  VStack,
  Heading,
  HStack,
  Box,
  Text
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <Container maxW={"1440px"} px={{ base: "20px", md: "60px" }}>
      <Spacer h={20} />
      <Flex justify={"space-between"} align={"flex-start"} pos={"relative"}>
        <VStack
          mt={{ base: "80px", md: "100px" }}
          align={"flex-start"}
          pb={{ base: "40px", md: "120px" }}
        >
          <Heading
            variant={"main"}
            color={"text.blackHeading"}
            fontSize={{ base: "42px", md: "42px", lg: "67px" }}
            lineHeight={{ base: "50px", md: "50px", lg: "90px" }}
          >
            Humility. <br /> Integrity. <br /> Patience.
            <br /> Persistence.
          </Heading>
          <Text
            textAlign="left"
            color={"text.blackLow"}
            fontSize={{ base: "16px", md: "18px" }}
          >
            Learn more about the people behind Persistence One, <br /> what it
            means to be a Persister, and how to become one.
          </Text>
          <Box
            // bottom={0}
            display={{ base: "block", md: "none" }}
          >
            <Image
              src="/images/team/people-hero.svg"
              alt="People"
              width={540}
              height={400}
            />
          </Box>
        </VStack>
        <Box
          pos={"absolute"}
          right={"0"}
          // bottom={0}
          display={{ base: "none", md: "block" }}
        >
          <Image
            src="/images/team/people-hero.svg"
            alt="Persistence Coin"
            width={540}
            height={400}
          />
        </Box>
      </Flex>
    </Container>
  );
};

export default HeroSection;
