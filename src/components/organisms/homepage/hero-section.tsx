import {
  Box,
  Button,
  Heading,
  Text,
  Stack,
  useMediaQuery
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import React from "react";
import Link from "next/link";
import TallyForm from "@/components/molecules/tally-form";
import { useTranslation } from "next-export-i18n";

const HeroSection = () => {
  const { t } = useTranslation();
  const [isTablet] = useMediaQuery("(min-width: 768px)");

  return (
    <Box className={"hero-content"} bg={"#1d1208"} pos={"relative"}>
      <Box
        minH={{
          base: "100%", // 0-48em
          md: "400", // 48em-80em,
          lg: "550px", // 48em-80em,
          xl: "700px", // 80em+ 772
          "2xl": "700px"
        }}
        maxH={{
          base: "100%", // 0-48em
          md: "440", // 48em-80em,
          lg: "572px", // 48em-80em,
          xl: "720px", // 80em+ 772
          "2xl": "800px"
        }}
        height={{
          base: "100vh", // 0-48em
          md: "70vh", // 48em-80em,
          lg: "70vh", // 48em-80em,
          xl: "100vh", // 80em+
          "2xl": "100vh"
        }}
        pos={"relative"}
        display={"flex"}
        zIndex={10}
        pt={"122px"}
        maxW={"1440px"}
        mx={"auto"}
      >
        <Box
          // mb={{ base: "20px", md: "60px" }}
          pt={{ base: "40px", md: "50px", xl: "122px" }}
          pl={{ base: "20px", md: "80px" }}
          pr={{ base: "20px", md: "0px" }}
          pb={{ base: "80px", md: "0px" }}
          display="flex"
        >
          <Box
            zIndex={10}
            position={"relative"}
            display={"flex"}
            justifyContent={{
              base: "center",
              md: "center",
              "2xl": "flex-start"
            }}
            flexDir={"column"}
          >
            <Text
              variant={"main"}
              color={"text.whiteFull"}
              textAlign={"left"}
              fontWeight={700}
              maxW={{ base: "400px", lg: "600px", "2xl": "640px" }}
              fontSize={{ base: "28px", md: "26px", lg: "52px" }}
              lineHeight={{ base: "40px", md: "44px", lg: "70px" }}
              mb={{ base: "30px", lg: "12px" }}
            >
              <Text
                as="span"
                color={"#E59636"}
                fontSize={{ base: "36px", md: "26px", lg: "72px" }}
                lineHeight={{ base: "48px", md: "40px", lg: "86px" }}
              >
                {t("HOME_PAGE_HERO_TITLE1")}
              </Text>
              <br />
              {t("HOME_PAGE_HERO_TITLE2")}
            </Text>
            <Text
              textAlign={"left"}
              maxW={{ base: "400px", xl: "580px" }}
              mb={{ base: "42px", lg: "29px" }}
              color={"#FFFFFFCC"}
              fontSize={{ base: "16px", xl: "26px" }}
              lineHeight={{ base: "28px", xl: "39px" }}
            >
              {t("HOME_PAGE_HERO_SUB_TITLE")}
            </Text>
            <Stack
              direction={{ base: "column", md: "row" }}
              gap={{ base: 6, lg: 4 }}
            >
              <Link
                href="https://blog.persistence.one/2024/07/17/bridge-without-bridging-why-btcfi-needs-an-interoperability-solution/"
                target="_black"
                rel="noopenner noreferrer"
                passHref
                className={"inline-block"}
              >
                <Button
                  w={{ base: "100%", md: "193px" }}
                  h={"46px"}
                  variant={"primary"}
                  rightIcon={<ArrowForwardIcon />}
                >
                  {t("LEARN_MORE")}
                </Button>
              </Link>
              <TallyForm page={"home"} />
            </Stack>
          </Box>
          {isTablet ? (
            <Box
              display={{ base: "none", md: "block" }}
              pos={"absolute"}
              top={"0"}
              left={"0"}
              right={"0"}
              height={"100%"}
              // mt={"48px"}
            >
              <video
                autoPlay={true}
                preload="auto"
                muted={true}
                loop={true}
                src="/images/home-page/hero.mp4"
                className="bg-video"
              />
            </Box>
          ) : null}
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
