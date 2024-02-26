import { Box, Flex, Heading, Spacer, Text, Container } from "@chakra-ui/react";
import React from "react";

const HeroSection = () => {
  return (
    <Container maxW={"1440px"} px={{ base: "20px", md: "60px" }}>
      <Box
        backgroundImage={{
          base: "",
          md: "url('/images/story-page/story-hero.svg')"
        }}
        backgroundPosition="100% 40%"
        backgroundRepeat="no-repeat"
        backgroundSize={"42%"}
      >
        <Spacer h={{ base: 60, md: 60 }} />
        <Flex
          justify={"space-between"}
          mb={{ base: "40px", md: "90px" }}
          w={{ base: "auto", md: "60%" }}
        >
          <Box py={"50px"}>
            <Heading
              variant={"main"}
              color={"text.blackHigh"}
              mb={5}
              textAlign={{ base: "center", md: "left" }}
              fontSize={{ base: "26px", md: "50px" }}
            >
              Building Persistence One
              <br />
              Since Day One In Cosmos.
            </Heading>

            <Text
              color={"text.blackLow"}
              fontSize={{ base: "16px", md: "22px" }}
              textAlign={{ base: "center", md: "left" }}
            >
              Persistence One is one of the first Cosmos app chains and has been
              relentlessly building at the edge of the Proof-of-Stake landscape
              since 2019.
            </Text>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
};

export default HeroSection;
