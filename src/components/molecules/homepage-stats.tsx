import React from "react";

import { Box, Center, Divider, HStack, Text, VStack } from "@chakra-ui/react";

type HomePageStat = {
  statValue: string;
  statLabel: string;
};

const HomePageStats = ({ stats }: { stats: HomePageStat[] }) => {
  return (
    <HStack gap={0} maxW={"70%"}>
      {stats.map((stat: HomePageStat, index: number) => (
        <HStack key={stat.statLabel}>
          <VStack key={stat.statLabel} align={"stretch"}>
            <Text color={"primary.red"} fontSize={"44px"} fontWeight={700}>
              {stat.statValue}
            </Text>
            <Text color="text.statLabel" fontSize={"18px"} fontWeight={400}>
              {stat.statLabel}
            </Text>
          </VStack>
          {index !== stats.length - 1 ? (
            <Divider
              orientation="vertical"
              h="80px"
              borderColor={"text.statLabel"}
              opacity={0.4}
              mx={8}
              borderWidth={1}
            />
          ) : null}
        </HStack>
      ))}
    </HStack>
  );
};

export default HomePageStats;
