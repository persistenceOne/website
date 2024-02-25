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

const getList = (blockNumber: number) => {
  const homePagesStats = [
    {
      statValue: Number(blockNumber).toLocaleString(),
      statLabel: "Blocks"
    },
    {
      statValue: "45+",
      statLabel: "IBC Connection"
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
    <Box
      backgroundImage={{
        base: "",
        md: "url('/images/tech-page/tech-hero.svg')"
      }}
      backgroundPosition="100% 40%"
      backgroundRepeat="no-repeat"
      backgroundSize={"42%"}
    >
      <Container maxW={"1440px"} px={{ base: "20px", md: "60px" }}>
        <Spacer h={{ base: 0, md: 20 }} />
        <Flex justify={"space-between"} mb={{ base: "40px", md: "100px" }}>
          <Box pt={"150px"}>
            <Heading
              variant={"main"}
              textAlign={{ base: "center", md: "left" }}
              fontSize={{ base: "26px", md: "40px", lg: "67px" }}
            >
              Technically Super.
            </Heading>
            <Heading
              variant={"main"}
              textAlign={{ base: "center", md: "left" }}
              color={"primary.red"}
              fontSize={{ base: "26px", md: "40px", lg: "67px" }}
            >
              Superbly Powerful.
            </Heading>
            <Text
              fontSize={{ base: "16px", md: "20px" }}
              textAlign={{ base: "center", md: "left" }}
              w={{ base: "auto", md: "55%" }}
              color={"text.blackLow"}
              mt={6}
            >
              Persistence One is operating at the bleeding edge of innovation
              when it comes to Liquid Staking and Restaking.
            </Text>
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
                  color={"primary.red"}
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
        <Spacer h={"120px"} />
      </Container>
    </Box>
  );
};

export default HeroSection;
