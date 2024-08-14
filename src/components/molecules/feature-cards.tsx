import React, { useEffect, useState } from "react";
import FeatureCard from "@/components/atoms/feature-card";
import {
  Button,
  Flex,
  Text,
  Stack,
  VStack,
  Link,
  useMediaQuery
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

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
    <VStack gap={4}>
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
          title="BTCFi will overtake ETH DeFi."
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
          category="Experience"
          title="Building since 2019."
          description="Since 2019, Persistence One has built expertise in DeFi, IBC interoperability, and the Persistence Core-1 chain's security. Now, it's time to enter the BTCfi space and tackle Bitcoin interoperability challenges."
          image={`${commonImagePath}/building.svg`}
          imgWidth={115}
          cta={{
            link: "",
            linkText: "",
            isExternal: true
          }}
          type="vertical"
        />
      </Stack>

      <Stack
        gap={4}
        pos={"relative"}
        align={"stretch"}
        direction={{ base: "column", md: "row" }}
      >
        <FeatureCard
          category="Technology"
          className={"aos-init aos-animate"}
          aos={"fade-up-right"}
          title={`Advanced Technology. Streamlined User Journey.`}
          description="Using cutting-edge technology like Cross-chain Intents, Persistence One is set to revolutionize user experience in BTCfi and remove the barriers to BTC movement."
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
          width={{ base: "100%", md: "60%" }}
          align={"stretch"}
          gap={4}
          justify={"space-between"}
        >
          <FeatureCard
            category="Values"
            className={"aos-init aos-animate"}
            aos={"fade-up-left"}
            title={`Humility. Integrity. Patience. Persistence. `}
            description="Persistence is more than just a name. It is our way of being. Learn about our core values, the team, and how to become a Persister."
            image={`${commonImagePath}/values.svg`}
            imgWidth={280}
            cta={{
              link: "/values",
              linkText: "Learn More about Our Values",
              isExternal: false
            }}
          />

          <Flex
            justify={{ base: "center", md: "space-between" }}
            bg={"#E59636"}
            borderRadius={40}
            p={4}
            pl={{ base: 4, md: 8 }}
            flexDir={{ base: "column", md: "row" }}
            align={"center"}
          >
            <Text
              textAlign={{ base: "center", md: "left" }}
              color={"#FCFCFC"}
              fontSize={{ base: "20px", xl: "27px" }}
              lineHeight={{ base: "30px", xl: "40px" }}
              fontWeight={700}
              mb={{ base: "20px", md: "0" }}
            >
              Be a part of the Movement.
            </Text>
            <Link
              width={{ base: "100%", md: "auto" }}
              href={"/values#becomePersister"}
              target="_self"
              rel="noopener noreferrer"
            >
              <Button
                width={{ base: "100%", md: "auto" }}
                px={{ base: "16px", md: "24px" }}
                rightIcon={<ArrowForwardIcon />}
                bg={"#1D1306"}
                value={"ternary"}
                transitionDuration={"0.5s"}
                transitionTimingFunction={"ease"}
                transitionProperty={"all"}
                border={"1px solid #1D1306"}
                _hover={{
                  bg: "#FFFFFF",
                  color: "#1D1306",
                  borderColor: "#1D1306",
                  transition: "0.5s"
                }}
                color="#FFFFFF"
              >
                Join the Community
              </Button>
            </Link>
          </Flex>
        </VStack>
      </Stack>
    </VStack>
  );
};

export default FeatureCards;
