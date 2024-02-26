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

const HeroSection = () => {
  const [tvl, ibcVolume, transactionCost] = useAppStore(
    (state) => [
      state.tvl,
      state.ibcVolume,
      state.transactionCost,
      state.inflationDate
    ],
    shallow
  );

  return (
    <Box
      px={{ base: "20px", md: "60px" }}
      className={"hero-content"}
      backgroundImage={{ base: "", md: "url('/images/hero-bg.svg')" }}
      backgroundPosition="100% 0"
      backgroundRepeat="no-repeat"
      backgroundSize={"35% 100%"}
    >
      <Container maxW={"1440px"} px={"0"}>
        <Spacer h={"150px"} />
        <Flex justify={"space-between"} mb={{ base: "20px", md: "60px" }}>
          <VStack align={"stretch"}>
            <Heading
              variant={"main"}
              color={"text.blackHigh"}
              textAlign={"left"}
              fontSize={{ base: "32px", md: "60px" }}
              lineHeight={{ base: "42px", md: "72px" }}
              mb={"20px"}
            >
              Staking. <br />
              Liquid Staking. <br />
              Restaking.
            </Heading>
            <Text textAlign={"left"} w={{ base: "100%", md: "55%" }} mb={6}>
              Persistence One is a purpose built Layer 1 on a mission to
              maximize yield and security through Liquid Staking and Restaking.
            </Text>
            {/* <Stack direction={{ base: "column", md: "row" }} gap={4}> */}
            <Link href="/story" passHref>
              <Button
                variant={"secondary"}
                rightIcon={<ArrowForwardIcon />}
                w={{ base: "100%", md: "auto" }}
              >
                Learn More
              </Button>
            </Link>
            {/* <Link href="/xprt" passHref>
                <Button w={{ base: "100%", md: "auto" }}>
                  Explore Ecosystem
                </Button>
              </Link> */}
            {/* </Stack> */}
          </VStack>
        </Flex>
        <HomePageStats
          stats={[
            {
              statValue: `$${numberFormat(tvl, 3)}`,
              statLabel: "Total Value Locked"
            },
            {
              statValue: `$${numberFormat(ibcVolume, 3)}`,
              statLabel: "IBC Volume (30 Days)"
            },
            {
              statValue: `< $${transactionCost}`,
              statLabel: "Average Transaction Cost"
            }
          ]}
        />
        <Spacer h={"85px"} />
      </Container>
    </Box>
  );
};

export default HeroSection;
