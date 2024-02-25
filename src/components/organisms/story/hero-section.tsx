import { Box, Flex, Heading, Spacer, Text, Container } from "@chakra-ui/react";
import React from "react";

const HeroSection = () => {
  return (
    <Box
      backgroundImage="url('/images/story-page/story-hero.svg')"
      backgroundPosition="100% 40%"
      backgroundRepeat="no-repeat"
      backgroundSize={"42%"}
    >
      <Container maxW={"1440px"} px={{ base: "20px", md: "60px" }}>
        <Spacer h={{ base: 60, md: 60 }} />
        <Flex justify={"space-between"} mb={{ base: "40px", md: "90px" }}>
          <Box py={"50px"}>
            <Heading
              variant={"main"}
              color={"text.blackHigh"}
              mb={5}
              textAlign={{ base: "center", md: "left" }}
              fontSize={{ base: "26px", md: "50px" }}
            >
              Building With Persistence
              <br />
              Since Day One In Cosmos.
            </Heading>

            <Text
              w={{ base: "auto", md: "50%" }}
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
