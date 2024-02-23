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
import Link from "next/link";

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
      <Flex
        justify={"space-between"}
        align={"flex-start"}
        pos={"relative"}
        mb={"100px"}
      >
        <VStack mt={"100px"} align={"stretch"}>
          <Heading variant={"main"}>
            Powering Liquid Staking <br /> and Restaking with XPRT
          </Heading>
          <Text textAlign="left" my={6}>
            XPRT is the multi-purpose native token of the Persistence One
            Ecosystem.
          </Text>
          <HStack gap={4}>
            <Link
              href={"https://wallet.keplr.app/chains/persistence"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant={"secondary"} rightIcon={<ArrowForwardIcon />}>
                Stake XPRT
              </Button>
            </Link>
            <Link
              href={"https://www.coingecko.com/en/coins/persistence"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Get XPRT</Button>
            </Link>
          </HStack>
        </VStack>
        <Box pos={"absolute"} right={"0"}>
          <Image
            src="/images/xprt-page/persistence-coin.svg"
            alt="Persistence Coin"
            width={400}
            height={400}
          />
        </Box>
      </Flex>
      <PageStats stats={xprtPageStats} />
    </Container>
  );
};

export default HeroSection;
