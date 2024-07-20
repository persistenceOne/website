import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
  VStack,
  Container,
  Stack
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import React from "react";
import HomePageStats from "@/components/molecules/page-stats";
import { fetchChainTVL } from "@/pages/api";
import Link from "next/link";
import { numberFormat } from "@/utils/helpers";
import { useAppStore } from "@/store/store";
import { shallow } from "zustand/shallow";
import Image from "next/image";

const HeroSection = () => {
  const [tvl, ibcVolume, transactionCost, transactions, dexterInfo] =
    useAppStore(
      (state) => [
        state.tvl,
        state.ibcVolume,
        state.transactionCost,
        state.transactions,
        state.dexterInfo
      ],
      shallow
    );

  return (
    <Box
      className={"hero-content"}
      bg={"#1d1208"}
      pos={"relative"}
      // pl={"80px"}
      // backgroundImage={"linear-gradient(90deg, #185B64 0%, #114147 35%)"}
      // backgroundPosition="100% 0"
      // backgroundRepeat="no-repeat"
      // backgroundSize={{ base: "45% 90%", md: "45% 90%", lg: "32% 100%" }}
    >
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
          base: "100%", // 0-48em
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
          pl={"80px"}
          display="flex"
        >
          {/*<Container maxW={"1440px"} px={{ base: "20px", md: "80px" }}>*/}
          {/*</Container>*/}
          <Box
            pos={"absolute"}
            top={"0"}
            left={"0"}
            right={"0"}
            height={"100%"}
            // mt={"48px"}
          >
            {/*<Box*/}
            {/*  as='video'*/}
            {/*  controls*/}
            {/*  autoplay*/}
            {/*  src='https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'*/}
            {/*  poster='https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217'*/}
            {/*  alt='Big Buck Bunny'*/}
            {/*  objectFit='contain'*/}
            {/*  sx={{*/}
            {/*    aspectRatio: '16/9'*/}
            {/*  }}*/}
            {/*/>*/}
            <video
              autoPlay={true}
              preload="auto"
              muted={true}
              loop={true}
              src="/images/hero.mp4"
              className="bg-video"
            />
            {/*<Image*/}
            {/*  src={"/images/home-page/hp_hero.svg"}*/}
            {/*  width={315}*/}
            {/*  height={24}*/}
            {/*  alt={"Persistence Logo"}*/}
            {/*/>*/}
            {/*</Box>*/}
          </Box>
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
            <Heading
              variant={"main"}
              color={"text.whiteFull"}
              textAlign={"left"}
              maxW={"728px"}
              fontSize={{ base: "24px", lg: "52px" }}
              lineHeight={{ base: "38px", lg: "70px" }}
              mb={"12px"}
            >
              Bitcoin Interoperability. Powered by Intents.
            </Heading>
            <Text
              textAlign={"left"}
              maxW={"690px"}
              mb={"29px"}
              color={"#FFFFFFCC"}
              fontSize={{ base: "16px", md: "26px" }}
              lineHeight={{ base: "28px", md: "39px" }}
            >
              Fast and no-slippage swaps across Bitcoin L2s. Secured by Bitcoin.
            </Text>
            <Stack direction={{ base: "column", md: "row" }} gap={4}>
              <Link
                href="https://app.persistence.one"
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
                  Learn More
                </Button>
                {/*<Button*/}
                {/*  variant={"secondary"}*/}
                {/*  rightIcon={<ArrowForwardIcon />}*/}
                {/*  h={"46px"}*/}
                {/*  px={"36px"}*/}
                {/*  w={{ base: "100%", md: "auto" }}*/}
                {/*>*/}
                {/*  Learn More*/}
                {/*</Button>*/}
              </Link>
              <Link href="/xprt" passHref>
                <Button
                  w={{ base: "100%", md: "235px" }}
                  h={"46px"}
                  variant={"secondary"}
                  color={"#FFFFFF"}
                  rightIcon={<ArrowForwardIcon />}
                >
                  Partner With Us
                </Button>
                {/*<Button*/}
                {/*  w={{ base: "100%", md: "auto" }}*/}
                {/*  bg={"primary.redHover"}*/}
                {/*  h={"46px"}*/}
                {/*  px={"36px"}*/}
                {/*  borderColor={"primary.red"}*/}
                {/*  rightIcon={<ArrowForwardIcon />}*/}
                {/*  textColor={"#FFFFFF"}*/}
                {/*>*/}
                {/*  Partner With Us*/}
                {/*</Button>*/}
              </Link>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
