import { Box, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Icon from "../molecules/Icon";

export interface TeamMemberCardInterface {
  image: string;
  name: string;
  role: string;
  socialLinks: {
    name: string;
    link: string;
    icon: string;
    color: string;
  }[];
}

const TeamMemberCard = ({
  image,
  name,
  role,
  socialLinks
}: TeamMemberCardInterface) => {
  return (
    <VStack
      flexBasis={{
        base: "calc(100% / 2 )",
        md: "calc(100% / 3 )",
        lg: "calc(100% / 5 )"
      }}
    >
      <Box style={{ width: "200px", height: "200px", position: "relative" }}>
        <Image
          src={image}
          alt={name}
          fill
          objectFit="cover"
          style={{ borderRadius: "50%" }}
        />
      </Box>
      <Heading fontSize={22} mt={4}>
        {name}
      </Heading>
      <Text fontSize={14}>{role}</Text>
      <HStack>
        {socialLinks.map((item) => (
          <Link
            href={item.link}
            key={item.name}
            target="_blank"
            rel="noreferrer"
          >
            <Box
              w={"24px"}
              h={"24px"}
              p={"6px"}
              bg={"#9C9C9C"}
              borderRadius={"100%"}
              _hover={{ bg: item.color }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Icon icon={item.icon} />
            </Box>
          </Link>
        ))}
      </HStack>
    </VStack>
  );
};

export default TeamMemberCard;
