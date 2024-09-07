import DappCard, { DappCardInterface } from "@/components/atoms/dapp-card";
import { Container, Box, Stack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useAppStore } from "@/store/store";
import { shallow } from "zustand/shallow";
import { numberFormat } from "@/utils/helpers";
import GetXprtSection from "@/components/organisms/homepage/get-xprt-section";
import { useTranslation } from "next-export-i18n";
import { fetchDexterInfo, fetchDexterUsers } from "@/pages/api";

const getData = (dexterInfo: any, t: any) => {
  const dApps: DappCardInterface[] = [
    {
      dAppName: t("PERSISTENCE_DEX"),
      dAppLogo: "/images/persistence-symbol.svg",
      dAppDescription: t("HOME_DEX_CONTENT"),
      dAppStats: [
        {
          label: t("TVL"),
          value: `$${numberFormat(Number(dexterInfo.tvl), 3)}`
        },
        {
          label: t("TOTAL_VOLUME"),
          value: `$${numberFormat(Number(dexterInfo.total_volume), 3)}`
        },
        {
          label: t("TOTAL_USERS"),
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
        text: t("ENTER_THE_APP"),
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
  const [
    setDexterTVl,
    setDexterTotalVolume,
    setPersistenceTvl,
    setDexterUsers,
    dexterInfo
  ] = useAppStore(
    (state) => [
      state.setDexterTVl,
      state.setDexterTotalVolume,
      state.setPersistenceTvl,
      state.setDexterUsers,
      state.dexterInfo
    ],
    shallow
  );

  //fetching dexter info
  useEffect(() => {
    const fetch = async () => {
      fetchDexterInfo().then((resp) => {
        setDexterTVl(resp.tvl);
        setPersistenceTvl(resp.tvl);
        setDexterTotalVolume(resp.volume);
      });
      fetchDexterUsers().then((userResponse) => {
        setDexterUsers(userResponse);
      });
    };
    fetch();
  }, []);

  const { t } = useTranslation();
  const dApps = getData(dexterInfo, t);

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
