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
import Link from "next/link";

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
      <Container maxW={"1440px"} px={{ base: "20px", md: "60px" }} py={"60px"}>
        <Heading
          fontSize={{ base: "22px", md: "32px" }}
          textAlign={{ base: "center", md: "left" }}
          color={"text.headingSemiWhite"}
          pr={"12px"}
          mb={"40px"}
          fontWeight={700}
          lineHeight={{ base: "1.5", md: "48px" }}
        >
          Persistence One brings empowering product
          <br /> and tech, a vibrant community of Persisters,
          <br /> and enduring partnerships under one roof.
        </Heading>
        <Box textAlign={{ base: "center", md: "left" }}>
          <Link
            href={"https://discord.com/invite/vyvp3scWnH"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant={"secondary"} rightIcon={<ArrowForwardIcon />}>
              Join our Community
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default CommunitySection;
