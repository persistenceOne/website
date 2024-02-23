import SocialCard from "@/components/atoms/social-card";
import { Box, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const socialCardContents = [
  {
    title: "X (Formerly Twitter)",
    description: "Follow Persistence One",
    link: "https://x.com/PersistenceOne",
    image: "/icons/twitter.svg"
  },
  {
    title: "Telegram",
    description: "Join chat",
    link: "https://t.me/PersistenceOne",
    image: "/icons/telegram.svg"
  },
  {
    title: "Discord",
    description: "Join our community",
    link: "https://discord.com/invite/vyvp3scWnH",
    image: "/icons/discord.svg"
  },
  {
    title: "Blogs",
    description: "Learn about Persistence One",
    link: "https://blog.persistence.one/",
    image: "/icons/medium.svg"
  },
  {
    title: "Github",
    description: "Contribute",
    link: "https://github.com/PersistenceOne",
    image: "/icons/github.svg"
  },
  {
    title: "Governance",
    description: "Join discussions",
    link: "https://forum.persistence.one/",
    image: "/icons/forum.svg"
  }
];
const CommunityPanel = () => {
  return (
    <Box as="section" maxW={"930px"} mx={"auto"}>
      <Text mb={"30px"} mt={"24px"} color={"text.blackHigh"} fontSize={"20px"}>
        Learn more about Persistence One, chat with fellow Persisters, and have
        your voice be heard for the future of the liquid staking economy.
      </Text>
      <SimpleGrid columns={2} spacing={6}>
        {socialCardContents.map((card, index) => (
          <SocialCard key={index} {...card} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default CommunityPanel;
