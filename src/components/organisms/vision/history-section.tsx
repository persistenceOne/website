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

interface ListProps {
  imgUrl: string;
  imgWidth?: number;
  imgHeight?: number;
  title: string;
  content: {
    [key in string]: any;
  };
}

const list: ListProps[] = [
  {
    imgUrl: "/images/story-page/story-early-days.svg",
    imgWidth: 320,
    imgHeight: 200,
    title: "Early days in Cosmos",
    content: {
      item0: (
        <Text>
          Started out building <b>Real World Assets</b> (RWAs) use cases.
        </Text>
      ),
      item1: (
        <Text>
          <b> Participated in early Cosmos community activities</b> like Game of
          Zones and Game of Stakes in 2019.
        </Text>
      ),
      item2: (
        <Text>
          <b>Pivoted to building a Liquid Staking economy</b> after the
          participation of millions of dollars in staked tokens for the XPRT
          token StakeDrop launch in 2020.
        </Text>
      )
    }
  },
  {
    imgUrl: "/images/story-page/story-building-blocks.svg",
    imgWidth: 320,
    imgHeight: 200,
    title: "Building blocks of LSTfi ",
    content: {
      item0: (
        <Text>
          pSTAKE was born and <b>launched stkATOM on Ethereum</b> in mid-2021.
        </Text>
      ),
      item1: (
        <Text>
          <b>pSTAKE launched natively on Persistence One in early 2023</b> with
          support for ATOM, OSMO, and DYDX Liquid Staking live.
        </Text>
      ),
      item2: (
        <Text>
          <b>Dexter launched in mid-2023</b> on Persistence One to build
          liquidity and offer yields for LSTs, Stablecoins, and other tokens.
        </Text>
      )
    }
  },
  {
    imgUrl: "/images/story-page/story-economy.svg",
    imgWidth: 250,
    imgHeight: 200,
    title: "BTC Trading and Security",
    content: {
      item0: (
        <Text>
          Integrating with <b>Babylon</b> to adopt Bitcoin Shared Security
        </Text>
      ),
      item1: (
        <Text>
          Launched <b>WBTC/XPRT</b> pool on the Persistence DEX and Osmosis
        </Text>
      ),
      item2: (
        <Text>
          Upcoming launch of additionally DeFi functionalities focused around
          BTC assets.
        </Text>
      )
    }
  }
];
const HistorySection = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: any) => (
      <div className={"slick-dots"}>
        <ul style={{ margin: "0px", color: "red" }}> {dots} </ul>
      </div>
    )
  };
  return (
    <Container maxW={"1440px"} px={{ base: "20px", md: "100px" }}>
      <Box py={"70px"}>
        <Heading
          textAlign={"center"}
          color={"text.blackHeading"}
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
                key={item.title}
                p={{ base: "24px", md: "60px" }}
                bg={"#FFF"}
                borderRadius={"20px"}
                boxShadow={"md"}
                h={{ base: "680px", md: "420px" }}
              >
                <Flex
                  w={"100%"}
                  direction={{ base: "column", md: "row" }}
                  justify={"center"}
                  align={{ base: "center", md: "flex-start" }}
                >
                  <Box w={{ base: "50%", md: "40%" }}>
                    <Image
                      src={item.imgUrl}
                      alt=""
                      width={item.imgWidth}
                      height={item.imgHeight}
                    />
                  </Box>
                  <Box w={{ base: "100%", md: "60%" }}>
                    <Heading
                      variant={"secondary"}
                      fontSize={{ base: "18px", md: "36px" }}
                      fontWeight={600}
                      lineHeight={{ base: "30px", md: "54px" }}
                      color={"text.blackMid"}
                      mb={{ base: 4, md: 8 }}
                    >
                      {item.title}
                    </Heading>
                    <UnorderedList color={"text.blackMid"} fontSize={"16px"}>
                      {Object.keys(item.content).map((key, subIndex) => (
                        <ListItem
                          mb={4}
                          lineHeight={"27px"}
                          fontSize={{ base: "14px", md: "18px" }}
                          key={subIndex}
                        >
                          {item.content[key]}
                        </ListItem>
                      ))}
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
