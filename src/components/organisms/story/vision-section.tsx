import {
  Box,
  Wrap,
  Flex,
  Heading,
  VStack,
  Container,
  Stack,
  ListItem,
  UnorderedList
} from "@chakra-ui/react";
import React from "react";
import Image from "next/image";

const list = [
  {
    imgUrl: "/images/story-page/locker.svg",
    title: "Proof-of-Stake will become the norm",
    content: [
      "The world will be full of secure and interoperable PoS blockchains with flourishing DeFi, Liquid Staking, and Restaking. ",
      "Staking will become the fixed income of crypto"
    ]
  },
  {
    imgUrl: "/images/story-page/roads.svg",
    title: "All roads originate from Cosmos",
    content: [
      "Sovereignty and modularity over monolithic chains.",
      "The bull case for app chains is the opportunity for building a liquid staking economy on Persistence One."
    ]
  },
  {
    imgUrl: "/images/story-page/pos.svg",
    title: "Native PoS tokens will exist as liquid staked",
    content: [
      "Liquid Staked Tokens (LSTs) will become the default medium of exchange and utility in DeFi."
    ]
  }
];
const VisionSection = () => {
  return (
    <Container maxW={"1440px"} px={{ base: "20px", md: "60px", lg: "80px" }}>
      <Box pt={{ base: "32px", md: "60px" }} pb={{ base: "32px", md: "100px" }}>
        <Heading
          textAlign={"center"}
          color={"text.blackHigh"}
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
              <Box mb={4} w={"60%"} mx={"auto"}>
                <Image src={item.imgUrl} alt="" width={290} height={240} />
              </Box>
              <Heading
                variant={"secondary"}
                color={"text.blackEmphasis"}
                fontSize={{ base: "16px", md: "26px" }}
                fontWeight={600}
                lineHeight={"40px"}
                mb={4}
              >
                {item.title}
              </Heading>
              <UnorderedList color={"text.blackLow"} fontSize={"16px"}>
                {item.content.map((contentItem, subIndex) => (
                  <ListItem
                    lineHeight={"27px"}
                    fontSize={{ base: "14px", md: "18px" }}
                    key={subIndex}
                  >
                    {contentItem}
                  </ListItem>
                ))}
              </UnorderedList>
            </Flex>
          ))}
        </Wrap>
      </Box>
    </Container>
  );
};

export default VisionSection;
