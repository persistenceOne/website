import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Button, Card, Img, CardFooter, Box, Link } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "next-export-i18n";

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
  const { t } = useTranslation();
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
            <Box>
              <Img
                loading={"lazy"}
                src={resourceImage}
                width={width}
                borderTopLeftRadius={20}
                borderTopRightRadius={20}
                height={"225px"}
                alt={"Persistence Logo"}
              />
            </Box>
            <CardFooter my={-4}>
              <Button
                _hover={{ color: "#E59636" }}
                variant={"unstyled"}
                rightIcon={<ExternalLinkIcon />}
              >
                {t(resourceCTA)}
              </Button>
            </CardFooter>
          </Card>
        </Box>
      </Link>
    </Box>
  );
};

export default BlogCard;
