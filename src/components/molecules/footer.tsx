import { ArrowForwardIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Heading,
  Text,
  VStack
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
    color: "#1DA1F2"
  },
  {
    name: "Discord",
    link: "https://discord.com/invite/3u3Zv5t",
    icon: "discord",
    iconType: "stroke",
    color: "#5865F2"
  },
  {
    name: "Telegram",
    link: "https://t.me/persistenceone",
    icon: "telegram",
    iconType: "stroke",
    color: "#0077B5"
  },
  {
    name: "Medium",
    link: "https://medium.com/persistence-blog",
    icon: "medium",
    iconType: "stroke",
    color: "#000000"
  }
];

const footerLinks = [
  {
    title: "Learn",
    links: [
      {
        title: "Our Story",
        link: "/story",
        isExternal: false
      },
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
        title: "pSTAKE Finance",
        link: "https://pstake.finance",
        isExternal: true
      },
      {
        title: "Dexter",
        link: "https://dexter.zone",
        isExternal: true
      }
    ]
  },
  {
    title: "dApps",
    links: [
      {
        title: "Trade",
        link: "/",
        isExternal: true
      },
      {
        title: "Liquid Stake",
        link: "/",
        isExternal: true
      },
      {
        title: "Bridge",
        link: "/",
        isExternal: true
      },
      {
        title: "Wallet",
        link: "/",
        isExternal: true
      },
      {
        title: "Stake XPRT",
        link: "/",
        isExternal: true
      }
    ]
  },
  {
    title: "Get Connected",
    links: [
      {
        title: "People",
        link: "/people",
        isExternal: false
      },
      {
        title: "Blogs",
        link: "https://medium.com/persistence-blog",
        isExternal: true
      },
      {
        title: "Documentation",
        link: "https://docs.persistence.one",
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
    <Box as={"footer"} bg={"#252424"} py={16}>
      <Flex justify={"space-around"} align={"flex-start"} color={"#ffffff"}>
        <VStack align={"flex-start"}>
          <Image
            src={"images/persistence-logo.svg"}
            width={186}
            height={24}
            alt={"Persistence Logo"}
          />
          <Text fontWeight={400} fontSize={12}>
            Managed By Persistence Labs
          </Text>
          <Link href={"/"}>
            <Button
              variant={"link"}
              rightIcon={<ArrowForwardIcon />}
              color={"#ECECEC"}
              fontWeight={600}
              fontSize={16}
            >
              Download Media Kit
            </Button>
          </Link>
          <HStack gap={4} mt={4}>
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
        </VStack>
        <HStack gap={16} align={"flex-start"}>
          {footerLinks.map((link) => (
            <VStack key={link.title} align={"flex-start"} gap={4}>
              <Heading variant={"footerHeading"}>{link.title}</Heading>
              {link.links.map((item) => (
                <Link href={item.link} key={item.title}>
                  <Button
                    variant={"link"}
                    key={item.title}
                    color={"#ffffff"}
                    fontSize={16}
                    fontWeight={400}
                    opacity={0.69}
                    rightIcon={
                      item.isExternal ? <ExternalLinkIcon /> : undefined
                    }
                  >
                    {item.title}
                  </Button>
                </Link>
              ))}
            </VStack>
          ))}
        </HStack>
      </Flex>
      <Box px={16}>
        <Divider mt={16} borderColor={"#ECECEC"} />
        <HStack justify={"space-between"} align={"center"} mt={4}>
          <Text fontSize={14} fontWeight={400} color={"#ffffff"}>
            © Copyright 2024 Persistence Labs. All rights reserved.
          </Text>
          <HStack gap={8}>
            <Link href={"/"}>
              <Button
                variant={"link"}
                color={"#ffffff"}
                fontSize={14}
                fontWeight={400}
              >
                Terms of Use
              </Button>
            </Link>
            <Link href={"/"}>
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
        </HStack>
      </Box>
    </Box>
  );
};

export default Footer;
