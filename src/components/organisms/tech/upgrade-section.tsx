import Icon from "@/components/molecules/Icon";
import { Box, Heading, Container, Text, Flex } from "@chakra-ui/react";
import React, { Component, useRef } from "react";
import Slider from "react-slick";
import { useMediaQuery } from "@chakra-ui/react";
import Link from "next/link";

const upgradeList = [
  // {
  //   title: "v10.4",
  //   link: "https://blog.persistence.one/2024/02/13/persistence-one-launches-dydx-liquid-staking/",
  //   date: "FEB 2024",
  //   content:
  //     "Launched secure and decentralized DYDX liquid staking on Persistence One."
  // },
  {
    title: "v11",
    link: "https://www.mintscan.io/persistence/proposals/84",
    date: "FEB 2024",
    content:
      "Facilitate the launch of stkXPRT, add ratesync module, and enable Timewave integration."
  },
  {
    title: "v10",
    link: "https://www.mintscan.io/persistence/proposals/55",
    date: "FEB 2024",
    content:
      "Launched secure and decentralized DYDX Liquid Staking, improved on-chain security monitoring and simplified the XPRT governance process."
  },
  {
    title: "v9",
    link: "https://blog.pstake.finance/2023/09/12/cosmos-lsm-atom-liquid-staking-made-simpler-with-pstake/",
    date: "FEB 2024",
    content:
      "Enabled support for the Liquid Staking Module (LSM) to convert natively staked ATOM in liquid staked stkATOM in a single click without 21-day unbonding."
  },
  {
    title: "v8",
    link: "https://x.com/PersistenceOne/status/1699056096311410866?s=20",
    date: "FEB 2024",
    content:
      "Added 5 new modules like IBC Hooks, Packet Forwarding, Skip Protocol, and updated 6 existing modules to make the Persistence One chain a technical leader in Cosmos."
  },
  {
    title: "v5",
    link: "https://www.mintscan.io/persistence/proposals/9",
    date: "FEB 2024",
    content: "Improved security measures for Liquid Staking on Persistence One."
  },
  {
    title: "v4",
    link: "https://blog.pstake.finance/2022/10/18/interchain-accounts-queries-a-new-chapter-for-liquid-staking-in-cosmos/",
    date: "FEB 2024",
    content:
      "Added Inter Chain Queries (ICQ) and the pSTAKE Module to launch native Liquid Staking."
  },
  {
    title: "v3",
    link: "https://cosmos.network/cosmwasm/",
    date: "FEB 2024",
    content:
      "Enabled CosmWasm for developers to build and deploy secure smart-contract dApps."
  },
  {
    title: "v2",
    link: "https://www.mintscan.io/persistence/proposals/3",
    date: "FEB 2024",
    content:
      "Added Authz and feegrant modules to improve user experience and modular development."
  }
];

const UpgradeSection = () => {
  const [isMobile] = useMediaQuery("(max-width: 500px)");
  const [isLandScape] = useMediaQuery("(max-width: 990px)");
  let sliderRef: any = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  return (
    <Box bg={"#252424"}>
      <Container maxW={"1440px"} px={{ base: "20px", md: "60px" }} py={"70px"}>
        <Heading
          textAlign={"center"}
          color={"text.headingSemiWhite"}
          fontSize={{ base: "22px", md: "44px" }}
          mb={{ base: "40px", md: "80px" }}
        >
          Evolving Constantly. Upgrading Securely.
        </Heading>
        <Slider
          {...{
            dots: false,
            arrows: false,
            infinite: false,
            slidesToShow: isMobile ? 1 : isLandScape ? 3 : 5,
            slidesToScroll: 1
          }}
          ref={(slider) => {
            sliderRef = slider;
          }}
          className={"upgrade-slider"}
        >
          {upgradeList.map((item, index) => {
            return (
              <Box key={index} w={{ base: "auto", md: "183px" }}>
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Flex align={"center"} mb={4}>
                    <Heading
                      variant={"secondary"}
                      color={"text.headingSemiWhite"}
                      pr={"12px"}
                    >
                      {item.title}
                    </Heading>
                    <Box w={"9px"} h={"9px"}>
                      <Icon icon="external_redirect" />
                    </Box>
                  </Flex>
                </Link>

                <Box
                  borderTopWidth={"3px"}
                  pos={"relative"}
                  borderColor={`#C73238`}
                  w={"100%"}
                  _before={{
                    content: '""',
                    display: "block",
                    width: "15px",
                    height: "15px",
                    background: "#C73238",
                    borderRadius: "50%",
                    position: "absolute",
                    top: "-10px",
                    left: "0"
                  }}
                />
                {/* <Heading
                  variant={"secondary"}
                  pr={"12px"}
                  color={"text.headingSemiWhite"}
                  mt={4}
                >
                  {item.date}
                </Heading> */}
                <Text
                  w={"80%"}
                  mt={4}
                  color={"text.headingSemiWhite"}
                  fontSize={"12px"}
                  pr={"12px"}
                >
                  {item.content}
                </Text>
              </Box>
            );
          })}
        </Slider>
        <Flex mt={4} className={"upgrade-slider-arrow"}>
          <Flex
            align={"center"}
            justify={"center"}
            cursor={"pointer"}
            w={"24px"}
            h={"24px"}
            bg={"#3D3D3D"}
            borderRadius={"100%"}
            onClick={previous}
            mr={5}
          >
            <Box w={"12px"} h={"12px"} onClick={previous}>
              <Icon icon="left_chevron" />
            </Box>
          </Flex>
          <Flex
            align={"center"}
            justify={"center"}
            w={"24px"}
            h={"24px"}
            cursor={"pointer"}
            onClick={next}
            borderRadius={"100%"}
            bg={"#3D3D3D"}
          >
            <Box w={"12px"} h={"12px"} onClick={previous}>
              <Icon icon="right_chevron" />
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default UpgradeSection;
