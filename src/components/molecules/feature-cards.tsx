import React from "react";
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

const FeatureCards = () => {
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
          category="Story"
          title="Proof-of-Stake is Everything. Everything will be Restaked."
          description="Learn about our vision, history, and why we foresee a future where liquid staking and restaking becomes the base value layer in crypto."
          image="/images/tech-page/note-img0.svg"
          cta={{
            link: "/story",
            linkText: "Explore Our Story"
          }}
        />

        <FeatureCard
          width="40%"
          height="380px"
          category="Ecosystem"
          title="Persistence One."
          description="Explore the dApps, 15+ DeFi partners, 100 validators, and more that contribute to the One ecosystem for staking, liquid staking, and restaking. "
          image="/images/ecosystem.svg"
          cta={{
            link: "/xprt",
            linkText: "Explore Ecosystem"
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
          title={`Technically Super. Superbly Powerful.`}
          description="See how Persistence One offers a technically advanced, secure, and robust infrastructure for modular and smart-contract dApps."
          image="/images/robot-arm.svg"
          cta={{
            link: "/tech",
            linkText: "Explore Tech"
          }}
          type="vertical"
          width="40%"
          height="450px"
        />

        <VStack align={"stretch"} gap={4}>
          <FeatureCard
            category="People"
            title="Humility. Integrity. Patience. Persistence."
            description="Understand our core values and learn how to become a Persister and contribute."
            image="/images/cylinders.svg"
            cta={{
              link: "/people",
              linkText: "Explore People"
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
              Yields. TVL. Traction
            </Text>
            <Link
              href={"https://defillama.com/chain/Persistence"}
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

      <Stack
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
          description="Skim through the biggest milestones of the past 4 years of building out our vision and what’s next."
          image="/images/tech-page/note-img1.svg"
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
        />
        <FeatureCard
          width="30%"
          height="380px"
          category=""
          title=""
          description=""
          image="/images/liquidity.svg"
          cta={{
            link: "/xprt",
            linkText: ""
          }}
          type="vertical"
          cardType={"img"}
        />
      </Stack>
    </VStack>
  );
};

export default FeatureCards;
