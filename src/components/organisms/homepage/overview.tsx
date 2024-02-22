import { FeatureCardInterface } from "@/components/atoms/feature-card";
import FeatureCards from "@/components/molecules/feature-cards";
import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Overview = () => {
  return (
    <Container maxW={"1440px"} px={{ base: "20px", md: "60px" }}>
      <Box px={16}>
        <Heading
          mb={"4px"}
          color={"text.blackMid"}
          textAlign={"center"}
          fontSize={{ base: "26px", md: "58px" }}
        >
          Core Features
        </Heading>
        <Text
          color={"text.blackMid"}
          textAlign={"center"}
          fontSize={{ base: "18px", md: "22px" }}
        >
          Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet
          consectetur.
        </Text>
        <FeatureCards />
      </Box>
    </Container>
  );
};

export default Overview;
