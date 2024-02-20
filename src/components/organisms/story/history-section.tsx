import {
  Box,
  Heading,
  Container,
  Text,
  Flex,
  ListItem,
  UnorderedList
} from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const list = [
  {
    title: "v10.4 Upgrade",
    link: "",
    date: "FEB 2024",
    content:
      "Launched secure and decentralized DYDX liquid staking on Persistence One."
  },
  {
    title: "v10 Upgrade",
    link: "",
    date: "FEB 2024",
    content:
      "Improved on-chain security monitoring and simplified the XPRT governance process."
  },
  {
    title: "v9 Upgrade",
    link: "",
    date: "FEB 2024",
    content:
      "Enabled support for the Liquid Staking Module (LSM) to convert natively staked ATOM in liquid staked stkATOM in a single click without 21-day unbonding."
  }
];
const HistorySection = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: any) => (
      <div className={"slick-dots"}>
        <ul style={{ margin: "0px", color: "red" }}> {dots} </ul>
      </div>
    )
  };
  return (
    <Container maxW={"1140px"} px={{ base: "20px", md: "60px" }} mb={4}>
      <Box py={"70px"}>
        <Heading
          textAlign={"center"}
          color={"text.blackHigh"}
          fontSize={{ base: "26px", md: "58px" }}
          mb={"6px"}
        >
          Brief History of Persistence One
        </Heading>
        <Text
          textAlign="center"
          mb={{ base: "22px", md: "50px" }}
          color={"text.blackMid"}
          fontSize={{ base: "16px", md: "22px" }}
        >
          Tracing the Evolution of Persistence One: From Genesis to Innovation
        </Text>
        <Slider {...settings} className={"history-slider"}>
          {list.map((item, index) => {
            return (
              <Box
                p={{ base: "24px", md: "60px" }}
                bg={"#FEFEFE"}
                borderRadius={"20px"}
              >
                <Flex w={"100%"} direction={{ base: "column", md: "row" }}>
                  <Box w={{ base: "100%", md: "40%" }}>
                    <Image
                      src={"/images/tech-page/note-img0.svg"}
                      alt=""
                      width={290}
                      height={240}
                    />
                  </Box>
                  <Box w={{ base: "100%", md: "60%" }}>
                    <Heading
                      variant={"secondary"}
                      fontSize={{ base: "18px", mb: "36px" }}
                      fontWeight={600}
                      color={"text.blackMid"}
                      mb={{ base: 4, md: 8 }}
                    >
                      Early days in Cosmos
                    </Heading>
                    <UnorderedList color={"text.blackMid"} fontSize={"16px"}>
                      <ListItem mb={4}>
                        The world will be full of secure and interoperable PoS
                        blockchains with flourishing DeFi, Liquid Staking, and
                        Restaking.{" "}
                      </ListItem>
                      <ListItem mb={4}>
                        Staking will become the fixed income of crypto
                      </ListItem>
                    </UnorderedList>
                  </Box>
                </Flex>
              </Box>
            );
          })}
        </Slider>
      </Box>
    </Container>
  );
};

export default HistorySection;
