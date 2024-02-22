import DappCard, { DappCardInterface } from "@/components/atoms/dapp-card";
import { Container, Box, Stack, Heading, Text, Flex } from "@chakra-ui/react";
import React from "react";

const dApps: DappCardInterface[] = [
  {
    dAppName: "PSTAKE Finance",
    dAppLogo: "/images/pstake-logo.svg",
    dAppDescription:
      "pSTAKE is a multi-chain liquid staking protocol that unlocks liquidity for your staked assets.",
    dAppStats: [
      {
        label: "Total Value Locked",
        value: "$12.008M"
      },
      {
        label: "All Time Users",
        value: "56,982"
      }
    ],
    supportingAssets: [
      { asset: "stkOSMO", assetIcon: "/images/stkosmo.svg" },
      { asset: "stkXPRT", assetIcon: "/images/stkxprt.svg" },
      { asset: "stkATOM", assetIcon: "/images/stkatom.svg" },
      { asset: "stkBNB", assetIcon: "/images/stkbnb.svg" },
      { asset: "stkDYDX", assetIcon: "/images/stkdydx.svg" }
    ],
    website: { link: "https://pstake.finance", linkText: "pstake.finance" },
    button: {
      text: "Liquid Stake Now",
      link: "https://app.pstake.finance",
      background: "primary.red",
      color: "white"
    }
  },
  {
    dAppName: "Dexter",
    dAppLogo: "/images/dexter-logo.svg",
    dAppDescription:
      "Dexter is an Interchain DEX for yield generating assets such as LSTs.",
    dAppStats: [
      {
        label: "Total Value Locked",
        value: "$5.662M"
      },
      {
        label: "Total Volume",
        value: "$8.43M"
      }
    ],
    supportingAssets: [
      { asset: "XPRT", assetIcon: "/images/tokens/xprt.svg" },
      { asset: "ATOM", assetIcon: "/images/tokens/atom.svg" },
      { asset: "DYDX", assetIcon: "/images/tokens/dydx.svg" },
      { asset: "USDT", assetIcon: "/images/usdt.svg" },
      { asset: "USDC", assetIcon: "/images/usdc.svg" }
    ],
    website: { link: "https://dexter.zone", linkText: "dexter.zone" },
    button: {
      text: "Trade Now",
      link: "https://app.dexter.zone",
      background:
        "linear-gradient(284.42deg, #00AFFA -49.92%, #32A2BA 54.24%, #24FFCA 169.83%);",
      color: "white"
    }
  }
];

const DappsSection = () => {
  return (
    <Box pos={"relative"}>
      <Container maxW={"1200px"} px={{ base: "16px", md: "30px" }}>
        <Flex justify={"center"}>
          <Box>
            <Heading
              textAlign={"center"}
              color={"text.blackHigh"}
              fontSize={{ base: "26px", md: "58px" }}
              mb={"4px"}
            >
              #Built on Persistence
            </Heading>
            <Text
              textAlign="center"
              mb={{ base: "22px", md: "60px" }}
              color={"text.blackMid"}
              fontSize={{ base: "16px", md: "22px" }}
            >
              Discover the future of Web3 Finance Powered by Persistence
            </Text>
          </Box>
        </Flex>
        <Stack
          spacing={8}
          mb={"80px"}
          direction={{ base: "column", md: "row" }}
        >
          {dApps.map((dApp) => (
            <DappCard key={dApp.dAppName} {...dApp} />
          ))}
        </Stack>
      </Container>
      <Box
        bg="primary.red"
        w={"full"}
        h={"200px"}
        pos={"absolute"}
        bottom={"-80px"}
        zIndex={-1}
      />
    </Box>
  );
};

export default DappsSection;
