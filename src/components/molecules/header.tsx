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
  Container,
  Spacer
} from "@chakra-ui/react";

const menuItems = [
  {
    id: 0,
    name: "Learn",
    link: "/tech"
  },
  {
    id: 1,
    name: "Explore",
    link: "/faqs"
  },
  {
    id: 2,
    name: "LSTFi",
    link: "/people"
  },
  {
    id: 3,
    name: "About",
    link: "/story"
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
            <Popover placement={"top-start"}>
              <PopoverTrigger>
                <Text cursor={"pointer"}>{item.name}</Text>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverBody>Popver content</PopoverBody>
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
