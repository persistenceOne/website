import React, { useEffect, useState } from "react";
import FeatureCard, {
  FeatureCardInterface
} from "@/components/atoms/feature-card";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Text,
  Stack,
  VStack
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { MINTSCAN_ECOSYSTEM_LINK } from "@/utils/config";
import Image from "next/image";

const FeatureCards = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <VStack gap={4} mt={16}>
      <Stack
        gap={4}
        pos={"relative"}
        align={"stretch"}
        direction={{ base: "column", md: "row" }}
      >
        <FeatureCard
          width="60%"
          height="380px"
          category="Vision"
          imgWidth={210}
          title="BTCFi will catch up and overtake ETH DeFi"
          description="Learn about our vision and the belief in the Bitcoinization of crypto."
          image="/images/home-page/story.svg"
          cta={{
            link: "/vision",
            linkText: "Explore Our Vision",
            isExternal: false
          }}
        />

        <FeatureCard
          width="40%"
          height="380px"
          category="Ecosystem"
          title="Our partners in the journey"
          description="Explore the dApps, 15+ DeFi partners, 100 validators, and more that contribute to the ecosystem."
          image="/images/home-page/ecosystem.svg"
          imgWidth={196}
          cta={{
            link: MINTSCAN_ECOSYSTEM_LINK,
            linkText: "Explore Ecosystem",
            isExternal: true
          }}
          type="vertical"
        />
        <Box
          pos={"absolute"}
          top={"-20px"}
          right={"-20px"}
          background={"#252424"}
          w={"220px"}
          h={"210px"}
          zIndex={-1}
          borderRadius={"20px"}
          opacity={isVisible ? 1 : 0}
          transition="opacity 1s"
        />
      </Stack>

      <Stack
        align={"stretch"}
        gap={4}
        pos={"relative"}
        direction={{ base: "column", md: "row" }}
      >
        <FeatureCard
          category="Technology"
          title={`Technically Superb. Superbly Powerful.`}
          description="See how Persistence One offers a technically advanced, secure, and robust infrastructure for Bitcoin and Liquid Staked Tokens trading."
          image="/images/home-page/tech.svg"
          imgWidth={280}
          cta={{
            link: "/tech",
            linkText: "Explore Tech",
            isExternal: false
          }}
          type="vertical-bottom"
          width="40%"
          height="450px"
        />

        <VStack align={"stretch"} gap={4} justify={"space-between"}>
          <FeatureCard
            category="People"
            title={`Humility. Integrity. Patience. Persistence.`}
            description="Understand our core values and learn how to become a Persister and contribute."
            image="/images/home-page/people.svg"
            imgWidth={280}
            cta={{
              link: "/people",
              linkText: "Explore People",
              isExternal: false
            }}
          />

          <Flex
            justify={"space-between"}
            bg={"#252424"}
            borderRadius={40}
            p={4}
            pl={8}
            align={"center"}
          >
            <Text
              color={"#FCFCFC"}
              fontSize={{ base: "16px", md: "27px" }}
              fontWeight={700}
            >
              Yields. TVL. Traction.
            </Text>
            <Link
              href={"https://stats.persistence.one"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                px={{ base: "16px", md: "24px" }}
                rightIcon={<ArrowForwardIcon />}
                variant={"secondary"}
              >
                View Stats
              </Button>
            </Link>
          </Flex>
        </VStack>
      </Stack>

      {/* <Stack
        gap={4}
        pos={"relative"}
        align={"stretch"}
        direction={{ base: "column", md: "row" }}
      >
        <FeatureCard
          width="70%"
          height="380px"
          category="Roadmap"
          title="Building in Cosmos since 2019."
          description="From being one of the first Cosmos app chains to enable IBC, CosmWasm, and Liquid Staking Module (LSM) to deploying pSTAKE Finance and Dexter and bringing Restaking to Cosmos, Persistence One’s development pushes the boundaries of the Proof-of-Stake landscape."
          image="/images/home-page/roadmap.svg"
          imgWidth={366}
          cta={{
            link: "/story",
            linkText: ""
          }}
        />
        <Box
          pos={"absolute"}
          bottom={"-20px"}
          left={"-20px"}
          background={"#C73339"}
          w={"220px"}
          h={"210px"}
          zIndex={-1}
          borderRadius={"20px"}
          opacity={isVisible ? 1 : 0}
          transition="opacity 1s"
        /> */}
      {/* <FeatureCard
          width="30%"
          height="380px"
          category=""
          title=""
          description=""
          imgWidth={319}
          image="/images/liquidity.svg"
          cta={{
            link: "/xprt",
            linkText: ""
          }}
          type="vertical"
          cardType={"img"}
        /> */}
      {/* </Stack> */}
    </VStack>
  );
};

export default FeatureCards;
