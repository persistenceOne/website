import { ArrowForwardIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Heading,
  Text,
  useMediaQuery
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export interface DappCardInterface {
  dAppName: string;
  dAppLogo: string;
  dAppDescription: string;
  dAppStats: {
    label: string;
    value: string;
  }[];
  supportingAssets: {
    asset: string;
    assetIcon: string;
  }[];
  website: {
    link: string;
    linkText: string;
    hover: string;
  };
  button: {
    text: string;
    link: string;
    background: string;
    hover: string;
    color: string;
  };
}

const DappCard = ({
  dAppName,
  dAppLogo,
  dAppDescription,
  dAppStats,
  supportingAssets,
  website,
  button
}: DappCardInterface) => {
  return (
    <Card
      px={{ base: "24px", md: "56px" }}
      py={{ base: "26px", md: "60px" }}
      w={"full"}
      bg={"#E9F1EE14"}
      borderRadius={"20px"}
    >
      <CardBody p={"0"}>
        <Box
          display="flex"
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box flex={1}>
            <Heading
              fontWeight={700}
              color={"text.whiteFull"}
              fontSize={{ base: "20px", md: "40px" }}
              lineHeight={{ base: "36px", md: "50px" }}
              mb={4}
            >
              {dAppName}
            </Heading>
            <Text
              fontSize={{ base: "12px", md: "16px" }}
              color={"#FFFFFFCC"}
              lineHeight={{ base: "22px", md: "24px" }}
              pb={"16px"}
            >
              {dAppDescription}
            </Text>
            <HStack gap={12} mb={"70px"}>
              {dAppStats.map((stat) => (
                <Box key={stat.label}>
                  <Text
                    fontSize={{ base: "12px", md: "16px" }}
                    color={"#FFFFFFCC"}
                    lineHeight={{ base: "22px", md: "24px" }}
                  >
                    {stat.label}
                  </Text>
                  <Text
                    fontWeight={700}
                    color={"#FCFCFC"}
                    fontSize={{ base: "18px", md: "24px" }}
                  >
                    {stat.value}
                  </Text>
                </Box>
              ))}
            </HStack>
            <Link href={button.link} target="_blank" rel="noopener noreferrer">
              <Button
                bg={button.background}
                color={button.color}
                w={"182px"}
                _hover={{
                  bg: button.hover
                }}
              >
                {button.text}
              </Button>
            </Link>
          </Box>
          <Box w={"515px"}>
            <Image
              src={"/images/home-page/dex.svg"}
              alt={"Dex"}
              width={515}
              height={290}
            />
          </Box>
        </Box>
      </CardBody>
    </Card>
  );
};

export default DappCard;
