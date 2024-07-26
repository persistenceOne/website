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
  VStack,
  SimpleGrid
} from "@chakra-ui/react";
import React from "react";

const xprtUsageCards = [
  {
    title: "Decentralized Governance",
    description:
      "XPRT governance has the final say on major protocol parameter changes, integrations, chain upgrades, community pool spend, incentives. ",
    image: "/images/xprt-page/utility1.svg",
    cta: {
      text: "Learn More",
      link: "https://www.mintscan.io/persistence/tx",
      isExternal: true
    }
  },
  {
    title: "Transaction Fees",
    description:
      "XPRT is used as transaction fees for ~5000+ daily on-chain transactions related to trading or LPing on DEX, XPRT staking or liquid staking, IBC transfers, and more.",
    image: "/images/xprt-page/utility2.svg",
    cta: {
      text: "Participate",
      link: "https://www.mintscan.io/persistence/proposals",
      isExternal: true
    }
  },
  {
    title: "Additional Utility",
    description:
      "XPRT stakers and holders will gain more utility as part of the BTC Interoperability Product, such as trading fee discounts, whitelisting intent solvers, and treasury management.",
    image: "/images/xprt-page/utility3.svg",
    cta: {
      text: "Start Staking",
      link: "https://wallet.keplr.app/chains/persistence?tab=staking",
      isExternal: true
    }
  },
  {
    title: "Chain Security",
    description:
      "XPRT is used to secure the Persistence One blockchain via Proof of Stake. Network participants like validators, BTC stakers (via Babylon’s trustless staking), and XPRT stakers receive staking rewards for securing the chain.",
    image: "/images/xprt-page/utility4.svg",
    cta: {
      text: "Explore",
      link: "https://app.persistence.one/pools",
      isExternal: true
    }
  }
];

const XPRTUsageSection = () => {
  return (
    <Container
      maxW={"1440px"}
      px={{ base: "16px", md: "80px" }}
      pt={{ base: "50px", md: "80px" }}
      pb={"40px"}
    >
      <VStack
        align={"center"}
        className="aos-init aos-animate"
        data-aos="fade-up"
      >
        <Heading
          textAlign={"center"}
          color={"#633C0D"}
          fontSize={{ base: "26px", xl: "48px" }}
          lineHeight={{ base: "32px", xl: "72px" }}
          mb={{ base: "20px", md: "40px" }}
        >
          XPRT Utility
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={"18px"}>
          {/*<Box display={"flex"} gap={"18px"} mt={4}>*/}
          {xprtUsageCards.map((card, index) => (
            <Box
              bg={"#fff"}
              // w={{ base: "100%", md: "50%" }}
              maxW={"631px"}
              borderRadius={"20px"}
              // direction={"column"}
              key={card.title}
              pos={"relative"}
              boxShadow={"md"}
            >
              <Box p={"40px"}>
                <Heading
                  variant={"secondary"}
                  color={"#633C0D"}
                  fontSize={{ base: "22px", xl: "32px" }}
                  lineHeight={{ base: "38px", xl: "48px" }}
                  fontWeight={700}
                  mb={2}
                >
                  {card.title}
                </Heading>
                <Text
                  color={"#633C0D"}
                  fontSize={{ base: "12px", xl: "20px" }}
                  lineHeight={{ base: "22px", xl: "30px" }}
                  fontWeight={400}
                >
                  {card.description}
                </Text>
              </Box>
              <Box>
                <Image
                  src={card.image}
                  alt=""
                  width={{ base: "631px", xl: "631px" }}
                  height={{ base: "180px", xl: "380px" }}
                />
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default XPRTUsageSection;
