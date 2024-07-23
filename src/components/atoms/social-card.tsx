import { Stack, Text, useMediaQuery, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SocialCard = ({
  title,
  description,
  image,
  link
}: {
  title: string;
  description: string;
  image: string;
  link: string;
}) => {
  const [isMobile] = useMediaQuery("(max-width: 500px)");
  return (
    <Link href={link} target="_blank" rel="noreferrer" key={title}>
      <Stack
        bg={"#FEFEFE"}
        borderRadius={10}
        px={{ base: "20px", md: "24px" }}
        py={{ base: "20px", md: "28px" }}
        borderWidth={"1px"}
        borderColor={"#FEFEFE"}
        cursor={"pointer"}
        boxShadow={
          "0px 12px 16px -4px rgba(27, 27, 27, 0.08), 0px 4px 6px -2px rgba(27, 27, 27, 0.03)"
        }
        // _hover={{ borderColor: "#E59636" }}
        direction={{ base: "column", md: "row" }}
      >
        <Image
          src={image}
          alt={title}
          width={isMobile ? 32 : 45}
          height={isMobile ? 32 : 45}
        />
        <VStack
          align={"flex-start"}
          justify={"center"}
          gap={0}
          ml={{ base: "0", md: "12px" }}
        >
          <Text color={"#3D3D3D"} fontSize={18} fontWeight={600}>
            {title}
          </Text>
          <Text color={"#423F40"} fontSize={14} fontWeight={400}>
            {description}
          </Text>
        </VStack>
      </Stack>
    </Link>
  );
};

export default SocialCard;
