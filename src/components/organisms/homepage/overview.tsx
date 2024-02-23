import { FeatureCardInterface } from "@/components/atoms/feature-card";
import FeatureCards from "@/components/molecules/feature-cards";
import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Overview = () => {
  return (
    <Container maxW={"1440px"} px={{ base: "20px", md: "60px" }}>
      <Box>
        <Heading
          mb={"4px"}
          color={"text.blackMid"}
          textAlign={"center"}
          fontSize={{ base: "26px", md: "58px" }}
        >
          Why Persistence One?
        </Heading>
        <Text
          color={"text.blackMid"}
          textAlign={"center"}
          fontSize={{ base: "18px", md: "22px" }}
        >
          Our vision, technical expertise, and values shape a thriving Liquid
          Staking and Restaking economy.
        </Text>
        <FeatureCards />
      </Box>
    </Container>
  );
};

export default Overview;
