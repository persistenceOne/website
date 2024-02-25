import {
  Accordion,
  AccordionButton,
  Box,
  AccordionItem,
  AccordionPanel
} from "@chakra-ui/react";
import React from "react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";

interface Props {
  list: {
    title: string;
    content: any;
  }[];
}

const AccordionList = ({ list }: Props) => {
  return (
    <Accordion allowToggle>
      {list.map((item, index) => (
        <AccordionItem
          key={index}
          borderTop={"0px"}
          borderBottom={"1px"}
          borderColor={"#DBE4EF"}
          py={"24px"}
        >
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton
                  _hover={{ bg: "transparent" }}
                  py={""}
                  color={"text.blackHigh"}
                  fontSize={"18px"}
                  fontWeight={isExpanded ? 600 : 500}
                >
                  <Box as="span" flex="1" textAlign="left">
                    {item.title}
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={"0"}>{item.content}</AccordionPanel>
            </>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionList;
