import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Heading,
  Text,
  VStack
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
}
const FeatureCard = ({
  category,
  title,
  description,
  image,
  cta,
  type = "horizontal",
  width = "100%",
  height = "100%"
}: FeatureCardInterface) => {
  return (
    <Card borderRadius={20} width={width} height={height}>
      <CardHeader fontSize={12}>{category}</CardHeader>
      {type === "horizontal" ? (
        <CardBody>
          <HStack spacing={4} align={"center"}>
            <VStack align={"flex-start"} gap={4}>
              <Heading fontSize={22}>{title}</Heading>
              <Text fontSize={14}>{description}</Text>
              <Link href={cta.link}>
                <Button
                  variant={"link"}
                  rightIcon={<ArrowForwardIcon />}
                  color={"#423F40"}
                  fontSize={16}
                >
                  {cta.linkText}
                </Button>
              </Link>
            </VStack>
            <Image src={image} alt={title} width={270} height={240} />
          </HStack>
        </CardBody>
      ) : (
        <CardBody>
          <VStack align={"flex-start"} gap={4} mt={-4}>
            <Box alignSelf={"center"}>
              <Image src={image} alt={title} width={126} height={126} />
            </Box>
            <Heading fontSize={22} maxW={"80%"}>
              {title}
            </Heading>
            <Text fontSize={14}>{description}</Text>
            <Link href={cta.link}>
              <Button
                variant={"link"}
                rightIcon={<ArrowForwardIcon />}
                color={"#423F40"}
                fontSize={16}
              >
                {cta.linkText}
              </Button>
            </Link>
          </VStack>
        </CardBody>
      )}
    </Card>
  );
};

export default FeatureCard;
