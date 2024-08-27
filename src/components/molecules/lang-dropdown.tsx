import React, { PureComponent, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation, LanguageSwitcher } from "next-export-i18n";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";
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

interface Props {
  isTablet: boolean;
  path: string;
}

interface LanguageItemProps {
  imgUrl: string;
  code: string;
  name: string;
}

const langList: LanguageItemProps[] = [
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
    imgUrl: "/images/lang/ru.png",
    code: "ru",
    name: "русский"
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

export const learnDropDownContent = (learnList: any[]) => {
  return (
    <div className={"!bg-[#1B1B1B] md:!block drop-shadow-md rounded-md py-2"}>
      {learnList.map((item, index) => (
        <LanguageSwitcher lang={item.code} key={index}>
          <div
            className="px-6 md:px-3 py-3 flex items-center md:py-3
                        hover:cursor-pointer text-light-high whitespace-nowrap group"
          >
            <Image src={item.imgUrl} alt={"dd"} width={24} height={24} />
            <span
              className="ml-4 text-light-high text-base md:text-sm
                        font-medium leading-normal md:text-xsm md:ml-2"
            >
              {item.name}
              <span className={"ml-1"}>({item.code})</span>
            </span>
          </div>
        </LanguageSwitcher>
      ))}
    </div>
  );
};

const LangDropdown = ({ type }: any) => {
  const defaultItem = langList.find((item) => item.code === "en");
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const params = useSearchParams();
  const search = params.get("lang");
  const { t } = useTranslation();
  const selectedLang = langList.find((item) => item.code === search);

  const activeLang = selectedLang === undefined ? defaultItem : selectedLang;
  console.log(activeLang, search, "activeLang", router.pathname);

  console.log(isEditing, "isEditing");
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
          // w={"161px"}
          // h={"40px"}
          // bg={
          //   isEditing
          //     ? type === "mobile"
          //       ? "#E596364D"
          //       : "#E596364D"
          //     : "transparent"
          // }
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
            // className={"nav-item-title"}
            fontWeight={500}
            // color={
            //   type === "mobile"
            //     ? "#FFFFFF"
            //     : router.pathname === "/"
            //     ? "#FFFFFF"
            //     : "#000000"
            // }
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
              <LanguageSwitcher key={subItem.title} lang={subItem.code}>
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
