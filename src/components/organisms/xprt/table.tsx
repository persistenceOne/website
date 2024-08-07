import { ColumnDef } from "@tanstack/table-core";
import React from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Link from "next/link";
import CustomTable from "@/components/molecules/table";
import { numberFormat } from "@/utils/helpers";

export type PoolData = {
  token1: string;
  token1Img: string;
  token2: string;
  token2Img: string;
  tvl: string | number;
  apr: string;
  link: string;
  linkLable: string;
};

interface Props {
  defiCardsData: PoolData[];
}
const DefiTable = ({ defiCardsData }: Props) => {
  const columns = React.useMemo<ColumnDef<PoolData>[]>(
    () => [
      {
        header: "Pool",
        enableSorting: false,
        accessorKey: "pool",
        accessorFn: (row) => row.token1,
        cell: ({ row }) => {
          return (
            <Flex alignItems={"center"}>
              <Box
                display="flex"
                pos="relative"
                alignItems="center"
                w={"54px"}
                mr={"10px"}
              >
                <Image
                  src={row.original.token1Img}
                  alt={row.original.token1}
                  width={"32px"}
                  height={"32px"}
                />
                <Image
                  src={row.original.token2Img}
                  alt={row.original.token2}
                  width={"32px"}
                  height={"32px"}
                  position={"absolute"}
                  right={"0px"}
                />
              </Box>
              <Box>
                <Text
                  fontWeight={600}
                  fontSize={"20px"}
                  lineHeight={"32px"}
                  color={"#633C0D"}
                >
                  {row.original.token1}/{row.original.token2}
                </Text>
              </Box>
            </Flex>
          );
        }
      },
      {
        header: "TVL",
        enableSorting: true,
        accessorKey: "tvl",
        sortingFn: "alphanumericCaseSensitive",
        accessorFn: (row) => row.tvl,
        cell: ({ row }) => {
          return (
            <Text fontSize={"20px"} color={"#1F1E1C"} fontWeight={500}>
              ${numberFormat(Number(row.original.tvl), 2)}
            </Text>
          );
        }
      },
      {
        header: "APR",
        enableSorting: true,
        accessorKey: "apr",
        sortingFn: "alphanumericCaseSensitive",
        accessorFn: (row) => row.apr,
        cell: ({ row }) => {
          return (
            <Text fontSize={"20px"} color={"#1F1E1C"} fontWeight={500}>
              {Number(row.original.apr).toFixed(2)}%
            </Text>
          );
        }
      },
      {
        header: "Provide Liquidity",
        enableSorting: false,
        accessorFn: (row) => row.apr,
        cell: ({ row }) => {
          return (
            <Link
              href={row.original.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant={"secondary"}
                color={"#E59636"}
                bg={"transparent"}
                h={"36px"}
                w={"161px"}
                px={"12px"}
                fontWeight={400}
                fontSize={{ base: "14px", md: "18px" }}
                rightIcon={<ArrowForwardIcon />}
              >
                {row.original.linkLable}
              </Button>
            </Link>
          );
        }
      }
    ],
    []
  );

  console.log(defiCardsData, "");
  return <CustomTable data={defiCardsData} columns={columns} />;
};

export default DefiTable;
