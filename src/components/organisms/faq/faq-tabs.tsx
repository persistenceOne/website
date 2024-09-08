import {
  Heading,
  Text,
  Container,
  Box,
  Button,
  VStack,
  useMediaQuery
} from "@chakra-ui/react";
import React from "react";
import AccordionList from "@/components/organisms/faq/accordion-list";
import Link from "next/link";
import { aboutPersistence } from "@/components/organisms/faq/faqList";
import { TELEGRAM_PERSISTENCE_COMMUNITY_LINK } from "@/utils/config";
import { useTranslation } from "next-export-i18n";

const FaqTabs = () => {
  const { t } = useTranslation();
  const [isMobile] = useMediaQuery("(max-width: 468px)");
  return (
    <Container
      maxW={"1440px"}
      px={{ base: "20px", md: "80px" }}
      pt={"120px"}
      pb={"80px"}
    >
      <VStack align="center" w="full">
        <Heading
          textAlign={"center"}
          color={"#633C0D"}
          fontSize={{ base: "26px", md: "48px" }}
          lineHeight={{ base: "32px", md: "72px" }}
          mb={{ base: "20px", md: "40px" }}
        >
          {t("FAQS_TITLE")}
        </Heading>
        <AccordionList list={aboutPersistence(t)} />
        <Box
          p={{ base: 4, md: 4 }}
          px={{ base: 4, md: 4 }}
          pt={{ base: 4, md: 4 }}
          bg="white"
          borderRadius={8}
          alignSelf={"center"}
          w={{ base: "100%", md: "370px" }}
          mr={2}
          boxShadow={"md"}
          mt={"40px"}
        >
          <VStack align="start" spacing={2}>
            <Text
              color="#423F40"
              fontWeight={700}
              fontSize={{ base: 12, md: 16 }}
            >
              {t("FAQ_SECTION2_TITLE")}
            </Text>
            <Text color="#423F40B2" fontSize={{ base: "10px", md: "14px" }}>
              {t("FAQ_SECTION2_CONTENT")}
            </Text>
            <Link
              href={TELEGRAM_PERSISTENCE_COMMUNITY_LINK}
              target="_blank"
              rel="noopenner noreferrer"
              style={{ width: "100%" }}
            >
              <Button
                variant={"primary"}
                w="full"
                border={"none"}
                color="white"
                borderRadius={4}
                mt={2}
                fontSize={{ base: "12px", md: "14px" }}
              >
                {isMobile ? "Telegram" : "Go To Telegram"}
              </Button>
            </Link>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default FaqTabs;
