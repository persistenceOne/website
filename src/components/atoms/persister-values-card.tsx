import { Box, Card, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
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
    <Card borderRadius={20} pt={12} px={8}>
      <VStack pos={"relative"} mt={8} mb={6} spacing={2} align={"flex-start"}>
        <Heading color={"#3D3D3D"} fontSize={26} fontWeight={600}>
          {title}
        </Heading>
        <Text color={"#3D3D3DB2"} fontSize={18} fontWeight={400}>
          {description}
        </Text>
      </VStack>
      <Flex
        w={"95px"}
        h={"95px"}
        bg={"primary.red"}
        pos={"absolute"}
        justify={"center"}
        align={"center"}
        top={-12}
        borderRadius={"50%"}
        left={8}
      >
        <Image src={icon} alt={title} width={48} height={48} />
      </Flex>
    </Card>
  );
};

export default PersisterValuesCard;
