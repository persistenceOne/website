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
    <Container maxW={"1440px"} px={"40px"}>
      <Spacer h={20} />
      <Flex justify={"space-between"} align={"flex-start"} pos={"relative"}>
        <VStack
          mt={{ base: "100px", md: "250px" }}
          align={"flex-start"}
          pb={"120px"}
        >
          <Heading
            variant={"main"}
            color={"text.blackHigh"}
            fontSize={{ base: "26px", md: "40px", lg: "67px" }}
          >
            Humility. Integrity. <br /> Patience. Persistence.
          </Heading>
          <Text textAlign="left" color="#3D3D3DB2">
            Learn more about the people behind Persistence One, what it means to
            be a<br /> Persister, and how to become one.
          </Text>
        </VStack>
        <Box
          pos={"absolute"}
          right={"0"}
          bottom={0}
          display={{ base: "none", md: "block" }}
        >
          <Image
            src="/images/people_hero.svg"
            alt="Persistence Coin"
            width={400}
            height={400}
          />
        </Box>
      </Flex>
    </Container>
  );
};

export default HeroSection;
