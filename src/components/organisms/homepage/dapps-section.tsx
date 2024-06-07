import DappCard, { DappCardInterface } from "@/components/atoms/dapp-card";
import { Container, Box, Stack, Heading, Text, Flex } from "@chakra-ui/react";
import React from "react";
import { useAppStore } from "@/store/store";
import { shallow } from "zustand/shallow";
import { numberFormat } from "@/utils/helpers";

const getData = (pstakeInfo: any, dexterInfo: any) => {
  const dApps: DappCardInterface[] = [
    {
      dAppName: "Persistence DEX",
      dAppLogo: "/images/persistence-dex-logo.svg",
      dAppDescription:
        "Persistence DEX is decentralized exchange governed by $XPRT to bootstrap liquidity for LSTs, Stablecoins, LRTs, and other IBC tokens.",
      dAppStats: [
        {
          label: "Total Value Locked",
          value: `$${numberFormat(Number(dexterInfo.tvl), 3)}`
        },
        {
          label: "Total Volume",
          value: `$${numberFormat(Number(dexterInfo.total_volume), 3)}`
        }
      ],
      supportingAssets: [
        { asset: "WBTC", assetIcon: "/images/tokens/wbtc.svg" },
        { asset: "stkXPRT", assetIcon: "/images/tokens/stkxprt.svg" },
        { asset: "XPRT", assetIcon: "/images/tokens/xprt.svg" },
        { asset: "USDC", assetIcon: "/images/tokens/usdc.svg" },
        { asset: "USDT", assetIcon: "/images/tokens/usdt.svg" },
        { asset: "stkATOM", assetIcon: "/images/tokens/stkatom.svg" },
        { asset: "ATOM", assetIcon: "/images/tokens/atom.svg" },
        {
          asset: "SHD, STARS, HUAHUA, DYDX, stkDYDX, stkSTARS, stkHUAHUA",
          assetIcon: "/images/tokens/more.svg"
        }
        // { asset: "SHD", assetIcon: "/images/shd.svg" },
      ],
      website: {
        link: "https://app.persistence.one",
        linkText: "app.persistence.one",
        hover: "#C73238"
      },
      button: {
        text: "Trade Now",
        link: "https://app.persistence.one",
        background: "transparent",
        hover: "#C732381A",
        color: "#DE5656"
      }
    },
    {
      dAppName: "pSTAKE Finance",
      dAppLogo: "/images/pstake-logo.svg",
      dAppDescription:
        "pSTAKE on Cosmos LSTs are issued on the Persistence chain and can be used in DeFi on Persistence One and beyond.",
      dAppStats: [
        {
          label: "Total Value Locked",
          value: `$${numberFormat(Number(pstakeInfo.tvl), 3)}`
        },
        {
          label: "All Time Users",
          value: `${numberFormat(Number(pstakeInfo.allTimeUsers), 3)}+`
        }
      ],
      supportingAssets: [
        { asset: "stkXPRT", assetIcon: "/images/tokens/stkxprt.svg" },
        { asset: "stkATOM", assetIcon: "/images/tokens/stkatom.svg" },
        { asset: "stkOSMO", assetIcon: "/images/tokens/stkosmo.svg" },
        { asset: "stkDYDX", assetIcon: "/images/tokens/stkdydx.svg" },
        { asset: "stkSTARS, stkHUAHUA", assetIcon: "/images/tokens/more.svg" }
        // { asset: "stkBNB", assetIcon: "/images/tokens/stkbnb.svg" },
        // { asset: "stkDYDX", assetIcon: "/images/tokens/stkdydx.svg" },
        // { asset: "stkSTARS", assetIcon: "/images/tokens/stkstars.svg" },
        // { asset: "stkHUAHUA", assetIcon: "/images/tokens/stkhuahua.svg" }
      ],
      website: {
        link: "https://pstake.finance",
        linkText: "pstake.finance",
        hover: "primary.redHover"
      },
      button: {
        text: "Liquid Stake Now",
        link: "https://app.pstake.finance",
        background: "primary.red",
        hover: "primary.redHover",
        color: "white"
      }
    }
  ];
  return dApps;
};

const DappsSection = () => {
  const [pstakInfo, dexterInfo] = useAppStore(
    (state) => [state.pstakInfo, state.dexterInfo],
    shallow
  );

  const dApps = getData(pstakInfo, dexterInfo);

  return (
    <Box pos={"relative"}>
      <Container maxW={"1200px"} px={{ base: "16px", md: "30px" }}>
        <Flex justify={"center"}>
          <Box>
            <Heading
              textAlign={"center"}
              color={"text.blackTitle"}
              fontSize={{ base: "26px", md: "58px" }}
              mb={{ base: "22px", md: "60px" }}
            >
              Built on Persistence One
            </Heading>
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
