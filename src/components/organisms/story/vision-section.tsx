import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  VStack,
  Divider,
  Container,
  Stack,
  ListItem,
  UnorderedList
} from "@chakra-ui/react";
import { ArrowForwardIcon, ArrowRightIcon } from "@chakra-ui/icons";
import React from "react";
import Image from "next/image";
import HomePageStats from "@/components/molecules/homepage-stats";

const VisionSection = () => {
  return (
    <Container maxW={"1440px"} px={"60px"} mb={4}>
      <Box py={"70px"}>
        <Heading
          textAlign={"center"}
          color={"text.headingSemiBlack"}
          fontSize={"44px"}
          mb={"60px"}
        >
          Our Persistent Vision
        </Heading>
        <VStack align={"center"} spacing={4}>
          <Stack spacing={4} direction="row">
            <Flex
              p={"32px"}
              bg={"#fff"}
              w={"400px"}
              borderRadius={"20px"}
              direction={"column"}
            >
              <Box mb={4}>
                <Image
                  src={"/images/tech-page/note-img0.svg"}
                  alt=""
                  width={290}
                  height={240}
                />
              </Box>
              <Heading variant={"secondary"}>
                Proof-of-Stake will become the norm
              </Heading>
              <UnorderedList color={"#232325CC"} fontSize={"16px"}>
                <ListItem>
                  The world will be full of secure and interoperable PoS
                  blockchains with flourishing DeFi, Liquid Staking, and
                  Restaking.{" "}
                </ListItem>
                <ListItem>
                  Staking will become the fixed income of crypto
                </ListItem>
              </UnorderedList>
            </Flex>
            <Flex
              p={"32px"}
              bg={"#fff"}
              w={"400px"}
              borderRadius={"20px"}
              direction={"column"}
            >
              <Box mb={4}>
                <Image
                  src={"/images/tech-page/note-img0.svg"}
                  alt=""
                  width={290}
                  height={240}
                />
              </Box>
              <Heading variant={"secondary"}>
                All roads originate from Cosmos
              </Heading>
              <UnorderedList color={"#232325CC"} fontSize={"16px"}>
                <ListItem>
                  Sovereignty and modularity over monolithic chains.{" "}
                </ListItem>
                <ListItem>
                  The bull case for app chains is the opportunity for building a
                  liquid staking economy on Persistence One.
                </ListItem>
              </UnorderedList>
            </Flex>
            <Flex
              p={"32px"}
              bg={"#fff"}
              w={"400px"}
              borderRadius={"20px"}
              direction={"column"}
            >
              <Box mb={4}>
                <Image
                  src={"/images/tech-page/note-img0.svg"}
                  alt=""
                  width={290}
                  height={240}
                />
              </Box>
              <Heading variant={"secondary"}>
                Native PoS tokens will exist as liquid staked
              </Heading>
              <UnorderedList color={"#232325CC"} fontSize={"16px"}>
                <ListItem>
                  For efficient capital allocation, liquid staked tokens (LSTs)
                  will become the predominant medium of exchange and utility in
                  DeFi
                </ListItem>
                <ListItem>
                  Liquid Staking and Restaking will become the base layer of
                  value in crypto
                </ListItem>
              </UnorderedList>
            </Flex>
          </Stack>
        </VStack>
      </Box>
    </Container>
  );
};

export default VisionSection;
