import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
  VStack
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import React from "react";
import HomePageStats from "@/components/molecules/homepage-stats";

const homePagesStats = [
  {
    statValue: "$ 11.68M",
    statLabel: "TVL"
  },
  {
    statValue: "$ 18.38M",
    statLabel: "IBC Volume (30 Days)"
  },
  {
    statValue: "$ 0.23947",
    statLabel: "Average Transaction Cost"
  }
];

const HeroSection = () => {
  return (
    <Box
      px={16}
      className={"hero-content"}
      backgroundImage="url('/images/hero-bg.svg')"
      backgroundPosition="100% 0"
      backgroundRepeat="no-repeat"
      backgroundSize={"45% 77%"}
    >
      <Spacer h={20} />

      <Flex justify={"space-between"} mb={20}>
        <VStack align={"stretch"}>
          <Heading variant={"main"}>
            Staking. <br />
            Liquid Staking. <br />
            Restaking.
          </Heading>
          <Text textAlign="left" w={"55%"} my={6}>
            Persistence One is an app chain for dApps to securely build an
            economy that maximizes liquid staking and restaking yield.
          </Text>
          <HStack gap={4}>
            <Button variant={"secondary"} rightIcon={<ArrowForwardIcon />}>
              See Our Story
            </Button>
            <Button>Explore Ecosystem</Button>
          </HStack>
        </VStack>
      </Flex>
      <HomePageStats stats={homePagesStats} />
      <Spacer h={60} />
    </Box>
  );
};

export default HeroSection;
