import XPRTDefiCard, {
  XPRTDefiCardInterface
} from "@/components/molecules/xprt-defi-card";
import { Container, VStack, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";

const xprtDefiCards: XPRTDefiCardInterface[] = [
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
      label: "Dexter",
      link: "https://app.dexter.zone",
      bg: "buttons.ctaBlue"
    },
    description:
      "Provide liquidity to the ATOM/XPRT pool to earn trading fees and external incentives",
    stats: [
      {
        label: "TVL",
        value: "$4,608,660"
      },
      {
        label: "APR",
        value: "34.54%"
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
      link: "https://app.osmosis.zone",
      bg: "buttons.ctaPink"
    },
    description:
      "Provide liquidity to the XPRT/OSMO Supercharged pool to earn trading fees and external incentives. ",
    stats: [
      {
        label: "TVL",
        value: "$2,008,660"
      },
      {
        label: "APR",
        value: "34.54%"
      }
    ]
  }
];

const XPRTInDefiSection = () => {
  return (
    <Container maxW={"1440px"} px={"40px"}>
      <VStack align={"center"}>
        <Heading variant={"main"} fontSize={58}>
          XPRT in DeFi
        </Heading>
        <SimpleGrid columns={2} spacing={10} mt={8}>
          {xprtDefiCards.map((card, index) => (
            <XPRTDefiCard key={index} {...card} />
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default XPRTInDefiSection;
