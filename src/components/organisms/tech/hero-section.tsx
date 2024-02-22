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
      <Container maxW={"1440px"} px={{ base: "20px", md: "60px" }}>
        <Spacer h={{ base: 0, md: 20 }} />
        <Flex justify={"space-between"} mb={{ base: "40px", md: "100px" }}>
          <Box pt={"150px"}>
            <Heading
              variant={"main"}
              textAlign={{ base: "center", md: "left" }}
              fontSize={{ base: "26px", md: "40px", lg: "67px" }}
            >
              Technically Super.
            </Heading>
            <Heading
              variant={"main"}
              textAlign={{ base: "center", md: "left" }}
              color={"primary.red"}
              fontSize={{ base: "26px", md: "40px", lg: "67px" }}
            >
              Superbly Powerful.
            </Heading>
            <Text
              fontSize={{ base: "16px", md: "22px" }}
              textAlign={{ base: "center", md: "left" }}
              w={{ base: "auto", md: "70%" }}
              color={"text.blackLow"}
              mt={6}
            >
              Persistence One is one of the most technologically advanced Layer
              1 for liquid staking and restaking.
            </Text>
          </Box>
        </Flex>
        <HStack gap={0} maxW={{ base: "100%", md: "70%" }}>
          {homePagesStats.map((stat: any, index: number) => (
            <HStack key={stat.statLabel}>
              <VStack key={stat.statLabel} align={"stretch"}>
                <Text
                  color={"primary.red"}
                  fontSize={{ base: "16px", md: "44px" }}
                  fontWeight={700}
                  textAlign={{ base: "center", md: "left" }}
                >
                  {stat.statValue}
                </Text>
                <Text
                  color="text.statLabel"
                  fontSize={{ base: "14px", md: "18px" }}
                  fontWeight={400}
                  textAlign={{ base: "center", md: "left" }}
                >
                  {stat.statLabel}
                </Text>
              </VStack>
              {index !== homePagesStats.length - 1 ? (
                <Divider
                  orientation="vertical"
                  h="80px"
                  borderColor={"#423F4066"}
                  opacity={0.4}
                  mx={{ base: 6, md: 12 }}
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
