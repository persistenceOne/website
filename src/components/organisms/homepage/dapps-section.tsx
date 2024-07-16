import DappCard, { DappCardInterface } from "@/components/atoms/dapp-card";
import { Container, Box, Stack, Heading, Text, Flex } from "@chakra-ui/react";
import React from "react";
import { useAppStore } from "@/store/store";
import { shallow } from "zustand/shallow";
import { numberFormat } from "@/utils/helpers";

const getData = (dexterInfo: any) => {
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
        },
        {
          label: "Total Users",
          value: `$${numberFormat(Number(dexterInfo.allTimeUsers), 3)}`
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
        hover: "primary.redHover"
      },
      button: {
        text: "Trade Now",
        link: "https://app.persistence.one",
        background: "primary.red",
        hover: "primary.redHover",
        color: "white"
      }
    }
  ];
  return dApps;
};

const DappsSection = () => {
  const [ dexterInfo] = useAppStore(
    (state) => [state.dexterInfo],
    shallow
  );

  const dApps = getData(dexterInfo);

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
