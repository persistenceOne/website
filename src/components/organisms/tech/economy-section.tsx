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
      imgUrl: "/images/tech-page/inter-blockchain.svg",
      title: "Interblockchain Communication Protocol (IBC)",
      content:
        "Persistence One is connected to 43 cosmos app chains to trustlessly communicate, transfer tokens, liquid stake and restake tokens."
    },
    {
      imgUrl: "/images/tech-page/interchain-accounts.svg",
      title: "Interchain Accounts (ICA)",
      content:
        "Chain Abstraction enables cross-chain execution on chains like Neutron right from Persistence One."
    }
  ],
  item1: [
    {
      imgUrl: "/images/tech-page/liquidstake.svg",
      title: "Liquid Staking Module (LSM)",
      content:
        "LSTfi applications like instant transfer of staked XPRT tokens between wallets are possible only on Persistence One."
    },
    {
      imgUrl: "/images/tech-page/restake.svg",
      title: "Restaking Module",
      content:
        "Restake anything on Persistence One like LSTs, Stablecoins, and LP tokens of leading DEXs to improve chain security and earn extra yields. "
    }
  ],
  item2: [
    {
      imgUrl: "/images/tech-page/cometbft.svg",
      title: "CometBFT Consensus",
      content:
        "Short block times and instant finality handles the transaction demand on Persistence One while upholding security."
    },
    {
      imgUrl: "/images/tech-page/cosmwasm.svg",
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
    <Container maxW={"1140px"} px={{ base: "20px", md: "60px" }}>
      <Box py={"70px"}>
        <Heading
          textAlign={"center"}
          color={"text.blackHigh"}
          fontSize={{ base: "26px", md: "58px" }}
          mb={{ base: "32px", md: "60px" }}
        >
          Building Blocks of the
          <br /> Liquid Staking Economy
        </Heading>
        <VStack align={"stretch"} spacing={4}>
          {Object.keys(list).map((key, index) => (
            <Stack
              spacing={2}
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
                  m={"auto"}
                  p={"20px"}
                  style={{
                    width: "350px",
                    height: "200px",
                    position: "relative"
                  }}
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
                    m={"auto"}
                    style={{
                      width: "350px",
                      height: "200px",
                      position: "relative"
                    }}
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
