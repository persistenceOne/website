import {
  Card,
  Flex,
  Image,
  Heading,
  Text,
  VStack
} from "@chakra-ui/react";
import React from "react";

export interface PersisterValuesCardInterface {
  title: string;
  description: string;
  icon: string;
}

const PersisterValuesCard = ({
  title,
  description,
  icon
}: PersisterValuesCardInterface) => {
  return (
    <Card borderRadius={20} pt={12} pb={2} px={8}>
      <VStack
        pos={"relative"}
        mt={{ base: 0, xl: 8 }}
        mb={6}
        spacing={2}
        align={"flex-start"}
      >
        <Heading
          color={"#3D3D3D"}
          fontSize={{ base: "18px", xl: "26px" }}
          lineHeight={{ base: "32px", xl: "39px" }}
          fontWeight={600}
        >
          {title}
        </Heading>
        <Text
          color={"rgba(8, 0, 20, 0.80)"}
          fontSize={{ base: "14px", xl: "18px" }}
          lineHeight={{ base: "24px", xl: "27px" }}
          fontWeight={400}
        >
          {description}
        </Text>
      </VStack>
      <Flex
        w={{ base: "45px", xl: "95px" }}
        h={{ base: "45px", xl: "95px" }}
        bg={"primary.red"}
        pos={"absolute"}
        justify={"center"}
        align={"center"}
        top={{ base: -5, xl: -12 }}
        borderRadius={"50%"}
        left={8}
      >
        <Image
          src={icon}
          alt={title}
          width={{ base: "24px", xl: "48px" }}
          height={{ base: "24px", xl: "48px" }}
        />
      </Flex>
    </Card>
  );
};

export default PersisterValuesCard;
