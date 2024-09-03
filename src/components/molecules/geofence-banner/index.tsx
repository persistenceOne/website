import React, { useEffect, useState } from "react";
import Icon from "../Icon";
import { Box, Text, Link, Image } from "@chakra-ui/react";
import { useTranslation } from "next-export-i18n";

const GeofenceNotice = () => {
  const { t } = useTranslation();
  const [banner, setBanner] = useState(true);
  const closeBanner = () => {
    setBanner(false);
  };

  return (
    <Box
      display={!banner ? "none" : "block"}
      bg={"#e59735cc"}
      pr={12}
      py={2.5}
      pl={4}
      position="relative"
      className={"banner-container"}
    >
      <Box display={"flex"} justifyContent={"center"}>
        <Text
          display={"flex"}
          flexDir={{ base: "column", md: "row" }}
          alignItems={"center"}
          color={"#fff"}
          fontSize={"14px"}
          fontWeight={500}
        >
          <span>{t("APP_BANNER")}&nbsp;</span>
          <Link
            fontWeight={600}
            display={"flex"}
            textDecoration={"underline"}
            alignItems={"center"}
            href={
              "https://blog.persistence.one/2024/08/14/introducing-our-updated-logo-fresh-look-bitcoin-alignment-communitys-choice/"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("LEARN_MORE")}
            <Icon viewClass="arrow" icon="right-arrow-bold" />
          </Link>
        </Text>
        <Box onClick={closeBanner}>
          <Icon viewClass="close" icon="close" />
        </Box>
      </Box>
    </Box>
  );
};

export default GeofenceNotice;
