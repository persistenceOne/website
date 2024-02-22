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
  Stack
} from "@chakra-ui/react";
import React from "react";
import Image from "next/image";

const NotesSection = () => {
  return (
    <Container maxW={"1200px"} px={{ base: "20px", md: "60px" }}>
      <Flex justify={"center"}>
        <Box>
          <Heading
            textAlign={"center"}
            color={"text.blackHigh"}
            fontSize={{ base: "26px", md: "58px" }}
            mb={"6px"}
          >
            Making History With Our Tech.{" "}
          </Heading>
          <Text
            textAlign="center"
            mb={{ base: "22px", md: "60px" }}
            color={"text.blackMid"}
            fontSize={{ base: "16px", md: "22px" }}
          >
            Pushing boundaries when we commit code.
          </Text>
        </Box>
      </Flex>
      <VStack align={"stretch"} spacing={4}>
        <Stack spacing={2} direction={{ base: "column", md: "row" }}>
          <Flex
            p={"32px"}
            bg={"#fff"}
            borderRadius={"20px"}
            direction={"column"}
            boxShadow={"md"}
          >
            <Heading variant={"secondary"} color={"text.blackHigh"}>
              First chain to adopt the Liquid Staking Module (LSM) in Cosmos
            </Heading>
            <Box m={"auto"}>
              <Image
                src={"/images/tech-page/note-img0.svg"}
                alt=""
                width={290}
                height={240}
              />
            </Box>
          </Flex>
          <VStack align={"stretch"} w={{ base: "auto", md: "600px" }}>
            <Box pos={"relative"}>
              <Flex
                p={"32px"}
                bg={"#fff"}
                borderRadius={"20px"}
                boxShadow={"md"}
              >
                <Heading variant={"secondary"} color={"text.blackHigh"}>
                  Building the Restaking Infrastructure for Cosmos
                </Heading>
                <Image
                  src={"/images/tech-page/note-img1.svg"}
                  alt=""
                  width={220}
                  height={177}
                />
              </Flex>
              <Box
                pos={"absolute"}
                top={"-20px"}
                right={"-20px"}
                background={"#C73339"}
                w={"220px"}
                h={"210px"}
                zIndex={-1}
                borderRadius={"20px"}
              />
            </Box>
            <Flex p={"32px"} bg={"#fff"} borderRadius={"20px"} boxShadow={"md"}>
              <Heading variant={"secondary"} color={"text.blackHigh"}>
                Building the Restaking Infrastructure for Cosmos
              </Heading>
              <Image
                src={"/images/tech-page/note-img1.svg"}
                alt=""
                width={220}
                height={177}
              />
            </Flex>
          </VStack>
        </Stack>
        <Stack spacing={4} direction={{ base: "column", md: "row" }}>
          <Box
            pos={"relative"}
            h={"300px"}
            w={{ base: "auto", md: "275px" }}
            bg={"#fff"}
            borderRadius={"20px"}
            boxShadow={"md"}
          >
            <Flex
              p={"32px"}
              justify={"space-between"}
              direction={"column"}
              h={"100%"}
            >
              <Heading variant={"secondary"} color={"text.blackHigh"}>
                Contributing to the Cosmos Hub since 2019
              </Heading>
              <Image
                src={"/images/tech-page/note-img3.svg"}
                alt=""
                width={220}
                height={144}
              />
            </Flex>
            <Box
              pos={"absolute"}
              bottom={"-20px"}
              left={"-20px"}
              background={"#C73339"}
              w={"220px"}
              h={"210px"}
              zIndex={-1}
              borderRadius={"20px"}
            />
          </Box>
          <Flex
            p={"32px"}
            bg={"#fff"}
            h={"300px"}
            w={{ base: "auto", md: "275px" }}
            justify={"space-between"}
            borderRadius={"20px"}
            direction={"column"}
            boxShadow={"md"}
          >
            <Heading variant={"secondary"} color={"text.blackHigh"}>
              Pioneered ATOM liquid staking in 2021
            </Heading>
            <Image
              src={"/images/tech-page/pioneered.svg"}
              alt=""
              width={220}
              height={144}
            />
          </Flex>
          <Flex
            p={"32px"}
            bg={"#fff"}
            h={"300px"}
            w={{ base: "auto", md: "275px" }}
            justify={"space-between"}
            borderRadius={"20px"}
            direction={"column"}
            boxShadow={"md"}
          >
            <Heading variant={"secondary"} color={"text.blackHigh"}>
              One of the first chains to enable IBC
            </Heading>
            <Image
              src={"/images/tech-page/ibc.svg"}
              alt=""
              width={220}
              height={144}
            />
          </Flex>
          <Flex
            p={"32px"}
            bg={"#fff"}
            h={"300px"}
            w={{ base: "auto", md: "275px" }}
            justify={"space-between"}
            borderRadius={"20px"}
            direction={"column"}
            boxShadow={"md"}
          >
            <Heading variant={"secondary"} color={"text.blackHigh"}>
              Audit first, deploy later.
            </Heading>
            <Image
              src={"/images/tech-page/audit.svg"}
              alt=""
              width={220}
              height={144}
            />
          </Flex>
        </Stack>
      </VStack>
      <Spacer h={40} />
    </Container>
  );
};

export default NotesSection;
