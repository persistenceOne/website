import { numberFormat } from "@/utils/helpers";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  HStack,
  Text,
  VStack,
  Stack,
  Flex,
  Image
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { PoolData } from "@/components/organisms/xprt/table";

const XPRTDefiCard = ({
  token1,
  token2Img,
  token1Img,
  tvl,
  token2,
  apr,
  link,
  linkLable
}: PoolData) => {
  return (
    <Box>
      <Card
        w="full"
        height={{ base: "auto", md: "auto" }}
        display={"flex"}
        justify={"space-between"}
        flexDirection={{ base: "column", md: "column" }}
        p={6}
        borderRadius={"22px"}
        boxShadow={"lg"}
      >
        <Stack
          justify={"space-between"}
          direction={{ base: "row", md: "row" }}
          mb={{ base: 3, md: 2 }}
          wrap={"wrap"}
        >
          <HStack>
            <Flex alignItems={"center"}>
              <Box
                display="flex"
                pos="relative"
                alignItems="center"
                w={"54px"}
                mr={"6px"}
              >
                <Image
                  src={token1Img}
                  alt={token1}
                  width={"26px"}
                  height={"26px"}
                />
                <Image
                  src={token2Img}
                  alt={token2}
                  width={"26px"}
                  height={"26px"}
                  position={"absolute"}
                  right={"10px"}
                />
              </Box>
              <Box>
                <Text
                  fontWeight={700}
                  fontSize={"16px"}
                  lineHeight={"32px"}
                  color={"#633C0D"}
                >
                  {token1}/{token2}
                </Text>
              </Box>
            </Flex>
          </HStack>
          <Link href={link} target="_blank" rel="noopener noreferrer">
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
              {linkLable}
            </Button>
          </Link>
        </Stack>

        <HStack gap={{ base: 4, md: 8 }}>
          <VStack align={"stretch"} gap={0}>
            <Text color={"#633C0D"} fontSize={{ base: "14px", xl: "16px" }}>
              TVL
            </Text>
            <Text
              fontSize={{ base: "20px", xl: "24px" }}
              color="#633C0D"
              fontWeight={700}
            >
              ${numberFormat(Number(tvl), 3)}
            </Text>
          </VStack>
          <VStack align={"stretch"} gap={0}>
            <Text color={"#633C0D"} fontSize={{ base: "14px", xl: "16px" }}>
              APR
            </Text>
            <Text
              fontSize={{ base: "20px", xl: "24px" }}
              color="#633C0D"
              fontWeight={700}
            >
              {apr}%
            </Text>
          </VStack>
        </HStack>
      </Card>
    </Box>
  );
};

export default XPRTDefiCard;
