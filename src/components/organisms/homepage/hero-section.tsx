import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
  VStack,
  Container,
  Stack
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import React from "react";
import HomePageStats from "@/components/molecules/page-stats";
import { fetchChainTVL } from "@/pages/api";
import Link from "next/link";
import { numberFormat } from "@/utils/helpers";
import { useAppStore } from "@/store/store";
import { shallow } from "zustand/shallow";
import Image from "next/image";

const HeroSection = () => {
  const [tvl, ibcVolume, transactionCost, transactions, dexterInfo] =
    useAppStore(
      (state) => [
        state.tvl,
        state.ibcVolume,
        state.transactionCost,
        state.transactions,
        state.dexterInfo
      ],
      shallow
    );

  return (
    <Box
      className={"hero-content"}
      bg={"#27282D"}
      // backgroundImage={"linear-gradient(90deg, #185B64 0%, #114147 35%)"}
      // backgroundPosition="100% 0"
      // backgroundRepeat="no-repeat"
      // backgroundSize={{ base: "45% 90%", md: "45% 90%", lg: "32% 100%" }}
    >
      <Container maxW={"1440px"} px={{ base: "20px", md: "80px" }}>
        <Spacer h={"244px"} />
        <Flex justify={"space-between"} mb={{ base: "20px", md: "60px" }}>
          <Box>
            <Heading
              variant={"main"}
              color={"text.whiteFull"}
              textAlign={"left"}
              maxW={"728px"}
              fontSize={{ base: "42px", md: "60px" }}
              lineHeight={{ base: "50px", md: "72px" }}
              mb={"12px"}
            >
              Bitcoin Interoperability. Powered by Intents.
            </Heading>
            <Text
              textAlign={"left"}
              w={{ base: "100%", md: "55%" }}
              mb={"29px"}
              color={"#FFFFFFCC"}
              fontSize={{ base: "16px", md: "26px" }}
              lineHeight={{ base: "28px", md: "39px" }}
            >
              Fast, no-slippage cross-chain swaps for Bitcoin L2 assets. Secured
              by Bitcoin.
            </Text>
            <Stack direction={{ base: "column", md: "row" }} gap={4}>
              <Link
                href="https://app.persistence.one"
                target="_black"
                rel="noopenner noreferrer"
                passHref
                className={"inline-block"}
              >
                <Button
                  variant={"secondary"}
                  rightIcon={<ArrowForwardIcon />}
                  w={{ base: "100%", md: "auto" }}
                >
                  Trade Now
                </Button>
              </Link>
              <Link href="/xprt" passHref>
                <Button
                  w={{ base: "100%", md: "auto" }}
                  bg={"primary.redHover"}
                  borderColor={"primary.red"}
                  rightIcon={<ArrowForwardIcon />}
                  textColor={"#FFFFFF"}
                >
                  Explore Ecosystem
                </Button>
              </Link>
            </Stack>
          </Box>
          <Box mt={"48px"} mr={"80px"}>
            <Image
              src={"/images/home-page/hp_hero.svg"}
              width={315}
              height={24}
              alt={"Persistence Logo"}
            />
          </Box>
        </Flex>
        <Spacer h={"110px"} />
      </Container>
    </Box>
  );
};

export default HeroSection;
