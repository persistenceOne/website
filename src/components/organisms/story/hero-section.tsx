import { Box, Flex, Heading, Spacer, Text, Container } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <Container maxW={"1440px"} px={{ base: "20px", md: "60px" }}>
      <Box
        backgroundImage={{
          base: "",
          md: "url('/images/story-page/story-hero.png')"
        }}
        backgroundPosition="100% 100%"
        backgroundRepeat="no-repeat"
        backgroundSize={"42%"}
      >
        <Spacer h={{ base: 20, md: 60 }} />
        <Flex
          justify={"space-between"}
          mb={{ base: "0px", md: "90px" }}
          w={{ base: "auto", md: "55%" }}
        >
          <Box py={"50px"}>
            <Heading
              variant={"main"}
              color={"text.blackHigh"}
              mb={5}
              textAlign={{ base: "left", md: "left" }}
              fontSize={{ base: "42px", md: "50px" }}
              lineHeight={{ base: "50px", md: "50px", lg: "90px" }}
            >
              Building With Persistence
              <br />
              Since Day One In Cosmos.
            </Heading>

            <Text
              color={"text.blackLow"}
              fontSize={{ base: "16px", md: "22px" }}
              textAlign={{ base: "center", md: "left" }}
              mb={{ base: 4, md: 0 }}
            >
              Persistence One is one of the first Cosmos app chains and has been
              relentlessly building at the edge of the Proof-of-Stake landscape
              since 2019.
            </Text>
            <Box
              // bottom={0}
              display={{ base: "block", md: "none" }}
            >
              <Image
                src="/images/story-page/story-hero.png"
                alt="Persistence Coin"
                width={400}
                height={400}
              />
            </Box>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
};

export default HeroSection;
