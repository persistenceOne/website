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
import Link from "next/link";
import { TooltipWithTouch } from "./tooltip-with-touch";

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
              fontSize={{ base: "16px", md: "24px" }}
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
              mt={-4}
              fontSize={"18px"}
              color={"#606060"}
              _hover={{ color: "#C73238" }}
            >
              {website.linkText}
            </Button>
          </Link>
        </Stack>
        <Divider my={5} />
      </CardHeader>
      <CardBody p={"0"}>
        <Text
          fontSize={{ base: "16px", md: "18px" }}
          color={"text.blackHigh"}
          lineHeight={"30px"}
          pb={"20px"}
          h={{ base: "auto", md: 28 }}
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
            <TooltipWithTouch
              label={
                <Text bg={"white"} color="primary.black">
                  {asset.asset}
                </Text>
              }
              bg={"#FFFFFF"}
              px={4}
              py={2}
              boxShadow={
                "0px 12px 16px -4px rgba(27, 27, 27, 0.08), 0px 4px 6px -2px rgba(27, 27, 27, 0.03);"
              }
              borderRadius={4}
              mt={-2}
              key={asset.asset}
            >
              <Image
                src={asset.assetIcon}
                alt={asset.asset}
                width={isMobile ? 30 : 48}
                height={isMobile ? 30 : 48}
                style={{ cursor: "pointer" }}
              />
            </TooltipWithTouch>
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
