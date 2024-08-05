import React, { PureComponent } from "react";
import { useRouter } from "next/router";
import { useTranslation, LanguageSwitcher } from "next-export-i18n";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";
import {
  Box,
  HStack,
  Link,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  VStack
} from "@chakra-ui/react";

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
    name: "ENGLISH"
  },
  {
    imgUrl: "/images/lang/cn.png",
    code: "cn",
    name: "CHINESE"
  },
  {
    imgUrl: "/images/lang/kr.png",
    code: "ko",
    name: "한국어"
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
              <span className={"uppercase ml-1"}>({item.code})</span>
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
  const params = useSearchParams();
  const search = params.get("lang");
  const { t } = useTranslation();
  const selectedLang = langList.find((item) => item.code === search);

  const activeLang = selectedLang === undefined ? defaultItem : selectedLang;
  console.log(activeLang, search, "activeLang", router.pathname);

  return (
    <Popover placement={"top-start"} trigger={"hover"}>
      <PopoverTrigger>
        <Box
          display="flex"
          alignItems="center"
          px={type === "mobile" ? "7" : "0"}
          py={type === "mobile" ? "4" : "0"}
        >
          <Image src={activeLang!.imgUrl} alt={"test"} width={22} height={16} />
          <Text
            cursor={"pointer"}
            ml={"14px"}
            fontSize={"18px"}
            textTransform={"uppercase"}
            borderRadius={"6px"}
            _hover={{ color: "#E59636" }}
            color={
              type === "mobile"
                ? "#633C0D"
                : router.pathname === "/"
                ? "#FFFFFF"
                : "#000000"
            }
          >
            {activeLang?.code}
          </Text>
        </Box>
      </PopoverTrigger>
      <PopoverContent borderRadius={6}>
        <PopoverArrow />
        <PopoverBody px={"14px"} py={"16px"}>
          <VStack align={"start"} gap={0}>
            {langList.map((subItem: any) => (
              <LanguageSwitcher key={subItem.title} lang={subItem.code}>
                <Box
                  width={"100%"}
                  textDecoration={"none"}
                  _hover={{
                    textDecoration: "none"
                  }}
                >
                  <HStack
                    cursor={"pointer"}
                    className={"nav-item"}
                    p={"10px"}
                    fontWeight={500}
                    _hover={{ bg: "#E596361A", borderRadius: "6px" }}
                  >
                    <VStack align={"start"} gap={0}>
                      <Box
                        style={{ display: "flex", alignItems: "center" }}
                        color={"#633C0D"}
                      >
                        <Image
                          src={subItem!.imgUrl}
                          alt={"dd"}
                          width={22}
                          height={16}
                          className={"mr-[6px]"}
                        />
                        <Text
                          cursor={"pointer"}
                          ml={"14px"}
                          fontSize={16}
                          pr={"5px"}
                        >
                          {subItem.name}
                        </Text>
                        <Text
                          cursor={"pointer"}
                          as="span"
                          fontSize={16}
                          textTransform={"uppercase"}
                          pr={"5px"}
                        >
                          ({subItem.code})
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
