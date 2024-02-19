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
  Stat,
  StatLabel,
  StatNumber,
  Text
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import React from "react";

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
    <Card p={4} w={"full"} borderRadius={"20px"}>
      <CardHeader>
        <HStack justify={"space-between"}>
          <Box>
            <Image src={dAppLogo} alt="" width={56} height={56} />
            <Heading>{dAppName}</Heading>
          </Box>
          <Button
            rightIcon={<ExternalLinkIcon />}
            variant={"unstyled"}
            alignSelf={"flex-start"}
            color={"buttons.linkText"}
            fontWeight={400}
          >
            {website.linkText}
          </Button>
        </HStack>
        <Divider mt={4} />
      </CardHeader>
      <CardBody mt={-4}>
        <Text>{dAppDescription}</Text>
        <HStack my={4} gap={12}>
          {dAppStats.map((stat) => (
            <Box key={stat.label}>
              <Text fontSize={"14px"}>{stat.label}</Text>
              <Text fontWeight={700} fontSize={24}>
                {stat.value}
              </Text>
            </Box>
          ))}
        </HStack>
        <Text fontSize={"14px"}>Supporting Assets</Text>
        <HStack>
          {supportingAssets.map((asset) => (
            <Image
              key={asset.asset}
              src={asset.assetIcon}
              alt={asset.asset}
              width={50}
              height={50}
            />
          ))}
        </HStack>
      </CardBody>
      <CardFooter>
        <Button
          bg={button.background}
          color={button.color}
          rightIcon={<ArrowForwardIcon />}
        >
          {button.text}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DappCard;
