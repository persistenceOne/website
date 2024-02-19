import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  VStack
} from "@chakra-ui/react";
import { ArrowForwardIcon, ArrowRightIcon } from "@chakra-ui/icons";
import React from "react";
import Image from "next/image";
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
    <Box px={16}>
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
        <Box overflow={"no-scroll"}>
          <Image
            src={"/images/persistence-p.svg"}
            alt="Persistence"
            width={127}
            height={202}
          />
          <Box
            pos={"absolute"}
            top={"10px"}
            right={"-48"}
            background={"white"}
            w={"500px"}
            h={"500px"}
            zIndex={-1}
            borderRadius={60}
            transform={"rotate(24deg)"}
          />
          <Box
            pos={"absolute"}
            top={"0px"}
            right={"-44"}
            background={"primary.red"}
            w={"560px"}
            h={"560px"}
            zIndex={-2}
            borderRadius={60}
            transform={"rotate(24deg)"}
          />
          <Box
            pos={"absolute"}
            top={"16"}
            right={"-80"}
            background={"primary.black"}
            w={"620px"}
            h={"620px"}
            zIndex={-3}
            borderRadius={60}
            transform={"rotate(24deg)"}
            // transform={"rotate(16.75deg)"}
          />
        </Box>
      </Flex>
      <HomePageStats stats={homePagesStats} />
    </Box>
  );
};

export default HeroSection;
