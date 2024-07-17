import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  HStack,
  Container,
  Heading,
  Text,
  Link,
  Card,
  CardBody
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const GetXprtSection = () => {
  return (
    <Card
      px={{ base: "24px", md: "56px" }}
      py={{ base: "26px", md: "60px" }}
      w={"full"}
      bg={"#E9F1EE14"}
      borderRadius={"20px"}
    >
      <CardBody p={"0"}>
        <HStack bg="#" justify={"space-between"}>
          <Box
            flex={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image
              src={"/images/home-page/fuel.svg"}
              alt="Persistence"
              width={251}
              height={285}
            />
          </Box>
          <Box w={"643px"}>
            <Heading
              fontWeight={700}
              color={"text.whiteFull"}
              fontSize={{ base: "20px", md: "40px" }}
              lineHeight={{ base: "36px", md: "50px" }}
              mb={3}
            >
              Fueling on-chain activities on Persistence One
            </Heading>
            <Text
              fontSize={{ base: "12px", md: "16px" }}
              color={"#FFFFFFCC"}
              lineHeight={{ base: "22px", md: "24px" }}
              mb={{ base: "20px", md: "40px" }}
            >
              XPRT powers on-chain activities on Persistence One, including
              decentralized governance, transaction fees, and future initiatives
              like whitelisting intent solvers, protocol fee discounts, and
              more.
            </Text>
            <HStack gap={4}>
              <Link
                href={"https://wallet.keplr.app/chains/persistence"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant={"secondary"} w={"163px"}>
                  Stake XPRT
                </Button>
              </Link>
              <Link
                href={"https://www.coingecko.com/en/coins/persistence"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  color={"#ffffff"}
                  w={"145px"}
                  _hover={{ borderColor: "#C73238CC", bg: "#C732381A" }}
                >
                  Get XPRT
                </Button>
              </Link>
            </HStack>
          </Box>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GetXprtSection;
