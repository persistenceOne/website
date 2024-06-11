import Icon from "@/components/molecules/Icon";
import {
  Box,
  Heading,
  Container,
  Text,
  Flex,
  Stack,
  VStack
} from "@chakra-ui/react";
import React, { Component, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";

const list: any = {
  item0: [
    {
      imgUrl: "/images/tech-page/tech-ibc.svg",
      imgWidth: "315px",
      imgHeight: "297px",
      title: "Interblockchain Communication Protocol (IBC)",
      content:
        "Persistence One is connected to 54 Cosmos app chains to trustlessly communicate and transfer tokens like BTC and more."
    },
    {
      imgUrl: "/images/tech-page/tech-ica.svg",
      imgWidth: "460px",
      imgHeight: "287px",
      title: "Interchain Accounts (ICA)",
      content:
        "Chain Abstraction enables cross-chain execution on chains like Neutron right from Persistence One."
    }
  ],
  item1: [
    {
      imgUrl: "/images/tech-page/tech-building-blocks-lsm.svg",
      imgWidth: "252px",
      imgHeight: "235px",
      title: "Liquid Staking Module (LSM)",
      content:
        "LSTfi applications like instant transfer of staked XPRT tokens between wallets are possible only on Persistence One."
    },
    {
      imgUrl: "/images/tech-page/trustless-btc.svg",
      imgWidth: "249px",
      imgHeight: "235px",
      title: "Trustless Bitcoin Staking Protocol via Babylon",
      content:
        "Persistence One will integrate with Babylon’s Trustless BTC staking Protocol to enhance the chain security."
    }
  ],
  item2: [
    {
      imgUrl: "/images/tech-page/tech-cometbft.svg",
      imgWidth: "221px",
      imgHeight: "235px",
      title: "CometBFT Consensus",
      content:
        "Short block times and instant finality handles the transaction demand on Persistence One while upholding security."
    },
    {
      imgUrl: "/images/tech-page/tech-cosmwasm.svg",
      imgWidth: "225px",
      imgHeight: "235px",
      title: "CosmWasm",
      content:
        "Smart contracts can be deployed on Persistence One in a fast, semi-permissioned, and interoperable manner."
    }
  ]
};

const EconomySection = () => {
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
    <Container maxW={"1340px"} px={{ base: "20px", md: "100px" }}>
      <Box py={"70px"}>
        <Heading
          textAlign={"center"}
          color={"text.blackHeading"}
          fontSize={{ base: "26px", md: "58px" }}
          mb={{ base: "32px", md: "60px" }}
        >
          Building Blocks of
          <br /> Persistence One
        </Heading>
        <VStack align={"stretch"} spacing={"28px"}>
          {Object.keys(list).map((key, index) => (
            <Stack
              spacing={"28px"}
              direction={{ base: "column", md: "row" }}
              align={"stretch"}
              key={index}
            >
              <Flex
                p={"32px"}
                bg={"#fff"}
                w={{ base: "100%", md: "50%" }}
                borderRadius={"20px"}
                direction={"column"}
                boxShadow={"md"}
              >
                <Box
                  mx={"auto"}
                  px={"20px"}
                  mb={"20px"}
                  w={{ base: "100%", md: list[key][0].imgWidth }}
                  h={{ base: "150px", md: list[key][0].imgHeight }}
                  position={"relative"}
                >
                  <Image src={list[key][0].imgUrl} alt="" fill sizes="100vw" />
                </Box>
                <Heading
                  variant={"secondary"}
                  color={"text.blackEmphasis"}
                  mb={"12px"}
                  fontSize={{ base: "16px", md: "20px" }}
                  fontWeight={600}
                >
                  {list[key][0].title}
                </Heading>
                <Text color={"text.blackLow"} fontSize={"16px"}>
                  {list[key][0].content}
                </Text>
              </Flex>
              <Flex pos={"relative"} w={{ base: "100%", md: "50%" }}>
                <Flex
                  p={"32px"}
                  bg={"#fff"}
                  borderRadius={"20px"}
                  direction={"column"}
                  boxShadow={"md"}
                >
                  <Box
                    mx={"auto"}
                    px={"20px"}
                    mb={"20px"}
                    w={{ base: "100%", md: list[key][1].imgWidth }}
                    h={{
                      base: list[key][1].imgHeight,
                      md: list[key][1].imgHeight
                    }}
                    position={"relative"}
                  >
                    <Image
                      src={list[key][1].imgUrl}
                      alt=""
                      fill
                      sizes="100vw"
                    />
                  </Box>
                  <Heading
                    variant={"secondary"}
                    color={"text.blackEmphasis"}
                    mb={"12px"}
                    fontSize={{ base: "16px", md: "20px" }}
                    fontWeight={600}
                  >
                    {list[key][1].title}
                  </Heading>
                  <Text color={"text.blackLow"} fontSize={"16px"}>
                    {list[key][1].content}
                  </Text>
                </Flex>
                {index === 0 ? (
                  <Box
                    pos={"absolute"}
                    top={"-20px"}
                    right={"-20px"}
                    background={"#C73339"}
                    w={"340px"}
                    h={"340px"}
                    zIndex={-1}
                    borderRadius={"20px"}
                    display={{ base: "none", md: "block" }}
                  />
                ) : (
                  ""
                )}
              </Flex>
            </Stack>
          ))}
        </VStack>
      </Box>
    </Container>
  );
};

export default EconomySection;
