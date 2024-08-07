import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
  VStack,
  Image
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import React, { useEffect } from "react";
import PageStats from "@/components/molecules/page-stats";
import Link from "next/link";

import { getBondedTokens, getMarketCap } from "@/pages/api";
import { useAppStore } from "@/store/store";
import { shallow } from "zustand/shallow";
import { numberFormat } from "@/utils/helpers";

const HeroSection = () => {
  const [
    setPersistenceMarketCap,
    marketCap,
    stakedXPRT,
    inflationDate,
    setStakedXprt
  ] = useAppStore(
    (state) => [
      state.setPersistenceMarketCap,
      state.marketCap,
      state.stakedXPRT,
      state.inflationDate,
      state.setStakedXprt
    ],
    shallow
  );

  useEffect(() => {
    const fetch = async () => {
      const response = await getMarketCap();
      const responseTwo = await getBondedTokens();
      setStakedXprt(responseTwo);
      setPersistenceMarketCap(response);
    };
    fetch();
  }, []);
  return (
    <Container
      maxW={"1440px"}
      px={{ base: "20px", md: "80px" }}
      pt={"109px"}
      pb={"54px"}
    >
      <Spacer h={{ base: "40px", xl: "40px" }} />
      <Flex
        align={"flex-start"}
        pos={"relative"}
        mb={{ base: "30px", md: "30px" }}
        flexDirection={{ base: "column-reverse", md: "row" }}
      >
        <VStack
          mt={{ base: "40px", md: "100px" }}
          w={{ base: "100%", md: "65%" }}
          align={"stretch"}
        >
          <Box
            maxW={{ base: "400px", xl: "650px" }}
            mb={{ base: "20px", "2xl": "20px" }}
          >
            <Heading
              maxW={{ base: "400px", xl: "650px" }}
              fontSize={{ base: "36px", xl: "44px" }}
              lineHeight={{ base: "50px", xl: "64px" }}
              color={"#633C0D"}
              mb={{ base: 3, "2xl": 4 }}
              textAlign={{ base: "left", md: "left" }}
            >
              Powering BTC Cross-Chain Swaps, Governing Intents.
            </Heading>
            <Text
              textAlign="left"
              color={"#633C0DCC"}
              fontSize={{ base: "14px", md: "24px" }}
            >
              XPRT governance has the final say on major protocol parameter
              changes, integrations, chain upgrades, community pool spend,
              incentives, and more.
            </Text>
          </Box>
          <Flex gap={4} direction={{ base: "column", md: "row" }}>
            <Link
              href={"https://wallet.keplr.app/chains/persistence"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant={"primary"}
                rightIcon={<ArrowForwardIcon />}
                w={"100%"}
              >
                Stake XPRT
              </Button>
            </Link>
            <Link
              href={
                "https://swapfast.app/?destinationAsset=uxprt&destinationChainId=core-1&sourceAsset=0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48&sourceChainId=1"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                w={"100%"}
                bg={"#1D1306"}
                value={"ternary"}
                transitionDuration={"0.5s"}
                transitionTimingFunction={"ease"}
                transitionProperty={"all"}
                border={"1px solid #1D1306"}
                _hover={{
                  bg: "#FFFFFF",
                  color: "#1D1306",
                  borderColor: "#1D1306",
                  transition: "0.5s"
                }}
                color="#FFFFFF"
              >
                Get XPRT
              </Button>
            </Link>
          </Flex>
        </VStack>
        <Box
          // bottom={0}
          // display={{ base: "block", md: "none" }}
          flexGrow={1}
          width={{ base: "100%", md: "auto" }}
        >
          <Image
            src="/images/xprt-page/xprt_hero.svg"
            alt="Persistence Coin"
            mx={"auto"}
            width={{ base: 300, md: 330, xl: 521 }}
            height={{ base: 270, md: 300, xl: 490 }}
          />
        </Box>
      </Flex>
      <PageStats
        stats={[
          {
            statValue: `$${
              Number(marketCap) > 0 ? numberFormat(marketCap, 2) : 0
            }`,
            statLabel: "Market Cap"
          },
          {
            statValue: `${stakedXPRT}%`,
            statLabel: "Staked XPRT"
          },
          {
            statValue: `>99.5%`,
            statLabel: "Tokens unlocked"
          }
        ]}
      />
    </Container>
  );
};

export default HeroSection;
