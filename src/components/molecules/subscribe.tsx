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
      const googleScriptURL =
        "https://script.google.com/macros/s/AKfycbzoTlwN8lM32r3L-5uWGnzjgb4z6Ll_fCrwgNeCjdIlcF7M50TlYgaRLNWhtyq5_un3/exec";
      const data = { email: email };

      const res = await fetch(googleScriptURL, {
        // redirect: "follow",
        method: "POST",
        body: JSON.stringify(data),
        // mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8"
        }
      });

      console.log("SUCCESSFULLY SUBMITTED", res);

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await res.json();

      // const res = await axios.post(googleScriptURL, data);
      console.log(result, "SUCCESSFULLY SUBMITTED", res);
      setFormStatus(true);
      setTimeout(() => {
        setFormStatus(false);
      }, 1000);
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
        backgroundRepeat: "no-repeat"
        // backgroundSize: "15%"
      }}
      // backgroundPosition="bottom right"
    >
      <Container maxW={"1440px"} px={{ base: "20px", md: "100px" }} py={"30px"}>
        <Flex
          alignItems={"center"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box flex={1}>
            <Heading
              fontSize={{ base: "22px", xl: "32px" }}
              textAlign={{ base: "center", md: "left" }}
              lineHeight={{ base: "1.5", xl: "48px" }}
              color={"text.headingSemiWhite"}
              pr={"12px"}
              fontWeight={700}
            >
              Subscribe To Newsletter
            </Heading>
            <Text color={"text.headingSemiWhite"}>
              Learn more about Persistence One, what it means to be a Persister,
              and how to become one.
            </Text>
            <HStack spacing={"0"} position={"relative"}>
              <Input
                type={"text"}
                flex={1}
                variant={"primary"}
                height={"52px"}
                borderTopLeftRadius={"34px"}
                borderBottomLeftRadius={"34px"}
                placeholder="Email address"
                autoFocus
                onChange={onChange}
                defaultValue={email}
                // color={`${colorMode}.text.700`}
                isDisabled={false}
              />
              <Button
                position={"absolute"}
                right={"-20px"}
                height={"52px"}
                // width={{ base: "100%", md: "auto" }}
                px={{ base: "16px", md: "24px" }}
                bg={"#1D1306"}
                onClick={handleSubmit}
                value={"ternary"}
                transitionDuration={"0.5s"}
                transitionTimingFunction={"ease"}
                transitionProperty={"all"}
                border={"1px solid #1D1306"}
                _hover={{
                  bg: "#FFFFFF",
                  color: "#1D1306",
                  borderColor: "#1D1306",
                  transition: "0.5s"
                }}
                color="#FFFFFF"
              >
                Sign Up
              </Button>
            </HStack>
          </Box>
          <Image
            src={"/icons/plane.svg"}
            alt={"team-work"}
            width={401}
            height={249}
            // objectFit="cover"
          />
        </Flex>
      </Container>
    </Box>
  );
};

export default Subscribe;
