import { ArrowForwardIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Heading,
  Text,
  VStack,
  Container,
  Stack,
  SimpleGrid
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Icon from "./Icon";

const footerSocialLinks = [
  {
    name: "Twitter",
    link: "https://twitter.com/PersistenceOne",
    icon: "twitter",
    iconType: "stroke",
    color: "#000000"
  },
  {
    name: "Discord",
    link: "https://discord.com/invite/vyvp3scWnH",
    icon: "discord",
    iconType: "stroke",
    color: "#767EF0"
  },
  {
    name: "Telegram",
    link: "https://t.me/persistenceone",
    icon: "telegram",
    iconType: "stroke",
    color: "#418FCD"
  },
  {
    name: "Medium",
    link: "https://medium.com/persistence-blog",
    icon: "medium",
    iconType: "stroke",
    color: "#000000"
  },
  {
    name: "Github",
    link: "https://github.com/persistenceOne/",
    icon: "github",
    iconType: "stroke",
    color: "#0077B5"
  },
  {
    name: "Mintscan",
    link: "https://www.mintscan.io/persistence/",
    icon: "mintscan",
    iconType: "stroke",
    color: "#9C9C9C"
  }
];

const footerLinks = [
  {
    title: "Learn",
    links: [
      {
        title: "Vision",
        link: "/vision",
        isExternal: false
      },
      {
        title: "FAQs",
        link: "/faqs",
        isExternal: false
      },
      {
        title: "Blog",
        link: "https://blog.persistence.one/",
        isExternal: true
      },
      {
        title: "Documentation",
        link: "https://docs.persistence.one",
        isExternal: true
      }
    ]
  },
  {
    title: "Network",
    links: [
      {
        title: "XPRT",
        link: "/xprt",
        isExternal: false
      },
      {
        title: "Tech",
        link: "/tech",
        isExternal: false
      }
    ]
  },
  {
    title: "Products",
    links: [
      {
        title: "Persistence DEX",
        link: "https://app.persistence.one",
        isExternal: true
      },
      {
        title: "XPRT Staking",
        link: "https://wallet.keplr.app/chains/persistence",
        isExternal: true
      },
      {
        title: "pWallet",
        link: "https://wallet.persistence.one",
        isExternal: true
      }
    ]
  },
  {
    title: "Community",
    links: [
      {
        title: "People",
        link: "/people",
        isExternal: false
      },
      {
        title: "Careers",
        link: "https://careers.persistence.one/",
        isExternal: true
      },
      {
        title: "Community Forum",
        link: "https://forum.persistence.one",
        isExternal: true
      }
    ]
  }
];

const Footer = () => {
  return (
    <Box as={"footer"} bg={"linear-gradient(90deg, #185B64 0%, #114147 35%)"}>
      <Container
        maxW={"1300px"}
        px={{ base: "12px", md: "30px" }}
        py={{ base: "30px", md: "60px" }}
      >
        <HStack
          alignItems={"center"}
          justifyContent={"space-between"}
          py={{ base: "10px", md: "16px" }}
        >
          <Image
            src={"images/persistence-logo.svg"}
            width={186}
            height={24}
            alt={"Persistence Logo"}
          />
          <HStack gap={4} mt={4} display={{ base: "none", md: "flex" }}>
            {footerSocialLinks.map((link) => (
              <Link
                href={link.link}
                key={link.name}
                target="_blank"
                rel="noopenner noreferrer"
              >
                {link.icon !== "github" ? (
                  <Box
                    w={"24px"}
                    h={"24px"}
                    _hover={{ bg: "white" }}
                    borderRadius={"100%"}
                    className={"icon-box"}
                    bg={"#9C9C9C"}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <Icon
                      icon={link.icon}
                      color="white"
                      viewClass={`footer-icon ${link.iconType}`}
                    />
                  </Box>
                ) : (
                  <Box
                    w={"24px"}
                    h={"24px"}
                    _hover={{ bg: "white" }}
                    borderRadius={"100%"}
                    className={"icon-box"}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <Icon
                      icon={link.icon}
                      color="white"
                      viewClass={` ${link.iconType}`}
                    />
                  </Box>
                )}
              </Link>
            ))}
          </HStack>
        </HStack>
        <Divider mt={"16px"} mb={"32px"} borderColor={"#FCFCFC33"} />
        <Flex
          display={{ base: "block", md: "flex" }}
          justifyContent={"start"}
          align={"flex-start"}
          color={"#ffffff"}
        >
          {/*<Stack*/}
          {/*  gap={16}*/}
          {/*  align={"flex-start"}*/}
          {/*  direction={{ base: "column", md: "row" }}*/}
          {/*>*/}
          <SimpleGrid
            flex={1}
            columns={2}
            gap={"120px"}
            justifyContent={"start"}
            display={{ base: "grid", md: "flex" }}
          >
            {footerLinks.map((link) => (
              <VStack key={link.title} align={"flex-start"} gap={4}>
                <Heading variant={"footerHeading"} fontSize={"20px"}>
                  {link.title}
                </Heading>
                {link.links.map((item) => (
                  <Link
                    href={item.link}
                    key={item.title}
                    target={item.isExternal ? "_blank" : "_self"}
                    rel={item.isExternal ? "noopener noreferrer" : ""}
                  >
                    <Button
                      variant={"link"}
                      key={item.title}
                      color={"#ffffff"}
                      fontSize={{ base: "14px", md: "16px" }}
                      fontWeight={400}
                      opacity={0.69}
                      rightIcon={
                        item.isExternal ? <ExternalLinkIcon /> : undefined
                      }
                      _hover={{
                        color: "primary.red"
                      }}
                    >
                      {item.title}
                    </Button>
                  </Link>
                ))}
              </VStack>
            ))}
          </SimpleGrid>
        </Flex>
        <HStack
          gap={4}
          mt={4}
          display={{ base: "flex", md: "none" }}
          justify={"center"}
        >
          {footerSocialLinks.map((link) => (
            <Link href={link.link} key={link.name}>
              <Box
                w={"24px"}
                h={"24px"}
                borderRadius={"100%"}
                className={"icon-box"}
                bg={"#9C9C9C"}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Icon
                  icon={link.icon}
                  color="white"
                  viewClass={`footer-icon ${link.iconType}`}
                />
              </Box>
            </Link>
          ))}
        </HStack>
        <Box display={{ base: "block", md: "block" }}>
          <Divider mt={"28px"} borderColor={"#ECECEC33"} />
          <Flex
            flexDir={{ base: "column", md: "row" }}
            justify={"space-between"}
            align={"center"}
            mt={4}
            gap={4}
          >
            <Text fontSize={14} fontWeight={400} color={"#ffffff"}>
              © Copyright 2024 Persistence Labs. All rights reserved.
            </Text>
            <HStack gap={8}>
              <Link href={"/termsofuse"}>
                <Button
                  variant={"link"}
                  color={"#ffffff"}
                  fontSize={14}
                  fontWeight={400}
                >
                  Terms of Use
                </Button>
              </Link>
              <Link href={"/privacy"}>
                <Button
                  variant={"link"}
                  color={"#ffffff"}
                  fontSize={14}
                  fontWeight={400}
                >
                  Privacy Policy
                </Button>
              </Link>
            </HStack>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
