see import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Button,
  Card,
  CardBody,
  Image,
  CardFooter,
  Box,
  Link
} from "@chakra-ui/react";
import React from "react";

export interface BlogCardInterface {
  id: number;
  resourceCTA: string;
  resourceImage: string;
  resourceType: string;
  resourceLink: string;
  width?: { base: string; md: string } | string;
}

const BlogCard = ({
  resourceCTA,
  resourceImage,
  resourceType,
  resourceLink,
  width = "full"
}: BlogCardInterface) => {
  return (
    <Box flex={"1"}>
      <Link
        href={resourceLink}
        minWidth={"300"}
        maxWidth={"400px"}
        display={"block"}
        mx={"auto"}
        target="_blank"
        rel="noopenner noreferrer"
      >
        <Box>
          <Card w="full" h="100%" borderRadius={20} my={1}>
            {/*<Box*/}
            {/*  bgImage={`url(${resourceImage})`}*/}
            {/*  w={width}*/}
            {/*  h="200px"*/}
            {/*  bgPosition="center"*/}
            {/*  borderTopLeftRadius={20}*/}
            {/*  borderTopRightRadius={20}*/}
            {/*  bgSize="cover"*/}
            {/*/>*/}
            <Box>
              <Image
                src={resourceImage}
                width={width}
                borderTopLeftRadius={20}
                borderTopRightRadius={20}
                maxHeight={"240px"}
                alt={"Persistence Logo"}
              />
            </Box>

            {/* <Image src={resourceImage} alt="" layout="fill" objectFit="cover" /> */}
            <CardFooter my={-4}>
              <Button
                _hover={{ color: "#E59636" }}
                variant={"unstyled"}
                rightIcon={<ExternalLinkIcon />}
              >
                {resourceCTA}
              </Button>
            </CardFooter>
          </Card>
        </Box>
      </Link>
    </Box>
  );
};

export default BlogCard;
