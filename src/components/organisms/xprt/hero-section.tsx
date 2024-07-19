import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
  VStack
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import React, { useEffect } from "react";
import Image from "next/image";
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
      <Spacer h={{ base: "80px", md: "140px" }} />
      <Flex
        justify={"space-between"}
        align={"flex-start"}
        pos={"relative"}
        mb={{ base: "40px", md: "80px" }}
      >
        <VStack mt={"100px"} w={{ base: "100%", md: "50%" }} align={"stretch"}>
          <Box maxW={"600px"} mb={"30px"}>
            <Heading
              fontSize={{ base: "42px", lg: "50px" }}
              color={"#633C0D"}
              mb={5}
              textAlign={{ base: "left", md: "left" }}
              lineHeight={{ base: "60px", md: "70px" }}
            >
              Powering BTC Interoperability, Governing Intents
            </Heading>
            <Text
              textAlign="left"
              color={"#633C0DCC"}
              fontSize={{ base: "16px", md: "24px" }}
            >
              XPRT is the multi-purpose native token for the Persistence dApp
              and network
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
              <Button w={"100%"} variant={"secondary"}>
                Get XPRT
              </Button>
            </Link>
          </Flex>
        </VStack>
        <Box
        // bottom={0}
        // display={{ base: "block", md: "none" }}
        >
          <Image
            src="/images/xprt-page/xprt_hero.svg"
            alt="Persistence Coin"
            width={521}
            height={490}
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
      {/*<Flex*/}
      {/*  display={{ base: "block", md: "none" }}*/}
      {/*  w={"100%"}*/}
      {/*  justify={"center"}*/}
      {/*>*/}
      {/*  <Image*/}
      {/*    // className={"ml-auto"}*/}
      {/*    src="/images/xprt-page/xprt-hero.png"*/}
      {/*    alt="Persistence Coin"*/}
      {/*    width={350}*/}
      {/*    height={400}*/}
      {/*  />*/}
      {/*</Flex>*/}
    </Container>
  );
};

export default HeroSection;
