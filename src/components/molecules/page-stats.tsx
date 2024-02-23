import React from "react";
import { Box, Stack, Divider, HStack, Text, VStack } from "@chakra-ui/react";

type PageStat = {
  statValue: any;
  statLabel: string;
};

const PageStats = ({ stats }: { stats: PageStat[] }) => {
  return (
    <Stack
      gap={0}
      maxW={{ base: "100%", md: "70%" }}
      direction={{ base: "column", md: "row" }}
    >
      {stats.map((stat: PageStat, index: number) => (
        <HStack key={stat.statLabel}>
          <VStack
            key={stat.statLabel}
            align={{ base: "start", md: "center" }}
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
              color="text.blackHigh"
              fontSize={{ base: "16px", md: "18px" }}
              fontWeight={400}
            >
              {stat.statLabel}
            </Text>
          </VStack>
          {index !== stats.length - 1 ? (
            <Divider
              display={{ base: "none", md: "block" }}
              borderColor={"#423F4066"}
              orientation="vertical"
              h="80px"
              opacity={0.4}
              mx={8}
              borderWidth={1}
            />
          ) : null}
        </HStack>
      ))}
    </Stack>
  );
};

export default PageStats;
