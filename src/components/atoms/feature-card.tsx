import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Stack,
  Heading,
  Text,
  VStack,
  Flex,
  useMediaQuery
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
    isExternal?: boolean;
  };
  type?: "horizontal" | "vertical" | "vertical-bottom";
  width?: string;
  height?: string;
  cardType?: "img" | "content";
  imgWidth: number;
  aos?: string;
  className?: string;
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
  cardType = "content",
  imgWidth,
  aos,
  className
}: FeatureCardInterface) => {
  const [isMobile] = useMediaQuery("(max-width: 500px)");
  return (
    <Card
      borderRadius={20}
      width={{ base: "100%", md: width }}
      flex={"auto"}
      py={"25px"}
      px={"30px"}
    >
      <CardHeader fontSize={14} p={"0"} fontWeight={"300"} color={"#918678"}>
        {category}
      </CardHeader>
      {type === "horizontal" ? (
        <CardBody p={"0"} style={{ display: "flex" }}>
          <Stack
            spacing={4}
            align={
              category === "Story" ? "center" : isMobile ? "center" : "end"
            }
            direction={{ base: "column-reverse", md: "row" }}
          >
            <Box>
              <Heading
                fontSize={{ base: "20px", xl: "27px" }}
                lineHeight={{ base: "30px", xl: "40px" }}
                pb={"4px"}
                color={"#633C0D"}
              >
                {title}
              </Heading>
              <Text fontSize={14} pb={"24px"} color={"#633C0DCC"}>
                {description}
              </Text>
              {cta.linkText !== "" ? (
                <Link
                  href={cta.link}
                  target={cta.isExternal ? "_blank" : ""}
                  rel={cta.isExternal ? "noopener noreferrer" : ""}
                >
                  <Button
                    variant={"link"}
                    rightIcon={<ArrowForwardIcon />}
                    color={"#E59636"}
                    fontSize={16}
                  >
                    {cta.linkText}
                  </Button>
                </Link>
              ) : (
                ""
              )}
            </Box>
            <Image
              src={image}
              alt={title}
              width={
                category === "Story" ? 212 : category === "Vision" ? 330 : 280
              }
              height={240}
            />
          </Stack>
        </CardBody>
      ) : type === "vertical" ? (
        <CardBody p={"0"} display={category === "" ? "flex" : "block"}>
          {cardType !== "img" ? (
            <VStack align={"flex-start"} gap={4} mt={-4}>
              <Box alignSelf={"center"}>
                <Image
                  src={image}
                  alt={title}
                  width={category === "Experience" ? 312 : 312}
                  height={category === "Experience" ? 161 : 161}
                />
              </Box>
              <Heading
                fontSize={{ base: "16px", xl: "22px" }}
                lineHeight={{ base: "24px", xl: "33px" }}
                maxW={"80%"}
                pb={"4px"}
                color={"#633C0D"}
              >
                {title}
              </Heading>
              <Text fontSize={14} color={"#633C0DCC"}>
                {description}
              </Text>
              {cta.linkText !== "" ? (
                <Link href={cta.link}>
                  <Button
                    variant={"link"}
                    rightIcon={<ArrowForwardIcon />}
                    color={"#E59636"}
                    fontSize={16}
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
      ) : (
        <CardBody p={"0"} display={category === "" ? "flex" : "block"}>
          {cardType !== "img" ? (
            <VStack
              align={"flex-start"}
              gap={4}
              mt={4}
              flexDirection={{ base: "column-reverse", md: "column" }}
            >
              <Box>
                <Heading
                  fontSize={{ base: "16px", xl: "22px" }}
                  lineHeight={{ base: "24px", xl: "33px" }}
                  maxW={"80%"}
                  pb={"4px"}
                  color={"#633C0D"}
                >
                  {title}
                </Heading>
                <Text fontSize={14} color={"#633C0DCC"}>
                  {description}
                </Text>
                {cta.linkText !== "" ? (
                  <Link href={cta.link}>
                    <Button
                      variant={"link"}
                      rightIcon={<ArrowForwardIcon />}
                      color={"#423F40"}
                      fontSize={16}
                      _hover={{
                        color: "primary.red"
                      }}
                    >
                      {cta.linkText}
                    </Button>
                  </Link>
                ) : (
                  ""
                )}
              </Box>
              <Box alignSelf={"center"}>
                <Image
                  src={image}
                  alt={title}
                  width={category === "Experience" ? 126 : 205}
                  height={126}
                />
              </Box>
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
