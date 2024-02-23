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
  Text
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
  return (
    <Card px={"44px"} py={"38px"} w={"full"} borderRadius={"20px"}>
      <CardHeader p={""}>
        <HStack justify={"space-between"}>
          <Box>
            <Image src={dAppLogo} alt="" width={56} height={56} />
            <Heading fontWeight={600} fontSize={"32px"} mt={"16px"}>
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
        </HStack>
        <Divider my={5} />
      </CardHeader>
      <CardBody p={"0"}>
        <Text
          fontSize={"20px"}
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
              <Text fontWeight={700} fontSize={"24px"}>
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
              width={48}
              height={48}
            />
          ))}
        </HStack>
      </CardBody>
      <CardFooter px={"0"} pb={"0"} pt={"36px"}>
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
