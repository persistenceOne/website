import React, { useEffect, useState } from "react";
import Icon from "../Icon";
import { Box, Text, Link, Image } from "@chakra-ui/react";

const GeofenceNotice = () => {
  const [banner, setBanner] = useState(true);
  const closeBanner = () => {
    setBanner(false);
  };

  return (
    <Box
      display={!banner ? "none" : "block"}
      bg={"#E59636"}
      pr={12}
      py={2.5}
      pl={4}
      position="relative"
      className={"banner-container"}
    >
      <Box display={"flex"} justifyContent={"center"}>
        <Text
          display={"flex"}
          alignItems={"center"}
          color={"#fff"}
          fontSize={"14px"}
          fontWeight={500}
        >
          <span>
            As we enter this new chapter, we invite you to celebrate our
            refreshed identity: Fresh Look. Bitcoin Alignment. Community&apos;s
            Choice.&nbsp;
          </span>
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
            Learn more
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
