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

const CommunityNote = () => {
  return (
    <Box
      style={{
        backgroundImage: "url('/images/p-coin-white.svg')",
        backgroundPosition: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "15%"
      }}
      backgroundPosition="bottom right"
    >
      <Container maxW={"1440px"} px={{ base: "20px", md: "60px" }} py={"60px"}>
        <Heading
          fontSize={{ base: "16px", md: "28px" }}
          textAlign={{ base: "center", md: "left" }}
          color={"text.blackHigh"}
          pr={"12px"}
          mb={"40px"}
          fontWeight={700}
          lineHeight={{ base: "1.5", md: "42px" }}
        >
          Persistence One is expanding liquid staking,
          <br /> creating LSTfi yield opportunities, and bringing
          <br /> Restaking to Cosmos.
        </Heading>
        <Box textAlign={{ base: "center", md: "left" }}>
          <Button variant={"secondary"} rightIcon={<ArrowForwardIcon />}>
            Join our Community
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default CommunityNote;
