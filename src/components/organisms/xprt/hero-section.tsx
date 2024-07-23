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
      <Spacer h={{ base: "40px", xl: "80px" }} />
      <Flex
        align={"flex-start"}
        pos={"relative"}
        mb={{ base: "40px", md: "60px" }}
        flexDirection={{ base: "column", md: "row" }}
      >
        <VStack mt={"100px"} w={{ base: "100%", md: "45%" }} align={"stretch"}>
          <Box maxW={{ base: "400px", xl: "600px" }} mb={"30px"}>
            <Heading
              fontSize={{ base: "36px", xl: "50px" }}
              lineHeight={{ base: "50px", xl: "70px" }}
              color={"#633C0D"}
              mb={5}
              textAlign={{ base: "left", md: "left" }}
            >
              Powering BTC Interoperability, Governing Intents.
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
              href={"https://www.coingecko.com/en/coins/persistence"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                w={"100%"}
                bg={"#1D1306"}
                value={"ternary"}
                _hover={{ bg: "#1D1306" }}
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
        >
          <Image
            src="/images/xprt-page/xprt_hero.svg"
            alt="Persistence Coin"
            mx={"auto"}
            width={{ base: 330, xl: 521 }}
            height={{ base: 300, xl: 490 }}
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
