import {
  Box,
  Flex,
  Heading,
  Spacer,
  Text,
  VStack,
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
            color={"text.blackHeading"}
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
        <Stack spacing={4} direction={{ base: "column", md: "row" }}>
          <Flex
            p={"32px"}
            px={4}
            bg={"#DE5656"}
            borderRadius={"20px"}
            direction={{ base: "column", md: "row" }}
            // direction={"column"}
            boxShadow={"md"}
            w={{ base: "100%", md: "50%" }}
            pos={"relative"}
          >
            <Box position={"absolute"} top={4} left={4} w={"100%"} h={"100%"}>
              <Image
                src="/images/stars-black.svg"
                alt=""
                width={50}
                height={144}
              />
            </Box>
            <Heading
              variant={"secondary"}
              color={"text.headingWhite"}
              fontWeight={600}
              fontSize={20}
              mt={4}
              w={{ base: "100%", md: "50%" }}
              lineHeight={"32px"}
            >
              First chain to adopt the Liquid Staking Module (LSM) in Cosmos
            </Heading>
            <Box m={"auto"} w={{ base: "40%", md: "50%" }}>
              <Image
                src={"/images/tech-page/tech-lsm.svg"}
                alt=""
                width={182}
                height={240}
              />
            </Box>
          </Flex>
          <VStack align={"stretch"} w={{ base: "auto", md: "50%" }} spacing={4}>
            <Box pos={"relative"}>
              <Flex
                p={"32px"}
                px={4}
                bg={"#fff"}
                borderRadius={"20px"}
                boxShadow={"md"}
                display={{ base: "block", md: "flex" }}
                pos={"relative"}
              >
                <Box
                  position={"absolute"}
                  top={4}
                  left={4}
                  w={"100%"}
                  h={"100%"}
                >
                  <Image
                    src="/images/stars-red.svg"
                    alt=""
                    width={50}
                    height={144}
                  />
                </Box>
                <Heading
                  variant={"secondary"}
                  color={"text.blackHigh"}
                  fontWeight={600}
                  fontSize={20}
                  mt={4}
                  lineHeight={"32px"}
                >
                  Building the trading hub for Bitcoin and LSTs
                </Heading>
                <Image
                  src={"/images/tech-page/tech-restaking.svg"}
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
                display={{ base: "none", md: "block" }}
              />
            </Box>
            <Flex
              p={"32px"}
              px={4}
              bg={"#fff"}
              borderRadius={"20px"}
              boxShadow={"md"}
              display={{ base: "block", md: "flex" }}
              pos={"relative"}
            >
              <Box position={"absolute"} top={4} left={4} w={"100%"} h={"100%"}>
                <Image
                  src="/images/stars-red.svg"
                  alt=""
                  width={50}
                  height={144}
                />
              </Box>
              <Heading
                variant={"secondary"}
                color={"text.blackHigh"}
                fontWeight={600}
                fontSize={20}
                mt={4}
                lineHeight={"32px"}
              >
                Secured with Babylon’s Trustless Bitcoin Staking Protocol
              </Heading>
              <Image
                src={"/images/tech-page/tech-infra.svg"}
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
            w={{ base: "auto", md: "25%" }}
            bg={"#fff"}
            borderRadius={"20px"}
            boxShadow={"md"}
          >
            <Flex
              p={"24px"}
              justify={"space-between"}
              direction={"column"}
              h={"100%"}
              align={"center"}
            >
              <Box position={"absolute"} top={4} left={4} w={"100%"} h={"100%"}>
                <Image
                  src="/images/stars-red.svg"
                  alt=""
                  width={50}
                  height={144}
                />
              </Box>
              <Image
                src={"/images/tech-page/tech-contribution.svg"}
                alt=""
                width={227}
                height={194}
              />
              <Heading
                variant={"secondary"}
                color={"text.blackHigh"}
                fontWeight={600}
                fontSize={20}
                lineHeight={"32px"}
              >
                Contributing to the Cosmos Hub since 2019
              </Heading>
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
              display={{ base: "none", md: "block" }}
            />
          </Box>
          <Flex
            p={"24px"}
            px={4}
            bg={"#fff"}
            h={"300px"}
            w={{ base: "auto", md: "25%" }}
            justify={"space-between"}
            align={"center"}
            borderRadius={"20px"}
            direction={"column"}
            boxShadow={"md"}
            pos={"relative"}
          >
            <Box position={"absolute"} top={4} left={4} w={"100%"} h={"100%"}>
              <Image
                src="/images/stars-red.svg"
                alt=""
                width={50}
                height={144}
              />
            </Box>
            <Heading
              variant={"secondary"}
              color={"text.blackHigh"}
              fontWeight={600}
              fontSize={20}
              mt={6}
              lineHeight={"32px"}
            >
              Pioneered ATOM Liquid Staking in 2021
            </Heading>
            <Image
              src={"/images/tech-page/tech-liquid-staking.svg"}
              alt=""
              width={105}
              height={144}
            />
          </Flex>

          <Flex
            p={"24px"}
            bg={"#fff"}
            h={"300px"}
            w={{ base: "auto", md: "25%" }}
            justify={"space-between"}
            borderRadius={"20px"}
            direction={"column"}
            boxShadow={"md"}
            align={"center"}
            pos={"relative"}
          >
            <Box position={"absolute"} top={4} left={4} w={"100%"} h={"100%"}>
              <Image
                src="/images/stars-red.svg"
                alt=""
                width={50}
                height={144}
              />
            </Box>
            <Box mt={8}>
              <Image
                src={"/images/tech-page/tech-first-app-chain.svg"}
                alt=""
                width={160}
                height={144}
              />
            </Box>
            <Heading
              variant={"secondary"}
              color={"text.blackHigh"}
              fontWeight={600}
              fontSize={20}
              lineHeight={"32px"}
            >
              One of the first app chains to enable IBC
            </Heading>
          </Flex>
          <Flex
            p={"24px"}
            px={4}
            bg={"#fff"}
            h={"300px"}
            w={{ base: "auto", md: "25%" }}
            justify={"space-between"}
            borderRadius={"20px"}
            direction={"column"}
            boxShadow={"md"}
            pos={"relative"}
            align={"center"}
          >
            <Box position={"absolute"} top={4} left={4} w={"100%"} h={"100%"}>
              <Image
                src="/images/stars-red.svg"
                alt=""
                width={50}
                height={144}
              />
            </Box>
            <Heading
              variant={"secondary"}
              color={"text.blackHigh"}
              alignSelf={"flex-start"}
              fontWeight={600}
              fontSize={20}
              mt={6}
              lineHeight={"32px"}
            >
              Audit first, <br /> deploy later
            </Heading>
            <Image
              src={"/images/tech-page/tech-audit.svg"}
              alt=""
              width={200}
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
