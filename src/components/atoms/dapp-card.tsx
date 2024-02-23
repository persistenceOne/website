import { ArrowForwardIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  HStack,
  Heading,
  Text,
  Stack,
  useMediaQuery
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { numberFormat } from "@/utils/helpers";
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
  };
  button: {
    text: string;
    link: string;
    background: string;
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
  const [isMobile] = useMediaQuery("(max-width: 500px)");
  return (
    <Card
      px={{ base: "24px", md: "44px" }}
      py={{ base: "26px", md: "38px" }}
      w={"full"}
      borderRadius={"20px"}
    >
      <CardHeader p={""}>
        <Stack justify={"space-between"} direction={"row"}>
          <Box>
            <Image
              src={dAppLogo}
              alt=""
              width={isMobile ? 28 : 56}
              height={isMobile ? 28 : 56}
            />
            <Heading
              fontWeight={600}
              fontSize={{ base: "16px", md: "32px" }}
              mt={"16px"}
            >
              {dAppName}
            </Heading>
          </Box>
          <Link href={website.link} target="_blank" rel="noopener noreferrer">
            <Button
              rightIcon={<ExternalLinkIcon />}
              variant={"unstyled"}
              alignSelf={"flex-start"}
              fontWeight={400}
              fontSize={"18px"}
              color={"#606060"}
            >
              {website.linkText}
            </Button>
          </Link>
        </Stack>
        <Divider my={5} />
      </CardHeader>
      <CardBody p={"0"}>
        <Text
          fontSize={{ base: "16px", md: "20px" }}
          color={"text.blackHigh"}
          lineHeight={"30px"}
          pb={"20px"}
        >
          {dAppDescription}
        </Text>
        <HStack gap={12} mb={"24px"}>
          {dAppStats.map((stat) => (
            <Box key={stat.label}>
              <Text fontSize={"14px"} color={"#423F40B2"}>
                {stat.label}
              </Text>
              <Text fontWeight={700} fontSize={{ base: "18px", md: "24px" }}>
                {stat.value}
              </Text>
            </Box>
          ))}
        </HStack>
        <Text fontSize={"14px"} color={"#423F40B2"} pb={"4px"}>
          Supporting Assets
        </Text>
        <HStack gap={"16px"}>
          {supportingAssets.map((asset) => (
            <Image
              key={asset.asset}
              src={asset.assetIcon}
              alt={asset.asset}
              width={isMobile ? 30 : 48}
              height={isMobile ? 30 : 48}
            />
          ))}
        </HStack>
      </CardBody>
      <CardFooter px={"0"} pb={"0"} pt={{ base: "20px", md: "36px" }}>
        <Link href={button.link} target="_blank" rel="noopener noreferrer">
          <Button
            bg={button.background}
            color={button.color}
            w={"240px"}
            rightIcon={<ArrowForwardIcon />}
          >
            {button.text}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default DappCard;
