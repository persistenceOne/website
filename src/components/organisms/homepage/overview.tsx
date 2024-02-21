import { FeatureCardInterface } from "@/components/atoms/feature-card";
import FeatureCards from "@/components/molecules/feature-cards";
import { Container, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Overview = () => {
  return (
    <Container maxW={"1440px"} px={{ base: "20px", md: "60px" }}>
      <VStack px={16}>
        <Heading>Core Features</Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet
          consectetur.
        </Text>
        <FeatureCards />
      </VStack>
    </Container>
  );
};

export default Overview;
