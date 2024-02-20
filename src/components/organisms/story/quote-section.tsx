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
  Container,
  Stack
} from "@chakra-ui/react";
import { ArrowForwardIcon, ArrowRightIcon } from "@chakra-ui/icons";
import React from "react";
import Image from "next/image";
import HomePageStats from "@/components/molecules/page-stats";

const QuoteSection = () => {
  return (
    <Box
      bg={"#252424"}
      style={{
        backgroundImage:
          "url('/images/story-page/story-quote-bg1.svg'), url('/images/story-page/story-quote-bg.svg')",
        backgroundPosition: "top left,  bottom right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100px"
      }}
      backgroundPosition="bottom right"
    >
      <Container maxW={"1440px"} px={"60px"} mb={4} py={"70px"}>
        <Heading
          fontSize={"44px"}
          textAlign={"center"}
          color={"text.headingSemiWhite"}
          pr={"12px"}
          fontWeight={600}
        >
          “Humility, Integrity, Patience, and Persistence are our four guiding
          principals, pillars of building, and make us who we are.”
        </Heading>
      </Container>
    </Box>
  );
};

export default QuoteSection;
