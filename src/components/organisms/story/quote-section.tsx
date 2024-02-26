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
      // style={{
      //   backgroundImage:
      //     "url('/images/story-page/story-quote-bg1.svg'), url('/images/story-page/story-quote-bg.svg')",
      //   backgroundPosition: "top left,  bottom right",
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "100px"
      // }}
      // backgroundPosition="bottom right"
    >
      <Container
        maxW={"1440px"}
        px={{ base: "16px", md: "100px" }}
        py={{ base: "24px", md: "60px" }}
      >
        <Heading
          textAlign={"center"}
          color={"text.headingSemiWhite"}
          pr={"12px"}
          fontWeight={600}
          fontSize={{ base: "26px", md: "44px" }}
        >
          Humility, Integrity, Patience, and Persistence <br /> are our guiding
          principles and make us who we are.
        </Heading>
      </Container>
    </Box>
  );
};

export default QuoteSection;
