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
import HomePageStats from "@/components/molecules/homepage-stats";

const CommunitySection = () => {
  return (
    <Box
      bg={"#252424"}
      style={{
        backgroundImage: "url('/images/story-page/story-community-bg.svg')",
        backgroundPosition: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "15%"
      }}
      backgroundPosition="bottom right"
    >
      <Container maxW={"1440px"} px={"60px"} mb={4} py={"60px"}>
        <Heading
          fontSize={"32px"}
          textAlign={"left"}
          color={"text.headingSemiWhite"}
          pr={"12px"}
          mb={"40px"}
          fontWeight={700}
          lineHeight={"48px"}
        >
          Persistence One brings empowering product
          <br /> and tech, a vibrant community of Persisters,
          <br /> and enduring partnerships under one roof.
        </Heading>
        <Button variant={"secondary"} rightIcon={<ArrowForwardIcon />}>
          Join our Community
        </Button>
      </Container>
    </Box>
  );
};

export default CommunitySection;
