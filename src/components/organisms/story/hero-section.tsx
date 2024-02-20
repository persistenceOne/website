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

const HeroSection = () => {
  return (
    <Box
      backgroundImage="url('/images/story-page/story-hero-bg.svg')"
      backgroundPosition="100% 0"
      backgroundRepeat="no-repeat"
      backgroundSize={"30%"}
    >
      <Container maxW={"1440px"} px={{ base: "20px", md: "60px" }}>
        <Spacer h={{ base: 0, md: 60 }} />
        <Flex justify={"space-between"} mb={{ base: "40px", md: "90px" }}>
          <Box pt={"150px"}>
            <Heading
              variant={"main"}
              color={"text.blackHigh"}
              mb={5}
              textAlign={{ base: "center", md: "left" }}
              fontSize={{ base: "26px", md: "40px", lg: "67px" }}
            >
              Building with Persistence
              <br />
              since day One in Cosmos.
            </Heading>

            <Text
              w={{ base: "auto", md: "70%" }}
              color={"text.blackLow"}
              fontSize={{ base: "16px", md: "22px" }}
              textAlign={{ base: "center", md: "left" }}
            >
              Persistence One is one of the first cosmos app chains and has been
              relentlessly building a liquid staking economy since 2019.
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default HeroSection;
