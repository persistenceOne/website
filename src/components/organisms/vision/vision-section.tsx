import {
  Box,
  Wrap,
  Flex,
  Heading,
  VStack,
  Container,
  Stack,
  ListItem,
  UnorderedList,
  Text
} from "@chakra-ui/react";
import React from "react";
import Image from "next/image";

const list = [
  {
    imgUrl: "/images/vision/vision1.svg",
    title: "BTCFi will overtake ETH DeFi",
    content:
      "Building for Bitcoin is an opportunity akin to being in the right place at the right time, with the right values."
  },
  {
    imgUrl: "/images/vision/vision2.svg",
    title: "Chain security will always be needed in abundance",
    content:
      "For the first time in our lives, we may witness hyperinflation, making BTC more relevant than ever"
  },
  {
    imgUrl: "/images/vision/vision3.svg",
    title: "Native PoS tokens will exist as liquid staked",
    content:
      "DeFi on Bitcoin today is reminiscent of the early days of DeFi on Ethereum—full of potential and opportunity."
  }
];
const VisionSection = () => {
  return (
    <Container maxW={"1440px"} px={{ base: "20px", md: "100px" }}>
      <Box
        pt={{ base: "32px", md: "60px" }}
        pb={{ base: "32px", md: "100px" }}
        className="aos-init aos-animate py-10"
        data-aos="fade-up"
      >
        <Heading
          textAlign={"center"}
          color={"#633C0D"}
          fontSize={{ base: "26px", md: "48px" }}
          lineHeight={{ base: "32px", md: "72px" }}
          mb={{ base: "20px", md: "40px" }}
        >
          Our Persistent Vision
        </Heading>
        <Wrap spacing={"18px"} direction="row" justify={"center"}>
          {list.map((item, index) => (
            <Flex
              bg={"#fff"}
              w={{ base: "300px", md: "401px" }}
              borderRadius={"22px"}
              direction={"column"}
              key={index}
              boxShadow={"lg"}
            >
              <Box display={"flex"} flexDir={"column"}>
                <Text
                  color={"text.blackLow"}
                  p={{ base: "16px", md: "32px" }}
                  fontSize={{ base: "14px", md: "21px" }}
                  lineHeight={{ base: "24px", md: "31px" }}
                >
                  {item.content}
                </Text>
                <Image
                  src={item.imgUrl}
                  alt={item.title}
                  width={401}
                  height={340}
                  // objectFit="cover"
                />
              </Box>
            </Flex>
          ))}
        </Wrap>
      </Box>
    </Container>
  );
};

export default VisionSection;
