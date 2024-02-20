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
      <Container maxW={"1440px"} px={"60px"}>
        <Spacer h={60} />
        <Flex justify={"space-between"} mb={20}>
          <Box pt={"150px"}>
            <Heading variant={"main"}>
              Building with Persistence
              <br />
              since day One in Cosmos.
            </Heading>

            <Text textAlign="left" w={"70%"} my={6}>
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
