import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text
} from "@chakra-ui/react";
import Script from "next/script";
import React, { useEffect, useState } from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const TallyForm = (page) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    setLoaded(false);
  }, []);

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
          Partner With Us
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
          Connect With Us
        </Button>
      )}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxWidth={"500px"} bg={"#FCF7F1"}>
          <ModalHeader textAlign="center">
            Partner with Persistence
            <Text fontWeight={"500"} fontSize={"14px"} color={"#423f40cc"}>
              We&apos;re looking for partners who want to collaborate in
              creating a powerful ecosystem on Bitcoin.
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
    </>
  );
};

export default TallyForm;
