import Icon from "@/components/molecules/Icon";
import { Box, Heading, Container, Text, Flex } from "@chakra-ui/react";
import React, { Component, useRef } from "react";
import Slider from "react-slick";

const upgradeList = [
  {
    title: "v10.4 Upgrade",
    link: "",
    date: "FEB 2024",
    content:
      "Launched secure and decentralized DYDX liquid staking on Persistence One."
  },
  {
    title: "v10 Upgrade",
    link: "",
    date: "FEB 2024",
    content:
      "Improved on-chain security monitoring and simplified the XPRT governance process."
  },
  {
    title: "v9 Upgrade",
    link: "",
    date: "FEB 2024",
    content:
      "Enabled support for the Liquid Staking Module (LSM) to convert natively staked ATOM in liquid staked stkATOM in a single click without 21-day unbonding."
  },
  {
    title: "v8 Upgrade",
    link: "",
    date: "FEB 2024",
    content:
      "Added 5 new modules like IBC Hooks, Packet Forwarding, Skip Protocol, and updated 6 existing modules to make the Persistence One chain a technical leader in Cosmos."
  },
  {
    title: "v5 Upgrade",
    link: "",
    date: "FEB 2024",
    content: "Improved security measures for liquid staking on Persistence One."
  },
  {
    title: "v4 Upgrade",
    link: "",
    date: "FEB 2024",
    content:
      "Added Inter Chain Queries (ICQ) and the pSTAKE Module to launch native liquid staking."
  },
  {
    title: "v3 Upgrade",
    link: "",
    date: "FEB 2024",
    content:
      "Enabled CosmWasm for developers to build and deploy secure smart-contract dApps."
  },
  {
    title: "v2 Upgrade",
    link: "",
    date: "FEB 2024",
    content:
      "Added Authz and feegrant modules to improve user experience and modular development."
  }
];

const UpgradeSection = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1
  };
  let sliderRef: any = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  return (
    <Box bg={"#252424"}>
      <Container maxW={"1440px"} px={"60px"} mb={4} py={"70px"}>
        <Heading
          textAlign={"center"}
          color={"text.headingSemiWhite"}
          fontSize={"44px"}
          mb={"80px"}
        >
          Evolving Constantly. Upgrading Securely
        </Heading>
        <Slider
          {...settings}
          ref={(slider) => {
            sliderRef = slider;
          }}
        >
          {upgradeList.map((item, index) => {
            return (
              <Box key={index} w={"183px"}>
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
                <Heading
                  variant={"secondary"}
                  pr={"12px"}
                  color={"text.headingSemiWhite"}
                  mt={4}
                >
                  {item.date}
                </Heading>
                <Text
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
        <Flex>
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
