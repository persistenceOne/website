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
  VStack,
  Divider,
  Container
} from "@chakra-ui/react";
import { ArrowForwardIcon, ArrowRightIcon } from "@chakra-ui/icons";
import React from "react";
import Image from "next/image";
import HomePageStats from "@/components/molecules/page-stats";

const homePagesStats = [
  {
    statValue: "232,947",
    statLabel: "Blocks"
  },
  {
    statValue: "45+",
    statLabel: "IBC Connection"
  },
  {
    statValue: "5+",
    statLabel: "Audits"
  }
];

const HeroSection = () => {
  return (
    <Box
      backgroundImage="url('/images/tech-page/tech-hero-bg.svg')"
      backgroundPosition="100% 0"
      backgroundRepeat="no-repeat"
      backgroundSize={"40%"}
    >
      <Container maxW={"1440px"} px={"60px"}>
        <Spacer h={20} />
        <Flex justify={"space-between"} mb={20}>
          <Box pt={"150px"}>
            <Heading variant={"main"}>Technically Super.</Heading>
            <Heading variant={"main"} color={"primary.red"}>
              Superbly Powerful.
            </Heading>
            <Text textAlign="left" w={"70%"} my={6}>
              Persistence One is one of the most technologically advanced Layer
              1 for liquid staking and restaking.
            </Text>
          </Box>
        </Flex>
        <HStack gap={0} maxW={"70%"}>
          {homePagesStats.map((stat: any, index: number) => (
            <HStack key={stat.statLabel}>
              <VStack key={stat.statLabel} align={"stretch"}>
                <Text color={"primary.red"} fontSize={"44px"} fontWeight={700}>
                  {stat.statValue}
                </Text>
                <Text color="text.statLabel" fontSize={"18px"} fontWeight={400}>
                  {stat.statLabel}
                </Text>
              </VStack>
              {index !== homePagesStats.length - 1 ? (
                <Divider
                  orientation="vertical"
                  h="80px"
                  borderColor={"#423F4066"}
                  opacity={0.4}
                  mx={12}
                  borderWidth={1}
                />
              ) : null}
            </HStack>
          ))}
        </HStack>
        <Spacer h={"120px"} />
      </Container>
    </Box>
  );
};

export default HeroSection;
