import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";

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
    <>
      <Flex
        as={"nav"}
        justify={"center"}
        align={"center"}
        pt={2}
        className={"navigation-bar"}
      >
        <Box pos={"absolute"} left={"60px"} top={"0px"} mt={"10px"}>
          <Link href="/">
            <Image
              src="/images/persistence-logo-dark.svg"
              alt="Persistence Logo"
              width={251}
              height={32}
            />
          </Link>
        </Box>
        <HStack gap="56px" justify="center" align={"center"} mt={"10px"}>
          {menuItems.map((item) => (
            <Link href={item.link} key={item.id}>
              <Text>{item.name}</Text>
            </Link>
          ))}
        </HStack>
      </Flex>
    </>
  );
};

export default Header;
