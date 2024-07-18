import { FeatureCardInterface } from "@/components/atoms/feature-card";
import FeatureCards from "@/components/molecules/feature-cards";
import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Overview = () => {
  return (
    <Box bg={"#FCF7F1"}>
      <Container
        maxW={"1300px"}
        px={{ base: "20px", md: "30px" }}
        pb={{ base: "40px", md: "80px" }}
        pt={{ base: "30px", md: "60px" }}
      >
        <Box>
          <Heading
            mb={"50px"}
            color={"#081E21"}
            textAlign={"left"}
            lineHeight={{ base: "40px", md: "66px" }}
            fontSize={{ base: "26px", md: "44px" }}
          >
            Why Persistence One?
          </Heading>
          <FeatureCards />
        </Box>
      </Container>
    </Box>
  );
};

export default Overview;
