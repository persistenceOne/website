import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text
} from "@chakra-ui/react";
import Script from "next/script";
import React from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useTranslation } from "next-export-i18n";

const TallyForm = ({ page }) => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  // @ts-ignore
  return (
    <>
      {page === "home" ? (
        <Button
          w={{ base: "100%", md: "235px" }}
          h={"46px"}
          variant={"secondary"}
          color={"#FFFFFF"}
          rightIcon={<ArrowForwardIcon />}
          onClick={onOpen}
        >
          {t("PARTNER_WITH_US")}
        </Button>
      ) : (
        <Button
          color={"#FFFFFF"}
          w={{ base: "100%", md: "246px" }}
          h={"52px"}
          variant={"ternary"}
          bg="#1D1306"
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
          rightIcon={<ArrowForwardIcon />}
          onClick={onOpen}
        >
          {t("CONNECT_WITH_US")}
        </Button>
      )}
      {isOpen ? (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent maxWidth={"500px"} bg={"#FCF7F1"}>
            <ModalHeader textAlign="center">
              {t("PARTNER_WITH_PERSISTENCE")}
              <Text fontWeight={"500"} fontSize={"14px"} color={"#423f40cc"}>
                {t("CONTACT_FORM_SUBTEXT")}
              </Text>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody className="tally-form">
              <iframe
                data-tally-src="https://tally.so/embed/mBB5pK?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                title="Newsletter subscribers"
              ></iframe>
              <Script
                // @ts-ignore
                src={"https://tally.so/widgets/embed.js"}
                onReady={() => Tally.loadEmbeds()}
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      ) : null}
    </>
  );
};

export default TallyForm;
