import { FeatureCardInterface } from "@/components/atoms/feature-card";
import FeatureCards from "@/components/molecules/feature-cards";
import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Overview = () => {
  return (
    <Container maxW={"1140px"} px={{ base: "20px", md: "30px" }}>
      <Box>
        <Heading
          mb={"4px"}
          color={"text.blackTitle"}
          textAlign={"center"}
          fontSize={{ base: "26px", md: "58px" }}
        >
          Why Persistence One?
        </Heading>
        <FeatureCards />
      </Box>
    </Container>
  );
};

export default Overview;
