import React, { useState } from "react";
import Icon from "../Icon";
import { Box, Text, Link, useMediaQuery } from "@chakra-ui/react";
import { useTranslation } from "next-export-i18n";

const GeofenceNotice = () => {
  const { t } = useTranslation();
  const [banner, setBanner] = useState(true);
  const [isLandScape] = useMediaQuery("(min-width: 500px)");

  const closeBanner = () => {
    setBanner(false);
  };

  return (
    <Box
      display={!banner ? "none" : "block"}
      bg={"#d6923f"}
      pr={12}
      py={2.5}
      pl={4}
      position="relative"
      textAlign={{ base: "left", "2xl": "center" }}
      className={"banner-container"}
    >
      <Box display={"inline-flex"} justifyContent={"center"}>
        <Text
          display={"inline-flex"}
          flexDirection={{ base: "column", md: "row" }}
          alignItems={{ base: "start", md: "center" }}
          color={"#fff"}
          fontSize={"14px"}
          fontWeight={500}
        >
          {isLandScape
            ? t("APP_BANNER")
            : "We invite you to celebrate our refreshed identity."}
          &nbsp;
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
