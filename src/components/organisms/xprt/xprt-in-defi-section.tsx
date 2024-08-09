import XPRTDefiCard, {
  XPRTDefiCardInterface
} from "@/components/molecules/xprt-defi-card";
import {
  Container,
  VStack,
  Heading,
  SimpleGrid,
  Grid,
  Box,
  Button,
  useMediaQuery,
  Flex,
  Image
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useAppStore } from "@/store/store";
import { shallow } from "zustand/shallow";
import {
  DexterPoolsInfo,
  OsmosisPoolsInfo,
  PoolInfo
} from "@/store/slices/initial-data-slice";
import Link from "next/link";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  TELEGRAM_PERSISTENCE_COMMUNITY_LINK,
  TOKEN_CONTRACT_ADDRESS_LINK
} from "@/utils/config";
import { useTranslation } from "next-export-i18n";

const getData = (
  dexterInfo: DexterPoolsInfo,
  osmoPoolsInfo: OsmosisPoolsInfo,
  t: any
) => {
  const defiCards: XPRTDefiCardInterface[] = [
    {
      tokens: [
        {
          name: "WBTC",
          image: "/images/tokens/wbtc.svg"
        },
        {
          name: "XPRT",
          image: "/images/tokens/xprt.svg"
        }
      ],
      cta: {
        label: "Persistence",
        link: "https://app.persistence.one/pools/persistence197pewl43m55d970yrdhfj9hu9fxez443p37cn8ltfjwrh908ytdqhemas8",
        bg: "buttons.ctaBlue",
        hover: "buttons.ctaBlueHover"
      },
      description: t("XPRT_SECTION3_CARD1_TEXT"),
      stats: [
        {
          label: "TVL",
          value: dexterInfo[13].tvl.toString()
        },
        {
          label: "APR",
          value: dexterInfo[13].apy.toString()
        }
      ]
    },
    {
      tokens: [
        {
          name: "stkXPRT",
          image: "/images/tokens/stkxprt.svg"
        },
        {
          name: "XPRT",
          image: "/images/tokens/xprt.svg"
        }
      ],
      cta: {
        label: "Persistence",
        link: "https://app.persistence.one/pools/persistence1v2efcqkp2qtev06t0ksjnx6trxdd0f7fxg2zdrtzr8cr9wdpjkyq8r0cyc",
        bg: "buttons.ctaBlue",
        hover: "buttons.ctaBlueHover"
      },
      description: t("XPRT_SECTION3_CARD2_TEXT"),
      stats: [
        {
          label: "TVL",
          value: dexterInfo[12].tvl.toString()
        },
        {
          label: "APR",
          value: dexterInfo[12].apy.toString()
        }
      ]
    },
    {
      tokens: [
        {
          name: "ATOM",
          image: "/images/tokens/atom.svg"
        },
        {
          name: "XPRT",
          image: "/images/tokens/xprt.svg"
        }
      ],
      cta: {
        label: "Persistence",
        link: "https://app.persistence.one/pools/persistence14ph4e660eyqz0j36zlkaey4zgzexm5twkmjlqaequxr2cjm9eprqsnnszg",
        bg: "buttons.ctaBlue",
        hover: "buttons.ctaBlueHover"
      },
      description: t("XPRT_SECTION3_CARD3_TEXT"),
      stats: [
        {
          label: "TVL",
          value: dexterInfo[2].tvl.toString()
        },
        {
          label: "APR",
          value: dexterInfo[2].apy.toString()
        }
      ]
    },
    {
      tokens: [
        {
          name: "WBTC",
          image: "/images/tokens/wbtc.svg"
        },
        {
          name: "XPRT",
          image: "/images/tokens/xprt.svg"
        }
      ],
      cta: {
        label: "Osmosis",
        link: "https://app.osmosis.zone/pool/1773",
        bg: "buttons.ctaPink",
        hover: "buttons.ctaPurpleHover"
      },
      description: t("XPRT_SECTION3_CARD4_TEXT"),
      stats: [
        {
          label: "TVL",
          value: osmoPoolsInfo[1773].tvl.toString()
        },
        {
          label: "APR",
          value: osmoPoolsInfo[1773].apy.toString()
        }
      ]
    },

    {
      tokens: [
        {
          name: "XPRT",
          image: "/images/tokens/xprt.svg"
        },
        {
          name: "USDC",
          image: "/images/tokens/usdc.svg"
        }
      ],
      cta: {
        label: "Aerodrome",
        link: "https://aerodrome.finance/pools?token0=0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913&token1=0xc7Edf7B7b3667a06992508e7B156eff794a9e1c8&type=200",
        bg: "buttons.ctaDarkBlue",
        hover: "buttons.ctaDarkBlueHover"
      },
      description: t("XPRT_SECTION3_CARD5_TEXT"),
      stats: [
        {
          label: "TVL",
          value: "46527"
        },
        {
          label: "APR",
          value: "~596"
        }
      ]
    },
    {
      tokens: [
        {
          name: "XPRT",
          image: "/images/tokens/xprt.svg"
        },
        {
          name: "OSMO",
          image: "/images/tokens/osmo.svg"
        }
      ],
      cta: {
        label: "Osmosis",
        link: "https://app.osmosis.zone/pool/1101",
        bg: "buttons.ctaPink",
        hover: "buttons.ctaPurpleHover"
      },
      description: t("XPRT_SECTION3_CARD6_TEXT"),
      stats: [
        {
          label: "TVL",
          value: osmoPoolsInfo[1101].tvl.toString()
        },
        {
          label: "APR",
          value: osmoPoolsInfo[1101].apy.toString()
        }
      ]
    },
    {
      tokens: [
        {
          name: "XPRT",
          image: "/images/tokens/xprt.svg"
        },
        {
          name: "USDT",
          image: "/images/tokens/usdt.svg"
        }
      ],
      cta: {
        label: "Persistence",
        link: "https://app.persistence.one/pools/persistence1e0cwfmla7exa578xddl87paxexw9ymwrzysfjms8c2mstxjkldlqz67jnl",
        bg: "buttons.ctaBlue",
        hover: "buttons.ctaBlueHover"
      },
      description: t("XPRT_SECTION3_CARD7_TEXT"),
      stats: [
        {
          label: "TVL",
          value: dexterInfo[5].tvl.toString()
        },
        {
          label: "APR",
          value: dexterInfo[5].apy.toString()
        }
      ]
    },
    {
      tokens: [
        {
          name: "XPRT",
          image: "/images/tokens/xprt.svg"
        },
        {
          name: "PSTAKE",
          image: "/images/tokens/pstake.svg"
        }
      ],
      cta: {
        label: "Persistence",
        link: "https://app.persistence.one/pools/persistence1g3acw7aumaj3r348cqn4kazrehlmn822w9p46sqwztnke27h3lyshald7p",
        bg: "buttons.ctaBlue",
        hover: "buttons.ctaBlueHover"
      },
      description: t("XPRT_SECTION3_CARD8_TEXT"),
      stats: [
        {
          label: "TVL",
          value: dexterInfo[3].tvl.toString()
        },
        {
          label: "APR",
          value: dexterInfo[3].apy.toString()
        }
      ]
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
  const [isMobile] = useMediaQuery("(max-width: 468px)");
  const xprtDefiCards = getData(dexterPoolsInfo, osmoPoolsInfo, t);
  return (
    <>
      <Container
        maxW={"1440px"}
        px={{ base: "40px", md: "100px" }}
        mb={{ base: "30px", md: "60px" }}
        className="xprt-defi-cards aos-init aos-animate"
        data-aos="fade-up"
      >
        <Heading
          textAlign={"center"}
          color={"#633C0D"}
          fontSize={{ base: "26px", xl: "48px" }}
          lineHeight={{ base: "32px", xl: "72px" }}
          mb={{ base: "20px", md: "40px" }}
        >
          {t("XPRT_SECTION3_TITLE")}
        </Heading>
        {/* <Slider
          {...{
            rows: 2,
            // dots: true,
            arrows: true,
            infinite: true,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 2
          }}
        > */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={"18px"}>
          {xprtDefiCards.map((card, index) => (
            <XPRTDefiCard key={index} {...card} />
          ))}
        </SimpleGrid>
        {/* </Slider> */}
      </Container>
      <Box bg={"#E59636"} backgroundPosition="bottom right">
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
                    w={{ base: "160px", xl: "246px" }}
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
              width={{ base: "300px", xl: "401px" }}
              height={{ base: "200px", xl: "249px" }}
              // objectFit="cover"
            />
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default XPRTInDefiSection;
