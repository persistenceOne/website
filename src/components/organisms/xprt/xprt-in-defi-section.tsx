import XPRTDefiCard from "@/components/molecules/xprt-defi-card";
import {
  Container,
  Heading,
  SimpleGrid,
  Box,
  Button,
  useMediaQuery,
  Flex,
  Image,
  Text
} from "@chakra-ui/react";
import React from "react";
import { useAppStore } from "@/store/store";
import { shallow } from "zustand/shallow";
import {
  DexterPoolsInfo,
  OsmosisPoolsInfo
} from "@/store/slices/initial-data-slice";
import Link from "next/link";
import { ArrowForwardIcon } from "@chakra-ui/icons";

import DefiTable, { PoolData } from "@/components/organisms/xprt/table";
import { useTranslation } from "next-export-i18n";

const getData = (
  dexterInfo: DexterPoolsInfo,
  osmoPoolsInfo: OsmosisPoolsInfo,
  t: any
) => {
  const defiCards: PoolData[] = [
    {
      token1: "WBTC",
      token1Img: "/images/tokens/wbtc.svg",
      token2: "XPRT",
      token2Img: "/images/tokens/xprt.svg",
      tvl: dexterInfo[13].tvl.toString(),
      apr: dexterInfo[13].apy.toString(),
      link: "https://app.persistence.one/pools/persistence197pewl43m55d970yrdhfj9hu9fxez443p37cn8ltfjwrh908ytdqhemas8",
      linkLable: "Persistence"
    },
    {
      token1: "stkXPRT",
      token1Img: "/images/tokens/stkxprt.svg",
      token2: "XPRT",
      token2Img: "/images/tokens/xprt.svg",
      tvl: dexterInfo[12].tvl.toString(),
      apr: dexterInfo[12].apy.toString(),
      link: "https://app.persistence.one/pools/persistence1v2efcqkp2qtev06t0ksjnx6trxdd0f7fxg2zdrtzr8cr9wdpjkyq8r0cyc",
      linkLable: "Persistence"
    },
    {
      token1: "ATOM",
      token1Img: "/images/tokens/atom.svg",
      token2: "XPRT",
      token2Img: "/images/tokens/xprt.svg",
      tvl: dexterInfo[2].tvl.toString(),
      apr: dexterInfo[2].apy.toString(),
      link: "https://app.persistence.one/pools/persistence14ph4e660eyqz0j36zlkaey4zgzexm5twkmjlqaequxr2cjm9eprqsnnszg",
      linkLable: "Persistence"
    },
    {
      token1: "XPRT",
      token1Img: "/images/tokens/xprt.svg",
      token2: "BTC",
      token2Img: "/images/tokens/btc.svg",
      tvl: osmoPoolsInfo[2197].tvl.toString(),
      apr: osmoPoolsInfo[2197].apy.toString(),
      link: "https://app.osmosis.zone/pool/2197",
      linkLable: "Osmosis"
    },
    {
      token1: "XPRT",
      token1Img: "/images/tokens/xprt.svg",
      token2: "USDC",
      token2Img: "/images/tokens/usdc.svg",
      tvl: "12957",
      apr: "1604",
      link: "https://aerodrome.finance/pools?token0=0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913&token1=0xc7Edf7B7b3667a06992508e7B156eff794a9e1c8&type=200",
      linkLable: "Aerodrome"
    },
    {
      token1: "XPRT",
      token1Img: "/images/tokens/xprt.svg",
      token2: "OSMO",
      token2Img: "/images/tokens/osmo.svg",
      tvl: osmoPoolsInfo[1101].tvl.toString(),
      apr: osmoPoolsInfo[1101].apy.toString(),
      link: "https://app.osmosis.zone/pool/1101",
      linkLable: "Osmosis"
    },
    {
      token1: "XPRT",
      token1Img: "/images/tokens/xprt.svg",
      token2: "USDT",
      token2Img: "/images/tokens/usdt.svg",
      tvl: dexterInfo[5].tvl.toString(),
      apr: dexterInfo[5].apy.toString(),
      link: "https://app.persistence.one/pools/persistence1e0cwfmla7exa578xddl87paxexw9ymwrzysfjms8c2mstxjkldlqz67jnl",
      linkLable: "Persistence"
    },
    {
      token1: "XPRT",
      token1Img: "/images/tokens/xprt.svg",
      token2: "PSTAKE",
      token2Img: "/images/tokens/pstake.svg",
      tvl: dexterInfo[3].tvl.toString(),
      apr: dexterInfo[3].apy.toString(),
      link: "https://app.persistence.one/pools/persistence1g3acw7aumaj3r348cqn4kazrehlmn822w9p46sqwztnke27h3lyshald7p",
      linkLable: "Persistence"
    }
  ];
  return defiCards;
};

const XPRTInDefiSection = () => {
  const { t } = useTranslation();
  const [dexterPoolsInfo, osmoPoolsInfo] = useAppStore(
    (state) => [state.dexterPoolsInfo, state.osmoPoolsInfo],
    shallow
  );

  const [isTablet] = useMediaQuery("(max-width: 760px)");

  const defiCardsData = getData(dexterPoolsInfo, osmoPoolsInfo, t);

  return (
    <>
      <Box bg={"#E59636"} backgroundPosition="bottom right" mb={"50px"}>
        <Container
          maxW={"1440px"}
          px={{ base: "20px", md: "100px" }}
          py={"36px"}
        >
          <Flex
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDirection={{ base: "column", md: "row" }}
          >
            <Box maxW={"500px"}>
              <Heading
                fontSize={{ base: "22px", xl: "32px" }}
                textAlign={{ base: "center", md: "left" }}
                color={"text.headingSemiWhite"}
                pr={"12px"}
                mb={"42px"}
                fontWeight={700}
                lineHeight={{ base: "1.5", xl: "48px" }}
              >
                {t("XPRT_SECTION4_TITLE")}
              </Heading>
              <Box textAlign={{ base: "center", md: "left" }}>
                <Link
                  href={
                    "https://docs.persistence.one/participate/xprt/token-contract-metadata"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    color={"#FFFFFF"}
                    minW={{ base: "160px", xl: "246px" }}
                    h={{ base: "40px", xl: "52px" }}
                    variant={"ternary"}
                    fontSize={{ base: "10px", xl: "18px" }}
                    bg="#1D1306"
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
                    rightIcon={<ArrowForwardIcon />}
                  >
                    {t("CHECK_TOKEN_DETAILS")}
                  </Button>
                </Link>
              </Box>
            </Box>
            <Image
              src={"/images/xprt-page/xprt_quote.svg"}
              alt={"team-work"}
              w={{ base: "300px", xl: "401px" }}
              height={{ base: "200px", xl: "249px" }}
              // objectFit="cover"
            />
          </Flex>
        </Container>
      </Box>
      <Container
        maxWidth={"1320px"}
        px={{ base: "40px", md: "40px" }}
        mb={{ base: "30px", md: "60px" }}
        className="xprt-defi-cards"
      >
        <Heading
          textAlign={"center"}
          color={"#633C0D"}
          fontSize={{ base: "26px", xl: "48px" }}
          lineHeight={{ base: "32px", xl: "72px" }}
          mb={"4px"}
        >
          {t("XPRT_SECTION3_TITLE")}
        </Heading>
        <Text
          maxW={"700px"}
          mx={"auto"}
          color={"#633C0D"}
          textAlign={"center"}
          fontSize={{ base: "16px", md: "20px" }}
          lineHeight={{ base: "24px", md: "30px" }}
          mb={{ base: "20px", md: "40px" }}
        >
          {t("XPRT_SECTION3_SUB_TITLE")}
        </Text>
        {isTablet ? (
          <>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={"18px"}>
              {defiCardsData.map((card, index) => (
                <XPRTDefiCard key={index} {...card} />
              ))}
            </SimpleGrid>
            <Text
              mx={"auto"}
              color={"#633C0D"}
              textAlign={"left"}
              fontSize={"12px"}
              lineHeight={""}
              px={"12px"}
              mt={"20px"}
            >
              <b>*{t("DISCLAIMER")}: </b> {t("APR_DISCLAIMER_NOTE")}
            </Text>
          </>
        ) : (
          <DefiTable defiCardsData={defiCardsData} />
        )}
      </Container>
    </>
  );
};

export default XPRTInDefiSection;
