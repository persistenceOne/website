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
      bg={"#FFF8EE"}
      className="aos-init aos-animate py-10"
      data-aos="fade-up"
      borderRadius={"20px"}
    >
      <CardBody p={"0"}>
        <HStack bg="#" justify={"space-between"}>
          <Box
            w={{ base: "250px", xl: "300px" }}
            alignItems="center"
            justifyContent="center"
            mx={"auto"}
            display={{ base: "none", md: "flex" }}
          >
            <Image
              src={"/images/home-page/fuel.svg"}
              alt="Persistence"
              width={300}
              height={285}
            />
          </Box>
          <Box maxW={{ base: "500px", xl: "643px" }}>
            <Heading
              fontWeight={700}
              color={"#350B00"}
              fontSize={{ base: "20px", xl: "40px" }}
              lineHeight={{ base: "36px", xl: "50px" }}
              mb={3}
            >
              Fueling on-chain activities on Persistence One
            </Heading>
            <Text
              fontSize={{ base: "12px", xl: "16px" }}
              color={"#350B00CC"}
              lineHeight={{ base: "22px", xl: "24px" }}
              mb={{ base: "20px", md: "40px" }}
            >
              XPRT powers on-chain activities on Persistence One, including
              decentralized governance, transaction fees, and future initiatives
              like whitelisting intent solvers, protocol fee discounts, and
              more.
            </Text>
            <HStack gap={4} flexDir={{ base: "column", md: "row" }}>
              <Link
                href={"https://wallet.keplr.app/chains/persistence"}
                target="_blank"
                rel="noopener noreferrer"
                w={{ base: "100%", md: "auto" }}
              >
                <Button variant={"primary"} w={{ base: "100%", md: "163px" }}>
                  Stake XPRT
                </Button>
              </Link>
              <Link
                href={"https://www.coingecko.com/en/coins/persistence"}
                target="_blank"
                rel="noopener noreferrer"
                w={{ base: "100%", md: "auto" }}
              >
                <Button
                  w={{ base: "100%", md: "145px" }}
                  bg={"#1D1306"}
                  value={"ternary"}
                  transitionDuration={"0.5s"}
                  transitionTimingFunction={"ease"}
                  transitionProperty={"all"}
                  border={"1px solid #1D1306"}
                  _hover={{
                    bg: "#FFFFFF",
                    color: "#1D1306",
                    borderColor: "#1D1306",
                    transition: "0.5s"
                  }}
                  color="#FFFFFF"
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
