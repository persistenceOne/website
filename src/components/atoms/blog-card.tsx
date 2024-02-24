import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Button, Card, CardBody, CardFooter, Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface BlogCardInterface {
  id: number;
  resourceCTA: string;
  resourceImage: string;
  resourceType: string;
  resourceLink: string;
  width?: string;
}

const BlogCard = ({
  resourceCTA,
  resourceImage,
  resourceType,
  resourceLink,
  width = "full"
}: BlogCardInterface) => {
  return (
    <Link href={resourceLink} target="_blank" rel="noopenner noreferrer">
      <Box px={"10px"}>
        <Card w="full" h="100%" borderRadius={20}>
          <Box
            bgImage={`url(${resourceImage})`}
            w={width}
            h="200px"
            bgPosition="center"
            borderTopLeftRadius={20}
            borderTopRightRadius={20}
            bgSize="cover"
          />
          {/* <Image src={resourceImage} alt="" layout="fill" objectFit="cover" /> */}
          <CardFooter my={-4}>
            <Button variant={"unstyled"} rightIcon={<ExternalLinkIcon />}>
              {resourceCTA}
            </Button>
          </CardFooter>
        </Card>
      </Box>
    </Link>
  );
};

export default BlogCard;
