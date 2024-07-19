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
  VStack,
  useMediaQuery
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { MINTSCAN_ECOSYSTEM_LINK } from "@/utils/config";
import Image from "next/image";

const FeatureCards = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 500px)");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const commonImagePath = "/images/home-page/why-persistence";
  return (
    <VStack gap={4} mt={16}>
      <Stack
        gap={4}
        pos={"relative"}
        align={"stretch"}
        direction={{ base: "column", md: "row" }}
      >
        <FeatureCard
          width="70%"
          height="380px"
          category="Vision"
          aos={"fade-down-right"}
          className={"aos-init aos-animate"}
          imgWidth={210}
          title="BTCFi will overtake ETH DeFi"
          description="Learn about our vision and belief in the Bitcoinization of modern-day finance."
          image={`${commonImagePath}/bitcoin_hand.svg`}
          cta={{
            link: "/vision",
            linkText: "Learn More about Our Vision",
            isExternal: false
          }}
          type={isMobile ? "vertical" : "horizontal"}
        />

        <FeatureCard
          width="30%"
          height="380px"
          aos={"fade-down-left"}
          className={"aos-init aos-animate"}
          category="Ecosystem"
          title="Building since 2019"
          description="Since 2019, Persistence One has been leveraging its
          expertise in DeFi, IBC interoperability, and the Persistence Core-1 Chain's security to tackle the challenge of Bitcoin interoperability in BTCfi."
          image={`${commonImagePath}/building.svg`}
          imgWidth={196}
          cta={{
            link: "",
            linkText: "",
            isExternal: true
          }}
          type="vertical"
        />
        {/*<Box*/}
        {/*  pos={"absolute"}*/}
        {/*  top={"-20px"}*/}
        {/*  right={"-20px"}*/}
        {/*  background={"#252424"}*/}
        {/*  w={"220px"}*/}
        {/*  h={"210px"}*/}
        {/*  zIndex={-1}*/}
        {/*  borderRadius={"20px"}*/}
        {/*  opacity={isVisible ? 1 : 0}*/}
        {/*  transition="opacity 1s"*/}
        {/*/>*/}
      </Stack>

      <Stack
        align={"stretch"}
        gap={4}
        pos={"relative"}
        direction={{ base: "column", md: "row" }}
      >
        <FeatureCard
          category="Technology"
          className={"aos-init aos-animate"}
          aos={"fade-up-right"}
          title={`Advanced Technology. Streamlined User Journey.`}
          description="SUsing cutting-edge technology like Cross-chain Intents, Persistence One is set to revolutionize user experience in BTCfi and remove the barriers to BTC movement."
          image={`${commonImagePath}/tech.svg`}
          imgWidth={280}
          cta={{
            link: "",
            linkText: "",
            isExternal: false
          }}
          type="vertical-bottom"
          width="40%"
          height="450px"
        />

        <VStack
          width={"60%"}
          align={"stretch"}
          gap={4}
          justify={"space-between"}
        >
          <FeatureCard
            category="People"
            className={"aos-init aos-animate"}
            aos={"fade-up-left"}
            title={`Humility. Integrity. Patience. Persistence. `}
            description="Persistence is more than just a name. It is our way of being. Learn about our core values, the team, and how to become a Persister."
            image={`${commonImagePath}/values.svg`}
            imgWidth={280}
            cta={{
              link: "/people",
              linkText: "Learn More about Our People",
              isExternal: false
            }}
          />

          <Flex
            justify={"space-between"}
            bg={"#E59636"}
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
              Join the Movement
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
                Be Part of the Movement
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
