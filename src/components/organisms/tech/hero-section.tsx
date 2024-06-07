import {
  Box,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
  VStack,
  Divider,
  Container,
  Stack
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getBlockNumber, getBondedTokens } from "@/pages/api";
import Image from "next/image";

const getList = (blockNumber: number) => {
  const homePagesStats = [
    {
      statValue: Number(blockNumber).toLocaleString(),
      statLabel: "Blocks"
    },
    {
      statValue: "50+",
      statLabel: "IBC Connections"
    },
    {
      statValue: "5+",
      statLabel: "Audits"
    }
  ];
  return homePagesStats;
};

const HeroSection = () => {
  const [blockNumber, setBlockNumber] = useState(0);

  // fetch data on every 3 sec
  useEffect(() => {
    const interval = setInterval(async () => {
      const response = await getBlockNumber();
      setBlockNumber(response);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const homePagesStats = getList(blockNumber);
  return (
    <Container maxW={"1440px"} px={{ base: "20px", md: "60px" }}>
      <Box
        backgroundImage={{
          base: "",
          md: "url('/images/tech-page/tech-hero.svg')"
        }}
        backgroundPosition="100% 40%"
        backgroundRepeat="no-repeat"
        backgroundSize={"42%"}
      >
        <Spacer h={{ base: 0, md: 20 }} />
        <Flex justify={"space-between"} mb={{ base: "40px", md: "100px" }}>
          <Box pt={"150px"}>
            <Heading
              variant={"main"}
              textAlign={{ base: "left", md: "left" }}
              fontSize={{ base: "42px", md: "50px" }}
              lineHeight={{ base: "50px", md: "50px", lg: "60px" }}
              color={"text.blackHeading"}
            >
              Technically
              <br />
              Superb.
            </Heading>
            <Heading
              variant={"main"}
              textAlign={{ base: "left", md: "left" }}
              fontSize={{ base: "42px", md: "50px" }}
              lineHeight={{ base: "50px", md: "50px", lg: "60px" }}
              color={"primary.red"}
            >
              Superbly
              <br />
              Powerful.
            </Heading>
          </Box>
        </Flex>
        <Stack
          gap={0}
          maxW={{ base: "100%", md: "70%" }}
          direction={{ base: "column", md: "row" }}
        >
          {homePagesStats.map((stat: any, index: number) => (
            <HStack key={stat.statLabel}>
              <VStack
                key={stat.statLabel}
                align={{ base: "start", md: "stretch" }}
                gap={0}
                mb={{ base: "16px", md: "0px" }}
              >
                <Text
                  color={"text.headingBlack"}
                  fontSize={{ base: "22px", md: "44px" }}
                  fontWeight={700}
                >
                  {stat.statValue}
                </Text>
                <Text
                  color="text.statLabel"
                  fontSize={{ base: "16px", md: "18px" }}
                  fontWeight={400}
                >
                  {stat.statLabel}
                </Text>
              </VStack>
              {index !== homePagesStats.length - 1 ? (
                <Divider
                  display={{ base: "none", md: "block" }}
                  orientation="vertical"
                  h="80px"
                  borderColor={"#423F4066"}
                  opacity={0.4}
                  mx={{ base: 6, md: 12 }}
                  borderWidth={1}
                />
              ) : null}
            </HStack>
          ))}
        </Stack>
        <Box
          // bottom={0}
          display={{ base: "block", md: "none" }}
        >
          <Image
            src="/images/tech-page/tech-hero.svg"
            alt="Persistence Coin"
            width={400}
            height={400}
          />
        </Box>
        <Spacer h={{ base: "40px", md: "120px" }} />
      </Box>
    </Container>
  );
};

export default HeroSection;
