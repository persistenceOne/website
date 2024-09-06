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
  SimpleGrid
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Icon from "./Icon";
import { useTranslation, LinkWithLocale } from "next-export-i18n";

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
    link: "https://discord.persistence.one/",
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
    color: "#918678"
  }
];

const footerLinks = [
  {
    title: "LEARN",
    links: [
      {
        title: "VISION",
        link: "/vision",
        isExternal: false
      },
      {
        title: "FAQs",
        link: "/faqs",
        isExternal: false
      },
      {
        title: "BLOG",
        link: "https://blog.persistence.one/",
        isExternal: true
      },
      {
        title: "DOCS",
        link: "https://docs.persistence.one/",
        isExternal: true
      }
    ]
  },
  {
    title: "XPRT",
    links: [
      {
        title: "ABOUT",
        link: "/xprt",
        isExternal: false
      },
      {
        title: "XPRT_STAKING",
        link: "https://wallet.keplr.app/chains/persistence",
        isExternal: true
      },
      {
        title: "pWallet",
        link: "https://wallet.persistence.one/",
        isExternal: true
      },
      {
        title: "GOVERNANCE",
        link: "https://www.mintscan.io/persistence/proposals",
        isExternal: true
      }
    ]
  },
  {
    title: "CONNECT",
    links: [
      {
        title: "Persisters",
        link: "https://careers.persistence.one/",
        isExternal: false
      },
      {
        title: "Forum",
        link: "https://forum.persistence.one",
        isExternal: true
      }
    ]
  },
  {
    title: "COMMUNITY",
    links: [
      {
        title: "X (Twitter)",
        link: "https://twitter.com/PersistenceOne",
        isExternal: true
      },
      {
        title: "Discord",
        link: "https://discord.persistence.one/",
        isExternal: true
      },
      {
        title: "Telegram",
        link: "https://t.me/persistenceone",
        isExternal: true
      },
      {
        title: "Community Forum",
        link: "https://forum.persistence.one/",
        isExternal: true
      }
    ]
  }
];

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Box as={"footer"} bg={"#1B1003"}>
      <Container
        maxW={"1440px"}
        px={{ base: "30px", md: "80px" }}
        py={{ base: "30px", md: "40px" }}
      >
        <Flex
          display={{ base: "block", lg: "flex" }}
          justify={"space-between"}
          align={"flex-start"}
          color={"#ffffff"}
        >
          <VStack
            align={"flex-start"}
            mb={{ base: "20px", md: "0" }}
            w={{ base: "100%", md: "30%" }}
          >
            <Image
              src={"images/persistence-logo.svg"}
              width={186}
              height={24}
              alt={"Persistence Logo"}
            />
            <LinkWithLocale
              href={
                "https://persistence.notion.site/Persistence-Brand-Press-Kit-85150f1ae50a48cf9edb46577261ed29"
              }
              target={"_blank"}
            >
              <Button
                variant={"link"}
                rightIcon={<ArrowForwardIcon />}
                color={"#ECECEC"}
                fontWeight={600}
                fontSize={16}
                _hover={{
                  color: "primary.red"
                }}
              >
                {t("DOWNLOAD_MEDIA_KIT")}
              </Button>
            </LinkWithLocale>
            <HStack gap={4} mt={4} display={{ base: "none", md: "flex" }}>
              {footerSocialLinks.map((link) => (
                <LinkWithLocale
                  href={link.link}
                  key={link.name}
                  target="_blank"
                  rel="noopenner noreferrer"
                >
                  {link.icon !== "github" ? (
                    <Box
                      w={"24px"}
                      h={"24px"}
                      _hover={{ bg: "#E59636" }}
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
                      // _hover={{ bg: "white" }}
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
                        viewClass={`footer-github-icon ${link.iconType}`}
                      />
                    </Box>
                  )}
                </LinkWithLocale>
              ))}
            </HStack>
          </VStack>
          <SimpleGrid
            flex={1}
            columns={2}
            gap={{ base: "30px", md: "70px", "2xl": "130px" }}
            justifyContent={"end"}
            display={{ base: "grid", md: "flex" }}
          >
            {footerLinks.map((link) => (
              <VStack
                key={link.title}
                align={"flex-start"}
                gap={{ base: 2, xl: 4 }}
              >
                <Heading
                  color={"#918678"}
                  fontSize={{ base: "16px", xl: "20px" }}
                >
                  {t(link.title)}
                </Heading>
                {link.links.map((item) => (
                  <LinkWithLocale
                    href={item.link}
                    key={item.title}
                    fontSize={{ base: "12px", xl: "16px" }}
                    target={item.isExternal ? "_blank" : "_self"}
                    rel={item.isExternal ? "noopener noreferrer" : ""}
                  >
                    <Button
                      variant={"link"}
                      key={item.title}
                      color={"#918678"}
                      padding={0}
                      justifyContent={"start"}
                      fontSize={{ base: "12px", xl: "16px" }}
                      fontWeight={400}
                      opacity={0.69}
                      rightIcon={
                        item.isExternal ? <ExternalLinkIcon /> : undefined
                      }
                      _hover={{
                        color: "primary.red"
                      }}
                    >
                      {t(item.title)}
                    </Button>
                  </LinkWithLocale>
                ))}
              </VStack>
            ))}
          </SimpleGrid>
        </Flex>
        <HStack
          gap={4}
          mt={6}
          display={{ base: "flex", md: "none" }}
          justify={"center"}
        >
          {footerSocialLinks.map((link) => (
            <LinkWithLocale
              href={link.link}
              key={link.name}
              aria-label={link.name}
            >
              <Box
                w={"24px"}
                h={"24px"}
                borderRadius={"100%"}
                className={"icon-box"}
                bg={"#918678"}
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
            </LinkWithLocale>
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
            <Text
              fontSize={14}
              fontWeight={400}
              color={"#ECECEC"}
              textAlign={{ base: "center", md: "left" }}
            >
              © Copyright 2024 Persistence Labs. All rights reserved.
            </Text>
            <HStack gap={8}>
              <LinkWithLocale href={"/termsofuse"} fontSize={14}>
                <Button
                  variant={"link"}
                  color={"#ECECEC"}
                  fontSize={14}
                  fontWeight={400}
                >
                  {t("TERMS_OF_USE")}
                </Button>
              </LinkWithLocale>
              <LinkWithLocale href={"/privacy"} fontSize={14}>
                <Button
                  variant={"link"}
                  color={"#ECECEC"}
                  fontSize={14}
                  fontWeight={400}
                >
                  {t("PRIVACY_POLICY")}
                </Button>
              </LinkWithLocale>
            </HStack>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
