import React, { useEffect, useState } from "react";
import Icon from "../Icon";
import { Box, Text, Image } from "@chakra-ui/react";

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
          fontSize={"14px"}
          fontWeight={500}
        >
          <Image
            src={"/images/tokens/atom.svg"}
            alt={"stkAtom"}
            width={"16px"}
            height={"16px"}
            mr={2}
          />
          <span>stkDYDX is NOW LIVE. Liquid Stake your DYDX with&nbsp;</span>
          &nbsp;validators&nbsp;
          <a
            className="link underline"
            href={"https://app.pstake.finance/cosmos"}
            target="_blank"
            rel="noopener noreferrer"
          >
            now.
          </a>
        </Text>
        <Box onClick={closeBanner}>
          <Icon
            viewClass="close w-[10px] h-[10px] fill-[#fff] absolute top-[13px] right-[20px] cursor-pointer"
            icon="close"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default GeofenceNotice;
