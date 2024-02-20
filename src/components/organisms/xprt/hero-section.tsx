import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
  VStack
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import React from "react";
import Image from "next/image";
import PageStats from "@/components/molecules/page-stats";

const xprtPageStats = [
  {
    statValue: "$70M",
    statLabel: "Market Cap"
  },
  {
    statValue: "April 2025",
    statLabel: "Next XPRT Inflation Halving"
  },
  {
    statValue: "77%",
    statLabel: "Staked XPRT (total supply)"
  }
];

const HeroSection = () => {
  return (
    <Container maxW={"1440px"} px={"40px"}>
      <Spacer h={20} />
      <Flex justify={"space-between"} mb={20} align={"center"}>
        <VStack align={"stretch"}>
          <Heading variant={"main"}>
            Powering Liquid Staking <br /> and Restaking with XPRT
          </Heading>
          <Text textAlign="left" my={6}>
            XPRT is the multi-purpose native token of the Persistence One
            Ecosystem.
          </Text>
          <HStack gap={4}>
            <Button variant={"secondary"} rightIcon={<ArrowForwardIcon />}>
              Stake XPRT
            </Button>
            <Button>Get XPRT</Button>
          </HStack>
        </VStack>
        <Image
          src="/images/xprt-page/persistence-coin.svg"
          alt="Persistence Coin"
          width={400}
          height={400}
        />
      </Flex>
      <PageStats stats={xprtPageStats} />
    </Container>
  );
};

export default HeroSection;
