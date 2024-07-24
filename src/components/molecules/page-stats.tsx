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
            align={{ base: "start", md: "start" }}
            gap={0}
            mb={{ base: "16px", md: "0px" }}
          >
            <Text
              color={"#350B00"}
              fontSize={{ base: "22px", xl: "44px" }}
              fontWeight={700}
            >
              {stat.statLabel == "Average Transaction Cost" ? (
                <Text
                  as={"span"}
                  fontFamily={"sans-serif"}
                  mr={2}
                  fontWeight={900}
                >
                  &lt;
                </Text>
              ) : (
                ""
              )}
              {stat.statValue}
            </Text>
            <Text
              color="#633C0D"
              fontSize={{ base: "16px", xl: "18px" }}
              fontWeight={400}
            >
              {stat.statLabel}
            </Text>
          </VStack>
          {index !== stats.length - 1 ? (
            <Divider
              display={{ base: "none", md: "block" }}
              borderColor={"#434343"}
              orientation="vertical"
              h="70px"
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
