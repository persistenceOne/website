import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Button, Card, CardBody, CardFooter } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({
  resourceCTA,
  resourceImage,
  resourceType,
  resourceLink
}) => {
  return (
    <Link href={resourceLink}>
      <Card w="full" h="100%" borderRadius={20}>
        <Image src={resourceImage} alt="" width={380} height={200} />
        <CardFooter my={-4}>
          <Button variant={"unstyled"} rightIcon={<ExternalLinkIcon />}>
            {resourceCTA}
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default BlogCard;
