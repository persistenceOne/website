import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Flex,
  HStack,
  Popover,
  Text,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  VStack,
  Container,
  Spacer
} from "@chakra-ui/react";
import Icon from "./Icon";

const menuItems = [
  {
    id: 0,
    name: "Learn",
    subItems: [
      {
        title: "Story",
        description: "Lorem ipsum dolor sit Lorem ipsum",
        icon: "announcement",
        iconType: "fill",
        link: "/story",
        isExternal: false,
        comingSoon: false
      },
      {
        title: "XPRT",
        description: "Lorem ipsum dolor sit Lorem ipsum",
        icon: "plogo",
        iconType: "fill",
        link: "/xprt",
        isExternal: false,
        comingSoon: false
      },
      {
        title: "FAQs",
        description: "Lorem ipsum dolor sit Lorem ipsum",
        icon: "faq",
        iconType: "stroke",
        link: "/faqs",
        isExternal: false,
        comingSoon: false
      },
      {
        title: "Roadmap",
        description: "",
        icon: "road",
        iconType: "stroke",
        link: "/roadmap",
        isExternal: false,
        comingSoon: true
      }
    ]
  },
  {
    id: 1,
    name: "Explore",
    subItems: [
      {
        title: "Tech",
        description: "Lorem ipsum dolor sit Lorem ipsum",
        icon: "tech",
        iconType: "stroke",
        link: "/tech",
        isExternal: false,
        comingSoon: false
      },
      {
        title: "Stats",
        description: "",
        icon: "stats",
        iconType: "fill",
        link: "/xprt",
        isExternal: true,
        comingSoon: true
      },
      {
        title: "Ecosystem",
        description: "",
        icon: "ecosystem",
        iconType: "fill",
        link: "/ecosystem",
        isExternal: false,
        comingSoon: true
      }
    ]
  },
  {
    id: 2,
    name: "dApps",
    subItems: [
      {
        title: "Trade",
        description: "Lorem ipsum dolor sit Lorem ipsum",
        icon: "trade",
        iconType: "fill",
        link: "https://app.dexter.zone",
        isExternal: true,
        comingSoon: false
      },
      {
        title: "Liquid Stake",
        description: "Lorem ipsum dolor sit Lorem ipsum",
        icon: "liquidstake",
        iconType: "stroke",
        link: "https://app.pstake.finance",
        isExternal: true,
        comingSoon: false
      },
      {
        title: "Stake XPRT",
        description: "Lorem ipsum dolor sit Lorem ipsum",
        icon: "stake",
        iconType: "fill",
        link: "https://audit.one",
        isExternal: true,
        comingSoon: false
      },
      {
        title: "Bridge",
        description: "Lorem ipsum dolor sit Lorem ipsum",
        icon: "tech",
        iconType: "stroke",
        link: "https://bridge.persistence.one",
        isExternal: true,
        comingSoon: false
      }
    ]
  },
  {
    id: 3,
    name: "About",
    subItems: [
      {
        title: "People",
        description: "Lorem ipsum dolor sit Lorem ipsum",
        icon: "people",
        iconType: "fill",
        link: "/people",
        isExternal: false,
        comingSoon: false
      },
      {
        title: "Blog",
        description: "Lorem ipsum dolor sit Lorem ipsum",
        icon: "people",
        iconType: "fill",
        link: "https://medium.com/persistence-blog",
        isExternal: true,
        comingSoon: false
      },
      {
        title: "Documentation",
        description: "Lorem ipsum dolor sit Lorem ipsum",
        icon: "doc",
        iconType: "fill",
        link: "https://docs.persistence.one",
        isExternal: true,
        comingSoon: false
      },
      {
        title: "Community Forum",
        description: "Lorem ipsum dolor sit Lorem ipsum",
        icon: "announcement",
        iconType: "fill",
        link: "https://forum.persistence.one/",
        isExternal: true,
        comingSoon: false
      },
      {
        title: "Download Media Kit",
        description: "",
        icon: "download",
        iconType: "stroke",
        link: "/ecosystem",
        isExternal: false,
        comingSoon: false
      },
      {
        title: "Social",
        description: "",
        icon: "ecosystem",
        iconType: "fill",
        link: "/ecosystem",
        isExternal: false,
        comingSoon: true
      }
    ]
  }
];

const Header = () => {
  return (
    <Container maxW={"1440px"} px={"60px"}>
      <Flex
        as={"nav"}
        justify={"between"}
        align={"center"}
        pt={2}
        className={"navigation-bar"}
      >
        <Box>
          <Link href="/">
            <Image
              src="/images/persistence-logo-dark.svg"
              alt="Persistence Logo"
              width={251}
              height={32}
            />
          </Link>
        </Box>
        <Spacer />
        <HStack gap="56px" justify="center" align={"center"} mt={"10px"}>
          {menuItems.map((item) => (
            <Popover placement={"top-start"} trigger="click" key={item.id}>
              <PopoverTrigger>
                <Text cursor={"pointer"}>{item.name}</Text>
              </PopoverTrigger>
              <PopoverContent borderRadius={6}>
                <PopoverArrow />
                <PopoverBody p={4}>
                  <VStack align={"start"} gap={4}>
                    {item.subItems.map((subItem) => (
                      <HStack
                        key={subItem.title}
                        cursor={"pointer"}
                        className={`nav-item ${
                          subItem.comingSoon ? "coming-soon" : ""
                        }`}
                      >
                        {/*<Image*/}
                        {/*  src={subItem.icon}*/}
                        {/*  alt={subItem.title}*/}
                        {/*  width={21}*/}
                        {/*  height={21}*/}
                        {/*/>*/}
                        <Box
                          w={"40px"}
                          h={"40px"}
                          borderRadius={"100%"}
                          className={"icon-box"}
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                          }}
                        >
                          <Icon
                            icon={subItem.icon}
                            viewClass={`nav-icon ${subItem.iconType}`}
                          />
                        </Box>
                        <VStack align={"start"} gap={0}>
                          <Link href={subItem.link}>
                            <Text
                              cursor={"pointer"}
                              fontSize={16}
                              color={
                                subItem.comingSoon ? "#3D3D3D" : "primary.red"
                              }
                              fontWeight={500}
                            >
                              {subItem.title}{" "}
                              {subItem.comingSoon ? "(Coming Soon)" : ""}
                            </Text>
                          </Link>
                          <Text
                            fontSize={14}
                            color={"#3D3D3D"}
                            fontWeight={400}
                          >
                            {subItem.description}
                          </Text>
                        </VStack>
                      </HStack>
                    ))}
                  </VStack>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          ))}
        </HStack>
        <Spacer />
        <Box />
      </Flex>
    </Container>
  );
};

export default Header;
