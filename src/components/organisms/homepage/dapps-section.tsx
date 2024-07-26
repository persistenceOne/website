import DappCard, { DappCardInterface } from "@/components/atoms/dapp-card";
import { Container, Box, Stack } from "@chakra-ui/react";
import React from "react";
import { useAppStore } from "@/store/store";
import { shallow } from "zustand/shallow";
import { numberFormat } from "@/utils/helpers";
import GetXprtSection from "@/components/organisms/homepage/get-xprt-section";

const getData = (dexterInfo: any) => {
  const dApps: DappCardInterface[] = [
    {
      dAppName: "Persistence DEX",
      dAppLogo: "/images/persistence-dex-logo.svg",
      dAppDescription:
        "Governed by $XPRT, Persistence DEX is a trading and liquidity venue for XPRT, BTC and its’ related assets, LSTs and Stablecoins.",
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
          value: `${numberFormat(Number(dexterInfo.allTimeUsers), 3)}`
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
        text: "Enter the App",
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
  const [dexterInfo] = useAppStore((state) => [state.dexterInfo], shallow);

  const dApps = getData(dexterInfo);
  return (
    <Box pos={"relative"} bg={"#1D1306"}>
      <Container
        maxW={"1300px"}
        py={{ base: "40px", md: "80px" }}
        px={{ base: "16px", md: "30px" }}
      >
        <Stack
          spacing={8}
          mb={"40px"}
          className="aos-init aos-animate py-10"
          data-aos="fade-up"
          direction={{ base: "column", md: "row" }}
        >
          {dApps.map((dApp) => (
            <DappCard key={dApp.dAppName} {...dApp} />
          ))}
        </Stack>
        <GetXprtSection />
      </Container>
    </Box>
  );
};

export default DappsSection;
