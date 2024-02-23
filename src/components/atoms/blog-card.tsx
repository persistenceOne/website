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
}

const BlogCard = ({
  resourceCTA,
  resourceImage,
  resourceType,
  resourceLink
}: BlogCardInterface) => {
  return (
    <Link href={resourceLink}>
      <Box px={"10px"}>
        <Card w="full" h="100%" borderRadius={20}>
          <Image src={resourceImage} alt="" width={380} height={200} />
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
