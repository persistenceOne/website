import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  VStack
} from "@chakra-ui/react";
import React from "react";

const xprtUsageCards = [
  {
    title: "Transaction Fees",
    description:
      "XPRT is used as transaction fees for the ~5000+ daily on-chain transactions related to XPRT staking, IBC transfers, LSTfi activity on Persistence One, and more.",
    image: "/images/xprt-page/xprt-transaction.svg",
    cta: {
      text: "Learn More",
      link: "https://www.mintscan.io/persistence/tx",
      isExternal: true
    }
  },
  {
    title: "Decentralized Governance",
    description:
      "XPRT governance has the final say on chain upgrades, launching new pools/incentives for the DEX, parameter changes, Community pool spends, and more.",
    image: "/images/xprt-page/xprt-governance.svg",
    cta: {
      text: "Participate",
      link: "https://www.mintscan.io/persistence/proposals",
      isExternal: true
    }
  },
  {
    title: "Chain Security",
    description:
      "XPRT is used to secure the Persistence One blockchain with a PoS mechanism. Network participants like validators, BTC stakers (via Babylon’s Trustless BTC staking), and XPRT stakers receive staking rewards for securing the chain. ",
    image: "/images/xprt-page/xprt-security.svg",
    cta: {
      text: "Start Staking",
      link: "https://wallet.keplr.app/chains/persistence?tab=staking",
      isExternal: true
    }
  },
  {
    title: "DEX Traction",
    description:
      "XPRT is an enabler for traction on the Persistence DEX. It’s the base trading asset and incentivization token.",
    image: "/images/xprt-page/xprt-traction.svg",
    cta: {
      text: "Explore",
      link: "https://app.dexter.zone/pools",
      isExternal: true
    }
  }
];

const XPRTUsageSection = () => {
  return (
    <Container
      maxW={"1400px"}
      px={{ base: "16px", md: "30px" }}
      mt={{ base: "50px", md: "100px" }}
    >
      <VStack align={"center"}>
        <Heading
          variant={"main"}
          fontSize={{ base: "26px", md: "58px" }}
          lineHeight={{ base: "38px", md: "72px" }}
          color={"primary.blackHeading"}
          mb={{ base: "22px", md: "50px" }}
        >
          What is XPRT used for?
        </Heading>
        <Stack
          spacing={4}
          direction={{ base: "column", md: "row" }}
          justify={"space-between"}
          mt={4}
        >
          {xprtUsageCards.map((card, index) => (
            <Flex
              p={"32px"}
              bg={"#fff"}
              w={{ base: "100%", md: "25%" }}
              borderRadius={"20px"}
              direction={"column"}
              key={card.title}
              pos={"relative"}
              boxShadow={"md"}
            >
              <Flex
                mb={12}
                // w={"50%"}
                justify={"center"}
              >
                <Box h={{ base: "240px", md: "240px" }}>
                  <Image
                    src={card.image}
                    alt=""
                    // width={"100%"}
                    // height={"100%"}
                  />
                </Box>
              </Flex>
              <Heading
                variant={"secondary"}
                color={"#423F401"}
                fontSize={16}
                lineHeight={"24px"}
                fontWeight={700}
              >
                {card.title}
              </Heading>
              <Text mt={4} mb={12} fontSize={14} fontWeight={400}>
                {card.description}
              </Text>
              <Link
                href={card.cta.link}
                target={card.cta.isExternal ? "_blank" : ""}
                rel={card.cta.isExternal ? "noopener noreferrer" : ""}
              >
                <Button
                  variant={"link"}
                  rightIcon={<ArrowForwardIcon />}
                  color={"#423F40"}
                  fontSize={16}
                  pos={"absolute"}
                  bottom={0}
                  mb={8}
                  _hover={{
                    color: "primary.red"
                  }}
                >
                  {card.cta.text}
                </Button>
              </Link>
              {index === xprtUsageCards.length - 1 && (
                <Box
                  pos={"absolute"}
                  top={"-20px"}
                  right={"-20px"}
                  background={"#C73339"}
                  w={"220px"}
                  h={"210px"}
                  zIndex={-1}
                  borderRadius={"20px"}
                  display={{ base: "none", md: "block" }}
                />
              )}
              {index === 0 && (
                <Box
                  pos={"absolute"}
                  bottom={"-20px"}
                  left={"-20px"}
                  background={"#C73339"}
                  w={"220px"}
                  h={"210px"}
                  zIndex={-1}
                  borderRadius={"20px"}
                  display={{ base: "none", md: "block" }}
                />
              )}
            </Flex>
          ))}
        </Stack>
      </VStack>
    </Container>
  );
};

export default XPRTUsageSection;
