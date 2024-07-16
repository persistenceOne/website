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
  useMediaQuery
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useAppStore } from "@/store/store";
import { shallow } from "zustand/shallow";
import Slider from "react-slick";
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

const getData = (
  dexterInfo: DexterPoolsInfo,
  osmoPoolsInfo: OsmosisPoolsInfo
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
      description:
        "Provide liquidity to the WBTC/XPRT pool to earn trading fees and external incentives",
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
      description:
        "Provide liquidity to the stkXPRT/XPRT pool to earn trading fees and external incentives",
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
      description:
        "Provide liquidity to the ATOM/XPRT pool to earn trading fees and external incentives",
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
      description:
        "Provide liquidity to the WBTC/XPRT Supercharged pool to earn trading fees and external incentives.",
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
      description:
        "Provide liquidity to the XPRT/USDC supercharged pool to earn trading fees and external incentives",
      stats: [
        {
          label: "TVL",
          value: "46527"
        },
        {
          label: "APR",
          value: "0"
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
      description:
        "Provide liquidity to the XPRT/OSMO Supercharged pool to earn trading fees and external incentives. ",
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
      description:
        "Provide liquidity to the USDT/XPRT pool to earn trading fees and external incentives",
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
      description:
        "Provide liquidity to the PSTAKE/XPRT pool to earn trading fees and external incentives",
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
  const [dexterPoolsInfo, osmoPoolsInfo] = useAppStore(
    (state) => [state.dexterPoolsInfo, state.osmoPoolsInfo],
    shallow
  );
  const [isMobile] = useMediaQuery("(max-width: 468px)");
  const xprtDefiCards = getData(dexterPoolsInfo, osmoPoolsInfo);
  return (
    <>
      <Container
        className={"xprt-defi-cards"}
        maxW={"1200px"}
        px={{ base: "16px", md: "50px" }}
        mb={{ base: "30px", md: "100px" }}
      >
        <Heading
          variant={"main"}
          fontSize={{ base: "26px", md: "58px" }}
          color={"primary.blackHeading"}
          textAlign={"center"}
          mb={10}
        >
          XPRT in Multi-Chain DeFi
        </Heading>
        {/* <CrossChainSlider
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
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
          {xprtDefiCards.map((card, index) => (
            <XPRTDefiCard key={index} {...card} />
          ))}
        </SimpleGrid>
        {/* </CrossChainSlider> */}
      </Container>
      <Box
        bg={"#252424"}
        mt={12}
        style={{
          backgroundImage: "url('/images/story-page/story-community-bg.svg')",
          backgroundPosition: "100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "22%"
        }}
        backgroundPosition="bottom right"
      >
        <Container
          maxW={"1440px"}
          px={{ base: "20px", md: "100px" }}
          py={"60px"}
        >
          <Heading
            fontSize={{ base: "22px", md: "32px" }}
            textAlign={{ base: "center", md: "left" }}
            color={"text.headingSemiWhite"}
            pr={"12px"}
            mb={"40px"}
            fontWeight={700}
            lineHeight={{ base: "1.5", md: "48px" }}
          >
            Find correct details about all the IBC Denoms <br /> or Token
            Contract Addresses for XPRT on <br /> the respective chains.
          </Heading>
          <Box textAlign={{ base: "center", md: "left" }}>
            <Link
              href={TOKEN_CONTRACT_ADDRESS_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant={"secondary"} rightIcon={<ArrowForwardIcon />}>
                Token contract addresses
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default XPRTInDefiSection;
