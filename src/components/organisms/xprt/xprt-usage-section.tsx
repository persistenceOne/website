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
    image: "/images/xprt-page/transaction-fees.svg",
    cta: {
      text: "Learn more",
      link: "/xprt",
      isExternal: false
    }
  },
  {
    title: "Chain Security",
    description:
      "XPRT is used as economic security of the Persistence One blockchain with a Proof-of-Stake mechanism. Network participants like validators and delegators stake XPRT to earn staking rewards.",
    image: "/images/xprt-page/transaction-fees.svg",
    cta: {
      text: "Start Staking",
      link: "/xprt",
      isExternal: false
    }
  },
  {
    title: "Decentralized Governance",
    description:
      "Persistence One is governed by Persisters with XPRT. On-chain governance has the final say on chain upgrades, community pool spends, dApp launches and improvements, and more.",
    image: "/images/xprt-page/transaction-fees.svg",
    cta: {
      text: "Participate",
      link: "/xprt",
      isExternal: false
    }
  },
  {
    title: "On-chain Traction",
    description:
      "XPRT is an enabler for traction and the base asset and incentivizing tool on Dexter, the home of on-chain liquidity. Any dApps deployed on Persistence One in the future can be built with XPRT taking center stage.",
    image: "/images/xprt-page/transaction-fees.svg",
    cta: {
      text: "Explore",
      link: "/xprt",
      isExternal: false
    }
  }
];

const XPRTUsageSection = () => {
  return (
    <Container maxW={"1440px"} px={"40px"}>
      <VStack align={"center"}>
        <Heading variant={"main"} fontSize={58}>
          What is XPRT used for?
        </Heading>
        <Text>Lorem ipsum dolor sit amet consectetur.</Text>
        <Stack spacing={4} direction="row" justify={"space-between"} mt={4}>
          {xprtUsageCards.map((card, index) => (
            <Flex
              p={"32px"}
              bg={"#fff"}
              w={"25%"}
              borderRadius={"20px"}
              direction={"column"}
              key={card.title}
              pos={"relative"}
            >
              <Box mb={4}>
                <Image src={card.image} alt="" width={290} height={240} />
              </Box>
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
              <Link href={card.cta.link}>
                <Button
                  variant={"link"}
                  rightIcon={<ArrowForwardIcon />}
                  color={"#423F40"}
                  fontSize={16}
                  pos={"absolute"}
                  bottom={0}
                  mb={8}
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