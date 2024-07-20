import { numberFormat } from "@/utils/helpers";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  HStack,
  Text,
  VStack,
  Stack
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface XPRTDefiCardInterface {
  tokens: {
    name: string;
    image: string;
  }[];
  cta: {
    label: string;
    link: string;
    bg: string;
    hover: string;
  };
  description: string;
  stats: {
    label: string;
    value: string;
  }[];
}

const XPRTDefiCard = ({
  tokens,
  cta,
  description,
  stats
}: XPRTDefiCardInterface) => {
  return (
    <Box>
      <Card
        w="full"
        height={{ base: "300px", md: "auto" }}
        display={"flex"}
        justify={"space-between"}
        flexDirection={{ base: "column", md: "column" }}
        p={6}
        borderRadius={"22px"}
        boxShadow={"lg"}
      >
        <Stack
          justify={"space-between"}
          direction={{ base: "column", md: "row" }}
          mb={2}
        >
          <HStack>
            <HStack spacing="-2">
              {tokens.map((token, index) => {
                return (
                  <Box
                    key={token.name}
                    ml={{
                      base: index !== tokens.length - 1 ? 0 : -1,
                      md: index !== tokens.length - 1 ? 0 : -3
                    }}
                  >
                    <Image
                      src={token.image}
                      alt={token.name}
                      width={36}
                      height={36}
                    />
                  </Box>
                );
              })}
            </HStack>
            <Text
              fontSize={{ base: "14px", md: "16px" }}
              color={"#633C0DCC"}
              fontWeight={700}
            >
              {tokens.map((token) => token.name).join("/")}
            </Text>
          </HStack>
          <Link href={cta.link} target="_blank" rel="noopener noreferrer">
            <Button
              variant={"secondary"}
              color={"#E59636"}
              bg={"transparent"}
              h={"34px"}
              w={"138px"}
              fontWeight={400}
              // bg={cta.bg}
              // _hover={{ bg: cta.hover }}
              // w={{ base: "100%", md: "auto" }}
              fontSize={{ base: "12px", md: "16px" }}
              // h={{ base: "36px", md: "48px" }}
              // color="white"
              rightIcon={<ArrowForwardIcon />}
            >
              {cta.label}
            </Button>
          </Link>
        </Stack>
        <Text
          mb={{ base: "16px", xl: "30px" }}
          fontSize={{ base: "12px", xl: "16px" }}
          h={{ base: "100px", md: "auto" }}
        >
          {description}
        </Text>
        <HStack gap={{ base: 4, md: 8 }}>
          {stats.map((stat) => {
            return (
              <VStack key={stat.label} align={"stretch"} gap={0}>
                <Text color={"#633C0D"} fontSize={{ base: "12px", xl: "16px" }}>
                  {stat.label}
                </Text>
                <Text
                  fontSize={{ base: "12px", xl: "24px" }}
                  color="#633C0D"
                  fontWeight={700}
                >
                  {stat.label === "TVL"
                    ? `$${numberFormat(Number(stat.value), 3)}`
                    : `${stat.value}%`}
                </Text>
              </VStack>
            );
          })}
        </HStack>
      </Card>
    </Box>
  );
};

export default XPRTDefiCard;
