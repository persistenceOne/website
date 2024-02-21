import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Container,
  Spacer,
  Flex,
  VStack,
  Heading,
  HStack,
  Button,
  Text
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <Container maxW={"1440px"} px={"40px"}>
      <Spacer h={20} />
      <Flex justify={"space-between"} align={"flex-start"} h="70vh">
        <VStack align={"stretch"} alignSelf={"flex-end"}>
          <Heading variant={"main"}>
            Humility. Integrity. <br /> Patience. Persistence.
          </Heading>
          <Text textAlign="left" color="#3D3D3DB2">
            Learn more about the people behind Persistence One, what it means to
            be a Persister, and how to become one.
          </Text>
        </VStack>
        <Image
          src="/images/xprt-page/persistence-coin.svg"
          alt="Persistence Coin"
          width={400}
          height={400}
        />
      </Flex>
    </Container>
  );
};

export default HeroSection;
