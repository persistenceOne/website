import SocialCard from "@/components/atoms/social-card";
import { Box, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "next-export-i18n";

const CommunityPanel = () => {
  const { t } = useTranslation();
  const socialCardContents = [
    {
      title: "X (Formerly Twitter)",
      description: t("FOLLOW_PERSISTENCE"),
      link: "https://x.com/PersistenceOne",
      image: "/icons/twitter.svg"
    },
    {
      title: "Telegram",
      description: t("JOIN_CHAT"),
      link: "https://t.me/PersistenceOne",
      image: "/icons/telegram.svg"
    },
    {
      title: "Discord",
      description: t("JOIN_OUR_COMMUNITY"),
      link: "https://discord.persistence.one/",
      image: "/icons/discord.svg"
    },
    {
      title: "Blogs",
      description: t("LEARN_MORE_ABOUT_PERSISTENCE"),
      link: "https://blog.persistence.one/",
      image: "/icons/medium.svg"
    },
    {
      title: "Github",
      description: t("CONTRIBUTE"),
      link: "https://github.com/PersistenceOne",
      image: "/icons/github.svg"
    },
    {
      title: "Community Forum",
      description: t("JOIN_DISCUSSIONS"),
      link: "https://forum.persistence.one/",
      image: "/icons/forum.svg"
    }
  ];
  return (
    <Box as="section" maxW={"930px"} mx={"auto"}>
      <Text
        mb={"30px"}
        mt={"24px"}
        color={"#633C0DCC"}
        fontSize={{ base: "16px", md: "20px" }}
        maxW={"755px"}
        mx={"auto"}
      >
        {t("VALUES_SECTION3_COMMUNITY_CONTENT")}
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        {socialCardContents.map((card, index) => (
          <SocialCard key={index} {...card} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default CommunityPanel;
