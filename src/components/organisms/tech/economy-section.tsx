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
    <Container maxW={"1140px"} px={"60px"} mb={4}>
      <Box py={"70px"}>
        <Heading
          textAlign={"center"}
          color={"text.headingSemiBlack"}
          fontSize={"44px"}
          mb={"80px"}
        >
          Building Blocks of the
          <br /> Liquid Staking Economy
        </Heading>
        <VStack align={"stretch"} spacing={4}>
          <Stack spacing={2} direction="row">
            <Flex
              p={"32px"}
              bg={"#fff"}
              w={"50%"}
              borderRadius={"20px"}
              direction={"column"}
            >
              <Box m={"auto"}>
                <Image
                  src={"/images/tech-page/note-img0.svg"}
                  alt=""
                  width={290}
                  height={240}
                />
              </Box>
              <Heading variant={"secondary"}>
                First chain to adopt the Liquid Staking Module (LSM) in Cosmos
              </Heading>
              <Text color={"#232325CC"} fontSize={"16px"}>
                First chain to adopt the Liquid Staking Module (LSM) in Cosmo
              </Text>
            </Flex>
            <Box pos={"relative"} w={"50%"}>
              <Flex
                p={"32px"}
                bg={"#fff"}
                borderRadius={"20px"}
                direction={"column"}
              >
                <Box m={"auto"}>
                  <Image
                    src={"/images/tech-page/note-img0.svg"}
                    alt=""
                    width={290}
                    height={240}
                  />
                </Box>
                <Heading variant={"secondary"}>
                  First chain to adopt the Liquid Staking Module (LSM) in Cosmos
                </Heading>
                <Text color={"#232325CC"} fontSize={"16px"}>
                  First chain to adopt the Liquid Staking Module (LSM) in Cosmo
                </Text>
              </Flex>
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
            </Box>
          </Stack>
          <Stack spacing={2} direction="row">
            <Flex
              p={"32px"}
              bg={"#fff"}
              w={"50%"}
              borderRadius={"20px"}
              direction={"column"}
            >
              <Box m={"auto"}>
                <Image
                  src={"/images/tech-page/note-img0.svg"}
                  alt=""
                  width={290}
                  height={240}
                />
              </Box>
              <Heading variant={"secondary"}>
                First chain to adopt the Liquid Staking Module (LSM) in Cosmos
              </Heading>
              <Text color={"#232325CC"} fontSize={"16px"}>
                First chain to adopt the Liquid Staking Module (LSM) in Cosmo
              </Text>
            </Flex>
            <Flex
              p={"32px"}
              bg={"#fff"}
              w={"50%"}
              borderRadius={"20px"}
              direction={"column"}
            >
              <Box m={"auto"}>
                <Image
                  src={"/images/tech-page/note-img0.svg"}
                  alt=""
                  width={290}
                  height={240}
                />
              </Box>
              <Heading variant={"secondary"}>
                First chain to adopt the Liquid Staking Module (LSM) in Cosmos
              </Heading>
              <Text color={"#232325CC"} fontSize={"16px"}>
                First chain to adopt the Liquid Staking Module (LSM) in Cosmo
              </Text>
            </Flex>
          </Stack>
          <Stack spacing={2} direction="row">
            <Flex
              p={"32px"}
              bg={"#fff"}
              w={"50%"}
              borderRadius={"20px"}
              direction={"column"}
            >
              <Box m={"auto"}>
                <Image
                  src={"/images/tech-page/note-img0.svg"}
                  alt=""
                  width={290}
                  height={240}
                />
              </Box>
              <Heading variant={"secondary"}>
                First chain to adopt the Liquid Staking Module (LSM) in Cosmos
              </Heading>
              <Text color={"#232325CC"} fontSize={"16px"}>
                First chain to adopt the Liquid Staking Module (LSM) in Cosmo
              </Text>
            </Flex>
            <Flex
              p={"32px"}
              bg={"#fff"}
              w={"50%"}
              borderRadius={"20px"}
              direction={"column"}
            >
              <Box m={"auto"}>
                <Image
                  src={"/images/tech-page/note-img0.svg"}
                  alt=""
                  width={290}
                  height={240}
                />
              </Box>
              <Heading variant={"secondary"}>
                First chain to adopt the Liquid Staking Module (LSM) in Cosmos
              </Heading>
              <Text color={"#232325CC"} fontSize={"16px"}>
                First chain to adopt the Liquid Staking Module (LSM) in Cosmo
              </Text>
            </Flex>
          </Stack>
        </VStack>
      </Box>
    </Container>
  );
};

export default EconomySection;
