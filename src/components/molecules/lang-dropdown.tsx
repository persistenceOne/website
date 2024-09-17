import React, { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation, LanguageSwitcher } from "next-export-i18n";
import { useSearchParams } from "next/navigation";
import {
  Box,
  HStack,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  VStack
} from "@chakra-ui/react";
import Icon from "@/components/molecules/Icon";

interface LanguageItemProps {
  imgUrl: string;
  code: string;
  name: string;
}

const liveLangList: LanguageItemProps[] = [
  {
    imgUrl: "/images/lang/en.png",
    code: "en",
    name: "English"
  },
  {
    imgUrl: "/images/lang/cn.png",
    code: "cn",
    name: "中国人 "
  },
  {
    imgUrl: "/images/lang/kr.png",
    code: "ko",
    name: "한국인"
  },
  {
    imgUrl: "/images/lang/ru.png",
    code: "ru",
    name: "русский"
  },
  {
    imgUrl: "/images/lang/es.png",
    code: "es",
    name: "Española"
  }
];

const prevLangList: LanguageItemProps[] = [
  {
    imgUrl: "/images/lang/fr.png",
    code: "fr",
    name: "Français"
  },
  {
    imgUrl: "/images/lang/es.png",
    code: "es",
    name: "Española"
  },
  {
    imgUrl: "/images/lang/pt.png",
    code: "pt",
    name: "Portuguesa"
  },
  {
    imgUrl: "/images/lang/vi.png",
    code: "vi",
    name: "Tiếng Việt"
  },
  {
    imgUrl: "/images/lang/nl.png",
    code: "nl",
    name: "Nederlands"
  },
  {
    imgUrl: "/images/lang/ja.png",
    code: "ja",
    name: "日本語"
  }
];

const LangDropdown = ({ type }: any) => {
  const env: string = process.env.NEXT_PUBLIC_ENVIRONMENT!;
  const langList =
    env === "production" ? liveLangList : [...liveLangList, ...prevLangList];
  const defaultItem = langList.find((item) => item.code === "en");
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const params = useSearchParams();
  const search = params.get("lang");
  const selectedLang = langList.find((item) => item.code === search);

  const activeLang = selectedLang === undefined ? defaultItem : selectedLang;

  return (
    <Popover
      placement={type === "mobile" ? "top-start" : "bottom-end"}
      trigger={"hover"}
      onOpen={() => {
        setIsEditing(true);
      }}
      onClose={() => {
        setIsEditing(false);
      }}
    >
      <PopoverTrigger>
        <Box
          cursor={"pointer"}
          className={`language-button ${
            router.pathname !== "/" || type === "mobile" ? "mobile" : ""
          } ${isEditing ? "active" : ""}`}
          display="flex"
          alignItems="center"
          px={type === "mobile" ? "7" : "0"}
          py={type === "mobile" ? "4" : "0"}
          color={
            isEditing
              ? type === "mobile"
                ? "#E596364D"
                : "#E596364D"
              : "#ffffff"
          }
          borderRadius={"58px"}
          justifyContent={type === "mobile" ? "start" : "center"}
          textAlign={"center"}
        >
          <Icon icon={"language"} viewClass={`language`} />
          <Text
            ml={"4px"}
            fontSize={"16px"}
            textTransform={"uppercase"}
            fontWeight={500}
          >
            {activeLang?.code}
          </Text>
          <Icon icon={"arrow-filled"} viewClass={`language-button-arrow `} />
        </Box>
      </PopoverTrigger>
      <PopoverContent
        borderRadius={6}
        minW={"131px"}
        border={"0px"}
        w={"max-content"}
        overflow={"hidden"}
      >
        <PopoverBody p={"0"}>
          <VStack align={"start"} gap={0}>
            {langList.map((subItem: any) => (
              <LanguageSwitcher key={subItem.code} lang={subItem.code}>
                <Box
                  width={"100%"}
                  textDecoration={"none"}
                  _hover={{
                    textDecoration: "none"
                  }}
                  bg={
                    activeLang?.code === subItem.code ? "#E596364D" : "#FFFEFE"
                  }
                >
                  <HStack
                    cursor={"pointer"}
                    className={"nav-item"}
                    py={"10px"}
                    px={"20px"}
                    fontWeight={500}
                    _hover={{ bg: "#E596361A", borderRadius: "6px" }}
                  >
                    <VStack align={"start"} gap={0}>
                      <Box
                        style={{ display: "flex", alignItems: "center" }}
                        color={"#633C0D"}
                      >
                        <Text
                          cursor={"pointer"}
                          ml={"14px"}
                          fontSize={16}
                          pr={"5px"}
                        >
                          {subItem.name}
                        </Text>
                      </Box>
                    </VStack>
                  </HStack>
                </Box>
              </LanguageSwitcher>
            ))}
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
export default LangDropdown;
