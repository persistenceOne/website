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
      bg={"#FFF8EE"}
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
              color={"#350B00"}
              fontSize={{ base: "20px", xl: "40px" }}
              lineHeight={{ base: "36px", xl: "50px" }}
              mb={4}
            >
              {dAppName}
            </Heading>
            <Text
              fontSize={{ base: "12px", xl: "16px" }}
              lineHeight={{ base: "22px", xl: "24px" }}
              color={"#350B00CC"}
              pb={"16px"}
            >
              {dAppDescription}
            </Text>
            <HStack gap={{ base: 4, md: 12 }} mb={"40px"} wrap={"wrap"}>
              {dAppStats.map((stat) => (
                <Box key={stat.label}>
                  <Text
                    fontSize={{ base: "12px", xl: "16px" }}
                    lineHeight={{ base: "22px", xl: "24px" }}
                    color={"#350B00"}
                  >
                    {stat.label}
                  </Text>
                  <Text
                    fontWeight={700}
                    color={"#E59636"}
                    fontSize={{ base: "18px", xl: "24px" }}
                  >
                    {stat.value}
                  </Text>
                </Box>
              ))}
            </HStack>
            <Link href={button.link} target="_blank" rel="noopener noreferrer">
              <Button w={{ base: "100%", md: "182px" }} variant={"primary"}>
                {button.text}
              </Button>
            </Link>
          </Box>
          <Box
            w={{ base: "300px", xl: "515px" }}
            display={{ base: "none", md: "block" }}
          >
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
