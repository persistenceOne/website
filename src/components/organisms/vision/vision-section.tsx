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
    imgUrl: "/images/story-page/story-pos.svg",
    title: "BTCFi will overtake ETH DeFi",
    content:
      "Bitcoinization will rule the DeFi sector. Persistence One will lead the charge for BTCfi and all BTC assets will be traded on Persistence One. "
  },
  {
    imgUrl: "/images/story-page/story-roads.svg",
    title: "Chain security will always be needed in abundance",
    content:
      "BTC Shared Security will become the most reliable source of safeguarding PoS chains without overpaying for it with the native token inflation."
  },
  {
    imgUrl: "/images/story-page/story-native-pos.svg",
    title: "Native PoS tokens will exist as liquid staked",
    content:
      "Liquid Staked Tokens (LSTs) will become the default capital-efficient medium of exchange and utility in DeFi."
  }
];
const VisionSection = () => {
  return (
    <Container maxW={"1440px"} px={{ base: "20px", md: "80px" }}>
      <Box pt={{ base: "32px", md: "60px" }} pb={{ base: "32px", md: "100px" }}>
        <Heading
          textAlign={"center"}
          color={"text.blackHeading"}
          fontSize={{ base: "26px", md: "58px" }}
          mb={{ base: "32px", md: "60px" }}
        >
          Our Persistent Vision
        </Heading>
        <Wrap spacing={"22px"} direction="row" justify={"center"}>
          {list.map((item, index) => (
            <Flex
              p={{ base: "16px", md: "30px" }}
              bg={"#fff"}
              w={{ base: "300px", md: "400px" }}
              borderRadius={"20px"}
              direction={"column"}
              key={index}
              boxShadow={"lg"}
            >
              <Box
                mb={4}
                w={{ base: "100%", md: "60%" }}
                h={"220px"}
                mx={"auto"}
                pos={"relative"}
              >
                <Image
                  src={item.imgUrl}
                  alt={item.title}
                  layout="fill"
                  // objectFit="cover"
                />
              </Box>
              <Heading
                variant={"secondary"}
                color={"text.blackEmphasis"}
                fontSize={{ base: "20px", md: "24px" }}
                fontWeight={600}
                lineHeight={"40px"}
                mb={4}
              >
                {item.title}
              </Heading>
              <Text
                color={"text.blackLow"}
                lineHeight={"27px"}
                fontSize={{ base: "14px", md: "16px" }}
              >
                {item.content}
              </Text>
            </Flex>
          ))}
        </Wrap>
      </Box>
    </Container>
  );
};

export default VisionSection;
