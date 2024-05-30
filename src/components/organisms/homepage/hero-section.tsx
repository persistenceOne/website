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
      className={"hero-content"}
      backgroundImage={{ base: "", md: "url('/images/hero-bg.svg')" }}
      backgroundPosition="100% 0"
      backgroundRepeat="no-repeat"
      backgroundSize={{ base: "45% 90%", md: "45% 90%", lg: "25% 90%" }}
    >
      <Container maxW={"1440px"} px={{ base: "20px", md: "60px" }}>
        <Spacer h={"150px"} />
        <Flex justify={"space-between"} mb={{ base: "20px", md: "60px" }}>
          <Box>
            <Heading
              variant={"main"}
              color={"text.blackHigh"}
              textAlign={"left"}
              fontSize={{ base: "42px", md: "60px" }}
              lineHeight={{ base: "50px", md: "72px" }}
              mb={"20px"}
            >
              Staking. <br />
              Liquid Staking. <br />
              Restaking.
            </Heading>
            <Text
              textAlign={"left"}
              w={{ base: "100%", md: "55%" }}
              mb={6}
              color={"text.blackLow"}
              fontSize={{ base: "16px", md: "22px" }}
            >
              Persistence One is a purpose built Layer 1 on a mission to
              maximize yield and security through Liquid Staking and Restaking.
            </Text>
            {/* <Stack direction={{ base: "column", md: "row" }} gap={4}> */}
            <Link href="/story" passHref className={"inline-block"}>
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
          </Box>
        </Flex>
        <HomePageStats
          stats={[
            {
              statValue: `$${numberFormat(tvl, 2)}`,
              statLabel: "Total Value Locked"
            },
            {
              statValue: `$${numberFormat(ibcVolume, 2)}`,
              statLabel: "IBC Volume (30 Days)"
            },
            {
              statValue: `$${transactionCost}`,
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
