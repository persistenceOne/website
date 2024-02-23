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
      console.log("getMarketCap", response);
      setStakedXprt(responseTwo);
      setPersistenceMarketCap(response);
    };
    fetch();
  }, []);
  return (
    <Container maxW={"1440px"} px={"40px"}>
      <Spacer h={20} />
      <Flex
        justify={"space-between"}
        align={"flex-start"}
        pos={"relative"}
        mb={"100px"}
      >
        <VStack mt={"100px"} align={"stretch"}>
          <Heading variant={"main"}>
            Powering Liquid Staking <br /> and Restaking with XPRT
          </Heading>
          <Text textAlign="left" my={6}>
            XPRT is the multi-purpose native token of the Persistence One
            Ecosystem.
          </Text>
          <HStack gap={4}>
            <Link
              href={"https://wallet.keplr.app/chains/persistence"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant={"secondary"} rightIcon={<ArrowForwardIcon />}>
                Stake XPRT
              </Button>
            </Link>
            <Link
              href={"https://www.coingecko.com/en/coins/persistence"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Get XPRT</Button>
            </Link>
          </HStack>
        </VStack>
        <Box pos={"absolute"} right={"0"}>
          <Image
            src="/images/xprt-page/persistence-coin.svg"
            alt="Persistence Coin"
            width={400}
            height={400}
          />
        </Box>
      </Flex>
      <PageStats
        stats={[
          {
            statValue: `$${
              Number(marketCap) > 0 ? numberFormat(marketCap, 3) : 0
            }`,
            statLabel: "Market Cap"
          },
          {
            statValue: `${inflationDate}`,
            statLabel: "Next XPRT Inflation Halving"
          },
          {
            statValue: `${stakedXPRT}%`,
            statLabel: "Staked XPRT (total supply)"
          }
        ]}
      />
    </Container>
  );
};

export default HeroSection;
