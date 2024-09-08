import React from "react";
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
import { useTranslation } from "next-export-i18n";

const FeatureCards = () => {
  const { t } = useTranslation();
  const [isMobile] = useMediaQuery("(max-width: 500px)");
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
          category={t("VISION")}
          imgWidth={210}
          title={t("HOME_SECTION3_CARD1_TITLE")}
          description={t("HOME_SECTION3_CARD1_CONTENT")}
          image={`${commonImagePath}/bitcoin_hand.svg`}
          cta={{
            link: "/vision",
            linkText: t("HOME_SECTION3_CARD1_LINK"),
            isExternal: false
          }}
          type={isMobile ? "vertical" : "horizontal"}
        />

        <FeatureCard
          width="30%"
          height="380px"
          category={t("EXPERIENCE")}
          title={t("HOME_SECTION3_CARD2_TITLE")}
          description={t("HOME_SECTION3_CARD2_CONTENT")}
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
          category={t("TECHNOLOGY")}
          title={t("HOME_SECTION3_CARD3_TITLE")}
          description={t("HOME_SECTION3_CARD3_CONTENT")}
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
            category={t("VALUES")}
            title={t("HOME_SECTION3_CARD4_TITLE")}
            description={t("HOME_SECTION3_CARD4_CONTENT")}
            image={`${commonImagePath}/values.svg`}
            imgWidth={280}
            cta={{
              link: "/values",
              linkText: t("HOME_SECTION3_CARD4_LINK"),
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
              {t("JOIN_COMMUNITY_NOTE")}
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
                {t("JOIN_COMMUNITY")}
              </Button>
            </Link>
          </Flex>
        </VStack>
      </Stack>
    </VStack>
  );
};

export default FeatureCards;
