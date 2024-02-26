import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Stack,
  Heading,
  Text,
  VStack,
  Flex
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface FeatureCardInterface {
  category: string;
  title: string;
  description: string;
  image: string;
  cta: {
    link: string;
    linkText: string;
  };
  type?: "horizontal" | "vertical";
  width?: string;
  height?: string;
  cardType?: "img" | "content";
}
const FeatureCard = ({
  category,
  title,
  description,
  image,
  cta,
  type = "horizontal",
  width = "100%",
  height = "100%",
  cardType = "content"
}: FeatureCardInterface) => {
  return (
    <Card
      borderRadius={20}
      width={{ base: "100%", md: width }}
      // height={height}
      py={"25px"}
      px={"30px"}
    >
      <CardHeader
        fontSize={12}
        p={"0"}
        fontWeight={"300"}
        color={"text.blackFull"}
      >
        {category}
      </CardHeader>
      {type === "horizontal" ? (
        <CardBody p={"0"} style={{ display: "flex" }}>
          <Stack
            spacing={4}
            align={"end"}
            direction={{ base: "column", md: "row" }}
          >
            <Box>
              <Heading
                fontSize={"22px"}
                pb={"4px"}
                lineHeight={"33px"}
                color={"text.blackHigh"}
              >
                {title}
              </Heading>
              <Text fontSize={14} pb={"24px"} color={"text.blackHigh"}>
                {description}
              </Text>
              {cta.linkText !== "" ? (
                <Link href={cta.link}>
                  <Button
                    variant={"link"}
                    rightIcon={<ArrowForwardIcon />}
                    color={"#423F40"}
                    _hover={{ color: "#C73238" }}
                    fontSize={16}
                  >
                    {cta.linkText}
                  </Button>
                </Link>
              ) : (
                ""
              )}
            </Box>
            <Image src={image} alt={title} width={270} height={240} />
          </Stack>
        </CardBody>
      ) : (
        <CardBody p={"0"}>
          {cardType !== "img" ? (
            <VStack align={"flex-start"} gap={4} mt={-4}>
              <Box alignSelf={"center"}>
                <Image src={image} alt={title} width={126} height={126} />
              </Box>
              <Heading
                fontSize={"22px"}
                lineHeight={"33px"}
                maxW={"80%"}
                pb={"4px"}
                color={"text.blackHigh"}
              >
                {title}
              </Heading>
              <Text fontSize={14} color={"text.blackHigh"}>
                {description}
              </Text>
              {cta.linkText !== "" ? (
                <Link href={cta.link}>
                  <Button
                    variant={"link"}
                    rightIcon={<ArrowForwardIcon />}
                    color={"#423F40"}
                    fontSize={16}
                    _hover={{ color: "#C73238" }}
                  >
                    {cta.linkText}
                  </Button>
                </Link>
              ) : (
                ""
              )}
            </VStack>
          ) : (
            <Flex align={"center"} justify={"center"}>
              <Image src={image} alt={title} width={320} height={280} />
            </Flex>
          )}
        </CardBody>
      )}
    </Card>
  );
};

export default FeatureCard;
