import {
  Box,
  Heading,
  Container,
  Text,
  Flex,
  HStack,
  Button,
  Input
} from "@chakra-ui/react";
import React, { useState } from "react";
import Image from "next/image";
import TallyForm from "@/components/molecules/tally-form";
import { useTranslation } from "next-export-i18n";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import axios from "axios";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [validationError, setValidationError] = useState(false);
  const [loader, setLoader] = useState(false);
  const [formStatus, setFormStatus] = useState(false);

  const onChange = (evt: any) => {
    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (evt.target?.value && evt.target.value.match(isValidEmail)) {
      setValidationError(false);
      setEmail(evt.target.value);
    } else {
      setValidationError(true);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoader(true);
      // const list_id = "c503401e-ab5f-43e3-9d94-b84a3c27468d";
      // const data = {
      //   list_ids: ["c503401e-ab5f-43e3-9d94-b84a3c27468d"],
      //   contacts: [
      //     {
      //       email
      //     }
      //   ]
      // };
      //
      // const apiKey = process.env.NEXT_PUBLIC_SENDGRID_API_KEY;
      // const response = await fetch(
      //   "https://api.sendgrid.com/v3/marketing/contacts",
      //   {
      //     method: "PUT",
      //     headers: {
      //       "Content-Type": "application/json",
      //       Authorization: `Bearer ${apiKey}` // Bearer token for authorization
      //     },
      //     body: JSON.stringify(data)
      //   }
      // );

      // if (!response.ok) {
      //   throw new Error("Network response was not ok");
      // }
      //
      // const responseData = await response.json();

      const response = await axios.post("/api/send-email", {
        email
      });

      // const googleScriptURL =
      //   "https://script.google.com/macros/s/AKfycbxRazvOhSV8XMV_lcfczEQmjlD-dj7wKF0v7LfQN95b3fg6SvZObb-CucZdRcK1xlG-/exec";
      // const data = { email: email };
      //
      // const res = await fetch(googleScriptURL, {
      //   // redirect: "follow",
      //   method: "POST",
      //   body: JSON.stringify(data),
      //   // mode: "no-cors",
      //   headers: {
      //     "Content-Type": "text/plain;charset=utf-8"
      //   }
      // });
      //
      // console.log("SUCCESSFULLY SUBMITTED", res);

      console.log("SUCCESSFULLY SUBMITTED", response);
      setFormStatus(true);
      setEmail("");
      setTimeout(() => {
        setFormStatus(false);
      }, 1500);
    } catch (e) {
      setLoader(false);
      console.log(e, "error");
    }
  };

  const { t } = useTranslation();
  return (
    <Box
      style={{
        backgroundImage: "url('/images/subscribe-bg.svg')",
        backgroundPosition: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
      // backgroundPosition="bottom right"
    >
      <Container maxW={"1440px"} px={{ base: "20px", md: "100px" }} py={"40px"}>
        <Flex
          alignItems={"center"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box flex={1}>
            <Heading
              fontSize={{ base: "22px", xl: "32px" }}
              textAlign={{ base: "left", md: "left" }}
              lineHeight={{ base: "1.5", xl: "48px" }}
              color={"text.headingWhite"}
              fontWeight={700}
              mb={4}
            >
              {t("SUBSCRIBE_TITLE")}
            </Heading>
            <Text
              mb={{ base: "20px", md: "40px" }}
              fontSize={{ base: "16px", xl: "18px" }}
              textAlign={{ base: "left", md: "left" }}
              color={"#F6F7F9"}
            >
              {t("SUBSCRIBE_SUB_TITLE")}
            </Text>
            {!formStatus ? (
              <HStack
                spacing={{ base: "10px", md: "0" }}
                position={"relative"}
                maxW={"500px"}
                flexDirection={{ base: "column", md: "row" }}
              >
                <Input
                  type={"text"}
                  variant={"primary"}
                  height={"52px"}
                  border={"1px solid #633C0D"}
                  borderRadius={"34px"}
                  // borderTopLeftRadius={"34px"}
                  // borderTopRightRadius={{ base: "34px", md: "0" }}
                  // borderBottomLeftRadius={"34px"}
                  // borderBottomRightRadius={{ base: "34px", md: "0" }}
                  placeholder={t("ENTER_EMAIL")}
                  autoFocus
                  onChange={onChange}
                  defaultValue={email}
                  // color={`${colorMode}.text.700`}
                  isDisabled={false}
                />
                <Button
                  position={{ base: "relative", md: "absolute" }}
                  right={{ base: "0", md: "-20px" }}
                  height={"52px"}
                  width={{ base: "100%", md: "136px" }}
                  isDisabled={validationError}
                  px={{ base: "16px", md: "24px" }}
                  bg={"#1D1306"}
                  onClick={handleSubmit}
                  borderRadius={"36px"}
                  value={"ternary"}
                  transitionDuration={"0.5s"}
                  transitionTimingFunction={"ease"}
                  transitionProperty={"all"}
                  border={"1px solid #1D1306"}
                  _disabled={{
                    _hover: {
                      bg: "#1D1306",
                      color: "#FFFFFF"
                    },
                    cursor: "not-allowed"
                  }}
                  _hover={{
                    bg: "#1D1306",
                    color: "#FFFFFF",
                    borderColor: "#1D1306",
                    transition: "0.5s"
                  }}
                  color="#FFFFFF"
                >
                  {t("SIGN_UP")}
                </Button>
              </HStack>
            ) : (
              <HStack
                maxW={"500px"}
                justifyContent={"center"}
                alignItems={"center"}
                height={"52px"}
                fontSize={"14px"}
                fontWeight={500}
                borderRadius={"34px"}
                bg={"#FFFFFF"}
              >
                <Text> {t("SUCCESS_SIGNUP_NOTE")} </Text>
              </HStack>
            )}
          </Box>
          <Box display={{ base: "none", lg: "block" }}>
            <Image
              src={"/icons/plane.svg"}
              alt={"team-work"}
              width={305}
              height={200}
              // objectFit="cover"
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Subscribe;
