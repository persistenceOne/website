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
  title: string;
  content: {
    [key in string]: any;
  };
}

const list: ListProps[] = [
  {
    imgUrl: "/images/story-page/clock.svg",
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
          <b>Pivoted to building a liquid staking economy</b> after the
          participation of millions of in staked tokens for the XPRT token
          StakeDrop launch in 2020.
        </Text>
      )
    }
  },
  {
    imgUrl: "/images/story-page/block.svg",
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
          support for ATOM, OSMO, and DYDX liquid staking live.
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
    imgUrl: "/images/liquidity.svg",
    title: "Liquid Staking Economy ",
    content: {
      item0: (
        <Text>
          Today, Persistence One has 54,000+ on-chain accounts with{" "}
          <b>5000+ daily transactions and $12M+ TVL.</b>
        </Text>
      ),
      item1: (
        <Text>
          The{" "}
          <b>
            Persistence One Ecosystem is ever expanding by partnering with
            leading projects
          </b>{" "}
          like the Cosmos Hub, Kujira, Neutron, Agoric, Shade Protocol, and more
          and diversifying XPRT liquidity in Cosmos.
        </Text>
      ),
      item2: (
        <Text>
          The <b>next big leap is bringing the Restaking</b> of LSTs,
          Stablecoins, and LP tokens on Persistence One.
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
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: any) => (
      <div className={"slick-dots"}>
        <ul style={{ margin: "0px", color: "red" }}> {dots} </ul>
      </div>
    )
  };
  return (
    <Container maxW={"1400px"} px={{ base: "20px", md: "60px" }}>
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
                key={item.title}
                p={{ base: "24px", md: "60px" }}
                bg={"#FFF"}
                borderRadius={"20px"}
                boxShadow={"md"}
              >
                <Flex w={"100%"} direction={{ base: "column", md: "row" }}>
                  <Box w={{ base: "100%", md: "40%" }}>
                    <Image src={item.imgUrl} alt="" width={290} height={240} />
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
