import { Box, Heading, Container } from "@chakra-ui/react";
import React from "react";

const QuoteSection = () => {
  return (
    <Box bg={"#252424"}>
      <Container
        maxW={"1440px"}
        px={{ base: "16px", md: "100px" }}
        py={{ base: "24px", md: "60px" }}
      >
        <Heading
          textAlign={"center"}
          color={"text.headingSemiWhite"}
          pr={"4px"}
          fontWeight={600}
          fontSize={{ base: "26px", md: "44px" }}
          lineHeight={"170%"}
        >
          &quot;Humility, Integrity, Patience, and Persistence <br /> are our
          guiding principles and make us who we are.&quot;
        </Heading>
      </Container>
    </Box>
  );
};

export default QuoteSection;
